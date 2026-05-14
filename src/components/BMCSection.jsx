import React from "react";
import { motion } from "framer-motion";
import { Check, Heart, MessageCircle, Sparkles, ThumbsUp } from "lucide-react";
import { SectionShell } from "./SectionShell";
import { GlassCard } from "./ui/card";
import { RevenueChart } from "./RevenueChart";
import { GrowthChart } from "./GrowthChart";
import { AnimatedTimeline } from "./AnimatedTimeline";

function PersonaScene({ section }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.7 }}
      className="grid gap-4 sm:grid-cols-3"
    >
      {section.personas.map((persona, index) => (
        <GlassCard
          key={persona.name}
          className="group min-h-72 p-5 transition duration-300 hover:-translate-y-2 hover:border-brand"
        >
          <div className={`mb-5 h-24 rounded-lg bg-gradient-to-br ${section.accent} opacity-80`} />
          <p className="text-4xl font-black text-ink">{persona.stat}</p>
          <h3 className="mt-4 text-xl font-bold text-ink">{persona.name}</h3>
          <p className="mt-3 text-sm leading-6 text-mutedInk">{persona.note}</p>
          <div className="absolute inset-x-5 bottom-5 h-1 rounded-full bg-brand-soft/45">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${section.accent}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${62 + index * 12}%` }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: index * 0.12 }}
            />
          </div>
        </GlassCard>
      ))}
    </motion.div>
  );
}

function MirrorScene({ section }) {
  return (
    <GlassCard className="relative overflow-hidden p-0">
      <div className="relative aspect-video w-full bg-ink/90">
        <video 
          key="solution-video"
          src="videos/solution.mp4"
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent pointer-events-none" />
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-3">
          {section.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 rounded-full border border-brand-border bg-white/90 px-4 py-2 text-sm font-bold text-ink"
            >
              <Sparkles className="h-4 w-4 text-brand" />
              {item}
            </motion.div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {section.comparison.map((item) => (
            <div key={item} className="rounded-xl border border-brand-border bg-brand-soft/30 p-4 text-xs font-bold text-mutedInk">
              {item}
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

function NetworkScene({ section }) {
  return (
    <GlassCard className="relative min-h-[520px] p-7">
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/30 bg-brand-soft/60 blur-sm" />
      <div className="absolute inset-12 rounded-full border border-brand-border" />
      <div className="absolute inset-24 rounded-full border border-brand-border" />
      {section.items.map((item, index) => {
        const angle = (index / section.items.length) * Math.PI * 2;
        const left = 48 + Math.cos(angle) * 34;
        const top = 48 + Math.sin(angle) * 34;
        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 }}
            className="absolute rounded-full border border-brand-border bg-white/90 px-4 py-3 text-sm font-semibold text-ink shadow-cyan backdrop-blur-xl"
            style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
          >
            {item}
          </motion.div>
        );
      })}
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand/25 bg-brand text-center text-sm font-black text-white shadow-glow">
        Viral Loop
      </div>
    </GlassCard>
  );
}

function SocialScene({ section }) {
  return (
    <GlassCard className="min-h-[520px] p-5">
      <div className="grid h-full gap-4 md:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-brand-border bg-white/90 p-4">
          <p className="mb-4 text-sm font-bold text-mutedInk">AI Stylist Chat</p>
          {["Try the silver crop jacket?", "Pair with soft waves.", "Your friends prefer look B."].map((text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.22 }}
              className="mb-3 rounded-lg border border-brand-border bg-white/90 p-3 text-sm text-mutedInk"
            >
              <MessageCircle className="mr-2 inline h-4 w-4 text-brand" />
              {text}
            </motion.div>
          ))}
        </div>
        <div className="relative rounded-xl border border-brand-border bg-gradient-to-b from-white to-brand-soft/35 p-5">
          <div className={`h-64 rounded-lg bg-gradient-to-br ${section.accent} opacity-70`} />
          {["Love this", "Look B wins", "Add hoops"].map((text, index) => (
            <motion.div
              key={text}
              animate={{ y: [0, -18, 0], opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              className="absolute rounded-full border border-brand-border bg-white/90 px-3 py-2 text-xs text-ink backdrop-blur-xl"
              style={{ right: `${18 + index * 12}%`, top: `${26 + index * 18}%` }}
            >
              <Heart className="mr-1 inline h-3 w-3 text-brand" />
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

function ResourceGrid({ section }) {
  return (
    <GlassCard className="min-h-[500px] p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {section.items.map((item, index) => {
          const Icon = section.icons[index % section.icons.length];
          return (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.08 }}
              className="rounded-lg border border-brand-border bg-white/80 p-5 transition hover:border-brand hover:bg-brand-soft/35"
            >
              <Icon className="mb-6 h-7 w-7 text-brand" />
              <p className="text-lg font-bold text-ink">{item}</p>
              <p className="mt-2 text-sm text-mutedInk">Connected into the GRWM intelligence layer.</p>
            </motion.div>
          );
        })}
      </div>
    </GlassCard>
  );
}

function CostScene({ section }) {
  return (
    <GlassCard className="min-h-[500px] p-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm text-mutedInk">Controlled burn-rate</p>
          <p className="text-5xl font-black text-ink">Lean</p>
        </div>
        <p className="rounded-full border border-success/25 bg-[#DDEFE5] px-4 py-2 text-sm text-success">
          Sustainable scale
        </p>
      </div>
      <div className="space-y-4">
        {section.items.map((item, index) => (
          <div key={item} className="rounded-lg border border-brand-border bg-white/80 p-4">
            <div className="mb-2 flex justify-between text-sm text-mutedInk">
              <span>{item}</span>
              <span>{12 + index * 6}%</span>
            </div>
            <div className="h-2 rounded-full bg-brand-soft/45">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${section.accent}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${34 + index * 8}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function DefaultScene({ section }) {
  return (
    <GlassCard className="min-h-[500px] p-6">
      <div className="mb-8 flex gap-3">
        {section.icons.map((Icon, index) => (
          <div key={index} className="rounded-full border border-brand-border bg-white p-4">
            <Icon className="h-6 w-6 text-brand" />
          </div>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {section.items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.08 }}
            className="group rounded-lg border border-brand-border bg-white/80 p-4"
          >
            <Check className="mb-5 h-5 w-5 text-brand transition group-hover:scale-110" />
            <p className="font-semibold text-ink">{item}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 rounded-lg border border-brand-border bg-white/80 p-4 text-sm text-mutedInk">
        <ThumbsUp className="mr-2 inline h-4 w-4 text-brand" />
        {section.psychology}
      </div>
    </GlassCard>
  );
}

function MonetizationScene() {
  return (
    <div className="flex w-full flex-col gap-16 lg:gap-24">
      <RevenueChart />
      <GrowthChart />
    </div>
  );
}

function SegmentScene({ section }) {
  const colors = [
    "bg-brand",
    "bg-indigo-500",
    "bg-purple-500",
    "bg-emerald-500"
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {section.personas.map((persona, index) => (
        <GlassCard
          key={persona.name}
          className="group relative flex overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className={`w-3 shrink-0 ${colors[index % colors.length]}`} />
          <div className="p-8">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-2xl font-black text-ink">{persona.name}</h3>
              <span className="rounded-full bg-brand-soft/30 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand">
                {persona.stat}
              </span>
            </div>
            <p className="text-base leading-relaxed text-mutedInk">
              {persona.note}
            </p>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

function ResourceScene({ section }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {section.resourceCategories.map((cat, index) => (
        <GlassCard 
          key={cat.title}
          className="relative min-h-[220px] border-brand/10 bg-brand-soft/5 transition-all hover:border-brand/40"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-2xl">{cat.icon}</span>
            <h3 className="text-xl font-black tracking-tight text-ink">{cat.title}</h3>
          </div>
          <ul className="space-y-4">
            {cat.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-sm font-medium leading-relaxed text-mutedInk">{point}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      ))}
    </div>
  );
}

export function BMCSection({ section, index }) {
  const renderScene = () => {
    if (section.id === "customers") return <PersonaScene section={section} />;
    if (section.id === "value") return <MirrorScene section={section} />;
    if (section.id === "segments") return <SegmentScene section={section} />;
    if (section.id === "marketing" || section.id === "partners") return <NetworkScene section={section} />;
    if (section.id === "relationships") return <SocialScene section={section} />;
    if (section.id === "revenue") return <MonetizationScene />;
    if (section.id === "activities") return <AnimatedTimeline />;
    if (section.id === "resources") return <ResourceScene section={section} />;
    if (section.id === "costs") return <CostScene section={section} />;
    return <ResourceGrid section={section} />;
  };

  return (
    <SectionShell 
      id={section.id} 
      eyebrow={section.eyebrow} 
      title={section.title} 
      line={section.line}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {renderScene()}
      </motion.div>
    </SectionShell>
  );
}
