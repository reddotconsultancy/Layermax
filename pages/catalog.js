// Layermax catalog: department (group) pages with sub-category filters — enquiry-based, no cart/pricing.

// GROUP TAXONOMY — each nav "department" opens a catalog page showing ONLY its sub-categories.
const GROUPS = [
  { key: 'sofas', label: 'Sofas', icon: 'fa-couch', subs: [
    { c: 'sofas', l: 'Sofas', i: 'fa-couch' },
    { c: 'wooden-couches', l: 'Wooden Couches', i: 'fa-couch' },
    { c: 'corner-sofas', l: 'Corner Sofas', i: 'fa-couch' } ] },
  { key: 'chairs', label: 'Chairs', icon: 'fa-chair', subs: [
    { c: 'office-chairs', l: 'Office Chairs', i: 'fa-briefcase' },
    { c: 'dining-chairs', l: 'Dining Chairs', i: 'fa-utensils' },
    { c: 'chairs', l: 'Armchairs', i: 'fa-chair' } ] },
  { key: 'recliners', label: 'Recliners', icon: 'fa-chair', subs: [
    { c: 'recliners', l: 'Recliners', i: 'fa-chair' },
    { c: 'home-theatre-seating', l: 'Home Theatre', i: 'fa-film' } ] },
  { key: 'beds', label: 'Beds & Mattresses', icon: 'fa-bed', subs: [
    { c: 'sleeping-beds', l: 'Sleeping Beds', i: 'fa-bed' },
    { c: 'mattresses', l: 'Mattresses', i: 'fa-layer-group' } ] },
  { key: 'tables', label: 'Tables', icon: 'fa-table', subs: [
    { c: 'center-tables', l: 'Center Tables', i: 'fa-table' },
    { c: 'dining-tables', l: 'Dining Tables', i: 'fa-utensils' } ] },
  { key: 'office', label: 'Office', icon: 'fa-briefcase', subs: [
    { c: 'office-workstations', l: 'Workstations', i: 'fa-laptop-file' },
    { c: 'acoustic-pods', l: 'Acoustic Pods', i: 'fa-door-closed' } ] },
  { key: 'storage', label: 'Storage', icon: 'fa-box-archive', subs: [
    { c: 'wardrobes-storage', l: 'Wardrobes & Storage', i: 'fa-box-archive' } ] },
  { key: 'cafe', label: 'Café & Restaurant', icon: 'fa-mug-saucer', subs: [
    { c: 'cafe-chairs', l: 'Café Chairs', i: 'fa-chair' },
    { c: 'cafe-tables', l: 'Café Tables', i: 'fa-mug-saucer' },
    { c: 'cafe-bar-stools', l: 'Bar Stools', i: 'fa-martini-glass' },
    { c: 'cafe-banquet-equipment', l: 'Banquet Equipment', i: 'fa-star' } ] }
];
const GROUP_BY_KEY = Object.fromEntries(GROUPS.map(g => [g.key, g]));
const GROUP_BY_CAT = {};
GROUPS.forEach(g => g.subs.forEach(s => { GROUP_BY_CAT[s.c] = g; }));

// STATE
let currentGroupKey = 'sofas';
let activeCategory = 'all';          // 'all' = every sub-category in the current group
let currentPage = 1;
const ITEMS_PER_PAGE = 15;

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  const g = params.get('group');
  if (g && GROUP_BY_KEY[g]) currentGroupKey = g;

  const catParam = params.get('category');
  if (catParam) {
    const owner = GROUP_BY_CAT[catParam];
    if (owner) { currentGroupKey = owner.key; activeCategory = catParam; }
  }

  const pageParam = params.get('page');
  if (pageParam) currentPage = parseInt(pageParam) || 1;

  const searchParam = params.get('search');
  if (searchParam) { const s = document.getElementById('catalog-search-input'); if (s) s.value = searchParam; }
  const sortParam = params.get('sort');
  if (sortParam) { const s = document.getElementById('sort-products'); if (s) s.value = sortParam; }

  buildSidebar();
  initCatalogFilters();
  renderProducts();
});

window.addEventListener('scroll', () => {
  sessionStorage.setItem('catalogScrollPosition', window.scrollY);
});

// Restore correct page when user presses Back/Forward
window.addEventListener('popstate', (e) => {
  const params = new URLSearchParams(window.location.search);
  const g = params.get('group');
  if (g && GROUP_BY_KEY[g]) currentGroupKey = g;
  const catParam = params.get('category');
  if (catParam) {
    const owner = GROUP_BY_CAT[catParam];
    if (owner) { currentGroupKey = owner.key; activeCategory = catParam; }
  } else {
    activeCategory = 'all';
  }
  const pageParam = params.get('page');
  currentPage = parseInt(pageParam) || 1;
  buildSidebar();
  bindCategoryButtons();
  updateBadges();
  renderProducts();
});

