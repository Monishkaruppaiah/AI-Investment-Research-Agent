import ReactMarkdown from "react-markdown";
import InvestmentChart from "./InvestmentChart";

function Report({ report }) {
  if (!report) return null;

  const investment =
    Number(report.match(/Investment Score:\s*(\d+)/i)?.[1]) || 0;

  const revenue =
    Number(report.match(/Revenue Growth Score:\s*(\d+)/i)?.[1]) || 0;

  const profit =
    Number(report.match(/Profit Growth Score:\s*(\d+)/i)?.[1]) || 0;

  const market =
    Number(report.match(/Market Growth Score:\s*(\d+)/i)?.[1]) || 0;

  const innovation =
    Number(report.match(/Innovation Score:\s*(\d+)/i)?.[1]) || 0;

  const future =
    Number(report.match(/Future Potential Score:\s*(\d+)/i)?.[1]) || 0;

  const risk =
    Number(report.match(/Risk Score:\s*(\d+)/i)?.[1]) || 0;

  const scores = [
    { name: "Investment", value: investment },
    { name: "Revenue", value: revenue },
    { name: "Profit", value: profit },
    { name: "Market", value: market },
    { name: "Innovation", value: innovation },
    { name: "Future", value: future },
    { name: "Risk", value: risk },
  ];

  return (
    <>
      {/* Score Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div className="card">
          <h3>📈 Investment</h3>
          <h2>{investment}</h2>
        </div>

        <div className="card">
          <h3>💰 Revenue</h3>
          <h2>{revenue}</h2>
        </div>

        <div className="card">
          <h3>🏆 Profit</h3>
          <h2>{profit}</h2>
        </div>

        <div className="card">
          <h3>🌍 Market</h3>
          <h2>{market}</h2>
        </div>

        <div className="card">
          <h3>🚀 Innovation</h3>
          <h2>{innovation}</h2>
        </div>

        <div className="card">
          <h3>🔮 Future</h3>
          <h2>{future}</h2>
        </div>

        <div className="card">
          <h3>⚠️ Risk</h3>
          <h2>{risk}</h2>
        </div>
      </div>

      {/* Chart */}
      <div className="chart">
        <InvestmentChart scores={scores} />
      </div>

      {/* AI Report */}
      <div className="report">
        <ReactMarkdown>{report}</ReactMarkdown>
      </div>
    </>
  );
}

export default Report;