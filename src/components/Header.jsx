// Top bar (search, icons, profile)
import { Search, Bell, Settings, ChevronDown, Menu } from "lucide-react";

export default function Header({ onMenu }) {
  return (
    <header className="flex items-center gap-4 bg-white px-4 py-4 sm:px-8">
      <button className="lg:hidden" onClick={onMenu} aria-label="Open menu">
        <Menu />
      </button>
      <div className="relative hidden max-w-md flex-1 sm:block">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
        <input
          placeholder="Search"
          className="w-full rounded-xl bg-slate-100 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
      <div className="ml-auto flex items-center gap-4">
        <Bell size={18} className="text-slate-500" />
        <Settings size={18} className="text-slate-500" />
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-slate-800" />
          <div className="hidden text-sm leading-tight sm:block">
            <p className="font-semibold">Busisiwe</p>
            <p className="text-xs text-slate-400">Member</p>
          </div>
          <ChevronDown size={14} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}
