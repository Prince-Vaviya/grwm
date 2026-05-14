import React from "react";
import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";
import { competitors } from "../data/pitchData";
import { GlassCard } from "./ui/card";

function Cell({ value, highlight }) {
  if (value === true) {
    return (
      <span className={`inline-flex items-center gap-2 ${highlight ? "text-mutedInk" : "text-success"}`}>
        <Check className="h-5 w-5" /> Yes
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-2 text-danger/70">
        <X className="h-5 w-5" /> No
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 text-mutedInk">
      <Minus className="h-5 w-5" /> {value}
    </span>
  );
}

export function CompetitiveMatrix() {
  return (
    <section id="advantage" className="relative flex min-h-screen snap-start items-center px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          className="mb-10 max-w-4xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-brand">
            Competitive Advantage
          </p>
          <h2 className="font-display text-4xl font-black leading-[0.95] text-ink sm:text-6xl">
            GRWM makes shopping feel alive.
          </h2>
        </motion.div>
        <GlassCard className="overflow-x-auto p-2">
          <table className="w-full min-w-[780px] border-separate border-spacing-0 text-left">
            <thead>
              <tr className="text-sm text-mutedInk">
                <th className="p-5">Capability</th>
                <th className="rounded-t-lg bg-brand-soft/60 p-5 text-mutedInk">GRWM</th>
                <th className="p-5">Static ecommerce</th>
                <th className="p-5">Traditional stores</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.08 }}
                  className="border-t border-brand-border"
                >
                  <td className="border-t border-brand-border p-5 font-semibold text-ink">{row.feature}</td>
                  <td className="border-t border-brand/20 bg-brand-soft/60 p-5 font-bold">
                    <Cell value={row.grwm} highlight />
                  </td>
                  <td className="border-t border-brand-border p-5"><Cell value={row.ecommerce} /></td>
                  <td className="border-t border-brand-border p-5"><Cell value={row.stores} /></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </div>
    </section>
  );
}
