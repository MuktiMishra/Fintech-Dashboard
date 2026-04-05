import { useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFinance } from "../context/FinanceContext";

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function ActivityChart() {
  const [view, setView] = useState("monthly");
  const { state } = useFinance();
  const { transactions } = state;

  const { monthlyData, yearlyData } = useMemo(() => {
    const monthlyMap = {};
    const yearlyMap = {};

    transactions.forEach((item) => {
      const d = new Date(item.date);
      const monthKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      const yearKey = String(d.getFullYear());

      if (!monthlyMap[monthKey]) {
        monthlyMap[monthKey] = {
          sortKey: monthKey,
          name: monthLabels[d.getMonth()],
          income: 0,
          expense: 0,
        };
      }

      if (!yearlyMap[yearKey]) {
        yearlyMap[yearKey] = {
          name: yearKey,
          income: 0,
          expense: 0,
        };
      }

      if (item.type === "income") {
        monthlyMap[monthKey].income += item.amount;
        yearlyMap[yearKey].income += item.amount;
      } else {
        monthlyMap[monthKey].expense += Math.abs(item.amount);
        yearlyMap[yearKey].expense += Math.abs(item.amount);
      }
    });

    const monthlyData = Object.values(monthlyMap)
      .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
      .map(({ sortKey, ...rest }) => rest);

    const yearlyData = Object.values(yearlyMap).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return { monthlyData, yearlyData };
  }, [transactions]);

  const data = view === "monthly" ? monthlyData : yearlyData;

  return (
    <div className="bg-[#0f172a] p-4 sm:p-6 rounded-2xl text-white h-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <h2 className="text-base sm:text-lg font-semibold">Activity Summary</h2>

        <div className="flex bg-[#1e293b] rounded-lg p-1 self-start sm:self-auto">
          <button
            onClick={() => setView("monthly")}
            className={`px-3 py-1 rounded-md text-sm ${
              view === "monthly" ? "bg-[#334155]" : ""
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setView("yearly")}
            className={`px-3 py-1 rounded-md text-sm ${
              view === "yearly" ? "bg-[#334155]" : ""
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="w-full h-[220px] sm:h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="income" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="expense" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="income"
              stroke="#3b82f6"
              fill="url(#income)"
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="expense"
              stroke="#22c55e"
              fill="url(#expense)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}