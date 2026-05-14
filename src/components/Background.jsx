import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function Background() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 45, damping: 22 });
  const springY = useSpring(y, { stiffness: 45, damping: 22 });

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FFFBF7]">
      <div className="absolute inset-0 bg-luxury-radial opacity-95" />
      <div className="absolute inset-0 bg-hero-grid bg-[length:72px_72px] opacity-80" />
      <motion.div
        className="absolute h-[34rem] w-[34rem] rounded-full bg-brand-soft/70 blur-3xl"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/90 to-transparent" />
      {Array.from({ length: 24 }).map((_, index) => (
        <span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-brand/25 shadow-cyan"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 19) % 100}%`,
            animation: `float ${7 + (index % 5)}s ease-in-out infinite`,
            animationDelay: `${index * 0.27}s`,
          }}
        />
      ))}
    </div>
  );
}
