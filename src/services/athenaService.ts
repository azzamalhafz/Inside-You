import { GoogleGenAI } from '@google/genai';

// Hardcoded Master Key (Inside You Dedicated Deployment)
const ATHENA_API_KEY: string = 
  (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_GEMINI_API_KEY) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_GEMINI_API_KEY) ||
  "AQ.Ab8RN6LIqDVE_ELsxd9_1nVqYKhL7FiiaZ1i-QBFRumnFjdFyw";

export const athenaAI = new GoogleGenAI({
  apiKey: ATHENA_API_KEY
});

export const ATHENA_MODEL_NAME = "gemini-2.5-flash";
export const ATHENA_TTS_MODEL_NAME = "gemini-3.1-flash-tts-preview";
export const ATHENA_VOICE = "Despina";
