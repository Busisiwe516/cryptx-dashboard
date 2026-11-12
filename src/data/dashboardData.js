// all the dashboard content lives here.
export const stats = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    value: "$40,291",
    change: "+0.25%",
    color: "bg-orange-400",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    value: "$18,291",
    change: "+0.25%",
    color: "bg-blue-600",
  },
  {
    id: 3,
    name: "Litecoin",
    symbol: "ITU",
    value: "$8,291",
    change: "+0.25%",
    color: "bg-blue-400",
  },
  {
    id: 4,
    name: "Binance",
    symbol: "BNB",
    value: "$3,291",
    change: "-2.05%",
    color: "bg-green-500",
  },
];

export const liveMarket = [
  {
    name: "Ethereum",
    price: "38,789.00",
    change: "+4.20%",
    positive: true,
    color: "bg-purple-500",
    spark: [10, 15, 12, 20, 18, 25, 22, 30],
  },
  {
    name: "Bitcoin",
    price: "21,789.00",
    change: "+4.20%",
    positive: true,
    color: "bg-orange-400",
    spark: [20, 18, 22, 15, 25, 20, 28, 26],
  },
  {
    name: "Litecoin",
    price: "8,789.00",
    change: "-2.10%",
    positive: false,
    color: "bg-blue-400",
    spark: [30, 25, 28, 20, 22, 18, 15, 12],
  },
  {
    name: "Cardano",
    price: "5,789.00",
    change: "+3.20%",
    positive: true,
    color: "bg-green-500",
    spark: [12, 18, 15, 22, 20, 26, 24, 30],
  },
];

export const btcPrices = [
  { name: "1", price: 30000 },
  { name: "2", price: 32000 },
  { name: "3", price: 28000 },
  { name: "4", price: 35000 },
  { name: "5", price: 35740 },
  { name: "6", price: 25000 },
  { name: "7", price: 32000 },
  { name: "8", price: 38000 },
];

export const transactions = [
  { name: "Ethereum", date: "2 min ago", amount: "$24,302" },
  { name: "Bitcoin", date: "10 min ago", amount: "$4,157" },
  { name: "Bitcoin", date: "1 hour ago", amount: "$24,784" },
  { name: "Litecoin", date: "2 hours ago", amount: "$14,265" },
];
