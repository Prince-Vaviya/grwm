import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function SectionShell({ 
  id, 
  eyebrow, 
  title, 
  line, 
  children, 
  className,
  contentClassName,
  textClassName,
  reversed
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen snap-start items-center overflow-hidden px-6 py-24 sm:px-10 lg:px-16",
        className,
      )}
    >
      <div className={cn(
        "mx-auto flex w-full max-w-[1400px] flex-col gap-16",
        contentClassName
      )}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className={cn("relative z-10 w-full", textClassName)}
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-brand">
            {eyebrow}
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-black leading-[0.95] text-ink sm:text-6xl xl:text-7xl">
            {title}
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-mutedInk sm:text-2xl">{line}</p>
        </motion.div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}
