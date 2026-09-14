// ============================================================================
// ATHENA INTERACTIVE VOICE ORB (GEMINI LIVE EXPERIENCE)
// ============================================================================

const GEMINI_API_KEY = "AQ.Ab8RN6LIqDVE_ELsxd9_1nVqYKhL7FiiaZ1i-QBFRumnFjdFyw";
const CHAT_MODEL = "gemini-2.5-flash";
const TTS_MODEL = "gemini-3.1-flash-tts-preview";
const ATHENA_VOICE = "Despina"; // Smooth, articulate female voice

const systemInstruction = `
You are Athena, the interactive anatomy and health tutor for Inside You.

CORE CONVERSATIONAL RULES:
1. VOICE CONVERSATION MODE:
   - Your responses will be spoken aloud to the user. Keep explanations clear, engaging, and conversational (avoid robotic bullet lists or markdown symbols).
   - If user greets ("halo", "hai", "halo athena"), greet back warmly and invite them to explore.
   - If user asks a question, answer directly without filler words.

2. ORGANIC 3D BRIDGING:
   - You have access to background 3D canvas metadata. Reference the active 3D model only when relevant to the user's question. Never advertise it mechanically.

3. DOMAIN BOUNDARY & SAFETY:
   - Strictly answer anatomy, physiology, medicine, pathology, and health sciences. Politely decline other topics.
   - Never diagnose acute symptoms or prescribe medications. Provide educational context and advise clinical care.

4. LANGUAGE:
   - Always reply in the exact language used by the user (default to Indonesian).
`.trim();

// ============================================================================
// AUDIO CONTEXT & ORB STATE MANAGEMENT
// ============================================================================
let audioCtx = null;
let micAnalyser = null;
let ttsAnalyser = null;
let micStream = null;
let currentAudioSource = null;

// States: 'IDLE' | 'LISTENING' | 'THINKING' | 'SPEAKING'
let orbState = 'IDLE';
let orbPulsePhase = 0;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// ============================================================================
// 2D CANVAS ORB RENDERER (AUDIO REACTIVE)
// ============================================================================
let canvas = null;
let ctx = null;

function initCanvas() {
  canvas = document.getElementById("athena-orb-canvas");
  if (!canvas) return false;
  ctx = canvas.getContext("2d");
  canvas.width = 280; // High-DPI backing
  canvas.height = 280;
  return true;
}

function getAudioIntensity() {
  let dataArray = null;
  let analyser = null;

  if (orbState === 'LISTENING' && micAnalyser) {
    analyser = micAnalyser;
  } else if (orbState === 'SPEAKING' && ttsAnalyser) {
    analyser = ttsAnalyser;
  }

  if (analyser) {
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }
    return (sum / dataArray.length) / 255; // Normalized 0.0 - 1.0
  }

  return 0;
}

