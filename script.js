/**
 * ============================================================================
 * AHD MOHAMED ABDELSALAM — MOTION & GRAPHIC DESIGNER PORTFOLIO
 * Vanilla JavaScript Engine: i18n, Theme, Projects Modal, Animations & A11y
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. INTERNATIONALIZATION (i18n) TRANSLATION DICTIONARY
     -------------------------------------------------------------------------- */
  const translations = {
    en: {
      pageTitle: "Ahd Mohamed Abdelsalam — Motion & Graphic Designer",
      pageMetaDesc: "Portfolio of Ahd Mohamed Abdelsalam — Motion & Graphic Designer. Turning ideas into engaging visual stories through motion graphics, 2D animation, branding, and graphic design.",
      skipLink: "Skip to main content",
      
      nav: {
        home: "Home",
        about: "About",
        education: "Education",
        skills: "Skills",
        experience: "Experience",
        services: "Services",
        projects: "Projects",
        feedback: "Feedback",
        contact: "Contact"
      },

      hero: {
        available: "Available for Freelance",
        title: "Motion & Graphic Designer",
        nameFirst: "Ahd",
        nameMiddle: "Mohamed",
        nameLast: "Abdelsalam",
        tagline: "“I turn ideas into visual stories that move.”",
        desc: "Creative Motion & Graphic Designer with two years of experience, focused on visual storytelling, creative concepts, and bringing ideas to life through motion and design.",
        btnWork: "View My Work",
        btnContact: "Let's Work Together",
        portraitReserved: "PORTRAIT RESERVED"
      },

      about: {
        sectionTitle: "Visual Storyteller & Designer",
        mainHeading: "Turning Ideas into Visual Stories",
        subtitle: "Combining creativity, storytelling, and attention to detail",
        descP1: "I’m Ahd Mohamed, a Motion & Graphic Designer with a passion for turning ideas into engaging visual stories.",
        descP2: "With two years of experience in design, I focus on creating visuals that combine creativity, storytelling, and attention to detail.",
        descP3: "I enjoy exploring different styles, from minimal and modern designs to colorful, experimental, typographic, and 3D visuals, always aiming to create work that feels both meaningful and memorable.",
        quote: "Turning ideas into visual stories that move.",
        whatIBring: "What I Bring",
        s1Title: "Creative Thinking",
        s1Desc: "Turning ideas into engaging visual concepts.",
        s2Title: "Attention to Detail",
        s2Desc: "Paying close attention to the details and requirements that matter to each client.",
        s3Title: "Storytelling",
        s3Desc: "Creating visuals that communicate ideas through strong visual storytelling.",
        s4Title: "Commitment",
        s4Desc: "Respecting deadlines and staying committed to delivering quality work."
      },

      edu: {
        heading: "Education",
        supportingLabel: "Academic foundation",
        entry: "Faculty of Oral and Dental Medicine",
        note: "Dedicated academic pursuit fostering meticulous precision, discipline, and visual depth."
      },

      skills: {
        heading: "Skills",
        supportingDesc: "Creative disciplines, motion techniques, and software tools",
        levelCaption: "Overall Skill Level",
        levelBadge: "Intermediate",
        disciplinesTitle: "Creative & Technical Disciplines",
        softwareTitle: "Software Toolkit",
        intermediate: "Intermediate",
        d1: "Motion Graphics",
        d2: "2D Animation",
        d3: "Logo Animation",
        d4: "Graphic Design",
        d5: "Branding",
        d6: "Visual Identity",
        d7: "Logo Design",
        d8: "Social Media Design",
        d9: "Poster Design",
        d10: "Illustration",
        d11: "Storyboarding",
        d12: "Video Editing",
        d13: "Creative Concept Development",
        d14: "Typography",
        d15: "Visual Storytelling"
      },

      exp: {
        heading: "Work Experience",
        supportingDesc: "Professional design positions and creative practice",
        statusPresent: "Present",
        statusFreelance: "Freelance",
        exp1Role: "Graphic Designer",
        exp1Org: "DEPI — Digital Egypt Pioneers Initiative",
        exp1Desc: "Working as a Graphic Designer within a creative team, developing visual content and exploring different forms of motion and graphic design.",
        responsibilitiesLabel: "Key Responsibilities:",
        collab: "Team Collaboration",
        exp2Role: "Freelance Motion & Graphic Designer",
        exp2Org: "Independent Design Practice",
        exp2Desc: "Working independently with different clients to create creative visual solutions across graphic design and motion.",
        preferredClientsLabel: "Preferred Client Types:",
        clientCompanies: "Companies & Organizations",
        clientBrands: "Personal Brands",
        clientCreators: "Creators"
      },

      services: {
        heading: "Services",
        supportingDesc: "Specialized motion and design solutions",
        primaryFocus: "Primary Focus",
        s1Title: "Motion Graphics",
        s1Desc: "Bringing ideas to life through engaging animation and visual storytelling.",
        s2Title: "2D Animation",
        s2Desc: "Creating expressive animated visuals for digital content, campaigns, and brands.",
        s3Title: "Logo Animation",
        s3Desc: "Turning static logos into memorable animated brand moments.",
        s4Title: "Brand Identity",
        s4Desc: "Building cohesive visual identities that communicate a brand’s personality.",
        s5Title: "Logo Design",
        s5Desc: "Creating distinctive and meaningful logos tailored to each brand.",
        s6Title: "Social Media Design",
        s6Desc: "Designing engaging visual content that helps brands communicate with their audience.",
        s7Title: "Video Editing",
        s7Desc: "Crafting dynamic and visually engaging videos for digital platforms."
      },

      projects: {
        heading: "Selected Work",
        supportingDesc: "A selection of visual explorations across graphic design, motion, and creative storytelling.",
        viewDetails: "View Artwork",
        fullscreenVideo: "Expanded View",
        p1Title: "Editorial Portrait Composition",
        p1Cat: "Visual Composition / Image Editing",
        p1Desc: "An editorial-style portrait composition combining a framed vertical photograph, a monochrome blurred background, and contrasting visual depth to create a striking photographic presentation.",
        p2Title: "EMPIRE — Event Poster Design",
        p2Cat: "Graphic Design / Poster Design",
        p2Desc: "An expressive event poster exploring oversized typography, layered text, monochromatic contrast, dynamic composition, and photographic cutouts to create a bold nightlife visual.",
        p3Title: "Crazy Carrot — Character Animation",
        p3Cat: "Motion Graphics / 2D Animation",
        p3Desc: "A playful cartoon animation featuring a friendly carrot character, colorful outdoor scenery, and expressive illustrated elements in a vibrant visual style."
      },

      feedback: {
        heading: "Kind Words",
        disclaimer: "* Illustrative sample feedback demonstrating client collaborations and creative reception.",
        f1: "“Working with Ahd was a great experience. She understood the creative direction quickly and transformed the idea into a strong visual result.”",
        f1Label: "Sample Feedback 01",
        f2: "“Professional, creative, and committed to deadlines. Ahd brought a fresh perspective to the project and delivered an engaging visual result.”",
        f2Label: "Sample Feedback 02"
      },

      contact: {
        badge: "Let's Connect",
        heading: "Let’s Make Something Move.",
        sub: "Have an idea? Let’s turn it into a visual story.",
        btnWhatsapp: "Let's Talk on WhatsApp",
        btnLinkedin: "LinkedIn Profile",
        location: "Egypt"
      },

      footer: {
        name: "Ahd Mohamed Abdelsalam",
        role: "Motion & Graphic Designer",
        navigation: "Navigation",
        connect: "Connect",
        copyright: "© 2026 Ahd Mohamed Abdelsalam. All rights reserved."
      },

      modal: {
        close: "Close Preview"
      }
    },

    ar: {
      pageTitle: "عهد محمد عبد السلام — مصممة موشن وجرافيك",
      pageMetaDesc: "معرض أعمال عهد محمد عبد السلام — مصممة موشن وجرافيك. تحويل الأفكار إلى قصص بصرية ملهمة من خلال الموشن جرافيك، الأنيميشن، الهوية البصرية، وتصميم الجرافيك.",
      skipLink: "الانتقال إلى المحتوى الرئيسي",
      
      nav: {
        home: "الرئيسية",
        about: "عنّي",
        education: "التعليم",
        skills: "المهارات",
        experience: "الخبرات",
        services: "الخدمات",
        projects: "الأعمال",
        feedback: "آراء",
        contact: "تواصل معي"
      },

      hero: {
        available: "متاح للعمل الحر (Freelance)",
        title: "مصممة موشن وجرافيك",
        nameFirst: "عهد",
        nameMiddle: "محمد",
        nameLast: "عبد السلام",
        tagline: "«أحوّل الأفكار إلى قصص بصرية تنبض بالحركة.»",
        desc: "مصممة موشن وجرافيك بخبرة تمتد لعامين، شغوفة برواية القصص البصرية، وتطوير المفاهيم الإبداعية، وتحويل الأفكار إلى واقع من خلال الحركة والتصميم.",
        btnWork: "استعرض أعمالي",
        btnContact: "لنعمل معاً",
        portraitReserved: "المساحة مخصصة للصورة"
      },

      about: {
        sectionTitle: "راوية بصرية ومصممة",
        mainHeading: "تحويل الأفكار إلى قصص بصرية",
        subtitle: "دمج الإبداع، والسرد القصصي، والدقة في التفاصيل",
        descP1: "أنا عهد محمد، مصممة موشن وجرافيك يلهمني تحويل الأفكار إلى قصص بصرية مؤثرة.",
        descP2: "مع عامين من الخبرة في عالم التصميم، أركز على ابتكار مرئيات تجمع بين الإبداع، وقوة السرد، والعناية الدقيقة بالتفاصيل.",
        descP3: "أستمتع باستكشاف مختلف المدارس والأساليب الفنية، بدءاً من التصاميم البسيطة والمعاصرة وحتى الأعمال الجريئة، والتجريبية، وتصاميم التايبوجرافي وثلاثية الأبعاد، ساعيةً دوماً لتقديم أعمال ذات معنى وبصمة مميزة.",
        quote: "تحويل الأفكار إلى قصص بصرية تنبض بالحركة.",
        whatIBring: "ما أقدمه",
        s1Title: "التفكير الإبداعي",
        s1Desc: "تحويل الأفكار إلى مفاهيم بصرية جذابة ومبتكرة.",
        s2Title: "الاهتمام بالتفاصيل",
        s2Desc: "العناية الفائقة بأدق التفاصيل والمتطلبات التي تهم كل عميل.",
        s3Title: "السرد القصصي",
        s3Desc: "ابتكار مرئيات تعبر عن الأفكار بقوة من خلال سرد بصري مؤثر.",
        s4Title: "الالتزام",
        s4Desc: "احترام المواعيد المحددة والحرص التام على تقديم أعلى معايير الجودة."
      },

      edu: {
        heading: "التعليم",
        supportingLabel: "الأساس الأكاديمي",
        entry: "كلية طب وجراحة الفم والأسنان",
        note: "مسار أكاديمي يعزز الدقة البالغة، والانضباط، والرؤية البصرية العميقة."
      },

      skills: {
        heading: "المهارات",
        supportingDesc: "التخصصات الإبداعية، تقنيات الموشن، والبرامج المتخصصة",
        levelCaption: "المستوى العام",
        levelBadge: "متوسط (Intermediate)",
        disciplinesTitle: "التخصصات الإبداعية والتقنية",
        softwareTitle: "برامج التصميم والموشن",
        intermediate: "متوسط",
        d1: "موشن جرافيك",
        d2: "أنيميشن ثنائي الأبعاد",
        d3: "تحريك الشعارات",
        d4: "تصميم الجرافيك",
        d5: "الهوية البصرية",
        d6: "بناء الهوية",
        d7: "تصميم الشعارات",
        d8: "تصاميم السوشيال ميديا",
        d9: "تصميم البوسترات",
        d10: "الرسم الرقمي",
        d11: "الستوريبورد",
        d12: "تحرير ومونتاج الفيديو",
        d13: "تطوير المفاهيم الإبداعية",
        d14: "التايبوجرافي",
        d15: "السرد البصري"
      },

      exp: {
        heading: "الخبرات العملية",
        supportingDesc: "المسار المهني والممارسة الإبداعية",
        statusPresent: "حالياً",
        statusFreelance: "عمل حر",
        exp1Role: "مصممة جرافيك",
        exp1Org: "مبادرة رواد مصر الرقمية — DEPI",
        exp1Desc: "العمل كمصممة جرافيك ضمن فريق إبداعي، وتطوير المحتوى البصري واستكشاف أشكال متعددة من الموشن والتصميم الجرافيكي.",
        responsibilitiesLabel: "المسؤوليات الرئيسية:",
        collab: "العمل الجماعي",
        exp2Role: "مصممة موشن وجرافيك حرة",
        exp2Org: "ممارسة تصميم مستقلة",
        exp2Desc: "العمل بشكل مستقل مع مختلف العملاء لتقديم حلول بصرية إبداعية عبر مجالات الجرافيك والموشن.",
        preferredClientsLabel: "العملاء المفضلون:",
        clientCompanies: "الشركات والمؤسسات",
        clientBrands: "العلامات الشخصية",
        clientCreators: "صناع المحتوى"
      },

      services: {
        heading: "الخدمات",
        supportingDesc: "حلول متخصصة في الموشن والتصميم الإبداعي",
        primaryFocus: "التركيز الرئيسي",
        s1Title: "موشن جرافيك",
        s1Desc: "بث الروح في الأفكار من خلال أنيميشن جذاب وسرد بصري ملهم.",
        s2Title: "أنيميشن ثنائي الأبعاد",
        s2Desc: "ابتكار مرئيات متحركة معبرة للمحتوى الرقمي، والحملات، والعلامات التجارية.",
        s3Title: "تحريك الشعارات",
        s3Desc: "تحويل الشعارات الثابتة إلى لحظات بصرية متحركة ترسخ في الذاكرة.",
        s4Title: "الهوية البصرية",
        s4Desc: "بناء هويات بصرية متكاملة تعكس شخصية العلامة التجارية بوضوح.",
        s5Title: "تصميم الشعارات",
        s5Desc: "ابتكار شعارات مميزة وفريدة مصممة خصيصاً لكل علامة تجارية.",
        s6Title: "تصاميم السوشيال ميديا",
        s6Desc: "تصميم محتوى بصري جذاب يساعد العلامات على التواصل الفعال مع جمهورها.",
        s7Title: "تحرير ومونتاج الفيديو",
        s7Desc: "صناعة فيديوهات ديناميكية وجذابة للمنصات الرقمية."
      },

      projects: {
        heading: "الأعمال المختارة",
        supportingDesc: "مختارات من الاستكشافات البصرية في التصميم، الموشن، والسرد القصصي.",
        viewDetails: "معاينة العمل",
        fullscreenVideo: "عرض موسع",
        p1Title: "تكوين بورتريه تحريري",
        p1Cat: "تكوين بصري / معالجة صور",
        p1Desc: "تكوين بورتريه بنمط تحريري يجمع بين صورة فوتوغرافية رأسية مؤطرة، وخلفية أحادية غير واضحة (Monochrome Blur)، وعمق بصري متباين لخلق عرض فوتوغرافي لافت.",
        p2Title: "بوستر فعالية EMPIRE",
        p2Cat: "تصميم جرافيك / تصميم بوستر",
        p2Desc: "بوستر فعالية تعبيري يستكشف التايبوجرافي الضخم، والطبقات النصية المتراكبة، والتباين الأحادي، والتكوين الحركي، وقصاصات الصور لخلق هوية بصرية جريئة لأجواء السهرات.",
        p3Title: "كارتون Crazy Carrot — تحريك شخصية",
        p3Cat: "موشن جرافيك / أنيميشن 2D",
        p3Desc: "أنيميشن كارتوني مرح يتميز بشخصية جزرة ودودة، ومشاهد طبيعية مفعمة بالحيوية في الهواء الطلق، وعناصر مرسومة بأسلوب بصري نابض بالألوان."
      },

      feedback: {
        heading: "كلمات طيبة",
        disclaimer: "* نماذج استرشادية لآراء العملاء توضح التعاون الإبداعي وانطباعات المشروعات.",
        f1: "«كان العمل مع عهد تجربة رائعة؛ استوعبت الرؤية الإبداعية سريعاً وحولت الفكرة إلى نتيجة بصرية قوية ومميزة.»",
        f1Label: "نموذج رأي 01",
        f2: "«احترافية عالية، إبداع والتزام تام بالمواعيد. أضافت عهد لمسة منعشة ورؤية جديدة للمشروع وقدمت عملاً بصرياً جذاباً.»",
        f2Label: "نموذج رأي 02"
      },

      contact: {
        badge: "تواصل معي",
        heading: "لنصنع شيئاً يتحرك.",
        sub: "لديك فكرة؟ لنحولها معاً إلى قصة بصرية.",
        btnWhatsapp: "تحدث معي عبر واتساب",
        btnLinkedin: "حساب لينكد إن",
        location: "مصر"
      },

      footer: {
        name: "عهد محمد عبد السلام",
        role: "مصممة موشن وجرافيك",
        navigation: "روابط سريعة",
        connect: "تواصل",
        copyright: "© 2026 عهد محمد عبد السلام. جميع الحقوق محفوظة."
      },

      modal: {
        close: "إغلاق المعاينة"
      }
    }
  };

  /* --------------------------------------------------------------------------
     2. GLOBAL STATE
     -------------------------------------------------------------------------- */
  let currentLang = localStorage.getItem('portfolio_lang') || 'en';
  let currentTheme = localStorage.getItem('portfolio_theme') || (
    window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  );

  /* --------------------------------------------------------------------------
     3. DOM ELEMENTS
     -------------------------------------------------------------------------- */
  const htmlEl = document.documentElement;
  const bodyEl = document.body;
  const siteHeader = document.getElementById('site-header');
  const scrollProgress = document.getElementById('scroll-progress');
  const langToggleBtn = document.getElementById('lang-toggle');
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  // Mobile drawer elements
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');

  // Portrait elements
  const portraitImg = document.getElementById('portrait-img');
  const portraitFallback = document.getElementById('portrait-fallback');

  // Modal elements
  const projectModal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalCloseCta = document.getElementById('modal-close-cta');
  const modalMediaWrap = document.getElementById('modal-media-wrap');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');

  // Custom Cursor elements
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  // Dynamic Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --------------------------------------------------------------------------
     4. INTERNATIONALIZATION HANDLER
     -------------------------------------------------------------------------- */
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    htmlEl.lang = lang;
    htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[lang] || translations.en;

    // Document title and meta
    document.title = t.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.pageMetaDesc);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getNestedTranslation(t, key);
      if (val) {
        el.textContent = val;
      }
    });

    // Update language toggle button label and active code
    if (langToggleBtn) {
      langToggleBtn.setAttribute('aria-label', lang === 'en' ? 'Switch Language to Arabic' : 'تغيير اللغة إلى الإنجليزية');
      const enCode = langToggleBtn.querySelector('.lang-code.en');
      const arCode = langToggleBtn.querySelector('.lang-code.ar');
      if (enCode && arCode) {
        if (lang === 'en') {
          enCode.style.color = 'var(--accent-primary)';
          arCode.style.color = 'var(--text-muted)';
        } else {
          enCode.style.color = 'var(--text-muted)';
          arCode.style.color = 'var(--accent-primary)';
        }
      }
    }

    // Update mobile lang buttons
    mobileLangBtns.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // If modal is currently open, re-render its text
    if (projectModal && projectModal.classList.contains('open')) {
      const activeProjId = projectModal.getAttribute('data-active-project');
      if (activeProjId) {
        renderModalContent(activeProjId);
      }
    }
  }

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : null), obj);
  }

  function toggleLanguage() {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    applyLanguage(nextLang);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }

  mobileLangBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang) applyLanguage(targetLang);
    });
  });

  /* --------------------------------------------------------------------------
     5. THEME SWITCHER HANDLER
     -------------------------------------------------------------------------- */
  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('portfolio_theme', theme);

    htmlEl.setAttribute('data-theme', theme);
    bodyEl.className = theme === 'light' ? 'theme-light' : 'theme-dark';

    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'
      );
    }
  }

  function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  /* --------------------------------------------------------------------------
     6. PORTRAIT FALLBACK LOGIC
     -------------------------------------------------------------------------- */
  function setupPortraitHandler() {
    if (!portraitImg || !portraitFallback) return;

    // Check if image loads cleanly or encounters 404
    portraitImg.addEventListener('error', () => {
      portraitImg.style.display = 'none';
      portraitFallback.style.display = 'flex';
    });

    portraitImg.addEventListener('load', () => {
      portraitImg.style.display = 'block';
      portraitFallback.style.display = 'none';
    });

    // Handle cached completion
    if (portraitImg.complete) {
      if (portraitImg.naturalWidth === 0) {
        portraitImg.style.display = 'none';
        portraitFallback.style.display = 'flex';
      } else {
        portraitImg.style.display = 'block';
        portraitFallback.style.display = 'none';
      }
    }
  }

  /* --------------------------------------------------------------------------
     7. PROJECT DETAILS & ACCESSIBLE LIGHTBOX MODAL
     -------------------------------------------------------------------------- */
  const projectsData = {
    p1: {
      type: 'image',
      src: 'assets/B&W background.jpg',
      alt: 'Editorial Portrait Composition — Ahd Mohamed Abdelsalam',
      i18nTitle: 'projects.p1Title',
      i18nCat: 'projects.p1Cat',
      i18nDesc: 'projects.p1Desc'
    },
    p2: {
      type: 'image',
      src: 'assets/Poster.jpg',
      alt: 'EMPIRE — Event Poster Design — Ahd Mohamed Abdelsalam',
      i18nTitle: 'projects.p2Title',
      i18nCat: 'projects.p2Cat',
      i18nDesc: 'projects.p2Desc'
    },
    p3: {
      type: 'video',
      src: 'assets/Crazy Carrot.mp4',
      alt: 'Crazy Carrot — Character Animation — Ahd Mohamed Abdelsalam',
      i18nTitle: 'projects.p3Title',
      i18nCat: 'projects.p3Cat',
      i18nDesc: 'projects.p3Desc'
    }
  };

  let lastActiveElement = null;

  function renderModalContent(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    const t = translations[currentLang] || translations.en;

    modalCategory.textContent = getNestedTranslation(t, data.i18nCat) || '';
    modalTitle.textContent = getNestedTranslation(t, data.i18nTitle) || '';
    modalDesc.textContent = getNestedTranslation(t, data.i18nDesc) || '';

    // Clear previous media
    modalMediaWrap.innerHTML = '';

    if (data.type === 'image') {
      const img = document.createElement('img');
      img.src = data.src;
      img.alt = data.alt;
      img.loading = 'eager';
      modalMediaWrap.appendChild(img);
    } else if (data.type === 'video') {
      const vid = document.createElement('video');
      vid.src = data.src;
      vid.controls = true;
      vid.playsInline = true;
      vid.autoplay = false;
      vid.preload = 'metadata';
      modalMediaWrap.appendChild(vid);
    }
  }

  function openModal(projectId) {
    if (!projectModal) return;
    lastActiveElement = document.activeElement;

    projectModal.setAttribute('data-active-project', projectId);
    renderModalContent(projectId);

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    bodyEl.style.overflow = 'hidden';

    // Focus close button
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!projectModal) return;

    // Pause any playing video inside modal
    const vid = modalMediaWrap.querySelector('video');
    if (vid) {
      vid.pause();
    }

    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    projectModal.removeAttribute('data-active-project');
    bodyEl.style.overflow = '';

    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  // Bind project modal triggers
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-open-modal');
      openModal(projId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalCloseCta) modalCloseCta.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal && projectModal.classList.contains('open')) {
        closeModal();
      }
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
        closeMobileDrawer();
      }
    }
  });

  /* --------------------------------------------------------------------------
     8. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  function openMobileDrawer() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.add('open');
    mobileBackdrop.classList.add('open');
    mobileNavDrawer.setAttribute('aria-hidden', 'false');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    bodyEl.style.overflow = 'hidden';
    if (closeDrawerBtn) closeDrawerBtn.focus();
  }

  function closeMobileDrawer() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    mobileNavDrawer.setAttribute('aria-hidden', 'true');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    bodyEl.style.overflow = '';
    if (mobileMenuBtn) mobileMenuBtn.focus();
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileDrawer();
    });
  });

  /* --------------------------------------------------------------------------
     9. SCROLL PROGRESS & HEADER SCROLLED STATE
     -------------------------------------------------------------------------- */
  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    // Scroll progress bar
    if (scrollProgress && docHeight > 0) {
      const progressPercent = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      scrollProgress.style.width = progressPercent + '%';
    }

    // Scrolled class on site header
    if (siteHeader) {
      if (scrollY > 30) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* --------------------------------------------------------------------------
     10. ACTIVE SECTION INDICATOR IN NAV
     -------------------------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: "-20% 0px -40% 0px"
  });

  sections.forEach(sec => sectionObserver.observe(sec));

  /* --------------------------------------------------------------------------
     11. INTERSECTION OBSERVER SCROLL REVEALS
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-portrait');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --------------------------------------------------------------------------
     12. CUSTOM INTERACTIVE CURSOR (FINE POINTERS ONLY)
     -------------------------------------------------------------------------- */
  if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Expand ring on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .strength-card, .software-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => bodyEl.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => bodyEl.classList.remove('cursor-hover'));
    });
  }

  /* --------------------------------------------------------------------------
     13. BACKGROUND PARTICLES CANVAS (LIGHTWEIGHT & RESPECTS REDUCED MOTION)
     -------------------------------------------------------------------------- */
  const bgCanvas = document.getElementById('bg-canvas');
  if (bgCanvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = bgCanvas.getContext('2d');
    let width = (bgCanvas.width = window.innerWidth);
    let height = (bgCanvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = bgCanvas.width = window.innerWidth;
      height = bgCanvas.height = window.innerHeight;
    }, { passive: true });

    const particles = [];
    const PARTICLE_COUNT = Math.min(28, Math.floor(window.innerWidth / 40));

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      const baseR = isLight ? 124 : 196;
      const baseG = isLight ? 58 : 181;
      const baseB = isLight ? 237 : 253;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseR}, ${baseG}, ${baseB}, ${p.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(animateParticles);
    }
    requestAnimationFrame(animateParticles);
  }

  /* --------------------------------------------------------------------------
     14. INITIALIZATION
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    applyLanguage(currentLang);
    setupPortraitHandler();
    handleScroll();
  });

  // Run immediately in case DOM is already parsed
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  setupPortraitHandler();
  handleScroll();

})();
