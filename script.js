const root = document.documentElement;
const body = document.body;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(pointer: fine)");

const ui = {
  title: document.querySelector("title"),
  description: document.querySelector('meta[name="description"]'),
  introLine: document.querySelector(".intro-screen__line"),
  brand: document.querySelector(".brand"),
  languageToggle: document.getElementById("language-toggle"),
  themeToggle: document.getElementById("theme-toggle"),
  navLinks: Array.from(document.querySelectorAll(".nav-link")),
  revealNodes: Array.from(document.querySelectorAll(".reveal-on-scroll")),
  tiltCards: Array.from(document.querySelectorAll(".tilt-card")),
  whatsappLinks: Array.from(document.querySelectorAll('a[href*="wa.me/905387249358"]')),
  floatingWhatsApp: document.querySelector(".floating-whatsapp"),
  floatingWhatsAppText: document.querySelector(".floating-whatsapp__text"),
  hero: {
    profileAlt: "Sezer profil fotoğrafı",
    eyebrow: document.querySelector(".hero-copy .eyebrow"),
    title: document.querySelector(".hero-copy h1"),
    lead: document.querySelector(".hero-copy .lead"),
    buttons: Array.from(document.querySelectorAll(".hero-actions .button")),
    stats: Array.from(document.querySelectorAll(".hero-stats .stat-card")),
    photo: document.querySelector(".profile-photo"),
    role: document.querySelector(".profile-role"),
    cardTitle: document.querySelector(".hero-card h2"),
    cardCopy: document.querySelector(".card-copy"),
    focusItems: Array.from(document.querySelectorAll(".focus-list li")),
  },
  about: {
    label: document.querySelector("#about .section-label"),
    title: document.querySelector("#about h2"),
    paragraphs: Array.from(document.querySelectorAll("#about .about-copy p")),
    highlightLabels: Array.from(document.querySelectorAll("#about .mini-card span")),
    highlightTitles: Array.from(document.querySelectorAll("#about .mini-card strong")),
  },
  work: {
    label: document.querySelector("#work .section-label"),
    title: document.querySelector("#work h2"),
    cards: Array.from(document.querySelectorAll("#work .project-card")),
  },
  skills: {
    label: document.querySelector("#skills .section-label"),
    title: document.querySelector("#skills h2"),
    cards: Array.from(document.querySelectorAll("#skills .skill-card")),
    toolsLabel: document.querySelector("#skills .section-heading.compact .section-label"),
    toolsTitle: document.querySelector("#skills .section-heading.compact h3"),
    chips: Array.from(document.querySelectorAll("#skills .tag-cloud span")),
    noteTitle: document.querySelector("#skills .tool-note strong"),
    noteCopy: document.querySelector("#skills .tool-note p"),
  },
  process: {
    label: document.querySelector("#process .section-label"),
    title: document.querySelector("#process h2"),
    cards: Array.from(document.querySelectorAll("#process .process-card")),
  },
  contact: {
    label: document.querySelector("#contact .section-label"),
    title: document.querySelector("#contact h2"),
    copy: document.querySelector("#contact .contact-copy p"),
    buttons: Array.from(document.querySelectorAll("#contact .contact-actions .button")),
    boxLabels: Array.from(document.querySelectorAll("#contact .contact-box p")),
    boxValues: Array.from(document.querySelectorAll("#contact .contact-box strong")),
  },
};

