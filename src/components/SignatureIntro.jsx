"use client";

import { useState, useEffect } from "react";

export default function SignatureIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [stage, setStage] = useState(0); // 0: reveal, 1: visible, 2: fadeout

  useEffect(() => {
    // Stage 1: Reveal logo
    const t1 = setTimeout(() => {
      setStage(1);
    }, 700);

    // Stage 2: Smooth fade out
    const t2 = setTimeout(() => {
      setStage(2);
    }, 1800);

    // Stage 3: Remove from DOM
    const t3 = setTimeout(() => {
      setShowIntro(false);
    }, 2300);

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
        setTimeout(() => setShowIntro(false), 300);
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
        transform: stage === 2 ? "scale(1.02)" : "scale(1)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
        pointerEvents: stage === 2 ? "none" : "auto",
        cursor: "pointer",
      }}
    >
      <div />

      {/* Clean, Sharp, Super Professional Brand Block */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "520px",
        }}
      >
        {/* Minimal Gold Top Icon Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            height: "42px",
            border: "1px solid rgba(184, 134, 40, 0.5)",
            backgroundColor: "rgba(184, 134, 40, 0.08)",
            marginBottom: "18px",
            transform: "rotate(45deg)",
          }}
        >
          <span
            style={{
              transform: "rotate(-45deg)",
              color: "#b88628",
              fontSize: "1.1rem",
              fontWeight: 700,
            }}
          >
            ✦
          </span>
        </div>

        {/* 100% CLEAR, CLEAN, PROFESSIONAL BRAND TITLE */}
        <h1
          style={{
            fontFamily: "'Cinzel', 'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            lineHeight: 1.1,
            color: "#ffffff",
            margin: "0 0 10px 0",
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.8)",
          }}
        >
          GUMASTA
        </h1>

        {/* Clean Modern Divider Line */}
        <div
          style={{
            width: "80px",
            height: "2px",
            backgroundColor: "#b88628",
            margin: "0 auto 14px",
          }}
        />

        {/* Tagline: THE ACCOUNTANT */}
        <div
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.75rem, 1.4vw, 0.9rem)",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#f3e5ab",
              display: "block",
            }}
          >
            THE ACCOUNTANT
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8a8a93",
              display: "block",
              marginTop: "8px",
              fontWeight: 500,
            }}
          >
            Chartered Accountancy & Strategic Tax Advisory
          </span>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        style={{
          textAlign: "center",
          opacity: stage >= 1 ? 0.6 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.68rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#666666",
          }}
        >
          GUMASTA • THE ACCOUNTANT {new Date().getFullYear()}, ALL RIGHTS RESERVED.
        </span>
      </div>
    </div>
  );
}
