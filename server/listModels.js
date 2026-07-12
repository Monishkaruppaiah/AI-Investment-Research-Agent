import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const response = await ai.models.list();

    for await (const model of response) {
      console.log(model.name);
    }
  } catch (err) {
    console.error(err);
  }
}

main();