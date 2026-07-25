#!/usr/bin/env node
// Generates the blog index and article pages, and adds the Blog link to every footer.
//   node tools/build-blog.js
// Articles are defined below; re-running rebuilds all pages from these definitions.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);

const SITE = 'https://www.layermax.com';
const CSS_V = 'v=7';
const JS_V = 'v=7';

const ARTICLES = [
  {
    slug: 'how-to-choose-an-ergonomic-office-chair',
    title: 'How to Choose an Ergonomic Office Chair',
    date: '2026-07-18',
    readTime: '6 min read',
    category: 'Office',
    image: '../assets/collections/office_chairs.jpg',
    excerpt: 'Seat height, lumbar support, armrests and mechanism — the four things that actually matter when you are specifying chairs for a workplace, and the mistakes that cost the most.',
    body: `
<p>Most office chair complaints trace back to four decisions made at purchase. Get these right and the rest is preference.</p>

<h2>1. Seat height and depth come first</h2>
<p>A chair fits when the user's feet rest flat on the floor with thighs roughly parallel to it, and there are two to three fingers of clearance between the back of the knee and the front edge of the seat. Gas-lift range matters more than any headline feature: a chair with a narrow lift range will not suit a mixed-height team. Where desks are fixed-height and tall, specify a footrest rather than forcing users to perch.</p>

<h2>2. Lumbar support has to meet the actual lower back</h2>
<p>The lumbar curve should press gently into the inward curve of the spine, around belt height. Fixed lumbar support is fine when one person uses one chair all day. For shared desks and hot-desking, height-adjustable lumbar is worth the extra outlay — an unadjustable curve in the wrong place is worse than none at all.</p>

<h2>3. Armrests should support typing, not shoulders</h2>
<p>Armrests exist to take the weight of the forearms while typing. If they are too high the shoulders shrug; too low and the user leans. Height-adjustable arms cover most of the problem. Where chairs must tuck fully under a desk, consider whether armrests are needed at all — in training and meeting rooms, armless or fixed-arm chairs stack and nest far better.</p>

<h2>4. Match the mechanism to how long people sit</h2>
<ul>
  <li><strong>Basic tilt</strong> — fine for meeting rooms and occasional use.</li>
  <li><strong>Synchro-tilt</strong> — the backrest reclines roughly twice as far as the seat, keeping feet grounded. The sensible default for full-time desk work.</li>
  <li><strong>Weight-activated</strong> — self-adjusting resistance, useful across shared desks where nobody will read a manual.</li>
</ul>

<h2>Mesh or upholstery?</h2>
<p>Mesh backs breathe well and suit warm rooms and long sitting hours. Upholstered backs feel more formal and hold up better where the chair doubles as visitor seating. Neither is inherently more durable — the frame and mechanism decide that.</p>

<h2>What to check before you order in volume</h2>
<p>Ask for one sample chair and put it with the person who sits the longest for a week. Check the gas lift certification, the castor type against your floor (hard castors on carpet, soft on hard floors — the reverse of what most people assume), and the warranty terms on the mechanism specifically, not just the frame.</p>

<p>Our <a href="catalog.html?category=office-chairs">office chair range</a> covers task, executive and visitor seating, and the <a href="catalog.html?category=office-workstations">workstation range</a> pairs with it for full cabin fit-outs.</p>
`
  },
  {
    slug: 'furnishing-a-banquet-hall',
    title: 'Furnishing a Banquet Hall: A Practical Checklist',
    date: '2026-07-12',
    readTime: '7 min read',
    category: 'Hospitality',
    image: '../assets/collections/hero_lounge.webp',
    excerpt: 'Chair counts, stacking maths, trolleys, and the equipment most venues forget until the first event. What to buy, in what ratio, and why storage decides your layout.',
    body: `
<p>Banquet furniture is bought by the hundred, and the mistakes scale accordingly. This is the order we recommend working through.</p>

<h2>Start with the stack, not the chair</h2>
<p>Before choosing a style, work out where chairs live when the hall is empty. A stacking banquet chair typically stacks eight to ten high. Three hundred chairs therefore need roughly 30–38 stacks, and each stack needs a footprint plus circulation space around it. Venues that skip this calculation end up storing chairs in corridors.</p>

<h2>Chair-to-guest ratios that hold up</h2>
<ul>
  <li><strong>Seated dinner</strong> — one chair per guest, plus 5% spare for breakages and last-minute additions.</li>
  <li><strong>Conference seating</strong> — one per delegate, plus a 10% buffer; theatre layouts get reset more often and chairs take more abuse.</li>
  <li><strong>Round tables</strong> — eight or ten per table depending on diameter. Ten around a 1.8m round is tight once place settings go down.</li>
</ul>

<h2>Buy the trolleys with the chairs</h2>
<p>This is the single most common omission. Moving stacks by hand damages upholstery, scuffs frames and slows resets. A <a href="catalog.html?category=cafe-banquet-equipment">chair trolley</a> pays for itself in labour within a season. The same applies to folding round tables — a dedicated table trolley holds them on edge and prevents the top-edge damage that comes from dragging.</p>

<h2>The equipment venues forget</h2>
<p>Beyond seating and tables, a working banquet hall needs:</p>
<ul>
  <li><strong>Stage platforms</strong> with skirting, for head tables and speeches</li>
  <li><strong>Stage steps</strong> — safe access matters more than it sounds when guests are in formal shoes</li>
  <li><strong>Queue posts</strong> — retractable belt for registration lines, velvet rope for entrances and VIP areas</li>
</ul>

<h2>Fabric choices that survive service</h2>
<p>Patterned weaves hide spills and wear far better than flat colours in high-turnover halls. Plain fabrics photograph better for weddings. Many venues buy a core set in a hard-wearing pattern and a smaller premium set in plain velvet for photographed events.</p>

<h2>Frames: gold, chrome or powder-coat</h2>
<p>Gold powder-coated aluminium remains the banquet standard and touches up easily. Chrome reads more contemporary and suits hotel ballrooms. Chiavari chairs sit apart from both — they are the default for weddings and command a premium hire rate, which is worth modelling before you decide the split.</p>

<p>Our <a href="catalog.html?group=cafe">Café &amp; Restaurant department</a> carries banquet chairs, Chiavari seating, trolleys, staging and queue control as one range.</p>
`
  },
  {
    slug: 'solid-wood-vs-engineered-wood',
    title: 'Solid Wood vs Engineered Wood: What Actually Matters',
    date: '2026-07-05',
    readTime: '6 min read',
    category: 'Materials',
    image: '../assets/modular_sofa.jpg',
    excerpt: 'Neither is simply "better". A straight comparison of movement, moisture, finish, repairability and cost — and which rooms each belongs in.',
    body: `
<p>The solid-versus-engineered argument is usually framed as authenticity against economy. That misses the point: they behave differently, and the right answer depends on the room.</p>

<h2>Movement is the real difference</h2>
<p>Solid timber expands and contracts across the grain with humidity. Well-made solid furniture is designed around this — floating panels, breathing joints, no rigid cross-grain glue-ups. Engineered boards are dimensionally stable by construction, which is why wide flat surfaces such as wardrobe doors and long desk tops are usually engineered even in expensive pieces.</p>

<h2>Where solid wood earns its price</h2>
<ul>
  <li><strong>Frames and legs</strong> — anything taking load or joinery stress</li>
  <li><strong>Edges that get knocked</strong> — solid takes a dent; laminate chips and cannot be made good</li>
  <li><strong>Pieces you intend to refinish</strong> — solid can be sanded back repeatedly over decades</li>
</ul>
<p>Rubberwood, teak and ash all fall here. Rubberwood in particular is a genuinely sustainable choice: it is harvested from plantation trees at the end of their latex-producing life, so the timber is a by-product rather than the reason for felling.</p>

<h2>Where engineered wood is the better engineering choice</h2>
<ul>
  <li><strong>Large flat panels</strong> — wardrobe shutters, desk tops, bed platforms</li>
  <li><strong>Modular systems</strong> — consistent thickness makes fittings and alignment predictable</li>
  <li><strong>Humid rooms</strong> — a properly edge-banded engineered panel outperforms poorly seasoned solid timber</li>
</ul>

<h2>The detail that decides longevity</h2>
<p>For engineered furniture, edge banding is everything. Exposed or thin banding lets moisture into the core, and once a board swells it never recovers. Check that every cut edge is banded, including the hidden ones inside cabinets. For solid furniture, ask about moisture content at manufacture — timber that was not properly seasoned will move in service regardless of how good the joinery is.</p>

<h2>How most good furniture is actually built</h2>
<p>Not one or the other. A well-made wardrobe typically uses a solid frame with engineered shutters; a dining table often pairs a solid timber base with an engineered core top in veneer. Judge the piece by where each material has been used, not by which word appears in the spec.</p>

<p>Our <a href="catalog.html?group=storage">storage range</a> and <a href="catalog.html?category=dining-tables">dining tables</a> span both constructions, and the <a href="custom.html">custom service</a> can specify either.</p>
`
  },
  {
    slug: 'cafe-seating-layout-and-capacity',
    title: 'Café Seating: Layout, Capacity and Turnover',
    date: '2026-06-28',
    readTime: '5 min read',
    category: 'Hospitality',
    image: '../assets/collections/diners.webp',
    excerpt: 'How much space each cover really needs, why chair choice changes dwell time, and the circulation rules that keep a café workable at full capacity.',
    body: `
<p>Café seating decisions are commercial decisions. Every layout choice trades covers against comfort, and comfort against turnover.</p>

<h2>Space per cover</h2>
<p>As a working guide:</p>
<ul>
  <li><strong>Quick-service / counter</strong> — 1.1 to 1.4 m² per cover</li>
  <li><strong>Casual café dining</strong> — 1.4 to 1.7 m² per cover</li>
  <li><strong>Full-service restaurant</strong> — 1.7 to 2.2 m² per cover</li>
</ul>
<p>These include a share of circulation. Packing tighter than the lower bound produces a room that looks full at 70% occupancy because nobody wants the squeezed seats.</p>

<h2>Circulation rules that hold</h2>
<p>Leave 450mm behind a seated diner for someone to pass sideways, and 900mm for a main walkway or service route. Where two seated backs face each other across an aisle, allow 1.2m between chair backs. Skimping here shows up as spilled trays and staff fatigue, not as extra revenue.</p>

<h2>Chair choice changes dwell time</h2>
<p>This is deliberate in most successful cafés. Hard moulded shells and backless stools are comfortable for twenty to forty minutes, which suits high-turnover counter service. Upholstered seats with a proper backrest invite longer stays, which suits venues earning on food rather than volume. Neither is a compromise if it matches the business model — the mistake is specifying lounge comfort in a room that needs four turns at lunch.</p>

<h2>Mixing seating types</h2>
<p>A mixed floor performs better than a uniform one. A practical split for a 60-cover café:</p>
<ul>
  <li>Around 60% standard tables and chairs — the workhorse</li>
  <li>Around 25% banquette or wall seating — feels generous, uses dead wall space efficiently</li>
  <li>Around 15% counter or bar stools — solo diners and short visits, and it keeps the window looking occupied</li>
</ul>

<h2>Practicalities worth specifying</h2>
<p>Stackability for anything that gets cleared for events. Wipe-clean surfaces on everything within reach of a table. Floor glides matched to your flooring, checked on a sample before the bulk order — a room of chairs scraping a polished floor is an expensive lesson.</p>

<p>Our <a href="catalog.html?category=cafe-chairs">café chairs</a>, <a href="catalog.html?category=cafe-tables">café tables</a> and <a href="catalog.html?category=cafe-bar-stools">bar stools</a> are stocked as a coordinated range.</p>
`
  },
  {
    slug: 'mattress-firmness-guide',
    title: 'Mattress Firmness: A Straight Guide',
    date: '2026-06-20',
    readTime: '5 min read',
    category: 'Bedroom',
    image: '../assets/collections/beds.webp',
    excerpt: 'Firmness is not support, and softer is not gentler on your back. How sleeping position and body weight should drive the choice, and what the layers actually do.',
    body: `
<p>Two terms get used interchangeably and should not be. <strong>Support</strong> is whether the mattress holds your spine in line. <strong>Firmness</strong> is how the surface feels. A soft mattress can be well supported; a firm one can be badly supported.</p>

<h2>Sleeping position drives the choice</h2>
<ul>
  <li><strong>Side sleepers</strong> — need the shoulder and hip to sink so the spine stays straight. Medium to medium-soft usually works.</li>
  <li><strong>Back sleepers</strong> — need the lumbar curve filled without the hips dropping. Medium to medium-firm.</li>
  <li><strong>Front sleepers</strong> — need the hips held up to avoid over-arching the lower back. Firm.</li>
  <li><strong>Position changers</strong> — medium is the honest compromise; a responsive core matters more than the exact rating.</li>
</ul>

<h2>Body weight shifts everything</h2>
<p>Firmness ratings assume an average build. A lighter sleeper will find a "medium" mattress firmer than labelled because they do not compress the comfort layer. A heavier sleeper will pass through it into the support core and find the same mattress softer. If two people of very different weights share a bed, look at zoned support or dual-firmness construction before compromising on a single rating.</p>

<h2>What the layers do</h2>
<ul>
  <li><strong>Rebonded foam core</strong> — the structural base. Density here decides how long the mattress holds shape.</li>
  <li><strong>Soft foam layer</strong> — the comfort layer that sets the initial feel.</li>
  <li><strong>Natural latex</strong> — responsive rather than sinking, naturally breathable, and holds up longer than most foams. Zoned latex varies firmness along the body.</li>
  <li><strong>Quilted top</strong> — surface feel and moisture handling. It changes first impressions more than long-term support.</li>
</ul>

<h2>Thickness is not quality</h2>
<p>A 6-inch mattress with a dense core can outlast an 8-inch one with a thick soft layer over a weak base. Thickness matters for heavier sleepers, who need enough core depth not to bottom out, and for bed height once you add the frame.</p>

<h2>Before you commit</h2>
<p>Lie on it in your actual sleeping position for at least ten minutes, not sitting on the edge. Check whether the base is a platform or slatted — slat spacing over 75mm will let foam sag between them regardless of mattress quality. And confirm the warranty covers sagging depth, which is the failure that actually occurs.</p>

<p>Our <a href="catalog.html?category=mattresses">mattress range</a> covers rebonded, latex and zoned constructions, and thickness can be specified through the <a href="custom.html">custom service</a>.</p>
`
  }
];

