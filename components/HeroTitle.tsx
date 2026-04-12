"use client";

import { useEffect, useState } from "react";

export default function HeroTitle() {
  const [phase, setPhase] = useState<"enter" | "animate">("enter");

  useEffect(() => {
    const t = setTimeout(() => setPhase("animate"), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .wave-letter {
          display: inline-block;
          animation: wave 2s ease-in-out infinite;
        }
        .gradient-letter {
          display: inline-block;
          background: linear-gradient(90deg, #f5c060, #e8a020, #d4911c, #fff8e7, #f5c060, #e8a020);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: wave 2s ease-in-out infinite, gradientFlow 4s ease-in-out infinite;
        }
      `}</style>

      <h1 style={{
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        margin: "0 0 24px 0",
        overflow: "hidden",
      }}>

        {/* Line 1: THE INTERSECTION */}
        <span style={{ display: "flex", justifyContent: "center", fontSize: "clamp(28px, 7.5vw, 130px)", color: "#fff" }}>
          <span style={{
            display: "inline-block",
            opacity: phase === "animate" ? 1 : 0,
            transform: phase === "animate" ? "translateX(0)" : "translateX(-120vw)",
            transition: "transform 2s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease",
          }}>
            {phase === "animate"
              ? "THE INTER".split("").map((char, i) => (
                  <span key={i} className="wave-letter" style={{ animationDelay: `${i * 0.06}s`, whiteSpace: char === " " ? "pre" : "normal" }}>{char}</span>
                ))
              : "THE INTER"
            }
          </span>

          <span style={{
            display: "inline-block",
            opacity: phase === "animate" ? 1 : 0,
            transform: phase === "animate" ? "translateX(0)" : "translateX(120vw)",
            transition: "transform 2s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease",
          }}>
            {phase === "animate"
              ? "SECTION".split("").map((char, i) => (
                  <span key={i} className="wave-letter" style={{ animationDelay: `${(i + 9) * 0.06}s` }}>{char}</span>
                ))
              : "SECTION"
            }
          </span>
        </span>

        {/* Line 2: ADVANTAGE */}
        <span style={{ display: "flex", justifyContent: "center", fontSize: "clamp(28px, 7.5vw, 130px)" }}>
          <span style={{
            display: "inline-block",
            opacity: phase === "animate" ? 1 : 0,
            transform: phase === "animate" ? "translateX(0)" : "translateX(-120vw)",
            transition: "transform 2s cubic-bezier(0.16,1,0.3,1) 0.3s, opacity 0.6s ease 0.3s",
          }}>
            {phase === "animate"
              ? "ADVAN".split("").map((char, i) => (
                  <span key={i} className="gradient-letter" style={{ animationDelay: `${i * 0.08}s` }}>{char}</span>
                ))
              : <span style={{ background: "linear-gradient(90deg, #f5c060, #e8a020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ADVAN</span>
            }
          </span>

          <span style={{
            display: "inline-block",
            opacity: phase === "animate" ? 1 : 0,
            transform: phase === "animate" ? "translateX(0)" : "translateX(120vw)",
            transition: "transform 2s cubic-bezier(0.16,1,0.3,1) 0.3s, opacity 0.6s ease 0.3s",
          }}>
            {phase === "animate"
              ? "TAGE".split("").map((char, i) => (
                  <span key={i} className="gradient-letter" style={{ animationDelay: `${(i + 5) * 0.08}s` }}>{char}</span>
                ))
              : <span style={{ background: "linear-gradient(90deg, #e8a020, #d4911c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>TAGE</span>
            }
          </span>
        </span>

      </h1>
    </>
  );
}