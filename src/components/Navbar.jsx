import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar({ sections, activeId, progress }) {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  return (
    <>
      <nav className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-brand-border bg-white/80 px-3 py-2 shadow-[0_18px_48px_rgba(32,26,28,0.08)] backdrop-blur-xl lg:flex">
        <a href="#hero" className="px-4 text-sm font-black tracking-[0.26em] text-ink">
          GRWM
        </a>
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`rounded-full px-3 py-2 text-xs font-medium transition ${
              activeId === section.id ? "bg-brand text-white" : "text-mutedInk hover:bg-brand-soft/45 hover:text-ink"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </a>
        ))}
        <button
          type="button"
          onClick={() => setHighContrast((value) => !value)}
          className={`ml-2 rounded-full border px-3 py-2 text-xs font-bold transition ${
            highContrast
              ? "border-ink bg-ink text-white"
              : "border-brand-border bg-white text-mutedInk hover:text-ink"
          }`}
          aria-pressed={highContrast}
        >
          HC
        </button>
      </nav>
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-brand-soft/50">
        <motion.div
          className="h-full bg-gradient-to-r from-brand via-brand-soft to-warning"
          style={{ scaleX: progress, transformOrigin: "0% 50%" }}
        />
      </div>
    </>
  );
}
