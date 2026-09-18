/**
 * INSIDE YOU — Main Application Controller & State Engine
 * Handles page routing, persistent local storage state, primary & secondary 3D navigation,
 * strict dual-mode lessons, contextual multi-question quizzes, scoped progress isolation,
 * anti-exploit XP rewards, profile dashboard, and news hub.
 */

window.activeAnatomyContext = "";
window.selectedAnatomyNode = null;

document.addEventListener("DOMContentLoaded", () => {
  // LocalStorage & SessionStorage Keys
  const STORAGE_KEY = "insideyou_user_state_v2";
  const SESSION_3D_KEY = "insideyou_last_3d_context";
  const SESSION_PAGE_KEY = "insideYou.activePage";
  const VALID_ROUTES = ["home", "body", "anatomy", "learn", "profile", "news"];

  // Clear any legacy tainted default selection in sessionStorage
  try {
    const rawSavedCtx = sessionStorage.getItem(SESSION_3D_KEY);
    if (rawSavedCtx && (rawSavedCtx.includes('"structureId":"cornea"') || rawSavedCtx.includes('"structureDisplayName":"Cornea"'))) {
      sessionStorage.removeItem(SESSION_3D_KEY);
    }
  } catch (e) {}

  function saveActivePage(route) {
    try {
      if (VALID_ROUTES.includes(route)) {
        sessionStorage.setItem(SESSION_PAGE_KEY, route);
      }
    } catch (e) {
      console.warn("Could not save active page to sessionStorage:", e);
    }
  }

  function getSavedActivePage() {
    try {
      const saved = sessionStorage.getItem(SESSION_PAGE_KEY);
      if (saved && VALID_ROUTES.includes(saved)) {
        return saved;
      }
    } catch (e) {
      console.warn("Could not read active page from sessionStorage:", e);
    }
    return null;
  }

  // Active Session State (Neutral default on launch - no forced organ selection)
  const savedLang = localStorage.getItem("lang") || localStorage.getItem("language") || localStorage.getItem("selectedLanguage");
  let lang = (savedLang && (savedLang.toUpperCase().startsWith("ID") || savedLang.toUpperCase().startsWith("IN"))) ? "ID" : "EN";
  let isDark = true;
  let currentRoute = "home";
  let currentSystemId = null;
  let currentOrganId = null;
  let activeCourseModelKey = null;
  let activeCourseConfig = null;
  let modelSwitchRequestId = 0;
  let selectedStructure = null;
  let activeMode = "simple"; // "simple" | "academic"

  // Active Quiz State (Strictly isolated per structure attempt)
  let activeQuizSession = null;
  let isAosInitialized = false;

  /**
   * 3D Context Persistence Engine
   * Saves and restores active course/system, organ, selected structure, and 3D model context
   * across internal view transitions (Learn, Profile, News, Body Map) within the session.
   */
  function save3DContext() {
    try {
      if (!selectedStructure && !currentSystemId) {
        sessionStorage.removeItem(SESSION_3D_KEY);
        return;
      }
      const ctx = {
        systemId: currentSystemId || null,
        organId: currentOrganId || null,
        modelKey: activeCourseModelKey || currentSystemId || "general",
        structureId: selectedStructure ? selectedStructure.canonicalId : null,
        structureDisplayName: selectedStructure ? (selectedStructure.displayNameObj?.EN || selectedStructure.displayName) : null
      };
      sessionStorage.setItem(SESSION_3D_KEY, JSON.stringify(ctx));
    } catch (e) {
      console.warn("Could not save 3D session context:", e);
    }
  }

  function load3DContext() {
    try {
      const saved = sessionStorage.getItem(SESSION_3D_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return null;
  }

  function restore3DContext() {
    const ctx = load3DContext();
    if (!ctx) return;
    const sysId = ctx.systemId;
    const sName = ctx.structureDisplayName || ctx.structureId;

    if (sysId) {
      selectSystemFilter(sysId, true);
    }
    if (sName && window.INSIDE_YOU_ENGINE && window.INSIDE_YOU_ENGINE.selectByName) {
      setTimeout(() => {
        window.INSIDE_YOU_ENGINE.selectByName(sName);
      }, 150);
    }
  }

  // DOM Elements
  const masterViewport = document.getElementById("masterViewport");
  const webglContainer = document.getElementById("webglContainer");
  const heroViewportTarget = document.getElementById("heroViewportTarget");
  const anatomyViewportTarget = document.getElementById("anatomyViewportTarget");
  const loaderOverlay = document.getElementById("loaderOverlay");
  const loaderTitle = document.getElementById("loaderTitle");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  // Selection Overlay Card & Tag
  const selectionCard = document.getElementById("selectionCard");
  const selectedNameEl = document.getElementById("selectedName");
  const selectedSystemBadge = document.getElementById("selectedSystemBadge");
  const selectedDescEl = document.getElementById("selectedDesc");
  const structureTagOverlay = document.getElementById("structureTagOverlay");
  const tagText = document.getElementById("tagText");

  // Default User State
  let userState = loadState();

  // Language Dictionary
  const TRANSLATIONS = {
    EN: {
      navHome: "Home",
      navBody: "Body Map",
      navAnatomy: "3D Anatomy",
      navLearn: "Learn",
      navProfile: "Profile",
      navNews: "News",
      homeEyebrow: "✨ ABOUT INSIDE YOU",
      homeHeading: "What is Inside You?<br><em class='glow-text'>Interactive 3D Anatomy Platform.</em>",
      homeDesc: "Inside You connects real-time 3D anatomical models with comprehensive lessons. Traverse systems, organs, and granular structures seamlessly. Master concepts through intuitive Simple Mode analogies or in-depth Academic Mode histology and pathology, then validate mastery through contextual quizzes and progress tracking.",
      homeBtnExplore: "Explore Body Map",
      homeBtnAnatomy: "Open 3D Viewer",
      bodyEyebrow: "BODY MAP",
      bodyTitle: "Select an Anatomical System",
      bodySubtitle: "Choose a system to start targeted 3D focus and explore structures inside each organ.",
      anatomyEyebrow: "INSIDE YOU ENGINE",
      anatomySystemTitle: "Human Body Overview",
      anatomySystemDesc: "Select a system or organ below to see what's inside, or click any mesh in 3D.",
      btnResetView: "🔄 Reset View",
      btnIsolate: "🔎 Isolate",
      btnShowAll: "✨ Show All",
      structureListLabel: "Search All Structures",
      selectionCardEyebrow: "SELECTED STRUCTURE",
      btnLearnPart: "Learn This Part →",
      btnIsolateCard: "Isolate View",
      learnEyebrow: "STRUCTURED LESSON ENGINE",
      learnTitle: "How Do You Want To Learn?",
      learnSubtitle: "Choose your explanation mode below to begin the deep structured lesson.",
      btnStartQuiz: "Take Contextual Quiz →",
      quizEyebrow: "CONTEXTUAL MULTI-QUESTION QUIZ",
      newsEyebrow: "HEALTH & SCIENCE DISCOVERIES",
      newsTitle: "Medical Research & Anatomy News",
      newsSubtitle: "Stay updated with curated breakthroughs in 3D anatomical modeling, optics, and cellular medicine.",
      newsChipAll: "All News",
      newsChipAI: "AI in Healthcare",
      newsChipAnatomy: "Anatomy",
      newsChipMedicine: "Medicine",
      newsChipResearch: "Research"
    },
    ID: {
      navHome: "Beranda",
      navBody: "Peta Tubuh",
      navAnatomy: "Anatomi 3D",
      navLearn: "Belajar",
      navProfile: "Profil",
      navNews: "Berita",
      homeEyebrow: "✨ TENTANG INSIDE YOU",
      homeHeading: "Apa itu Inside You?<br><em class='glow-text'>Platform Anatomi 3D Interaktif.</em>",
      homeDesc: "Inside You menghubungkan model anatomi 3D real-time dengan pembelajaran mendalam. Jelajahi sistem, organ, hingga struktur terkecil. Pahami materi melalui analogi Mode Sederhana atau kedalaman histologi Mode Akademik, lalu uji pemahaman lewat kuis kontekstual dan pantau perkembangan Anda.",
      homeBtnExplore: "Jelajahi Peta Tubuh",
      homeBtnAnatomy: "Buka Viewer 3D",
      bodyEyebrow: "PETA TUBUH",
      bodyTitle: "Pilih Sistem Anatomi",
      bodySubtitle: "Pilih sistem untuk fokus 3D terarah dan jelajahi bagian di dalam setiap organ.",
      anatomyEyebrow: "MESIN INSIDE YOU",
      anatomySystemTitle: "Tinjauan Tubuh Manusia",
      anatomySystemDesc: "Pilih sistem atau organ di bawah untuk melihat bagian dalamnya, atau klik bagian pada model 3D.",
      btnResetView: "🔄 Atur Ulang",
      btnIsolate: "🔎 Isolasi",
      btnShowAll: "✨ Tampilkan Semua",
      structureListLabel: "Cari Semua Struktur",
      selectionCardEyebrow: "STRUKTUR TERPILIH",
      btnLearnPart: "Pelajari Bagian Ini →",
      btnIsolateCard: "Isolasi Tampilan",
      learnEyebrow: "MESIN PEMBELAJARAN TERSTRUKTUR",
      learnTitle: "Bagaimana Anda Ingin Belajar?",
      learnSubtitle: "Pilih mode penjelasan di bawah untuk memulai pelajaran terstruktur.",
      btnStartQuiz: "Ikuti Kuis Kontekstual →",
      quizEyebrow: "KUIS MULTI-PERTANYAAN KONTEKSUAL",
      newsEyebrow: "PENEMUAN KESEHATAN & SAINS",
      newsTitle: "Riset Medis & Berita Anatomi",
      newsSubtitle: "Dapatkan pembaruan penemuan kurasi dalam pemodelan anatomi 3D, optik, dan kedokteran seluler.",
      newsChipAll: "Semua Berita",
      newsChipAI: "AI Kesehatan",
      newsChipAnatomy: "Anatomi",
      newsChipMedicine: "Kedokteran",
      newsChipResearch: "Riset"
    }
  };

  /**
   * Loads state from localStorage with anti-exploit schema & per-question XP ledger
   */
  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const completedQuizzes = Array.isArray(parsed.completedQuizIds) ? parsed.completedQuizIds : [];
        let mastered = Array.isArray(parsed.masteredStructures) ? parsed.masteredStructures : [];
        
        // Clean up tainted legacy default: only retain Cornea if user legitimately passed its quiz
        if (mastered.includes("Cornea") && !completedQuizzes.some(id => String(id).toLowerCase() === "cornea")) {
          mastered = mastered.filter(s => s !== "Cornea");
        }

        return {
          xp: typeof parsed.xp === "number" ? parsed.xp : 0,
          completedLessonIds: Array.isArray(parsed.completedLessonIds) ? parsed.completedLessonIds : [],
          completedQuizIds: completedQuizzes,
          rewardedQuestionIds: Array.isArray(parsed.rewardedQuestionIds) ? parsed.rewardedQuestionIds : [],
          masteredStructures: mastered,
          unlockedBadges: Array.isArray(parsed.unlockedBadges) ? parsed.unlockedBadges : [],
          history: Array.isArray(parsed.history) ? parsed.history : []
        };
      }
    } catch (e) {
      console.warn("Failed loading state:", e);
    }
    return {
      xp: 0,
      completedLessonIds: [],
      completedQuizIds: [],
      rewardedQuestionIds: [],
      masteredStructures: [],
      unlockedBadges: [],
      history: []
    };
  }

  /**
   * Saves state to localStorage
   */
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userState));
    } catch (e) {
      console.warn("Failed saving state:", e);
    }
    updateUserXPUI();
  }

  /**
   * Level Tiers based on real audited maximum legitimate XP (~6,530 XP total).
   * Level 7 requires 6,500+ XP and culminates in "Master of Anatomy".
   */
  const LEVEL_TIERS = [
    { level: 1, minXp: 0, nextXp: 500, title: { EN: "Level 1 • Anatomy Novice", ID: "Level 1 • Novis Anatomi" } },
    { level: 2, minXp: 500, nextXp: 1200, title: { EN: "Level 2 • Anatomy Explorer", ID: "Level 2 • Penjelajah Anatomi" } },
    { level: 3, minXp: 1200, nextXp: 2200, title: { EN: "Level 3 • Medical Scholar", ID: "Level 3 • Cendikiawan Medis" } },
    { level: 4, minXp: 2200, nextXp: 3400, title: { EN: "Level 4 • Anatomy Specialist", ID: "Level 4 • Spesialis Anatomi" } },
    { level: 5, minXp: 3400, nextXp: 4800, title: { EN: "Level 5 • Clinical Fellow", ID: "Level 5 • Kandidat Klinis" } },
    { level: 6, minXp: 4800, nextXp: 6500, title: { EN: "Level 6 • Anatomy Expert", ID: "Level 6 • Pakar Anatomi" } },
    { level: 7, minXp: 6500, nextXp: 6530, title: { EN: "Level 7 • Master of Anatomy", ID: "Level 7 • Master Anatomi" } }
  ];

  /**
   * Calculates Level, Title, Next XP, and Progress from current XP deterministically
   */
  function getLevelInfo(xp) {
    const validXp = Math.max(0, typeof xp === "number" ? xp : 0);
    const tier = LEVEL_TIERS.find(t => validXp < t.nextXp) || LEVEL_TIERS[LEVEL_TIERS.length - 1];

    if (tier.level === LEVEL_TIERS.length) {
      return {
        level: tier.level,
        title: tier.title[lang] || tier.title.EN,
        nextXp: tier.nextXp,
        progress: 100,
        isMaxLevel: true
      };
    }

    const range = tier.nextXp - tier.minXp;
    const progress = Math.min(100, Math.max(0, Math.round(((validXp - tier.minXp) / range) * 100)));

    return {
      level: tier.level,
      title: tier.title[lang] || tier.title.EN,
      nextXp: tier.nextXp,
      progress: progress,
      isMaxLevel: false
    };
  }

  /**
   * Updates XP UI in topbar & profile
   */
  function updateUserXPUI() {
    const textEl = document.getElementById("userXpText");
    if (textEl) textEl.textContent = `${userState.xp} XP`;

    const levelInfo = getLevelInfo(userState.xp);
    const lvlTitleEl = document.getElementById("userLevelTitle");
    const barEl = document.getElementById("userXpBar");
    const subtextEl = document.getElementById("userXpSubtext");

    if (lvlTitleEl) lvlTitleEl.textContent = levelInfo.title;
    if (barEl) barEl.style.width = `${Math.min(levelInfo.progress, 100)}%`;
    if (subtextEl) {
      if (levelInfo.isMaxLevel) {
        subtextEl.textContent = lang === "ID" ? `${userState.xp} XP • Peringkat Tertinggi Telah Dicapai!` : `${userState.xp} XP • Maximum Rank Achieved!`;
      } else {
        subtextEl.textContent = lang === "ID" ? `${userState.xp} / ${levelInfo.nextXp} XP menuju level berikutnya` : `${userState.xp} / ${levelInfo.nextXp} XP to next level`;
      }
    }
  }

  /**
   * Toast Notification
   */
  function toast(msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 2800);
  }

  /** Switches the persistent renderer to the configured model for a course. */
  function activateCourseModel(systemId, force = false) {
    const config = window.INSIDE_YOU_DATA.getCourse3DConfig(systemId);
    
    // Check if the master/general model is required and ALREADY active
    const isMasterRequired = !!config.useGeneral;
    const isMasterCurrentlyLoaded = (activeCourseModelKey === "general" || (activeCourseConfig && activeCourseConfig.useGeneral)) && (window.INSIDE_YOU_ENGINE.isLoaded ? window.INSIDE_YOU_ENGINE.isLoaded() : true);

    if (!force && isMasterRequired && isMasterCurrentlyLoaded) {
      activeCourseModelKey = config.key;
      activeCourseConfig = config;
      if (config.organId) currentOrganId = config.organId;
      if (config.systemFilter) {
        window.INSIDE_YOU_ENGINE.filterBySystem(config.systemFilter);
      } else {
        window.INSIDE_YOU_ENGINE.resetView();
      }
      return;
    }

    if (!force && activeCourseModelKey === config.key && (window.INSIDE_YOU_ENGINE.isLoaded ? window.INSIDE_YOU_ENGINE.isLoaded() : true)) {
      if (config.systemFilter) {
        window.INSIDE_YOU_ENGINE.filterBySystem(config.systemFilter);
      } else {
        window.INSIDE_YOU_ENGINE.resetView();
      }
      return;
    }

    const requestId = ++modelSwitchRequestId;
    loaderOverlay.classList.remove("hidden");
    if (window.anatomyLoader && typeof window.anatomyLoader.start === "function") {
      window.anatomyLoader.start();
    }
    loaderTitle.textContent = lang === "ID" ? "Memuat Anatomi 3D..." : "Loading 3D Anatomy...";
    progressBar.style.width = "0%";
    progressBar.style.background = "";
    progressText.style.color = "";
    progressText.textContent = lang === "ID" ? "Menyiapkan model 3D..." : "Preparing 3D anatomy model...";

    window.INSIDE_YOU_ENGINE.switchModel(
      config.models,
      (percent, loaded, total) => {
        if (requestId !== modelSwitchRequestId) return;
        progressBar.style.width = `${percent}%`;
        progressText.textContent = lang === "ID" ? `Memuat Anatomi 3D (${percent}%)...` : `Loading 3D Anatomy (${percent}%)...`;
      },
      () => {
        if (requestId !== modelSwitchRequestId) return;
        activeCourseModelKey = config.key;
        activeCourseConfig = config;
        if (config.organId) currentOrganId = config.organId;
        loaderOverlay.classList.add("hidden");
        if (window.anatomyLoader && typeof window.anatomyLoader.stop === "function") {
          window.anatomyLoader.stop();
        }

        if (config.systemFilter) {
          window.INSIDE_YOU_ENGINE.filterBySystem(config.systemFilter);
        }

        // If a structure in this course was already selected by user prior to model load finishing, preserve and focus it
        if (selectedStructure && selectionCard && !selectionCard.classList.contains("hidden") && (selectedStructure.systemId === systemId || selectedStructure.organId === config.organId)) {
          const sName = selectedStructure.displayName;
          if (window.INSIDE_YOU_ENGINE && window.INSIDE_YOU_ENGINE.selectByName) {
            window.INSIDE_YOU_ENGINE.selectByName(sName);
          }
        }

        toast(lang === "ID" ? `${config.label} siap dieksplorasi` : `${config.label} ready to explore`);
      },
      (err, failedSpec) => {
        if (requestId !== modelSwitchRequestId) return;
        activeCourseModelKey = null;
        activeCourseConfig = null;
        if (window.anatomyLoader && typeof window.anatomyLoader.stop === "function") {
          window.anatomyLoader.stop();
        }
        console.error("Course model could not be loaded:", failedSpec && failedSpec.url, err);
        loaderTitle.textContent = lang === "ID" ? "Model tidak dapat dimuat" : "Model could not be loaded";
        progressText.textContent = lang === "ID" ? "Gagal memuat model anatomi 3D." : "Check the local model path and web server.";
        progressText.style.color = "#ef4444";
        progressBar.style.background = "#ef4444";
      }
    );
  }

  /**
   * Immediately resets scroll position to top across all browser implementations
   */
  function resetScrollToTop() {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  }

  /**
   * Learn-specific AOS Transition Engine
   * Ensures all top Learn elements (section head, mode cards, lesson panel, header, illustration)
   * animate smoothly on entry and re-entry, while lower structured cards and quiz elements
   * remain primed with aos-init and registered with AOS for on-scroll animations.
   */
  function triggerLearnAos(activeSec) {
    if (!activeSec) return;

    resetScrollToTop();

    // Ensure AOS is safely initialized if arriving directly on Learn upon initial load
    if (window.AOS && !isAosInitialized) {
      window.AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 0,
        mirror: false
      });
      isAosInitialized = true;
    }

    // Top-of-page Learn elements required to animate on entry
    const topSelectors = [
      ".section-head",
      "#modeCardSimple",
      "#modeCardAcademic",
      "#lessonPanel",
      ".lesson-header-row > div[data-aos]",
      "#lessonIllustration"
    ];

    const topEls = topSelectors
      .map(sel => activeSec.querySelector(sel))
      .filter(el => el && !el.classList.contains("hidden") && !el.closest(".hidden"));

    // Lower elements that animate as the user scrolls into view
    const lowerEls = Array.from(activeSec.querySelectorAll("[data-aos]"))
      .filter(el => !topEls.includes(el) && !el.classList.contains("hidden") && !el.closest(".hidden"));

    // 1. Instantly snap top elements to pre-animation state with transition suppressed
    topEls.forEach(el => {
      el.style.transition = "none";
      el.classList.remove("aos-animate");
      el.classList.add("aos-init");
    });

    // 2. Prime lower elements with aos-init and ensure their transitions are ready
    lowerEls.forEach(el => {
      el.style.transition = "";
      el.classList.remove("aos-animate");
      el.classList.add("aos-init");
    });

    // Synchronous reflow flush so pre-animation classes register cleanly in layout engine
    void activeSec.offsetHeight;

    // 3. In the next frame, re-enable CSS transitions and trigger top animations
    requestAnimationFrame(() => {
      resetScrollToTop();
      topEls.forEach(el => {
        el.style.transition = "";
      });

      void activeSec.offsetHeight;

      requestAnimationFrame(() => {
        topEls.forEach(el => el.classList.add("aos-animate"));

        // Register all Learn elements with AOS once destination DOM is committed
        if (window.AOS) {
          if (typeof window.AOS.refreshHard === "function") {
            window.AOS.refreshHard();
          } else if (typeof window.AOS.refresh === "function") {
            window.AOS.refresh();
          }
        }
      });
    });

    // 4. Settle refresh: after #lessonPanel completes its 800ms zoom-in expansion to scale(1),
    // update AOS element offsets so on-scroll triggers for lower blocks calculate on final geometry
    setTimeout(() => {
      if (document.getElementById(currentRoute) === activeSec && window.AOS) {
        if (typeof window.AOS.refresh === "function") {
          window.AOS.refresh();
        }
      }
    }, 850);

    // 5. Defensive visibility assurance:
    // Guarantee all Learn elements (both top and lower) reach 100% visibility.
    // Content exists and is rendered independently of AOS; no lesson block remains permanently hidden.
    setTimeout(() => {
      if (document.getElementById(currentRoute) === activeSec) {
        const allLearnAosEls = Array.from(activeSec.querySelectorAll("[data-aos]"))
          .filter(el => !el.classList.contains("hidden") && !el.closest(".hidden"));
        allLearnAosEls.forEach(el => {
          el.style.transition = "";
          if (!el.classList.contains("aos-animate")) {
            el.classList.add("aos-animate");
          }
        });
      }
    }, 1100);
  }

  /**
   * SPA Page-level AOS Transition Engine
   * Flushes and restarts destination page AOS animations on every navigation entry
   * and guarantees all non-hidden content ends 100% visible.
   */
  function triggerPageAos(activeSec) {
    if (!activeSec) return;

    // Route Learn page to its dedicated lifecycle handler
    if (activeSec.id === "learn") {
      triggerLearnAos(activeSec);
      return;
    }

    // Ensure scroll position is at the very top when calculating/committing animation states
    resetScrollToTop();

    // Target non-hidden data-aos elements on the destination page
    const aosEls = Array.from(activeSec.querySelectorAll("[data-aos]"))
      .filter(el => !el.classList.contains("hidden") && !el.closest(".hidden"));

    if (!aosEls.length) return;

    // 1. Instantly snap all elements to pre-animation state with transition suppressed
    aosEls.forEach(el => {
      el.style.transition = "none";
      el.classList.remove("aos-animate");
      el.classList.add("aos-init");
    });

    // 2. Synchronous reflow flush so the browser rendering engine registers the reset at 0% progress
    void activeSec.offsetHeight;

    // 3. In the next frame, re-enable CSS transitions and trigger the animation
    requestAnimationFrame(() => {
      resetScrollToTop();
      aosEls.forEach(el => {
        el.style.transition = "";
      });

      // Synchronous reflow so transition styles are active before aos-animate is added
      void activeSec.offsetHeight;

      requestAnimationFrame(() => {
        aosEls.forEach(el => el.classList.add("aos-animate"));
      });
    });

    // 4. Defensive visibility assurance: guarantee all elements remain visible
    setTimeout(() => {
      if (document.getElementById(currentRoute) === activeSec) {
        const checkEls = Array.from(activeSec.querySelectorAll("[data-aos]"))
          .filter(el => !el.classList.contains("hidden") && !el.closest(".hidden"));
        checkEls.forEach(el => {
          el.style.transition = "";
          if (!el.classList.contains("aos-animate")) {
            el.classList.add("aos-animate");
          }
        });
      }
    }, 1100);
  }

  /**
   * Router — Positions persistent 3D master viewport across page targets
   */
  function go(route, persist = true) {
    if (!VALID_ROUTES.includes(route)) {
      route = "home";
    }

    // Immediately reset scroll position to top on navigation start
    resetScrollToTop();

    // Reset data-aos on departing page so it is primed for replay on next entry
    if (currentRoute && currentRoute !== route) {
      const departingSec = document.getElementById(currentRoute);
      if (departingSec) {
        const departingEls = departingSec.querySelectorAll("[data-aos]");
        departingEls.forEach(el => {
          el.style.transition = "none";
          el.classList.remove("aos-animate");
        });
      }
    }

    currentRoute = route;
    if (persist) {
      saveActivePage(route);
    }

    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.route === route);
    });

    document.querySelectorAll(".page").forEach(sec => {
      sec.classList.toggle("active", sec.id === route);
    });

    if (route === "home") {
      masterViewport.style.display = "block";
      masterViewport.className = "viewport-master hero-anchor";
      heroViewportTarget.appendChild(masterViewport);
      window.INSIDE_YOU_ENGINE.setAutoRotate(true);
      activateCourseModel("general");
      requestAnimationFrame(() => window.INSIDE_YOU_ENGINE.handleResize());
    } else if (route === "anatomy") {
      masterViewport.style.display = "block";
      masterViewport.className = "viewport-master anatomy-anchor";
      anatomyViewportTarget.appendChild(masterViewport);
      window.INSIDE_YOU_ENGINE.setAutoRotate(false);
      requestAnimationFrame(() => window.INSIDE_YOU_ENGINE.handleResize());
    } else {
      masterViewport.className = "viewport-master anatomy-anchor";
      anatomyViewportTarget.appendChild(masterViewport);
      window.INSIDE_YOU_ENGINE.setAutoRotate(false);
    }

    if (route === "learn") renderLesson(false);
    if (route === "profile") renderProfilePage();
    if (route === "news") renderNewsPage();

    // Confirm scroll is top-aligned after dynamic DOM injection and viewport repositioning
    resetScrollToTop();

    // Replay AOS animations on the newly activated section
    const activeSec = document.getElementById(route);
    triggerPageAos(activeSec);

    // Sync route change with Athena UI
    if (window.ATHENA_UI && typeof window.ATHENA_UI.updateContext === "function") {
      window.ATHENA_UI.updateContext();
    }
  }

  /**
   * Screen-space 3D structure tag overlay update loop
   */
  function updateTagOverlayLoop() {
    requestAnimationFrame(updateTagOverlayLoop);

    if (!structureTagOverlay || structureTagOverlay.classList.contains("hidden")) return;
    if (currentRoute !== "home" && currentRoute !== "anatomy") {
      structureTagOverlay.style.opacity = "0";
      return;
    }

    const screenPos = window.INSIDE_YOU_ENGINE.getSelectedMeshScreenPos();
    if (screenPos && screenPos.visible) {
      structureTagOverlay.style.left = `${screenPos.x}px`;
      structureTagOverlay.style.top = `${screenPos.y}px`;
      structureTagOverlay.style.opacity = "1";
    } else {
      structureTagOverlay.style.opacity = "0";
    }
  }

  /**
   * Renders System Grid in Body Map & System Chips in 3D View
   */
  function renderSystems() {
    const grid = document.getElementById("systemGrid");
    const chipsContainer = document.getElementById("systemChips");

    if (grid) {
      grid.innerHTML = window.INSIDE_YOU_DATA.SYSTEMS.map(sys => {
        const sysStructs = window.INSIDE_YOU_DATA.getSystemStructures(sys.id);
        const mastered = sysStructs.filter(s => userState.masteredStructures.includes(s)).length;
        const percent = sysStructs.length > 0 ? Math.round((mastered / sysStructs.length) * 100) : 0;

        return `
          <div class="system-card" data-system="${sys.id}">
            <div class="sys-icon">${sys.icon}</div>
            <h3>${sys.name[lang]}</h3>
            <p>${sys.desc[lang]}</p>
            <div class="sys-meta" style="margin-top:0.75rem; font-size:0.8rem; color:${sys.color}; display:flex; justify-content:space-between;">
              <span>${mastered}/${sysStructs.length} ${lang === 'ID' ? 'Struktur' : 'Structures'}</span>
              <strong>${percent}%</strong>
            </div>
          </div>
        `;
      }).join("");

      grid.querySelectorAll(".system-card").forEach(card => {
        card.onclick = () => {
          const sysId = card.dataset.system;
          selectSystemFilter(sysId);
          go("anatomy");
        };
      });
    }

    if (chipsContainer) {
      chipsContainer.innerHTML = window.INSIDE_YOU_DATA.SYSTEMS.map(sys => `
        <button class="chip ${sys.id === currentSystemId ? 'active' : ''}" data-system="${sys.id}">${sys.icon} ${sys.name[lang]}</button>
      `).join("");

      chipsContainer.querySelectorAll(".chip").forEach(chip => {
        chip.onclick = () => {
          chipsContainer.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
          selectSystemFilter(chip.dataset.system);
        };
      });
    }
  }

  /**
   * PRIMARY NAVIGATION: Renders "What's inside the [Organ/System]?" Panel
   */
  function renderWhatsInsidePanel(organOrSysId) {
    const panelTitle = document.getElementById("whatsInsideTitle");
    const panelList = document.getElementById("whatsInsideList");
    if (!panelTitle || !panelList) return;

    // 1. Direct match by organ ID
    let organ = window.INSIDE_YOU_DATA.ORGANS.find(o => o.id === organOrSysId);
    let system = window.INSIDE_YOU_DATA.SYSTEMS.find(s => s.id === organOrSysId);

    // 2. If not matched, try matching system by organ's systemId or fallback to currentSystemId
    if (!organ && !system && organOrSysId) {
      organ = window.INSIDE_YOU_DATA.ORGANS.find(o => o.systemId === organOrSysId);
    }
    if (!organ && !system) {
      system = window.INSIDE_YOU_DATA.SYSTEMS.find(s => s.id === currentSystemId);
      if (!system) {
        organ = window.INSIDE_YOU_DATA.ORGANS.find(o => o.id === currentSystemId || o.systemId === currentSystemId);
      }
    }

    let titleText = "What's inside?";
    let structures = [];

    if (organ) {
      titleText = lang === "ID" ? `Ada apa saja di ${organ.name.ID}?` : `What's inside the ${organ.name.EN}?`;
      structures = organ.structures;
    } else if (system) {
      titleText = lang === "ID" ? `Struktur Sistem ${system.name.ID}` : `Structures in ${system.name.EN}`;
      structures = window.INSIDE_YOU_DATA.getSystemStructures(system.id);
    } else {
      titleText = lang === "ID" ? "Struktur Anatomi" : "Anatomical Structures";
      structures = window.INSIDE_YOU_DATA.getSystemStructures(currentSystemId || "skeletal");
    }

    panelTitle.textContent = titleText;

    panelList.innerHTML = structures.map(structName => {
      // Resolve bilingual display name from CANONICAL_REGISTRY
      const canon = window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(structName);
      const displayLabel = (canon && canon.isMapped && canon.displayNameObj)
        ? (canon.displayNameObj[lang] || canon.displayNameObj.EN || structName)
        : structName;
      const isMastered = userState.masteredStructures.includes(structName);
      const isSelected = selectedStructure && selectionCard && !selectionCard.classList.contains("hidden") && (
        selectedStructure.displayName.toLowerCase() === structName.toLowerCase() ||
        selectedStructure.displayName.toLowerCase() === displayLabel.toLowerCase() ||
        (selectedStructure.canonicalId && canon && selectedStructure.canonicalId === canon.canonicalId)
      );
      return `
        <button class="whats-inside-btn ${isSelected ? 'active' : ''}" data-structure="${structName}">
          <span>${isMastered ? '✨' : '🔹'} ${displayLabel}</span>
          <small>${isMastered ? (lang === 'ID' ? 'Terkuasai' : 'Mastered') : (lang === 'ID' ? 'Jelajahi' : 'Explore')}</small>
        </button>
      `;
    }).join("");

    panelList.querySelectorAll(".whats-inside-btn").forEach(btn => {
      btn.onclick = () => {
        const sName = btn.dataset.structure;
        panelList.querySelectorAll(".whats-inside-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        // Trigger 3D focus using English canonical name for proper resolver match
        window.INSIDE_YOU_ENGINE.selectByName(sName);
      };
    });
  }

  /**
   * Filters 3D Model by system
   */
  function selectSystemFilter(systemId, skipSave = false) {
    currentSystemId = systemId;
    const config = window.INSIDE_YOU_DATA.getCourse3DConfig(systemId);
    activateCourseModel(systemId);

    const sys = window.INSIDE_YOU_DATA.SYSTEMS.find(s => s.id === systemId);
    const titleEl = document.getElementById("anatomySystemTitle");
    if (titleEl) titleEl.textContent = sys ? sys.name[lang] : "Human Body";

    const chipsContainer = document.getElementById("systemChips");
    if (chipsContainer) {
      chipsContainer.querySelectorAll(".chip").forEach(c => {
        c.classList.toggle("active", c.dataset.system === systemId);
      });
    }

    // Hide selection card & reset temporary overlay when switching course
    if (selectionCard) selectionCard.classList.add("hidden");
    if (structureTagOverlay) structureTagOverlay.classList.add("hidden");
    activeQuizSession = null;

    renderWhatsInsidePanel(config.organId || systemId);
    if (!skipSave) save3DContext();
  }

  /**
   * Callback when user selects a mesh in 3D scene (Secondary Navigation / Search / List)
   * EXPLORATION STATE: Updates selectedStructure & floating panel WITHOUT changing active course/system context.
   */
  function handleMeshSelection(info, mesh) {
    if (!info) {
      selectedStructure = null;
      window.activeAnatomyContext = "";
      window.selectedAnatomyNode = null;
      if (selectionCard) selectionCard.classList.add("hidden");
      if (structureTagOverlay) structureTagOverlay.classList.add("hidden");
      activeQuizSession = null;
      const quizPanel = document.getElementById("quizPanel");
      if (quizPanel) quizPanel.classList.add("hidden");
      const panelList = document.getElementById("whatsInsideList");
      if (panelList) {
        panelList.querySelectorAll(".whats-inside-btn").forEach(btn => btn.classList.remove("active"));
      }
      save3DContext();
      if (window.ATHENA_UI && typeof window.ATHENA_UI.updateContext === "function") {
        window.ATHENA_UI.updateContext();
      }
      return;
    }

    selectedStructure = info;
    window.activeAnatomyContext = info.displayName || "";
    window.selectedAnatomyNode = mesh;

    const displayName = (info.displayNameObj && info.displayNameObj[lang]) || info.displayName;
    selectedNameEl.textContent = displayName;
    selectedSystemBadge.textContent = (info.systemName && (info.systemName[lang] || info.systemName.EN)) || "Unclassified";
    selectedSystemBadge.style.color = info.color || "#94a3b8";
    selectedSystemBadge.style.borderColor = info.color || "#94a3b8";

    if (info.has3DMesh === false) {
      selectedDescEl.textContent = lang === "ID"
        ? `Struktur ${displayName} (Tampilan Diagram 2D aktif).`
        : `Granular structure ${displayName} (2D Anatomical Diagram view).`;
    } else {
      selectedDescEl.textContent = lang === "ID" 
        ? `Struktur ${displayName} teridentifikasi dari model anatomi 3D.`
        : `Granular structure ${displayName} identified from 3D anatomical model.`;
    }

    selectionCard.classList.remove("hidden");

    if (tagText) tagText.textContent = displayName;
    if (structureTagOverlay) {
      if (info.has3DMesh === false) structureTagOverlay.classList.add("hidden");
      else structureTagOverlay.classList.remove("hidden");
    }

    // Reset temporary quiz session so answer state never leaks across structures
    activeQuizSession = null;
    const quizPanel = document.getElementById("quizPanel");
    if (quizPanel) quizPanel.classList.add("hidden");

    // Only update button highlight if the selected structure is in the currently open What's Inside list.
    // Explicit rule: DO NOT rewrite or overwrite the active system / course navigation context.
    const panelList = document.getElementById("whatsInsideList");
    if (panelList) {
      panelList.querySelectorAll(".whats-inside-btn").forEach(btn => {
        const sName = btn.dataset.structure;
        const isMatch = sName && (sName.toLowerCase() === displayName.toLowerCase() || sName.toLowerCase() === info.displayName?.toLowerCase() || sName.toLowerCase() === info.canonicalId?.toLowerCase());
        btn.classList.toggle("active", !!isMatch);
      });
    }

    // Persist this selection in session storage so it can be restored after navigating away
    save3DContext();

    // Sync real-time 3D context to Athena AI Engine
    if (window.ATHENA_UI && typeof window.ATHENA_UI.updateContext === "function") {
      window.ATHENA_UI.updateContext();
    }
  }

  /**
   * Renders Dual-Mode Lesson (SIMPLE vs ACADEMIC) with STRICT DYNAMIC RESOLUTION
   */
  function renderLesson(triggerAos = true) {
    const activeEyebrow = document.getElementById("activeLessonEyebrow");
    const activeTitle = document.getElementById("activeLessonTitle");
    const activeContent = document.getElementById("activeLessonContent");
    const illustrationEl = document.getElementById("lessonIllustration");

    if (!selectedStructure) {
      if (activeTitle) activeTitle.textContent = lang === "ID" ? "Pilih Struktur Anatomi" : "Select an Anatomical Structure";
      if (activeEyebrow) activeEyebrow.textContent = lang === "ID" ? "TINJAUAN PELAJARAN" : "LESSON OVERVIEW";
      if (illustrationEl) illustrationEl.innerHTML = `<span class="lesson-icon-item">🧬</span>`;
      if (activeContent) {
        activeContent.innerHTML = `
          <div class="lesson-card" style="grid-column: 1 / -1;">
            <div class="lesson-card-header">
              <span class="lesson-card-badge">✨ ${lang === "ID" ? "Eksplorasi Tubuh" : "Body Exploration"}</span>
              <h3>${lang === "ID" ? "Belum Ada Bagian Terpilih" : "No Structure Selected"}</h3>
            </div>
            <p>${lang === "ID" ? "Silakan buka 3D Anatomy atau Peta Tubuh dan klik struktur atau organ tubuh untuk membaca materi pelajaran interaktif." : "Please open 3D Anatomy or the Body Map and select an anatomical organ or structure to view its detailed lesson."}</p>
          </div>
        `;
      }
      return;
    }

    const structName = selectedStructure.displayNameObj?.[lang] || selectedStructure.displayName;
    const rawLookupName = selectedStructure.displayName;
    const details = window.INSIDE_YOU_DATA.getStructureDetails(rawLookupName) || window.INSIDE_YOU_DATA.getStructureDetails(structName);

    if (!details) return;

    const modeData = details[activeMode][lang];
    const isCompleted = userState.completedLessonIds.includes(rawLookupName);

    if (activeEyebrow) {
      activeEyebrow.textContent = `${activeMode.toUpperCase()} MODE LESSON ${isCompleted ? '• COMPLETED' : ''}`;
    }
    if (activeTitle) {
      activeTitle.textContent = `${details.name[lang] || structName}`;
    }
    if (illustrationEl) {
      const illus = details.illustration || "👁️✨";
      let icons = [];
      if (typeof Intl !== "undefined" && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        icons = [...segmenter.segment(illus)].map(s => s.segment.trim()).filter(Boolean);
      } else {
        icons = Array.from(illus).filter(ch => ch.trim().length > 0);
      }
      if (icons.length === 0) icons = ["🧬"];
      illustrationEl.innerHTML = icons.map(icon => `<span class="lesson-icon-item">${icon}</span>`).join("");
    }

    if (activeContent) {
      let fallbackHtml = "";
      if (details.isFallback) {
        fallbackHtml = `
          <div class="lesson-fallback-banner" style="grid-column: 1 / -1; background: rgba(59, 130, 246, 0.12); border: 1px dashed rgba(59, 130, 246, 0.4); padding: 1rem; border-radius: 12px; margin-bottom: 1rem; color: #93c5fd;">
            <span>ℹ️ ${lang === "ID" ? "Diagram Anatomi 2D & Ikhtisar Ringkas Aktif untuk struktur ini." : "2D Anatomical Diagram & Overview Active for this structure."}</span>
          </div>
        `;
      }

      let relatedHtml = "";
      if (Array.isArray(details.relatedStructures) && details.relatedStructures.length > 0) {
        const chipsHtml = details.relatedStructures.map(relId => {
          const canon = window.INSIDE_YOU_DATA.CANONICAL_REGISTRY[relId];
          const relDisplayName = canon ? (canon.displayName[lang] || canon.displayName.EN) : window.INSIDE_YOU_DATA.formatNodeName(relId);
          const rawEnName = canon ? canon.displayName.EN : relId;
          return `<button class="chip related-struct-btn" data-struct="${rawEnName}" style="cursor:pointer; font-size:0.85rem; padding:0.35rem 0.75rem;">🔗 ${relDisplayName}</button>`;
        }).join("");

        relatedHtml = `
          <div class="lesson-block" data-aos="fade-up" style="grid-column: 1 / -1; margin-top: 0.25rem;">
            <h4>🔗 ${lang === "ID" ? "Struktur Terkait" : "Related Structures"}</h4>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.5rem;">
              ${chipsHtml}
            </div>
          </div>
        `;
      }

      activeContent.innerHTML = `
        ${fallbackHtml}
        <div class="lesson-block" data-aos="fade-down-right">
          <h4>💡 ${lang === "ID" ? "Gambaran Umum" : "Overview"}</h4>
          <p>${modeData.overview}</p>
        </div>
        <div class="lesson-block" data-aos="fade-down-left">
          <h4>📍 ${lang === "ID" ? "Posisi Anatomi" : "Anatomical Position"}</h4>
          <p>${modeData.position}</p>
        </div>
        <div class="lesson-block" data-aos="fade-up-right">
          <h4>⚡ ${lang === "ID" ? "Mekanisme & Fungsi" : "Mechanism & Function"}</h4>
          <p>${modeData.mechanism}</p>
        </div>
        <div class="lesson-block" data-aos="fade-up-left">
          <h4>🩺 ${lang === "ID" ? "Konteks Kesehatan & Medis" : "Health & Medical Insight"}</h4>
          <p>${modeData.health}</p>
        </div>
        ${relatedHtml}
      `;

      // Attach click handlers to related structure buttons
      activeContent.querySelectorAll(".related-struct-btn").forEach(btn => {
        btn.onclick = () => {
          const targetName = btn.dataset.struct;
          const match = window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(targetName);
          selectedStructure = match;
          activeQuizSession = null;
          renderLesson();
          if (window.INSIDE_YOU_ENGINE && window.INSIDE_YOU_ENGINE.selectByName) {
            window.INSIDE_YOU_ENGINE.selectByName(targetName);
          }
        };
      });
    }

    // Award Lesson Completion XP (+25 XP) only ONCE
    if (!userState.completedLessonIds.includes(rawLookupName)) {
      userState.completedLessonIds.push(rawLookupName);
      userState.xp += 25;
      saveState();
      toast(lang === "ID" ? `Pelajaran Dibuka (+25 XP) ✨` : `Lesson Unlocked (+25 XP) ✨`);
    }

    // Reset Quiz Panel
    const qPanel = document.getElementById("quizPanel");
    if (qPanel) {
      qPanel.classList.add("hidden");
      qPanel.classList.remove("aos-animate");
    }

    if (triggerAos && currentRoute === "learn") {
      // In-page update (mode switch, structure switch, language toggle within Learn):
      // Keep scroll position intact and reveal new cards smoothly.
      if (activeContent) {
        const newBlocks = activeContent.querySelectorAll(".lesson-block[data-aos]");
        newBlocks.forEach(el => {
          el.classList.add("aos-init", "aos-animate");
        });
      }
      if (window.AOS) {
        if (typeof window.AOS.refreshHard === "function") {
          window.AOS.refreshHard();
        } else if (typeof window.AOS.refresh === "function") {
          window.AOS.refresh();
        }
      }
    }
  }

  /**
   * Reliable Fisher-Yates shuffle algorithm for question choices.
   * Remaps correct answer index so choices do NOT cluster at Option A.
   */
  function shuffleQuestionOptions(qObj) {
    const originalOptions = [...qObj.options];
    const correctText = originalOptions[qObj.answerIndex];
    
    // Map with original indices
    const items = originalOptions.map((opt, i) => ({ opt, originalIndex: i }));
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    const shuffledOptions = items.map(it => it.opt);
    const newAnswerIndex = shuffledOptions.indexOf(correctText);

    return {
      question: qObj.question,
      options: shuffledOptions,
      answerIndex: newAnswerIndex,
      explanation: qObj.explanation
    };
  }

  /**
   * Contextual Multi-Question Quiz Engine (Strict Dynamic Resolution & Scoped Session)
   */
  function startQuiz() {
    if (!selectedStructure) {
      toast(lang === "ID" ? "Pilih struktur anatomi terlebih dahulu untuk memulai kuis" : "Please select an anatomical structure first to take a quiz");
      return;
    }
    const structName = selectedStructure.displayName;
    const rawLookupName = selectedStructure.displayNameObj?.EN || selectedStructure.displayName;
    const details = window.INSIDE_YOU_DATA.getStructureDetails(rawLookupName) || window.INSIDE_YOU_DATA.getStructureDetails(structName);

    const quizPanel = document.getElementById("quizPanel");
    const quizQuestion = document.getElementById("quizQuestion");
    const quizOptions = document.getElementById("quizOptions");
    const quizFeedback = document.getElementById("quizFeedback");
    const btnNext = document.getElementById("btnNextQuestion");

    if (quizPanel) {
      quizPanel.classList.remove("hidden");
      quizPanel.style.transition = "none";
      quizPanel.classList.remove("aos-animate");
      quizPanel.classList.add("aos-init");
      void quizPanel.offsetHeight;
      quizPanel.scrollIntoView({ behavior: "smooth", block: "nearest" });

      requestAnimationFrame(() => {
        quizPanel.style.transition = "";
        void quizPanel.offsetHeight;
        requestAnimationFrame(() => {
          quizPanel.classList.add("aos-animate");
        });
      });

      // Defensive visibility assurance for quiz panel
      setTimeout(() => {
        if (!quizPanel.classList.contains("hidden")) {
          quizPanel.style.transition = "";
          if (!quizPanel.classList.contains("aos-animate")) {
            quizPanel.classList.add("aos-animate");
          }
        }
      }, 850);
    }

    if (!details || !details.quiz || !details.quiz[lang] || details.quiz[lang].length === 0) {
      if (quizPanel) quizPanel.classList.remove("hidden");
      if (quizQuestion) quizQuestion.textContent = lang === "ID" 
        ? `Kuis Kontekstual untuk ${structName} sedang dirancang.` 
        : `Contextual Quiz for ${structName} is currently being formulated.`;
      if (quizOptions) quizOptions.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--text-secondary);">
          <p>${lang === "ID" 
            ? "Silakan coba kuis pada struktur utama seperti Kornea, Iris, Lensa Kristalina, Retina, Sklera, Saraf Optik, Ventrikel Kiri, atau Serebrum!" 
            : "Please try quizzes on core structures such as Cornea, Iris, Lens, Retina, Sclera, Optic Nerve, Left Ventricle, or Cerebrum!"}</p>
        </div>
      `;
      if (quizFeedback) quizFeedback.classList.add("hidden");
      if (btnNext) btnNext.classList.add("hidden");
      return;
    }

    // Initialize fresh scoped quiz session per structure
    const baseKey = selectedStructure?.canonicalId || rawLookupName.toLowerCase().replace(/[^a-z0-9]/g, '_');
    const sideSuffix = selectedStructure?.side ? `_${selectedStructure.side}` : '';
    const canonicalKey = `${baseKey}${sideSuffix}`;
    activeQuizSession = {
      structureId: canonicalKey,
      structureName: rawLookupName,
      questions: details.quiz[lang].map((q, idx) => ({
        ...shuffleQuestionOptions(q),
        questionId: `${canonicalKey}_q${idx}`
      })),
      currentStep: 0,
      score: 0
    };

    renderQuizStep();
  }

  function renderQuizStep() {
    const quizPanel = document.getElementById("quizPanel");
    const quizStepText = document.getElementById("quizStepText");
    const quizStepProgress = document.getElementById("quizStepProgress");
    const quizQuestion = document.getElementById("quizQuestion");
    const quizOptions = document.getElementById("quizOptions");
    const quizFeedback = document.getElementById("quizFeedback");
    const btnNext = document.getElementById("btnNextQuestion");

    if (!quizPanel || !quizQuestion || !quizOptions || !activeQuizSession) return;

    quizPanel.classList.remove("hidden");
    quizFeedback.classList.add("hidden");
    quizFeedback.textContent = "";
    quizFeedback.className = "quiz-feedback hidden";
    btnNext.classList.add("hidden");

    const currentQ = activeQuizSession.questions[activeQuizSession.currentStep];
    const totalQ = activeQuizSession.questions.length;

    // Compact single-line question counter (e.g. 1 / 3) preventing line wraps
    quizStepText.textContent = `${activeQuizSession.currentStep + 1} / ${totalQ}`;
    quizStepProgress.style.width = `${Math.round(((activeQuizSession.currentStep + 1) / totalQ) * 100)}%`;
    quizQuestion.textContent = currentQ.question;

    quizOptions.innerHTML = currentQ.options.map((opt, idx) => `
      <button class="quiz-opt-btn" data-index="${idx}">
        ${String.fromCharCode(65 + idx)}. ${opt}
      </button>
    `).join("");

    quizOptions.querySelectorAll(".quiz-opt-btn").forEach(btn => {
      btn.onclick = () => {
        const chosenIdx = parseInt(btn.dataset.index);
        const isCorrect = chosenIdx === currentQ.answerIndex;

        quizOptions.querySelectorAll(".quiz-opt-btn").forEach(b => {
          b.disabled = true;
          if (parseInt(b.dataset.index) === currentQ.answerIndex) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
        });

        quizFeedback.classList.remove("hidden");
        if (isCorrect) {
          activeQuizSession.score++;
          // Per-question incremental XP (+10 XP) ledger tracking
          const isAlreadyRewarded = userState.rewardedQuestionIds.includes(currentQ.questionId);
          if (!isAlreadyRewarded) {
            userState.rewardedQuestionIds.push(currentQ.questionId);
            userState.xp += 10;
            saveState();
            quizFeedback.className = "quiz-feedback success";
            quizFeedback.textContent = `✨ ${lang === "ID" ? "Benar! (+10 XP)" : "Correct! (+10 XP)"} ${currentQ.explanation}`;
          } else {
            quizFeedback.className = "quiz-feedback success";
            quizFeedback.textContent = `✨ ${lang === "ID" ? "Benar!" : "Correct!"} ${currentQ.explanation}`;
          }
        } else {
          quizFeedback.className = "quiz-feedback error";
          quizFeedback.textContent = `❌ ${lang === "ID" ? "Kurang tepat." : "Incorrect."} ${currentQ.explanation}`;
        }

        if (activeQuizSession.currentStep < totalQ - 1) {
          btnNext.textContent = lang === "ID" ? "Pertanyaan Berikutnya →" : "Next Question →";
          btnNext.classList.remove("hidden");
          btnNext.onclick = () => {
            if (activeQuizSession) {
              activeQuizSession.currentStep++;
              renderQuizStep();
            }
          };
        } else {
          btnNext.textContent = lang === "ID" ? "Selesaikan Kuis & Lihat Hasil" : "Complete Quiz & View Results";
          btnNext.classList.remove("hidden");
          btnNext.onclick = finishQuiz;
        }
      };
    });
  }

  function finishQuiz() {
    if (!activeQuizSession) return;
    const totalQ = activeQuizSession.questions.length;
    const score = activeQuizSession.score;
    const structName = activeQuizSession.structureName;
    const percent = Math.round((score / totalQ) * 100);

    // Passing Threshold calculation: >= 50% minimum correct
    const isPassed = (score / totalQ) >= 0.50;
    const alreadyPassed = userState.completedQuizIds.includes(structName);

    if (isPassed) {
      if (!userState.masteredStructures.includes(structName)) {
        userState.masteredStructures.push(structName);
      }

      if (!alreadyPassed) {
        userState.completedQuizIds.push(structName);
        toast(lang === "ID" ? `Kuis Lulus (${score}/${totalQ} • ${percent}%)! Struktur ${structName} Terkuasai ✨` : `Passed Quiz (${score}/${totalQ} • ${percent}%)! Mastered ${structName} ✨`);
      } else {
        toast(lang === "ID" ? `Kuis Lulus (${score}/${totalQ} • ${percent}%)! Struktur ${structName} sudah terkuasai sebelumnya.` : `Passed Quiz (${score}/${totalQ} • ${percent}%)! ${structName} was already mastered.`);
      }
    } else {
      toast(lang === "ID" ? `Kuis Selesai (${score}/${totalQ} • ${percent}%). Nilai kelulusan minimal 50%. Silakan ulangi!` : `Quiz Finished (${score}/${totalQ} • ${percent}%). Passing threshold is 50%. Please review and try again!`);
    }

    checkBadgeUnlocks();
    saveState();

    activeQuizSession = null;
    document.getElementById("quizPanel").classList.add("hidden");
    go("profile");
  }

  /**
   * Checks badge unlock conditions idempotently
   */
  function checkBadgeUnlocks() {
    window.INSIDE_YOU_DATA.BADGES.forEach(badge => {
      if (!userState.unlockedBadges.includes(badge.id)) {
        const hasAll = badge.requiredStructures.every(s => userState.masteredStructures.includes(s));
        if (hasAll) {
          userState.unlockedBadges.push(badge.id);
          userState.xp += 100;
          toast(lang === "ID" ? `🏆 Lencana Dibuka: ${badge.title.ID} (+100 XP)!` : `🏆 Badge Unlocked: ${badge.title.EN} (+100 XP)!`);
        }
      }
    });
  }

  /**
   * Renders Profile Page Dashboard with Scoped Isolated Progress
   */
  function renderProfilePage() {
    updateUserXPUI();

    // Render System Coverage with ISOLATED DYNAMIC DENOMINATORS
    const sysList = document.getElementById("systemProgressList");
    if (sysList) {
      sysList.innerHTML = window.INSIDE_YOU_DATA.SYSTEMS.map(sys => {
        const sysStructs = window.INSIDE_YOU_DATA.getSystemStructures(sys.id);
        const total = sysStructs.length;
        const masteredInSys = sysStructs.filter(s => userState.masteredStructures.includes(s)).length;
        const prog = total > 0 ? Math.round((masteredInSys / total) * 100) : 0;

        return `
          <div class="sys-prog-item">
            <div class="sys-prog-label">
              <span>${sys.icon} ${sys.name[lang]} <small style="opacity:0.75; font-size:0.75rem;">(${masteredInSys}/${total})</small></span>
              <span style="color:${sys.color}">${prog}%</span>
            </div>
            <div class="progress-bar-wrap small">
              <div class="progress-bar" style="width:${prog}%; background:${sys.color};"></div>
            </div>
          </div>
        `;
      }).join("");
    }

    // Render Mastered Grid
    const masteredGrid = document.getElementById("masteredGrid");
    if (masteredGrid) {
      if (userState.masteredStructures.length === 0) {
        masteredGrid.innerHTML = `<span class="empty-hint">${lang === "ID" ? "Belum ada struktur yang dikuasai." : "No structures mastered yet."}</span>`;
      } else {
        masteredGrid.innerHTML = userState.masteredStructures.map(s => `
          <div class="mastered-chip">✨ ${s}</div>
        `).join("");
      }
    }

    // Render Badges Grid
    const badgesGrid = document.getElementById("badgesGrid");
    if (badgesGrid) {
      badgesGrid.innerHTML = window.INSIDE_YOU_DATA.BADGES.map(badge => {
        const isUnlocked = userState.unlockedBadges.includes(badge.id);
        return `
          <div class="badge-card ${isUnlocked ? 'unlocked' : ''}">
            <div class="badge-icon">${badge.icon}</div>
            <div class="badge-info">
              <h4>${badge.title[lang]} ${isUnlocked ? '✨' : '🔒'}</h4>
              <p>${badge.desc[lang]}</p>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  let activeNewsCategory = "all";

  function formatNewsDate(dateStr, targetLang) {
    if (!dateStr || targetLang !== "ID") return dateStr;
    const monthMap = {
      January: "Januari", February: "Februari", March: "Maret", April: "April",
      May: "Mei", June: "Juni", July: "Juli", August: "Agustus",
      September: "September", October: "Oktober", November: "November", December: "Desember"
    };
    let formatted = dateStr;
    for (const [enMonth, idMonth] of Object.entries(monthMap)) {
      formatted = formatted.replace(enMonth, idMonth);
    }
    return formatted;
  }

  /**
   * Renders News & Research Page
   */
  function renderNewsPage() {
    const grid = document.getElementById("newsGrid");
    const categoryChips = document.getElementById("newsCategories");
    if (!grid) return;

    const activeChip = categoryChips ? categoryChips.querySelector(".chip.active") : null;
    if (activeChip && activeChip.dataset.category) {
      activeNewsCategory = activeChip.dataset.category;
    }

    function renderArticles() {
      const allArticles = (window.INSIDE_YOU_DATA && window.INSIDE_YOU_DATA.NEWS_ARTICLES) || [];
      const articles = activeNewsCategory === "all" 
        ? allArticles 
        : allArticles.filter(a => a.category === activeNewsCategory);

      if (articles.length === 0) {
        grid.innerHTML = `
          <div class="empty-news-state" style="grid-column: 1 / -1; text-align:center; padding: 2rem; color: var(--text-muted, #888);">
            <p>${lang === "ID" ? "Tidak ada artikel untuk kategori ini." : "No articles found for this category."}</p>
          </div>
        `;
        return;
      }

      const categoryLabels = {
        EN: { "AI in Healthcare": "AI in Healthcare", "Anatomy": "Anatomy", "Medicine": "Medicine", "Research": "Research" },
        ID: { "AI in Healthcare": "AI Kesehatan", "Anatomy": "Anatomi", "Medicine": "Kedokteran", "Research": "Riset" }
      };

      grid.innerHTML = articles.map(art => {
        const title = (art.title && (art.title[lang] || art.title[lang.toUpperCase()] || art.title.EN || art.title.ID)) || "";
        const summary = (art.summary && (art.summary[lang] || art.summary[lang.toUpperCase()] || art.summary.EN || art.summary.ID)) || "";
        const catLabel = (categoryLabels[lang] && categoryLabels[lang][art.category]) || art.category;
        const dateStr = formatNewsDate(art.date || "", lang);

        return `
          <div class="news-card">
            <div class="news-top-row">
              <span class="news-cat-badge">${catLabel}</span>
              <span style="font-size:1.5rem;">${art.image || "📰"}</span>
            </div>
            <h3>${title}</h3>
            <p>${summary}</p>
            <div class="news-footer-row">
              <span>${art.source || "Medical Journal"}</span>
              <span>${dateStr}</span>
            </div>
          </div>
        `;
      }).join("");
    }

    if (categoryChips) {
      categoryChips.querySelectorAll(".chip").forEach(chip => {
        if (chip.dataset.category === activeNewsCategory) {
          chip.classList.add("active");
        } else {
          chip.classList.remove("active");
        }

        chip.onclick = () => {
          categoryChips.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
          activeNewsCategory = chip.dataset.category;
          renderArticles();
        };
      });
    }

    renderArticles();
  }

  /**
   * Set application language and re-render active view
   */
  function setLanguage(newLang) {
    if (!newLang) return;
    const targetLang = (newLang.toUpperCase().startsWith("ID") || newLang.toUpperCase().startsWith("IN")) ? "ID" : "EN";
    const changed = lang !== targetLang;
    lang = targetLang;
    applyLanguage();
    if (changed) {
      toast(lang === "ID" ? "Bahasa Indonesia Aktif" : "English Active");
    }
  }

  /**
   * Toggle application language between EN and ID
   */
  function toggleLanguage() {
    lang = lang === "EN" ? "ID" : "EN";
    applyLanguage();
    toast(lang === "ID" ? "Bahasa Indonesia Aktif" : "English Active");
  }

  /**
   * Apply translations across UI
   */
  function applyLanguage() {
    // 1. Sync persistent storage & html lang attribute
    try {
      localStorage.setItem("lang", lang);
      localStorage.setItem("language", lang);
      localStorage.setItem("selectedLanguage", lang);
    } catch (e) {}
    document.documentElement.lang = lang.toLowerCase();

    // 2. Synchronize navbar language switch button
    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
      langBtn.textContent = lang === "ID" ? "ID / EN" : "EN / ID";
    }

    const dict = TRANSLATIONS[lang];
    for (const key in dict) {
      const el = document.getElementById(key);
      if (el) {
        if (key === "homeHeading") {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    }

    const searchInput = document.getElementById("structureSearch");
    if (searchInput) {
      searchInput.placeholder = lang === "ID"
        ? "Cari struktur (cth: Lensa, Jantung, Serebrum, Kornea)..."
        : "Search structure (e.g. Lens, Heart, Cerebrum, Cornea)...";
    }

    // Refresh selected structure labels in active language
    if (selectedStructure) {
      const displayName = (selectedStructure.displayNameObj && selectedStructure.displayNameObj[lang]) || selectedStructure.displayName;
      if (selectedNameEl) selectedNameEl.textContent = displayName;
      if (tagText) tagText.textContent = displayName;
      if (selectedSystemBadge) {
        selectedSystemBadge.textContent = (selectedStructure.systemName && (selectedStructure.systemName[lang] || selectedStructure.systemName.EN)) || "Unclassified";
      }
      if (selectedDescEl) {
        if (selectedStructure.has3DMesh === false) {
          selectedDescEl.textContent = lang === "ID"
            ? `Struktur ${displayName} (Tampilan Diagram 2D aktif).`
            : `Granular structure ${displayName} (2D Anatomical Diagram view).`;
        } else {
          selectedDescEl.textContent = lang === "ID" 
            ? `Struktur ${displayName} teridentifikasi dari model anatomi 3D.`
            : `Granular structure ${displayName} identified from 3D anatomical model.`;
        }
      }
    }

    renderSystems();
    renderWhatsInsidePanel(currentSystemId);
    updateUserXPUI();
    if (currentRoute === "learn") renderLesson();
    if (currentRoute === "profile") renderProfilePage();
    if (currentRoute === "news" || document.getElementById("news")?.classList.contains("active")) {
      renderNewsPage();
    }
    if (window.ATHENA_UI && typeof window.ATHENA_UI.updateContext === "function") {
      window.ATHENA_UI.updateContext();
    }
    window.dispatchEvent(new CustomEvent("insideyou:languagechange", { detail: { lang } }));
  }

  /**
   * Initialize Application
   */
  function initApp() {
    // Initialize 3D Engine in persistent container
    window.INSIDE_YOU_ENGINE.init(webglContainer, handleMeshSelection);

    // Start 3D screen-space tag overlay update loop
    updateTagOverlayLoop();

    // Router Event Listeners
    document.querySelectorAll("[data-route]").forEach(btn => {
      btn.onclick = (e) => {
        const route = btn.dataset.route || e.target.closest("[data-route]").dataset.route;
        // Save 3D context when leaving anatomy, restore it when returning
        if (route === "anatomy") {
          restore3DContext();
        } else if (currentRoute === "anatomy") {
          save3DContext();
        }
        go(route);
      };
    });

    // Theme Switcher
    document.getElementById("themeBtn").onclick = () => {
      isDark = !isDark;
      document.body.className = isDark ? "dark" : "light";
      window.INSIDE_YOU_ENGINE.setTheme(isDark);
      toast(isDark ? "Dark Mode Enabled" : "Light Mode Enabled");
    };

    // Language Switcher
    const langBtnEl = document.getElementById("langBtn");
    if (langBtnEl) {
      langBtnEl.textContent = lang === "ID" ? "ID / EN" : "EN / ID";
      langBtnEl.onclick = () => {
        toggleLanguage();
      };
    }

    // Action bar buttons
    document.getElementById("btnResetView").onclick = () => {
      window.INSIDE_YOU_ENGINE.resetView();
      selectionCard.classList.add("hidden");
      if (structureTagOverlay) structureTagOverlay.classList.add("hidden");
      toast("View Reset");
    };

    document.getElementById("btnIsolate").onclick = () => {
      window.INSIDE_YOU_ENGINE.isolateSelection();
      toast("Structure Isolated");
    };

    document.getElementById("btnShowAll").onclick = () => {
      window.INSIDE_YOU_ENGINE.resetView();
      toast("Showing Current Course Model");
    };

    document.getElementById("btnCloseCard").onclick = () => {
      selectionCard.classList.add("hidden");
      if (structureTagOverlay) structureTagOverlay.classList.add("hidden");
    };

    document.getElementById("btnIsolateCard").onclick = () => {
      window.INSIDE_YOU_ENGINE.isolateSelection();
    };

    document.getElementById("btnLearnPart").onclick = () => {
      go("learn");
    };

    // Dual Mode selection cards
    const cardSimple = document.getElementById("modeCardSimple");
    const cardAcademic = document.getElementById("modeCardAcademic");

    if (cardSimple && cardAcademic) {
      cardSimple.onclick = () => {
        cardSimple.classList.add("active");
        cardAcademic.classList.remove("active");
        activeMode = "simple";
        renderLesson();
        if (window.ATHENA_UI && typeof window.ATHENA_UI.updateContext === "function") {
          window.ATHENA_UI.updateContext();
        }
      };

      cardAcademic.onclick = () => {
        cardAcademic.classList.add("active");
        cardSimple.classList.remove("active");
        activeMode = "academic";
        renderLesson();
        if (window.ATHENA_UI && typeof window.ATHENA_UI.updateContext === "function") {
          window.ATHENA_UI.updateContext();
        }
      };
    }

    document.getElementById("btnStartQuiz").onclick = () => {
      startQuiz();
    };

    // Search input (Bilingual search support)
    const searchInput = document.getElementById("structureSearch");
    const structListEl = document.getElementById("structureList");
    if (searchInput) {
      searchInput.oninput = (e) => {
        const q = e.target.value.trim();
        if (q.length > 0) {
          const results = window.INSIDE_YOU_DATA.searchAnatomy(q);
          if (structListEl) {
            if (results.length === 0) {
              structListEl.innerHTML = `<span class="empty-hint">${lang === "ID" ? "Tidak ada struktur yang cocok." : "No matching structures found."}</span>`;
            } else {
              structListEl.innerHTML = results.map(item => {
                const nameDisplay = item.name[lang] || item.name.EN || item.canonicalId;
                const sysDisplay = item.systemName?.[lang] || item.systemName?.EN || "";
                return `
                  <button class="structure-item" data-name="${item.name.EN || item.canonicalId}" data-canon="${item.canonicalId}">
                    <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                      <strong>${nameDisplay}</strong>
                      <small style="color:${item.color || 'var(--text-muted)'}; font-size:0.75rem;">${sysDisplay}</small>
                    </div>
                  </button>
                `;
              }).join("");

              structListEl.querySelectorAll(".structure-item").forEach(itemBtn => {
                itemBtn.onclick = () => {
                  const sName = itemBtn.dataset.name || itemBtn.dataset.canon;
                  window.INSIDE_YOU_ENGINE.selectByName(sName);
                };
              });
            }
          }
          window.INSIDE_YOU_ENGINE.selectByName(q);
        } else {
          if (structListEl) {
            structListEl.innerHTML = `<span class="empty-hint">${lang === "ID" ? "Klik struktur di atas atau cari nama struktur." : "Click a structure above or raycast a 3D mesh to inspect."}</span>`;
          }
        }
      };
    }

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const savedRoute = getSavedActivePage();
    const initialRoute = savedRoute || "home";
    currentRoute = initialRoute;
    applyLanguage();
    if (initialRoute === "anatomy") {
      restore3DContext();
    }
    go(initialRoute, !!savedRoute);

    // Initialize AOS once the initial active SPA page is committed in the DOM
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 0,
        mirror: false
      });
      isAosInitialized = true;
    }

    // Expose Global Inside You API for Athena AI Engine & External Interop
    window.INSIDE_YOU_APP = {
      getActiveContext: () => ({
        structure: selectedStructure,
        structureName: selectedStructure ? ((selectedStructure.displayNameObj && selectedStructure.displayNameObj[lang]) || selectedStructure.displayName) : "",
        canonicalId: selectedStructure ? (selectedStructure.canonicalId || selectedStructure.id) : "",
        organId: currentOrganId,
        systemId: currentSystemId,
        systemName: selectedStructure?.systemName ? (selectedStructure.systemName[lang] || selectedStructure.systemName.EN) : null,
        mode: activeMode,
        route: currentRoute,
        lang: lang
      }),
      selectStructureByName: (sName) => {
        if (currentRoute !== "anatomy") {
          go("anatomy");
        }
        if (window.INSIDE_YOU_DATA && window.INSIDE_YOU_DATA.resolveCanonicalAnatomy) {
          const match = window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(sName);
          if (match) {
            selectedStructure = match;
            if (match.systemId && match.systemId !== currentSystemId) {
              selectSystemFilter(match.systemId);
            }
          }
        }
        setTimeout(() => {
          if (window.INSIDE_YOU_ENGINE && window.INSIDE_YOU_ENGINE.selectByName) {
            window.INSIDE_YOU_ENGINE.selectByName(sName);
          }
        }, 200);
      },
      openLessonForStructure: (sName) => {
        if (window.INSIDE_YOU_DATA && window.INSIDE_YOU_DATA.resolveCanonicalAnatomy) {
          const match = window.INSIDE_YOU_DATA.resolveCanonicalAnatomy(sName);
          if (match) {
            selectedStructure = match;
          }
        }
        go("learn");
        renderLesson(true);
      },
      navigateTo: (route) => {
        go(route);
      },
      getLanguage: () => lang,
      setLanguage: setLanguage,
      toggleLanguage: toggleLanguage,
      renderNewsPage: renderNewsPage
    };

    // Global bindings for convenient interoperability & scripts
    window.setLanguage = setLanguage;
    window.toggleLanguage = toggleLanguage;
    window.renderNews = renderNewsPage;
    window.renderNewsPage = renderNewsPage;

    // Initialize Athena AI Assistant UI
    if (window.ATHENA_UI && typeof window.ATHENA_UI.init === "function") {
      window.ATHENA_UI.init();
    }
  }

  if (window.CONTENT_LOADER_PROMISE) {
    window.CONTENT_LOADER_PROMISE.then(() => initApp()).catch(() => initApp());
  } else {
    initApp();
  }
});
