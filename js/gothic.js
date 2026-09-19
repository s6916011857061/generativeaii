/**
 * GOTHIC / DARK FANTASY RPG PORTFOLIO SYSTEM
 * Profile: Nattawut Sukkijpagorn (Accounting Supervisor, SCG)
 * Developer: Champagne No.69
 * Theme: Mythic Dark Fantasy, Medieval Gothic Elegance, Ancient Stone & Crimson Blood Glow
 */

document.addEventListener('DOMContentLoaded', () => {
  initGothicSplash();
  initGothicNavigation();
  initGothicCharts();
  initGothicLightbox();
  initGothicContact();
  initGothicSlideViewer();
});

/* ==========================================================================
   1. GOTHIC RUNIC SUMMONING SEQUENCE (First Visit & Refresh Only)
   ========================================================================== */
function initGothicSplash() {
  const splash = document.getElementById('splash-screen');
  const fill = document.getElementById('splash-progress-blood');
  const pctText = document.getElementById('splash-pct');
  const logText = document.getElementById('splash-log');
  const enterBtn = document.getElementById('splash-enter-btn');

  if (!splash) return;

  const summoningLogs = [
    { pct: 25, log: "✦ [INVOCATION] AWAKENING ANCIENT SCG CHRONICLES..." },
    { pct: 50, log: "✦ [CONJURING] 17+ YEARS OF AUDIT & ACCOUNTING LORE..." },
    { pct: 75, log: "✦ [TRANSMUTING] ERP FORCES: SAP ECC & FOCUS ONE MAFUANG..." },
    { pct: 100, log: "✦ [SEAL UNLOCKED] SANCTUM OPENED. ENTER THE REALM." }
  ];

  let current = 0;
  const timer = setInterval(() => {
    current += 3;
    if (fill) fill.style.width = Math.min(100, current) + '%';
    if (pctText) pctText.innerText = Math.min(100, current) + '%';

    const curLog = summoningLogs.find(l => current <= l.pct);
    if (curLog && logText) {
      logText.innerText = curLog.log;
    }

    if (current >= 100) {
      clearInterval(timer);
      if (enterBtn) {
        enterBtn.style.display = 'inline-flex';
        enterBtn.focus();
      }
      setTimeout(() => {
        closeGothicSplash();
      }, 700);
    }
  }, 32);

  function closeGothicSplash() {
    splash.classList.add('hidden');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 600);
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', closeGothicSplash);
  }
}

/* ==========================================================================
   2. NAVIGATION & TAB SWITCHING (Chamber Transitions)
   ========================================================================== */
function initGothicNavigation() {
  const links = document.querySelectorAll('.gothic-nav-link, .gothic-strip-btn');
  const sections = document.querySelectorAll('.gothic-section');
  const toggle = document.getElementById('gothic-menu-toggle');
  const menu = document.getElementById('gothic-nav-list');

  function activateSection(id) {
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      const hdr = target.querySelector('.gothic-section-hdr');
      if (hdr) hdr.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    links.forEach(l => {
      if (l.getAttribute('data-target') === id) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });

    if (menu && menu.classList.contains('mobile-open')) {
      menu.classList.remove('mobile-open');
    }
  }

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('data-target');
      if (id) activateSection(id);
    });
  });

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('mobile-open');
    });
  }

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    activateSection(hash);
  }
}

/* ==========================================================================
   3. GOTHIC DARK FANTASY CHARTS (Chart.js Crimson & Gold Lore)
   ========================================================================== */
