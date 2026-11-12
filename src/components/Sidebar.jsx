//left navigation
import {
  LayoutGrid,
  LineChart,
  ArrowLeftRight,
  Wallet,
  CalendarDays,
  Settings,
  LogOut,
  Infinity as InfinityIcon,
} from "lucide-react";

const nav = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Chart", icon: LineChart },
  { label: "Transactions", icon: ArrowLeftRight },
  { label: "Wallet", icon: Wallet },
  { label: "Market", icon: CalendarDays },
  { label: "Settings", icon: Settings },
  { label: "Logout", icon: LogOut },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/30 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed z-30 h-full w-60 bg-white p-6 transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center gap-2 text-xl font-bold text-slate-900">
          <InfinityIcon className="text-blue-600" /> CryptX
        </div>
        <nav className="space-y-1">
          {nav.map(({ label, icon: Icon }, i) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${
                i === 0
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              <Icon size={18} /> {label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
