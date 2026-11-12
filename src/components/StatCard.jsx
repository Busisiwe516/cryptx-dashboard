export default function StatCard({ coin, value, change, color }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-lg ${color}`} />
        <span className="text-xs font-medium text-green-600">{change}</span>
      </div>
      <p className="mt-3 text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-400">{coin}</p>
    </div>
  );
}
