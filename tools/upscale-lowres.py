#!/usr/bin/env python
"""Upscale product images that the site renders larger than their native size.

The product page shows the main photo in a ~600px box, so anything smaller is
stretched by the browser using cheap bilinear filtering. Resampling here with
Lanczos plus a light unsharp mask gives a visibly cleaner result.

This cannot invent detail that was never captured -- a 52x52 source will still
look soft at 600px. It only removes the browser's crude stretching.

    python tools/upscale-lowres.py [--dry]

Originals are copied to tools/lowres-originals/ first (git does not cover the
~60 files that were relocated during the bundle splits).
"""
import os
import shutil
import sys
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)
DRY = "--dry" in sys.argv

TARGET = 600          # long edge the site displays at
BACKUP = os.path.join("tools", "lowres-originals")

paths = [l.strip() for l in open(os.path.join("tools", "lowres-paths.txt"), encoding="utf-8") if l.strip()]

done = skipped = 0
before_bytes = after_bytes = 0
factors = []

for src in paths:
    if not os.path.exists(src):
        skipped += 1
        continue

    before = os.path.getsize(src)
    im = Image.open(src)
    w, h = im.size
    longest = max(w, h)
    if longest >= TARGET:
        skipped += 1
        continue

    scale = TARGET / longest
    new = (max(1, round(w * scale)), max(1, round(h * scale)))

    if not DRY:
        dest = os.path.join(BACKUP, src.replace("/", os.sep))
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        if not os.path.exists(dest):
            shutil.copy2(src, dest)

        fmt = (im.format or "PNG").upper()
        out = im.convert("RGBA" if fmt == "PNG" else "RGB")
        out = out.resize(new, Image.LANCZOS)
        # gentle sharpening: recovers perceived crispness without ringing halos
        out = out.filter(ImageFilter.UnsharpMask(radius=1.2, percent=85, threshold=3))

        if fmt in ("JPEG", "JPG"):
            out.save(src, "JPEG", quality=92, optimize=True, progressive=True)
        else:
            out.save(src, "PNG", optimize=True)

    after = os.path.getsize(src) if not DRY else before
    before_bytes += before
    after_bytes += after
    factors.append(scale)
    done += 1

print("DRY RUN" if DRY else "APPLIED")
print(f"  upscaled : {done}")
print(f"  skipped  : {skipped}")
if factors:
    print(f"  scale    : {min(factors):.1f}x - {max(factors):.1f}x  (avg {sum(factors)/len(factors):.1f}x)")
print(f"  size     : {before_bytes/1e6:.1f} MB -> {after_bytes/1e6:.1f} MB")
if not DRY:
    print(f"  originals backed up to {BACKUP}/")
