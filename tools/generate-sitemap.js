#!/usr/bin/env node
// Regenerates sitemap.xml from the PRODUCTS database and the catalog taxonomy.
//   node tools/generate-sitemap.js
// Change SITE if the production hostname ever changes.

const fs = require('fs');
const path = require('path');

const SITE = 'https://www.layermax.in';
const ROOT = path.join(__dirname, '..');

global.window = { location: { pathname: '/' } };
const PRODUCTS = require(path.join(ROOT, 'pages', 'products-data.js'));

// Kept in step with GROUPS in pages/catalog.js
const GROUPS = {
  sofas: ['sofas', 'wooden-couches', 'corner-sofas'],
  chairs: ['office-chairs', 'dining-chairs', 'chairs'],
  recliners: ['recliners', 'home-theatre-seating'],
  beds: ['sleeping-beds', 'mattresses'],
  tables: ['center-tables', 'dining-tables'],
  office: ['office-workstations', 'acoustic-pods'],
  storage: ['wardrobes-storage'],
  cafe: ['cafe-chairs', 'cafe-tables', 'cafe-bar-stools', 'cafe-banquet-equipment']
};

const lastmod = fs
  .statSync(path.join(ROOT, 'pages', 'products-data.js'))
  .mtime.toISOString()
  .slice(0, 10);

const urls = [];
const add = (loc, priority, changefreq) => urls.push({ loc, priority, changefreq });

add(`${SITE}/`, '1.0', 'weekly');
add(`${SITE}/pages/catalog.html`, '0.9', 'weekly');
add(`${SITE}/pages/about.html`, '0.6', 'yearly');
add(`${SITE}/pages/contact.html`, '0.8', 'yearly');
add(`${SITE}/pages/custom.html`, '0.7', 'yearly');
add(`${SITE}/pages/enquire.html`, '0.5', 'yearly');
add(`${SITE}/pages/shipping.html`, '0.4', 'yearly');
add(`${SITE}/pages/returns.html`, '0.4', 'yearly');
add(`${SITE}/pages/warranty.html`, '0.4', 'yearly');

// Blog: index plus every generated article page
add(`${SITE}/pages/blog.html`, '0.7', 'monthly');
fs.readdirSync(path.join(ROOT, 'pages'))
  .filter(f => /^blog-.*\.html$/.test(f))
  .sort()
  .forEach(f => add(`${SITE}/pages/${f}`, '0.6', 'monthly'));

Object.entries(GROUPS).forEach(([group, cats]) => {
  add(`${SITE}/pages/catalog.html?group=${group}`, '0.8', 'weekly');
  cats.forEach(cat => add(`${SITE}/pages/catalog.html?group=${group}&amp;category=${cat}`, '0.7', 'weekly'));
});

PRODUCTS.forEach(p => add(`${SITE}/pages/product.html?id=${encodeURIComponent(p.id)}`, '0.6', 'monthly'));

const body = urls
  .map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`)
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
console.log(`sitemap.xml written — ${urls.length} URLs (${PRODUCTS.length} products), lastmod ${lastmod}`);
