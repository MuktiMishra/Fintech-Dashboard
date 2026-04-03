import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 1200 },
  { name: "Travel", value: 300 },
  { name: "Shopping", value: 500 },
  { name: "Bills", value: 200 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function ExpensePieChart() {
  return (
    <div className="bg-[#0f172a] p-6 rounded-2xl text-white w-full h-90">
      <h2 className="text-lg font-semibold">Expense Breakdown</h2>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}   // 👈 makes it donut style (modern look)
            dataKey="value"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
          
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}