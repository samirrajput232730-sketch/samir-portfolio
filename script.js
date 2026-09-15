/* ==========================================================
   ICONS — small inline SVG set, referenced by name from content.js
   ========================================================== */
const ICONS = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5 5 0 0 1 16 8Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 1 1-5.66 5.66L3 18l3 3 6.04-6.04a4 4 0 0 1 5.66-5.66l-2.83 2.83-2.12-2.12 2.95-2.71Z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="m9 13.5-1.5 7L12 18l4.5 2.5-1.5-7"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Z"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
};
function icon(name, extraClass) {
  return `<span class="icon${extraClass ? " " + extraClass : ""}" aria-hidden="true">${ICONS[name] || ""}</span>`;
}

/* ==========================================================
   RENDER — build repeating sections from content.js
   ========================================================== */
function renderContent() {
  if (typeof siteContent === "undefined") return;

  // Hero stat tiles
  const statStrip = document.getElementById("statStrip");
  if (statStrip && siteContent.stats) {
    statStrip.innerHTML = siteContent.stats.map(stat => `
      <div class="stat${stat.target ? " stat-target" : ""}">
        ${icon(stat.icon, "stat-icon")}
        <dt data-count="${stat.target ? "" : parseInt(stat.value, 10) || ""}">${stat.value}</dt>
        <dd>${stat.label}</dd>
      </div>
    `).join("");
  }

  // Experience timeline
  const timeline = document.getElementById("timeline");
  if (timeline && siteContent.experience) {
    timeline.innerHTML = siteContent.experience.map(job => `
      <li class="timeline-item${job.current ? " is-current" : ""}">
        <div class="timeline-marker">${icon(job.icon)}</div>
        <div class="timeline-body">
          <div class="timeline-heading">
            <h3>${job.title}${job.current ? '<span class="live-tag">● current</span>' : ""}</h3>
            <span class="date-range">${job.dateRange}</span>
          </div>
          <p class="role-meta">${job.org}</p>
          <ul>
            ${job.bullets.map(b => `<li>${b}</li>`).join("")}
          </ul>
        </div>
      </li>
    `).join("");
  }

  // Self-built tools / projects
  const projectGrid = document.getElementById("projectGrid");
  if (projectGrid && siteContent.projects) {
    projectGrid.innerHTML = siteContent.projects.map(p => `
      <article class="project-card" data-tilt>
        <div class="project-top">
          <div class="project-icon">${icon(p.icon)}</div>
          <span class="status-chip"><span class="status-dot"></span>${p.status}</span>
        </div>
        <h3>${p.title}</h3>
        <p class="project-tagline">${p.tagline}</p>
        <p class="project-desc">${p.description}</p>
        <ul class="project-highlights">
          ${p.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
        <div class="tag-row">
          ${p.tags.map(t => `<span class="tag-chip">${t}</span>`).join("")}
        </div>
        <div class="project-footer">
          ${p.demoUrl ? `<a href="${p.demoUrl}" class="btn btn-primary btn-small" target="_blank" rel="noopener">${p.demoLabel || "View live demo"} ${icon("arrowRight")}</a>` : ""}
          ${p.note ? `<span class="project-note">${p.note}</span>` : ""}
        </div>
      </article>
    `).join("");
  }

  // Skill cards
  const skillGrid = document.getElementById("skillGrid");
  if (skillGrid && siteContent.skills) {
    const variants = ["skill-card-a", "skill-card-b", "skill-card-c"];
    skillGrid.innerHTML = siteContent.skills.map((skill, i) => `
      <div class="skill-card ${variants[i % variants.length]}" data-tilt>
        <div class="skill-icon">${icon(skill.icon)}</div>
        <h3>${skill.title}</h3>
        <p>${skill.description}</p>
      </div>
    `).join("");
  }

  // Education / credentials
  const eduGrid = document.getElementById("eduGrid");
  if (eduGrid && siteContent.education) {
    eduGrid.innerHTML = siteContent.education.map(item => `
      <div class="edu-item">
        <div class="edu-icon">${icon(item.icon)}</div>
        <div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </div>
      </div>
    `).join("");
  }

  // Contact cards
  const contactGrid = document.getElementById("contactGrid");
  if (contactGrid && siteContent.contact) {
    contactGrid.innerHTML = siteContent.contact.map(item => {
      const inner = `
        <span class="contact-icon">${icon(item.icon)}</span>
        <span class="contact-text">
          <span class="contact-label">${item.label}</span>
          <span class="contact-value">${item.value}</span>
        </span>
        ${item.href ? `<span class="contact-arrow">${icon("arrowRight")}</span>` : ""}
      `;
      if (item.href) {
        const externalAttrs = item.external ? ' target="_blank" rel="noopener"' : "";
        return `<a href="${item.href}" class="contact-card"${externalAttrs}>${inner}</a>`;
      }
      return `<div class="contact-card contact-card-static">${inner}</div>`;
    }).join("");
  }

  // Résumé download links
  if (siteContent.resume && siteContent.resume.file) {
    document.querySelectorAll('a[download]').forEach(a => { a.href = siteContent.resume.file; });
  }

  // Build the in-page résumé view (rendered from data, not a PDF embed —
  // this is what actually shows up instantly on every device, no download
  // needed and no blank-iframe problem on mobile browsers).
  renderResumeView();
}

