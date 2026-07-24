#!/usr/bin/env node
// Builds ownerview/ — a contact sheet of images that are too low-resolution for the
// space the site displays them in. Reads tools/lowres-images.txt (see find-lowres.js).
//   node tools/build-ownerview.js [grade]     grade = unusable | bad | soft | all
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);

const WANT = process.argv[2] || 'unusable';
const all = fs.readFileSync(path.join(__dirname, 'lowres-images.txt'), 'utf8')
  .split('\n').map(l => l.trim()).filter(Boolean)
  .map(l => { const [id, src, grade, upscale, w, h, main] = l.split('|');
    return { id, src, grade, upscale: +upscale, w: +w, h: +h, isMain: main === 'MAIN' }; });
const rows = (WANT === 'all' ? all : all.filter(r => r.grade === WANT))
  .sort((a, b) => (b.isMain - a.isMain) || b.upscale - a.upscale);

const OUT = 'ownerview';
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const safe = s => s.replace(/[^a-zA-Z0-9._-]+/g, '_');
rows.forEach((r, n) => {
  const ext = path.extname(r.src);
  r.name = `${String(n + 1).padStart(2, '0')}__${r.isMain ? 'MAIN' : 'gallery'}__${r.upscale}x__${safe(r.id)}__${safe(path.basename(r.src, ext))}${ext}`;
  fs.copyFileSync(r.src, path.join(OUT, r.name));
});

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const mains = rows.filter(r => r.isMain), gals = rows.filter(r => !r.isMain);

const card = r => `  <div class="card${r.isMain ? ' main' : ''}">
    <div class="shot"><img loading="lazy" src="${esc(r.name)}" alt=""></div>
    <div class="meta">
      <div><span class="n">#${r.name.slice(0, 2)}</span>${r.isMain ? ' <span class="badge">MAIN PHOTO</span>' : ''} <span class="up">${r.upscale}× blown up</span></div>
      <div class="prod"><a href="../pages/product.html?id=${encodeURIComponent(r.id)}" target="_blank" rel="noopener">${esc(r.id)}</a></div>
      <div><code>${esc(path.basename(r.src))}</code></div>
      <div><code>${r.w}&times;${r.h}px &rarr; shown at ~600px</code></div>
    </div>
  </div>`;

const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>LayerMax — low-resolution images</title>
<style>
 :root{color-scheme:light dark}*{box-sizing:border-box}
 body{margin:0;padding:28px;font:15px/1.5 -apple-system,"Segoe UI",Helvetica,Arial,sans-serif;background:#f6f7f9;color:#12212f}
 h1{font-size:24px;margin:0 0 4px}h2{font-size:18px;margin:34px 0 6px}
 .sub{color:#5a6675;margin:0 0 18px}
 .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px}
 .card{background:#fff;border:1px solid #e3e7ec;border-radius:12px;overflow:hidden}
 .card.main{border-color:#e0a800;border-width:2px}
 .shot{height:210px;display:flex;align-items:center;justify-content:center;padding:8px;
       background:repeating-conic-gradient(#eceff3 0% 25%,#fff 0% 50%) 50%/18px 18px}
 .shot img{width:100%;height:100%;object-fit:contain}
 .meta{padding:10px 12px;font-size:12px;border-top:1px solid #eef1f4}
 .n{font-weight:800;color:#0a2c5c}.prod{font-weight:600;margin:2px 0}
 code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:#7a8694;word-break:break-all}
 a{color:#0a5cc8;font-weight:600;text-decoration:none}a:hover{text-decoration:underline}
 .up{display:inline-block;padding:2px 8px;border-radius:999px;background:#fdeaea;color:#a32020;font-weight:700;font-size:11px}
 .badge{display:inline-block;padding:2px 8px;border-radius:999px;background:#fff4d6;color:#8a6500;font-weight:800;font-size:11px}
 @media (prefers-color-scheme:dark){body{background:#10151b;color:#e6ebf1}.card{background:#171d25;border-color:#262f3a}
  .meta{border-color:#222a34}.shot{background:repeating-conic-gradient(#1c2430 0% 25%,#141a21 0% 50%) 50%/18px 18px}
  a{color:#6fb0ff}.up{background:#3a1c1c;color:#ff9a9a}.badge{background:#3a3016;color:#ffd76f}}
</style></head><body>
<h1>Images too small for the space they're shown in</h1>
<p class="sub">The product page displays the main photo at about <strong>600px</strong>. These files are smaller than that,
so the browser stretches them and they look soft or blocky. Each is shown here at the size the site actually renders it &mdash;
what you see is what a customer sees. <strong>${rows.length}</strong> images, grade: <strong>${esc(WANT)}</strong>.</p>
${mains.length ? `<h2>Main product photo <span class="sub">— ${mains.length} · these also appear in the catalog grid</span></h2>
<div class="grid">
${mains.map(card).join('\n')}
</div>` : ''}
${gals.length ? `<h2>Gallery photo <span class="sub">— ${gals.length}</span></h2>
<div class="grid">
${gals.map(card).join('\n')}
</div>` : ''}
</body></html>`;

fs.writeFileSync(path.join(OUT, 'index.html'), html);
console.log(`ownerview/ built — ${rows.length} images (grade: ${WANT})`);
console.log(`  ${mains.length} are a product's MAIN photo`);
console.log(`  ${gals.length} are gallery-only`);
