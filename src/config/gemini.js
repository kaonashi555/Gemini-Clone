const apiKey = "AIzaSyCte1zkqv-XQRfia93Kux2zjRSysVTjupM"

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey});

export async function gemini(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
  });
  console.log(response.text);
}

