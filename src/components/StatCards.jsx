import { stats } from "../data/dashboardData";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3"
        >
          {/* Top row: icon + change */}
          <div className="flex items-center justify-between">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>
            <span
              className={`text-xs font-semibold ${item.change.includes("-") ? "text-red-500" : "text-green-500"}`}
            >
              {item.change}
            </span>
          </div>

          {/* MIDDLE - THIS WAS MISSING */}
          <div>
            <p className="text-sm text-gray-400 font-medium">{item.name}</p>
            <p className="text-xs text-gray-400">{item.sub}</p>
          </div>

          {/* Bottom: price */}
          <p className="text-xl font-bold text-slate-800">{item.price}</p>
        </div>
      ))}
    </div>
  );
}
