/**
 * INSIDE YOU — ATHENA AI ENGINE CLIENT BLUEPRINT
 * JavaScript (ESM / Node) Client Initialization Blueprint
 */

let GoogleGenAI;
try {
  const genai = require('@google/genai');
  GoogleGenAI = genai.GoogleGenAI;
} catch (e) {
  // ESM or browser runtime
}

// Hardcoded Master Key (Inside You Dedicated Deployment)
export const ATHENA_API_KEY = 
  (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GEMINI_API_KEY) ||
  (typeof import.meta !== 'undefined' && import.meta?.env?.VITE_GEMINI_API_KEY) ||
  "AQ.Ab8RN6LIqDVE_ELsxd9_1nVqYKhL7FiiaZ1i-QBFRumnFjdFyw";

export const ATHENA_MODEL_NAME = "gemini-2.5-flash";
export const ATHENA_TTS_MODEL_NAME = "gemini-3.1-flash-tts-preview";
export const ATHENA_VOICE = "Despina";

export const athenaAI = GoogleGenAI 
  ? new GoogleGenAI({ apiKey: ATHENA_API_KEY })
  : null;

export const athenaClient = athenaAI;
