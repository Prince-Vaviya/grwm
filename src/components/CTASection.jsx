import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/card";

export function CTASection() {
  return (
    <section id="closing" className="relative flex min-h-screen snap-start items-center overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-brand/12 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex h-56 items-end justify-center gap-2 opacity-45">
        {Array.from({ length: 36 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-5 rounded-t bg-gradient-to-t from-brand/40 to-white/10"
            animate={{ height: [30 + (index % 7) * 16, 64 + (index % 9) * 18, 30 + (index % 7) * 16] }}
            transition={{ duration: 6 + (index % 5), repeat: Infinity, delay: index * 0.08 }}
          />
        ))}
      </div>
      <div className="mx-auto w-full max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-8 inline-flex rounded-full border border-brand-border bg-white/90 p-4 backdrop-blur-xl">
            <Building2 className="h-8 w-8 text-brand" />
          </div>
          <h2 className="mx-auto max-w-5xl font-display text-5xl font-black leading-[0.95] text-ink sm:text-7xl xl:text-8xl">
            Fashion shopping is evolving. GRWM is building the future.
          </h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {["₹1.83 Cr target", "10K premium users", "5% conversion goal"].map((item) => (
              <GlassCard key={item} className="p-5">
                <Sparkles className="mx-auto mb-3 h-5 w-5 text-brand" />
                <p className="font-bold text-ink">{item}</p>
              </GlassCard>
            ))}
          </div>
          <Button className="mt-12 h-14 px-9 text-base">
            Partner With Us <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
