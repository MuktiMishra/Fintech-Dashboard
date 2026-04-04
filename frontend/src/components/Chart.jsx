import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { name: "Jan", income: 400, expense: 300 },
  { name: "Feb", income: 800, expense: 500 },
  { name: "Mar", income: 600, expense: 400 },
  { name: "Apr", income: 1200, expense: 700 },
  { name: "May", income: 400, expense: 300 },
  { name: "June", income: 800, expense: 500 },
  { name: "July", income: 600, expense: 400 },
  { name: "Aug", income: 1200, expense: 700 },
];

const yearlyData = [
  { name: "2021", income: 5000, expense: 3000 },
  { name: "2022", income: 7000, expense: 4000 },
  { name: "2023", income: 9000, expense: 6000 },
  { name: "2024", income: 11000, expense: 8000 },
  { name: "2025", income: 5000, expense: 3000 },
  { name: "2026", income: 7000, expense: 4000 },
  { name: "2027", income: 9000, expense: 6000 },
  { name: "2028", income: 11000, expense: 8000 },
];

export default function ActivityChart() {
  const [view, setView] = useState("monthly");

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