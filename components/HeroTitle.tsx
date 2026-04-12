"use client";

import { useEffect, useState } from "react";

export default function HeroTitle() {
  const [phase, setPhase] = useState<"enter" | "animate">("enter");

  useEffect(() => {
    const t = setTimeout(() => setPhase("animate"), 3000);
    return () => clearTimeout(t);
  }, []);

  const entered = phase === "animate";

  return (
    <>
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .gradient-letter {
          display: inline-block;
          background: linear-gradient(90deg, #f5c060, #e8a020, #d4911c, #fff8e7, #f5c060, #e8a020);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 4s ease-in-out infinite;
        }

        .hero-row {
          display: flex;
          justify-content: center;
          overflow: hidden;
          width: 100%;
          font-size: clamp(28px, 8.5vw, 130px);
        }

        .hero-half {
          display: inline-block;
          white-space: nowrap;
          max-width: 50vw;
        }

        @media (max-width: 480px) {
          .hero-row {
            font-size: clamp(24px, 9.5vw, 60px);
          }
        }
      `}</style>

      <h1 style={{
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        margin: "0 0 24px 0",
        width: "100%",
        textAlign: "center",
      }}>

        {/* Line 1: THE INTERSECTION */}
        <span className="hero-row" style={{ color: "#fff", marginBottom: "0.05em" }}>
          <span
            className="hero-half"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateX(0)" : "translateX(-120vw)",
              transition: "transform 2.5s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease",
            }}
          >
            THE INTER
          </span>
          <span
            className="hero-half"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateX(0)" : "translateX(120vw)",
              transition: "transform 2.5s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease",
            }}
          >
            SECTION
          </span>
        </span>

        {/* Line 2: ADVANTAGE */}
        <span className="hero-row">
          <span
            className="hero-half"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateX(0)" : "translateX(-120vw)",
              transition: "transform 2.5s cubic-bezier(0.16,1,0.3,1) 0.3s, opacity 0.6s ease 0.3s",
            }}
          >
            {entered
              ? "ADVAN".split("").map((char, i) => (
                  <span key={i} className="gradient-letter" style={{ animationDelay: `${i * 0.08}s` }}>{char}</span>
                ))
              : <span style={{ background: "linear-gradient(90deg, #f5c060, #e8a020)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>ADVAN</span>
            }
          </span>
          <span
            className="hero-half"
            style={{
              opacity: entered ? 1 : 0,
              transform: entered ? "translateX(0)" : "translateX(120vw)",
              transition: "transform 2.5s cubic-bezier(0.16,1,0.3,1) 0.3s, opacity 0.6s ease 0.3s",
            }}
          >
            {entered
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