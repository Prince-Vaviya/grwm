import React, { useEffect, useMemo, useState } from "react";
import { useScroll, useSpring } from "framer-motion";
import { Background } from "./components/Background";
import { BMCSection } from "./components/BMCSection";
import { CompetitiveMatrix } from "./components/CompetitiveMatrix";
import { CTASection } from "./components/CTASection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { PricingCards } from "./components/PricingCards";
import { bmcSections } from "./data/pitchData";
import { CursorMotion } from "./components/CursorMotion";

export default function App() {
  const [activeId, setActiveId] = useState("hero");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const observedIds = useMemo(
    () => ["hero", ...bmcSections.map((section) => section.id), "advantage", "pricing", "closing"],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { threshold: [0.28, 0.45, 0.62], rootMargin: "-10% 0px -35% 0px" },
    );

    observedIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [observedIds]);

  return (
    <main className="min-h-screen snap-y snap-mandatory overflow-x-hidden text-ink antialiased">
      <Background />
      <CursorMotion activeId={activeId} />
      <Navbar sections={bmcSections} activeId={activeId} progress={progress} />
      <HeroSection />
      {bmcSections.map((section, index) => (
        <BMCSection key={section.id} section={section} index={index} />
      ))}
      <CompetitiveMatrix />
      <PricingCards />
      <CTASection />
    </main>
  );
}
