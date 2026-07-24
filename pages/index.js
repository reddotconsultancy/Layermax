// Layermax site interactions (enquiry-based catalog — no cart / no pricing)

// 1. STATE
let currentHeroSlide = 0;
let currentTestimonialSlide = 0;

// 2. INIT ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  // Global components (present on all pages)
  initStickyHeader();
  initMobileMenu();
  initMobileFooterAccordion();
  initActiveNavLink();

  // Homepage-only components
  const isHomepage = !!document.getElementById('hero-slider');
  if (isHomepage) {
    initHeroSlider();
    initCategoryFilters();
    renderBestSellers();
    initTestimonialSlider();
  }
});

// Shared product-card markup used by homepage + catalog grids.
// `prefix` points at product.html relative to the current page ('pages/' from root, '' inside pages/).
function productCardHTML(p, prefix = '') {
  const isRubco = p.designer === 'Rubco Premium';
  const link = isRubco ? p.listingUrl : `${prefix}product.html?id=${p.id}`;
  const target = isRubco ? 'target="_blank" rel="noopener"' : '';
  const btnText = isRubco ? 'Go to Listing' : 'Enquire Now';
  return `
    <div class="product-card" data-id="${p.id}" data-name="${p.name}" data-category="${p.category}" data-img="${p.img}">
      <a href="${link}" ${target} style="display: block; width: 100%;">
        <div class="product-img-box">
          <img src="${resolveImagePath(p.img)}" alt="${p.name}">
        </div>
      </a>
      <span class="product-category">${p.designer}</span>
      <h4 class="product-name" title="${p.name}"><a href="${link}" ${target}>${p.name}</a></h4>
      <div class="card-footer" style="justify-content: center; padding: 4px 0;">
        <a href="${link}" ${target} class="enquire-btn-card">${btnText}</a>
      </div>
    </div>
  `;
}
window.productCardHTML = productCardHTML;

// Helper: smooth-scroll to a section
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;
  const offset = 70; // header height
  const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
  window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
}

// 3. STICKY HEADER & ACTIVE NAV LINK
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const searchParams = new URLSearchParams(window.location.search);
  const currentGroup = searchParams.get('group');
  const currentCategory = searchParams.get('category');
  const productId = searchParams.get('id');

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

  let activeGroup = currentGroup;

  if (!activeGroup && currentCategory) {
    for (const [grp, cats] of Object.entries(GROUPS)) {
      if (cats.includes(currentCategory)) {
        activeGroup = grp;
        break;
      }
    }
  }

  if (!activeGroup && productId && typeof PRODUCTS !== 'undefined') {
    const p = PRODUCTS.find(prod => prod.id === productId);
    if (p && p.category) {
      for (const [grp, cats] of Object.entries(GROUPS)) {
        if (cats.includes(p.category)) {
          activeGroup = grp;
          break;
        }
      }
    }
  }

  const navLinks = document.querySelectorAll('.nav-links a, .nav-contact-btn');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (!href) return;

    if (activeGroup && href.includes(`group=${activeGroup}`)) {
      link.classList.add('active');
    } else if (!activeGroup && (currentPath.endsWith('/') || currentPath.endsWith('index.html')) && (href.endsWith('index.html') || href === '../index.html' || href === 'index.html')) {
      link.classList.add('active');
    } else if (!activeGroup && currentPath.includes('contact.html') && href.includes('contact.html')) {
      link.classList.add('active');
    } else if (!activeGroup && href.includes(currentPath.split('/').pop())) {
      link.classList.add('active');
    }
  });
}

// 4. HERO SLIDER
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  const slider = document.getElementById('hero-slider');

  if (!slides.length) return;

  let autoplayTimer = null;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentHeroSlide = (index + slides.length) % slides.length;
    slides[currentHeroSlide].classList.add('active');
    dots[currentHeroSlide]?.classList.add('active');
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => showSlide(currentHeroSlide + 1), 6000);
  }

  function stopAutoplay() {
    if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
  }

  // Manual navigation restarts the countdown so the slide doesn't jump away
  function goTo(index) { showSlide(index); startAutoplay(); }

  prevBtn?.addEventListener('click', () => goTo(currentHeroSlide - 1));
  nextBtn?.addEventListener('click', () => goTo(currentHeroSlide + 1));
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => goTo(parseInt(e.target.getAttribute('data-slide'))));
  });

  slider?.addEventListener('mouseenter', stopAutoplay);
  slider?.addEventListener('mouseleave', startAutoplay);
  document.addEventListener('visibilitychange', () => {
    document.hidden ? stopAutoplay() : startAutoplay();
  });

  startAutoplay();
}

// 5. TESTIMONIAL CAROUSEL
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  if (!slides.length) return;

  function showTestimonial(index) {
    slides.forEach(s => s.classList.remove('active'));
    currentTestimonialSlide = (index + slides.length) % slides.length;
    slides[currentTestimonialSlide].classList.add('active');
  }

  prevBtn?.addEventListener('click', () => showTestimonial(currentTestimonialSlide - 1));
  nextBtn?.addEventListener('click', () => showTestimonial(currentTestimonialSlide + 1));
}

// 6. HOMEPAGE PRODUCT SECTIONS
function renderFeaturedProducts(filterCategory = 'chair') {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;

  let filtered = PRODUCTS;
  if (filterCategory === 'chair') {
    filtered = PRODUCTS.filter(p => p.category === 'office-chairs');
  } else if (filterCategory === 'sofa') {
    filtered = PRODUCTS.filter(p => p.category === 'sofas');
  } else if (filterCategory === 'table') {
    filtered = PRODUCTS.filter(p => p.category === 'dining-tables');
  }

  grid.innerHTML = filtered.slice(0, 8).map(p => productCardHTML(p, 'pages/')).join('');
}

function renderBestSellers() {
  const slider = document.getElementById('best-sellers-slider');
  if (!slider) return;

  // Curated office-chair best sellers (shown in order)
  const BEST_SELLER_IDS = ['cosmo', 'drone', 'echo', 'eclipse', 'genesis', 'nexus'];
  const filtered = BEST_SELLER_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  slider.innerHTML = filtered.slice(0, 6).map(p => productCardHTML(p, 'pages/')).join('');
}

function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('#featured-filters .tab-btn');
  renderFeaturedProducts('chair');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderFeaturedProducts(e.target.getAttribute('data-filter'));
    });
  });
}

// 7. MOBILE NAV DRAWER
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navLinks.classList.toggle('open');
    const icon = menuBtn.querySelector('i');
    if (icon) icon.className = navLinks.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
      navLinks.classList.remove('open');
      const icon = menuBtn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-bars';
    }
  });
}

// 8. MOBILE FOOTER ACCORDION
function initMobileFooterAccordion() {
  const footerCols = document.querySelectorAll('.footer-col');
  footerCols.forEach(col => {
    const title = col.querySelector('h4');
    if (!title) return;

    title.addEventListener('click', () => {
      if (window.innerWidth > 768) return;
      footerCols.forEach(c => { if (c !== col) c.classList.remove('active'); });
      col.classList.toggle('active');
    });
  });
}