const translations = {
  tr: {
    title: "Sezer | E-Ticaret Operasyon ve Entegrasyon",
    description: "Sezer'in e-ticaret operasyonu, entegrasyon, SEO ve içerik yönetimi odaklı modern portfolyo sitesi.",
    introLine: "E-ticaret operasyonu, entegrasyon ve SEO",
    nav: ["Hakkımda", "İşler", "Yetkinlikler", "Süreç", "İletişim"],
    hero: {
      profileAlt: "Sezer profil fotoğrafı",
      eyebrow: "E-Ticaret • Entegrasyon • SEO • Görsel Operasyon",
      title: ["E-ticarette düzen kurar,", "ürünü yayına hazır hale getiririm."],
      lead: "Nebim, Entegra, Ticimax ve ProjeSoft akışlarını yönetiyor; ürün, stok, içerik ve görsel tarafını birlikte ilerletiyorum. Kısa sürede yayına alınabilen, satışa dönük ve sürdürülebilir e-ticaret yapıları kuruyorum.",
      buttons: ["Seçili İşler", "Nasıl Çalışırım", "WhatsApp"],
      stats: [
        { strong: "Uçtan uca", span: "Operasyon ve entegrasyon" },
        { strong: "Satış odaklı", span: "İçerik ve vitrin düzeni" },
        { strong: "Hızlı uyum", span: "Destek ve problem çözümü" },
      ],
      role: "E-Ticaret Operasyon Uzmanı",
      cardTitle: "Teknik tarafı ve operasyon tarafını aynı masada yönetirim.",
      cardCopy: "Ürün girişinden yayına almaya, görsel düzeninden SEO uyumlu içeriğe kadar süreçleri tek bir akışta toplarım.",
      focus: [
        "Nebim, Entegra, Ticimax, ProjeSoft",
        "Ürün içerikleri ve kategori düzeni",
        "Görsel hazırlık ve satışa sunum",
        "Vercel, Wix ve AI araçlarıyla kurulum",
      ],
    },
    about: {
      label: "Hakkımda",
      title: "Kısa profil",
      paragraphs: [
        "E-ticaret tarafında yalnızca teknik kurulum değil, satışa çıkan son deneyimi de yönetiyorum. Ürün akışı, stok, görsel, kategori, kampanya ve içerik tarafı birbirinden kopuk ilerlediğinde hız kaybı oluşuyor. Ben bu parçaları tek bir akışa bağlıyorum.",
        "Çalıştığım yapıların ortak hedefi aynı: daha düzenli operasyon, daha temiz vitrin ve daha hızlı yayına alma. SEO ve içerik tarafında da satışa yaklaşan metinler hazırlıyorum.",
      ],
      highlights: [
        { label: "Odak", title: "Operasyon + entegrasyon" },
        { label: "Katkı", title: "İçerik, görsel ve satış hazırlığı" },
        { label: "Çalışma şekli", title: "Hızlı, sade ve uygulanabilir" },
      ],
    },
    work: {
      label: "Seçili İşler",
      title: "Vaka çalışması formatında referanslar",
      cards: [
        {
          alt: "Macera Cumhuriyeti web sitesi görseli",
          type: "Macera Cumhuriyeti",
          title: "Ürün akışını yayına hazır hale getiren operasyon yönetimi",
          summary: "Nebim, Entegra ve Ticimax tarafındaki ürün akışlarını, içerik ve görsel hazırlığını tek süreç altında topladım.",
          insights: [
            ["Ne yaptım", "Ürün girişi, kategori düzeni, görsel hazırlık ve satışa açılma kontrolü"],
            ["Değer", "Daha az hata, daha hızlı yayın ve daha temiz vitrin akışı"],
          ],
          tags: ["Nebim", "Entegra", "Ticimax"],
        },
        {
          alt: "Adrenalin Outdoor web sitesi görseli",
          type: "Adrenalin Outdoor",
          title: "Entegrasyon, içerik ve görsel tarafını bir arada yönetme",
          summary: "Ürünlerin sisteme alınması, kategori kurgusu ve vitrin yapısını satış odaklı bir düzende ele aldım.",
          insights: [
            ["Ne yaptım", "Ürün kartları, açıklamalar, görsel düzeni ve operasyon takibi"],
            ["Değer", "Daha anlaşılır ürün sunumu ve daha düzenli yayın süreci"],
          ],
          tags: ["Operasyon", "İçerik", "Görsel"],
        },
        {
          alt: "Laken Türkiye web sitesi görseli",
          type: "Laken Türkiye",
          title: "Dijital vitrin, içerik ve ürün düzeninde operasyon desteği",
          summary: "Görünürlük, vitrin düzeni ve ürün akışı tarafında satış odaklı bir yapı kurmaya katkı sağladım.",
          insights: [
            ["Ne yaptım", "Vitrin yapısı, ürün görünürlüğü ve operasyonel düzenleme"],
            ["Değer", "Daha güçlü sunum ve daha kontrollü yayın akışı"],
          ],
          tags: ["Wix", "SEO", "Vitrin"],
        },
      ],
    },
    skills: {
      label: "Yetkinlikler",
      title: "Hangi alanlarda güçlü olduğum",
      cards: [
        ["E-ticaret ve entegrasyon", "Ürün, stok ve sipariş akışlarını yönetir; sistemler arasındaki kopukluğu azaltırım."],
        ["SEO ve içerik", "Satışa yaklaşan, okunaklı ve görünürlüğü artıran ürün açıklamaları hazırlarım."],
        ["Görsel operasyon", "Ürün fotoğrafı, görsel düzen ve AI destekli üretim tarafını toparlarım."],
        ["Teknik destek", "POS, ERP ve günlük teknik sorunlarda operasyonu durdurmadan çözüm üretirim."],
      ],
      toolsLabel: "Araçlar",
      toolsTitle: "Kullandığım ekosistem",
      chips: ["Entegra", "Ticimax", "Nebim V3", "ProjeSoft", "Wix", "Vercel", "Codex", "Cursor", "Claude", "SEO", "Python", "AI araçları"],
      noteTitle: "Yaklaşım",
      noteCopy: "Az bölüm, net mesaj, güçlü örnekler. Ziyaretçi ne yaptığını, hangi araçları kullandığını ve neden güvenebileceğini hızlıca anlamalı.",
    },
    process: {
      label: "Süreç",
      title: "Projelerde nasıl ilerlerim",
      cards: [
        ["Analiz", "Mevcut yapı, ürün sayısı, entegrasyon akışı ve eksikleri hızlıca çıkarırım."],
        ["Kurulum", "İçerik, görsel, kategori ve teknik akışları birlikte düzene sokarım."],
        ["Yayına alma", "Son kontrolleri yapar, hataları temizler ve yayını güvenli hale getiririm."],
        ["İyileştirme", "SEO, içerik ve operasyon takibiyle süreci yayın sonrasında da desteklerim."],
      ],
    },
    contact: {
      label: "İletişim",
      title: "Birlikte çalışmak için ulaşabilirsiniz",
      copy: "E-ticaret operasyonu, entegrasyon, içerik ve görsel süreçleri için doğrudan iletişime geçebilirsiniz.",
      buttons: ["WhatsApp ile Yaz", "E-posta Gönder"],
      boxLabels: ["İsim", "Telefon", "E-posta", "Odak"],
      boxValues: ["Sezer", "+90 538 724 93 58", "sezeracipinars@gmail.com", "E-ticaret operasyonu, entegrasyon ve SEO"],
    },
    floating: {
      text: "WhatsApp",
      aria: "WhatsApp ile iletişime geç",
    },
    buttons: {
      languageLabel: "İngilizceye geç",
      languageTarget: "EN",
      themeLabel: { light: "Karanlık", dark: "Aydınlık" },
      themeAria: { light: "Karanlık temaya geç", dark: "Aydınlık temaya geç" },
    },
    whatsappUrl: "https://wa.me/905387249358?text=Merhaba%20Sezer%2C%20siteniz%20%C3%BCzerinden%20ula%C5%9F%C4%B1yorum.",
    emailHref: "mailto:sezeracipinars@gmail.com",
  },
  en: {
    title: "Sezer | E-Commerce Operations and Integration",
    description: "A modern portfolio focused on e-commerce operations, integrations, SEO, and content management.",
    introLine: "E-commerce operations, integration, and SEO",
    nav: ["About", "Work", "Skills", "Process", "Contact"],
    hero: {
      profileAlt: "Sezer profile photo",
      eyebrow: "E-Commerce • Integration • SEO • Visual Operations",
      title: ["I bring order to e-commerce,", "and get products ready to launch."],
      lead: "I manage Nebim, Entegra, Ticimax, and ProjeSoft workflows; I move product, stock, content, and visual work forward together. I build e-commerce structures that can go live quickly and scale reliably.",
      buttons: ["Selected Work", "How I Work", "WhatsApp"],
      stats: [
        { strong: "End to end", span: "Operations and integration" },
        { strong: "Sales focused", span: "Content and storefront layout" },
        { strong: "Fast adaptation", span: "Support and problem solving" },
      ],
      role: "E-Commerce Operations Specialist",
      cardTitle: "I handle the technical and operational side in the same room.",
      cardCopy: "From product entry to launch, from visual layout to SEO-friendly content, I keep every step in one flow.",
      focus: [
        "Nebim, Entegra, Ticimax, ProjeSoft",
        "Product content and category structure",
        "Visual preparation and sales presentation",
        "Setup with Vercel, Wix, and AI tools",
      ],
    },
    about: {
      label: "About",
      title: "Short profile",
      paragraphs: [
        "In e-commerce, I do not just handle technical setup; I also manage the final customer-facing experience. When product flow, stock, visuals, categories, campaigns, and content drift apart, momentum drops. I keep those parts in one flow.",
        "The common goal across the setups I work on is the same: cleaner operations, a sharper storefront, and faster launches. I also prepare SEO and content copy that moves closer to sales.",
      ],
      highlights: [
        { label: "Focus", title: "Operations + integration" },
        { label: "Value", title: "Content, visuals, and launch readiness" },
        { label: "Working style", title: "Fast, simple, and practical" },
      ],
    },
    work: {
      label: "Selected Work",
      title: "References in case-study format",
      cards: [
        {
          alt: "Macera Cumhuriyeti website mockup",
          type: "Macera Cumhuriyeti",
          title: "Operations management that made the product flow launch-ready",
          summary: "I brought the product flow, content, and visual preparation on Nebim, Entegra, and Ticimax into one process.",
          insights: [
            ["What I did", "Product entry, category structure, visual prep, and launch checks"],
            ["Value", "Fewer errors, faster releases, and a cleaner storefront flow"],
          ],
          tags: ["Nebim", "Entegra", "Ticimax"],
        },
        {
          alt: "Adrenalin Outdoor website mockup",
          type: "Adrenalin Outdoor",
          title: "Managing integration, content, and visuals together",
          summary: "I handled product intake, category structure, and storefront layout in a sales-oriented setup.",
          insights: [
            ["What I did", "Product cards, descriptions, visual layout, and operations tracking"],
            ["Value", "Clearer product presentation and a more organized publishing process"],
          ],
          tags: ["Operations", "Content", "Visual"],
        },
        {
          alt: "Laken Türkiye website mockup",
          type: "Laken Türkiye",
          title: "Operations support for digital storefront, content, and product layout",
          summary: "I contributed to a sales-focused structure around visibility, storefront order, and product flow.",
          insights: [
            ["What I did", "Storefront structure, product visibility, and operational cleanup"],
            ["Value", "Stronger presentation and tighter release control"],
          ],
          tags: ["Wix", "SEO", "Storefront"],
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "What I'm strong at",
      cards: [
        ["E-commerce and integration", "I manage product, stock, and order flows and reduce friction between systems."],
        ["SEO and content", "I write product copy that is readable, sales-oriented, and built to improve visibility."],
        ["Visual operations", "I organize product photography, visual layout, and AI-assisted production."],
        ["Technical support", "I solve POS, ERP, and daily technical issues without stopping operations."],
      ],
      toolsLabel: "Tools",
      toolsTitle: "My ecosystem",
      chips: ["Entegra", "Ticimax", "Nebim V3", "ProjeSoft", "Wix", "Vercel", "Codex", "Cursor", "Claude", "SEO", "Python", "AI tools"],
      noteTitle: "Approach",
      noteCopy: "Few sections, clear message, strong examples. Visitors should quickly understand what I do, which tools I use, and why they can trust the work.",
    },
    process: {
      label: "Process",
      title: "How I work on projects",
      cards: [
        ["Analysis", "I quickly map the current setup, product count, integration flow, and gaps."],
        ["Setup", "I organize content, visuals, categories, and technical flows together."],
        ["Launch", "I do the final checks, clean up issues, and make the release safe."],
        ["Improvement", "I continue supporting the project after launch with SEO, content, and operational follow-up."],
      ],
    },
    contact: {
      label: "Contact",
      title: "Get in touch for collaboration",
      copy: "You can reach out directly for e-commerce operations, integration, content, and visual work.",
      buttons: ["Message on WhatsApp", "Send Email"],
      boxLabels: ["Name", "Phone", "Email", "Focus"],
      boxValues: ["Sezer", "+90 538 724 93 58", "sezeracipinars@gmail.com", "E-commerce operations, integration, and SEO"],
    },
    floating: {
      text: "WhatsApp",
      aria: "Contact on WhatsApp",
    },
    buttons: {
      languageLabel: "Türkçeye geç",
      languageTarget: "TR",
      themeLabel: { light: "Dark", dark: "Light" },
      themeAria: { light: "Switch to dark theme", dark: "Switch to light theme" },
    },
    whatsappUrl: "https://wa.me/905387249358?text=Hello%20Sezer%2C%20I%27m%20reaching%20out%20through%20your%20website.",
    emailHref: "mailto:sezeracipinars@gmail.com",
  },
};

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      return null;
    }
  },
};

