"use client";

import { useState, useEffect } from "react";

export default function SignatureIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [stage, setStage] = useState(0); // 0: reveal animation, 1: solid visible, 2: fadeout

  useEffect(() => {
    // Stage 1: Line and subtitle reveal
    const t1 = setTimeout(() => {
      setStage(1);
    }, 700);

    // Stage 2: Smooth fade out
    const t2 = setTimeout(() => {
      setStage(2);
    }, 1900);

    // Stage 3: Unmount from DOM
    const t3 = setTimeout(() => {
      setShowIntro(false);
    }, 2400);

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
        transition: "opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: stage === 2 ? "none" : "auto",
        cursor: "pointer",
      }}
    >
      <div />

      {/* Ultra Clean, Minimalist, Cinematic Brand Reveal */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        {/* PURE, CLEAN, ELEGANT GUMASTA TYPOGRAPHY WITH SMOOTH EXPANSION */}
        <h1
          className="cinematic-title"
          style={{
            fontFamily: "'Cinzel', 'Plus Jakarta Sans', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            color: "#ffffff",
            margin: "0 0 16px 0",
            textShadow: "0 0 35px rgba(255, 255, 255, 0.2)",
          }}
        >
          GUMASTA
        </h1>

        {/* Delicate Expanding Gold Hairline Divider */}
        <div
          className="expanding-divider"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #b88628, transparent)",
            marginBottom: "16px",
          }}
        />

        {/* Tagline: THE ACCOUNTANT */}
        <div
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.75rem, 1.5vw, 0.92rem)",
              fontWeight: 700,
              letterSpacing: "0.36em",
              textTransform: "uppercase",
              color: "var(--accent-champagne)",
              display: "block",
            }}
          >
            THE ACCOUNTANT
          </span>
          <span
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#888892",
              display: "block",
              marginTop: "8px",
              fontWeight: 500,
            }}
          >
            Chartered Accountants & Strategic Tax Advisory
          </span>
        </div>
      </div>

      {/* Bottom Minimal Copyright */}
      <div
        style={{
          textAlign: "center",
          opacity: stage >= 1 ? 0.5 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#666666",
          }}
        >
          GUMASTA • THE ACCOUNTANT {new Date().getFullYear()}, ALL RIGHTS RESERVED.
        </span>
      </div>

      <style jsx>{`
        .cinematic-title {
          animation: cinematicReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .expanding-divider {
          width: 0px;
          animation: expandWidth 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.3s;
        }

        @keyframes cinematicReveal {
          0% {
            opacity: 0;
            letter-spacing: 0.12em;
            transform: translateY(6px);
          }
          100% {
            opacity: 1;
            letter-spacing: 0.26em;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          0% {
            width: 0px;
          }
          100% {
            width: 140px;
          }
        }
      `}</style>
    </div>
  );
}
