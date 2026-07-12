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

Your response MUST be valid JSON only.

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

Return ONLY valid JSON.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const data = JSON.parse(response.text);

    return data;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate AI report.");
  }
}