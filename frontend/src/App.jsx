import React, { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./layout/dashboard";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white md:flex">
      {/* Mobile header */}
      <header className="md:hidden flex items-center justify-between px-4 py-4 border-b border-white/10 bg-[#11141A]">
        {/* Left logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-white"></div>
          <h1 className="text-lg font-semibold">Zorvyn</h1>
        </div>

        {/* Right hamburger */}
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </header>

      {/* Dark overlay on mobile */}
      {/* {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )} */}

      <Sidebar open={open} setOpen={setOpen} />

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6">
        <Dashboard />
      </main>
    </div>
  );
}