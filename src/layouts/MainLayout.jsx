import React from "react";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--avelion-neutral-50)] text-[var(--avelion-neutral-800)] font-sans">
      <Navbar />
      {/* Sin py-10, para no empujar el contenido */}
      <main className="px 0">
        {children}
      </main>
    </div>
  );
}
