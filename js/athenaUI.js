// ============================================================================
// ATHENA AI ENGINE - MINIMALIST FAB & INTEGRATED INPUT MIC
// ============================================================================
const GEMINI_API_KEY = "AQ.Ab8RN6LIqDVE_ELsxd9_1nVqYKhL7FiiaZ1i-QBFRumnFjdFyw";

const CHAT_MODELS = [
  "gemini-2.5-flash",
  "gemini-3.5-flash",
  "gemini-2.5-flash-lite",
  "gemini-1.5-flash"
];
const TTS_MODEL = "gemini-3.1-flash-tts-preview";
const ATHENA_VOICE = "Despina";

// Bilingual Localization
const ATHENA_I18N = {
  id: {
    placeholder: "Tanyakan anatomi atau organ tubuh...",
    micTitle: "Bicara dengan Athena",
    sendTitle: "Kirim",
    greeting: "Halo! Saya Athena, asisten anatomi 3D Anda. Ketik pertanyaanmu atau tekan ikon <b>Mikrofon</b> di samping untuk berbicara langsung.",
    speechLang: "id-ID",
    errorMsg: "⚠️ Maaf, terjadi kendala koneksi. Silakan coba kembali.",
    listeningBubble: "<i>Mendengarkan suara Anda...</i>"
  },
  en: {
    placeholder: "Ask about anatomy or body organs...",
    micTitle: "Speak with Athena",
    sendTitle: "Send",
    greeting: "Hello! I am Athena, your 3D anatomy assistant. Type your question or tap the <b>Microphone</b> icon beside to speak directly.",
    speechLang: "en-US",
    errorMsg: "⚠️ Sorry, connection error. Please try again.",
    listeningBubble: "<i>Listening to your voice...</i>"
  }
};

let currentLang = "en";

function getActiveLanguage() {
  const navLangEl = document.querySelector("#langBtn, .lang-toggle, #lang-toggle, .btn-lang");
  if (navLangEl) {
    const txt = (navLangEl.textContent || navLangEl.innerText || "").trim();
    if (txt.startsWith("ID")) return "id";
    if (txt.startsWith("EN")) return "en";
  }

  const stored = localStorage.getItem("lang") || localStorage.getItem("language") || localStorage.getItem("selectedLanguage");
  if (stored && (stored.toLowerCase().includes("id") || stored.toLowerCase().includes("in"))) return "id";
  if (stored && stored.toLowerCase().includes("en")) return "en";

  const htmlLang = document.documentElement.lang?.toLowerCase();
  if (htmlLang && (htmlLang.startsWith("id") || htmlLang.startsWith("in"))) return "id";
  if (htmlLang && htmlLang.startsWith("en")) return "en";

  return "en";
}

function applyAthenaLanguage(lang) {
  currentLang = lang;
  const dict = ATHENA_I18N[lang] || ATHENA_I18N.en;

  const inputEl = document.getElementById("athena-input");
  if (inputEl) inputEl.placeholder = dict.placeholder;

  const micBtn = document.getElementById("athena-mic-btn");
  if (micBtn) micBtn.title = dict.micTitle;

  const sendBtn = document.getElementById("athena-send-btn");
  if (sendBtn) sendBtn.title = dict.sendTitle;

  const welcomeMsg = document.getElementById("athena-welcome-msg");
  if (welcomeMsg && !welcomeMsg.dataset.customized) {
    welcomeMsg.innerHTML = dict.greeting;
  }

  if (recognition) {
    recognition.lang = dict.speechLang;
  }
}