// Build the sidebar for the CURRENT group only (All + its sub-categories)
function buildSidebar() {
  const group = GROUP_BY_KEY[currentGroupKey];
  const box = document.getElementById('category-filter-options');
  const title = document.getElementById('sidebar-group-title');
  if (title) title.textContent = group.label;
  const hero = document.getElementById('catalog-hero-title');
  if (hero) hero.textContent = group.label;
  if (!box) return;
  const btn = (cat, icon, label) =>
    `<button class="catalog-tab-btn sidebar-cat-btn${cat === activeCategory ? ' active' : ''}" data-category="${cat}" style="width:100%; text-align:left; justify-content:space-between;">
      <span><i class="fa-solid ${icon}" style="margin-right:8px;"></i>${label}</span>
      <span class="tab-badge"></span>
    </button>`;
  let html = btn('all', group.icon, 'All ' + group.label);
  group.subs.forEach(s => { html += btn(s.c, s.i, s.l); });
  box.innerHTML = html;
}

// The categories in scope for the current group
function groupCats() { return GROUP_BY_KEY[currentGroupKey].subs.map(s => s.c); }

// RENDER PRODUCTS GRID
function renderProducts() {
  const grid = document.getElementById('catalog-products-grid');
  if (!grid) return;
  const emptyState = document.getElementById('catalog-empty-state');
  const displayedCountEl = document.getElementById('displayed-items-count');
  const totalCountEl = document.getElementById('total-items-count');

  const searchInput = document.getElementById('catalog-search-input');
  const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const cats = groupCats();

  // Mattress customise banner: only in the mattresses section
  const mb = document.getElementById('mattress-banner');
  if (mb) mb.style.display = (activeCategory === 'mattresses') ? 'flex' : 'none';

  let filtered = PRODUCTS.filter(p => {
    if (!cats.includes(p.category)) return false;                       // only this group
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    if (searchVal) {
      const nameMatch = p.name.toLowerCase().includes(searchVal);
      const descMatch = p.description ? p.description.toLowerCase().includes(searchVal) : false;
      if (!nameMatch && !descMatch) return false;
    }
    return true;
  });

  const sortVal = document.getElementById('sort-products')?.value;
  if (sortVal === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    if (currentGroupKey === 'beds' && activeCategory === 'all') {
      filtered.sort((a, b) => {
        const rankA = a.category === 'sleeping-beds' ? 0 : 1;
        const rankB = b.category === 'sleeping-beds' ? 0 : 1;
        return rankA - rankB;
      });
    } else if (currentGroupKey === 'office' && activeCategory === 'all') {
      filtered.sort((a, b) => {
        const rankA = a.category === 'office-workstations' ? 0 : 1;
        const rankB = b.category === 'office-workstations' ? 0 : 1;
        return rankA - rankB;
      });
    }
    // Pull the dark mahogany dining chair to the very end of any popular/default list
    const chairIdx = filtered.findIndex(p => p.id === 'cat-dark-mahogany-wooden-dining-chair');
    if (chairIdx !== -1) {
      const [chair] = filtered.splice(chairIdx, 1);
      filtered.push(chair);
    }
    // Pull the carved teak dining chair to the very end of any popular/default list
    const carvedTeakIdx = filtered.findIndex(p => p.id === 'cat-carved-teak-wooden-dining-chair');
    if (carvedTeakIdx !== -1) {
      const [carvedTeak] = filtered.splice(carvedTeakIdx, 1);
      filtered.push(carvedTeak);
    }
    // Pull the "Row Of" teak chairs to the very end of any popular/default list
    const rowIds = [
      'cat-row-of-4-teak-dining-chairs-with-black-seats',
      'cat-row-of-6-teak-dining-chairs-with-grey-seats-b',
      'cat-row-of-8-teak-dining-chairs-with-grey-seats',
      'cat-row-of-teak-dining-chairs-with-beige-seats'
    ];
    rowIds.forEach(id => {
      const idx = filtered.findIndex(p => p.id === id);
      if (idx !== -1) {
        const [prod] = filtered.splice(idx, 1);
        filtered.push(prod);
      }
    });
    // Pull the beam chair to the very end of any popular/default list
    const beamIdx = filtered.findIndex(p => p.id === 'beam');
    if (beamIdx !== -1) {
      const [beamProduct] = filtered.splice(beamIdx, 1);
      filtered.push(beamProduct);
    }
  }

  const totalFiltered = filtered.length;
  const totalPages = Math.ceil(totalFiltered / ITEMS_PER_PAGE);
  if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const showingStart = totalFiltered === 0 ? 0 : startIdx + 1;
  const showingEnd = Math.min(startIdx + ITEMS_PER_PAGE, totalFiltered);
  if (displayedCountEl) displayedCountEl.textContent = totalFiltered === 0 ? 0 : `${showingStart}–${showingEnd}`;
  if (totalCountEl) totalCountEl.textContent = totalFiltered;

  // Sync URL: group + category
  const url = new URL(window.location.href);
  url.searchParams.set('group', currentGroupKey);
  if (activeCategory !== 'all') url.searchParams.set('category', activeCategory);
  else url.searchParams.delete('category');
  url.searchParams.set('page', currentPage);
  if (searchVal) url.searchParams.set('search', searchInput.value.trim()); else url.searchParams.delete('search');
  if (sortVal && sortVal !== 'popular') url.searchParams.set('sort', sortVal); else url.searchParams.delete('sort');
  try {
    const currentUrl = new URL(window.location.href);
    const isPageChange = currentUrl.searchParams.get('page') !== String(currentPage);
    if (isPageChange) {
      window.history.pushState({ page: currentPage }, '', url.toString());
    } else {
      window.history.replaceState({ page: currentPage }, '', url.toString());
    }
  } catch (e) {
    console.warn("Failed to update history state:", e);
  }

  if (paginated.length === 0) {
    grid.style.display = 'none';
    if (emptyState) emptyState.style.display = 'flex';
    renderPagination(0, 1);
    return;
  }
  grid.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';
  grid.innerHTML = paginated.map(p => productCardHTML(p, '')).join('');
  renderPagination(totalPages, currentPage);
}