// ---------- shared chrome ----------
const NAV = `      <nav>
        <ul class="nav-links">
          <li><a href="../index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="catalog.html?group=sofas">Sofas</a></li>
          <li><a href="catalog.html?group=chairs">Chairs</a></li>
          <li><a href="catalog.html?group=recliners">Recliners</a></li>
          <li><a href="catalog.html?group=beds">Beds</a></li>
          <li><a href="catalog.html?group=tables">Tables</a></li>
          <li><a href="catalog.html?group=office">Office</a></li>
          <li><a href="catalog.html?group=storage">Storage</a></li>
          <li><a href="catalog.html?group=cafe">Café</a></li>
        </ul>
      </nav>`;

const header = () => `  <header id="main-header">
    <div class="navbar-fullwidth navbar">
      <a href="../index.html" class="logo" id="site-logo">
        <img src="../assets/logo.png" alt="Layermax Logo">
      </a>
${NAV}

      <div class="nav-actions">
        <a href="contact.html" class="nav-contact-btn">Contact</a>
        <button class="nav-btn mobile-menu-toggle" id="mobile-menu-btn" aria-label="Menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>`;

const footer = () => `  <footer>
    <div class="container footer-grid">
      <div class="footer-about">
        <img src="../assets/logo.png" alt="Layermax Logo">
        <p>Premium designer chairs and comfort recliners crafted for contemporary homes and professional work environments.</p>
        <div class="footer-contact-links">
          <a href="https://wa.me/917899802412" target="_blank" rel="noopener" class="footer-contact-btn footer-contact-btn--whatsapp" aria-label="WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="tel:+917899802412" class="footer-contact-btn footer-contact-btn--call" aria-label="Call Us">
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:info@layermax.in" class="footer-contact-btn footer-contact-btn--email" aria-label="Email Us">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Collections</h4>
        <ul class="footer-links">
          <li><a href="catalog.html?group=sofas">Sofas</a></li>
          <li><a href="catalog.html?group=chairs">Chairs</a></li>
          <li><a href="catalog.html?group=recliners">Recliners</a></li>
          <li><a href="catalog.html?group=beds">Beds & Mattresses</a></li>
          <li><a href="catalog.html?group=tables">Tables</a></li>
          <li><a href="catalog.html?group=office">Office</a></li>
          <li><a href="catalog.html?group=storage">Storage</a></li>
          <li><a href="catalog.html?group=cafe">Café & Restaurant</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Information</h4>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html#showroom">Showroom Locations</a></li>
          <li><a href="custom.html">Custom Orders</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Customer Care</h4>
        <ul class="footer-links">
          <li><a href="shipping.html">Shipping &amp; Deliveries</a></li>
          <li><a href="returns.html">Returns Policy</a></li>
          <li><a href="warranty.html">Warranty Details</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; 2026 Layermax Furniture Industries Ltd. All rights reserved.</p>
    </div>
  </footer>`;

