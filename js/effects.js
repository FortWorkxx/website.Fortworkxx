/* ═══════════════════════════════════════════════════════════
   FORTWORKXX — Immersive Effects Engine
   Preloader · Custom cursor · Particle field · Reveal-on-scroll
   Magnetic buttons · Header state · Toasts
   ═══════════════════════════════════════════════════════════ */

const FX = (() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ── Preloader ── */
  function initPreloader() {
    const el = document.getElementById('preloader');
    const skip = document.getElementById('preloader-skip');
    if (!el) return;
    document.body.classList.add('no-scroll');
    let closed = false;
    const close = () => {
      if (closed) return;
      closed = true;
      el.classList.add('done');
      document.body.classList.remove('no-scroll');
      setTimeout(() => el.remove(), 800);
    };
    const delay = reduced ? 200 : 2000;
    const timer = setTimeout(close, delay);
    skip?.addEventListener('click', () => { clearTimeout(timer); close(); });
    el.addEventListener('click', () => { clearTimeout(timer); close(); });
    window.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') { clearTimeout(timer); close(); window.removeEventListener('keydown', onKey); }
    });
  }

  /* ── Custom cursor ── */
  function initCursor() {
    if (!finePointer || reduced) return;
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;
    let mx = -100, my = -100, rx = -100, ry = -100;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    });
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();
    const interactive = 'a, button, input, textarea, select, .project-card, .division-card, .service-card';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactive)) ring.classList.add('is-active');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactive)) ring.classList.remove('is-active');
    });
  }

  /* ── Ambient particle field ── */
  function initParticles() {
    const canvas = document.getElementById('fx-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles = [], raf, mouse = { x: -999, y: -999 };
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const COLORS = [
      { r: 198, g: 161, b: 91 },   // gold
      { r: 232, g: 200, b: 126 },  // light gold
      { r: 43, g: 82, b: 200 },    // royal blue
      { r: 255, g: 255, b: 255 },  // white (rare)
    ];

    function resize() {
      w = canvas.width = window.innerWidth * DPR;
      h = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      const count = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 22000));
      particles = Array.from({ length: count }, () => spawn());
    }

    function spawn() {
      const c = COLORS[Math.random() < 0.55 ? 0 : Math.random() < 0.7 ? 1 : Math.random() < 0.85 ? 2 : 3];
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22 * DPR,
        vy: (Math.random() - 0.5) * 0.22 * DPR,
        r: (Math.random() * 1.6 + 0.5) * DPR,
        a: Math.random() * 0.5 + 0.15,
        c,
        tw: Math.random() * Math.PI * 2,
      };
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      const mx = mouse.x * DPR, my = mouse.y * DPR;
      for (const p of particles) {
        // gentle mouse repel
        const dx = p.x - mx, dy = p.y - my;
        const dist2 = dx * dx + dy * dy;
        const R = 140 * DPR;
        if (dist2 < R * R && dist2 > 0.01) {
          const dist = Math.sqrt(dist2);
          const force = (1 - dist / R) * 0.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
        p.vx *= 0.992; p.vy *= 0.992;
        p.x += p.vx; p.y += p.vy;
        p.tw += 0.02;
        if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; if (p.y > h + 20) p.y = -20;

        const alpha = p.a * (0.7 + 0.3 * Math.sin(p.tw));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c.r},${p.c.g},${p.c.b},${alpha})`;
        ctx.fill();
      }
      // subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const MAX = (110 * DPR) ** 2;
          if (d2 < MAX) {
            const alpha = (1 - d2 / MAX) * 0.07;
            ctx.strokeStyle = `rgba(198,161,91,${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    document.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });
    resize();
    if (!reduced) frame();
    else { // static single paint
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c.r},${p.c.g},${p.c.b},${p.a})`; ctx.fill();
      }
    }
  }

  /* ── Header scroll state ── */
  function initHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Fullscreen menu ── */
  function initMenu() {
    const toggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('menu-overlay');
    if (!toggle || !overlay) return;
    const setOpen = (open) => {
      toggle.classList.toggle('open', open);
      overlay.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      overlay.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('no-scroll', open);
      if (open) {
        overlay.querySelectorAll('.menu-links a').forEach((a, i) => {
          a.style.transitionDelay = `${0.06 * i + 0.1}s`;
        });
      } else {
        overlay.querySelectorAll('.menu-links a').forEach((a) => { a.style.transitionDelay = '0s'; });
      }
    };
    toggle.addEventListener('click', () => setOpen(!overlay.classList.contains('open')));
    overlay.querySelectorAll('[data-menu-link]').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('open')) setOpen(false); });
  }

  /* ── Reveal on scroll ── */
  let revealObserver;
  function initReveals(scope = document) {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    scope.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale').forEach((el) => {
      if (!el.classList.contains('in')) revealObserver.observe(el);
    });
  }

  /* ── Counters ── */
  function initCounters(scope = document) {
    const els = scope.querySelectorAll('[data-count]');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        obs.unobserve(el);
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const dur = reduced ? 10 : 1600;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased).toLocaleString() + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    els.forEach((el) => obs.observe(el));
  }

  /* ── Magnetic buttons ── */
  function initMagnetic(scope = document) {
    if (!finePointer || reduced) return;
    scope.querySelectorAll('.btn, .filter-pill').forEach((btn) => {
      if (btn.dataset.mag) return;
      btn.dataset.mag = '1';
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ── Division card tilt ── */
  function initTilt(scope = document) {
    if (!finePointer || reduced) return;
    scope.querySelectorAll('.division-card').forEach((card) => {
      if (card.dataset.tilt) return;
      card.dataset.tilt = '1';
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-8px) rotateX(${-py * 5}deg) rotateY(${px * 6}deg)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  /* ── Toast ── */
  let toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 3600);
  }

  /* ── Page sweep transition ── */
  function sweep(mid) {
    const el = document.getElementById('page-sweep');
    if (!el || reduced) { mid(); return Promise.resolve(); }
    return new Promise((resolve) => {
      el.classList.remove('out');
      el.classList.add('in');
      setTimeout(() => {
        mid();
        el.classList.remove('in');
        el.classList.add('out');
        setTimeout(() => { el.classList.remove('out'); resolve(); }, 520);
      }, 430);
    });
  }

  function boot() {
    initPreloader();
    initCursor();
    initParticles();
    initHeader();
    initMenu();
    initReveals();
    initCounters();
    initMagnetic();
    initTilt();
  }

  return { boot, initReveals, initCounters, initMagnetic, initTilt, toast, sweep };
})();
