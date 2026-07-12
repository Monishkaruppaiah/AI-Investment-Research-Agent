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
      <div className="score-bar">
        <h2 style={{ marginBottom: "25px" }}>
          📊 AI Company Scores
        </h2>

        {scores.map((item) => (
          <div className="score-item" key={item.name}>
            <div className="score-header">
              <span>{item.name}</span>
              <span>{item.value}/100</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="chart">
        <InvestmentChart scores={scores} />
      </div>

      <div className="report">
        <ReactMarkdown>{report}</ReactMarkdown>
      </div>
    </>
  );
}

export default Report;