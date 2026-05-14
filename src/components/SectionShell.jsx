import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export function SectionShell({ id, eyebrow, title, line, children, className }) {
  return (
    <section
      id={id}
      className={cn(
        "relative flex min-h-screen snap-start items-center overflow-hidden px-5 py-24 sm:px-8 lg:px-12",
        className,
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-brand">
            {eyebrow}
          </p>
          <h2 className="max-w-4xl font-display text-4xl font-black leading-[0.95] text-ink sm:text-6xl xl:text-7xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-mutedInk sm:text-xl">{line}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
