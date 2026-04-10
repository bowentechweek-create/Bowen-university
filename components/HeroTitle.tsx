"use client";

export default function HeroTitle() {
  const line1 = "THE INTERSECTION";
  const line2 = "ADVANTAGE";

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
      }}>
        <span style={{ display: "block", fontSize: "clamp(32px, 9vw, 130px)", lineHeight: 1.1, color: "#fff", wordBreak: "break-word" }}>
          {line1.split("").map((char, i) => (
            <span
              key={i}
              className="wave-letter"
              style={{ animationDelay: `${i * 0.06}s`, whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </span>
          ))}
        </span>

        <span style={{ display: "block", fontSize: "clamp(32px, 9vw, 130px)", lineHeight: 1.1, wordBreak: "break-word" }}>
          {line2.split("").map((char, i) => (
            <span
              key={i}
              className="gradient-letter"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {char}
            </span>
          ))}
        </span>
      </h1>
    </>
  );
}