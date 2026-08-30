/* ============================================================
   YASMIN ABOALKHAIR PORTFOLIO — MAIN JAVASCRIPT v2
   Scroll Reveals, 3D Tilt, Filter, Header, Email Copy
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initHeaderScroll();
  initMobileNav();
  initFilterBar();
  initPhotoTilt();
  initBorderGlow();
  initTestimonialsMarquee();
});

/* ---------- Scroll Reveal (IntersectionObserver) ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

/* ---------- Header Scroll ---------- */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });
}

/* ---------- Mobile Navigation ---------- */
function initMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active');
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  nav.querySelectorAll('.header-nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

/* ---------- Filter Bar ---------- */
function initFilterBar() {
  const filterBar = document.getElementById('filter-bar');
  const grid = document.getElementById('projects-grid');
  if (!filterBar || !grid) return;

  const chips = filterBar.querySelectorAll('.filter-chip');
  const cards = grid.querySelectorAll('.project-card');

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      const filter = chip.dataset.filter;

      cards.forEach((card) => {
        const categories = (card.dataset.category || '').trim().split(/\s+/);
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = '';
          card.classList.remove('is-visible');
          requestAnimationFrame(() => { card.classList.add('is-visible'); });
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ---------- 3D Photo Tilt (Parallax on Mouse Move) ---------- */
function initPhotoTilt() {
  const card = document.getElementById('hero-photo-card');
  if (!card) return;

  const wrapper = card.closest('.hero__photo-wrapper');
  if (!wrapper) return;

  // Sensitivity: lower = more tilt
  const maxTilt = 12;
  let rafId = null;

  wrapper.addEventListener('mouseenter', () => {
    card.classList.add('is-tilting');
  });

  wrapper.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);

    rafId = requestAnimationFrame(() => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized offset from center (-1 to 1)
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      // Invert Y for natural tilt feel
      const tiltX = -deltaY * maxTilt;
      const tiltY = deltaX * maxTilt;

      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  });

  wrapper.addEventListener('mouseleave', () => {
    if (rafId) cancelAnimationFrame(rafId);
    card.classList.remove('is-tilting');
    // Smooth return to rest position
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

    // Re-enable CSS animation after transition
    setTimeout(() => {
      card.style.transition = 'transform 0.1s ease-out, box-shadow 0.35s ease';
    }, 500);
  });
}

/* ---------- Copy Email ---------- */
function copyEmail() {
  const email = 'yasminaaboalkher34@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast();
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = email;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast();
  });
}

function showToast() {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.classList.add('is-visible');
  setTimeout(() => { toast.classList.remove('is-visible'); }, 2800);
}

/* ---------- Border Glow Pointer Tracking (Approach Section) ---------- */
function initBorderGlow() {
  const cards = document.querySelectorAll('.border-glow-card, .pillar-card');
  if (!cards.length) return;

  cards.forEach((card) => {
    let rafId = null;

    card.addEventListener('pointermove', (e) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        const dx = x - cx;
        const dy = y - cy;

        // Proximity to edge: 0 at center, 100 at card edge
        let kx = Infinity;
        let ky = Infinity;
        if (dx !== 0) kx = cx / Math.abs(dx);
        if (dy !== 0) ky = cy / Math.abs(dy);
        const minK = Math.min(kx, ky);
        const proximity = Math.min(Math.max(1 / minK, 0), 1) * 100;

        // Angle from center: 0deg to 360deg
        const radians = Math.atan2(dy, dx);
        let degrees = radians * (180 / Math.PI) + 90;
        if (degrees < 0) degrees += 360;

        card.style.setProperty('--edge-proximity', proximity.toFixed(2));
        card.style.setProperty('--cursor-angle', `${degrees.toFixed(2)}deg`);
      });
    });

    card.addEventListener('pointerleave', () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.setProperty('--edge-proximity', '0');
    });
  });
}

/* ---------- Testimonials Infinite Marquee Controls ---------- */
function initTestimonialsMarquee() {
  const wrapper = document.getElementById('testimonials-marquee');
  if (!wrapper) return;

  const track = wrapper.querySelector('.testimonials-marquee-track');
  if (!track) return;

  // Touch and pointer hover pause handling
  wrapper.addEventListener('pointerenter', () => {
    track.classList.add('is-paused');
  });

  wrapper.addEventListener('pointerleave', () => {
    track.classList.remove('is-paused');
  });

  wrapper.addEventListener('touchstart', () => {
    track.classList.add('is-paused');
  }, { passive: true });

  wrapper.addEventListener('touchend', () => {
    track.classList.remove('is-paused');
  }, { passive: true });
}

window.copyEmail = copyEmail;
window.initBorderGlow = initBorderGlow;
window.initTestimonialsMarquee = initTestimonialsMarquee;
