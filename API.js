import { Source_Language } from "./config.js";
import { Target_Language } from "./config.js";
import { ASR_API } from "./config.js";
import { MT_API } from "./config.js";
import { TTS_API } from "./config.js";


export async function getSourceLanguages() {
    const response = await fetch(`${Source_Language}`);
    return response;
}

export async function getTargetLanguages() {
    const response = await fetch(`${Target_Language}`);
    return response;
}

export async function getASR(formData) {
    const response = await fetch(`${ASR_API}`, {
      method: 'POST',
      body: formData
    });
    return response;
}

export async function getMT(sourceText, srcLang, tgtLang) {
    const response = await fetch(`${MT_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        transcript: sourceText,
        translation_choice: 'SPRING-IITM',
        src_language: srcLang,
        tgt_language: tgtLang
      })
    });
    return response;
}

export async function getTTS(ttsText, targetLang, gender) {
    const get_TTS_API = TTS_API(targetLang, gender);
    const response = await fetch(`${get_TTS_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        input: ttsText,
        alpha: 1,
        segmentwise: "True",
        lang: targetLang,   
        gender: gender        
      })
    });
    return response;
}