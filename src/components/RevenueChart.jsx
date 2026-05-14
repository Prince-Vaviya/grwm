import React from "react";
import { motion } from "framer-motion";
import { BadgeIndianRupee, TrendingUp } from "lucide-react";
import { revenueStreams } from "../data/pitchData";
import { GlassCard } from "./ui/card";

export function RevenueChart() {
  return (
    <GlassCard className="min-h-[520px] p-6">
      <div className="mb-8 flex items-start justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-success">Revenue target</p>
          <p className="mt-2 text-6xl font-black text-ink">₹1.83 Cr</p>
        </div>
        <div className="rounded-full border border-success/20 bg-[#DDEFE5] p-4">
          <BadgeIndianRupee className="h-7 w-7 text-success" />
        </div>
      </div>
      <div className="space-y-5">
        {revenueStreams.map((stream, index) => (
          <div key={stream.label}>
            <div className="mb-2 flex justify-between text-sm text-mutedInk">
              <span>{stream.label}</span>
              <span>{stream.value}%</span>
            </div>
            <div
              className="h-5 overflow-hidden rounded-full"
              style={{ background: "rgba(255, 217, 222, 0.62)" }}
            >
              <motion.div
                className="relative h-full origin-left rounded-full"
                style={{
                  width: `${stream.value * 2.25}%`,
                  background: "linear-gradient(90deg, #2F7D51 0%, #FFD9DE 55%, #B23A48 100%)",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.1, delay: index * 0.12 }}
              >
                <span className="absolute inset-y-0 left-0 w-24 bg-white/30 blur-xl animate-shimmer" />
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-3">
        {["10K Premium", "5% Conversion", "Compounding ARPU"].map((item) => (
          <div key={item} className="rounded-lg border border-brand-border bg-white/80 p-4 text-sm font-semibold text-ink">
            <TrendingUp className="mb-3 h-5 w-5 text-brand" />
            {item}
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
