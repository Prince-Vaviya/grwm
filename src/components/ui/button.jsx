import React from "react";
import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-[#B23A48] text-white hover:bg-[#982F3C] shadow-cyan border-[#B23A48]",
  ghost:
    "border-brand-border bg-white text-ink hover:bg-brand-soft/40 hover:border-brand",
};

export function Button({ className, variant = "primary", ...props }) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border px-6 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:ring-offset-2 focus:ring-offset-[#FFFBF7]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
