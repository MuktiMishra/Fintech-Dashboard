import React from "react";
import Card from "../components/Card";

const cardDetails = [
  {
    id: 1,
    brand: "VISA",
    last4: "6541",
    holder: "Mukti Mishra",
    expiry: "12/26",
    gradient: "from-[#1b2450] via-[#202956] to-[#2c366b]",
    limit: 5000,
    used: 1240,
  },
  {
    id: 2,
    brand: "Mastercard",
    last4: "9823",
    holder: "Mukti Mishra",
    expiry: "08/27",
    gradient: "from-[#23183d] via-[#2b1f4b] to-[#3a2c61]",
    limit: 8000,
    used: 3200,
  },
];

function CardInfo({ limit, used }) {
  const available = limit - used;
  const utilization = Math.round((used / limit) * 100);

  return (
    <div className="rounded-[24px] border border-white/10 bg-[#0b1220] p-5">
      <h2 className="mb-5 text-lg font-semibold text-white">Card Details</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs text-slate-400">Credit Limit</p>
          <p className="mt-1 text-lg font-semibold text-white">${limit.toLocaleString()}</p>
        </div>

        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs text-slate-400">Amount Used</p>
          <p className="mt-1 text-lg font-semibold text-white">${used.toLocaleString()}</p>
        </div>

        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs text-slate-400">Available</p>
          <p className="mt-1 text-lg font-semibold text-white">
            ${available.toLocaleString()}
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 p-4">
          <p className="text-xs text-slate-400">Utilization</p>
          <p className="mt-1 text-lg font-semibold text-emerald-400">{utilization}%</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
        <p>Usage</p>
        <p>
          {utilization}% of ${limit.toLocaleString()}
        </p>
      </div>

      <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-[#1c2540]">
        <div
          className="h-full rounded-full bg-emerald-400"
          style={{ width: `${utilization}%` }}
        />
      </div>
    </div>
  );
}

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-[#020817] p-4 text-white sm:p-6">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xl sm:text-2xl text-slate-300">
          Manage your credit and debit cards.
        </p>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {cardDetails.map((item) => (
            <div key={item.id} className="space-y-5">
              <Card
                brand={item.brand}
                last4={item.last4}
                holder={item.holder}
                expiry={item.expiry}
                gradient={item.gradient}
              />

              <CardInfo limit={item.limit} used={item.used} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}