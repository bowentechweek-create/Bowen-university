"use client";

const words = [
  { text: "BOWEN TECH WEEK", gold: true },
  { text: "·", dot: true },
  { text: "THE INTERSECTION ADVANTAGE", gold: false },
  { text: "·", dot: true },
];

const items = [...words, ...words, ...words, ...words];

export default function MarqueeBanner() {
  return (
    <div style={{
      width: "100%",
      overflow: "hidden",
      background: "#000",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "32px 0",
      position: "relative",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: 120, zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(to right, #000, transparent)",
      }} />
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 120, zIndex: 2, pointerEvents: "none",
        background: "linear-gradient(to left, #000, transparent)",
      }} />

      <style>{`
        @keyframes btw-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .btw-marquee-track {
          display: flex;
          width: max-content;
          animation: btw-marquee 30s linear infinite;
        }
      `}</style>

      <div className="btw-marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "clamp(32px, 5vw, 72px)",
              fontWeight: 800,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              marginLeft: 48,
              marginRight: 48,
              whiteSpace: "nowrap",
              userSelect: "none",
              ...(item.dot
                ? { color: "rgba(232,160,32,0.30)" }
                : item.gold
                ? {
                    background: "linear-gradient(90deg, #f5c060 0%, #e8a020 60%, #d4911c 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }
                : { color: "rgba(255,255,255,0.85)" }),
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}