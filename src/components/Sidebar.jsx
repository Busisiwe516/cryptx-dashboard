//left navigation
import { useState } from "react";

const menu = [
  { id: "overview", label: "Overview", icon: "◧" },
  { id: "transaction", label: "Transactions", icon: "⇄" },
  { id: "live-market", label: "Live Market", icon: "📈" },
  { id: "statistic", label: "BTC Prices", icon: "₿" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("overview");

  const goTo = (id) => {
    setActive(id);
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* MOBILE HAMBURGER */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow"
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-40 w-60 bg-white border-r p-5 flex flex-col justify-between
        transform transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div>
          <h2 className="font-bold text-lg mb-8">CryptX</h2>
          <nav className="space-y-2">
            {menu.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-left transition
                ${active === item.id ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"}`}
              >
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-2 text-sm text-gray-400">
          <p>Wallet</p>
          <p>Mail Box</p>
          <p>Setting</p>
          <p>Logout</p>
        </div>
      </aside>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
        />
      )}
    </>
  );
}
