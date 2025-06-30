export const Source_Language = 'https://asr.iitm.ac.in/demo/srclang';
export const Target_Language = 'https://asr.iitm.ac.in/demo/destlang';
export const ASR_API = 'https://asr.iitm.ac.in/internal/asr/decode';
export const MT_API = 'https://asr.iitm.ac.in/internal/mt/translate';
export function TTS_API(targetLang, gender) {
    return `https://asr.iitm.ac.in/tts/${targetLang}/${gender}`;
}