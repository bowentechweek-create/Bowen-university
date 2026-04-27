import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignupPage() {

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#000", position: "relative", overflow: "hidden" }}>
      <Navbar />

      {/* Ambient glows */}
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "rgba(232,160,32,0.08)", filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "20%", right: "10%", width: 300, height: 300, background: "rgba(232,160,32,0.05)", filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none" }} />

      <main style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "120px 24px 80px" }}>
        <div style={{ width: "100%", maxWidth: 680 }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", padding: "8px 20px", borderRadius: 999, display: "inline-block", marginBottom: 24,
            }}>
              Bowen Tech Week 3.0
            </span>
            <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", textTransform: "uppercase", margin: "0 0 12px" }}>
              Register for{" "}
              <span style={{
                background: "linear-gradient(90deg, #f5c060 0%, #e8a020 60%, #d4911c 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                BTW 3.0
              </span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: 0 }}>
              27th April 2026 &middot; Bowen University
            </p>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(232,160,32,0.25)",
            borderRadius: 24, padding: "56px 40px", textAlign: "center",
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: "50%", background: "rgba(232,160,32,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
            }}>
              <svg width="30" height="30" fill="none" stroke="#e8a020" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p style={{ color: "#fff", fontWeight: 800, fontSize: 22, marginBottom: 10 }}>Registration Closed</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 32 }}>
              Registration for Bowen Tech Week 3.0 is now closed.{" "}
              See you at the event!
            </p>
            <Link href="/" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#e8a020", color: "#000", fontWeight: 700, fontSize: 14,
              padding: "12px 28px", borderRadius: 999, textDecoration: "none",
            }}>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
