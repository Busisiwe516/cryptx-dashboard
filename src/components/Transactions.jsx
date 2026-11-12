// STEP 8: Transactions list
import { transactions } from "../data/dashboardData";

export default function Transactions() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-semibold text-slate-900">Transactions</h2>
      <ul className="divide-y divide-slate-100">
        {transactions.map((t, i) => (
          <li key={i} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${t.up ? "bg-green-500" : "bg-red-500"}`}
              />
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-slate-400">{t.date}</p>
              </div>
            </div>
            <p className="text-sm font-semibold">{t.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
