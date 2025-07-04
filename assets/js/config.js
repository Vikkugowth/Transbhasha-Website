export const apiUrl = {
    sourceLanguage: 'https://asr.iitm.ac.in/demo/srclang',
    TargetLanguage: 'https://asr.iitm.ac.in/demo/destlang',
    AsrApi: 'https://asr.iitm.ac.in/internal/asr/decode',
    MtApi: 'https://asr.iitm.ac.in/internal/mt/translate',
    ttsApi: 'https://asr.iitm.ac.in/tts'
}

export function TTS_API(targetLang, gender) {
    return `${apiUrl.ttsApi}/${targetLang}/${gender}`;
}