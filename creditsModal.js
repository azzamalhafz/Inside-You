// ============================================================================
// DYNAMIC BILINGUAL FOOTER & CREDITS ATTRIBUTION CONTROLLER
// ============================================================================

const CREDITS_I18N = {
  id: {
    footerTagline: "Platform Anatomi 3D Interaktif",
    footerBtn: "Atribusi & Lisensi Aset",
    modalTitle: "Hak Cipta & Atribusi Aset",
    modalIntro: "Platform <strong>Inside You</strong> menggabungkan kurasi medis interaktif, model 3D terbuka, dan kecerdasan buatan. Kami menghargai dan mematuhi lisensi terbuka para kontributor berikut:",
    creditBp3d: "Struktur poligon dan relasi anatomis Part-Of / Is-A bersumber dari Database Center for Life Science (DBCLS), Jepang.",
    creditOpenstax: "Rujukan materi kurikulum teks, fungsi fisiologis, dan terminologi medis bersumber dari OpenStax karya J. Gordon Betts et al.",
    creditZAnatomy: "Model 3D dasar dan visualisasi organ spesifik diadaptasi dari repositori anatomi terbuka Z-Anatomy project.",
    creditAthena: "Didukung oleh arsitektur model Google Gemini API untuk penalaran anatomi dan W3C Web Audio API untuk sintesis haptik taktil.",
    modalDisclaimer: "<strong>Pemberitahuan Medis:</strong> Seluruh konten, model 3D, kuis, dan interaksi AI Athena ditujukan semata-mata untuk keperluan edukasi dan literasi kesehatan, bukan sebagai instrumen diagnosis klinis mandiri."
  },
  en: {
    footerTagline: "Interactive 3D Anatomy Platform",
    footerBtn: "Asset Attribution & Licenses",
    modalTitle: "Copyright & Asset Attribution",
    modalIntro: "The <strong>Inside You</strong> platform combines interactive medical curation, open 3D models, and artificial intelligence. We respect and adhere to the open-source licenses of the following contributors:",
    creditBp3d: "Polygon mesh geometry and Part-Of / Is-A anatomical relationships sourced from the Database Center for Life Science (DBCLS), Japan.",
    creditOpenstax: "Curriculum reference texts, physiological mechanisms, and medical terminology sourced from OpenStax by J. Gordon Betts et al.",
    creditZAnatomy: "Foundational 3D meshes and organ-specific visual models adapted from the open-source Z-Anatomy project.",
    creditAthena: "Powered by the Google Gemini API model architecture for anatomical reasoning and the W3C Web Audio API for tactile haptic synthesis.",
    modalDisclaimer: "<strong>Medical Notice:</strong> All content, 3D models, quizzes, and Athena AI interactions are intended solely for educational and health literacy purposes, not as standalone clinical diagnostic tools."
  }
};

function getActiveAppLanguage() {
  // 1. Inspect navbar ID/EN toggle text/classes (#langBtn, .lang-toggle, etc.)
  const navLangEl = document.querySelector("#langBtn, .lang-toggle, #lang-toggle, .btn-lang");
  if (navLangEl) {
    const txt = (navLangEl.textContent || navLangEl.innerText || "").trim();
    if (txt.startsWith("ID")) return "id";
    if (txt.startsWith("EN")) return "en";
  }

  // 2. Check localStorage
  const stored = localStorage.getItem("lang") || localStorage.getItem("language") || localStorage.getItem("selectedLanguage");
  if (stored && (stored.toLowerCase().includes("id") || stored.toLowerCase().includes("in"))) return "id";
  if (stored && stored.toLowerCase().includes("en")) return "en";

  // 3. Check HTML lang attribute
  const htmlLang = document.documentElement.lang?.toLowerCase();
  if (htmlLang && (htmlLang.startsWith("id") || htmlLang.startsWith("in"))) return "id";
  if (htmlLang && htmlLang.startsWith("en")) return "en";

  return "en";
}

function updateFooterCreditsLanguage(lang) {
  const targetLang = (lang === "id" || lang === "id-ID") ? "id" : "en";
  const dict = CREDITS_I18N[targetLang] || CREDITS_I18N.en;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
}

function initCreditsBilingualModal() {
  const modal = document.getElementById("credits-modal");
  const openBtn = document.getElementById("open-credits-btn");
  const closeBtn = document.getElementById("close-credits-btn");

  // Initial language render
  const initialLang = getActiveAppLanguage();
  updateFooterCreditsLanguage(initialLang);

  // Sync when user clicks language toggle in navbar
  document.addEventListener("click", (e) => {
    const target = e.target.closest("button, a, .lang-switch, [data-lang], #langBtn");
    if (!target) return;

    const text = (target.textContent || target.innerText || "").trim();
    if (text.includes("ID/EN") || text.includes("ID / EN") || text.includes("EN / ID") || target.dataset.lang || target.id === "langBtn") {
      setTimeout(() => {
        updateFooterCreditsLanguage(getActiveAppLanguage());
      }, 50);
      setTimeout(() => {
        updateFooterCreditsLanguage(getActiveAppLanguage());
      }, 150);
    }
  });

  // Observe <html lang="..."> attribute changes
  const observer = new MutationObserver(() => {
    updateFooterCreditsLanguage(getActiveAppLanguage());
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  // Modal Open/Close Event Handlers
  if (modal && openBtn) {
    function openCredits() {
      updateFooterCreditsLanguage(getActiveAppLanguage());
      modal.classList.remove("hidden");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeCredits() {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", openCredits);
    closeBtn?.addEventListener("click", closeCredits);

    // Close when clicking modal backdrop
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCredits();
    });

    // ESC key listener
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeCredits();
      }
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCreditsBilingualModal);
} else {
  initCreditsBilingualModal();
}
