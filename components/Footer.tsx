"use client";

import Link from "next/link";

const orgs = [
  "NACOS Bowen",
  "Bowen Tech Hub",
  "She Code Africa Bowen",
  "GDG On Campus Bowen",
];

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Register", href: "/signup" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#000",
      borderTop: "1px solid rgba(232,160,32,0.15)",
      padding: "64px 24px 36px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "start",
          gap: 48,
          marginBottom: 56,
        }}>

          {/* Left — branding */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: "clamp(18px, 2vw, 24px)",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}>
                Bowen{" "}
                <span style={{
                  background: "linear-gradient(90deg, #f5c060 0%, #e8a020 60%, #d4911c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Tech Week
                </span>
              </span>
              <span style={{
                display: "inline-block",
                marginLeft: 10,
                background: "rgba(232,160,32,0.12)",
                border: "1px solid rgba(232,160,32,0.3)",
                color: "#e8a020",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                padding: "3px 10px",
                borderRadius: 999,
                verticalAlign: "middle",
              }}>
                3.0
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, lineHeight: 1.7, maxWidth: 320, margin: 0 }}>
              The Intersection Advantage — bridging technical skills and business thinking at Bowen University.
            </p>
          </div>

          {/* Center — nav links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
            {links.map((l) => (
              <Link key={l.label} href={l.href} style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#e8a020")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right — organised by */}
          <div style={{ textAlign: "right" }}>
            <p style={{ color: "#e8a020", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>
              Organised by
            </p>
            {orgs.map((org) => (
              <p key={org} style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.9, margin: 0 }}>
                {org}
              </p>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, margin: 0 }}>
            © 2026 Bowen Tech Week. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, margin: 0, letterSpacing: "0.05em" }}>
            27TH APRIL 2026 · BOWEN UNIVERSITY
          </p>
        </div>

      </div>
    </footer>
  );
}