function renderOrb() {
  if (!canvas || !ctx) {
    if (!initCanvas()) {
      requestAnimationFrame(renderOrb);
      return;
    }
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const intensity = getAudioIntensity();

  orbPulsePhase += 0.04;

  let baseRadius = 65;
  let dynamicRadius = baseRadius;
  let colorStops = [];

  // Visual state adaptations
  switch (orbState) {
    case 'IDLE':
      // Gentle rhythmic breathing
      dynamicRadius = baseRadius + Math.sin(orbPulsePhase * 0.8) * 4;
      colorStops = [
        { stop: 0.0, color: "rgba(0, 242, 254, 0.95)" },
        { stop: 0.4, color: "rgba(79, 172, 254, 0.65)" },
        { stop: 0.8, color: "rgba(15, 23, 42, 0.1)" },
        { stop: 1.0, color: "rgba(0, 0, 0, 0)" }
      ];
      break;

    case 'LISTENING':
      // Highly reactive to user's mic input
      dynamicRadius = baseRadius + (intensity * 42) + Math.sin(orbPulsePhase * 2.5) * 5;
      colorStops = [
        { stop: 0.0, color: "rgba(255, 255, 255, 1.0)" },
        { stop: 0.2, color: "rgba(0, 242, 254, 0.9)" },
        { stop: 0.6, color: "rgba(0, 114, 255, 0.5)" },
        { stop: 1.0, color: "rgba(0, 0, 0, 0)" }
      ];
      break;

    case 'THINKING':
      // Swirling violet/purple vortex
      dynamicRadius = baseRadius + Math.sin(orbPulsePhase * 3.0) * 6;
      colorStops = [
        { stop: 0.0, color: "rgba(224, 86, 253, 0.95)" },
        { stop: 0.4, color: "rgba(104, 109, 224, 0.75)" },
        { stop: 0.7, color: "rgba(19, 15, 64, 0.3)" },
        { stop: 1.0, color: "rgba(0, 0, 0, 0)" }
      ];
      break;

    case 'SPEAKING':
      // Dynamic pulsing directly driven by Despina's vocal frequencies
      dynamicRadius = baseRadius + (intensity * 48) + Math.sin(orbPulsePhase * 1.8) * 4;
      colorStops = [
        { stop: 0.0, color: "rgba(255, 255, 255, 0.95)" },
        { stop: 0.3, color: "rgba(0, 242, 254, 0.85)" },
        { stop: 0.6, color: "rgba(114, 9, 183, 0.65)" },
        { stop: 1.0, color: "rgba(0, 0, 0, 0)" }
      ];
      break;
  }

  // Draw radial glowing fluid layers
  const gradient = ctx.createRadialGradient(
    centerX, centerY, 5,
    centerX, centerY, dynamicRadius
  );

  colorStops.forEach(cs => gradient.addColorStop(cs.stop, cs.color));

  ctx.beginPath();
  ctx.arc(centerX, centerY, dynamicRadius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw inner energy core
  ctx.beginPath();
  ctx.arc(centerX, centerY, baseRadius * 0.35 + (intensity * 12), 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.filter = "blur(4px)";
  ctx.fill();
  ctx.filter = "none";

  requestAnimationFrame(renderOrb);
}

// Start rendering loop
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    initCanvas();
    renderOrb();
  });
} else {
  initCanvas();
  renderOrb();
}

// ============================================================================
// UI STATE HELPERS
// ============================================================================
function setOrbState(state, statusText = "") {
  orbState = state;
  const statusEl = document.getElementById("athena-orb-status");
  if (!statusEl) return;

  if (statusText) {
    statusEl.innerText = statusText;
  } else {
    switch (state) {
      case 'IDLE': statusEl.innerText = "Ketuk untuk Bicara"; break;
      case 'LISTENING': statusEl.innerText = "Mendengarkan kamu..."; break;
      case 'THINKING': statusEl.innerText = "Athena sedang berpikir..."; break;
      case 'SPEAKING': statusEl.innerText = "Athena berbicara..."; break;
    }
  }
}

function updateCaption(text) {
  const capEl = document.getElementById("athena-orb-caption");
  if (!capEl) return;
  if (text) {
    capEl.innerText = text;
    capEl.classList.add("active");
  } else {
    capEl.classList.remove("active");
  }
}

// ============================================================================
// AUDIO CONVERTER & VOCAL PLAYBACK WITH ANALYSER
// ============================================================================
function pcmToWavBlob(base64Pcm, sampleRate = 24000) {
  const binaryString = atob(base64Pcm);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const wavHeader = new ArrayBuffer(44);
  const view = new DataView(wavHeader);

  view.setUint32(0, 0x52494646, false); // "RIFF"
  view.setUint32(4, 36 + bytes.length, true);
  view.setUint32(8, 0x57415645, false); // "WAVE"
  view.setUint32(12, 0x666d7420, false); // "fmt "
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // Linear PCM
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  view.setUint32(36, 0x64617461, false); // "data"
  view.setUint32(40, bytes.length, true);

  return new Blob([wavHeader, bytes], { type: "audio/wav" });
}

async function playDespinaAudio(base64Audio) {
  initAudioContext();

  if (currentAudioSource) {
    try { currentAudioSource.stop(); } catch (e) {}
    currentAudioSource = null;
  }

  try {
    const wavBlob = pcmToWavBlob(base64Audio, 24000);
    const arrayBuffer = await wavBlob.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    // Connect AudioBuffer -> TTS Analyser -> Speaker
    ttsAnalyser = audioCtx.createAnalyser();
    ttsAnalyser.fftSize = 64;

    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(ttsAnalyser);
    ttsAnalyser.connect(audioCtx.destination);

    currentAudioSource = source;
    setOrbState('SPEAKING');

    source.start(0);

    source.onended = () => {
      setOrbState('IDLE');
      currentAudioSource = null;
    };
  } catch (err) {
    console.error("Audio playback error:", err);
    setOrbState('IDLE');
  }
}

