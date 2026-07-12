import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
 YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function InvestmentChart({ scores }) {
  if (!scores) return null;

  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "30px",
      }}
    >
      <ResponsiveContainer>
        <BarChart data={scores}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis domain={[0, 100]} />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default InvestmentChart;