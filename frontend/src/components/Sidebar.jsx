import React from "react";
import {
  X,
  LayoutDashboard,
  ReceiptText,
  Settings,
  ChartNoAxesColumn,
  CardSim,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const items = [
    { title: "Dashboard", Icon: LayoutDashboard, path: "/dashboard" },
    { title: "Insights", Icon: ChartNoAxesColumn, path: "/insights" },
    { title: "Transactions", Icon: ReceiptText, path: "/transactions" },
    {title: "My Cards", Icon: CardSim , path:"/cards"},
    { title: "Settings", Icon: Settings, path: "/" },
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 h-screen w-64 bg-[#11141A] p-4
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block
      `}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 items-center justify-center">
            <img src="/zorvyn.png" alt="logo" />
          </div>
          <h1 className="text-lg font-semibold">Zorvyn</h1>
        </div>

        <button className="md:hidden" onClick={() => setOpen(false)}>
          <X size={22} />
        </button>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.Icon; //sidebar icon

          return (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 rounded-2xl px-3 py-3 transition ${
                  isActive
                    ? "bg-[#171B22] text-[#3d6aff] border border-[#2A313D]"
                    : "text-[#A7B0BE] hover:bg-[#171B22] hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}