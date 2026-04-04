import React, { useMemo, useState } from "react";
import { transactions } from "../data/transactions";

const TransactionsPage = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredTransactions = useMemo(() => {
    let data = transactions.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy === "latest") {
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "amountHigh") {
      data.sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
    } else if (sortBy === "amountLow") {
      data.sort((a, b) => Math.abs(a.amount) - Math.abs(b.amount));
    } else if (sortBy === "income") {
      data.sort((a, b) => {
        if (a.type === b.type) return new Date(b.date) - new Date(a.date);
        return a.type === "income" ? -1 : 1;
      });
    } else if (sortBy === "expense") {
      data.sort((a, b) => {
        if (a.type === b.type) return new Date(b.date) - new Date(a.date);
        return a.type === "expense" ? -1 : 1;
      });
    }

    return data;
  }, [search, sortBy]);

  return (
    <div className="min-h-screen bg-[#020817] p-4 sm:p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">All Transactions</h1>
          <p className="text-slate-400 mt-1 text-sm sm:text-base">
            Search and sort all your transactions
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search by title or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:max-w-md rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 outline-none focus:border-blue-500"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 outline-none"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="amountHigh">Amount: High to Low</option>
            <option value="amountLow">Amount: Low to High</option>
            <option value="income">Income First</option>
            <option value="expense">Expense First</option>
          </select>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081225]">
          <div className="hidden md:grid grid-cols-5 gap-4 border-b border-white/10 px-6 py-4 text-sm text-slate-400">
            <div>Transaction</div>
            <div>Category</div>
            <div>Date</div>
            <div>Type</div>
            <div className="text-right">Amount</div>
          </div>

          <div className="divide-y divide-white/10">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-5 gap-3 px-4 py-4 md:px-6 md:py-5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-lg">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-medium">{item.title}</p>
                    </div>
                  </div>

                  <div className="text-slate-300 md:self-center">
                    <span className="md:hidden text-slate-500 mr-2">Category:</span>
                    {item.category}
                  </div>

                  <div className="text-slate-300 md:self-center">
                    <span className="md:hidden text-slate-500 mr-2">Date:</span>
                    {new Date(item.date).toLocaleDateString()}
                  </div>

                  <div className="md:self-center">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        item.type === "income"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-red-500/15 text-red-400"
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <div
                    className={`md:self-center md:text-right font-semibold ${
                      item.type === "income" ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    <span className="md:hidden text-slate-500 mr-2">Amount:</span>
                    {item.type === "income" ? "+" : "-"}$
                    {Math.abs(item.amount).toFixed(2)}
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-10 text-center text-slate-400">
                No transactions found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;