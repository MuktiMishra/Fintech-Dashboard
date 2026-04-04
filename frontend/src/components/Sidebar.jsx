// import { Home, InspectIcon, LayoutDashboard } from 'lucide-react';
// import React, { useState } from 'react'
// import { DynamicIcon } from 'lucide-react/dynamic';
// const Sidebar = () => {
//   const items = [
//     {title: 'Dashboard', Icon : LayoutDashboard},
//     {title:'Transaction', Icon : InspectIcon}
//   ]
//   const [activeIndex , setActiveIndex] = useState(0);

//   return (
//     <aside className='h-screen w-64 bg-[#11141A] p-4 rounded-lg'>
//       <div className='h-10 w-10 mb-6 flex'>
//         <img src='/zorvyn.png' />
//         <p className='text-lg font-bold text-white p-2'>Zorvyn</p>
//       </div>

//       <nav className='space-y-2'>
//         {items.map((item, i) => {
//           const active = i==activeIndex;
//           const IconComponent = item.Icon;

//           return (
//             <button
//               key={item.title}
//               onClick={()=>setActiveIndex(i)}
//               className={`w-full flex items-center gap-3 rounded-2xl px-3 py-3 transition-transform ${
//                 active
//                   ? "bg-[#171B22] text-[#8BFF3D] border border-[#2A313D]"
//                   : "text-[#A7B0BE] hover:bg-[#171B22] hover:text-white"
//               }`}
//             >
//               <IconComponent size={24} />
//               <span className='text-sm font-medium'>{item.title}</span>

//             </button>
//           )
//         })}
//       </nav>
//     </aside>
//   )
// }

// export default Sidebar;
import React, { useState } from "react";
import {
  X,
  LayoutDashboard,
  ReceiptText,
  Settings,
  ChartNoAxesColumn,
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { title: "Dashboard", Icon: LayoutDashboard },
    { title: "Analytics", Icon: ChartNoAxesColumn },
    { title: "Transactions", Icon: ReceiptText },
    { title: "Settings", Icon: Settings },
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
      {/* Top row inside sidebar */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-white"></div>
          <h1 className="text-lg font-semibold">Zorvyn</h1>
        </div>

        {/* close button only mobile */}
        <button className="md:hidden" onClick={() => setOpen(false)}>
          <X size={22} />
        </button>
      </div>

      <nav className="space-y-2">
        {items.map((item, i) => {
          const Icon = item.Icon;
          const active = i === activeIndex;

          return (
            <button
              key={item.title}
              onClick={() => {
                setActiveIndex(i);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 rounded-2xl px-3 py-3 ${
                active
                  ? "bg-[#171B22] text-[#8BFF3D] border border-[#2A313D]"
                  : "text-[#A7B0BE] hover:bg-[#171B22] hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.title}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}