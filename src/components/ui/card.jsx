import React from "react";
import { cn } from "../../lib/utils";

export function GlassCard({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "motion-card relative overflow-hidden rounded-xl border border-brand-border bg-white p-5 shadow-[0_18px_60px_rgba(32,26,28,0.08)]",
        "before:absolute before:inset-0 before:pointer-events-none before:bg-gradient-to-br before:from-brand-soft/30 before:to-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