const BLOG_CSS = `  <style>
    .blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 32px; }
    .blog-card { background: #fff; border: 1px solid var(--color-border); border-radius: var(--radius-lg);
                 overflow: hidden; display: flex; flex-direction: column; transition: var(--transition-fast); }
    .blog-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); }
    .blog-card-img { height: 190px; overflow: hidden; }
    .blog-card-img img { width: 100%; height: 100%; object-fit: cover; }
    .blog-card-body { padding: 22px 24px 26px; display: flex; flex-direction: column; flex: 1; }
    .blog-meta { font-size: 12px; color: var(--color-muted); text-transform: uppercase;
                 letter-spacing: 0.06em; font-weight: 700; margin-bottom: 10px; }
    .blog-card h3 { font-family: var(--font-headings); font-size: 19px; line-height: 1.35;
                    color: var(--color-dark); margin: 0 0 10px; }
    .blog-card p { font-size: 14.5px; color: var(--color-muted); line-height: 1.65; margin: 0 0 18px; flex: 1; }
    .blog-read { font-weight: 700; font-size: 14px; color: var(--color-primary); text-decoration: none; }
    .blog-read:hover { text-decoration: underline; }

    .article-wrap { max-width: 760px; margin: 0 auto; }
    .article-hero { border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 36px; max-height: 380px; }
    .article-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .article-body { font-size: 16.5px; line-height: 1.8; color: var(--color-dark); }
    .article-body p { margin: 0 0 22px; }
    .article-body h2 { font-family: var(--font-headings); font-size: 22px; color: var(--color-dark);
                       margin: 38px 0 14px; }
    .article-body ul { margin: 0 0 22px; padding-left: 22px; }
    .article-body li { margin-bottom: 10px; }
    .article-body a { color: var(--color-primary); font-weight: 600; }
    .article-foot { margin-top: 48px; padding-top: 28px; border-top: 1px solid var(--color-border); }
  </style>`;

