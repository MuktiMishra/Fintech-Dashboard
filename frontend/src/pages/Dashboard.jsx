import React, { useMemo } from "react";
import { DollarSign, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import Chart from "../components/Chart";
import ExpensePieChart from "../components/ExpensePieChart";
import CardDisplay from "../components/Card";
import RecentTransactions from "../components/RecentTransactions";
import { useFinance } from "../context/FinanceContext";

const formatMoney = (value) =>
  `$${Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const getChangeText = (current, previous) => {
  if (previous === 0) return "+0.0% vs last month";
  const change = ((current - previous) / previous) * 100;
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(1)}% vs last month`;
};

const Dashboard = () => {
  const { state } = useFinance();
  const { transactions } = state;

  const stats = useMemo(() => {
    const monthMap = {};

    transactions.forEach((item) => {
      const d = new Date(item.date);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

      if (!monthMap[key]) {
        monthMap[key] = {
          income: 0,
          expense: 0,
        };
      }

      if (item.type === "income") {
        monthMap[key].income += item.amount;
      } else {
        monthMap[key].expense += Math.abs(item.amount);
      }
    });

    const sortedMonths = Object.keys(monthMap).sort();
    const currentKey = sortedMonths[sortedMonths.length - 1];
    const previousKey = sortedMonths[sortedMonths.length - 2];

    const current = monthMap[currentKey] || { income: 0, expense: 0 };
    const previous = monthMap[previousKey] || { income: 0, expense: 0 };

    const currentBalance = current.income - current.expense;
    const previousBalance = previous.income - previous.expense;

    const currentSavings = currentBalance;
    const previousSavings = previous.income - previous.expense;

    return [
      {
        title: "Total Balance",
        value: formatMoney(currentBalance),
        change: getChangeText(currentBalance, previousBalance),
        icon: DollarSign,
        iconBox: "bg-blue-500/10 text-blue-400",
        changeColor: currentBalance >= previousBalance ? "text-emerald-400" : "text-rose-400",
      },
      {
        title: "Income",
        value: formatMoney(current.income),
        change: getChangeText(current.income, previous.income),
        icon: TrendingUp,
        iconBox: "bg-emerald-500/10 text-emerald-400",
        changeColor: current.income >= previous.income ? "text-emerald-400" : "text-rose-400",
      },
      {
        title: "Expenses",
        value: formatMoney(current.expense),
        change: getChangeText(current.expense, previous.expense),
        icon: TrendingDown,
        iconBox: "bg-rose-500/10 text-rose-400",
        changeColor: current.expense <= previous.expense ? "text-emerald-400" : "text-rose-400",
      },
      {
        title: "Savings",
        value: formatMoney(currentSavings),
        change: getChangeText(currentSavings, previousSavings),
        icon: PiggyBank,
        iconBox: "bg-amber-500/10 text-amber-400",
        changeColor: currentSavings >= previousSavings ? "text-emerald-400" : "text-rose-400",
      },
    ];
  }, [transactions]);

  return (
    <div className="flex flex-col w-full p-3 sm:p-4">
      <h1 className="text-xl sm:text-lg font-bold text-white mb-2">Hello Mukti!</h1>
      <h1 className="text-lg sm:text-base text-gray-500 mb-4">
        Here's your finance dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-white">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="w-full min-h-[100px] rounded-2xl border border-white/10 bg-[#0b1220] p-6 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <p className="text-lg text-slate-300">{item.title}</p>

                <div
                  className={`h-12 w-12 rounded-2xl flex items-center justify-center ${item.iconBox}`}
                >
                  <Icon size={20} />
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-xl sm:text-base font-semibold tracking-tight">
                  {item.value}
                </h2>

                <p className={`mt-3 text-sm sm:text-base flex items-center gap-2 ${item.changeColor}`}>
                  <TrendingUp size={16} />
                  {item.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col xl:flex-row gap-4 mt-4">
        <div className="w-full xl:flex-1 min-h-[300px]">
          <Chart />
        </div>

        <div className="w-full xl:w-[380px] min-h-[300px]">
          <ExpensePieChart />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-4 mt-4">
        <div className="w-full lg:w-[380px] xl:w-[420px]">
          <CardDisplay />
        </div>
        <div className="w-full bg-[#0f172a] rounded-2xl p-4 text-white min-h-[200px]">
          <RecentTransactions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;