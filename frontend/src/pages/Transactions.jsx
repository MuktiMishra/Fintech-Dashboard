import React, { useMemo } from "react";
import { useFinance } from "../context/FinanceContext";

export default function TransactionsPage() {
  const { state, dispatch } = useFinance();
  const { transactions, filters } = state;

  const filteredTransactions = useMemo(() => {
    let data = [...transactions];

    data = data.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        item.category.toLowerCase().includes(filters.search.toLowerCase());

      const matchesType =
        filters.type === "all" ? true : item.type === filters.type;

      return matchesSearch && matchesType;
    });

    if (filters.sortBy === "latest") {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (filters.sortBy === "oldest") {
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (filters.sortBy === "amountHigh") {
      data.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
    } else if (filters.sortBy === "amountLow") {
      data.sort((a, b) => Math.abs(a.amount) - Math.abs(b.amount));
    }

    return data;
  }, [transactions, filters]);

  return (
    <div className="min-h-screen bg-[#020817] p-4 sm:p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold mb-6">All Transactions</h1>

        <div className="mb-6 flex flex-col gap-3 md:flex-row">
          <input
            type="text"
            placeholder="Search transactions..."
            value={filters.search}
            onChange={(e) =>
              dispatch({
                type: "SET_FILTERS",
                payload: { search: e.target.value },
              })
            }
            className="w-full md:max-w-md rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 outline-none"
          />

          <select
            value={filters.type}
            onChange={(e) =>
              dispatch({
                type: "SET_FILTERS",
                payload: { type: e.target.value },
              })
            }
            className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 outline-none"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            value={filters.sortBy}
            onChange={(e) =>
              dispatch({
                type: "SET_FILTERS",
                payload: { sortBy: e.target.value },
              })
            }
            className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 outline-none"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="amountHigh">Amount High to Low</option>
            <option value="amountLow">Amount Low to High</option>
          </select>
        </div>

        <div className="space-y-3">
          {filteredTransactions.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-white/10 bg-[#0f172a] p-4 flex items-center justify-between"
            >
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-slate-400">
                  {item.category} • {item.date}
                </p>
              </div>

              <div
                className={`font-semibold ${
                  item.type === "income" ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {item.type === "income" ? "+" : "-"}$
                {Math.abs(item.amount).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}