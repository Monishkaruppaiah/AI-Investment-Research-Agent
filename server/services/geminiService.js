import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateInvestmentReport(companyName) {
  const prompt = `
You are an expert investment analyst.

Analyze the company: ${companyName}

Provide a comprehensive investment report.

Return ONLY valid JSON in this exact format:

{
  "markdownReport": "# Company Overview\\n\\nExplain the company.\\n\\n# Industry\\n\\nExplain the industry.\\n\\n# Products & Services\\n\\nList the products and services.\\n\\n# SWOT Analysis\\n\\nSummarize strengths, weaknesses, opportunities, and risks.",
  "scores": {
    "investment": 88,
    "revenue": 82,
    "profit": 78,
    "market": 91,
    "innovation": 95,
    "future": 93,
    "risk": 35
  },
  "recommendation": "INVEST"
}

Rules:
- Return ONLY JSON.
- No markdown outside JSON.
- recommendation must be either "INVEST" or "PASS".
- Scores must be between 0 and 100.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    console.log("Gemini Response:");
    console.log(response);

    const text = response.text;

    console.log("Generated Text:");
    console.log(text);

    const data = JSON.parse(text);

    return data;
  } catch (error) {
    console.error("========== GEMINI ERROR ==========");
    console.error(error);

    if (error.response) {
      console.error("Response Data:");
      console.error(error.response.data);
    }

    if (error.message) {
      console.error("Message:");
      console.error(error.message);
    }

    console.error("=================================");

    throw error;
  }
}