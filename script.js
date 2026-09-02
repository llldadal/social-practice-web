const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  }
}), { threshold: .14 });

reveals.forEach(item => {
  if (!item.classList.contains('visible')) observer.observe(item);
});

const topButton = document.querySelector('.back-top');
const links = document.querySelectorAll('nav a');
const topbar = document.querySelector('.topbar');
const navToggle = document.querySelector('.nav-toggle');

const setMobileMenu = open => {
  if (!topbar || !navToggle) return;
  topbar.classList.toggle('menu-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
};

if (navToggle) {
  navToggle.addEventListener('click', () => {
    setMobileMenu(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  links.forEach(link => link.addEventListener('click', () => setMobileMenu(false)));

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setMobileMenu(false);
      navToggle.focus();
    }
  });

  window.matchMedia('(min-width: 681px)').addEventListener('change', event => {
    if (event.matches) setMobileMenu(false);
  });
}

const pageSections = document.querySelectorAll('main section[id]');
const updatePageState = () => {
  topButton?.classList.toggle('show', window.scrollY > 450);
  let current = 'x1';
  const headerOffset = (topbar?.getBoundingClientRect().height || 0) + 24;

  pageSections.forEach(section => {
    if (window.scrollY >= section.offsetTop - headerOffset) current = section.id;
  });

  links.forEach(link => {
    const isCurrent = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', isCurrent);
    if (isCurrent) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};

window.addEventListener('scroll', updatePageState, { passive: true });
window.addEventListener('hashchange', updatePageState);
window.addEventListener('pageshow', updatePageState);
updatePageState();

// 路线图与站点索引联动：悬停时同步高亮，点击后定位对应景点卡片。
const mapMarkers = document.querySelectorAll('.map-marker[data-spot]');
const mapStops = document.querySelectorAll('.map-stops li[data-spot]');

const setMapSpotState = (spot, active) => {
  document.querySelectorAll(`[data-spot="${spot}"]`).forEach(item => {
    if (item.matches('.map-marker, .map-stops li')) item.classList.toggle('is-active', active);
  });
};

const locateMapSpot = spot => {
  const targetCard = document.querySelector(`.spot-card[data-spot="${spot}"]`);
  if (!targetCard) return;
  const scrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  targetCard.scrollIntoView({ behavior: scrollBehavior, block: 'center' });
  targetCard.focus({ preventScroll: true });
};

mapMarkers.forEach(marker => {
  marker.addEventListener('mouseenter', () => setMapSpotState(marker.dataset.spot, true));
  marker.addEventListener('mouseleave', () => setMapSpotState(marker.dataset.spot, false));
  marker.addEventListener('focus', () => setMapSpotState(marker.dataset.spot, true));
  marker.addEventListener('blur', () => setMapSpotState(marker.dataset.spot, false));
  marker.addEventListener('click', () => locateMapSpot(marker.dataset.spot));
  marker.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      locateMapSpot(marker.dataset.spot);
    }
  });
});

mapStops.forEach(stop => {
  const button = stop.querySelector('button');
  stop.addEventListener('mouseenter', () => setMapSpotState(stop.dataset.spot, true));
  stop.addEventListener('mouseleave', () => setMapSpotState(stop.dataset.spot, false));
  button.addEventListener('focus', () => setMapSpotState(stop.dataset.spot, true));
  button.addEventListener('blur', () => setMapSpotState(stop.dataset.spot, false));
  button.addEventListener('click', () => locateMapSpot(stop.dataset.spot));
});

const mapCanvas = document.querySelector('.map-canvas');
if (mapCanvas && window.matchMedia('(max-width: 680px)').matches) {
  window.requestAnimationFrame(() => {
    mapCanvas.scrollLeft = mapCanvas.scrollWidth - mapCanvas.clientWidth;
  });
}
