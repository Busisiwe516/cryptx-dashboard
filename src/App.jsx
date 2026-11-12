import Layout from "./components/Layout";
import StatCards from "./components/StatCards";
import PriceChart from "./components/PriceChart";
import LiveMarket from "./components/LiveMarket";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <Layout>
      {/* OVERVIEW */}
      <section id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mb-6">
          <StatCards />
          <div id="statistic">
            <PriceChart />
          </div>
        </div>
      </section>

      {/* LIVE MARKET + TRANSACTION */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
        <div id="live-market">
          <LiveMarket />
        </div>
        <div id="transaction">
          <Transactions />
        </div>
      </section>
    </Layout>
  );
}
