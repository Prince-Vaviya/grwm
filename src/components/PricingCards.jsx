import React from "react";
import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { pricing } from "../data/pitchData";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/card";

export function PricingCards() {
  return (
    <section id="pricing" className="relative flex min-h-screen snap-start items-center px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mb-16 max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-brand">
            Subscription Pricing
          </p>
          <h2 className="font-display text-4xl font-black leading-[0.95] text-ink sm:text-6xl">
            Accessible entry. Premium aspiration.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {pricing.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -10, scale: 1.015 }}
            >
              <GlassCard
                className={`h-full p-6 ${tier.featured ? "border-brand shadow-glow animate-pulseGlow" : ""}`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-ink">{tier.name}</h3>
                    {tier.featured && (
                      <span className="mt-1 block text-[10px] font-black uppercase tracking-widest text-brand">
                        Best Value
                      </span>
                    )}
                  </div>
                  {tier.featured && <Crown className="h-6 w-6 text-brand" />}
                </div>
                <p className="text-5xl font-black text-ink">{tier.price}</p>
                <p className="mt-3 text-sm text-mutedInk">{tier.detail}</p>
                <div className="my-8 h-px bg-brand-soft/45" />
                <div className="space-y-4">
                  {tier.features.map((feature) => (
                    <p key={feature} className="flex items-center gap-3 text-mutedInk">
                      <Check className="h-5 w-5 text-brand" />
                      {feature}
                    </p>
                  ))}
                </div>
                <Button className="mt-10 w-full" variant={tier.featured ? "primary" : "ghost"}>
                  Choose {tier.name}
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
