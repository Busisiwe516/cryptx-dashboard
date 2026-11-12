// small line used inside Live Market rows
export default function LiveMarketTrend({ up }) {
  const d = up
    ? "M0 20 L15 14 L30 18 L45 8 L60 12 L80 4"
    : "M0 6 L15 12 L30 8 L45 16 L60 12 L80 20";
  return (
    <svg viewBox="0 0 80 24" className="h-6 w-20">
      <path
        d={d}
        fill="none"
        stroke={up ? "#16a34a" : "#ef4444"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
