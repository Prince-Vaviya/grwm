import React, { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const sectionMood = {
  hero: { size: 150, color: "rgba(178, 58, 72, 0.08)" },
  customers: { size: 128, color: "rgba(255, 217, 222, 0.22)" },
  value: { size: 170, color: "rgba(178, 58, 72, 0.09)" },
  channels: { size: 145, color: "rgba(154, 98, 0, 0.07)" },
  relationships: { size: 136, color: "rgba(255, 217, 222, 0.25)" },
  revenue: { size: 155, color: "rgba(47, 125, 81, 0.08)" },
  resources: { size: 135, color: "rgba(178, 58, 72, 0.08)" },
  activities: { size: 132, color: "rgba(154, 98, 0, 0.06)" },
  partners: { size: 150, color: "rgba(255, 217, 222, 0.22)" },
  costs: { size: 132, color: "rgba(47, 125, 81, 0.06)" },
  advantage: { size: 150, color: "rgba(178, 58, 72, 0.08)" },
  pricing: { size: 145, color: "rgba(255, 217, 222, 0.25)" },
  closing: { size: 170, color: "rgba(178, 58, 72, 0.09)" },
};

export function CursorMotion({ activeId }) {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.6 });
  const mood = useMemo(() => sectionMood[activeId] || sectionMood.hero, [activeId]);

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden lg:block" aria-hidden="true">
      <motion.div
        className="absolute rounded-full blur-3xl"
        animate={{
          width: pressed ? mood.size * 0.74 : mood.size,
          height: pressed ? mood.size * 0.74 : mood.size,
          opacity: visible ? 0.45 : 0,
          backgroundColor: mood.color,
        }}
        transition={{ duration: 0.28 }}
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      />
    </div>
  );
}
