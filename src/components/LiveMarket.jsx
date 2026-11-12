// Live Market table
import { liveMarket } from "../data/dashboardData";
import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function LiveMarket() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <h3 className="font-bold text-sm mb-4">Live Market</h3>
      <div className="space-y-5">
        {liveMarket.map((coin) => (
          <div key={coin.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3 w-[140px]">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${coin.color}`}
              >
                {coin.name[0]}
              </div>
              <div>
                <p className="text-sm font-semibold">{coin.name}</p>
                <p
                  className={`text-xs ${coin.positive ? "text-green-500" : "text-red-500"}`}
                >
                  {coin.change}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium w-[100px]">{coin.price}</p>
            <div className="w-20 h-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={coin.spark.map((v) => ({ v }))}>
                  <Line
                    type="monotone"
                    dataKey="v"
                    stroke={coin.positive ? "#3b82f6" : "#f87171"}
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
