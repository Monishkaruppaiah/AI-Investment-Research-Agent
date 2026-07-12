# 📈 AI Investment Research Agent

An AI-powered Investment Research Platform that generates detailed investment reports for any publicly traded company using **Google Gemini AI**. The application provides AI-generated company analysis, SWOT analysis, an investment score, financial insights, interactive charts, and investment recommendations.

---

## 📖 Overview

The **AI Investment Research Agent** is a full-stack web application designed to simplify financial research. By taking just the name of a company, it leverages Google Gemini 2.5 Flash to automatically compile a comprehensive business profile, analyze industry position, and evaluate strengths, weaknesses, opportunities, and risks (SWOT). 

Most importantly, it generates 7 unique AI scores (Investment, Revenue Growth, Profit, Market, Innovation, Future Potential, and Risk) between 0–100, visually represented with glowing glassmorphism dashboards and interactive Recharts. Based on these metrics, the AI outputs a strict final verdict to either **✅ INVEST** or **❌ PASS**.

## 🚀 How to Run It

### Prerequisites
- Node.js installed
- Google Gemini API Key

### 1. Clone Repository
```bash
git clone https://github.com/Monishkaruppaiah/AI-Investment-Research-Agent.git
cd AI-Investment-Research-Agent
```

### 2. Backend Setup
Navigate to the server directory, install dependencies, and setup your `.env` file:
```bash
cd server
npm install
```
Create a `.env` file inside the `server/` folder:
```
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```
Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
In a new terminal window, navigate to the client directory and start the frontend:
```bash
cd client
npm install
npm run dev
```
The application will be running at `http://localhost:5173`.

---

## ⚙️ How It Works (Architecture)

The platform follows a traditional Client-Server architecture:

1. **Frontend (React + Vite)**: 
   - Uses `lucide-react` for iconography and `recharts` for interactive data visualization.
   - Designed using strict Vanilla CSS with modern Glassmorphism aesthetics (no external CSS frameworks were used).
   - Sends search queries via Axios to the backend.
   - Parses the structured JSON payload to render Markdown reports and map Rechart data points.
2. **Backend (Express + Node.js)**:
   - Built to securely handle the API key and communicate with Google's `@google/genai` SDK.
   - Employs strict prompt engineering, dictating Gemini to reply with a precise `application/json` output schema (`markdownReport`, `scores`, `recommendation`).
3. **AI Layer (Google Gemini)**:
   - Processes the prompt to compile business financials, analyze risks, generate numerical ratings, and formulate a final verdict.

---

## ⚖️ Key Decisions & Trade-offs

- **Structured JSON vs Markdown Regex**: Initially, the application parsed plain Markdown using Regex to extract numbers. This is highly brittle in LLMs. I traded the simplicity of a raw Markdown response for a structured JSON response by using `responseMimeType: "application/json"`. This guarantees the frontend receives exactly 7 parseable score integers every time.
- **Vanilla CSS vs Tailwind**: To maximize flexibility, demonstrate deep CSS fundamentals, and achieve a highly customized "Glassmorphism" UI with deep space gradients and micro-animations, I opted for Vanilla CSS (`index.css`) over Tailwind.
- **Client-Side Rendering**: For speed and simplicity in this sprint, React (Vite) was chosen over Next.js SSR. The initial load time is fast enough, and SEO isn't a primary concern for this internal dashboard tool.

---

## 📊 Example Runs

### Example 1: Apple Inc.
- **AI Scores**: Investment (92), Innovation (95), Profit (90), Risk (20)
- **Verdict**: ✅ INVEST
- **SWOT Summary**: Extremely strong moat via the Apple ecosystem, robust cash flow, and high innovation, though heavily dependent on iPhone sales and facing antitrust scrutiny.

### Example 2: Peloton
- **AI Scores**: Investment (35), Revenue (20), Market (40), Risk (85)
- **Verdict**: ❌ PASS
- **SWOT Summary**: Post-pandemic demand collapse and heavy hardware inventory overhang outweigh their strong community engagement. Significant restructuring required.

---

## 🔮 What I Would Improve With More Time

1. **Live Financial Data Integration**: Connect to an API like AlphaVantage or Yahoo Finance to fetch real-time P/E ratios, stock prices, and historical charts to cross-reference the AI's intuition with hard math.
2. **Authentication & Portfolios**: Add user accounts (Firebase or Auth0) so users can save generated reports to a personal watchlist or portfolio.
3. **PDF Exports**: Implement `jspdf` to allow users to click a button and export the styled Markdown report and Recharts canvas directly to a shareable PDF.
4. **Streaming Responses**: Implement SSE (Server-Sent Events) to stream the Gemini markdown response token-by-token for a better UX while waiting for long reports.

---

## 👨‍💻 Author
**Monish Karuppaiah**
GitHub: https://github.com/Monishkaruppaiah
