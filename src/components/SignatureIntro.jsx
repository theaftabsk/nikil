"use client";

import { useState, useEffect } from "react";

export default function SignatureIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [stage, setStage] = useState(0); // 0: drawing, 1: solid fill + subtitle, 2: fadeout

  useEffect(() => {
    // Stage 1: signature stroke completes and fills solidly
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1400);

    // Stage 2: start fade out
    const t2 = setTimeout(() => {
      setStage(2);
    }, 2200);

    // Stage 3: remove from DOM
    const t3 = setTimeout(() => {
      setShowIntro(false);
    }, 2900);

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
        setTimeout(() => setShowIntro(false), 500);
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#000000",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 24px 40px",
        opacity: stage === 2 ? 0 : 1,
        transform: stage === 2 ? "scale(1.05)" : "scale(1)",
        transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: stage === 2 ? "none" : "auto",
        cursor: "pointer",
      }}
    >
      {/* Top spacing */}
      <div />

      {/* Center Animated Signature Box */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "460px",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "380px",
            height: "140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 420 150"
            style={{
              width: "100%",
              height: "100%",
              overflow: "visible",
            }}
          >
            <defs>
              <linearGradient id="goldWhiteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f3e5ab" />
              </linearGradient>

              <filter id="sigGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Handwritten Cursive Signature 'Gumasta' with dynamic stroke draw & fill */}
            <text
              x="50%"
              y="60%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="signature-calligraphy"
              style={{
                fontFamily: "'Great Vibes', 'Allura', 'Alex Brush', cursive",
                fontSize: "96px",
                letterSpacing: "1px",
                stroke: "url(#goldWhiteGrad)",
                strokeWidth: "1.8px",
                filter: "url(#sigGlow)",
                fill: stage >= 1 ? "#ffffff" : "transparent",
                transition: "fill 0.5s ease",
              }}
            >
              Gumasta
            </text>

            {/* Trailing Flourish Underline */}
            <path
              d="M 95 105 Q 210 132 325 102"
              fill="none"
              stroke="url(#goldWhiteGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
              className="flourish-underline"
              style={{
                filter: "url(#sigGlow)",
              }}
            />
          </svg>
        </div>

        {/* Subtitle that gracefully fades in */}
        <div
          style={{
            marginTop: "16px",
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
            }}
          >
            THE ACCOUNTANT
          </span>
        </div>
      </div>

      {/* Bottom Copyright Text (Evan Luthra style screenshot) */}
      <div
        style={{
          textAlign: "center",
          opacity: stage >= 1 ? 0.6 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#666666",
          }}
        >
          GUMASTA • THE ACCOUNTANT {new Date().getFullYear()}, ALL RIGHTS RESERVED.
        </span>
      </div>

      <style jsx>{`
        .signature-calligraphy {
          stroke-dasharray: 650;
          stroke-dashoffset: 650;
          animation: drawText 1.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .flourish-underline {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: drawUnderline 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          animation-delay: 0.7s;
        }

        @keyframes drawText {
          0% {
            stroke-dashoffset: 650;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawUnderline {
          0% {
            stroke-dashoffset: 300;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
}
