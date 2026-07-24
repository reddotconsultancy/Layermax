#!/usr/bin/env node
// Builds ownerview/ — every image that had to be upscaled, worst first, rendered at
// the size the product page actually shows it so the blur is visible as-is.
//   node tools/build-blurry-view.js
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);
global.window = { location: { pathname: '/' } };
const P = require(path.join(ROOT, 'pages', 'products-data.js'));

const BACKUP = path.join('tools', 'lowres-originals');
const paths = fs.readFileSync(path.join(__dirname, 'lowres-paths.txt'), 'utf8')
  .split('\n').map(s => s.trim()).filter(Boolean);

function dims(file) {
  const b = fs.readFileSync(file);
  if (b.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])))
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  let i = 2;
  while (i < b.length - 9) {
    if (b[i] !== 0xff) { i++; continue; }
    const m = b[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
      return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
    i += 2 + b.readUInt16BE(i + 2);
  }
  return null;
}

const owner = {};
P.forEach(p => (p.images || []).forEach((f, i) => { owner[f] = { id: p.id, cat: p.category, isMain: i === 0, n: p.images.length }; }));

const rows = [];
paths.forEach(src => {
  if (!fs.existsSync(src)) return;                       // deleted since
  const bak = path.join(BACKUP, src);
  if (!fs.existsSync(bak)) return;
  const o = dims(bak);
  if (!o) return;
  const own = owner[src];
  if (!own) return;                                      // no longer referenced
  const up = +(600 / Math.max(o.w, o.h)).toFixed(1);
  const tier = up >= 4 ? 'severe' : up >= 3 ? 'heavy' : up >= 2 ? 'moderate' : up >= 1.5 ? 'mild' : 'slight';
  rows.push({ src, o, up, tier, ...own });
});

const TIERS = [
  ['severe', 'Severe — blown up 4× or more', 'Source under 150px. Nothing can fix these but a new photo.'],
  ['heavy', 'Heavy — 3 to 4×', 'Source 150–200px. Visibly soft.'],
  ['moderate', 'Moderate — 2 to 3×', 'Source 200–300px. Soft but usable.'],
  ['mild', 'Mild — 1.5 to 2×', 'Barely noticeable.'],
  ['slight', 'Slight — under 1.5×', 'Effectively fine.']
];

const OUT = 'ownerview';
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const safe = s => s.replace(/[^a-zA-Z0-9._-]+/g, '_');
rows.sort((a, b) => b.up - a.up || (b.isMain - a.isMain));
rows.forEach((r, n) => {
  const ext = path.extname(r.src);
  r.name = `${String(n + 1).padStart(3, '0')}__${r.tier}__${r.up}x__${r.isMain ? 'MAIN' : 'gal'}__${safe(r.id)}${ext}`;
  fs.copyFileSync(r.src, path.join(OUT, r.name));
});

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const card = r => `  <div class="card ${r.tier}${r.isMain ? ' main' : ''}">
    <div class="shot"><img loading="lazy" src="${esc(r.name)}" alt=""></div>
    <div class="meta">
      <div><span class="n">#${r.name.slice(0, 3)}</span> <span class="up">${r.up}×</span>${r.isMain ? ' <span class="badge">MAIN</span>' : ''}</div>
      <div class="prod"><a href="../pages/product.html?id=${encodeURIComponent(r.id)}" target="_blank" rel="noopener">${esc(r.id)}</a></div>
      <div><code>original ${r.o.w}&times;${r.o.h}px${r.isMain ? '' : ` · 1 of ${r.n}`}</code></div>
    </div>
  </div>`;

const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>LayerMax — blurry images</title>
<style>
 :root{color-scheme:light dark}*{box-sizing:border-box}
 body{margin:0;padding:26px;font:15px/1.5 -apple-system,"Segoe UI",Helvetica,Arial,sans-serif;background:#f6f7f9;color:#12212f}
 h1{font-size:24px;margin:0 0 4px}h2{font-size:18px;margin:32px 0 2px}
 .sub{color:#5a6675;margin:0 0 14px}
 .toc{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 8px}
 .toc a{padding:5px 12px;border-radius:999px;background:#e8f0fe;color:#0a2c5c;font-size:13px;font-weight:700;text-decoration:none}
 .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px}
 .card{background:#fff;border:1px solid #e3e7ec;border-radius:12px;overflow:hidden}
 .card.main{border-color:#e0a800;border-width:2px}
 .card.severe .up{background:#a32020;color:#fff}
 .shot{height:230px;display:flex;align-items:center;justify-content:center;padding:6px;
       background:repeating-conic-gradient(#eceff3 0% 25%,#fff 0% 50%) 50%/16px 16px}
 .shot img{width:100%;height:100%;object-fit:contain}
 .meta{padding:9px 11px;font-size:12px;border-top:1px solid #eef1f4}
 .n{font-weight:800;color:#0a2c5c}.prod{font-weight:600;margin:2px 0;font-size:12px}
 code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px;color:#7a8694}
 a{color:#0a5cc8;font-weight:600;text-decoration:none}a:hover{text-decoration:underline}
 .up{display:inline-block;padding:2px 8px;border-radius:999px;background:#fdeaea;color:#a32020;font-weight:800;font-size:11px}
 .badge{display:inline-block;padding:2px 7px;border-radius:999px;background:#fff4d6;color:#8a6500;font-weight:800;font-size:11px}
 @media (prefers-color-scheme:dark){body{background:#10151b;color:#e6ebf1}.card{background:#171d25;border-color:#262f3a}
  .meta{border-color:#222a34}.shot{background:repeating-conic-gradient(#1c2430 0% 25%,#141a21 0% 50%) 50%/16px 16px}
  a{color:#6fb0ff}.up{background:#3a1c1c;color:#ff9a9a}.badge{background:#3a3016;color:#ffd76f}.toc a{background:#1d3557;color:#cfe2ff}}
</style></head><body>
<h1>Every blurry image</h1>
<p class="sub"><strong>${rows.length}</strong> images had to be enlarged to fill the 600px product display.
Each is shown here at that size — exactly what a customer sees. Gold border = the product's main photo
(also its catalog thumbnail).</p>
<div class="toc">${TIERS.filter(([t]) => rows.some(r => r.tier === t)).map(([t, label]) =>
  `<a href="#${t}">${esc(label.split('—')[0].trim())} (${rows.filter(r => r.tier === t).length})</a>`).join('')}</div>
${TIERS.map(([t, label, note]) => {
  const items = rows.filter(r => r.tier === t);
  if (!items.length) return '';
  return `<h2 id="${t}">${esc(label)} <span class="sub">— ${items.length}, of which ${items.filter(i => i.isMain).length} main photos</span></h2>
<p class="sub">${esc(note)}</p>
<div class="grid">
${items.map(card).join('\n')}
</div>`;
}).join('\n')}
</body></html>`;

fs.writeFileSync(path.join(OUT, 'index.html'), html);
console.log(`ownerview/ built — ${rows.length} images`);
TIERS.forEach(([t, label]) => {
  const n = rows.filter(r => r.tier === t).length;
  if (n) console.log(`  ${String(n).padStart(3)}  ${label}  (${rows.filter(r => r.tier === t && r.isMain).length} main)`);
});
