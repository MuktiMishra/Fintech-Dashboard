import React, { useMemo } from "react";
import { Award, TrendingUp, Zap } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useFinance } from "../context/FinanceContext";

const formatMoney = (value) => `$${Number(value).toFixed(0)}`;
const formatMoneyExact = (value) => `$${Number(value).toFixed(2)}`;

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const categoryIcons = {
  Shopping: "🛍️",
  "Food & Dining": "🍔",
  Health: "💗",
  Utilities: "💡",
  Entertainment: "🎬",
  Transport: "🚗",
  Bills: "💡",
  Salary: "💼",
  Income: "💼",
  Investment: "📈",
};

const categoryColors = {
  Shopping: "bg-violet-500",
  "Food & Dining": "bg-amber-500",
  Health: "bg-emerald-500",
  Utilities: "bg-slate-400",
  Entertainment: "bg-pink-500",
  Transport: "bg-blue-500",
  Bills: "bg-yellow-500",
  Salary: "bg-cyan-500",
  Income: "bg-cyan-500",
  Investment: "bg-green-500",
};

const cardIconBg = [
  "bg-amber-500/10 text-amber-400",
  "bg-rose-500/10 text-rose-400",
  "bg-violet-500/10 text-violet-400",
];

export default function InsightsPage() {
  const { state } = useFinance();
  const { transactions } = state;

  const {
    highestCategory,
    currentMonthExpense,
    previousMonthExpense,
    monthChange,
    savingsRate,
    monthlyChartData,
    categoryData,
  } = useMemo(() => {
    const expenses = transactions.filter((item) => item.type === "expense");
    const incomes = transactions.filter((item) => item.type === "income");

    const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);
    const totalExpense = expenses.reduce((sum, item) => sum + Math.abs(item.amount), 0);

    const categoryMap = {};
    expenses.forEach((item) => {
      const key = item.category;
      categoryMap[key] = (categoryMap[key] || 0) + Math.abs(item.amount);
    });

    const sortedCategories = Object.entries(categoryMap)
      .map(([name, value]) => ({
        name,
        value,
        percent: totalExpense ? (value / totalExpense) * 100 : 0,
        icon: categoryIcons[name] || "💳",
        color: categoryColors[name] || "bg-blue-500",
      }))
      .sort((a, b) => b.value - a.value);

    const highestCategory = sortedCategories[0];

    const monthMap = {};
    transactions.forEach((item) => {
      const d = new Date(item.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

      if (!monthMap[key]) {
        monthMap[key] = {
          key,
          label: monthNames[d.getMonth()],
          income: 0,
          expenses: 0,
          savings: 0,
        };
      }

      if (item.type === "income") {
        monthMap[key].income += item.amount;
      } else {
        monthMap[key].expenses += Math.abs(item.amount);
      }
    });

    const monthlyChartData = Object.values(monthMap)
      .sort((a, b) => a.key.localeCompare(b.key))
      .map((item) => ({
        ...item,
        savings: item.income - item.expenses,
      }));

    const lastMonth = monthlyChartData[monthlyChartData.length - 1];
    const prevMonth = monthlyChartData[monthlyChartData.length - 2];

    const currentMonthExpense = lastMonth?.expenses || 0;
    const previousMonthExpense = prevMonth?.expenses || 0;

    const monthChange =
      previousMonthExpense > 0
        ? ((currentMonthExpense - previousMonthExpense) / previousMonthExpense) * 100
        : 0;

    const savingsRate =
      totalIncome > 0 ? ((totalIncome - totalExpense) / totalIncome) * 100 : 0;

    return {
      highestCategory,
      currentMonthExpense,
      previousMonthExpense,
      monthChange,
      savingsRate,
      monthlyChartData,
      categoryData: sortedCategories,
    };
  }, [transactions]);

  return (
    <div className="min-h-screen bg-[#020817] text-white p-4 sm:p-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">Financial Insights</h1>
          <p className="mt-1 text-slate-400 text-sm">
            Understand your spending patterns and financial health.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="rounded-2xl border border-white/10 bg-[#081225] p-5">
            <div className="flex items-start gap-4">
              <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${cardIconBg[0]}`}>
                <Award size={18} />
              </div>

              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Highest Spending Category</p>
                <h2 className="text-lg sm:text-xl font-bold mt-1">
                  {highestCategory?.icon} {highestCategory?.name}
                </h2>
                <p className="text-slate-400 mt-1 text-xs sm:text-sm">
                  {formatMoneyExact(highestCategory?.value || 0)} ·{" "}
                  {Math.round(highestCategory?.percent || 0)}% of expenses
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#081225] p-5">
            <div className="flex items-start gap-4">
              <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${cardIconBg[1]}`}>
                <TrendingUp size={18} />
              </div>

              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Month-over-Month Expenses</p>
                <h2 className="text-lg sm:text-xl font-bold mt-1">
                  {monthChange >= 0 ? "+" : ""}
                  {monthChange.toFixed(1)}%
                </h2>
                <p className="text-slate-400 mt-1 text-xs sm:text-sm">
                  {formatMoney(currentMonthExpense)} this month vs {formatMoney(previousMonthExpense)} last
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#081225] p-5">
            <div className="flex items-start gap-4">
              <div className={`h-11 w-11 rounded-2xl flex items-center justify-center ${cardIconBg[2]}`}>
                <Zap size={18} />
              </div>

              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Savings Rate</p>
                <h2 className="text-lg sm:text-xl font-bold mt-1">{savingsRate.toFixed(1)}%</h2>
                <p className="text-slate-400 mt-1 text-xs sm:text-sm">
                  {(savingsRate >= 20 ? "Great" : "Low")} — {savingsRate >= 20 ? "above" : "below"} 20% target
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#081225] p-5">
            <h2 className="text-lg sm:text-xl font-semibold mb-5">Monthly Overview</h2>

            <div className="h-[300px] sm:h-[340px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyChartData} barGap={8}>
                  <XAxis dataKey="label" stroke="#64748b" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      background: "#0f172a",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                  <Bar dataKey="income" fill="#60a5fa" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="expenses" fill="#fb7185" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="savings" fill="#34d399" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex flex-wrap gap-5 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="h-3 w-3 rounded bg-blue-400"></span>
                Income
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="h-3 w-3 rounded bg-rose-400"></span>
                Expenses
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <span className="h-3 w-3 rounded bg-emerald-400"></span>
                Savings
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#081225] p-5">
            <h2 className="text-lg sm:text-xl font-semibold mb-5">Spending by Category</h2>

            <div className="space-y-4">
              {categoryData.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-base">{item.icon}</span>
                      <span className="text-slate-300 truncate text-sm">{item.name}</span>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-slate-500 text-xs">
                        {Math.round(item.percent)}%
                      </span>
                      <span className="font-bold text-sm sm:text-base">
                        ${item.value.toFixed(0)}
                      </span>
                    </div>
                  </div>

                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}