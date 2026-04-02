import React from 'react'

const Sidebar = () => {
  const items = ["Dashboard", "Transaction", "Insights", "Cards", "Settings"]

  return (
    <aside className='h-screen w-64 bg-[#11141A] p-4 rounded-lg'>
      <div className='h-10 w-10 mb-6 bg-white'></div>

      <nav className='space-y-2'>
        {items.map((item, i) => {
          const active = i === 0

          return (
            <button
              key={item}
              className={`w-full flex items-center gap-3 rounded-2xl px-3 py-3 transition ${
                active
                  ? "bg-[#171B22] text-[#8BFF3D] border border-[#2A313D]"
                  : "text-[#A7B0BE] hover:bg-[#171B22] hover:text-white"
              }`}
            >
              <span className='text-sm font-medium'>{item}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar;