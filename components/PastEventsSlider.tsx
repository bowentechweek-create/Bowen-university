"use client";

const images = [
  { src: "/OBD_5998.jpg", alt: "BTW past event" },
  { src: "/OBD_6004.jpg", alt: "BTW past event" },
  { src: "/OBD_6006.jpg", alt: "BTW past event" },
  { src: "/OBD_6013.jpg", alt: "BTW past event" },
  { src: "/OBD_6018.jpg", alt: "BTW past event" },
  { src: "/OBD_6020.jpg", alt: "BTW past event" },
  { src: "/OBD_6022.jpg", alt: "BTW past event" },
];

// Duplicate for seamless loop
const items = [...images, ...images];

export default function PastEventsSlider() {
  return (
    <section style={{ background: "#000", padding: "80px 0 100px", overflow: "hidden" }}>
      {/* Header */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", marginBottom: 48 }}>
        <p style={{
          fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#e8a020", marginBottom: 12,
        }}>
          MEMORIES
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
          color: "#fff", letterSpacing: "-0.02em", margin: 0,
        }}>
          Past{" "}
          <span style={{
            background: "linear-gradient(90deg, #f5c060 0%, #e8a020 60%, #d4911c 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            Events
          </span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15, marginTop: 8, maxWidth: 480 }}>
          A glimpse into the energy, people, and transformational moments that define BTW.
        </p>
      </div>

      {/* Marquee track */}
      <div style={{ position: "relative", width: "100%" }}>
        {/* Left fade */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0, width: 120, zIndex: 2,
          background: "linear-gradient(to right, #000, transparent)", pointerEvents: "none",
        }} />
        {/* Right fade */}
        <div style={{
          position: "absolute", top: 0, right: 0, bottom: 0, width: 120, zIndex: 2,
          background: "linear-gradient(to left, #000, transparent)", pointerEvents: "none",
        }} />

        <style>{`
          @keyframes btw-photo-marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .btw-photo-track {
            display: flex;
            width: max-content;
            animation: btw-photo-marquee 30s linear infinite;
            gap: 20px;
          }
          .btw-photo-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="btw-photo-track">
          {items.map((img, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                width: "clamp(240px, 26vw, 360px)",
                height: "clamp(280px, 30vw, 420px)",
                borderRadius: 20,
                border: "2px solid #e8a020",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 0 24px rgba(232,160,32,0.15)",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
                background: "linear-gradient(to top, rgba(232,160,32,0.18), transparent)",
                pointerEvents: "none",
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
