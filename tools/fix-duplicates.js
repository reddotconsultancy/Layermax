#!/usr/bin/env node
// Applies the duplicate cleanup found by tools/find-duplicates.js.
//   node tools/fix-duplicates.js [--dry]
//
// 1. Class A — 28 products whose image set is identical to another's: keep the vendor
//    entry (Bosq / Buro / Kosmo), drop the re-catalogued `cat-*` clone + its folder.
//    Where the vendor description is empty, the clone's description is carried over.
// 2. Class B — the same image listed several times inside one product: keep first use.
// 3. Class D — orphan files byte-identical to a still-referenced image.
// 4. Class E — leftover empty directories.
// Unique orphan content is NEVER deleted; it is reported instead.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);
const DRY = process.argv.includes('--dry');
global.window = { location: { pathname: '/' } };
const P = require(path.join(ROOT, 'pages', 'products-data.js'));

const H = f => crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex');
const VENDORS = ['Bosq Ergonomics', 'Buro Design', 'Kosmo Design'];

const log = [];
let freed = 0, filesDeleted = 0;
const rm = f => {
  freed += fs.statSync(f).size;
  filesDeleted++;
  if (!DRY) fs.unlinkSync(f);
};

// ---------- 1. class A: collapse identical-image-set products ----------
const sigOf = p => [...new Set((p.images || []).map(H))].sort().join(',');
const bySet = {};
P.forEach(p => (bySet[sigOf(p)] = bySet[sigOf(p)] || []).push(p));

const dropped = [];
Object.values(bySet).filter(v => v.length > 1).forEach(group => {
  // survivor: the vendor-catalogued entry; fall back to the non-`cat-` id
  const survivor =
    group.find(p => VENDORS.includes(p.designer)) ||
    group.find(p => !p.id.startsWith('cat-')) ||
    group[0];
  group.filter(p => p !== survivor).forEach(clone => {
    // carry over a description if the survivor has none
    if (!survivor.description && clone.description) survivor.description = clone.description;
    dropped.push({ id: clone.id, keep: survivor.id, imgs: clone.images.length });
  });
});
const dropIds = new Set(dropped.map(d => d.id));
for (let i = P.length - 1; i >= 0; i--) if (dropIds.has(P[i].id)) P.splice(i, 1);
log.push(`A. collapsed ${dropped.length} clone products`);

// ---------- 2. class B: de-duplicate image lists ----------
let slots = 0, touched = 0;
P.forEach(p => {
  if (!Array.isArray(p.images)) return;
  const seen = new Set(), keep = [];
  p.images.forEach(f => { const h = H(f); if (!seen.has(h)) { seen.add(h); keep.push(f); } });
  if (keep.length !== p.images.length) {
    slots += p.images.length - keep.length;
    touched++;
    p.images = keep;
    if (!keep.includes(p.img)) p.img = keep[0];
  }
});
log.push(`B. removed ${slots} repeated gallery slots across ${touched} products`);

// ---------- write data before touching files it no longer references ----------
if (!DRY) {
  const src = fs.readFileSync('pages/products-data.js', 'utf8');
  const start = src.indexOf('const PRODUCTS = [');
  const end = src.lastIndexOf('];');
  fs.writeFileSync('pages/products-data.js',
    src.slice(0, start + 'const PRODUCTS = '.length) +
    JSON.stringify(P, null, 2).replace(/\n/g, '\r\n') +
    src.slice(end + 1));
}

// ---------- 3. class D: delete orphans that duplicate a live image ----------
const all = [];
(function walk(d) {
  fs.readdirSync(d, { withFileTypes: true }).forEach(e => {
    const f = d + '/' + e.name;
    e.isDirectory() ? walk(f) : /\.(png|jpg|jpeg|svg|webp)$/i.test(f) && all.push(f);
  });
})('assets');

const referenced = new Set();
P.forEach(p => (p.images || []).forEach(f => referenced.add(f)));

// Site chrome (logo, client logos, collection tiles, hero art) is referenced from the
// pages and stylesheet, not from PRODUCTS — it must never be treated as an orphan.
['index.html', ...fs.readdirSync('pages').map(f => 'pages/' + f)]
  .filter(f => /\.(html|css|js)$/.test(f))
  .forEach(f => {
    const text = fs.readFileSync(f, 'utf8');
    [...text.matchAll(/assets\/[^"')\s]+\.(?:png|jpg|jpeg|svg|webp)/gi)]
      .forEach(m => referenced.add(m[0].replace(/^\.\.\//, '')));
  });

const liveHashes = new Set([...referenced].filter(f => fs.existsSync(f)).map(H));

const orphans = all.filter(f => !referenced.has(f));
const uniqueOrphans = [];
const keptHashes = new Set();
orphans.forEach(f => {
  const h = H(f);
  if (liveHashes.has(h)) rm(f);
  else if (keptHashes.has(h)) rm(f);            // duplicate among orphans themselves
  else { keptHashes.add(h); uniqueOrphans.push(f); }
});
log.push(`D. deleted ${filesDeleted} redundant orphan files`);

// ---------- 4. class E: drop directories left empty ----------
let dirsRemoved = 0;
(function prune(d) {
  fs.readdirSync(d, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .forEach(e => prune(d + '/' + e.name));
  if (d !== 'assets' && fs.readdirSync(d).length === 0) {
    dirsRemoved++;
    if (!DRY) fs.rmdirSync(d);
  }
})('assets');
log.push(`E. removed ${dirsRemoved} empty directories`);

// ---------- report ----------
console.log(DRY ? '=== DRY RUN ===' : '=== APPLIED ===');
log.forEach(l => console.log('  ' + l));
console.log('  files deleted:', filesDeleted, '=', (freed / 1e6).toFixed(1), 'MB freed');
console.log('  products:', P.length);
console.log('\n  dropped clones (kept -> dropped):');
dropped.forEach(d => console.log(`    ${d.keep}  <-  ${d.id} (${d.imgs} imgs)`));
console.log(`\n  KEPT: ${uniqueOrphans.length} unreferenced files with unique content (review manually):`);
uniqueOrphans.slice(0, 40).forEach(f => console.log('    ' + f));
if (uniqueOrphans.length > 40) console.log(`    …and ${uniqueOrphans.length - 40} more`);
