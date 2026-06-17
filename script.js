const translations = {
  zh: {
    brand: "林以安",
    navAbout: "關於",
    navStory: "事蹟",
    navWork: "作品",
    navContact: "聯絡",
    heroEyebrow: "數位產品設計師 / 創意工程師",
    heroName: "林以安",
    heroLead: "我把資料、介面與故事感揉合成清澈又有速度的產品體驗。",
    tag1: "人機互動",
    tag2: "生成式藝術",
    tag3: "城市攝影",
    tag4: "咖啡實驗",
    stat1: "跨域專案",
    stat2: "設計獎項入選",
    stat3: "工作坊參與者",
    stat4: "公開演講",
    aboutEyebrow: "About",
    aboutTitle: "關於我",
    aboutCard1Title: "清晰的複雜度",
    aboutCard1Text: "曾在未來金融、智慧零售與文化科技團隊擔任產品設計顧問，擅長把模糊問題拆成可被使用者感受到的節奏。",
    aboutCard2Title: "會寫程式的設計腦",
    aboutCard2Text: "使用原型、前端動畫與資料視覺化快速驗證想法，讓團隊在討論時看見可互動的答案。",
    aboutCard3Title: "偏好的工作方式",
    aboutCard3Text: "喜歡小步快跑、漂亮的系統化命名、安靜但有力量的介面，以及能讓人願意多停留一秒的細節。",
    storyEyebrow: "Milestones",
    storyTitle: "虛構事蹟",
    m1Title: "策展「液態介面」互動展",
    m1Text: "用即時感測資料驅動沉浸式牆面，讓觀眾用步伐生成 Tiffany Blue 的光流。",
    m2Title: "打造 Aurora CRM 原型",
    m2Text: "把銷售洞察、任務排序與客戶情緒訊號整合成單頁式工作台。",
    m3Title: "入選亞洲數位設計新星",
    m3Text: "以「慢速通知」概念重新思考使用者注意力，獲評審特別提名。",
    m4Title: "發起周末創意實驗室",
    m4Text: "每月聚集設計師、工程師與創作者，將奇怪想法做成能玩的原型。",
    workEyebrow: "Selected Work",
    workTitle: "更多資料與作品",
    w1Title: "Nebula Notes",
    w1Text: "為研究者設計的 AI 筆記系統，支援脈絡搜尋與自動摘要。",
    w2Title: "Mint Transit",
    w2Text: "城市通勤者的微互動儀表板，提供路線、天氣與心情記錄。",
    w3Title: "Echo Table",
    w3Text: "把會議語音變成決策地圖，協助團隊追蹤共識與分歧。",
    contactEyebrow: "Contact",
    contactTitle: "一起把想法做得更亮。",
    contactText: "歡迎聊產品設計、前端動畫、AI 原型、展覽互動或一杯很認真的拿鐵。"
  },
  en: {
    brand: "Elian Lin",
    navAbout: "About",
    navStory: "Milestones",
    navWork: "Work",
    navContact: "Contact",
    heroEyebrow: "Digital Product Designer / Creative Engineer",
    heroName: "Elian Lin",
    heroLead: "I blend data, interface design, and narrative into product experiences that feel clear, fast, and alive.",
    tag1: "Human-Computer Interaction",
    tag2: "Generative Art",
    tag3: "Urban Photography",
    tag4: "Coffee Experiments",
    stat1: "Cross-Discipline Projects",
    stat2: "Design Shortlists",
    stat3: "Workshop Guests",
    stat4: "Public Talks",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutCard1Title: "Clarity for Complexity",
    aboutCard1Text: "A fictional consultant for future finance, smart retail, and cultural technology teams, turning ambiguous problems into product rhythm users can feel.",
    aboutCard2Title: "A Designer Who Codes",
    aboutCard2Text: "I use prototypes, front-end motion, and data visualization to test ideas quickly, giving teams interactive answers instead of static debate.",
    aboutCard3Title: "How I Like to Work",
    aboutCard3Text: "Small loops, precise naming systems, quiet interfaces with force, and details that make people stay one second longer.",
    storyEyebrow: "Milestones",
    storyTitle: "Fictional Highlights",
    m1Title: "Curated Liquid Interface",
    m1Text: "An interactive exhibition where sensor data drove immersive walls and visitors generated Tiffany Blue light streams with every step.",
    m2Title: "Built the Aurora CRM Prototype",
    m2Text: "A one-page workspace combining sales insight, task priority, and customer sentiment signals.",
    m3Title: "Selected as an Asia Digital Design Rising Star",
    m3Text: "Reimagined user attention through a slow-notification concept and received a special jury mention.",
    m4Title: "Started Weekend Creative Lab",
    m4Text: "A monthly gathering where designers, engineers, and makers turn strange ideas into playable prototypes.",
    workEyebrow: "Selected Work",
    workTitle: "More Work and Data",
    w1Title: "Nebula Notes",
    w1Text: "An AI note system for researchers with context search and automatic summaries.",
    w2Title: "Mint Transit",
    w2Text: "A micro-interaction dashboard for city commuters, combining routes, weather, and mood logs.",
    w3Title: "Echo Table",
    w3Text: "A meeting voice tool that turns conversation into decision maps for tracking alignment and disagreement.",
    contactEyebrow: "Contact",
    contactTitle: "Let's make the idea brighter.",
    contactText: "Open to product design, front-end motion, AI prototypes, exhibition interaction, or a very serious latte."
  }
};

