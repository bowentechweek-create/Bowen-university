"use client";

export default function AboutSection() {
  return (
    <section style={{ background: "#000", padding: "80px 24px 0" }}>
      {/* Heading */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-0.02em",
          marginBottom: 40,
        }}>
          About{" "}
          <span style={{
            background: "linear-gradient(90deg, #f5c060 0%, #e8a020 60%, #d4911c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            BTW
          </span>
        </h2>

        {/* Two-column grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gridTemplateRows: "auto auto",
          gap: 20,
          alignItems: "start",
        }}>

          {/* Left: Large image card */}
          <div style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            gridRow: "1 / 3",
            minHeight: 540,
          }}>
            <img
              src="/OBD_6323.jpg"
              alt="Bowen Tech Week students"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
            {/* Dark overlay gradient */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.3) 100%)",
            }} />
            {/* Text overlay */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "36px 36px 40px" }}>
              <p style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
                Born from a bold vision.
              </p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.7, marginBottom: 10 }}>
                Bowen Tech Week (BTW) is an annual multi-day tech festival at Bowen University — now
                in its 3rd edition. Organised by NACOS Bowen, Bowen Tech Hub, She Code Africa Bowen,
                and GDG On Campus Bowen.
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.7 }}>
                Open to <strong style={{ color: "#e8a020" }}>ALL</strong> students — not just Computer
                Science. Our goal is to make technology relevant and accessible across every discipline.
              </p>
            </div>
          </div>

          {/* Right top: This Year's Focus */}
          <div style={{
            borderRadius: 24,
            background: "linear-gradient(135deg, #e8a020 0%, #c47a15 100%)",
            padding: "36px 32px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Decorative circle */}
            <div style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: "rgba(255,255,255,0.7)" }}>✦</span>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#000", marginBottom: 14 }}>
              This Year&apos;s Focus
            </h3>
            <p style={{ color: "rgba(0,0,0,0.75)", fontSize: 15, lineHeight: 1.7 }}>
              <strong>The Intersection Advantage</strong> — bridging technical skills with a business
              mindset. A developer who understands business, or a law student who understands AI, is
              far more powerful than someone who knows only one side.
            </p>
          </div>

          {/* Right bottom: Our Mission */}
          <div style={{
            borderRadius: 24,
            background: "#111",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "36px 32px",
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 14 }}>
              Our Mission
            </h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7 }}>
              Igniting a future-ready Bowen University by fostering innovation, collaboration, and
              awareness in cutting-edge technologies that shape our world — combining technical depth
              with real business thinking.
            </p>
          </div>
        </div>
      </div>

      {/* Program Schedule Section */}
      <div id="schedule" style={{
        marginTop: 32,
        position: "relative",
        overflow: "hidden",
        background: "#0d0a00",
        minHeight: 700,
        display: "flex",
      }}>
        {/* Background image */}
        <img
          src="/OBD_6323.jpg"
          alt=""
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center", opacity: 0.18,
          }}
        />
        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(20,14,0,0.82)" }} />
        {/* Subtle gold glow */}
        <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)", width: 700, height: 400, background: "rgba(232,160,32,0.07)", filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, width: "100%", display: "flex", alignItems: "stretch" }}>

          {/* Rotated "Program Schedule" label */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 0 0 16px",
            minWidth: 72,
          }}>
            <span style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "clamp(22px, 3.5vw, 44px)",
              fontWeight: 900,
              color: "#fff",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}>
              Program Schedule
            </span>
          </div>

          {/* Days grid */}
          <style>{`
            @media (max-width: 600px) {
              .btw-days-grid { grid-template-columns: 1fr !important; padding: 32px 20px !important; }
              .btw-day-offset { padding-top: 0 !important; }
            }
          `}</style>
          <div className="btw-days-grid" style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 0,
            padding: "56px 40px 56px 24px",
            alignItems: "start",
            maxWidth: 1100,
            margin: "0 auto",
          }}>

            {/* D1 — top left */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingRight: 24, paddingBottom: 40 }}>
              <span style={{ fontSize: "clamp(64px, 9vw, 120px)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 16 }}>D1</span>
              <div style={{
                background: "linear-gradient(135deg, #f5c060 0%, #e8a020 60%, #c47a15 100%)",
                borderRadius: 20,
                padding: "22px 28px",
                width: "100%",
                maxWidth: 380,
              }}>
                <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                  {["Introduction to tech communities", "NVIDIA DLI Workshop"].map((item) => (
                    <li key={item} style={{ color: "#000", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 17px)", lineHeight: 1.6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* D2 — top right, pushed down slightly */}
            <div className="btw-day-offset" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 60, paddingBottom: 40 }}>
              <span style={{ fontSize: "clamp(64px, 9vw, 120px)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 16 }}>D2</span>
              <div style={{
                background: "linear-gradient(135deg, #f5c060 0%, #e8a020 60%, #c47a15 100%)",
                borderRadius: 20,
                padding: "22px 28px",
                width: "100%",
                maxWidth: 420,
              }}>
                <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                  {["Keynote 1 & 2", "Panel session", "Shark Tank Competition", "Awards and Presentations"].map((item) => (
                    <li key={item} style={{ color: "#000", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 17px)", lineHeight: 1.6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* D3 — bottom left */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingRight: 24 }}>
              <span style={{ fontSize: "clamp(64px, 9vw, 120px)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 16 }}>D3</span>
              <div style={{
                background: "linear-gradient(135deg, #f5c060 0%, #e8a020 60%, #c47a15 100%)",
                borderRadius: 20,
                padding: "22px 28px",
                width: "100%",
                maxWidth: 380,
              }}>
                <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                  {["Debate session", "Keynote Address", "Speed Networking"].map((item) => (
                    <li key={item} style={{ color: "#000", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 17px)", lineHeight: 1.6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* D4 — bottom right, pushed down slightly */}
            <div className="btw-day-offset" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 60 }}>
              <span style={{ fontSize: "clamp(64px, 9vw, 120px)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 16 }}>D4</span>
              <div style={{
                background: "linear-gradient(135deg, #f5c060 0%, #e8a020 60%, #c47a15 100%)",
                borderRadius: 20,
                padding: "22px 28px",
                width: "100%",
                maxWidth: 420,
              }}>
                <ul style={{ margin: 0, padding: "0 0 0 20px", listStyle: "disc" }}>
                  {["Product Exhibition", "Games and Music", "Raffle Draw", "Performance / Festival"].map((item) => (
                    <li key={item} style={{ color: "#000", fontWeight: 700, fontSize: "clamp(13px, 1.4vw, 17px)", lineHeight: 1.6 }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
