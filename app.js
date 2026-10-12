// Neobrutalism Minimalist Application Logic
document.addEventListener("DOMContentLoaded", () => {
  initSplashScreen();
  setupPhotos();
  renderDashboardArc();
  renderFeaturedProjects();
  renderExperience();
  renderEducation();
  renderActivities();
  renderCertifications("all");
  setupNavigation();
  setupCertFilters();
});

// 1. Splash Screen (Neobrutalist Hard Pop Progress)
function initSplashScreen() {
  const splash = document.getElementById("splash-screen");
  const fill = document.getElementById("splash-neo-fill");
  const skipBtn = document.getElementById("splash-skip-btn");

  let progress = 0;
  const interval = setInterval(() => {
    progress += 5;
    if (fill) fill.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(dismissSplash, 180);
    }
  }, 25);

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      clearInterval(interval);
      dismissSplash();
    });
  }

  function dismissSplash() {
    if (splash) splash.classList.add("splash-hidden");
  }
}

// Setup Real Photos from Assets
function setupPhotos() {
  const heroAvatar = document.getElementById("hero-avatar-img");
  const navAvatar = document.getElementById("nav-avatar-img");

  if (typeof ASSETS !== "undefined") {
    if (heroAvatar && ASSETS.heroPhoto) heroAvatar.src = ASSETS.heroPhoto;
    if (navAvatar && ASSETS.avatar) navAvatar.src = ASSETS.avatar;
  }
}

// Navigation Tabs
function setupNavigation() {
  const navButtons = document.querySelectorAll(".neo-nav-btn");
  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      if (target) switchSection(target);
    });
  });
}

