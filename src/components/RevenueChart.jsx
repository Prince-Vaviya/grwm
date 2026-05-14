import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeIndianRupee, TrendingUp, PieChart as PieIcon } from "lucide-react";
import { revenueStreams } from "../data/pitchData";
import { GlassCard } from "./ui/card";

export function RevenueChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const totalRevenue = 18300000;

  const formatCurrency = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return `₹${val.toLocaleString()}`;
  };

  return (
    <GlassCard className="group relative overflow-hidden p-8 transition-all duration-500 hover:shadow-glow">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand/5 blur-[120px] transition-all duration-700 group-hover:bg-brand/10" />
      
      <div className="relative mb-8 flex items-start justify-between">
        <div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-success"
          >
            Projected Annual Revenue
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-3 text-7xl font-black tracking-tighter text-ink"
          >
            ₹1.83 <span className="text-3xl text-mutedInk">Cr</span>
          </motion.p>
        </div>
        <motion.div 
          whileHover={{ rotate: 15, scale: 1.1 }}
          className="rounded-2xl border border-success/20 bg-success/10 p-5 backdrop-blur-md"
        >
          <BadgeIndianRupee className="h-8 w-8 text-success" />
        </motion.div>
      </div>

      <div className="grid gap-16 lg:grid-cols-[1.5fr_0.5fr]">
        <div className="space-y-8">
          {revenueStreams.map((stream, index) => (
            <motion.div 
              key={stream.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <div className="mb-2 flex justify-between text-xs font-bold tracking-tight text-ink">
                <span className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: stream.color }} />
                  {stream.label}
                </span>
                <motion.span 
                  animate={{ opacity: 1 }}
                  className="text-brand"
                >
                  {hoveredIndex === index ? formatCurrency(stream.value) : `${((stream.value / totalRevenue) * 100).toFixed(1)}%`}
                </motion.span>
              </div>
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-brand-soft/30">
                <motion.div
                  className="h-full rounded-full"
                  style={{ 
                    width: `${(stream.value / totalRevenue) * 100}%`,
                    backgroundColor: stream.color,
                    boxShadow: hoveredIndex === index ? `0 0 20px ${stream.color}66` : 'none'
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.2, ease: "circOut", delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative h-56 w-56 lg:h-64 lg:w-64">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              {revenueStreams.reduce((acc, stream, i) => {
                const percent = (stream.value / totalRevenue) * 100;
                const offset = acc.total;
                acc.total += percent;
                return {
                  total: acc.total,
                  elements: [
                    ...acc.elements,
                    <motion.circle
                      key={i}
                      cx="50"
                      cy="50"
                      r="38"
                      fill="transparent"
                      stroke={stream.color}
                      strokeWidth="10"
                      strokeDasharray={`${percent} ${100 - percent}`}
                      strokeDashoffset={-offset}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      onMouseEnter={() => setHoveredIndex(i)}
                    />
                  ]
                };
              }, { total: 0, elements: [] }).elements}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <PieIcon className="h-8 w-8 text-brand/25" />
              <span className="mt-2 text-xs font-black uppercase tracking-[0.25em] text-mutedInk">Mix</span>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-center">
             <div className="flex items-center gap-2 rounded-full bg-brand/5 px-4 py-2 text-[10px] font-bold text-brand">
               <TrendingUp className="h-3 w-3" />
               High Margin Subscription Core
             </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-brand-border pt-6">
        {[
          { label: "Conversion", val: "5%", sub: "Paid Goal" },
          { label: "Premium", val: "10K", sub: "User Target" },
          { label: "Annual Target", val: "₹1.83", sub: "Cr Target" }
        ].map((item, i) => (
          <motion.div 
            key={item.label}
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <p className="text-2xl font-black text-ink">{item.val}</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-mutedInk">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}

