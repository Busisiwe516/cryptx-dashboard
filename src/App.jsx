import Layout from "./components/Layout";
import StatCards from "./components/StatCards";
import PriceChart from "./components/PriceChart";
import LiveMarket from "./components/LiveMarket";
import Transactions from "./components/Transactions";

export default function App() {
  return (
    <Layout>
      <section className="grid gap-6 xl:grid-cols-2">
        <StatCards />
        <PriceChart />
      </section>
      <section className="grid gap-6 xl:grid-cols-[3fr_2fr]">
        <LiveMarket />
        <Transactions />
      </section>
    </Layout>
  );
}
