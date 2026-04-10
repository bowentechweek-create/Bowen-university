"use client";

import { useEffect, useState } from "react";

export default function HeroTitle() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes revealUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .hero-clip {
          overflow: hidden;
          display: block;
        }
        .hero-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(100%);
        }
        .hero-word.go {
          animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <h1 style={{
        fontWeight: 900,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        textTransform: "uppercase",
        margin: "0 0 24px 0",
      }}>
        {/* Line 1 — each word slides up from behind */}
        <span className="hero-clip" style={{ fontSize: "clamp(48px, 9vw, 130px)", color: "#fff" }}>
          {["THE", "INTERSECTION"].map((word, i) => (
            <span
              key={word}
              className={`hero-word${go ? " go" : ""}`}
              style={{
                animationDelay: `${i * 0.12}s`,
                marginRight: i === 0 ? "0.25em" : 0,
              }}
            >
              {word}
            </span>
          ))}
        </span>

        {/* Line 2 — slides up slightly later */}
        <span className="hero-clip" style={{
          fontSize: "clamp(48px, 9vw, 130px)",
          background: "linear-gradient(90deg, #f5c060 0%, #e8a020 60%, #d4911c 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          <span
            className={`hero-word${go ? " go" : ""}`}
            style={{ animationDelay: "0.28s" }}
          >
            ADVANTAGE
          </span>
        </span>
      </h1>
    </>
  );
}