const langToggle = document.querySelector("#langToggle");
const themeToggle = document.querySelector("#themeToggle");
let currentLang = "zh";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[lang][key] || node.textContent;
  });
  langToggle.querySelector(".button-text").textContent = lang === "zh" ? "EN" : "中";

  if (window.gsap) {
    gsap.fromTo("[data-i18n]", { opacity: 0.25, y: 8 }, {
      opacity: 1,
      y: 0,
      stagger: 0.012,
      duration: 0.32,
      ease: "power2.out"
    });
  }
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
}

langToggle.addEventListener("click", () => {
  setLanguage(currentLang === "zh" ? "en" : "zh");
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
});

setTheme(localStorage.getItem("theme") || "light");

function initMotion() {
  if (!window.gsap) {
    document.querySelectorAll(".reveal").forEach((node) => {
      node.style.opacity = 1;
      node.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal").forEach((element) => {
    gsap.fromTo(element, { opacity: 0, y: 42, filter: "blur(12px)" }, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 86%",
        toggleActions: "play none none reverse"
      }
    });
  });

  gsap.to(".portrait", {
    rotate: 3,
    y: -18,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".orbital-chip", {
    y: (index) => [-14, 20, -18][index],
    x: (index) => [16, -20, 12][index],
    rotate: (index) => [8, -12, 10][index],
    duration: 2.8,
    stagger: 0.15,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.utils.toArray(".stat-item strong").forEach((number) => {
    const target = Number(number.dataset.count);
    gsap.to(number, {
      textContent: target,
      duration: 1.4,
      snap: { textContent: 1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: number,
        start: "top 88%",
        once: true
      }
    });
  });
}

function initCanvasAura() {
  const canvas = document.querySelector("#auraCanvas");
  const context = canvas.getContext("2d");
  const dots = Array.from({ length: 76 }, (_, index) => ({
    x: Math.random(),
    y: Math.random(),
    radius: 1.2 + Math.random() * 4.5,
    speed: 0.001 + Math.random() * 0.003,
    phase: Math.random() * Math.PI * 2,
    drift: index % 2 === 0 ? 1 : -1
  }));

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function render(time) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    context.clearRect(0, 0, width, height);

    const gradient = context.createRadialGradient(width * 0.5, height * 0.38, 20, width * 0.5, height * 0.38, Math.max(width, height) * 0.82);
    gradient.addColorStop(0, "rgba(121, 238, 233, 0.18)");
    gradient.addColorStop(0.45, "rgba(10, 186, 181, 0.07)");
    gradient.addColorStop(1, "rgba(10, 186, 181, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    dots.forEach((dot) => {
      dot.phase += dot.speed;
      const x = dot.x * width + Math.sin(time * 0.0004 + dot.phase) * 32 * dot.drift;
      const y = dot.y * height + Math.cos(time * 0.00035 + dot.phase) * 42;
      context.beginPath();
      context.arc(x, y, dot.radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(10, 186, 181, 0.34)";
      context.fill();
    });

    requestAnimationFrame(render);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(render);
}

window.addEventListener("load", () => {
  initMotion();
  initCanvasAura();
});
