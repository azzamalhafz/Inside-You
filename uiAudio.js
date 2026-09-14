// ============================================================================
// PROCEDURAL UI AUDIO ENGINE (VALORANT-INSPIRED TACTILE FEEDBACK)
// ============================================================================

class UIAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.lastHoverTime = 0;
  }

  // Inisialisasi AudioContext pada interaksi user pertama
  initAudioContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * 1. HOVER SOUND (Subtle Sci-Fi Micro-Blip)
   * Menggunakan gelombang sine frekuensi tinggi dengan pitch acak dinamis (±4%)
   */
  playHover() {
    if (this.isMuted) return;
    const now = performance.now();
    // Debounce 40ms agar suara tidak bertumpuk berisik saat kursor digeser cepat
    if (now - this.lastHoverTime < 40) return;
    this.lastHoverTime = now;

    this.initAudioContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Sedikit variasi nada agar suara terdengar natural dan tidak melelahkan telinga
    const randomPitch = 0.96 + Math.random() * 0.08;
    const baseFreq = 1950 * randomPitch;

    osc.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, t);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.85, t + 0.035);

    // Fade in & decay sangat cepat (35 milidetik)
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.045, t + 0.005); // Volume lembut
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.04);
  }

  /**
   * 2. CLICK SOUND (Tactile Mechanical Snap)
   * Kombinasi dua oscillator: klik tajam di frekuensi tinggi + ketukan di frekuensi rendah
   */
  playClick() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;

    // Oscillator 1: High transient snap (segitiga)
    const oscHigh = this.ctx.createOscillator();
    const gainHigh = this.ctx.createGain();
    oscHigh.type = "triangle";
    oscHigh.frequency.setValueAtTime(1100, t);
    oscHigh.frequency.exponentialRampToValueAtTime(240, t + 0.05);

    gainHigh.gain.setValueAtTime(0.001, t);
    gainHigh.gain.linearRampToValueAtTime(0.08, t + 0.003);
    gainHigh.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);

    // Oscillator 2: Low-end body punch (sine)
    const oscBody = this.ctx.createOscillator();
    const gainBody = this.ctx.createGain();
    oscBody.type = "sine";
    oscBody.frequency.setValueAtTime(320, t);
    oscBody.frequency.exponentialRampToValueAtTime(80, t + 0.07);

    gainBody.gain.setValueAtTime(0.001, t);
    gainBody.gain.linearRampToValueAtTime(0.09, t + 0.004);
    gainBody.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);

    oscHigh.connect(gainHigh);
    gainHigh.connect(this.ctx.destination);

    oscBody.connect(gainBody);
    gainBody.connect(this.ctx.destination);

    oscHigh.start(t);
    oscBody.start(t);
    oscHigh.stop(t + 0.06);
    oscBody.stop(t + 0.08);
  }

  /**
   * 3. TRANSITION / AOS SOUND (Airy Sci-Fi Swish)
   * Sapuan angin frekuensi lembut saat kartu animasi atau elemen baru muncul di layar
   */
  playTransition() {
    if (this.isMuted) return;
    this.initAudioContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(280, t);
    osc.frequency.exponentialRampToValueAtTime(620, t + 0.08);
    osc.frequency.exponentialRampToValueAtTime(160, t + 0.18);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.035, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.2);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }
}

// Instance global
const uiAudio = new UIAudioSynthesizer();

// ============================================================================
// AUTOMATIC EVENT BINDINGS (DELEGASI EVENT KE SELURUH TOMBOL)
// ============================================================================
function initUIAudioBindings() {
  // Selector target interaksi (tombol, link, kartu, dock athena, tab)
  const interactiveSelectors = [
    "button",
    "a",
    "input[type='submit']",
    ".nav-link",
    ".btn",
    ".card",
    ".athena-orb-pill",
    ".athena-trigger-btn",
    ".explore-btn",
    "[role='button']"
  ].join(",");

  // 1. Hover Listener
  document.body.addEventListener("mouseover", (e) => {
    const target = e.target.closest(interactiveSelectors);
    if (target) {
      uiAudio.playHover();
    }
  });

  // 2. Click Listener
  document.body.addEventListener("mousedown", (e) => {
    const target = e.target.closest(interactiveSelectors);
    if (target) {
      uiAudio.playClick();
    }
  });

  // 3. AOS / Scroll Transition Listener
  if (typeof AOS !== "undefined") {
    document.addEventListener("aos:in", () => {
      uiAudio.playTransition();
    });
  } else {
    // Observer otomatis jika memakai animasi scroll biasa
    const animatedElements = document.querySelectorAll("[data-aos], .animate-on-scroll");
    if (animatedElements.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            uiAudio.playTransition();
          }
        });
      }, { threshold: 0.2 });

      animatedElements.forEach((el) => observer.observe(el));
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initUIAudioBindings);
} else {
  initUIAudioBindings();
}

window.uiAudio = uiAudio;
