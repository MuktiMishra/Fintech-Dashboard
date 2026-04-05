import React from "react";
import { Link } from "react-router-dom";
import { useFinance } from "../context/FinanceContext";

const RecentTransactions = () => {
  const { state } = useFinance();
  const { transactions } = state;

  const recentTransactions = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#081225] p-4 sm:p-6 text-white">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold">Recent Transactions</h2>

        <Link
          to="/transactions"
          className="text-sm sm:text-base text-blue-400 hover:text-blue-300"
        >
          View all →
        </Link>
      </div>

      <div className="space-y-4">
        {recentTransactions.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 hover:bg-white/5 transition"
          >
            <div>
              <h3 className="text-sm sm:text-base font-medium">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {item.category} · {item.date}
              </p>
            </div>

            <div
              className={`text-sm sm:text-lg font-semibold ${
                item.type === "income" ? "text-emerald-400" : "text-white"
              }`}
            >
              {item.type === "income" ? "+" : "-"}$
              {Math.abs(item.amount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;