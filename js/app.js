/**
 * PROJECT 69 - NEOBRUTALISM PERSONAL PORTFOLIO & REPORT SYSTEM
 * Profile: Nattawut Sukkijpagorn (Accounting Supervisor, SCG)
 * Developer: Champagne No.69
 */

document.addEventListener('DOMContentLoaded', () => {
  initSplashScreen();
  initNavigation();
  initCharts();
  initCertificateLightbox();
  initContactFeatures();
  initSlideViewer();
});

/* ==========================================================================
   1. SPLASH SCREEN (Runs on First Visit & Every Refresh)
   ========================================================================== */
function initSplashScreen() {
  const splashScreen = document.getElementById('splash-screen');
  const progressBar = document.getElementById('splash-progress-bar');
  const progressText = document.getElementById('splash-progress-text');
  const statusMessage = document.getElementById('splash-status-message');
  const enterBtn = document.getElementById('splash-enter-btn');

  if (!splashScreen) return;

  const statusSteps = [
    { pct: 20, msg: "กำลังอ่านข้อมูลประวัติและผลงาน..." },
    { pct: 45, msg: "กำลังประมวลผล ERP & Career Data 17+ ปี..." },
    { pct: 75, msg: "กำลังเชื่อมต่อโครงสร้าง Dashboard..." },
    { pct: 100, msg: "พร้อมเปิดระบบรายงานผลงานบุคคล!" }
  ];

  let currentPct = 0;
  const interval = setInterval(() => {
    currentPct += 5;
    if (progressBar) progressBar.style.width = currentPct + '%';
    if (progressText) progressText.innerText = currentPct + '%';

    // Update status text
    const currentStep = statusSteps.find(s => currentPct <= s.pct);
    if (currentStep && statusMessage) {
      statusMessage.innerText = currentStep.msg;
    }

    if (currentPct >= 100) {
      clearInterval(interval);
      if (enterBtn) {
        enterBtn.style.display = 'inline-flex';
        enterBtn.focus();
      }
      // Auto close after brief moment if user doesn't click
      setTimeout(() => {
        closeSplash();
      }, 700);
    }
  }, 40);

  function closeSplash() {
    splashScreen.classList.add('hidden');
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 500);
  }

  if (enterBtn) {
    enterBtn.addEventListener('click', closeSplash);
  }
}

/* ==========================================================================
   2. NAVIGATION & TAB SWITCHING
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link, .quick-nav-btn');
  const sections = document.querySelectorAll('.portfolio-section');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  function switchTab(targetId) {
    // Hide all sections
    sections.forEach(sec => {
      sec.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
      // Scroll smoothly to section header
      const headerElem = targetSection.querySelector('.section-header-box');
      if (headerElem) {
        headerElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Update nav active state
    navLinks.forEach(link => {
      if (link.getAttribute('data-target') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    if (navMenu && navMenu.classList.contains('mobile-open')) {
      navMenu.classList.remove('mobile-open');
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      if (targetId) switchTab(targetId);
    });
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }

  // Support direct URL hash if present
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  }
}

/* ==========================================================================
   3. DASHBOARD CHARTS (Chart.js Integration)
   ========================================================================== */
