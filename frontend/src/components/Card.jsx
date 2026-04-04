import { Wifi, CreditCard } from "lucide-react";

export default function Card({
  brand = "VISA",
  last4 = "6541",
  holder = "Mukti Mishra",
  expiry = "12/26",
  gradient = "from-[#1b2450] via-[#202956] to-[#2c366b]",
}) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-[28px]
        border border-white/10
        min-h-[210px] p-6 sm:p-8
        bg-gradient-to-br ${gradient}
        text-white shadow-lg
      `}
    >
      <div className="absolute -top-8 -right-8 h-[120px] w-[120px] rounded-full bg-white/8" />
      <div className="absolute -bottom-10 right-6 h-[180px] w-[180px] rounded-full bg-white/6" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <p className="text-2xl tracking-wide text-white/80">{brand}</p>

          <div className="flex items-center gap-3">
            <Wifi className="h-6 w-6 rotate-90 text-white/70" />
            <CreditCard className="h-7 w-7 text-white/70" />
          </div>
        </div>

        <div className="mt-10 font-mono text-3xl tracking-[0.35em] text-white/95 sm:text-4xl">
          •••• •••• •••• {last4}
        </div>

        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] text-white/45">CARD HOLDER</p>
            <p className="mt-2 text-2xl font-medium text-white/95">{holder}</p>
          </div>

          <div className="text-right">
            <p className="text-xs tracking-[0.2em] text-white/45">EXPIRES</p>
            <p className="mt-2 text-2xl font-medium text-white/95">{expiry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}