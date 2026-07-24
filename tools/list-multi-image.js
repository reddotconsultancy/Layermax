#!/usr/bin/env node
// Builds tools/multi-image-products.html — every product with more than one gallery image.
//   node tools/list-multi-image.js
// Open at http://localhost:8787/tools/multi-image-products.html while a static server runs.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
global.window = { location: { pathname: '/' } };
const PRODUCTS = require(path.join(ROOT, 'pages', 'products-data.js'));

const multi = PRODUCTS
  .filter(p => Array.isArray(p.images) && p.images.length > 1)
  .sort((a, b) => b.images.length - a.images.length || a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

const esc = (v = '') =>
  String(v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const rows = multi
  .map((p, i) => `      <tr data-cat="${esc(p.category)}" data-search="${esc((p.name + ' ' + p.id + ' ' + p.category + ' ' + p.designer).toLowerCase())}">
        <td class="num">${i + 1}</td>
        <td><img loading="lazy" src="../${esc(p.img)}" alt=""></td>
        <td><a href="../pages/product.html?id=${encodeURIComponent(p.id)}" target="_blank" rel="noopener">${esc(p.name)}</a><div class="id">${esc(p.id)}</div></td>
        <td>${esc(p.category)}</td>
        <td>${esc(p.designer)}</td>
        <td class="num"><span class="count">${p.images.length}</span></td>
      </tr>`)
  .join('\n');

const cats = [...new Set(multi.map(p => p.category))].sort();

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<title>LayerMax — products with multiple images (${multi.length})</title>
<style>
  :root { color-scheme: light dark; }
  * { box-sizing: border-box; }
  body { margin: 0; padding: 32px; font: 15px/1.5 -apple-system, "Segoe UI", Helvetica, Arial, sans-serif;
         background: #f7f8fa; color: #12212f; }
  h1 { font-size: 22px; margin: 0 0 4px; }
  .sub { color: #5a6675; margin: 0 0 24px; }
  .controls { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
  input, select { padding: 9px 12px; border: 1px solid #d6dbe1; border-radius: 8px; font-size: 14px;
                  background: #fff; color: inherit; }
  input { min-width: 260px; }
  .wrap { overflow-x: auto; background: #fff; border: 1px solid #e3e7ec; border-radius: 12px; }
  table { border-collapse: collapse; width: 100%; min-width: 720px; }
  th, td { padding: 10px 14px; text-align: left; border-bottom: 1px solid #eef1f4; vertical-align: middle; }
  th { position: sticky; top: 0; background: #0a2c5c; color: #fff; font-size: 13px;
       text-transform: uppercase; letter-spacing: .04em; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #f4f8ff; }
  td img { width: 56px; height: 56px; object-fit: contain; background: #f2f4f7; border-radius: 6px; }
  a { color: #0a5cc8; font-weight: 600; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .id { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 11px; color: #7a8694; }
  .num { text-align: right; font-variant-numeric: tabular-nums; }
  .count { display: inline-block; min-width: 26px; padding: 2px 8px; border-radius: 999px;
           background: #e8f0fe; color: #0a2c5c; font-weight: 700; font-size: 13px; text-align: center; }
  .hidden { display: none; }
  @media (prefers-color-scheme: dark) {
    body { background: #10151b; color: #e6ebf1; }
    .wrap { background: #171d25; border-color: #262f3a; }
    th { background: #0a2c5c; }
    td { border-color: #222a34; }
    tr:hover td { background: #1c2430; }
    input, select { background: #171d25; border-color: #2c3642; }
    td img { background: #222a34; }
    a { color: #6fb0ff; }
    .count { background: #1d3557; color: #cfe2ff; }
  }
</style>
</head>
<body>
  <h1>Products with more than one image</h1>
  <p class="sub"><strong>${multi.length}</strong> of ${PRODUCTS.length} products &mdash; sorted by image count. Links open the product page in a new tab.</p>

  <div class="controls">
    <input id="q" type="search" placeholder="Search name, id, category, designer&hellip;" autocomplete="off">
    <select id="cat">
      <option value="">All categories (${cats.length})</option>
${cats.map(c => `      <option value="${esc(c)}">${esc(c)}</option>`).join('\n')}
    </select>
    <span id="shown" class="sub" style="align-self:center;margin:0;"></span>
  </div>

  <div class="wrap">
    <table>
      <thead>
        <tr><th class="num">#</th><th>Image</th><th>Product</th><th>Category</th><th>Designer</th><th class="num">Images</th></tr>
      </thead>
      <tbody id="rows">
${rows}
      </tbody>
    </table>
  </div>

<script>
  const rows = [...document.querySelectorAll('#rows tr')];
  const q = document.getElementById('q');
  const cat = document.getElementById('cat');
  const shown = document.getElementById('shown');

  function apply() {
    const term = q.value.toLowerCase().trim();
    const c = cat.value;
    let n = 0;
    rows.forEach(r => {
      const hit = (!term || r.dataset.search.includes(term)) && (!c || r.dataset.cat === c);
      r.classList.toggle('hidden', !hit);
      if (hit) n++;
    });
    shown.textContent = n + ' shown';
  }
  q.addEventListener('input', apply);
  cat.addEventListener('change', apply);
  apply();
</script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'multi-image-products.html'), html);
console.log(`tools/multi-image-products.html written — ${multi.length} products with >1 image`);
