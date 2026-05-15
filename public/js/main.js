/* ─── HAMBURGER MENU TOGGLE ─── */
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  /* Close menu when a nav link is clicked */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close menu when clicking outside */
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ─── ACCORDION ─── */
function setupAccordion(triggerId, bodyId) {
  const trigger = document.getElementById(triggerId);
  const body = document.getElementById(bodyId);
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
setupAccordion('triggerHarisenin', 'bodyHarisenin');
setupAccordion('triggerDqlab', 'bodyDqlab');
setupAccordion('triggerMslearn', 'bodyMslearn');

/* ─── INTERACTIVE FEATURES ─── */
// Snippet Animation Logic
// Note: 'snippets' are now fetched from the backend API

const container = document.getElementById('snippetContainer');

const fallbackSnippets = [
  { text: "=LET(data,FILTER(A:A,B:B=\"Active\"),SORT(data))", type: "excel" },
  { text: "SELECT * FROM sales WHERE revenue > 100000;", type: "sql" },
  { text: "df.groupby(\"region\")[\"revenue\"].sum()", type: "python" },
  { text: "kubectl get nodes", type: "terminal" },
  { text: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+$", type: "regex" }
];

async function initSnippets() {
  if (!container) return;

  let snippets = fallbackSnippets;

  try {
    const response = await fetch('/api/snippets');
    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data)) snippets = data;
    }
  } catch (error) {
    console.warn('Using fallback snippets due to API error:', error.message);
  }

  function createSnippet() {
    const s = snippets[Math.floor(Math.random() * snippets.length)];
    const el = document.createElement('div');
    el.className = `snippet ${s.type}`;
    el.textContent = s.text;

    // Random positioning within container
    const x = Math.random() * 70; // Stay away from right edge
    const y = Math.random() * 80;

    el.style.left = x + '%';
    el.style.top = y + '%';
    el.style.animationDelay = Math.random() * 2 + 's';

    container.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }

  // Initial burst
  for (let i = 0; i < 3; i++) setTimeout(createSnippet, i * 300);

  // Continuous loop
  setInterval(createSnippet, 1200);
}

initSnippets();

// Magnetic Buttons
const buttons = document.querySelectorAll('.btn-primary, .btn-outline, .lang-btn');
buttons.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

/* ─── LANGUAGE TOGGLE ─── */
let currentLang = 'ID';
const langBtn = document.getElementById('langBtn');

function applyLang(lang) {
  document.querySelectorAll('[data-id]').forEach(el => {
    const val = lang === 'ID' ? el.getAttribute('data-id') : el.getAttribute('data-en');
    if (val) el.textContent = val;
  });
  if (langBtn) {
    langBtn.textContent = lang === 'ID' ? 'EN' : 'ID';
  }
  currentLang = lang;
  document.documentElement.lang = lang === 'ID' ? 'id' : 'en';
}

if (langBtn) {
  langBtn.addEventListener('click', () => applyLang(currentLang === 'ID' ? 'EN' : 'ID'));
}
applyLang('ID');