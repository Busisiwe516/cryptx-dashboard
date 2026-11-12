// The page shell (sidebar + header + main content area)
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-800">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <div className="p-4 sm:p-6 pb-0">
          <Header />
        </div>
        <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
