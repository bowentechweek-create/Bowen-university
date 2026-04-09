"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Schedule", href: "#schedule" },
  { label: "Memories", href: "#memories" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    if (href === "#top") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        @media (max-width: 600px) {
          .btw-nav-links { display: none !important; }
          .btw-nav-cta  { display: none !important; }
          .btw-hamburger { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 24, left: 0, right: 0, zIndex: 50,
        display: "flex", justifyContent: "center", padding: "0 16px",
      }}>
        <div style={{
          display: "flex", alignItems: "center",
          background: "#111", borderRadius: 999,
          padding: "6px 6px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}>

          {/* Icon */}
          <div style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "#000", border: "1px solid rgba(255,255,255,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginRight: 4, flexShrink: 0,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" fill="#e8a020" />
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#e8a020" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Desktop nav links */}
          <div className="btw-nav-links" style={{ display: "flex", alignItems: "center" }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                style={{
                  color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 600,
                  padding: "8px 18px", borderRadius: 999, textDecoration: "none",
                  whiteSpace: "nowrap", transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#e8a020")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/signup"
            className="btw-nav-cta"
            style={{
              marginLeft: 4, background: "#fff", color: "#000",
              fontWeight: 700, fontSize: 14, padding: "10px 24px",
              borderRadius: 999, textDecoration: "none", whiteSpace: "nowrap",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e8a020")}
            onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
          >
            Get Tickets
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className="btw-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none", alignItems: "center", justifyContent: "center",
              width: 40, height: 40, borderRadius: "50%",
              background: "transparent", border: "none", cursor: "pointer",
              marginLeft: 4, flexShrink: 0,
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              /* X icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 88, left: 16, right: 16, zIndex: 49,
          background: "#111", border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20, padding: "16px 12px",
          boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              style={{
                color: "rgba(255,255,255,0.8)", fontSize: 16, fontWeight: 600,
                padding: "14px 20px", borderRadius: 12, textDecoration: "none",
                display: "block", transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(232,160,32,0.1)";
                e.currentTarget.style.color = "#e8a020";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "rgba(255,255,255,0.8)";
              }}
            >
              {l.label}
            </a>
          ))}

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", margin: "8px 0" }} />

          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block", textAlign: "center",
              background: "#e8a020", color: "#000",
              fontWeight: 800, fontSize: 15, padding: "14px 24px",
              borderRadius: 12, textDecoration: "none",
            }}
          >
            Get Tickets
          </Link>
        </div>
      )}
    </>
  );
}
