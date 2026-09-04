"use client";

import { useState, useEffect } from "react";

export default function SignatureIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [stage, setStage] = useState(0); // 0: initial animation, 1: full solid glow, 2: fadeout

  useEffect(() => {
    // Stage 1: Reveal logo with golden light
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1100);

    // Stage 2: Start smooth fade out
    const t2 = setTimeout(() => {
      setStage(2);
    }, 2200);

    // Stage 3: Remove from DOM
    const t3 = setTimeout(() => {
      setShowIntro(false);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!showIntro) return null;

  return (
    <div
      onClick={() => {
        setStage(2);
        setTimeout(() => setShowIntro(false), 400);
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#050507",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 24px 40px",
        opacity: stage === 2 ? 0 : 1,
        transform: stage === 2 ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: stage === 2 ? "none" : "auto",
        cursor: "pointer",
      }}
    >
      {/* Top ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "480px",
          height: "240px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184, 134, 40, 0.18) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div />

      {/* Center Bold Luxury Insignia & Brand Name */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "600px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Decorative Gold Top Crest Diamond */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
            opacity: stage >= 1 ? 1 : 0.4,
            transition: "opacity 0.6s ease",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, transparent, #b88628)" }} />
          <span style={{ color: "var(--accent-gold)", fontSize: "0.9rem", textShadow: "0 0 10px rgba(184,134,40,0.6)" }}>✦</span>
          <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #b88628, transparent)" }} />
        </div>

        {/* BOLD MAJESTIC GUMASTA LOGO */}
        <h1
          className="luxury-brand-title"
          style={{
            fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
            fontSize: "clamp(2.8rem, 6.5vw, 4.8rem)",
            fontWeight: 900,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            lineHeight: 1.05,
            margin: "0 0 14px 0",
            background: "linear-gradient(135deg, #ffffff 0%, #fdf6e2 40%, #d4af37 75%, #aa7c11 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 25px rgba(212, 175, 55, 0.35))",
            animation: "revealTitle 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          GUMASTA
        </h1>

        {/* Trailing Gold Divider Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            width: "100%",
            maxWidth: "360px",
            margin: "0 auto 16px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1.5px",
              background: "linear-gradient(90deg, transparent, #d4af37)",
            }}
          />
          <span
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "#d4af37",
              transform: "rotate(45deg)",
              boxShadow: "0 0 10px #d4af37",
            }}
          />
          <div
            style={{
              flex: 1,
              height: "1.5px",
              background: "linear-gradient(90deg, #d4af37, transparent)",
            }}
          />
        </div>

        {/* Subtitle: THE ACCOUNTANT */}
        <div
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.8rem, 1.6vw, 0.95rem)",
              fontWeight: 800,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#f3e5ab",
              textShadow: "0 0 15px rgba(243, 229, 171, 0.4)",
              display: "block",
            }}
          >
            THE ACCOUNTANT
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-silver)",
              display: "block",
              marginTop: "8px",
              fontWeight: 600,
            }}
          >
            Chartered Accountants & Strategic Corporate Advisory
          </span>
        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div
        style={{
          textAlign: "center",
          opacity: stage >= 1 ? 0.6 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.68rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#888888",
          }}
        >
          GUMASTA • THE ACCOUNTANT {new Date().getFullYear()}, ALL RIGHTS RESERVED.
        </span>
      </div>

      <style jsx>{`
        @keyframes revealTitle {
          0% {
            opacity: 0;
            transform: scale(0.92) translateY(10px);
            letter-spacing: 0.22em;
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            letter-spacing: 0.14em;
          }
        }
      `}</style>
    </div>
  );
}
