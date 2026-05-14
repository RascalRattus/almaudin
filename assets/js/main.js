/* ─── SCROLL PROGRESS & NAV SHRINK ─── */
const bar = document.getElementById('progress-bar');
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  bar.style.width = pct + '%';
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ─── REVEAL ON SCROLL ─── */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
reveals.forEach(r => revealObserver.observe(r));

/* ─── STAGE BAR ANIMATE ─── */
const stageBars = document.querySelectorAll('.stage-bar-fill');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.style.getPropertyValue('--pct');
    }
  });
}, { threshold: 0.4 });
stageBars.forEach(b => barObserver.observe(b));

/* ─── ACCORDION ─── */
function setupAccordion(triggerId, bodyId) {
  const trigger = document.getElementById(triggerId);
  const body    = document.getElementById(bodyId);
  if (!trigger || !body) return;

  trigger.addEventListener('click', () => {
    const isOpen = body.classList.contains('open');

    /* Close all */
    document.querySelectorAll('.ld-accordion-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.ld-accordion-trigger').forEach(t => {
      t.classList.remove('open');
      t.setAttribute('aria-expanded', 'false');
    });

    /* Open this one if it was closed */
    if (!isOpen) {
      body.classList.add('open');
      trigger.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
      setTimeout(() => trigger.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
  });
}
setupAccordion('triggerDqlab',   'bodyDqlab');
setupAccordion('triggerMslearn', 'bodyMslearn');

/* ─── LANGUAGE TOGGLE ─── */
let currentLang = 'ID';
const langBtn = document.getElementById('langBtn');

function applyLang(lang) {
  document.querySelectorAll('[data-id]').forEach(el => {
    const val = lang === 'ID' ? el.getAttribute('data-id') : el.getAttribute('data-en');
    if (val) el.textContent = val;
  });
  langBtn.textContent = lang === 'ID' ? 'EN' : 'ID';
  currentLang = lang;
  document.documentElement.lang = lang === 'ID' ? 'id' : 'en';
}

langBtn.addEventListener('click', () => applyLang(currentLang === 'ID' ? 'EN' : 'ID'));
applyLang('ID');