const head = (title, desc, canonical, image) => `  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${desc}">
  <!-- Social / canonical -->
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="LayerMax">
  <meta property="og:url" content="${canonical}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${desc}">
  <meta property="og:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${desc}">
  <meta name="twitter:image" content="${image}">
  <!-- /social -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="index.css?${CSS_V}">
  <link rel="icon" type="image/png" href="favicon.png?v=3">`;

const fmtDate = d => new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB',
  { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const abs = rel => SITE + '/' + rel.replace(/^\.\.\//, '');

// ---------- blog index ----------
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
${head('Layermax | Furniture Insights &amp; Buying Guides',
  'Practical guides on choosing office chairs, furnishing banquet halls, café seating layouts, wood construction and mattress firmness — from the Layermax team.',
  `${SITE}/pages/blog.html`, `${SITE}/assets/luxury_living_room_showcase.png`)}
${BLOG_CSS}
</head>
<body>

${header()}

  <section class="enquiry-section">
    <div class="container">

      <div class="breadcrumb-container" style="margin-bottom: 48px;">
        <a href="../index.html">Home</a>
        <span class="separator">/</span>
        <span class="current">Blog</span>
      </div>

      <div class="section-header section-header--centered" style="text-align: center; margin-bottom: 56px; flex-direction: column; align-items: center; display: flex;">
        <h2 class="section-title">Furniture Insights</h2>
        <p class="section-desc">Practical guidance from our design and project teams</p>
      </div>

      <div class="blog-grid">
${ARTICLES.map(a => `        <article class="blog-card">
          <a href="blog-${a.slug}.html" class="blog-card-img"><img src="${a.image}" alt="${a.title}" loading="lazy"></a>
          <div class="blog-card-body">
            <div class="blog-meta">${a.category} &middot; ${a.readTime}</div>
            <h3><a href="blog-${a.slug}.html" style="color: inherit; text-decoration: none;">${a.title}</a></h3>
            <p>${a.excerpt}</p>
            <a href="blog-${a.slug}.html" class="blog-read">Read article <i class="fa-solid fa-arrow-right" style="margin-left: 4px; font-size: 12px;"></i></a>
          </div>
        </article>`).join('\n')}
      </div>

    </div>
  </section>

${footer()}

  <script src="index.js?${JS_V}"></script>
</body>
</html>
`;
fs.writeFileSync('pages/blog.html', indexHtml);

// ---------- article pages ----------
ARTICLES.forEach((a, i) => {
  const others = ARTICLES.filter(x => x.slug !== a.slug).slice(0, 2);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: a.title,
    description: a.excerpt,
    image: abs(a.image),
    datePublished: a.date,
    author: { '@type': 'Organization', name: 'LayerMax' },
    publisher: {
      '@type': 'Organization',
      name: 'LayerMax Furniture Industries Ltd.',
      logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo.png` }
    },
    mainEntityOfPage: `${SITE}/pages/blog-${a.slug}.html`
  };

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
${head(`Layermax | ${a.title}`, a.excerpt, `${SITE}/pages/blog-${a.slug}.html`, abs(a.image))}
${BLOG_CSS}
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
</head>
<body>

