# LayerMax — Luxury Furniture Catalog

A static marketing + catalog website for LayerMax furniture (sofas, recliners, chairs,
beds, office furniture, mattresses and more). Built with plain HTML, CSS and JavaScript —
no build step, no framework, no dependencies.

## Run locally

Any static file server works. For example:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

Open `index.html` directly also works, but a server is recommended so relative
`../assets/...` paths resolve correctly from the `pages/` directory.

## Project structure

```
.
├── index.html            # Home page
├── favicon.png
├── pages/
│   ├── catalog.html      # Product grid + category sidebar + filters
│   ├── product.html      # Single product detail (reads ?id=)
│   ├── custom.html       # Mattress / product customiser
│   ├── enquire.html      # Enquiry form
│   ├── about.html contact.html shipping.html returns.html warranty.html
│   ├── index.css         # All site styles
│   ├── index.js          # Home page behaviour (sliders, product cards)
│   ├── catalog.js        # Catalog filtering / pagination
│   └── products-data.js   # PRODUCTS[] database + resolveImagePath()
├── assets/
│   ├── catalogue_new/    # Primary product cutouts (transparent PNGs), by category
│   ├── products_catalog_images/  # Bosq / Buro / Kosmo office & bedroom ranges
│   ├── assetsCatalogue/  # Legacy categorized product images (incl. LMW series)
│   ├── RubcoAsset/       # Rubco range (beds, sofas, mattresses, tables)
│   ├── clients/ collections/ Logo/
│   └── *.png / *.jpg     # Home page / showcase imagery
└── catalogues/           # Source print PDFs (git-ignored — see below)
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
  "designer": "Layermax",         // "Rubco Premium" => external listing button
  "rating": 4.7,
  "img": "assets/.../Neptune_01.png",   // primary/thumbnail
  "badge": "New",
  "description": "...",
  "images": ["assets/.../Neptune_01.png", ...],  // gallery
  "colors": []
}
```

`resolveImagePath()` (top of the file) prefixes `../` when the page is served from
`pages/`, so image paths are stored repo-relative (e.g. `assets/...`).

## Notes

- **Catalogue PDFs** (`catalogues/`) are large print exports and are **git-ignored**
  (the BOSQ file alone is ~271 MB, over GitHub's 100 MB limit). The catalog page's
  download buttons expect them at `catalogues/*.pdf` — host these externally
  (Drive / CDN / Git LFS) or compress them under 100 MB before shipping downloads.
- No secrets or API keys are used; the enquiry/customise forms are front-end only.
