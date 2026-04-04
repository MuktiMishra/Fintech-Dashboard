import React from "react";

export default function LandingPage({ onLogin, onSignup }) {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-500"></div>
          <h1 className="text-xl font-bold">FinanceFlow</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onLogin}
            className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5"
          >
            Login
          </button>
          <button
            onClick={onSignup}
            className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
          Smart Finance Dashboard
        </div>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Manage your money with
          <span className="text-blue-400"> clarity </span>
          and confidence
        </h2>

        <p className="mt-5 max-w-2xl text-sm text-slate-400 sm:text-base">
          Track income, expenses, insights, and transactions in one clean and
          modern dashboard.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={onSignup}
            className="rounded-2xl bg-blue-500 px-6 py-3 font-medium hover:bg-blue-600"
          >
            Get Started
          </button>
          <button
            onClick={onLogin}
            className="rounded-2xl border border-white/15 px-6 py-3 font-medium hover:bg-white/5"
          >
            Login
          </button>
        </div>

        <div className="mt-14 grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-left">
            <h3 className="text-lg font-semibold">Track Transactions</h3>
            <p className="mt-2 text-sm text-slate-400">
              Keep all your income and expenses organized in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-left">
            <h3 className="text-lg font-semibold">Visual Insights</h3>
            <p className="mt-2 text-sm text-slate-400">
              Understand your money with simple charts and analytics.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-left">
            <h3 className="text-lg font-semibold">Clean Dashboard</h3>
            <p className="mt-2 text-sm text-slate-400">
              A modern finance UI that is easy to use and responsive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}