${header()}

  <section class="enquiry-section">
    <div class="container">

      <div class="breadcrumb-container" style="margin-bottom: 40px;">
        <a href="../index.html">Home</a>
        <span class="separator">/</span>
        <a href="blog.html">Blog</a>
        <span class="separator">/</span>
        <span class="current">${a.title}</span>
      </div>

      <div class="article-wrap">
        <div class="blog-meta" style="margin-bottom: 12px;">${a.category} &middot; ${fmtDate(a.date)} &middot; ${a.readTime}</div>
        <h1 class="section-title" style="font-size: 34px; line-height: 1.25; margin-bottom: 28px;">${a.title}</h1>

        <div class="article-hero">
          <img src="${a.image}" alt="${a.title}">
        </div>

        <div class="article-body">
${a.body.trim().split('\n').map(l => '          ' + l).join('\n')}
        </div>

        <div class="article-foot">
          <h3 class="workspace-title" style="font-size: 19px; margin-bottom: 18px;">More from the blog</h3>
          <ul class="footer-links" style="list-style: none; padding: 0;">
${others.map(o => `            <li style="margin-bottom: 10px;"><a href="blog-${o.slug}.html" style="color: var(--color-primary); font-weight: 600;">${o.title}</a></li>`).join('\n')}
          </ul>
          <a href="enquire.html" class="hero-btn" style="background-color: var(--color-primary); color: #fff; display: inline-flex; margin-top: 22px;">Talk to a consultant</a>
        </div>
      </div>

    </div>
  </section>

${footer()}

  <script src="index.js?${JS_V}"></script>
</body>
</html>
`;
  fs.writeFileSync(`pages/blog-${a.slug}.html`, html);
});

// ---------- add the Blog link to every existing footer ----------
let patched = 0;
const pages = ['index.html', ...fs.readdirSync('pages').filter(f => f.endsWith('.html')).map(f => 'pages/' + f)];
pages.forEach(f => {
  if (/blog/.test(path.basename(f))) return;                 // blog pages already have it
  let s = fs.readFileSync(f, 'utf8');
  if (/>Blog</.test(s)) return;                              // already patched
  const prefix = f === 'index.html' ? 'pages/' : '';
  const aboutLi = new RegExp(`(<li><a href="${prefix}about\\.html">About Us</a></li>)`);
  if (!aboutLi.test(s)) return;
  s = s.replace(aboutLi, `$1\n          <li><a href="${prefix}blog.html">Blog</a></li>`);
  fs.writeFileSync(f, s);
  patched++;
});

console.log(`blog index + ${ARTICLES.length} articles written to pages/`);
console.log(`Blog link added to ${patched} existing page footers`);
ARTICLES.forEach(a => console.log(`  pages/blog-${a.slug}.html`));