let chartsInitialized = false;
function initCharts() {
  if (chartsInitialized) return;
  if (typeof Chart === 'undefined') return;

  // Chart Global Defaults for Neobrutalism
  Chart.defaults.font.family = "'Space Grotesk', 'Prompt', sans-serif";
  Chart.defaults.font.weight = '600';
  Chart.defaults.color = '#000000';
  Chart.defaults.borderColor = '#000000';

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
          backgroundColor: 'rgba(255, 225, 93, 0.55)',
          borderColor: '#000000',
          borderWidth: 3,
          pointBackgroundColor: '#FF6B6B',
          pointBorderColor: '#000000',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: '#000', lineWidth: 1.5 },
            grid: { color: 'rgba(0,0,0,0.15)', lineWidth: 1.5 },
            pointLabels: {
              font: { size: 11, weight: '700' },
              color: '#000000'
            },
            suggestedMin: 50,
            suggestedMax: 100,
            ticks: {
              stepSize: 10,
              backdropColor: 'transparent',
              font: { weight: 'bold' }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
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
          'SCG SAP ECC 6.0 User',
          'Overseas Acc & GL',
          'BIC Transformation',
          'Mafuang / Supervisor'
        ],
        datasets: [{
          label: 'ระยะเวลาประสบการณ์ (ปี)',
          data: [1.5, 2.0, 3.0, 3.5, 2.5, 4.5],
          backgroundColor: [
            '#FFE15D',
            '#6BCB77',
            '#4D77FF',
            '#FF6B6B',
            '#C490E4',
            '#38E54D'
          ],
          borderColor: '#000000',
          borderWidth: 3,
          borderRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(0,0,0,0.1)', lineWidth: 1.5 },
            ticks: {
              stepSize: 1,
              font: { weight: '700' }
            },
            title: {
              display: true,
              text: 'จำนวนปี (Years)',
              font: { weight: '800' }
            }
          },
          x: {
            grid: { display: false },
            ticks: { font: { weight: '700' } }
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
            '#FFE15D',
            '#4D77FF',
            '#FF6B6B',
            '#6BCB77',
            '#C490E4',
            '#FF9F45',
            '#E2E8F0'
          ],
          borderColor: '#000000',
          borderWidth: 3,
          offset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 15,
              padding: 12,
              font: { size: 11, weight: '700' }
            }
          }
        }
      }
    });
  }

  chartsInitialized = true;
}

/* ==========================================================================
   4. CERTIFICATE LIGHTBOX MODAL
   ========================================================================== */
function initCertificateLightbox() {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('modal-cert-image');
  const modalTitle = document.getElementById('modal-cert-title');
  const modalIssuer = document.getElementById('modal-cert-issuer');
  const modalYear = document.getElementById('modal-cert-year');
  const closeBtn = document.getElementById('modal-cert-close');
  const certCards = document.querySelectorAll('.cert-card');

  if (!modal) return;

  certCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-img');
      const title = card.getAttribute('data-title');
      const issuer = card.getAttribute('data-issuer');
      const year = card.getAttribute('data-year');

      if (modalImg) modalImg.src = imgSrc;
      if (modalTitle) modalTitle.innerText = title;
      if (modalIssuer) modalIssuer.innerText = issuer;
      if (modalYear) modalYear.innerText = year;

      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

/* ==========================================================================
   5. SLIDE VIEWER MODAL (All 13 Presentation Pages)
   ========================================================================== */
function initSlideViewer() {
  const modal = document.getElementById('slide-modal');
  const slideImg = document.getElementById('slide-viewer-img');
  const slideCounter = document.getElementById('slide-counter-badge');
  const prevBtn = document.getElementById('slide-prev-btn');
  const nextBtn = document.getElementById('slide-next-btn');
  const closeBtn = document.getElementById('slide-close-btn');
  const triggerBtn = document.getElementById('view-all-slides-btn');

  let currentSlide = 1;
  const totalSlides = 13;

  function updateSlide(n) {
    currentSlide = Math.max(1, Math.min(totalSlides, n));
    if (slideImg) {
      slideImg.src = `./assets/images/page_${currentSlide}.png`;
    }
    if (slideCounter) {
      slideCounter.innerText = `หน้า ${currentSlide} / ${totalSlides}`;
    }
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

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      updateSlide(currentSlide - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      updateSlide(currentSlide + 1);
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

/* ==========================================================================
   6. CONTACT FEATURES (Copy, vCard Download, Form)
   ========================================================================== */
function initContactFeatures() {
  // Copy to clipboard
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const origText = btn.innerText;
          btn.innerText = '✓ คัดลอกแล้ว!';
          btn.style.backgroundColor = '#6BCB77';
          setTimeout(() => {
            btn.innerText = origText;
            btn.style.backgroundColor = '';
          }, 2000);
        });
      }
    });
  });

  // vCard Generator & Download
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

  // Interactive Form Simulation
  const contactForm = document.getElementById('portfolio-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'กำลังส่งข้อมูล...';
      }

      setTimeout(() => {
        alert('ขอบคุณสำหรับข้อความของคุณ! ระบบได้จำลองการส่งข้อมูลเรียบร้อยแล้ว');
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'ส่งข้อความติดต่อ';
        }
      }, 900);
    });
  }
}
