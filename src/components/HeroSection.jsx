import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ScanLine, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { GlassCard } from "./ui/card";
import { metrics } from "../data/pitchData";

function PhoneMock() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -22, y: 30 }}
      animate={{ opacity: 1, rotateY: 0, y: 0 }}
      transition={{ duration: 1, delay: 0.35 }}
      className="relative mx-auto h-[460px] w-[238px] rounded-[2.2rem] border border-brand-border bg-white p-3 shadow-glow xl:h-[500px] xl:w-[258px]"
    >
      <div className="relative h-full overflow-hidden rounded-[1.6rem] border border-brand-border bg-gradient-to-b from-[#FFF7F4] via-white to-[#FFD9DE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(178,58,72,.16),transparent_32%)]" />
        <div className="absolute left-1/2 top-5 h-5 w-24 -translate-x-1/2 rounded-full bg-ink/75" />
        <div className="absolute inset-x-8 top-20 h-64 rounded-full bg-gradient-to-b from-brand-soft via-white/80 to-transparent blur-2xl" />
        <div className="absolute inset-x-10 top-24 h-72 rounded-t-full border border-brand/20 bg-white/45" />
        <div className="absolute left-16 top-28 h-24 w-24 rounded-full border border-brand-border bg-gradient-to-br from-brand-soft to-white" />
        <div className="absolute left-14 top-52 h-40 w-32 rounded-t-[4rem] bg-gradient-to-b from-brand/80 via-brand-soft to-white" />
        <div className="absolute inset-x-6 top-16 h-0.5 bg-brand shadow-cyan animate-scan" />
        <div className="absolute bottom-5 left-5 right-5 space-y-3">
          {["Pearl bomber", "Chrome hoops", "Soft wave hair"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.2 }}
              className="rounded-xl border border-brand-border bg-white/80 px-3 py-2 text-xs text-ink shadow-[0_8px_20px_rgba(32,26,28,0.08)] backdrop-blur"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
      <GlassCard className="absolute -right-24 top-20 w-44 p-4 animate-float">
        <p className="text-xs text-mutedInk">AI Fit Score</p>
        <p className="mt-1 text-3xl font-black text-brand">94%</p>
      </GlassCard>
      <GlassCard className="absolute -left-28 bottom-28 w-44 p-4 animate-float [animation-delay:1.2s]">
        <p className="text-xs text-mutedInk">Style Match</p>
        <p className="mt-1 text-3xl font-black text-ink">Neo Luxe</p>
      </GlassCard>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen snap-start items-center overflow-hidden px-5 pb-10 pt-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.86fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-border bg-white px-4 py-2 text-sm text-mutedInk shadow-[0_10px_30px_rgba(32,26,28,0.06)]"
          >
            <Sparkles className="h-4 w-4 text-brand" />
            AI fashion confidence engine
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-7xl font-black leading-[0.83] tracking-normal text-ink sm:text-8xl xl:text-[9rem]"
          >
            GRWM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl xl:text-5xl"
          >
            Your AI-Powered Virtual Stylist
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36 }}
            className="mt-5 max-w-2xl text-lg leading-8 text-mutedInk sm:text-xl"
          >
            Try outfits, hairstyles and accessories before you buy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-7 flex flex-wrap gap-4"
          >
            <Button>
              Experience the Future <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost">
              <Play className="mr-2 h-4 w-4" /> See Live Demo
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4"
          >
            {metrics.map((metric) => (
              <GlassCard key={metric.label} className="p-4">
                <p className="text-2xl font-black text-ink">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mutedInk">{metric.label}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
        <div className="relative">
          <ScanLine className="absolute right-12 top-10 h-10 w-10 text-brand/70" />
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
