// ============================================================================
// HARDWARE-ACCELERATED WEBGL VIDEO LOADER (WITH CENTER '+' PROTECTION)
// ============================================================================

function initWebGLVideoLoader() {
  const video = document.getElementById("loader-video-src");
  const canvas = document.getElementById("loader-webgl-canvas");

  if (!video || !canvas) {
    console.error("[WebGL Loader] Video or canvas element missing.");
    return null;
  }

  const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
  if (!gl) {
    console.warn("[WebGL Loader] WebGL not supported on this browser.");
    return null;
  }

  // 1. Vertex Shader (Standard Screen Quad with Inverted Y for Video Texture)
  const vsSource = `
    attribute vec2 a_position;
    varying vec2 v_uv;
    void main() {
      v_uv = (a_position + 1.0) * 0.5;
      v_uv.y = 1.0 - v_uv.y;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // 2. Fragment Shader (Center-Protected Luma Keying)
  const fsSource = `
    precision mediump float;
    varying vec2 v_uv;
    uniform sampler2D u_video;
    uniform float u_threshold;
    uniform float u_center_radius;

    void main() {
      vec4 color = texture2D(u_video, v_uv);
      
      // Distance from exact center (0.5, 0.5)
      float dist = distance(v_uv, vec2(0.5, 0.5));
      
      // Minimum channel represents white level
      float minVal = min(min(color.r, color.g), color.b);

      // Smoothstep white detection
      float isWhite = smoothstep(u_threshold - 0.08, u_threshold, minVal);
      
      // Smoothstep outside center radius (0.0 inside emblem, 1.0 outside)
      float isOuter = smoothstep(u_center_radius - 0.02, u_center_radius, dist);

      // Alpha is reduced ONLY IF pixel is both WHITE and OUTSIDE the center
      float alpha = 1.0 - (isWhite * isOuter);

      if (alpha <= 0.02) {
        discard; // Instantly skip outer transparent pixels
      }

      gl_FragColor = vec4(color.rgb, color.a * alpha);
    }
  `;

  function compileShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(s));
      gl.deleteShader(s);
      return null;
    }
    return s;
  }

  const program = gl.createProgram();
  gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
  gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
  gl.linkProgram(program);
  gl.useProgram(program);

  // 3. Quad Buffer Setup
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,  1, -1, -1,  1,
    -1,  1,  1, -1,  1,  1,
  ]), gl.STATIC_DRAW);

  const posAttr = gl.getAttribLocation(program, "a_position");
  gl.enableVertexAttribArray(posAttr);
  gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

  // 4. Video Texture Setup
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

  // Uniform Configurations
  // Threshold: 0.88 (~225 brightness)
  // Center Radius: 0.13 (~13% radius completely shields the '+' symbol)
  gl.uniform1f(gl.getUniformLocation(program, "u_threshold"), 0.88);
  gl.uniform1f(gl.getUniformLocation(program, "u_center_radius"), 0.13);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  let animationFrameId = null;

  function render() {
    if (video.readyState >= 2 && !video.paused) {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    animationFrameId = requestAnimationFrame(render);
  }

  // Handle Autoplay & Readiness
  const startPlayback = () => {
    video.muted = true; // Required by browsers for unprompted autoplay
    video.play().then(() => {
      if (!animationFrameId) render();
    }).catch((err) => {
      console.warn("[WebGL Loader] Autoplay blocked, awaiting user gesture:", err);
      window.addEventListener("click", () => {
        video.play().then(() => {
          if (!animationFrameId) render();
        });
      }, { once: true });
    });
  };

  if (video.readyState >= 2) {
    startPlayback();
  } else {
    video.addEventListener("loadeddata", startPlayback);
    video.addEventListener("canplay", startPlayback);
  }

  video.addEventListener("error", () => {
    console.error("[WebGL Loader] Error loading video. Check path:", video.src);
    // Path fallback jika dibuka dari konteks direktori berbeda
    const fallbackSrc = "Materi & Assets/animasi logo inside you/animasi logo inside you.mp4";
    if (!video.src.includes(".mp4")) {
      console.warn("[WebGL Loader] Fallback ke:", fallbackSrc);
      video.src = fallbackSrc;
      video.load();
      startPlayback();
    }
  });

  return {
    stop: () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      video.pause();
      const loader = document.getElementById("anatomy-loader");
      if (loader) loader.classList.add("fade-out");
    },
    start: () => {
      const loader = document.getElementById("anatomy-loader");
      if (loader) loader.classList.remove("fade-out");
      startPlayback();
    }
  };
}

// Global Hook
window.anatomyLoader = null;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.anatomyLoader = initWebGLVideoLoader();
  });
} else {
  window.anatomyLoader = initWebGLVideoLoader();
}
