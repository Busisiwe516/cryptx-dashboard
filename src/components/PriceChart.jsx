// BTC Prices line chart
export default function PriceChart() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-semibold text-slate-900">BTC Prices</h2>
      <svg viewBox="0 0 400 160" className="h-44 w-full">
        <path
          d="M0 80 C40 40, 80 40, 120 80 S200 130, 240 100 S320 20, 400 30"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2.5"
        />
        <circle cx="120" cy="80" r="5" fill="#3b82f6" />
        <rect x="95" y="96" width="50" height="20" rx="6" fill="#3b82f6" />
        <text x="120" y="110" textAnchor="middle" fontSize="10" fill="#fff">
          $35,240
        </text>
      </svg>
    </div>
  );
}
