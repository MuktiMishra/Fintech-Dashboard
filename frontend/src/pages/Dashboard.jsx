import React from "react";
import { DollarSign, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import Chart from "../components/Chart";
import ExpensePieChart from "../components/ExpensePieChart";
import CardDisplay from "../components/Card";
import RecentTransactions from "../components/RecentTransactions";

const stats = [
  {
    title: "Total Balance",
    value: "$32,126.00",
    change: "+0.0% vs last month",
    icon: DollarSign,
    iconBox: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "Income",
    value: "$0.00",
    change: "+0.0% vs last month",
    icon: TrendingUp,
    iconBox: "bg-emerald-500/10 text-emerald-400",
  },
  {
    title: "Expenses",
    value: "$0.00",
    change: "+0.0% vs last month",
    icon: TrendingDown,
    iconBox: "bg-rose-500/10 text-rose-400",
  },
  {
    title: "Savings",
    value: "$0.00",
    change: "+0.0% vs last month",
    icon: PiggyBank,
    iconBox: "bg-amber-500/10 text-amber-400",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full p-3 sm:p-4">
      <h1 className="text-xl sm:text-lg font-bold text-white mb-2">Hello Mukti!</h1>
      <h1 className="text-lg sm:text-base text-gray-500 mb-4">Here's your finance dashboard</h1>

      {/* Top cards */}
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

                <p className="mt-3 text-emerald-400 text-sm sm:text-base flex items-center gap-2">
                  <TrendingUp size={16} />
                  {item.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="flex flex-col xl:flex-row gap-4 mt-4">
        <div className="w-full xl:flex-1 min-h-[300px]">
          <Chart />
        </div>

        <div className="w-full xl:w-[380px] min-h-[300px]">
          <ExpensePieChart />
        </div>
      </div>

      {/* Bottom section */}
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