// BTC Prices line chart
const data = [32000, 28000, 34000, 25240, 30000, 18000, 36000];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
const yTicks = [0, 10000, 20000, 30000, 40000];
const highlight = 3;

const W = 520,
  H = 260,
  L = 56,
  R = 16,
  T = 16,
  B = 32;
const MAX = 40000;
const x = (i) => L + i * ((W - L - R) / (data.length - 1));
const y = (v) => T + (1 - v / MAX) * (H - T - B);

const path = data
  .map((v, i) => {
    if (i === 0) return `M ${x(0)} ${y(v)}`;
    const mid = (x(i - 1) + x(i)) / 2;
    return `C ${mid} ${y(data[i - 1])}, ${mid} ${y(v)}, ${x(i)} ${y(v)}`;
  })
  .join(" ");

export default function PriceChart() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-semibold text-slate-900">BTC Prices</h2>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        {yTicks.map((t) => (
          <g key={t}>
            <line
              x1={L}
              x2={W - R}
              y1={y(t)}
              y2={y(t)}
              stroke="#e2e8f0"
              strokeDasharray="4 4"
            />
            <text
              x={L - 10}
              y={y(t) + 4}
              textAnchor="end"
              fontSize="11"
              fill="#94a3b8"
            >
              {t === 0 ? "0" : `$${t / 1000}K`}
            </text>
          </g>
        ))}

        {labels.map((l, i) => (
          <text
            key={l}
            x={x(i)}
            y={H - 8}
            textAnchor="middle"
            fontSize="11"
            fill="#94a3b8"
          >
            {l}
          </text>
        ))}

        <rect
          x={x(highlight) - 8}
          y={y(data[highlight])}
          width="16"
          height={y(0) - y(data[highlight])}
          rx="8"
          fill="#dbeafe"
        />
        <path d={path} fill="none" stroke="#3b82f6" strokeWidth="2.5" />
        <circle
          cx={x(highlight)}
          cy={y(data[highlight])}
          r="5"
          fill="#3b82f6"
        />
        <rect
          x={x(highlight) - 30}
          y={y(data[highlight]) + 12}
          width="60"
          height="22"
          rx="6"
          fill="#3b82f6"
        />
        <text
          x={x(highlight)}
          y={y(data[highlight]) + 27}
          textAnchor="middle"
          fontSize="11"
          fill="#fff"
        >
          ${data[highlight].toLocaleString()}
        </text>
      </svg>
    </div>
  );
}