let chartsLoaded = false;
function initGothicCharts() {
  if (chartsLoaded) return;
  if (typeof Chart === 'undefined') return;

  // Gothic Global Chart Typography & Colors
  Chart.defaults.font.family = "'Cinzel', 'Prompt', 'Spectral', serif";
  Chart.defaults.color = '#e2d9d2';
  Chart.defaults.borderColor = 'rgba(136, 19, 55, 0.35)';

  // 1. Radar Chart: Core Competencies (Hexagram of Mastery)
  const ctxRadar = document.getElementById('chartCompetency');
  if (ctxRadar) {
    new Chart(ctxRadar.getContext('2d'), {
      type: 'radar',
      data: {
        labels: [
          'Financial & Acc Ops',
          'ERP Transformation (SAP/Focus One)',
          'Digital & RPA (Automation Anywhere)',
          'Project Coordination & Stakeholder',
          'Cross-BU Shared Services',
          'People & HRD'
        ],
        datasets: [{
          label: 'ระดับความเชี่ยวชาญ (Proficiency Level %)',
          data: [95, 92, 88, 90, 94, 85],
          backgroundColor: 'rgba(225, 29, 72, 0.28)',
          borderColor: '#e11d48',
          borderWidth: 2.5,
          pointBackgroundColor: '#d4af37',
          pointBorderColor: '#e11d48',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(212, 175, 55, 0.3)', lineWidth: 1 },
            grid: { color: 'rgba(136, 19, 55, 0.35)', lineWidth: 1 },
            pointLabels: {
              font: { size: 10.5, weight: '700' },
              color: '#d4af37'
            },
            suggestedMin: 50,
            suggestedMax: 100,
            ticks: {
              stepSize: 10,
              backdropColor: 'transparent',
              color: '#9c8e85',
              font: { weight: 'bold' }
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // 2. Bar Chart: Career Timeline (Chambers of Epochs)
  const ctxTimeline = document.getElementById('chartCareerTimeline');
  if (ctxTimeline) {
    new Chart(ctxTimeline.getContext('2d'), {
      type: 'bar',
      data: {
        labels: [
          'KPMG Audit',
          'SCG Paper (Costing)',
          'SAP ECC 6.0 User',
          'Overseas Acc & GL',
          'BIC Transformation',
          'Mafuang / Supervisor'
        ],
        datasets: [{
          label: 'ระยะเวลาแห่งประสบการณ์ (ปี)',
          data: [1.5, 2.0, 3.0, 3.5, 2.5, 4.5],
          backgroundColor: [
            'rgba(212, 175, 55, 0.85)',  // Mythic Gold
            'rgba(180, 83, 9, 0.85)',    // Bronze Amber
            'rgba(136, 19, 55, 0.85)',   // Crimson Blood
            'rgba(190, 18, 60, 0.85)',   // Rose Red
            'rgba(159, 18, 57, 0.85)',   // Ruby Deep
            'rgba(225, 29, 72, 0.95)'    // Radiant Ruby
          ],
          borderColor: '#d4af37',
          borderWidth: 1.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(136, 19, 55, 0.2)' },
            ticks: {
              stepSize: 1,
              color: '#d4af37',
              font: { weight: '700' }
            },
            title: {
              display: true,
              text: 'จำนวนปี (Years)',
              color: '#e2d9d2'
            }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#e2d9d2', font: { weight: '600' } }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // 3. Doughnut Chart: Business Coverage (The Guild Spheres)
  const ctxBU = document.getElementById('chartBUCoverage');
  if (ctxBU) {
    new Chart(ctxBU.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: [
          'Cement & Green Solutions',
          'Cement-Building Materials',
          'SCG Chemicals (SCGC)',
          'SCG Packaging (SCGP)',
          'SCG Paper',
          'SCG Trading & Network',
          'KPMG External Audit'
        ],
        datasets: [{
          data: [25, 20, 15, 12, 10, 10, 8],
          backgroundColor: [
            '#e11d48', // Ruby
            '#d4af37', // Gold
            '#881337', // Crimson
            '#a855f7', // Mystic Amethyst
            '#b45309', // Ancient Bronze
            '#059669', // Emerald
            '#3b82f6'  // Sapphire
          ],
          borderColor: '#0d090a',
          borderWidth: 2.5,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
              padding: 12,
              font: { size: 10.5, weight: '600' },
              color: '#e2d9d2'
            }
          }
        }
      }
    });
  }

  chartsLoaded = true;
}

/* ==========================================================================
   4. GOTHIC CERTIFICATE LIGHTBOX MODAL
   ========================================================================== */
function initGothicLightbox() {
  const modal = document.getElementById('gothic-cert-modal');
  const modalImg = document.getElementById('modal-cert-img');
  const modalTitle = document.getElementById('modal-cert-title');
  const modalIssuer = document.getElementById('modal-cert-issuer');
  const modalYear = document.getElementById('modal-cert-year');
  const closeBtn = document.getElementById('modal-cert-close');
  const cards = document.querySelectorAll('.gothic-cert-card');

  if (!modal) return;

  cards.forEach(c => {
    c.addEventListener('click', () => {
      const src = c.getAttribute('data-img');
      const title = c.getAttribute('data-title');
      const issuer = c.getAttribute('data-issuer');
      const year = c.getAttribute('data-year');

      if (modalImg) modalImg.src = src;
      if (modalTitle) modalTitle.innerText = title;
      if (modalIssuer) modalIssuer.innerText = issuer;
      if (modalYear) modalYear.innerText = year;

      modal.classList.add('active');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

/* ==========================================================================
   5. GOTHIC SLIDE VIEWER MODAL (All 13 Presentation Pages)
   ========================================================================== */
function initGothicSlideViewer() {
  const modal = document.getElementById('gothic-slide-modal');
  const slideImg = document.getElementById('slide-viewer-img');
  const counter = document.getElementById('slide-counter-badge');
  const prevBtn = document.getElementById('slide-prev-btn');
  const nextBtn = document.getElementById('slide-next-btn');
  const closeBtn = document.getElementById('slide-close-btn');
  const triggerBtn = document.getElementById('view-all-slides-btn');

  let currentSlide = 1;
  const totalSlides = 13;

  function updateSlide(n) {
    currentSlide = Math.max(1, Math.min(totalSlides, n));
    if (slideImg) slideImg.src = `./assets/images/page_${currentSlide}.png`;
    if (counter) counter.innerText = `CHRONICLE ${currentSlide} / ${totalSlides}`;
    if (prevBtn) prevBtn.disabled = (currentSlide === 1);
    if (nextBtn) nextBtn.disabled = (currentSlide === totalSlides);
  }

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      currentSlide = 1;
      updateSlide(1);
      modal.classList.add('active');
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(currentSlide + 1));
  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* ==========================================================================
   6. CONTACT FEATURES (vCard, Copy, Gothic Raven Message)
   ========================================================================== */
function initGothicContact() {
  const copyBtns = document.querySelectorAll('.gothic-copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const orig = btn.innerText;
          btn.innerText = '✓ COPIED';
          btn.style.color = '#d4af37';
          btn.style.borderColor = '#d4af37';
          setTimeout(() => {
            btn.innerText = orig;
            btn.style.color = '';
            btn.style.borderColor = '';
          }, 2000);
        });
      }
    });
  });

  const vcardBtn = document.getElementById('download-vcard-btn');
  if (vcardBtn) {
    vcardBtn.addEventListener('click', () => {
      const vCardData = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'FN:Nattawut Sukkijpagorn (ณัฐวุฒิ สุขกิจภากรณ์)',
        'N:Sukkijpagorn;Nattawut;;;',
        'TITLE:Accounting Supervisor',
        'ORG:The Siam Cement Public Company Limited (SCG);Corporate Accounting Office',
        'TEL;TYPE=CELL:0928794594',
        'EMAIL;TYPE=WORK:champ.667@gmail.com',
        'NOTE:Curriculum Vitae Presentation - 17+ Years in Audit, Accounting Operations, ERP Transformation',
        'END:VCARD'
      ].join('\r\n');

      const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Nattawut_Sukkijpagorn.vcf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  }

  const form = document.getElementById('gothic-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'DISPATCHING RAVEN...';
      }

      setTimeout(() => {
        alert('✦ TRANSMISSION SEALED & DELIVERED! ขอบคุณสำหรับข้อความของคุณ สารของคุณได้รับการบันทึกสู่หอจดหมายเหตุเรียบร้อยแล้ว');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'DISPATCH TRANSMISSION ➔';
        }
      }, 900);
    });
  }
}
