/**
 * CYBERPUNK / SCI-FI HUD PORTFOLIO SYSTEM
 * Profile: Nattawut Sukkijpagorn (Accounting Supervisor, SCG)
 * Developer: Champagne No.69
 */

document.addEventListener('DOMContentLoaded', () => {
  initCyberSplash();
  initCyberNavigation();
  initCyberCharts();
  initCyberLightbox();
  initCyberContact();
  initCyberSlideViewer();
});

/* ==========================================================================
   1. CYBERPUNK HUD BOOT SEQUENCE (First Visit & Refresh Only)
   ========================================================================== */
function initCyberSplash() {
  const splash = document.getElementById('splash-screen');
  const fill = document.getElementById('splash-progress-fill');
  const pctText = document.getElementById('splash-pct');
  const logText = document.getElementById('splash-log');
  const enterBtn = document.getElementById('splash-enter-btn');

  if (!splash) return;

  const bootLogs = [
    { pct: 25, log: "[INIT] CONNECTING TO SCG SECURE MAINFRAME..." },
    { pct: 55, log: "[LOAD] DECRYPTING 17+ YEARS CAREER PROTOCOL..." },
    { pct: 80, log: "[SYNC] CALIBRATING ERP TRANSFORMATION MATRICES..." },
    { pct: 100, log: "[READY] NEURAL HUD INTERFACE ONLINE." }
  ];

  let current = 0;
  const timer = setInterval(() => {
    current += 4;
    if (fill) fill.style.width = current + '%';
    if (pctText) pctText.innerText = current + '%';

    const curLog = bootLogs.find(l => current <= l.pct);
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
        closeCyberSplash();
      }, 650);
    }
  }, 35);

  function closeCyberSplash() {
    splash.classList.add('hidden');
    setTimeout(() => {
      splash.style.display = 'none';
    }, 500);
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', closeCyberSplash);
  }
}

/* ==========================================================================
   2. NAVIGATION & TAB SWITCHING
   ========================================================================== */
function initCyberNavigation() {
  const links = document.querySelectorAll('.cyber-nav-link, .cyber-strip-btn');
  const sections = document.querySelectorAll('.cyber-section');
  const toggle = document.getElementById('cyber-menu-toggle');
  const menu = document.getElementById('cyber-nav-list');

  function activateSection(id) {
    sections.forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      const hdr = target.querySelector('.cyber-section-hdr');
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
   3. CYBERPUNK CHARTS (Chart.js Glowing Dark HUD)
   ========================================================================== */
let chartsLoaded = false;
function initCyberCharts() {
  if (chartsLoaded) return;
  if (typeof Chart === 'undefined') return;

  // Global Chart Configuration for Cyberpunk
  Chart.defaults.font.family = "'Orbitron', 'Space Grotesk', 'Prompt', sans-serif";
  Chart.defaults.color = '#8b9bb4';
  Chart.defaults.borderColor = 'rgba(0, 240, 255, 0.18)';

  // 1. Radar Chart: Core Competencies
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
          label: 'ศักยภาพและทักษะความชำนาญ (Proficiency Level %)',
          data: [95, 92, 88, 90, 94, 85],
          backgroundColor: 'rgba(0, 240, 255, 0.25)',
          borderColor: '#00f0ff',
          borderWidth: 2.5,
          pointBackgroundColor: '#ff0055',
          pointBorderColor: '#00f0ff',
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
            angleLines: { color: 'rgba(0, 240, 255, 0.25)', lineWidth: 1 },
            grid: { color: 'rgba(0, 240, 255, 0.15)', lineWidth: 1 },
            pointLabels: {
              font: { size: 10, weight: '700' },
              color: '#00f0ff'
            },
            suggestedMin: 50,
            suggestedMax: 100,
            ticks: {
              stepSize: 10,
              backdropColor: 'transparent',
              color: '#8b9bb4',
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

  // 2. Bar Chart: Career Timeline by Years
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
          label: 'ระยะเวลาประสบการณ์ (ปี)',
          data: [1.5, 2.0, 3.0, 3.5, 2.5, 4.5],
          backgroundColor: [
            'rgba(0, 240, 255, 0.8)',
            'rgba(0, 255, 102, 0.8)',
            'rgba(255, 230, 0, 0.8)',
            'rgba(255, 0, 85, 0.8)',
            'rgba(157, 0, 255, 0.8)',
            'rgba(0, 240, 255, 1.0)'
          ],
          borderColor: '#00f0ff',
          borderWidth: 1.5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0, 240, 255, 0.1)' },
            ticks: {
              stepSize: 1,
              color: '#00f0ff',
              font: { weight: '700' }
            },
            title: {
              display: true,
              text: 'จำนวนปี (Years)',
              color: '#8b9bb4'
            }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#8b9bb4', font: { weight: '600' } }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  // 3. Doughnut Chart: Business Coverage
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
            '#00f0ff',
            '#ff0055',
            '#ffe600',
            '#00ff66',
            '#9d00ff',
            '#ff7b00',
            '#3b82f6'
          ],
          borderColor: '#050811',
          borderWidth: 2,
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
              font: { size: 10, weight: '600' },
              color: '#8b9bb4'
            }
          }
        }
      }
    });
  }

  chartsLoaded = true;
}

/* ==========================================================================
   4. CERTIFICATE LIGHTBOX MODAL
   ========================================================================== */
function initCyberLightbox() {
  const modal = document.getElementById('cyber-cert-modal');
  const modalImg = document.getElementById('modal-cert-img');
  const modalTitle = document.getElementById('modal-cert-title');
  const modalIssuer = document.getElementById('modal-cert-issuer');
  const modalYear = document.getElementById('modal-cert-year');
  const closeBtn = document.getElementById('modal-cert-close');
  const cards = document.querySelectorAll('.cyber-cert-card');

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
   5. SLIDE VIEWER MODAL (All 13 Presentation Pages)
   ========================================================================== */
function initCyberSlideViewer() {
  const modal = document.getElementById('cyber-slide-modal');
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
    if (counter) counter.innerText = `NODE ${currentSlide} / ${totalSlides}`;
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
   6. CONTACT FEATURES (vCard, Copy, Form)
   ========================================================================== */
function initCyberContact() {
  const copyBtns = document.querySelectorAll('.cyber-copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const orig = btn.innerText;
          btn.innerText = '✓ COPIED';
          btn.style.color = '#00ff66';
          btn.style.borderColor = '#00ff66';
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

  const form = document.getElementById('cyber-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'TRANSMITTING DATA...';
      }

      setTimeout(() => {
        alert('TRANSMISSION SUCCESSFUL! ขอบคุณสำหรับข้อความของคุณ ระบบได้รับการบันทึกข้อมูลเรียบร้อยแล้ว');
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'TRANSMIT MESSAGE →';
        }
      }, 900);
    });
  }
}
