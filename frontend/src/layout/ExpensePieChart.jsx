import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
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
    <div className="bg-[#0f172a] p-4 sm:p-6 rounded-2xl text-white w-full h-full">
      <h2 className="text-base sm:text-lg font-semibold mb-6">
        Expense Breakdown
      </h2>

      <div className="w-full h-[260px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              innerRadius={45}
              outerRadius={75}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}