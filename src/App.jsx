import Layout from "./components/Layout";
import StatCards from "./components/StatCards";
import PriceChart from "./components/PriceChart";
import LiveMarket from "./components/LiveMarket";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <Layout>
      {/* TOP ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mb-6">
        <StatCards />
        <PriceChart />
      </div>

      {/* BOTTOM ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
        <LiveMarket />
        <Transactions />
      </div>
    </Layout>
  );
}
