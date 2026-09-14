// ============================================================================
// REAL-TIME TRANSPARENT VIDEO RENDERER (LUMA-KEY WHITE REMOVAL)
// ============================================================================

function initTransparentVideoLoader(options = {}) {
  const videoId = options.videoId || "loader-video-src";
  const canvasId = options.canvasId || "loader-canvas";
  const threshold = options.threshold || 225; // Ambang batas warna putih

  const video = document.getElementById(videoId);
  const canvas = document.getElementById(canvasId);
  if (!video || !canvas) return null;

  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  let animationFrameId = null;
  let isStopped = false;

  // Pastikan properti video sesuai kebijakan browser autoplay
  video.muted = true;
  video.playsInline = true;

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Browser autoplay policy fallback
      video.muted = true;
      video.play().catch(() => {});
    });
  }

  function processFrame() {
    if (isStopped) return;

    if (!video.paused && !video.ended && video.readyState >= 2) {
      // 1. Gambar frame mentah video ke kanvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // 2. Ambil data piksel RGBA
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;
      const len = data.length;

      // 3. Deteksi dan hilangkan piksel warna putih / terang
      for (let i = 0; i < len; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Hitung kecerahan berdasarkan komponen terkecil
        const minVal = Math.min(r, g, b);

        if (minVal > threshold) {
          // Putih murni -> transparan penuh (Alpha = 0)
          data[i + 3] = 0;
        } else if (minVal > threshold - 30) {
          // Soft feathering di tepian agar tidak ada garis putih tajam
          const factor = (threshold - minVal) / 30;
          data[i + 3] = Math.floor(data[i + 3] * factor);
        }
      }

      // 4. Tampilkan kembali frame yang sudah dibersihkan ke layar
      ctx.putImageData(frame, 0, 0);
    }

    animationFrameId = requestAnimationFrame(processFrame);
  }

  animationFrameId = requestAnimationFrame(processFrame);

  // Helper untuk mematikan loader saat model 3D selesai dimuat
  return {
    stop: () => {
      isStopped = true;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      try { video.pause(); } catch (e) {}
      const loaderOverlay = document.getElementById("anatomy-loader");
      if (loaderOverlay) loaderOverlay.classList.add("fade-out");
    },
    start: () => {
      isStopped = false;
      const loaderOverlay = document.getElementById("anatomy-loader");
      if (loaderOverlay) loaderOverlay.classList.remove("fade-out");
      video.play().catch(() => {});
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(processFrame);
      }
    }
  };
}

// Global reference
window.anatomyLoader = null;

function setupTransparentLoader() {
  const loader = initTransparentVideoLoader({
    videoId: "loader-video-src",
    canvasId: "loader-canvas",
    threshold: 230
  });

  window.anatomyLoader = loader;

  // Sinkronisasi otomatis dengan status loader model yang sudah ada
  const existingLoader = document.getElementById("loaderOverlay");
  if (existingLoader && loader) {
    if (existingLoader.classList.contains("hidden")) {
      loader.stop();
    }
    const observer = new MutationObserver(() => {
      if (existingLoader.classList.contains("hidden")) {
        loader.stop();
      } else {
        loader.start();
      }
    });
    observer.observe(existingLoader, { attributes: true, attributeFilter: ["class"] });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupTransparentLoader);
} else {
  setupTransparentLoader();
}
