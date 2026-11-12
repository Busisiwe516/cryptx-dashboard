// Live Market table
import Trendline from "./Trendline";
import { market } from "../data/dashboardData";

export default function LiveMarket() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-semibold text-slate-900">Trendline</h2>
      <ul className="divide-y divide-slate-100">
        {market.map((m) => (
          <li key={m.name} className="flex items-center gap-3 py-3">
            <div className={`h-8 w-8 shrink-0 rounded-full ${m.color}`} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">{m.name}</p>
              <p className="text-xs text-slate-400">{m.sym}</p>
            </div>
            <p className="hidden text-sm text-slate-600 sm:block">{m.price}</p>
            <Trendline up={m.up} />
            <span
              className={`w-14 text-right text-xs font-medium ${m.up ? "text-green-600" : "text-red-500"}`}
            >
              {m.change}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
