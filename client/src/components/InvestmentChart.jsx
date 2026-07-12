import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

function InvestmentChart({ scores }) {
  if (!scores) return null;

  // Premium color palette for bars
  const colors = ["#0ea5e9", "#10b981", "#8b5cf6", "#f59e0b", "#ec4899", "#14b8a6", "#ef4444"];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip glass">
          <p className="label">{`\${label} Score: \${payload[0].value}/100`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-wrapper">
      <h3 className="chart-title">AI Scoring Breakdown</h3>
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={scores} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} tickLine={false} axisLine={false} />
            <YAxis domain={[0, 100]} stroke="#94a3b8" tick={{ fill: "#94a3b8", fontSize: 12 }} tickLine={false} axisLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={40}>
              {scores.map((entry, index) => (
                <Cell key={`cell-\${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default InvestmentChart;