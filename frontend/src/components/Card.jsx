import { Wifi, CreditCard } from "lucide-react";

export default function CardDisplay() {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl
        border border-white/10
        flex flex-col justify-between
        min-h-[200px] p-5 sm:p-6
        bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]
        text-white
        shadow-lg shadow-blue-500/10
      "
    >
      <div className="absolute -top-10 -right-10 w-[140px] h-[140px] bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 left-10 w-[120px] h-[120px] bg-blue-400/10 blur-2xl rounded-full" />

      <div className="flex justify-between items-start relative z-10">
        <div>
          <div className="text-xs text-gray-400 tracking-widest uppercase">
            Premium Card
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Wifi className="w-5 h-5 text-gray-400 rotate-90" />
          <CreditCard className="w-6 h-6 text-blue-400" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="font-mono tracking-widest text-gray-200 text-base sm:text-lg mb-4">
          •••• •••• •••• 4821
        </div>

        <div className="flex justify-between items-end">
          <div>
            <div className="text-[10px] text-gray-500 tracking-widest">
              CARD HOLDER
            </div>
            <div className="text-white font-medium text-sm">
              Mukti Mishra
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] text-gray-500 tracking-widest">
              EXPIRES
            </div>
            <div className="text-white font-medium text-sm">
              12/28
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}