const systemLanguage = navigator.language.toLowerCase().startsWith("en") ? "en" : "tr";
const initialLanguage = storage.get("portfolio-language") || systemLanguage;
const initialTheme = storage.get("portfolio-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

let currentLanguage = initialLanguage;
let currentTheme = initialTheme;
let pointerFrame = 0;
let pointerX = 0;
let pointerY = 0;
const enablePointerEffects = finePointer.matches && !reduceMotion.matches;

function setText(node, value) {
  if (node) node.textContent = value;
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  root.dataset.theme = currentTheme;
  storage.set("portfolio-theme", currentTheme);

  const strings = translations[currentLanguage];
  const nextThemeLabel = strings.buttons.themeLabel[currentTheme];
  const nextThemeAria = strings.buttons.themeAria[currentTheme];

  setText(ui.themeToggle, nextThemeLabel);
  ui.themeToggle?.setAttribute("aria-label", nextThemeAria);
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "tr";
  const strings = translations[currentLanguage];

  storage.set("portfolio-language", currentLanguage);
  document.documentElement.lang = currentLanguage;
  setText(ui.title, strings.title);
  ui.description?.setAttribute("content", strings.description);
  setText(ui.introLine, strings.introLine);
  setText(ui.brand, "SEZER");

  ui.navLinks.forEach((link, index) => {
    setText(link, strings.nav[index]);
  });

  setText(ui.hero.eyebrow, strings.hero.eyebrow);
  if (ui.hero.title) {
    ui.hero.title.innerHTML = `${strings.hero.title[0]}<span>${strings.hero.title[1]}</span>`;
  }
  setText(ui.hero.lead, strings.hero.lead);
  ui.hero.photo?.setAttribute("alt", strings.hero.profileAlt);
  ui.hero.buttons.forEach((button, index) => {
    setText(button, strings.hero.buttons[index]);
  });
  ui.hero.stats.forEach((card, index) => {
    setText(card.querySelector("strong"), strings.hero.stats[index].strong);
    setText(card.querySelector("span"), strings.hero.stats[index].span);
  });
  setText(ui.hero.role, strings.hero.role);
  setText(ui.hero.cardTitle, strings.hero.cardTitle);
  setText(ui.hero.cardCopy, strings.hero.cardCopy);
  ui.hero.focusItems.forEach((item, index) => {
    setText(item, strings.hero.focus[index]);
  });

  setText(ui.about.label, strings.about.label);
  setText(ui.about.title, strings.about.title);
  ui.about.paragraphs.forEach((paragraph, index) => {
    setText(paragraph, strings.about.paragraphs[index]);
  });
  ui.about.highlightLabels.forEach((label, index) => {
    setText(label, strings.about.highlights[index].label);
  });
  ui.about.highlightTitles.forEach((title, index) => {
    setText(title, strings.about.highlights[index].title);
  });

  setText(ui.work.label, strings.work.label);
  setText(ui.work.title, strings.work.title);
  ui.work.cards.forEach((card, index) => {
    const copy = strings.work.cards[index];
    const image = card.querySelector(".project-image");
    setText(card.querySelector(".project-type"), copy.type);
    setText(card.querySelector("h3"), copy.title);
    setText(card.querySelector(".project-summary"), copy.summary);
    card.querySelectorAll(".project-insight").forEach((insight, insightIndex) => {
      const pair = copy.insights[insightIndex];
      setText(insight.querySelector("strong"), pair[0]);
      setText(insight.querySelector("span"), pair[1]);
    });
    card.querySelectorAll(".project-tags span").forEach((tag, tagIndex) => {
      setText(tag, copy.tags[tagIndex]);
    });
    if (image) {
      image.setAttribute("alt", copy.alt);
    }
  });

  setText(ui.skills.label, strings.skills.label);
  setText(ui.skills.title, strings.skills.title);
  ui.skills.cards.forEach((card, index) => {
    const pair = strings.skills.cards[index];
    setText(card.querySelector("h3"), pair[0]);
    setText(card.querySelector("p"), pair[1]);
  });
  setText(ui.skills.toolsLabel, strings.skills.toolsLabel);
  setText(ui.skills.toolsTitle, strings.skills.toolsTitle);
  ui.skills.chips.forEach((chip, index) => {
    setText(chip, strings.skills.chips[index]);
  });
  setText(ui.skills.noteTitle, strings.skills.noteTitle);
  setText(ui.skills.noteCopy, strings.skills.noteCopy);

  setText(ui.process.label, strings.process.label);
  setText(ui.process.title, strings.process.title);
  ui.process.cards.forEach((card, index) => {
    const pair = strings.process.cards[index];
    setText(card.querySelector("h3"), pair[0]);
    setText(card.querySelector("p"), pair[1]);
  });

  setText(ui.contact.label, strings.contact.label);
  setText(ui.contact.title, strings.contact.title);
  setText(ui.contact.copy, strings.contact.copy);
  ui.contact.buttons.forEach((button, index) => {
    setText(button, strings.contact.buttons[index]);
  });
  ui.contact.boxLabels.forEach((label, index) => {
    setText(label, strings.contact.boxLabels[index]);
  });
  ui.contact.boxValues.forEach((value, index) => {
    setText(value, strings.contact.boxValues[index]);
  });

  setText(ui.floatingWhatsAppText, strings.floating.text);
  ui.floatingWhatsApp?.setAttribute("aria-label", strings.floating.aria);
  ui.whatsappLinks.forEach((link) => {
    link.setAttribute("href", strings.whatsappUrl);
  });

  if (ui.languageToggle) {
    setText(ui.languageToggle, strings.buttons.languageTarget);
    ui.languageToggle.setAttribute("aria-label", strings.buttons.languageLabel);
  }

  applyTheme(currentTheme);
}

function updatePointerEffect(event) {
  if (!enablePointerEffects) return;

  pointerX = event.clientX / window.innerWidth - 0.5;
  pointerY = event.clientY / window.innerHeight - 0.5;

  if (pointerFrame) return;

  pointerFrame = window.requestAnimationFrame(() => {
    root.style.setProperty("--pointer-x", pointerX.toFixed(4));
    root.style.setProperty("--pointer-y", pointerY.toFixed(4));
    pointerFrame = 0;
  });
}

function resetPointerEffect() {
  if (pointerFrame) {
    window.cancelAnimationFrame(pointerFrame);
    pointerFrame = 0;
  }

  root.style.setProperty("--pointer-x", "0");
  root.style.setProperty("--pointer-y", "0");
}

function handleTiltMove(event) {
  if (!enablePointerEffects) return;

  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const rotateY = ((offsetX / rect.width) - 0.5) * 8;
  const rotateX = (0.5 - (offsetY / rect.height)) * 8;

  card.style.transform = `translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
}

function resetTilt(event) {
  event.currentTarget.style.transform = "";
}

function setActiveLink(id) {
  ui.navLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", active);
  });
}

if (enablePointerEffects) {
  window.addEventListener("pointermove", updatePointerEffect, { passive: true });
}

window.addEventListener("mouseleave", resetPointerEffect);
window.addEventListener("blur", resetPointerEffect);

if (enablePointerEffects) {
  ui.tiltCards.forEach((card) => {
    card.addEventListener("pointermove", handleTiltMove, { passive: true });
    card.addEventListener("pointerleave", resetTilt);
  });
}

if (ui.revealNodes.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  ui.revealNodes.forEach((node) => observer.observe(node));
} else {
  ui.revealNodes.forEach((node) => node.classList.add("is-visible"));
}

if (ui.navLinks.length && "IntersectionObserver" in window) {
  const sections = ui.navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) {
      setActiveLink(visible.target.id);
    }
  }, {
    threshold: [0.2, 0.4, 0.6],
    rootMargin: "-20% 0px -55% 0px",
  });

  sections.forEach((section) => sectionObserver.observe(section));
} else if (ui.navLinks[0]?.getAttribute("href")) {
  const initialTarget = document.querySelector(ui.navLinks[0].getAttribute("href"));
  if (initialTarget?.id) {
    setActiveLink(initialTarget.id);
  }
}

if (ui.languageToggle) {
  ui.languageToggle.addEventListener("click", () => {
    applyLanguage(currentLanguage === "tr" ? "en" : "tr");
  });
}

if (ui.themeToggle) {
  ui.themeToggle.addEventListener("click", () => {
    applyTheme(currentTheme === "light" ? "dark" : "light");
  });
}

if (reduceMotion.matches || !finePointer.matches) {
  body.classList.add("intro-done");
  body.classList.add("hero-ready");
} else {
  window.setTimeout(() => {
    body.classList.add("intro-done");
    window.setTimeout(() => {
      body.classList.add("hero-ready");
    }, 80);
  }, 700);
}

applyLanguage(initialLanguage);
applyTheme(initialTheme);
resetPointerEffect();
