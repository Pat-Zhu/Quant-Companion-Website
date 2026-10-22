const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const search = document.querySelector('#resource-search');
const filters = [...document.querySelectorAll('.filter')];
const resources = [...document.querySelectorAll('.resource-row')];
const emptyState = document.querySelector('#empty-state');
let activeFilter = 'all';

function updateResources() {
  const query = (search?.value || '').trim().toLowerCase();
  let visible = 0;

  resources.forEach((resource) => {
    const categoryMatch = activeFilter === 'all' || resource.dataset.category === activeFilter;
    const searchable = `${resource.dataset.search || ''} ${resource.textContent}`.toLowerCase();
    const searchMatch = !query || searchable.includes(query);
    const show = categoryMatch && searchMatch;
    resource.hidden = !show;
    if (show) visible += 1;
  });

  if (emptyState) emptyState.hidden = visible !== 0;
}

search?.addEventListener('input', updateResources);
filters.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter || 'all';
    filters.forEach((item) => item.classList.toggle('is-active', item === button));
    updateResources();
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
