"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";


const levels = ["100", "200", "300", "400", "500", "Postgraduate", "Staff"];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 12,
  padding: "12px 16px",
  color: "#fff",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  color: "rgba(255,255,255,0.5)",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  marginBottom: 6,
  display: "block",
};

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    level: "",
    hearAbout: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [focused, setFocused] = useState<string | null>(null);

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === field ? "rgba(232,160,32,0.6)" : "rgba(255,255,255,0.10)",
  });

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, name: `${form.firstName} ${form.lastName}` }),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus("success");
      setMessage("You're registered! See you at Bowen Tech Week 3.0.");
    } else {
      setStatus("error");
      setMessage(data.error || "Something went wrong. Please try again.");
    }
  }

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

          {status === "success" ? (
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(232,160,32,0.25)",
              borderRadius: 24, padding: "56px 40px", textAlign: "center",
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", background: "rgba(232,160,32,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
              }}>
                <svg width="30" height="30" fill="none" stroke="#e8a020" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: 22, marginBottom: 10 }}>{"Check your email!"}</p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 32 }}>Your ticket has been sent — check your inbox or spam folder.</p>
              <Link href="/" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#e8a020", color: "#000", fontWeight: 700, fontSize: 14,
                padding: "12px 28px", borderRadius: 999, textDecoration: "none",
              }}>
                Back to Home
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24, padding: "40px 40px", display: "flex", flexDirection: "column", gap: 24,
              }}
            >
              {/* Row: First + Last name */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input
                    type="text" required placeholder="Adebayo"
                    value={form.firstName}
                    onChange={e => set("firstName", e.target.value)}
                    onFocus={() => setFocused("firstName")}
                    onBlur={() => setFocused(null)}
                    style={focusStyle("firstName")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input
                    type="text" required placeholder="Johnson"
                    value={form.lastName}
                    onChange={e => set("lastName", e.target.value)}
                    onFocus={() => setFocused("lastName")}
                    onBlur={() => setFocused(null)}
                    style={focusStyle("lastName")}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email Address</label>
                <input
                  type="email" required placeholder="you@example.com"
                  value={form.email}
                  onChange={e => set("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  style={focusStyle("email")}
                />
              </div>

              {/* Phone */}
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  type="tel" placeholder="+234 800 000 0000"
                  value={form.phone}
                  onChange={e => set("phone", e.target.value)}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  style={focusStyle("phone")}
                />
              </div>

              {/* Level */}
              <div>
                <label style={labelStyle}>Level</label>
                <select
                  required
                  value={form.level}
                  onChange={e => set("level", e.target.value)}
                  onFocus={() => setFocused("level")}
                  onBlur={() => setFocused(null)}
                  style={{ ...focusStyle("level"), appearance: "none" as const }}
                >
                  <option value="" disabled>Select level</option>
                  {levels.map(l => <option key={l} value={l} style={{ background: "#111", color: "#fff" }}>{l}L</option>)}
                </select>
              </div>

              {/* How did you hear */}
              <div>
                <label style={labelStyle}>How did you hear about us?</label>
                <select
                  value={form.hearAbout}
                  onChange={e => set("hearAbout", e.target.value)}
                  onFocus={() => setFocused("hearAbout")}
                  onBlur={() => setFocused(null)}
                  style={{ ...focusStyle("hearAbout"), appearance: "none" as const }}
                >
                  <option value="" disabled>Select an option</option>
                  {["Instagram", "Twitter / X", "WhatsApp", "Friend / Classmate", "Lecturer", "Flyer / Poster", "Other"].map(o => (
                    <option key={o} value={o} style={{ background: "#111", color: "#fff" }}>{o}</option>
                  ))}
                </select>
              </div>

              {status === "error" && (
                <p style={{ color: "#f87171", fontSize: 13, textAlign: "center", margin: 0 }}>{message}</p>
              )}

              {/* Divider */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 8 }} />

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "#e8a020", color: "#000", fontWeight: 800, fontSize: 15,
                  padding: "16px 32px", borderRadius: 999, border: "none", cursor: "pointer",
                  opacity: status === "loading" ? 0.7 : 1, transition: "background 0.2s",
                  letterSpacing: "0.03em",
                }}
                onMouseEnter={e => { if (status !== "loading") (e.currentTarget as HTMLButtonElement).style.background = "#d4911c"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "#e8a020"; }}
              >
                {status === "loading" ? (
                  <>
                    <span style={{ width: 16, height: 16, border: "2px solid rgba(0,0,0,0.3)", borderTopColor: "#000", borderRadius: "50%", display: "inline-block", animation: "spin 0.7s linear infinite" }} />
                    Registering...
                  </>
                ) : (
                  <>
                    Register Now
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
