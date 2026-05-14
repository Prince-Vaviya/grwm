import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cuboid, DatabaseZap, Shirt, UserRoundCheck } from "lucide-react";
import { timeline } from "../data/pitchData";
import { GlassCard } from "./ui/card";

const icons = [Bot, Cuboid, Shirt, DatabaseZap, UserRoundCheck];

export function AnimatedTimeline() {
  return (
    <GlassCard className="min-h-[520px] p-6">
      <div className="relative space-y-4">
        <div className="absolute bottom-10 left-8 top-10 w-px bg-gradient-to-b from-brand via-brand-soft to-warning md:left-1/2" />
        {timeline.map((step, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.12 }}
              className={`relative flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              <div className="w-full rounded-lg border border-brand-border bg-white/90 p-5 md:w-[46%]">
                <div className="mb-4 flex items-center justify-between">
                  <Icon className="h-6 w-6 text-brand" />
                  <span className="text-xs font-bold text-mutedInk">0{index + 1}</span>
                </div>
                <p className="text-xl font-bold text-ink">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-mutedInk">{step.description}</p>
              </div>
              <ArrowRight 
                className={`absolute left-5 top-7 h-5 w-5 text-ink transition-transform duration-700 md:left-1/2 md:-translate-x-1/2 ${
                  index % 2 === 0 ? "md:rotate-180" : "rotate-0"
                }`} 
              />
            </motion.div>
          );
        })}
      </div>
    </GlassCard>
  );
}