// ============================================================================
// GEMINI DUAL-MODEL SERVICES
// ============================================================================
async function queryGeminiBrain(userQuery, activeContext = "") {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${CHAT_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  const contextHeader = activeContext
    ? `[Background System Note: The user is currently inspecting the 3D model of "${activeContext}". Use only if relevant.]\n`
    : "";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${systemInstruction}\n\n${contextHeader}User:${userQuery}` }] }]
      })
    });

    const data = await response.json();
    if (!response.ok || data.error) {
      throw new Error(data.error?.message || `HTTP ${response.status}`);
    }

    return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  } catch (err) {
    if (window.ATHENA_ENGINE && typeof window.ATHENA_ENGINE.ask === "function") {
      console.warn("Athena Orb: Fallback to built-in knowledge aggregator:", err);
      const res = await window.ATHENA_ENGINE.ask(userQuery);
      return typeof res === "string" ? res : (res?.text || "");
    }
    throw err;
  }
}

async function queryGeminiVoice(text) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${TTS_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  const cleanText = text.replace(/[*#_`~\[\]]/g, '').trim();

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: cleanText }] }],
        generationConfig: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: ATHENA_VOICE }
            }
          }
        }
      })
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (err) {
    console.error("Gemini Voice generation error:", err);
    return null;
  }
}

// ============================================================================
// CONTINUOUS VOICE INTERACTION FLOW
// ============================================================================
let recognition = null;

async function startListeningSession() {
  initAudioContext();

  // If already talking, click interrupts Athena
  if (currentAudioSource) {
    try { currentAudioSource.stop(); } catch (e) {}
    currentAudioSource = null;
    setOrbState('IDLE');
    return;
  }

  try {
    // 1. Hook user microphone into Audio Analyser for live visual feedback
    if (!micStream) {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }
    micAnalyser = audioCtx.createAnalyser();
    micAnalyser.fftSize = 64;
    const micSource = audioCtx.createMediaStreamSource(micStream);
    micSource.connect(micAnalyser);

    // 2. Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Browser kamu belum mendukung Speech Recognition.");
      return;
    }

    if (recognition) recognition.abort();

    recognition = new SpeechRecognition();
    recognition.lang = "id-ID";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setOrbState('LISTENING');
      updateCaption("");
    };

    recognition.onresult = async (event) => {
      const transcript = event.results[0]?.[0]?.transcript?.trim();
      if (!transcript) {
        setOrbState('IDLE');
        return;
      }

      // Transition to Thinking
      setOrbState('THINKING');
      updateCaption(`"${transcript}"`);

      try {
        const activeContext = window.activeAnatomyContext || 
          (window.INSIDE_YOU_APP?.getActiveContext?.().structureName || "");
        
        // Step A: Reason with Gemini 2.5 Flash
        const replyText = await queryGeminiBrain(transcript, activeContext);
        updateCaption(replyText);

        // Step B: Synthesize Despina voice with Gemini 3.1 Flash TTS
        const audioBase64 = await queryGeminiVoice(replyText);

        if (audioBase64) {
          playDespinaAudio(audioBase64);
        } else {
          setOrbState('IDLE');
        }

      } catch (err) {
        console.error("Athena Interaction Error:", err);
        setOrbState('IDLE', "Gagal memproses, coba lagi");
      }
    };

    recognition.onerror = (e) => {
      console.warn("Speech recognition error:", e.error);
      setOrbState('IDLE');
    };

    recognition.onend = () => {
      if (orbState === 'LISTENING') {
        setOrbState('IDLE');
      }
    };

    recognition.start();

  } catch (err) {
    console.error("Mic Permission Error:", err);
    setOrbState('IDLE', "Izin mic ditolak");
  }
}

// Bind click event on Orb
function bindOrbEvents() {
  const orbCanvas = document.getElementById("athena-orb-canvas");
  if (orbCanvas) {
    orbCanvas.removeEventListener("click", startListeningSession);
    orbCanvas.addEventListener("click", startListeningSession);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindOrbEvents);
} else {
  bindOrbEvents();
}

// Global safety aliases
window.ATHENA_ORB = {
  startListening: startListeningSession,
  setOrbState: setOrbState,
  updateCaption: updateCaption,
  playDespinaAudio: playDespinaAudio
};
