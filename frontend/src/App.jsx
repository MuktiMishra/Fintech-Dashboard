import React, { useState } from "react";
import { Menu } from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import TransactionsPage from "./pages/Transactions";
import InsightsPage from "./pages/InsightsPage";
import LandingPage from "./pages/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CardsPage from "./pages/CardsPage";
import { FinanceProvider } from "./context/FinanceContext";

function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#0D1117] text-white md:flex">
      {/* mobile header */}
      <header className="md:hidden flex items-center justify-between px-4 py-4 border-b border-white/10 bg-[#11141A]">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white"></div>
          <h1 className="text-lg font-semibold">Zorvyn</h1>
        </div>

        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </header>

      {/* sidebar only here */}
      <Sidebar open={open} setOpen={setOpen} />

      <main className="flex-1 p-4 md:p-6">{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <FinanceProvider>
      <Routes>
        {/* public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* dashboard pages with sidebar */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/transactions"
          element={
            <DashboardLayout>
              <TransactionsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/insights"
          element={
            <DashboardLayout>
              <InsightsPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/cards"
          element={
            <DashboardLayout>
              <CardsPage />
            </DashboardLayout>
          }
        />
      </Routes>
      </FinanceProvider>
    </BrowserRouter>
  );
}