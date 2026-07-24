#!/usr/bin/env node
// Full duplicate audit — writes tools/duplicates-report.html and prints a summary.
//   node tools/find-duplicates.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);
global.window = { location: { pathname: '/' } };
const P = require(path.join(ROOT, 'pages', 'products-data.js'));

const H = f => crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex');
const kb = n => (n / 1024).toFixed(0);
const mb = n => (n / 1e6).toFixed(1);

// ---- gather ----
const all = [];
(function walk(d) {
  fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const f = d + '/' + e.name;
    e.isDirectory() ? walk(f) : /\.(png|jpg|jpeg|svg|webp)$/i.test(f) && all.push(f);
  });
})('assets');

const hash = {}, size = {};
all.forEach(f => { hash[f] = H(f); size[f] = fs.statSync(f).size; });

const referenced = new Set();
const owner = {};
P.forEach(p => (p.images || []).forEach(f => {
  referenced.add(f);
  (owner[f] = owner[f] || []).push(p.id);
}));

const byHash = {};
all.forEach(f => (byHash[hash[f]] = byHash[hash[f]] || []).push(f));

// ---- A. products with identical image sets ----
const sig = {};
P.forEach(p => { sig[p.id] = (p.images || []).map(f => hash[f]); });
const bySet = {};
P.forEach(p => {
  const k = [...new Set(sig[p.id])].sort().join(',');
  (bySet[k] = bySet[k] || []).push(p);
});
const identicalSets = Object.values(bySet).filter(v => v.length > 1);

// ---- B. same image repeated inside one product ----
const intra = P.filter(p => new Set(sig[p.id]).size < sig[p.id].length)
  .map(p => ({ id: p.id, total: sig[p.id].length, unique: new Set(sig[p.id]).size }));

// ---- C. partial overlap between products ----
const hashToProducts = {};
P.forEach(p => new Set(sig[p.id]).forEach(h => (hashToProducts[h] = hashToProducts[h] || new Set()).add(p.id)));
const pairCount = {};
Object.values(hashToProducts).forEach(set => {
  const ids = [...set];
  for (let i = 0; i < ids.length; i++)
    for (let j = i + 1; j < ids.length; j++)
      { const k = [ids[i], ids[j]].sort().join('|'); pairCount[k] = (pairCount[k] || 0) + 1; }
});
const setKey = id => [...new Set(sig[id])].sort().join(',');
const partial = Object.entries(pairCount)
  .filter(([k]) => { const [a, b] = k.split('|'); return setKey(a) !== setKey(b); })
  .map(([k, n]) => { const [a, b] = k.split('|'); return { a, b, shared: n, aN: sig[a].length, bN: sig[b].length }; })
  .sort((x, y) => y.shared - x.shared);

// ---- D. orphans ----
const orphans = all.filter(f => !referenced.has(f));
const refHashes = new Set([...referenced].map(f => hash[f]));
const orphanDupes = orphans.filter(f => refHashes.has(hash[f]));
const orphanUnique = [];
const seen = new Set();
orphans.filter(f => !refHashes.has(hash[f])).forEach(f => { if (!seen.has(hash[f])) { seen.add(hash[f]); orphanUnique.push(f); } });

// ---- E. same folder slug under several category dirs ----
const folder = {};
fs.readdirSync('assets/products').forEach(c => {
  const d = 'assets/products/' + c;
  if (!fs.statSync(d).isDirectory()) return;
  fs.readdirSync(d).forEach(slug => (folder[slug] = folder[slug] || []).push(c));
});
const multiFolder = Object.entries(folder).filter(([, v]) => v.length > 1)
  .map(([slug, cats]) => ({ slug, cats }));

// ---- F/G. text duplicates ----
const byName = {};
P.forEach(p => (byName[p.name.toLowerCase().trim()] = byName[p.name.toLowerCase().trim()] || []).push(p.id));
const dupNames = Object.entries(byName).filter(([, v]) => v.length > 1);
const byDesc = {};
P.forEach(p => { if (p.description) (byDesc[p.description.toLowerCase().trim()] = byDesc[p.description.toLowerCase().trim()] || []).push(p.id); });
const dupDescs = Object.entries(byDesc).filter(([, v]) => v.length > 1).sort((a, b) => b[1].length - a[1].length);

// ---- totals ----
const dupGroups = Object.entries(byHash).filter(([, v]) => v.length > 1);
let redundant = 0, wasted = 0;
dupGroups.forEach(([, v]) => { redundant += v.length - 1; wasted += size[v[0]] * (v.length - 1); });
const totalBytes = all.reduce((a, f) => a + size[f], 0);

const summary = [
  ['Image files on disk', all.length, mb(totalBytes) + ' MB'],
  ['Unique by content', Object.keys(byHash).length, ''],
  ['Redundant copies', redundant, mb(wasted) + ' MB reclaimable'],
  ['A. Products with identical image sets', identicalSets.length + ' groups', identicalSets.reduce((a, v) => a + v.length - 1, 0) + ' redundant products'],
  ['B. Products repeating an image internally', intra.length, intra.reduce((a, x) => a + x.total - x.unique, 0) + ' repeated slots'],
  ['C. Partial-overlap product pairs', partial.length, ''],
  ['D. Orphaned files (unreferenced)', orphans.length, mb(orphans.reduce((a, f) => a + size[f], 0)) + ' MB'],
  ['   …of those, byte-identical to a live image', orphanDupes.length, ''],
  ['   …genuinely unique orphan content', orphanUnique.length, mb(orphanUnique.reduce((a, f) => a + size[f], 0)) + ' MB'],
  ['E. Folder slugs under several category dirs', multiFolder.length, ''],
  ['F. Duplicate product names', dupNames.length, ''],
  ['G. Identical descriptions', dupDescs.length + ' texts', dupDescs.reduce((a, v) => a + v[1].length, 0) + ' products']
];

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const L = id => `<a href="../pages/product.html?id=${encodeURIComponent(id)}" target="_blank" rel="noopener">${esc(id)}</a>`;

