import React from "react";
import { transactions } from "../data/transactions";
import {Link} from "react-router-dom"

const RecentTransactions = () => {
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
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lg">
                {item.icon}
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm sm:text-base font-medium">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {item.category} ·{" "}
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <div
              className={`shrink-0 text-sm sm:text-lg font-semibold ${
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