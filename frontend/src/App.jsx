import React, { useState } from "react";
import { Menu } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./layout/dashboard";
import TransactionsPage from "./layout/Transactions";
import InsightsPage from "./layout/InsightsPage";

function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#0D1117] text-white md:flex">
      <header className="md:hidden flex items-center justify-between px-4 py-4 border-b border-white/10 bg-[#11141A]">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white"></div>
          <h1 className="text-lg font-semibold">Zorvyn</h1>
        </div>

        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </header>

      <Sidebar open={open} setOpen={setOpen} />

      <main className="flex-1 p-4 md:p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}