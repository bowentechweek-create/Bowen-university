"use client";

import { useEffect, useRef, useState } from "react";

const EVENT_DATE = new Date("2026-04-27T00:00:00");

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calc() {
      const diff = EVENT_DATE.getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function AttendanceCount() {
  const [count, setCount] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { days, hours, minutes, seconds } = useCountdown();

  async function fetchCount() {
    try {
      const res = await fetch("/api/count");
      const data = await res.json();
      setCount(data.count);
    } catch {
      // silently fail
    }
  }

  useEffect(() => {
    fetchCount();
    const id = setInterval(fetchCount, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full bg-black px-4 flex flex-col items-center justify-center"
      style={{
        paddingTop: "0",
        paddingBottom: "0",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      {/* Ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#e8a020]/6 blur-[140px] rounded-full pointer-events-none" />

      {/* All content centred — fade up on scroll into view */}
      <div
        className="relative z-10 w-full flex flex-col items-center text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >

        {/* Label */}
        <p className="text-white/40 text-xs font-semibold tracking-[0.35em] uppercase mb-10">
          Live Attendees
        </p>

        {/* Live count */}
        <div className="relative inline-flex items-center justify-center mb-16">
          <span
            className="font-black leading-none tabular-nums"
            style={{
              fontSize: "clamp(90px, 18vw, 200px)",
              background: "linear-gradient(180deg, #ffffff 0%, #888888 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {count === null ? "—" : count.toLocaleString()}
          </span>
          {/* Red live dot */}
          <span className="absolute -top-2 -right-5 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)] animate-pulse" />
        </div>

        {/* Divider */}
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mb-16" />

        {/* Countdown row */}
        <div className="flex items-start justify-center gap-10 sm:gap-16 mb-6">
          {[
            { label: "DAYS",    value: days },
            { label: "HOURS",   value: hours },
            { label: "MINUTES", value: minutes },
            { label: "SECONDS", value: seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#e8a020]" />
              <span
                className="font-black tabular-nums leading-none"
                style={{
                  fontSize: "clamp(36px, 6vw, 80px)",
                  background: "linear-gradient(180deg, #ffffff 0%, #777777 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {pad(value)}
              </span>
              <span className="text-white/30 text-[10px] font-semibold tracking-[0.25em]">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
