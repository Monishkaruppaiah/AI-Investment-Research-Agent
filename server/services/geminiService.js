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

Return your answer in Markdown.

# Company Overview

Explain the company.

# Industry

Explain the industry.

# Products & Services

List the products and services.

# Strengths

- Point 1
- Point 2
- Point 3

# Weaknesses

- Point 1
- Point 2

# Opportunities

- Point 1
- Point 2

# Risks

- Point 1
- Point 2

# SWOT Analysis

Summarize the SWOT.

# AI Scores

Generate realistic scores between 0 and 100.

Investment Score: 88
Revenue Growth Score: 82
Profit Growth Score: 78
Market Growth Score: 91
Innovation Score: 95
Future Potential Score: 93
Risk Score: 35

Replace the example numbers with your own analysis.

# Final Recommendation

Return ONLY one:

✅ INVEST

or

❌ PASS

Explain why in 5 lines.
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
}