// PAGINATION
function renderPagination(totalPages, activePage) {
  const container = document.getElementById('catalog-pagination');
  if (!container) return;
  if (totalPages <= 1) { container.innerHTML = ''; return; }

  let html = `<button class="page-btn page-prev ${activePage === 1 ? 'disabled' : ''}" ${activePage === 1 ? 'disabled' : ''}>Previous</button>`;
  const maxVisible = 5;
  let startPage = Math.max(1, activePage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage < maxVisible - 1) startPage = Math.max(1, endPage - maxVisible + 1);
  if (startPage > 1) {
    html += `<button class="page-btn" data-page="1">1</button>`;
    if (startPage > 2) html += `<span class="page-ellipsis">…</span>`;
  }
  for (let i = startPage; i <= endPage; i++)
    html += `<button class="page-btn ${i === activePage ? 'active' : ''}" data-page="${i}">${i}</button>`;
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) html += `<span class="page-ellipsis">…</span>`;
    html += `<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`;
  }
  html += `<button class="page-btn page-next ${activePage === totalPages ? 'disabled' : ''}" ${activePage === totalPages ? 'disabled' : ''}>Next</button>`;
  container.innerHTML = html;

  const goTo = (page) => { currentPage = page; renderProducts(); document.querySelector('.catalog-main-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  container.querySelectorAll('.page-btn[data-page]').forEach(btn => btn.addEventListener('click', () => goTo(parseInt(btn.getAttribute('data-page')))));
  container.querySelector('.page-prev')?.addEventListener('click', () => { if (currentPage > 1) goTo(currentPage - 1); });
  container.querySelector('.page-next')?.addEventListener('click', () => { if (currentPage < totalPages) goTo(currentPage + 1); });
}

// FILTERS
function initCatalogFilters() {
  updateBadges();
  document.getElementById('sort-products')?.addEventListener('change', renderProducts);
  document.getElementById('catalog-search-input')?.addEventListener('input', renderProducts);
  document.getElementById('clear-filters-btn')?.addEventListener('click', resetAllFilters);
  document.getElementById('empty-reset-btn')?.addEventListener('click', resetAllFilters);
  bindCategoryButtons();
}

function bindCategoryButtons() {
  document.querySelectorAll('#category-filter-options .catalog-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const t = e.currentTarget;
      document.querySelectorAll('#category-filter-options .catalog-tab-btn').forEach(b => b.classList.remove('active'));
      t.classList.add('active');
      activeCategory = t.getAttribute('data-category');
      currentPage = 1;
      renderProducts();
    });
  });
}

function updateBadges() {
  const cats = groupCats();
  document.querySelectorAll('#category-filter-options .catalog-tab-btn').forEach(btn => {
    const cat = btn.getAttribute('data-category');
    const count = cat === 'all'
      ? PRODUCTS.filter(p => cats.includes(p.category)).length
      : PRODUCTS.filter(p => p.category === cat).length;
    let badge = btn.querySelector('.tab-badge');
    if (!badge) { badge = document.createElement('span'); badge.className = 'tab-badge'; btn.appendChild(badge); }
    badge.textContent = count;
  });
}

function resetAllFilters() {
  const sortProducts = document.getElementById('sort-products');
  if (sortProducts) sortProducts.value = 'popular';
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.value = '';
  activeCategory = 'all';
  buildSidebar();
  bindCategoryButtons();
  updateBadges();
  renderProducts();
}
