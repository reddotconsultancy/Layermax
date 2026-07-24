# LayerMax — Luxury Furniture Catalog

A static marketing + catalog website for LayerMax furniture (sofas, recliners, chairs,
beds, office furniture, mattresses and more). Built with plain HTML, CSS and JavaScript —
no build step, no framework, no dependencies. Enquiry-based: no cart, no prices.

Deployed on Cloudflare Pages. The only server-side code is one Pages Function that relays
enquiry forms through [Resend](https://resend.com).

## Run locally

Any static file server works for the pages themselves:

```bash
python -m http.server 8080
```

To exercise the enquiry forms you need the Pages Function too, so use Wrangler:

```bash
npx wrangler pages dev .
```

Put local secrets in `.dev.vars` (git-ignored):

```
RESEND_API_KEY=re_xxxxxxxx
ENQUIRY_FROM=Layermax <enquiries@layermax.com>
ENQUIRY_TO=sales@layermax.com
```

Opening `index.html` from disk works for a quick look, but a server is recommended so
relative `../assets/...` paths resolve correctly from `pages/`.

## Project structure

```
.
├── index.html            # Home page
├── favicon.png
├── robots.txt            # Points crawlers at sitemap.xml
├── llms.txt              # Site summary for LLM crawlers
├── sitemap.xml           # Generated — see tools/generate-sitemap.js
├── functions/
│   └── api/enquiry.js    # Cloudflare Pages Function — form → Resend
├── tools/
│   └── generate-sitemap.js
├── pages/
│   ├── catalog.html      # Product grid + category sidebar + pagination
│   ├── product.html      # Single product detail (reads ?id=)
│   ├── custom.html       # Custom furniture request
│   ├── enquire.html      # Product / general enquiry form
│   ├── contact.html      # Support form + showroom details
│   ├── about.html shipping.html returns.html warranty.html
│   ├── index.css         # All site styles
│   ├── index.js          # Shared behaviour (header, nav, sliders, product cards)
│   ├── catalog.js        # Catalog filtering / pagination
│   ├── forms.js          # Shared form submit handler (posts to /api/enquiry)
│   └── products-data.js  # PRODUCTS[] database + resolveImagePath()
└── assets/
    ├── products/<category>/<product-slug>/   # All product imagery
    ├── clients/ collections/ Logo/
    └── *.png / *.jpg     # Home page / showcase imagery
```

## Product data

All products live in [`pages/products-data.js`](pages/products-data.js) as a single
`PRODUCTS` array. Each entry:

```js
{
  "id": "sofas-neptune",          // unique slug, also the product URL id
  "name": "Neptune",
  "category": "sofas",            // drives the catalog sidebar tab
  "type": "sofa",
  "material": "Fabric / Leather",
  "designer": "LayerMax Signature",  // "Rubco Premium" => external listing button
  "rating": 4.7,
  "img": "assets/.../Neptune_01.png",   // primary/thumbnail
  "badge": "New",
  "description": "...",
  "images": ["assets/.../Neptune_01.png", ...],  // gallery
  "colors": []
}
```

`designer` values are matched exactly in `product.html` and `custom.html` — mind the
capital M in `LayerMax`.

`resolveImagePath()` (top of the file) prefixes `../` when the page is served from
`pages/`, so image paths are stored repo-relative (e.g. `assets/...`).

Category → department mapping lives in `GROUPS` at the top of
[`pages/catalog.js`](pages/catalog.js). Adding a category means adding it there **and** in
`tools/generate-sitemap.js`, otherwise its products never appear in the catalog or sitemap.

## Enquiry forms

`pages/forms.js` wires all three forms to `POST /api/enquiry`. The Pages Function validates
the payload, drops honeypot submissions, and sends the enquiry through Resend with the
submitter's address as `reply_to`.

Required environment variables (Pages → Settings → Environment variables):

| Variable | Type | Example |
|---|---|---|
| `RESEND_API_KEY` | secret | `re_...` |
| `ENQUIRY_FROM` | plain | `Layermax <enquiries@layermax.com>` — domain must be verified in Resend |
| `ENQUIRY_TO` | plain | `sales@layermax.com` (comma-separate for several) |

If any of these are missing the endpoint returns a 500 and the form shows an error asking
the customer to call instead — it never shows a false success.

## SEO files

Regenerate the sitemap whenever products are added or removed:

```bash
node tools/generate-sitemap.js
```

`SITE` at the top of that script, the canonical/`og:url` tags in each page's `<head>`, and
the URLs in `robots.txt` and `llms.txt` all assume `https://www.layermax.com`. Update all
four if the production hostname changes.

## Notes

- **Catalogue PDFs** are hosted as GitHub Release assets (tag `catalogueV1`); the catalog
  page's download buttons link to them directly. They are too large for the repo (the BOSQ
  file alone is ~271 MB, over GitHub's 100 MB limit).
- **Asset weight**: `assets/` is ~3.2 GB and roughly 550 MB of that is product imagery no
  entry in `PRODUCTS` references — largely `cat-*` folders duplicating the short-named ones.
  Several single PNGs exceed 16 MB. Worth a prune + WebP pass.
