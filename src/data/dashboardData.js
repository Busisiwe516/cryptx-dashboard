// STEP 1: all the dashboard content lives here. Update with the Figma values.
export const stats = [
  {
    coin: "Bitcoin",
    value: "$40,291",
    change: "+0.25%",
    color: "bg-orange-400",
  },
  {
    coin: "Ethereum",
    value: "$18,291",
    change: "+0.18%",
    color: "bg-blue-500",
  },
  { coin: "Ripple", value: "$8,291", change: "+0.12%", color: "bg-sky-500" },
  { coin: "Tether", value: "$3,291", change: "+0.05%", color: "bg-green-500" },
];

export const market = [
  {
    name: "Ethereum",
    sym: "ETH",
    price: "$18,291 USD",
    change: "+2.4%",
    color: "bg-blue-500",
    up: true,
  },
  {
    name: "Bitcoin",
    sym: "BTC",
    price: "$40,291 USD",
    change: "-1.1%",
    color: "bg-orange-400",
    up: false,
  },
  {
    name: "Litecoin",
    sym: "LTC",
    price: "$8,291 USD",
    change: "+0.8%",
    color: "bg-sky-500",
    up: true,
  },
  {
    name: "Cardano",
    sym: "ADA",
    price: "$3,291 USD",
    change: "-0.3%",
    color: "bg-green-500",
    up: false,
  },
];

export const transactions = [
  { name: "Ethereum", date: "12 Nov 2026", amount: "$24,102", up: true },
  { name: "Bitcoin", date: "11 Nov 2026", amount: "$4,357", up: false },
  { name: "Bitcoin", date: "10 Nov 2026", amount: "$54,764", up: false },
  { name: "Litecoin", date: "09 Nov 2026", amount: "$14,265", up: false },
];
