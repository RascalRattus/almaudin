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
setupAccordion('triggerHarisenin', 'bodyHarisenin');
setupAccordion('triggerDqlab',   'bodyDqlab');
setupAccordion('triggerMslearn', 'bodyMslearn');

/* ─── INTERACTIVE FEATURES ─── */
// Snippet Animation Logic
// Note: 'snippets' are now fetched from the backend API

const container = document.getElementById('snippetContainer');

async function initSnippets() {
  if (!container) return;

  try {
    const response = await fetch('/api/snippets');
    const snippets = await response.json();

    if (snippets && Array.isArray(snippets)) {
      function createSnippet() {
        const s = snippets[Math.floor(Math.random() * snippets.length)];
        const el = document.createElement('div');
        el.className = `snippet ${s.type}`;
        el.textContent = s.text;
        el.style.left = Math.random() * 80 + '%';
        el.style.top = Math.random() * 80 + '%';
        el.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(el);
        setTimeout(() => el.remove(), 4000);
      }
      setInterval(createSnippet, 800);
    }
  } catch (error) {
    console.error('Failed to load snippets:', error);
  }
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
