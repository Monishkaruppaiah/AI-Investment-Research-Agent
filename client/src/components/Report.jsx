import ReactMarkdown from "react-markdown";
import InvestmentChart from "./InvestmentChart";
import { TrendingUp, ShieldAlert, BadgeCheck, XCircle } from "lucide-react";

function Report({ data }) {
  if (!data) return null;

  const { markdownReport, scores, recommendation } = data;

  const chartData = [
    { name: "Investment", value: scores?.investment || 0 },
    { name: "Revenue", value: scores?.revenue || 0 },
    { name: "Profit", value: scores?.profit || 0 },
    { name: "Market", value: scores?.market || 0 },
    { name: "Innovation", value: scores?.innovation || 0 },
    { name: "Future", value: scores?.future || 0 },
    { name: "Risk", value: scores?.risk || 0 },
  ];

  const isInvest = recommendation === "INVEST";

  return (
    <div className="report-container fade-in">
      <div className="recommendation-banner">
        <h2>AI Verdict:</h2>
        <div className={`badge ${isInvest ? "badge-invest" : "badge-pass"}`}>
          {isInvest ? <BadgeCheck size={32} /> : <XCircle size={32} />}
          <span>{recommendation || "UNKNOWN"}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Score Cards */}
        <div className="scores-grid">
          {chartData.map((item) => (
            <div className="score-card glass" key={item.name}>
              <div className="score-header">
                <h3>{item.name}</h3>
                {item.name === "Risk" ? <ShieldAlert size={18} className="icon-risk" /> : <TrendingUp size={18} className="icon-up" />}
              </div>
              <div className="score-value">
                <span className="number">{item.value}</span>
                <span className="out-of">/100</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className={`progress-bar-fill ${item.name === 'Risk' ? (item.value > 50 ? 'risk-high' : 'risk-low') : 'score-high'}`} 
                  style={{ width: \`\${item.value}%\` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="chart-container glass">
          <InvestmentChart scores={chartData} />
        </div>
      </div>

      {/* AI Report Markdown */}
      <div className="markdown-report glass">
        <ReactMarkdown>{markdownReport}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Report;