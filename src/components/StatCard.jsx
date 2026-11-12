import { Bitcoin, Gem, Coins, CircleDollarSign } from "lucide-react";

const icons = {
  Bitcoin,
  Ethereum: Gem,
  Litecoin: Coins,
  Cardano: CircleDollarSign,
};

export default function StatCard({ coin, sym, value, change, up, color }) {
  const Icon = icons[coin] ?? Coins;
  return (
    <div>
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
        >
          <Icon size={22} className="text-white" />
        </div>
        <span
          className={`text-xs font-medium ${up ? "text-green-600" : "text-red-500"}`}
        >
          {up ? "▲" : "▼"} {change}
        </span>
      </div>
      <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-400">
        {coin} - {sym}
      </p>
    </div>
  );
}
