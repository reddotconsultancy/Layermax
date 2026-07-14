// Layermax site interactions (enquiry-based catalog — no cart / no pricing)

// 1. STATE
let currentHeroSlide = 0;
let currentTestimonialSlide = 0;

// 2. INIT ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  // Global components (present on all pages)
  initStickyHeader();
  initSearchToggle();
  initMobileMenu();
  initMobileFooterAccordion();

  // Homepage-only components
  const isHomepage = !!document.getElementById('hero-slider');
  if (isHomepage) {
    initHeroSlider();
    initCategoryFilters();
    initBestSellersScroll();
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

// 3. STICKY HEADER
function initStickyHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// 4. HERO SLIDER
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentHeroSlide = (index + slides.length) % slides.length;
    slides[currentHeroSlide].classList.add('active');
    dots[currentHeroSlide]?.classList.add('active');
  }

  prevBtn?.addEventListener('click', () => showSlide(currentHeroSlide - 1));
  nextBtn?.addEventListener('click', () => showSlide(currentHeroSlide + 1));
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => showSlide(parseInt(e.target.getAttribute('data-slide'))));
  });

  setInterval(() => showSlide(currentHeroSlide + 1), 6000);
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

function renderBestSellers(filterCategory = 'Chairs') {
  const slider = document.getElementById('best-sellers-slider');
  if (!slider) return;

  // Curated office-chair best sellers (shown in order)
  const BEST_SELLER_IDS = ['cosmo', 'drone', 'echo', 'eclipse', 'genesis', 'nexus'];
  let filtered = PRODUCTS;
  if (filterCategory === 'Chairs') {
    filtered = BEST_SELLER_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  } else if (filterCategory === 'Sofas') {
    filtered = PRODUCTS.filter(p => p.category === 'wooden-couches');
  } else if (filterCategory === 'Workspace') {
    filtered = PRODUCTS.filter(p => p.category === 'office-chairs' || p.category === 'center-tables');
  }

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

function initBestSellersScroll() {
  const tabBtns = document.querySelectorAll('.best-sellers-section .tab-btn');
  renderBestSellers('Chairs');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderBestSellers(e.target.textContent.trim());
      document.getElementById('best-sellers-slider')?.scrollTo({ left: 0, behavior: 'smooth' });
    });
  });
}

// 7. SEARCH TOGGLE
function initSearchToggle() {
  const container = document.getElementById('search-box');
  if (!container) return;
  const toggle = document.getElementById('search-toggle');
  const input = container.querySelector('.search-input');
  if (!toggle || !input) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    container.classList.toggle('active');
    if (container.classList.contains('active')) input.focus();
  });

  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) container.classList.remove('active');
  });
}

// 8. NEWSLETTER SUBSCRIBE
window.handleSubscribe = function (event) {
  event.preventDefault();
  const form = document.getElementById('newsletter-form');
  const msg = document.getElementById('newsletter-msg');
  const input = form.querySelector('input');

  if (input.value) {
    msg.classList.add('show', 'success');
    input.value = '';
    setTimeout(() => msg.classList.remove('show'), 4000);
  }
};

// 9. MOBILE NAV DRAWER
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

// 10. MOBILE FOOTER ACCORDION
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
