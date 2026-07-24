#!/usr/bin/env python
"""Iterative back-projection super-resolution for the low-resolution product shots.

Plain Lanczos just interpolates. Back-projection actually uses the low-res original
as ground truth: upscale, shrink the result back down, measure how far it drifted
from the true pixels, and push that error back into the high-res estimate. Repeat.
Each pass tightens edges that interpolation smears.

No trained model and no download -- numpy + OpenCV only. It still cannot invent
texture that was never captured, but it beats a straight resample.

    python tools/superres.py --test          # 4 samples -> ownerview/ for comparison
    python tools/superres.py --apply         # process every image in bed-rescue.txt
"""
import os
import sys
import numpy as np
import cv2
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
TARGET = 600
ITERS = 14
LAMBDA = 0.85           # how much of the measured error to push back each pass


def _bp(chan, target_hw, iters=ITERS):
    """Back-project one float32 channel up to target_hw."""
    lo = chan.astype(np.float32)
    hi = cv2.resize(lo, (target_hw[1], target_hw[0]), interpolation=cv2.INTER_LANCZOS4)
    for _ in range(iters):
        down = cv2.resize(hi, (lo.shape[1], lo.shape[0]), interpolation=cv2.INTER_AREA)
        err = lo - down
        # spread the error back over the high-res grid
        err_up = cv2.resize(err, (target_hw[1], target_hw[0]), interpolation=cv2.INTER_CUBIC)
        hi += LAMBDA * err_up
    return hi


def upscale(src_path, target=TARGET):
    im = Image.open(src_path)
    has_alpha = im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info)
    im = im.convert('RGBA' if has_alpha else 'RGB')
    arr = np.array(im)

    h, w = arr.shape[:2]
    scale = target / max(w, h)
    nh, nw = max(1, round(h * scale)), max(1, round(w * scale))

    out = np.zeros((nh, nw, arr.shape[2]), np.float32)
    for c in range(arr.shape[2]):
        out[:, :, c] = _bp(arr[:, :, c], (nh, nw))
    out = np.clip(out, 0, 255)

    # edge-preserving cleanup on colour only: kills back-projection ringing,
    # keeps the edges the back-projection just recovered
    rgb = out[:, :, :3].astype(np.uint8)
    smooth = cv2.bilateralFilter(rgb, 7, 30, 7)
    detail = cv2.addWeighted(rgb, 1.45, cv2.GaussianBlur(rgb, (0, 0), 1.4), -0.45, 0)
    rgb = cv2.addWeighted(smooth, 0.4, detail, 0.6, 0)

    if arr.shape[2] == 4:
        alpha = np.clip(out[:, :, 3], 0, 255).astype(np.uint8)
        # harden the cut-out edge so it doesn't look fuzzy against the page
        alpha = np.where(alpha > 128, 255, np.where(alpha < 24, 0, alpha)).astype(np.uint8)
        return Image.fromarray(np.dstack([rgb, alpha]), 'RGBA')
    return Image.fromarray(rgb, 'RGB')


def lanczos(src_path, target=TARGET):
    im = Image.open(src_path)
    im = im.convert('RGBA' if im.mode in ('RGBA', 'LA') else 'RGB')
    w, h = im.size
    s = target / max(w, h)
    return im.resize((max(1, round(w * s)), max(1, round(h * s))), Image.LANCZOS)


def load_jobs():
    jobs = []
    for line in open(os.path.join('tools', 'bed-rescue.txt'), encoding='utf-8'):
        line = line.strip()
        if not line:
            continue
        live, backup, w, h, up, pid = line.split('|')
        jobs.append(dict(live=live, backup=backup, w=int(w), h=int(h), up=float(up), id=pid))
    return jobs


if __name__ == '__main__':
    jobs = load_jobs()

    if '--test' in sys.argv:
        os.makedirs('ownerview', exist_ok=True)
        picks = jobs[:2] + jobs[len(jobs) // 2:len(jobs) // 2 + 2]
        cards = []
        for i, j in enumerate(picks):
            lanczos(j['backup']).save(f'ownerview/t{i}_lanczos.png')
            upscale(j['backup']).save(f'ownerview/t{i}_bp.png')
            cards.append(
                f"<div><h3>{j['id']} · {j['up']}× · original {j['w']}×{j['h']}</h3><div class=pair>"
                f"<figure><img src='t{i}_lanczos.png'><figcaption>Lanczos (what's live now)</figcaption></figure>"
                f"<figure><img src='t{i}_bp.png'><figcaption>Back-projection ({ITERS} passes)</figcaption></figure>"
                "</div></div>")
        open('ownerview/index.html', 'w', encoding='utf-8').write(
            "<!DOCTYPE html><meta charset=UTF-8><title>Super-resolution test</title>"
            "<style>:root{color-scheme:light dark}body{font:15px system-ui;padding:24px;background:#10151b;color:#e6ebf1}"
            "h1{font-size:22px}.pair{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:26px}"
            "figure{margin:0}img{width:100%;height:420px;object-fit:contain;"
            "background:repeating-conic-gradient(#1c2430 0 25%,#141a21 0 50%) 50%/16px 16px;"
            "border:1px solid #262f3a;border-radius:10px}figcaption{font-size:12px;color:#93a1b1;margin-top:6px}"
            "h3{font-size:14px;color:#6fb0ff;margin:20px 0 8px}</style>"
            "<h1>Lanczos vs back-projection</h1>"
            "<p style='color:#93a1b1'>Both from the same low-res original, shown at 600px.</p>" + ''.join(cards))
        print(f'test page built with {len(picks)} comparisons -> ownerview/index.html')

    elif '--apply' in sys.argv:
        done = 0
        for j in jobs:
            out = upscale(j['backup'])
            out.save(j['live'], 'PNG', optimize=True)
            done += 1
        print(f'back-projected {done} bed images from their originals')

    else:
        print(__doc__)
