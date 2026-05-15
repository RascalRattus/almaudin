/* ─── GLOBAL CONTROLS ─── */
const bar = document.getElementById('progress-bar');
const nav = document.getElementById('navbar');
const cursorGlow = document.getElementById('cursorGlow');

// Scroll Logic
window.addEventListener('scroll', () => {
  const scrollPct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  if(bar) bar.style.width = scrollPct + '%';
  
  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
}, { passive: true });

// Cursor Glow Logic
if (cursorGlow) {
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    cursorGlow.style.left = clientX + 'px';
    cursorGlow.style.top = clientY + 'px';
    cursorGlow.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
  });
}

/* ─── REVEAL ON SCROLL ─── */
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      // Stagger children if it's a grid/container
      const staggers = entry.target.querySelectorAll('.badge-card, .stage-card, .vault-item, .ld-accordion');
      staggers.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.1}s`;
        el.classList.add('visible');
      });

      // Special handling for achievement bars
      if (entry.target.classList.contains('stage-timeline')) {
        const bars = entry.target.querySelectorAll('.stage-bar-fill');
        bars.forEach(bar => {
          const pct = bar.parentElement.parentElement.getAttribute('data-pct');
          bar.style.width = pct + '%';
        });
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
