const PORTFOLIO_DATA = {
  profile: {
    nameTh: "ณัฐวุฒิ สุขกิจภากรณ์",
    nameEn: "Nattawut Sukkijpagorn",
    nickname: "แชมป์",
    role: "Accounting Supervisor",
    company: "Corporate Accounting Office, SCG",
    tagline: "ERP Transformation & Business Process Integration",
    summary: "นักบัญชีวิชาชีพผู้มีประสบการณ์กว่า 17 ปี เชี่ยวชาญการเชื่อมโยงระบบบัญชี การเงิน กระบวนการทางธุรกิจ และเทคโนโลยี ERP/RPA เพื่อขับเคลื่อนองค์กรยุคดิจิทัล",
    quote: "ความสำเร็จของงานไม่ได้เกิดจากความถูกต้องของตัวเลขเพียงอย่างเดียว แต่เกิดจากการทำงานร่วมกันของคน กระบวนการ ระบบ เทคโนโลยี และการเปลี่ยนแปลงขององค์กร",
    email: "champ.667@gmail.com",
    line: "champ.667",
    workplace: "สำนักงานบัญชีกลาง บริษัท ปูนซิเมนต์ไทย จำกัด (มหาชน)",
    stats: [
      { num: "17+", label: "ปี ประสบการณ์วิชาชีพ" },
      { num: "1,286", label: "ชั่วโมงกิจกรรมเสริมหลักสูตร มก." },
      { num: "57", label: "โครงการกิจกรรมเพื่อสังคม" },
      { num: "25+", label: "ใบรับรอง & ประกาศนียบัตร" }
    ]
  },

  careerArc: [
    { stage: "01", title: "Audit Foundation", org: "KPMG Phoomchai Audit", desc: "การตรวจสอบบัญชีและระบบควบคุมภายใน กลุ่มธุรกิจ Information, Communication and Entertainment" },
    { stage: "02", title: "Costing & Operations", org: "SCG Accounting Services", desc: "การจัดการต้นทุนการผลิตและระบบบัญชีโรงงาน กลุ่มธุรกิจ SCG Paper" },
    { stage: "03", title: "ERP Migration Lead", org: "The Siam Cement PCL", desc: "Project Key User ในการย้ายระบบขึ้นสู่ SAP ECC 6.0 และการบริหารบัญชีต่างประเทศ" },
    { stage: "04", title: "Business Transformation", org: "Corporate Accounting Office", desc: "Project Coordinator ขับเคลื่อนโครงการ BIC Transformation Project (CAD - CBM)" },
    { stage: "05", title: "Accounting Supervisor & New ERP", org: "SCG CGS & SCGC", desc: "บริหารงาน Retail & Non-SAP Operations และนำร่องระบบ New ERP (Focus One / Mafuang Project)" }
  ],

  featuredProjects: [
    {
      id: "proj-mafuang",
      name: "Mafuang Project (Focus One ERP)",
      period: "2022 – ปัจจุบัน",
      role: "Project Key User",
      category: "New ERP Implementation",
      bu: "SCG Cement and Green Solutions (SCG-CGS)",
      brief: "นำร่องและประยุกต์ใช้ระบบ ERP เจเนอเรชันใหม่ (Focus One) ในงาน Retail & Non-SAP Operations",
      fullDetails: "ร่วมเป็นแกนหลักในการออกแบบกระบวนการบัญชีใหม่สำหรับธุรกิจค้าปลีกและโซลูชันเพื่อสิ่งแวดล้อม วางโครงสร้างการบันทึกบัญชีอัตโนมัติ การเชื่อมโยงข้อมูลข้ามระบบ และการเป็นพี่เลี้ยงถ่ายทอดความรู้แก่ทีมงาน",
      metrics: ["ลดระยะเวลาปิดบัญชีย่อย", "เชื่อมต่อข้อมูลหน้าร้านค้าปลีกแบบ End-to-End", "สร้างมาตรฐานคู่มือปฏิบัติงานระบบใหม่"],
      tags: ["Focus One", "Retail Operations", "Process Design", "Change Management"]
    },
    {
      id: "proj-bic",
      name: "BIC Transformation Project (CAD - CBM)",
      period: "2020 – 2022",
      role: "Project Co-ordinator",
      category: "Business Transformation",
      bu: "Corporate Accounting Office / Cement-Building Materials",
      brief: "โครงการปรับโครงสร้างกระบวนการบัญชีและการรายงานข้อมูลเพื่อการบริหารข้ามสายงาน",
      fullDetails: "ประสานงานระหว่างหน่วยงานในการปรับระบบ Order to Cash, General Accounting และ Intercompany Reconciliation ในกลุ่มธุรกิจขนาดใหญ่ ให้มีความคล่องตัว สอดคล้องกับมาตรฐานดิจิทัล",
      metrics: ["ปรับจังหวะการกระทบยอดระหว่างกันให้รวดเร็วขึ้น", "ลดความซ้ำซ้อนของเอกสารข้ามหน่วยธุรกิจ", "จัดทำมาตรฐาน Digital Workflow"],
      tags: ["Order to Cash", "Intercompany", "Process Optimization", "Cross-Functional"]
    },
    {
      id: "proj-sap",
      name: "SAP ECC 6.0 Migration Project",
      period: "2014 – 2015",
      role: "Project Key User",
      category: "Enterprise System Migration",
      bu: "SCG Cement-Building Materials & SCG Packaging",
      brief: "ผู้นำผู้ใช้งานหลักในการ Migrate ระบบสารสนเทศทางการบัญชีขึ้นสู่ SAP ECC 6.0",
      fullDetails: "ร่วมทดสอบระบบ UAT ตรวจสอบ Data Mapping ควบคุมการ Cutover ข้อมูลทางบัญชีที่มีความซับซ้อนสูง และจัดอบรมถ่ายทอดการใช้งานระบบให้แก่ผู้ปฏิบัติงานในเครือ",
      metrics: ["ย้ายฐานข้อมูลและปิดรอบบัญชี Cutover สำเร็จ 100%", "ครอบคลุม 2 กลุ่มธุรกิจแกนหลักของเอสซีจี", "ผ่านการตรวจสอบความถูกต้องของระบบบัญชี"],
      tags: ["SAP ECC 6.0", "UAT Testing", "Data Migration", "Training Lead"]
    },
    {
      id: "proj-rpa",
      name: "Robotic Process Automation & AI Implementation",
      period: "2020 – ปัจจุบัน",
      role: "Certified RPA Professional & Champion",
      category: "Digital Automation",
      bu: "Corporate Shared Service",
      brief: "ประยุกต์ใช้เทคโนโลยีบอทและระบบอัตโนมัติในการลดทอนงานเอกสารและงานซ้ำซ้อน",
      fullDetails: "ผ่านการรับรองมาตรฐานสากล Automation Anywhere Certified Advanced RPA Professional V11.0 พร้อมการบูรณาการหลักการ Data Mining และ Generative AI เข้าสู่งานตรวจสอบข้อมูลทางบัญชี",
      metrics: ["ลด Human Error ในงานคีย์ข้อมูลประจำวัน", "เพิ่มประสิทธิภาพการสืบค้นข้อมูลบัญชี", "ยกระดับทักษะ Digital Workforce ให้กับทีมงาน"],
      tags: ["Automation Anywhere", "Bot Architecture", "Python & Data Mining", "AI Readiness"]
    }
  ],

  workHistory: [
    {
      id: "work-1",
      period: "2024 – ปัจจุบัน",
      role: "Accounting Supervisor",
      office: "Corporate Accounting Office, SCG",
      process: "Financial and Accounting Operations Process",
      subProcess: "Retail & Non-SAP Accounting Operations",
      bu: "SCG Cement and Green Solutions; SCGC",
      brief: "บริหารและกำกับดูแลงานบัญชีค้าปลีกและระบบ Non-SAP พร้อมขับเคลื่อน Focus One ERP",
      details: "รับผิดชอบการควบคุมความถูกต้องของรายการบัญชี การบริหารความเสี่ยง การวิเคราะห์ข้อมูลทางการเงิน และการเป็นผู้นำทีมงานในการประยุกต์ใช้ระบบสารสนเทศใหม่"
    },
    {
      id: "work-2",
      period: "2020 – 2024",
      role: "Senior Accountant / Project Co-ordinator",
      office: "Corporate Accounting Office, SCG",
      process: "Financial and Accounting Operations Process",
      subProcess: "Order to Cash & General Accounting / Intercompany",
      bu: "SCG Cement and Green Solutions",
      brief: "ดูแลงาน Order to Cash, บัญชีแยกประเภท และเป็น Project Coordinator โครงการ BIC Transformation",
      details: "บริหารบัญชีลูกหนี้ การรับชำระเงิน และการกระทบยอดรายการระหว่างบริษัทในเครือ พร้อมทั้งทำหน้าที่ประสานงานโครงการปรับปรุงระบบงานข้ามสายงาน"
    },
    {
      id: "work-3",
      period: "2018 – 2019",
      role: "Senior Accountant",
      office: "Corporate Accounting Office, SCG",
      process: "Financial and Accounting Operations Process",
      subProcess: "General Accounting / Intercompany",
      bu: "SCG Cement-Building Materials",
      brief: "ดูแลระบบบัญชีแยกประเภททั่วไปและการปิดบัญชีประจำงวด",
      details: "ควบคุมและตรวจสอบความถูกต้องของรายงานทางการเงิน การกระทบยอดรายการทางบัญชีตามมาตรฐานนโยบายกลุ่มเอสซีจี"
    },
    {
      id: "work-4",
      period: "2016 – 2018",
      role: "Senior Accountant",
      office: "Corporate Accounting Office, SCG",
      process: "Overseas Accounting Services Process",
      subProcess: "Operation Hub / General Ledger",
      bu: "SCG Cement-Building Materials",
      brief: "บริหารงานศูนย์บริการบัญชีสำหรับบริษัทย่อยในต่างประเทศ (Overseas Accounting Hub)",
      details: "ดูแลบัญชีแยกประเภททั่วไปและสนับสนุนงานบัญชีแก่บริษัทในเครือที่ดำเนินงานในต่างประเทศ"
    },
    {
      id: "work-5",
      period: "2014 – 2015",
      role: "Project Key User",
      office: "Corporate Accounting Office, SCG",
      process: "SAP ECC 6.0 Project",
      subProcess: "ERP Migration",
      bu: "SCG Cement-Building Materials; SCG Packaging",
      brief: "ผู้นำผู้ใช้งานหลักฝ่ายบัญชีการเงินในโครงการย้ายระบบสู่ SAP ECC 6.0",
      details: "ออกแบบขั้นตอนการทำงาน ทดสอบระบบ Data Migration และถ่ายทอดองค์ความรู้แก่ผู้ใช้งาน"
    },
    {
      id: "work-6",
      period: "2014",
      role: "Senior Accountant",
      office: "Corporate Accounting Office, SCG",
      process: "Order to Cash Process",
      subProcess: "Collection - Cement-Building Materials",
      bu: "SCG Network; SCG Trading; SCG Chemicals",
      brief: "บริหารจัดการงานรับชำระเงินและเรียกเก็บหนี้ในเครือข่ายธุรกิจ",
      details: "ประสานงานกับฝ่ายขายและคู่ค้าเพื่อรักษาสภาพคล่องทางการเงินและวินัยการชำระเงิน"
    },
    {
      id: "work-7",
      period: "2013",
      role: "Accountant",
      office: "Corporate Accounting Office, SCG",
      process: "Order to Cash Process",
      subProcess: "Billing & Collection",
      bu: "SCG Trading; SCG Chemicals",
      brief: "ปฏิบัติงานออกใบแจ้งหนี้ วางบิล และบันทึกการรับชำระเงิน",
      details: "ควบคุมเอกสารทางการเงินและตรวจสอบความถูกต้องของภาษีขายและใบกำกับภาษี"
    },
    {
      id: "work-8",
      period: "2010 – 2012",
      role: "Accountant",
      office: "SCG Accounting Services Co., Ltd.",
      process: "Accounting Information Management Process",
      subProcess: "Costing Process",
      bu: "SCG Paper",
      brief: "การคำนวณและวิเคราะห์ต้นทุนการผลิตของกลุ่มธุรกิจเยื่อและกระดาษ",
      details: "จัดทำรายงานวิเคราะห์ผลต่างต้นทุน (Variance Analysis) เพื่อสนับสนุนการตัดสินใจของผู้บริหารโรงงาน"
    },
    {
      id: "work-9",
      period: "2009 – 2010",
      role: "Audit Assistant",
      office: "KPMG Phoomchai Audit Co., Ltd.",
      process: "External Financial Audit",
      subProcess: "Financial Audit & Controls Testing",
      bu: "Information, Communication and Entertainment (ICE)",
      brief: "ผู้ช่วยผู้สอบบัญชี ตรวจสอบงบการเงินบริษัทจดทะเบียนในตลาดหลักทรัพย์",
      details: "ตรวจสอบเนื้อหาสาระของรายการค้า ตรวจสอบระบบการควบคุมภายใน และจัดทำกระดาษทำการตามมาตรฐานการสอบบัญชีสากล"
    }
  ],

  education: [
    {
      id: "edu-master",
      level: "ปริญญาโท",
      degree: "Master's Degree in Industrial Business and Human Resource Development",
      institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)",
      period: "2026 – ปัจจุบัน",
      status: "กำลังศึกษา (Current Study)",
      highlight: "มุ่งเน้นการบูรณาการมิติด้านธุรกิจอุตสาหกรรมและการพัฒนาศักยภาพทุนมนุษย์เข้ากับประสบการณ์วิชาชีพบัญชีและเทคโนโลยี",
      rationale: "หลังจากสั่งสมประสบการณ์ด้านบัญชีและการบริหารจัดการระบบ ERP มากว่า 17 ปี ทำให้ตระหนักว่าความสำเร็จที่ยั่งยืนของทุกกระบวนการเกิดจากการพัฒนา 'คน' ควบคู่กับ 'ระบบ' การศึกษาต่อในสาขานี้จึงเป็นการต่อยอดที่สำคัญที่สุดในการขับเคลื่อนองค์กร"
    },
    {
      id: "edu-bachelor",
      level: "ปริญญาตรี",
      degree: "บัญชีบัณฑิต (Bachelor of Accountancy - B.Acc.)",
      institution: "มหาวิทยาลัยเกษตรศาสตร์ (Kasetsart University)",
      faculty: "คณะบริหารธุรกิจ ภาควิชาการบัญชี",
      period: "2005 – 2009",
      status: "สำเร็จการศึกษา (GPA 2.71)",
      highlight: "นิสิตที่มีผลงานกิจกรรมเสริมหลักสูตรดีเด่น ประจำปีการศึกษา 2550 รวม 1,286 ชั่วโมง (57 โครงการ)",
      rationale: "สำเร็จการศึกษาหลักสูตรบัญชีบัณฑิต พร้อมการมีส่วนร่วมในกิจกรรมบริหารองค์กรนิสิต ค่ายอาสาพัฒนา และการฝึกงานวิชาชีพกับ KPMG Phoomchai Audit 352 ชั่วโมง"
    },
    {
      id: "edu-highschool",
      level: "มัธยมศึกษาตอนปลาย",
      degree: "แผนการเรียน วิทยาศาสตร์ - คณิตศาสตร์ - บริหาร",
      institution: "โรงเรียนเตรียมอุดมศึกษา (Triam Udom Suksa School)",
      period: "2002 – 2004",
      status: "สำเร็จการศึกษา (GPA 3.29)",
      highlight: "รากฐานด้านการคิดวิเคราะห์เชิงตัวเลข ตรรกะ และหลักการบริหารจัดการ",
      rationale: "สร้างเสริมทักษะทางวิชาการและแนวคิดรอบด้านเพื่อเตรียมพร้อมสู่วิชาชีพบัญชี"
    },
    {
      id: "edu-midschool",
      level: "มัธยมศึกษาตอนต้น",
      degree: "แผนการเรียน วิทยาศาสตร์ - คณิตศาสตร์",
      institution: "โรงเรียนวัดบวรนิเวศ (Wat Bowonniwet School)",
      period: "1999 – 2001",
      status: "สำเร็จการศึกษา (GPA 3.89)",
      highlight: "ผลการเรียนยอดเยี่ยม GPA 3.89 พร้อมการเข้าร่วมกิจกรรมบำเพ็ญประโยชน์",
      rationale: "ปลูกฝังระเบียบวินัย ความละเอียดรอบคอบ และจิตสาธารณะ"
    }
  ],

  activities: {
    summary: {
      totalHours: 1286,
      totalProjects: 57,
      leadershipHours: 250,
      internshipHours: 352
    },
    roles: [
      { id: "act-1", role: "ประธานโครงการ", project: "ค่ายบัญชีพัฒนาชนบท ครั้งที่ 15 ประจำปี 2550", hours: 50, year: "2550", details: "ผู้นำค่ายอาสาพัฒนาชนบท สโมสรนิสิตคณะบริหารธุรกิจ มก. ณ จ.ชัยภูมิ บริหารจัดการงบประมาณและทีมงานนิสิตกว่า 80 คน" },
      { id: "act-2", role: "ประธานโครงการ", project: "ส่งประกวดกองเชียร์และเชียร์ลีดเดอร์ คณะบริหารธุรกิจ ครั้งที่ 2", hours: 20, year: "2550", details: "ผู้นำทีมประสานงานการฝึกซ้อมและกิจกรรมสร้างความสามัคคีในคณะบริหารธุรกิจ" },
      { id: "act-3", role: "รองประธานโครงการ", project: "ค่ายบัญชีพัฒนาชนบท ครั้งที่ 14 ประจำปี 2549", hours: 88, year: "2549", details: "ดูแลการประสานงานพื้นที่และกิจกรรมพัฒนาชุมชน ณ จ.สุโขทัย" },
      { id: "act-4", role: "คณะกรรมการจัดงาน", project: "คอนเสิร์ตประสานเสียงสามสถาบัน ชมรม เค.ยู.คอรัส", hours: 160, year: "2549", details: "กรรมการบริหารจัดการกิจกรรมและอำนวยการแสดงดนตรีระดับสถาบัน" },
      { id: "act-5", role: "คณะกรรมการบริหาร", project: "คณะกรรมการบริหารในองค์กรนิสิต มหาวิทยาลัยเกษตรศาสตร์", hours: 48, year: "2548-2550", details: "ร่วมวางนโยบายและประสานงานกิจกรรมร่วมกับองค์การบริหาร องค์การนิสิต" },
      { id: "act-6", role: "ประธานชมรมนิสิตชั้นปี", project: "President — 1st-year Accounting Student Club", hours: 30, year: "2548", details: "ตัวแทนนิสิตชั้นปีที่ 1 ภาควิชาการบัญชี ดูแลกิจกรรมต้อนรับและสานสัมพันธ์" }
    ],
    honors: [
      { title: "นิสิตที่มีผลงานกิจกรรมเสริมหลักสูตรดีเด่น", org: "มหาวิทยาลัยเกษตรศาสตร์", year: "2550", details: "ได้รับการคัดเลือกและรับรองตามประกาศมหาวิทยาลัยเกษตรศาสตร์ ในฐานะนิสิตผู้มีผลงานกิจกรรมสร้างสรรค์และบำเพ็ญประโยชน์ยอดเยี่ยม" },
      { title: "1st Award — Friends Admired Man of Accounting Student Club", org: "ชมรมนิสิตภาควิชาการบัญชี มก.", year: "2552", details: "รางวัลชนะเลิศอันดับ 1 ขวัญใจเพื่อนและพี่น้องนิสิต จากความทุ่มเท เสียสละ และมีจิตสาธารณะตลอด 4 ปี" }
    ]
  },

  certifications: [
    { id: "c-1", title: "Automation Anywhere Certified Advanced RPA Professional V11.0", issuer: "Automation Anywhere", year: "2020", cat: "Technology & RPA", details: "การรับรองระดับสากลในการออกแบบและพัฒนาบอทอัตโนมัติสำหรับกระบวนการทางธุรกิจระดับองค์กร" },
    { id: "c-2", title: "Get More From SAP: Process Automation Involving SAP Integration", issuer: "Automation Anywhere University", year: "2020", cat: "Technology & RPA", details: "เทคนิคการเชื่อมต่อระบบบอท RPA เข้ากับระบบ SAP ERP อย่างไร้รอยต่อ" },
    { id: "c-3", title: "Lead the Digital Workforce: Monitor & Manage Bot Performance", issuer: "Automation Anywhere University", year: "2020", cat: "Technology & RPA", details: "การบริหารจัดการและกำกับดูแลประสิทธิภาพการทำงานของ Digital Workforce" },
    { id: "c-4", title: "Digital Skills: Artificial Intelligence (AI) - 90% Score", issuer: "Accenture / FutureLearn (CPD Certified)", year: "2021", cat: "AI & Innovation", details: "การเข้าใจผลกระทบของ AI ต่อโลกการทำงานและการปรับตัวของบุคลากรยุคใหม่" },
    { id: "c-5", title: "Digital Skills: Digital Skills for Work and Life - 100% Score", issuer: "Accenture / FutureLearn (CPD Certified)", year: "2021", cat: "Digital Skills", details: "ทักษะดิจิทัลเพื่อการทำงานและแนวคิด Growth Mindset" },
    { id: "c-6", title: "การบริหารโครงการ (Project Management)", issuer: "TDGA / สำนักงานพัฒนารัฐบาลดิจิทัล (DGA)", year: "2018", cat: "Management", details: "หลักการบริหารจัดการโครงการตามมาตรฐานภาครัฐดิจิทัล" },
    { id: "c-7", title: "ข้อมูลเปิดภาครัฐ (Open Data) & Government Cloud (G-Cloud)", issuer: "TDGA / สำนักงานพัฒนารัฐบาลดิจิทัล (DGA)", year: "2018", cat: "Data & Cloud", details: "ความรู้ด้านสถาปัตยกรรมข้อมูลเปิดและระบบคลาวด์ภาครัฐ" },
    { id: "c-8", title: "คลังข้อมูลและการทำเหมืองข้อมูล (Data Warehouse & Data Mining)", issuer: "Thai MOOC / มหาวิทยาลัยรังสิต", year: "2020", cat: "Data & Cloud", details: "หลักการออกแบบคลังข้อมูลและการค้นหาความรู้จากฐานข้อมูลขนาดใหญ่" },
    { id: "c-9", title: "การคิดสร้างสรรค์ & ปลุกพลังความคิดสร้างสรรค์", issuer: "Chula MOOC / จุฬาลงกรณ์มหาวิทยาลัย", year: "2020-2021", cat: "AI & Innovation", details: "การพัฒนาวิธีคิดเชิงนวัตกรรมและการแก้ไขปัญหาอย่างสร้างสรรค์" },
    { id: "c-10", title: "ทรัพย์สินทางปัญญากับธุรกิจ และการพัฒนานวัตกรรม", issuer: "Chula MOOC / จุฬาลงกรณ์มหาวิทยาลัย", year: "2021", cat: "Management", details: "การบริหารจัดการสิทธิในทรัพย์สินทางปัญญาเชิงกลยุทธ์" },
    { id: "c-11", title: "Building Resilience (NASBA CPE Accredited)", issuer: "LinkedIn Learning", year: "2020", cat: "Management", details: "การสร้างความยืดหยุ่นทางความคิดและการรับมือกับความเปลี่ยนแปลง" },
    { id: "c-12", title: "Design Thinking & Financial Planning", issuer: "ตลาดหลักทรัพย์แห่งประเทศไทย (SET)", year: "2020", cat: "Management", details: "กระบวนการคิดเชิงออกแบบและการวางแผนทางการเงิน" }
  ],

  contact: {
    name: "ณัฐวุฒิ สุขกิจภากรณ์ (Nattawut Sukkijpagorn)",
    role: "Accounting Supervisor, Corporate Accounting Office, SCG",
    email: "champ.667@gmail.com",
    line: "champ.667",
    workplace: "บริษัท ปูนซิเมนต์ไทย จำกัด (มหาชน) - The Siam Cement Public Company Limited (SCG)",
    location: "กรุงเทพมหานคร, ประเทศไทย"
  }
};
