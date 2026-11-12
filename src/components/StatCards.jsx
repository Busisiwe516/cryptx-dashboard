import StatCard from "./StatCard";
import { stats } from "../data/dashboardData";

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8">
      {stats.map((s) => (
        <StatCard key={s.coin} {...s} />
      ))}
    </div>
  );
}