function switchSection(targetId) {
  // Update Buttons
  const navButtons = document.querySelectorAll(".neo-nav-btn");
  navButtons.forEach(btn => {
    if (btn.getAttribute("data-target") === targetId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Switch Sections
  const sections = document.querySelectorAll(".portfolio-section");
  sections.forEach(sec => {
    if (sec.id === `section-${targetId}`) {
      sec.style.display = "block";
    } else {
      sec.style.display = "none";
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 2. Render Dashboard Career Arc (Neobrutalist Milestone Cards)
function renderDashboardArc() {
  const container = document.getElementById("dashboard-arc-container");
  if (!container || !PORTFOLIO_DATA.careerArc) return;

  const tagColors = ["coral", "blue", "green", "purple", ""];

  container.innerHTML = PORTFOLIO_DATA.careerArc.map((item, idx) => `
    <div style="background: #FFFFFF; border: 3px solid #000000; box-shadow: 3px 3px 0px #000000; border-radius: 6px; padding: 18px; display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <span class="neo-tag-pill ${tagColors[idx % tagColors.length]}" style="font-size: 0.7rem; margin-bottom: 8px;">STAGE ${item.stage}</span>
        <div style="font-family: var(--font-neo-title); font-size: 1rem; font-weight: 900; color: #000; margin-bottom: 3px;">${item.title}</div>
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--pop-blue); margin-bottom: 10px;">${item.org}</div>
      </div>
      <p style="font-size: 0.88rem; color: #4B5563; line-height: 1.5;">${item.desc}</p>
    </div>
  `).join("");
}

// 3. Render Featured Projects (Neobrutalist Cards)
function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects-container");
  if (!container || !PORTFOLIO_DATA.featuredProjects) return;

  container.innerHTML = PORTFOLIO_DATA.featuredProjects.map(p => `
    <div class="neo-project-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="neo-tag-pill blue">${p.category}</span>
          <span style="font-family: var(--font-neo-title); font-size: 0.82rem; font-weight: 900; color: #000;">${p.period}</span>
        </div>
        <h3 class="neo-project-title">${p.name}</h3>
        <div class="neo-project-meta">🏢 ${p.bu} • บทบาท: <strong style="color: #000;">${p.role}</strong></div>
        <p class="neo-project-brief">${p.brief}</p>
      </div>
      <div class="neo-project-footer">
        <span style="font-family: var(--font-neo-title); font-size: 0.8rem; font-weight: 800; color: #6B7280;">SCG INITIATIVE</span>
        <button class="btn-neo-secondary" style="padding: 6px 14px; font-size: 0.82rem;" onclick="openProjectModal('${p.id}')">
          อ่านรายละเอียด & ผลลัพธ์ ➔
        </button>
      </div>
    </div>
  `).join("");
}

// 4. Render Professional Experience (Timeline Pods)
function renderExperience() {
  const container = document.getElementById("experience-container");
  if (!container || !PORTFOLIO_DATA.workHistory) return;

  container.innerHTML = PORTFOLIO_DATA.workHistory.map(w => `
    <div class="timeline-neo-pod">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 6px;">
        <div>
          <h3 style="font-family: var(--font-neo-title); font-size: 1.25rem; font-weight: 900; color: #000;">${w.role}</h3>
          <div style="font-size: 0.92rem; font-weight: 700; color: var(--pop-blue); margin-top: 2px;">
            ${w.office} • ${w.bu}
          </div>
        </div>
        <span class="neo-tag-pill coral">${w.period}</span>
      </div>
      <p style="font-size: 0.95rem; color: #4B5563; line-height: 1.7; margin: 12px 0 16px 0;">
        ${w.brief}
      </p>
      <div style="display: flex; justify-content: flex-end;">
        <button class="btn-neo-secondary" style="padding: 6px 14px; font-size: 0.84rem;" onclick="openWorkModal('${w.id}')">
          ดูรายละเอียดกระบวนการ & หน้าที่รับผิดชอบ ➔
        </button>
      </div>
    </div>
  `).join("");
}

// 5. Render Education (Academic Cards)
function renderEducation() {
  const container = document.getElementById("education-container");
  if (!container || !PORTFOLIO_DATA.education) return;

  container.innerHTML = PORTFOLIO_DATA.education.map(e => `
    <div class="neo-project-card">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="neo-tag-pill purple">${e.level}</span>
          <span style="font-family: var(--font-neo-title); font-size: 0.82rem; font-weight: 900; color: #000;">${e.period}</span>
        </div>
        <h3 class="neo-project-title" style="font-size: 1.2rem;">${e.degree}</h3>
        <div class="neo-project-meta">🏛️ ${e.institution}</div>
        <p class="neo-project-brief">${e.highlight}</p>
      </div>
      <div class="neo-project-footer">
        <span style="font-size: 0.85rem; font-weight: 800; color: var(--pop-blue);">${e.status}</span>
        <button class="btn-neo-secondary" style="padding: 6px 14px; font-size: 0.82rem;" onclick="openEduModal('${e.id}')">
          อ่านบันทึกความสำเร็จ ➔
        </button>
      </div>
    </div>
  `).join("");
}

// 6. Render Activities (Leadership Cards)
function renderActivities() {
  const container = document.getElementById("activities-container");
  if (!container || !PORTFOLIO_DATA.activities) return;

  container.innerHTML = PORTFOLIO_DATA.activities.roles.map(a => `
    <div class="neo-project-card" style="min-height: 220px;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span class="neo-tag-pill">YEAR ${a.year}</span>
          <span style="font-family: var(--font-neo-title); font-size: 0.85rem; font-weight: 900; color: var(--pop-coral);">${a.hours} ชม.</span>
        </div>
        <h4 style="font-family: var(--font-neo-title); font-size: 1.15rem; font-weight: 900; color: #000; margin-bottom: 4px;">${a.role}</h4>
        <div style="font-size: 0.88rem; color: var(--pop-blue); font-weight: 700; margin-bottom: 12px;">${a.project}</div>
      </div>
      <div class="neo-project-footer">
        <button class="btn-neo-secondary" style="padding: 6px 14px; font-size: 0.82rem;" onclick="openActivityModal('${a.id}')">
          ดูรายละเอียด ➔
        </button>
      </div>
    </div>
  `).join("");
}

// 7. Render Certifications (Cards + Filter)
function setupCertFilters() {
  const filterBtns = document.querySelectorAll(".neo-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");
      renderCertifications(cat);
    });
  });
}

function renderCertifications(cat) {
  const container = document.getElementById("certifications-container");
  if (!container || !PORTFOLIO_DATA.certifications) return;

  const filtered = cat === "all" 
    ? PORTFOLIO_DATA.certifications 
    : PORTFOLIO_DATA.certifications.filter(c => c.cat === cat);

  container.innerHTML = filtered.map(c => `
    <div class="neo-project-card" style="padding: 24px;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="neo-tag-pill green">${c.cat}</span>
          <span style="font-family: var(--font-neo-title); font-size: 0.82rem; font-weight: 900; color: #000;">${c.year}</span>
        </div>
        <h4 style="font-family: var(--font-neo-title); font-size: 1.05rem; font-weight: 900; color: #000; margin-bottom: 6px; line-height: 1.35;">${c.title}</h4>
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--pop-blue); margin-bottom: 14px;">🏛️ ${c.issuer}</div>
      </div>
      <div class="neo-project-footer" style="padding-top: 12px;">
        <button class="btn-neo-secondary" style="padding: 6px 14px; font-size: 0.82rem;" onclick="openCertModal('${c.id}')">
          ดูข้อมูลการรับรอง ➔
        </button>
      </div>
    </div>
  `).join("");
}

// ==========================================
// MODAL POP-UP SYSTEM (NEOBRUTALIST HARD POP DIALOG)
// ==========================================
function openModalWithContent(title, subtitle, badgeText, contentHtml) {
  const modal = document.getElementById("detail-modal");
  const body = document.getElementById("modal-content-body");
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="margin-bottom: 22px; border-bottom: 3px solid #000000; padding-bottom: 16px;">
      ${badgeText ? `<span class="neo-tag-pill coral" style="margin-bottom: 10px;">${badgeText}</span>` : ''}
      <h2 style="font-family: var(--font-neo-title); font-size: 1.55rem; font-weight: 900; color: #000; letter-spacing: -0.02em; margin-bottom: 6px;">${title}</h2>
      ${subtitle ? `<p style="font-size: 0.92rem; color: var(--pop-blue); font-weight: 800;">${subtitle}</p>` : ''}
    </div>
    <div style="font-size: 0.96rem; color: #374151; line-height: 1.75;">
      ${contentHtml}
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("detail-modal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "auto";
}

function handleModalBackdrop(event) {
  if (event.target && event.target.id === "detail-modal") closeModal();
}

function openTranscriptModal() {
  const modal = document.getElementById("transcript-modal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeTranscriptModal() {
  const modal = document.getElementById("transcript-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function handleTranscriptBackdrop(event) {
  if (event.target && event.target.id === "transcript-modal") closeTranscriptModal();
}

// Modal Content Triggers
function openProjectModal(id) {
  const p = PORTFOLIO_DATA.featuredProjects.find(item => item.id === id);
  if (!p) return;

  const html = `
    <p style="margin-bottom: 16px; color: #000; font-weight: 600;"><strong>ขอบเขตโครงการ:</strong> ${p.fullDetails}</p>
    <div style="background: #FFFEEA; border: 3px solid #000000; box-shadow: 3px 3px 0px #000000; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
      <h4 style="font-family: var(--font-neo-title); font-size: 0.88rem; font-weight: 900; text-transform: uppercase; color: #000; margin-bottom: 10px;">ผลลัพธ์และความสำเร็จเชิงประจักษ์ (KEY ACHIEVEMENTS):</h4>
      <ul style="list-style: square; padding-left: 20px; font-size: 0.94rem; color: #1F2937;">
        ${p.metrics.map(m => `<li style="margin-bottom: 8px; font-weight: 600;">${m}</li>`).join("")}
      </ul>
    </div>
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      ${p.tags.map(t => `<span class="neo-tag-pill">#${t}</span>`).join("")}
    </div>
  `;
  openModalWithContent(p.name, `${p.bu} • ช่วงเวลา: ${p.period}`, `บทบาท: ${p.role}`, html);
}

function openWorkModal(id) {
  const w = PORTFOLIO_DATA.workHistory.find(item => item.id === id);
  if (!w) return;

  const html = `
    <div style="background: #EEF4FF; border: 3px solid #000000; box-shadow: 3px 3px 0px #000000; border-radius: 6px; padding: 16px; margin-bottom: 18px; font-size: 0.92rem;">
      <div style="margin-bottom: 4px; color: #000;"><strong>สายงานหลัก (Process):</strong> ${w.process}</div>
      <div style="margin-bottom: 4px; color: #000;"><strong>สายงานย่อย (Sub-Process):</strong> ${w.subProcess}</div>
      <div style="color: var(--pop-blue); font-weight: 800;"><strong>กลุ่มธุรกิจ (BU):</strong> ${w.bu}</div>
    </div>
    <p style="margin-bottom: 12px; color: #000; font-weight: 700;"><strong>รายละเอียดและบทบาทหน้าที่:</strong></p>
    <p style="color: #374151;">${w.details}</p>
  `;
  openModalWithContent(w.role, `${w.office} (${w.period})`, "ประวัติการทำงาน", html);
}

function openEduModal(id) {
  const e = PORTFOLIO_DATA.education.find(item => item.id === id);
  if (!e) return;

  const html = `
    <div style="margin-bottom: 18px;">
      <p style="margin-bottom: 10px; color: #000; font-weight: 600;"><strong>สาระสำคัญของการศึกษา:</strong> ${e.highlight}</p>
      <p style="color: #374151;"><strong>มุมมองและการต่อยอดสู่วิชาชีพ:</strong> ${e.rationale}</p>
    </div>
    <div style="background: #FFFEEA; border: 3px solid #000000; box-shadow: 2px 2px 0px #000000; border-radius: 6px; padding: 14px; font-size: 0.92rem; color: #000;">
      สถานะการศึกษา: <strong style="color: var(--pop-blue);">${e.status}</strong>
    </div>
  `;
  openModalWithContent(e.degree, `${e.institution} (${e.period})`, e.level, html);
}

function openActivityModal(id) {
  const a = PORTFOLIO_DATA.activities.roles.find(item => item.id === id);
  if (!a) return;

  const html = `
    <p style="margin-bottom: 14px; color: #000; font-weight: 600;"><strong>รายละเอียดกิจกรรม:</strong> ${a.details}</p>
    <div style="background: #FFF0F0; border: 3px solid #000000; box-shadow: 2px 2px 0px #000000; border-radius: 6px; padding: 14px; font-size: 0.92rem; color: #000;">
      จำนวนชั่วโมงการมีส่วนร่วม: <strong style="color: var(--pop-coral);">${a.hours} ชั่วโมง</strong> (ปีการศึกษา ${a.year})
    </div>
  `;
  openModalWithContent(a.role, a.project, "กิจกรรมเสริมหลักสูตร", html);
}

function openCertModal(id) {
  const c = PORTFOLIO_DATA.certifications.find(item => item.id === id);
  if (!c) return;

  const html = `
    <p style="margin-bottom: 14px; color: #000; font-weight: 600;"><strong>คำอธิบายหลักสูตรและการรับรอง:</strong> ${c.details}</p>
    <div style="background: #F3EEFF; border: 3px solid #000000; box-shadow: 2px 2px 0px #000000; border-radius: 6px; padding: 14px; font-size: 0.92rem; color: #000;">
      สถาบันผู้ออกใบรับรอง: <strong style="color: var(--pop-purple);">${c.issuer}</strong> (ปีที่ได้รับ: ${c.year})
    </div>
  `;
  openModalWithContent(c.title, c.issuer, c.cat, html);
}

function openModal(type) {
  if (type === 'quote') {
    const html = `
      <blockquote style="font-size: 1.15rem; font-weight: 700; color: #000; border-left: 6px solid var(--pop-yellow); padding: 16px 20px; margin: 16px 0; background: #FFFEEA; border: 3px solid #000000; box-shadow: 3px 3px 0px #000000; border-radius: 6px;">
        "${PORTFOLIO_DATA.profile.quote}"
      </blockquote>
      <p style="font-size: 0.95rem; line-height: 1.75; margin-top: 18px; color: #374151;">
        จากการสั่งสมประสบการณ์ในสายงานบัญชี ตรวจสอบ และบริหารจัดการโครงการปรับปรุงระบบ ERP มากว่า 17 ปี ทำให้มองเห็นอย่างชัดเจนว่า เทคโนโลยีเป็นเครื่องมือที่ทรงพลัง แต่หัวใจสำคัญของการสร้างผลลัพธ์ที่ยั่งยืนคือความร่วมมือ การออกแบบกระบวนการที่สอดคล้อง และการพัฒนาศักยภาพของคนในองค์กร
      </p>
    `;
    openModalWithContent("วิสัยทัศน์ & ปรัชญาการทำงาน", "NATTAWUT SUKKIJPAGORN", "PHILOSOPHY", html);
  }
}

// Contact Form Submit Handler
function handleContactSubmit(event) {
  event.preventDefault();
  const successBox = document.getElementById("contact-success");
  const form = document.getElementById("contact-form");

  if (successBox) successBox.style.display = "block";
  if (form) form.reset();

  setTimeout(() => {
    if (successBox) successBox.style.display = "none";
  }, 4500);
}
