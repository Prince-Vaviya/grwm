import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, Sparkles } from "lucide-react";
import { growthProjection } from "../data/pitchData";
import { GlassCard } from "./ui/card";

export function GrowthChart() {
  const [hoveredPoint, setHoveredPoint] = React.useState(null);
  const maxUsers = 200000;
  const padding = 70;
  const width = 1200;
  const height = 450;

  const points = growthProjection.map((d, i) => ({
    x: padding + (i * (width - 2 * padding)) / (growthProjection.length - 1),
    y: height - padding - (d.users / maxUsers) * (height - 2 * padding),
    ...d
  }));

  const linePath = `M ${points.map(p => `${p.x},${p.y}`).join(" L ")}`;

  return (
    <GlassCard className="relative overflow-hidden p-10">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-brand">Acquisition Strategy</p>
          <h3 className="mt-2 text-4xl font-black text-ink">Viral Growth Loop</h3>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
          <Users className="h-6 w-6 text-brand" />
        </div>
      </div>

      <div className="relative aspect-[2.8/1] w-full">
        <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full overflow-visible">
          {/* Y-axis Labels */}
          {[0, 50000, 100000, 150000, 200000].map((val, i) => {
            const y = height - padding - (val / maxUsers) * (height - 2 * padding);
            return (
              <g key={val}>
                <line
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke="#F0E0E3"
                  strokeDasharray="4 4"
                />
                <text
                  x={padding - 15}
                  y={y}
                  textAnchor="end"
                  alignmentBaseline="middle"
                  className="fill-mutedInk text-xs font-bold"
                >
                  {val >= 1000 ? `${val/1000}K` : val}
                </text>
              </g>
            );
          })}

          {/* X-axis Labels */}
          {points.map((p, i) => (
            <text
              key={i}
              x={p.x}
              y={height - padding + 30}
              textAnchor="middle"
              className="fill-mutedInk text-xs font-bold"
            >
              {p.month}
            </text>
          ))}

          {/* Axis Titles */}
          <text
            x={padding}
            y={padding - 30}
            className="fill-brand text-[10px] font-black uppercase tracking-widest"
          >
            Users
          </text>
          <text
            x={width - padding}
            y={height - padding + 55}
            textAnchor="end"
            className="fill-brand text-[10px] font-black uppercase tracking-widest"
          >
            Timeline
          </text>

          {/* Path */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="url(#growthGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          <defs>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFD9DE" />
              <stop offset="100%" stopColor="#B23A48" />
            </linearGradient>
          </defs>

          {/* Points */}
          {points.map((p, i) => (
            <motion.g 
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.15 }}
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
              className="cursor-pointer"
            >
              <circle cx={p.x} cy={p.y} r="8" fill="#B23A48" />
              <circle cx={p.x} cy={p.y} r="14" fill="#B23A48" fillOpacity="0.15" />
              
              <AnimatePresence>
                {hoveredPoint === i && (
                  <motion.g
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <rect
                      x={p.x - 45}
                      y={p.y - 50}
                      width="90"
                      height="30"
                      rx="8"
                      fill="#201A1C"
                    />
                    <text
                      x={p.x}
                      y={p.y - 30}
                      textAnchor="middle"
                      fill="white"
                      className="text-[14px] font-black"
                    >
                      {p.users.toLocaleString()}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6">
        <div className="rounded-xl bg-brand-soft/30 p-4">
          <p className="flex items-center gap-2 text-xs font-bold text-mutedInk">
            <TrendingUp className="h-3 w-3 text-brand" /> Year 1 Target
          </p>
          <p className="mt-1 text-2xl font-black text-ink">200,000</p>
          <p className="text-[10px] uppercase text-mutedInk">Active Users</p>
        </div>
        <div className="rounded-xl bg-success/10 p-4">
          <p className="flex items-center gap-2 text-xs font-bold text-mutedInk">
            <Sparkles className="h-3 w-3 text-success" /> Conversion
          </p>
          <p className="mt-1 text-2xl font-black text-success">10,000</p>
          <p className="text-[10px] uppercase text-mutedInk">Premium Subs</p>
        </div>
      </div>
    </GlassCard>
  );
}