// Watch for navbar ID/EN toggle changes
function setupLanguageWatcher() {
  currentLang = getActiveLanguage();
  applyAthenaLanguage(currentLang);

  document.addEventListener("click", (e) => {
    const target = e.target.closest("button, a, .lang-switch, [data-lang], #langBtn");
    if (!target) return;

    const text = (target.textContent || target.innerText || "").trim();
    if (text.includes("ID/EN") || text.includes("ID / EN") || text.includes("EN / ID") || target.dataset.lang || target.id === "langBtn") {
      setTimeout(() => applyAthenaLanguage(getActiveLanguage()), 100);
    }
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && mutation.attributeName === "lang") {
        applyAthenaLanguage(getActiveLanguage());
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
}

// System Instruction
const systemInstruction = `
You are Athena, the interactive anatomy and health tutor for Inside You.

RULES:
1. VOICE CONSTRAINTS: When responding to spoken queries, keep answers STRICTLY under 2 short sentences (maximum 25-30 words). Never use markdown, bullet points, or lists so voice synthesis is instant.
2. TEXT CONSTRAINTS: When answered in text, provide direct, insightful, and medically accurate explanations.
3. DOMAIN BOUNDARY: Only answer anatomy, physiology, medicine, pathology, and health sciences. Politely decline unrelated domains (politics, coding, gaming, finance).
4. SAFETY: Never provide medical prescriptions or clinical diagnoses.
5. LANGUAGE: Always respond in the exact language used by the user (Indonesian if asked in Indonesian, English if asked in English).
`.trim();

// Audio Context & States
let audioCtx = null;
let currentAudioSource = null;
let recognition = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioCtx();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function setMicState(state) {
  const micBtn = document.getElementById("athena-mic-btn");
  if (!micBtn) return;

  micBtn.classList.remove("listening", "thinking", "speaking");
  if (state !== "idle") {
    micBtn.classList.add(state);
  }
}

// Gemini Chat Service
async function fetchGeminiChat(userText, isVoiceMode = false) {
  const activeContext = window.activeAnatomyContext || "";
  const contextNote = activeContext ? `[User viewing 3D structure: "${activeContext}"]\n` : "";
  const modeInstruction = isVoiceMode 
    ? `[VOICE QUERY: Respond in MAXIMUM 1-2 SHORT sentences. Under 30 words. No markdown.]\n` 
    : "";

  const payload = {
    contents: [{ parts: [{ text: `${systemInstruction}\n\n${contextNote}${modeInstruction}User: ${userText}` }] }],
    generationConfig: {
      temperature: 0.6,
      thinkingConfig: { thinkingBudget: 0 }
    }
  };

  for (const model of CHAT_MODELS) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (response.ok && data.candidates?.[0]?.content?.parts) {
        let text = "";
        for (const part of data.candidates[0].content.parts) {
          if (part.text && !part.thought) text += part.text;
        }
        if (text.trim()) return text.trim();
      }
    } catch (e) {
      console.warn(`Model ${model} failed, testing fallback...`, e);
    }
  }

  throw new Error("Unable to reach Gemini API.");
}

