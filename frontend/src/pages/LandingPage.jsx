import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  LineChart,
  ShieldCheck,
  Wallet,
  BarChart3,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_28%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(29,78,216,0.14),transparent_32%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-blue-700/10 blur-[130px]" />

      <div className="relative z-10">

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center">
              <img src="/zorvyn.png" alt="logo" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Zorvyn</h1>
          </div>

  

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden sm:inline-flex rounded-full border border-blue-400/10 px-5 py-2.5 text-sm text-white/80 hover:bg-blue-500/10"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 pb-8 pt-4 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-8 mt-5">
          <div className="max-w-2xl lg:-mt-4">
            <h2 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-3xl lg:text-5xl">
              Gain Clarity
              <br />
              Take Control
              <br />
              Grow with
              <span className="text-blue-400"> Zorvyn</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              A modern fintech platform built to help you track spending, manage
              accounts, monitor investments, and understand your financial
              health through one clean dashboard.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-7 py-4 text-sm font-medium text-white hover:opacity-90"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>

              <button className="rounded-full border border-blue-400/10 bg-blue-500/5 px-7 py-4 text-sm font-medium text-white backdrop-blur-xl hover:bg-blue-500/10">
                Learn More
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4 backdrop-blur-xl">
                <Wallet className="mb-3 text-blue-300" size={20} />
                <p className="text-sm font-medium">Account Management</p>
                <p className="mt-1 text-xs text-white/55">
                  Unified finances in one place
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4 backdrop-blur-xl">
                <BarChart3 className="mb-3 text-cyan-300" size={20} />
                <p className="text-sm font-medium">Live Insights</p>
                <p className="mt-1 text-xs text-white/55">
                  Smarter tracking and analytics
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4 backdrop-blur-xl">
                <ShieldCheck className="mb-3 text-blue-300" size={20} />
                <p className="text-sm font-medium">Secure Payments</p>
                <p className="mt-1 text-xs text-white/55">
                  Built for trust and safety
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:-mt-2">
            <div className="absolute -inset-8 rounded-[40px] bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-[32px] border border-blue-400/10 bg-[#050816]/90 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-2xl">
              <div className="mb-4 flex items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/[0.03] px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center text-white font-bold">
                  <img src="/zorvyn.png" alt="logo" />
                </div>
                <div className="flex-1 rounded-xl bg-black/40 px-4 py-3 text-sm text-white/40 border border-blue-400/5">
                  Search transactions, cards, analytics
                </div>
                <div className="hidden sm:flex rounded-full border border-blue-400/10 px-4 py-2 text-xs text-white/60">
                  ⌘ + Space
                </div>
              </div>

              <div className="rounded-[28px] border border-blue-400/10 bg-blue-500/[0.02] p-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/50">Total Balance</p>
                    <h3 className="mt-2 text-3xl font-semibold">$18,750.00</h3>
                  </div>

                  <div className="flex gap-2 text-xs text-white/60">
                    <button className="rounded-full border border-blue-400/10 px-3 py-1.5">
                      1 year
                    </button>
                    <button className="rounded-full bg-blue-500/15 px-3 py-1.5 text-white">
                      4 month
                    </button>
                    <button className="rounded-full border border-blue-400/10 px-3 py-1.5">
                      1 month
                    </button>
                  </div>
                </div>

                <div className="relative h-64 overflow-hidden rounded-2xl border border-blue-400/5 bg-black/30">
                  <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,transparent,rgba(59,130,246,0.12),transparent)]" />

                  <svg
                    viewBox="0 0 500 220"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                  >
                    <path
                      d="M40 150 C100 80, 170 70, 240 95 S380 170, 460 145"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M40 165 C110 140, 170 150, 240 145 S380 110, 460 80"
                      stroke="#22d3ee"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <circle cx="240" cy="95" r="7" fill="#60a5fa" />
                    <line
                      x1="240"
                      y1="95"
                      x2="240"
                      y2="185"
                      stroke="#60a5fa"
                      strokeOpacity="0.35"
                      strokeDasharray="6 6"
                    />
                  </svg>

                  <div className="absolute left-[47%] top-[18%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20">
                    $61,968
                  </div>

                  <div className="absolute bottom-4 left-5 right-5 flex justify-between text-sm text-white/35">
                    <span>14 Mar</span>
                    <span>16 Mar</span>
                    <span>18 Mar</span>
                    <span>19 Mar</span>
                    <span>21 Mar</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-blue-400/10 bg-blue-500/[0.03] p-5">
                  <p className="text-sm text-white/50">Balance</p>
                  <div className="mt-2 flex items-end gap-3">
                    <h4 className="text-4xl font-semibold">$69,390</h4>
                    <span className="pb-1 text-sm text-emerald-400">↑ 3.80%</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <button className="rounded-full border border-blue-400/10 px-4 py-2 text-xs text-white/70">
                      Pay
                    </button>
                    <button className="rounded-full border border-blue-400/10 px-4 py-2 text-xs text-white/70">
                      Withdraw
                    </button>
                    <button className="rounded-full border border-blue-400/10 px-4 py-2 text-xs text-white/70">
                      Request
                    </button>
                  </div>
                </div>

                <div className="rounded-[24px] border border-blue-400/10 bg-blue-500/[0.03] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/50">Investments</p>
                      <p className="mt-1 text-white/80">$24,680.00</p>
                    </div>
                    <div className="text-sm text-emerald-400">↑ 3.80%</div>
                  </div>

                  <div className="mt-6 h-24 rounded-2xl bg-black/30 border border-blue-400/5 flex items-end justify-between px-4 pb-4">
                    {[40, 70, 55, 90, 60, 78].map((h, i) => (
                      <div
                        key={i}
                        className="w-6 rounded-t-xl bg-gradient-to-t from-blue-500 to-cyan-400"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/10 px-4 py-3 backdrop-blur-xl">
              <LineChart size={18} className="text-blue-300" />
              <div>
                <p className="text-xs text-white/50">Monthly Growth</p>
                <p className="text-sm font-medium">+18.4% revenue trend</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}