const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>LayerMax — duplicate audit</title>
<style>
 :root{color-scheme:light dark}*{box-sizing:border-box}
 body{margin:0;padding:32px;font:15px/1.55 -apple-system,"Segoe UI",Helvetica,Arial,sans-serif;background:#f7f8fa;color:#12212f}
 h1{font-size:23px;margin:0 0 4px}h2{font-size:17px;margin:36px 0 10px}
 .sub{color:#5a6675;margin:0 0 8px}
 table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #e3e7ec;border-radius:10px;overflow:hidden;margin-bottom:8px}
 th,td{padding:9px 13px;text-align:left;border-bottom:1px solid #eef1f4;vertical-align:top}
 th{background:#0a2c5c;color:#fff;font-size:12px;text-transform:uppercase;letter-spacing:.04em}
 tr:last-child td{border-bottom:none}tr:hover td{background:#f4f8ff}
 a{color:#0a5cc8;font-weight:600;text-decoration:none}a:hover{text-decoration:underline}
 code{font-family:ui-monospace,Menlo,Consolas,monospace;font-size:12px;color:#5a6675;word-break:break-all}
 .num{text-align:right;font-variant-numeric:tabular-nums}
 .wrap{overflow-x:auto}
 .tag{display:inline-block;padding:1px 7px;border-radius:999px;background:#e8f0fe;color:#0a2c5c;font-size:12px;font-weight:700}
 @media (prefers-color-scheme:dark){body{background:#10151b;color:#e6ebf1}table{background:#171d25;border-color:#262f3a}
 td{border-color:#222a34}tr:hover td{background:#1c2430}a{color:#6fb0ff}code{color:#93a1b1}.tag{background:#1d3557;color:#cfe2ff}}
</style></head><body>
<h1>Duplicate audit</h1>
<p class="sub">${P.length} products · ${all.length} image files · generated from <code>pages/products-data.js</code></p>

<h2>Summary</h2>
<div class="wrap"><table><thead><tr><th>Class</th><th class="num">Count</th><th>Impact</th></tr></thead><tbody>
${summary.map(r => `<tr><td>${esc(r[0])}</td><td class="num"><span class="tag">${esc(r[1])}</span></td><td>${esc(r[2])}</td></tr>`).join('\n')}
</tbody></table></div>

<h2>A. Products with identical image sets (${identicalSets.length})</h2>
<p class="sub">Same photos, two catalogue entries. One of each pair is redundant.</p>
<div class="wrap"><table><thead><tr><th class="num">Imgs</th><th>Product</th><th>Duplicate of</th></tr></thead><tbody>
${identicalSets.map(v => `<tr><td class="num">${v[0].images.length}</td><td>${L(v[0].id)}<div><code>${esc(v[0].designer)}</code></div></td><td>${v.slice(1).map(p => L(p.id) + `<div><code>${esc(p.designer)}</code></div>`).join('')}</td></tr>`).join('\n')}
</tbody></table></div>

<h2>B. Same image repeated inside one product (${intra.length})</h2>
<div class="wrap"><table><thead><tr><th>Product</th><th class="num">Images</th><th class="num">Unique</th><th class="num">Repeats</th></tr></thead><tbody>
${intra.map(x => `<tr><td>${L(x.id)}</td><td class="num">${x.total}</td><td class="num">${x.unique}</td><td class="num">${x.total - x.unique}</td></tr>`).join('\n')}
</tbody></table></div>

<h2>C. Partial overlap between products (${partial.length})</h2>
<p class="sub">Share some images but not all — usually a vendor listing and a re-catalogued <code>cat-*</code> version.</p>
<div class="wrap"><table><thead><tr><th class="num">Shared</th><th>Product A</th><th>Product B</th></tr></thead><tbody>
${partial.map(x => `<tr><td class="num">${x.shared}</td><td>${L(x.a)} <code>(${x.aN})</code></td><td>${L(x.b)} <code>(${x.bN})</code></td></tr>`).join('\n')}
</tbody></table></div>

<h2>E. Folder slug present in several category directories (${multiFolder.length})</h2>
<p class="sub">The same product folder was copied under multiple <code>assets/products/&lt;category&gt;/</code> directories.</p>
<div class="wrap"><table><thead><tr><th>Folder slug</th><th>Category directories</th></tr></thead><tbody>
${multiFolder.map(x => `<tr><td><code>${esc(x.slug)}</code></td><td>${x.cats.map(c => `<code>${esc(c)}</code>`).join(' · ')}</td></tr>`).join('\n')}
</tbody></table></div>

<h2>G. Identical descriptions (${dupDescs.length})</h2>
<div class="wrap"><table><thead><tr><th class="num">Used by</th><th>Text</th><th>Products</th></tr></thead><tbody>
${dupDescs.map(([d, v]) => `<tr><td class="num">${v.length}</td><td>${esc(d.slice(0, 140))}…</td><td>${v.map(L).join(', ')}</td></tr>`).join('\n')}
</tbody></table></div>
</body></html>`;

fs.writeFileSync(path.join(__dirname, 'duplicates-report.html'), html);

console.log('=== DUPLICATE AUDIT ===');
summary.forEach(r => console.log('  ' + String(r[0]).padEnd(46), String(r[1]).padStart(9), r[2] ? ' | ' + r[2] : ''));
console.log('\nreport: tools/duplicates-report.html');