function renderResumeView() {
  const el = document.getElementById("resumeView");
  if (!el || typeof siteContent === "undefined") return;
  const p = siteContent.profile || {};

  el.innerHTML = `
    <div class="resume-doc">
      <header class="resume-head">
        <h2>${p.name || ""}</h2>
        <p class="resume-role">${p.title || ""}</p>
        <p class="resume-meta">
          ${(siteContent.contact || []).map(c => c.value).join("  ·  ")}
        </p>
      </header>

      ${p.summary ? `<section class="resume-section"><h4>Summary</h4><p>${p.summary}</p></section>` : ""}

      <section class="resume-section">
        <h4>Experience</h4>
        ${(siteContent.experience || []).map(job => `
          <div class="resume-entry">
            <div class="resume-entry-head">
              <strong>${job.title}</strong>
              <span>${job.dateRange}</span>
            </div>
            <p class="resume-org">${job.org}</p>
            <ul>${job.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
          </div>
        `).join("")}
      </section>

      <section class="resume-section">
        <h4>Core competencies</h4>
        <ul class="resume-chip-list">
          ${(siteContent.skills || []).map(s => `<li>${s.title}</li>`).join("")}
        </ul>
      </section>

      <section class="resume-section">
        <h4>Education &amp; credentials</h4>
        ${(siteContent.education || []).map(e => `
          <div class="resume-entry resume-entry-tight">
            <strong>${e.title}</strong>
            <p>${e.detail}</p>
          </div>
        `).join("")}
      </section>
    </div>
  `;
}

renderContent();

/* ==========================================================
   MOBILE NAV
   ========================================================== */
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* Highlight the nav link for the section currently in view */
const navLinks = Array.from(nav.querySelectorAll('a[href^="#"]'));
const trackedSections = navLinks
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window && trackedSections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = navLinks.find(a => a.getAttribute('href') === `#${entry.target.id}`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  trackedSections.forEach(s => navObserver.observe(s));
}

/* ==========================================================
   THEME TOGGLE
   ========================================================== */
const themeToggle = document.getElementById('themeToggle');
if (themeToggle && typeof themeOrder !== 'undefined') {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || themeOrder[0];
    const nextIndex = (themeOrder.indexOf(current) + 1) % themeOrder.length;
    const next = themeOrder[nextIndex];
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  });
}

/* ==========================================================
   RESUME VIEWER MODAL (shows the rendered résumé instantly —
   no download required to preview it)
   ========================================================== */
const resumeModal = document.getElementById('resumeModal');
const viewResumeBtn = document.getElementById('viewResumeBtn');
const resumeModalClose = document.getElementById('resumeModalClose');
const resumeModalBackdrop = document.getElementById('resumeModalBackdrop');

function openResumeModal() {
  if (!resumeModal) return;
  resumeModal.hidden = false;
  document.body.style.overflow = 'hidden';
  resumeModalClose.focus();
}
function closeResumeModal() {
  if (!resumeModal) return;
  resumeModal.hidden = true;
  document.body.style.overflow = '';
  viewResumeBtn.focus();
}
if (viewResumeBtn) viewResumeBtn.addEventListener('click', openResumeModal);
if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeModal);
if (resumeModalBackdrop) resumeModalBackdrop.addEventListener('click', closeResumeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && resumeModal && !resumeModal.hidden) closeResumeModal();
});

/* ==========================================================
   SCROLL REVEAL
   ========================================================== */
const revealTargets = document.querySelectorAll('.hero, .section');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

/* Small stagger for grid items within a just-revealed section */
const staggerGrids = document.querySelectorAll('#projectGrid, #skillGrid, #eduGrid, #contactGrid, #timeline');
if ('IntersectionObserver' in window) {
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Array.from(entry.target.children).forEach((child, i) => {
          child.style.transitionDelay = `${Math.min(i * 70, 350)}ms`;
        });
        entry.target.classList.add('is-visible');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  staggerGrids.forEach(el => staggerObserver.observe(el));
}

/* ==========================================================
   ANIMATED STAT COUNTERS (hero) — runs once when hero enters view
   ========================================================== */
function animateCounters() {
  document.querySelectorAll('.stat dt[data-count]').forEach(dt => {
    const target = parseInt(dt.dataset.count, 10);
    if (!target || dt.dataset.done) return;
    dt.dataset.done = "1";
    const suffix = dt.textContent.replace(/[0-9]/g, '');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dt.textContent = target + suffix;
      return;
    }
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      dt.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
const heroEl = document.querySelector('.hero');
if (heroEl && 'IntersectionObserver' in window) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        heroObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  heroObserver.observe(heroEl);
} else {
  animateCounters();
}

/* ==========================================================
   HERO CURSOR SPOTLIGHT — the one bold, contained effect
   ========================================================== */
const prefersFinePointer = window.matchMedia('(pointer: fine)').matches;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wantsPointerEffects = prefersFinePointer && !prefersReducedMotion;

const heroSpotlight = document.querySelector('.hero');
if (heroSpotlight && wantsPointerEffects) {
  heroSpotlight.addEventListener('pointermove', (e) => {
    const rect = heroSpotlight.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    heroSpotlight.style.setProperty('--spot-x', `${x}%`);
    heroSpotlight.style.setProperty('--spot-y', `${y}%`);
  });
}

/* ==========================================================
   MAGNETIC PRIMARY BUTTONS (desktop only, subtle pull toward cursor)
   ========================================================== */
if (wantsPointerEffects) {
  document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.12}px, ${y * 0.28}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });

  /* Gentle 3D tilt on cards */
  document.addEventListener('pointermove', (e) => {
    const card = e.target.closest('[data-tilt]');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-3px)`;
  });
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

/* ==========================================================
   BACK TO TOP
   ========================================================== */
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('is-visible', window.scrollY > 700);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Footer year */
const footerYear = document.querySelector('.footer-year');
if (footerYear) {
  footerYear.textContent = `${new Date().getFullYear()}`;
}
