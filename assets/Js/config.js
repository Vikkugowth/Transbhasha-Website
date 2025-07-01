export const apiUrl = {
    sourceLanguage : 'https://asr.iitm.ac.in/demo/srclang',
    TargetLanguage : 'https://asr.iitm.ac.in/demo/destlang',
    AsrApi : 'https://asr.iitm.ac.in/internal/asr/decode',
    MtApi : 'https://asr.iitm.ac.in/internal/mt/translate'
}

export function TTS_API(targetLang, gender) {
    return `https://asr.iitm.ac.in/tts/${targetLang}/${gender}`;
}