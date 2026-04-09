'use client'

import { useEffect, useState } from 'react'

type Phase = 'enter' | 'visible' | 'exit'

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>('enter')

  useEffect(() => {
    // Pop in
    const t1 = setTimeout(() => setPhase('visible'), 50)
    // Start fade out
    const t2 = setTimeout(() => setPhase('exit'), 1200)
    // Unmount
    const t3 = setTimeout(() => onDone(), 1700)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onDone])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.5s ease',
        opacity: phase === 'exit' ? 0 : 1,
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(26,101,255,0.08) 0%, rgba(232,160,32,0.05) 60%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Text block */}
      <div
        style={{
          textAlign: 'center',
          lineHeight: 0.9,
          transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease',
          transform: phase === 'enter' ? 'scale(0.7) translateY(20px)' : 'scale(1) translateY(0)',
          opacity: phase === 'enter' ? 0 : 1,
        }}
      >
        {['BOWEN', 'TECH WEEK'].map((line) => (
          <div
            key={line}
            style={{
              display: 'block',
              fontSize: 'clamp(56px, 13vw, 160px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              fontFamily: 'Arial Black, Arial, sans-serif',
              // Gradient fill
              background: 'linear-gradient(90deg, #1a65ff 0%, #6fa8ff 30%, #ffffff 50%, #f5c842 70%, #e8a020 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              // Depth: dark extrusion + colorful glow
              filter: [
                'drop-shadow(0px 4px 0px rgba(0,0,0,0.9))',
                'drop-shadow(0px 8px 2px rgba(0,0,0,0.7))',
                'drop-shadow(0px 0px 60px rgba(26,101,255,0.5))',
                'drop-shadow(0px 0px 80px rgba(232,160,32,0.35))',
              ].join(' '),
              userSelect: 'none',
            }}
          >
            {line}
          </div>
        ))}

        {/* Subtitle */}
        <div
          style={{
            marginTop: '16px',
            fontSize: 'clamp(10px, 1.2vw, 14px)',
            letterSpacing: '0.4em',
            color: '#555555',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase',
            transition: 'opacity 0.7s ease 0.2s',
            opacity: phase === 'enter' ? 0 : 1,
          }}
        >
          3.0 &nbsp;·&nbsp; The Intersection Advantage
        </div>
      </div>
    </div>
  )
}
