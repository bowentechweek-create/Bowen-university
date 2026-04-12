import Link from "next/link";
import Navbar from "@/components/Navbar";
import AttendanceCount from "@/components/AttendanceCount";
import MarqueeBanner from "@/components/MarqueeBanner";
import HeroTitle from "@/components/HeroTitle";
import AboutSection from "@/components/AboutSection";
import PastEventsSlider from "@/components/PastEventsSlider";
import Footer from "@/components/Footer";

const primaryBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#e8a020",
  color: "#000",
  fontWeight: 700,
  fontSize: "clamp(13px, 2vw, 16px)",
  padding: "clamp(12px, 2vw, 20px) clamp(24px, 4vw, 48px)",
  borderRadius: 999,
  textDecoration: "none",
  letterSpacing: "0.04em",
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,0.08)",
  border: "1.5px solid rgba(255,255,255,0.25)",
  color: "#fff",
  fontWeight: 700,
  fontSize: "clamp(13px, 2vw, 16px)",
  padding: "clamp(12px, 2vw, 20px) clamp(24px, 4vw, 48px)",
  borderRadius: 999,
  textDecoration: "none",
  letterSpacing: "0.04em",
};

export default function Home() {
  return (
    <>
      <div id="top" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", background: "#000" }}>
        <Navbar />

        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <img
            src="/OBD_6323.jpg"
            alt="Bowen Tech Week"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.14 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.15), transparent, rgba(0,0,0,0.15))" }} />
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "rgba(232,160,32,0.10)", filter: "blur(120px)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", top: "50%", left: "25%", width: 300, height: 300, background: "rgba(26,101,255,0.10)", filter: "blur(100px)", borderRadius: "50%" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 300, background: "linear-gradient(to top, #000 0%, #000 20%, transparent 100%)", zIndex: 2 }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "clamp(80px, 12vw, 120px) clamp(16px, 5vw, 48px) 60px" }}>

          <div style={{ marginBottom: 16 }}>
            <span style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.20)", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "8px 20px", borderRadius: 999, display: "inline-block" }}>
              Bowen Tech Week 3.0
            </span>
          </div>

          <div style={{ marginBottom: 40 }}>
            <span style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.8)", fontSize: 14, padding: "8px 20px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#e8a020", display: "inline-block" }} />
              27th April 2026
            </span>
          </div>

          <HeroTitle />

          <p style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 600, color: "#e8a020", margin: "24px 0 16px 0" }}>
            Connect, Innovate, Intersect.
          </p>

          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, maxWidth: 520, lineHeight: 1.7, margin: "0 0 56px 0" }}>
            The most immersive university tech event in Nigeria. Days of powerful
            keynotes, hands-on workshops, and transformational networking.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 24 }}>
            <Link href="/signup" style={primaryBtn}>
              Get Your Tickets Now →
            </Link>
            <a href="#attendance" style={secondaryBtn}>
              Explore The Event
            </a>
          </div>

        </div>
      </div>

      <section id="attendance">
        <AttendanceCount />
      </section>

      <div style={{ height: 80, background: "#000" }} />
      <MarqueeBanner />
      <div id="about"><AboutSection /></div>
      <div id="memories"><PastEventsSlider /></div>
      <Footer />
    </>
  );
}