// Gemini TTS Service
async function fetchGeminiTTS(textToSpeak) {
  try {
    const cleanText = textToSpeak.replace(/[*#_`~\[\]]/g, "").trim();
    if (!cleanText) return null;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${TTS_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": GEMINI_API_KEY
      },
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
  } catch (e) {
    console.warn("TTS Error, fallback will be used:", e);
    return null;
  }
}

// PCM Audio Playback
function pcmToWav(base64Pcm, sampleRate = 24000) {
  const binary = atob(base64Pcm);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

  const header = new ArrayBuffer(44);
  const v = new DataView(header);
  v.setUint32(0, 0x52494646, false);
  v.setUint32(4, 36 + bytes.length, true);
  v.setUint32(8, 0x57415645, false);
  v.setUint32(12, 0x666d7420, false);
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true);
  v.setUint16(22, 1, true);
  v.setUint32(24, sampleRate, true);
  v.setUint32(28, sampleRate * 2, true);
  v.setUint16(32, 2, true);
  v.setUint16(34, 16, true);
  v.setUint32(36, 0x64617461, false);
  v.setUint32(40, bytes.length, true);

  return new Blob([header, bytes], { type: "audio/wav" });
}

async function playDespinaAudio(base64Audio) {
  initAudioContext();
  if (currentAudioSource) {
    try { currentAudioSource.stop(); } catch (e) {}
    currentAudioSource = null;
  }

  const wavBlob = pcmToWav(base64Audio, 24000);
  const buffer = await audioCtx.decodeAudioData(await wavBlob.arrayBuffer());

  const src = audioCtx.createBufferSource();
  src.buffer = buffer;
  src.connect(audioCtx.destination);

  currentAudioSource = src;
  setMicState("speaking");

  src.start(0);
  src.onended = () => {
    setMicState("idle");
    currentAudioSource = null;
  };
}

function playBrowserTTSFallback(text) {
  if (!("speechSynthesis" in window)) {
    setMicState("idle");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/[*#_`~\[\]]/g, ""));
  u.lang = ATHENA_I18N[currentLang]?.speechLang || "en-US";
  u.onend = () => setMicState("idle");
  u.onerror = () => setMicState("idle");
  setMicState("speaking");
  window.speechSynthesis.speak(u);
}

function appendBubble(sender, text) {
  const container = document.getElementById("athena-chat-messages");
  if (!container) return;

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender === "user" ? "user-bubble" : "athena-bubble"}`;
  bubble.innerHTML = text;

  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
  return bubble;
}

// Voice Session Flow (Triggered via Mic Button)
function handleVoiceMicSession() {
  initAudioContext();

  // If already speaking, stop audio
  if (currentAudioSource) {
    try { currentAudioSource.stop(); } catch (e) {}
    currentAudioSource = null;
    setMicState("idle");
    return;
  }
  if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    setMicState("idle");
    return;
  }

  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) {
    alert("Speech Recognition not supported in this browser. Please use Chrome.");
    return;
  }

  const dict = ATHENA_I18N[currentLang] || ATHENA_I18N.en;

  if (recognition) {
    try { recognition.abort(); } catch (e) {}
  }
  recognition = new SpeechRec();
  recognition.lang = dict.speechLang;
  recognition.continuous = false;
  recognition.interimResults = false;

  let tempBubble = null;

  recognition.onstart = () => {
    setMicState("listening");
    tempBubble = appendBubble("athena", dict.listeningBubble);
  };

  recognition.onresult = async (event) => {
    const transcript = event.results[0]?.[0]?.transcript?.trim();
    if (tempBubble) tempBubble.remove();

    if (!transcript) {
      setMicState("idle");
      return;
    }

    appendBubble("user", transcript);
    setMicState("thinking");

    try {
      const reply = await fetchGeminiChat(transcript, true);
      appendBubble("athena", reply);

      const audio = await fetchGeminiTTS(reply);
      if (audio) {
        playDespinaAudio(audio);
      } else {
        playBrowserTTSFallback(reply);
      }
    } catch (err) {
      console.error("Voice interaction error:", err);
      setMicState("idle");
    }
  };

  recognition.onerror = () => {
    if (tempBubble) tempBubble.remove();
    setMicState("idle");
  };

  recognition.onend = () => {
    const micBtn = document.getElementById("athena-mic-btn");
    if (micBtn && micBtn.classList.contains("listening")) {
      setMicState("idle");
    }
  };

  try {
    recognition.start();
  } catch (err) {
    console.warn("Recognition start error:", err);
    setMicState("idle");
  }
}

// Panel Toggling
function toggleChatPanel() {
  const panel = document.getElementById("athena-chat-panel");
  if (!panel) return;
  panel.classList.toggle("hidden");
  if (!panel.classList.contains("hidden")) {
    const input = document.getElementById("athena-input");
    input?.focus();
  }
}

function initAthenaWidget() {
  setupLanguageWatcher();

  // 1. Circular FAB Button Click
  document.getElementById("athena-fab-trigger")?.addEventListener("click", () => {
    toggleChatPanel();
  });

  // 2. Minimize / Close Button
  document.getElementById("athena-minimize-btn")?.addEventListener("click", () => {
    document.getElementById("athena-chat-panel")?.classList.add("hidden");
  });

  // 3. Integrated Voice Mic Button
  document.getElementById("athena-mic-btn")?.addEventListener("click", () => {
    handleVoiceMicSession();
  });

  // 4. Text Form Submission
  document.getElementById("athena-chat-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputEl = document.getElementById("athena-input");
    const query = inputEl?.value?.trim();
    if (!query) return;

    inputEl.value = "";
    appendBubble("user", query);

    try {
      const reply = await fetchGeminiChat(query, false);
      appendBubble("athena", reply);
    } catch (err) {
      const dict = ATHENA_I18N[currentLang] || ATHENA_I18N.en;
      appendBubble("athena", dict.errorMsg);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAthenaWidget);
} else {
  initAthenaWidget();
}
