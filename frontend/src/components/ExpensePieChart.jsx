import { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useFinance } from "../context/FinanceContext";

const COLORS = [
  "#3b82f6",
  "#22c55e",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
  "#84cc16",
];

export default function ExpensePieChart() {
  const { state } = useFinance();
  const { transactions } = state;

  const data = useMemo(() => {
    const expenseMap = {};

    transactions
      .filter((item) => item.type === "expense")
      .forEach((item) => {
        expenseMap[item.category] =
          (expenseMap[item.category] || 0) + Math.abs(item.amount);
      });

    return Object.entries(expenseMap).map(([name, value]) => ({
      name,
      value,
    }));
  }, [transactions]);

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
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
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