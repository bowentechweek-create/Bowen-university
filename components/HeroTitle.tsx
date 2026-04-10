"use client";

import { useEffect, useState } from "react";

export default function HeroTitle() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 100);
    const t2 = setTimeout(() => setStep(2), 400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <h1 style={{
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "-0.02em",
      textTransform: "uppercase",
      margin: "0 0 24px 0",
    }}>
      <span style={{
        display: "block",
        fontSize: "clamp(48px, 9vw, 130px)",
        color: "#fff",
        opacity: step >= 1 ? 1 : 0,
        transform: step >= 1 ? "translateX(0)" : "translateX(-60px)",
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}>
        THE INTERSECTION
      </span>
      <span style={{
        display: "block",
        fontSize: "clamp(48px, 9vw, 130px)",
        background: "linear-gradient(90deg, #f5c060 0%, #e8a020 60%, #d4911c 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        opacity: step >= 2 ? 1 : 0,
        transform: step >= 2 ? "translateX(0)" : "translateX(60px)",
        transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}>
        ADVANTAGE
      </span>
    </h1>
  );
}
