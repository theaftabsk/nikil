"use client";

import { useState, useEffect } from "react";

export default function SignatureIntro() {
  const [showIntro, setShowIntro] = useState(true);
  const [stage, setStage] = useState(0); // 0: stroke draw, 1: solid glow & subtitle, 2: fadeout

  useEffect(() => {
    // Stage 1: Text fills solidly with golden shimmer and subtitle reveals
    const t1 = setTimeout(() => {
      setStage(1);
    }, 1400);

    // Stage 2: Smooth cinematic fade out start (stays on screen comfortably)
    const t2 = setTimeout(() => {
      setStage(2);
    }, 3800);

    // Stage 3: Remove from DOM
    const t3 = setTimeout(() => {
      setShowIntro(false);
    }, 4600);

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
        setTimeout(() => setShowIntro(false), 350);
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
        transform: stage === 2 ? "scale(1.03)" : "scale(1)",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: stage === 2 ? "none" : "auto",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Golden Ambient Halo Glow */}
      <div
        className="ambient-halo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "260px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(184, 134, 40, 0.22) 0%, rgba(184, 134, 40, 0.05) 50%, rgba(0,0,0,0) 75%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div />

      {/* Main Center Animated Logo Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "680px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Dynamic SVG Animated Stroke-Draw Brand Logo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "540px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 540 90"
            style={{
              width: "100%",
              height: "100%",
              overflow: "visible",
            }}
          >
            <defs>
              {/* Luxury Gold-White Gradient */}
              <linearGradient id="luxuryGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#f3e5ab" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>

              {/* Luminous Glow Filter */}
              <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Crisp, Bold, Clean Animated Text */}
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="animated-brand-stroke"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "56px",
                fontWeight: 700,
                letterSpacing: "12px",
                stroke: "url(#luxuryGoldGrad)",
                strokeWidth: "1.4px",
                filter: "url(#goldGlowFilter)",
                fill: stage >= 1 ? "#ffffff" : "transparent",
                transition: "fill 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              GUMASTA
            </text>
          </svg>
        </div>

        {/* Dynamic Expanding Gold Precision Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
            maxWidth: "360px",
            margin: "12px 0 16px",
          }}
        >
          <div className="line-draw-left" style={{ height: "1px", background: "linear-gradient(90deg, transparent, #b88628)" }} />
          <div
            style={{
              width: "5px",
              height: "5px",
              backgroundColor: "#b88628",
              transform: "rotate(45deg)",
              boxShadow: "0 0 8px #b88628",
              opacity: stage >= 1 ? 1 : 0,
              transition: "opacity 0.4s ease 0.4s",
            }}
          />
          <div className="line-draw-right" style={{ height: "1px", background: "linear-gradient(90deg, #b88628, transparent)" }} />
        </div>

        {/* Tagline: THE ACCOUNTANT with smooth blur & rise animation */}
        <div
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? "translateY(0)" : "translateY(10px)",
            filter: stage >= 1 ? "blur(0px)" : "blur(6px)",
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, filter 0.6s ease 0.1s",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.78rem, 1.6vw, 0.95rem)",
              fontWeight: 800,
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: "var(--accent-champagne)",
              textShadow: "0 0 15px rgba(243, 229, 171, 0.4)",
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
              color: "#8a8a96",
              display: "block",
              marginTop: "8px",
              fontWeight: 600,
            }}
          >
            Chartered Accountancy & Strategic Tax Advisory
          </span>
        </div>
      </div>

      {/* Bottom Minimal Copyright */}
      <div
        style={{
          textAlign: "center",
          opacity: stage >= 1 ? 0.5 : 0,
          transition: "opacity 0.6s ease 0.3s",
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
        .animated-brand-stroke {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: drawLetters 1.1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .line-draw-left {
          width: 0%;
          animation: expandLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.5s;
        }

        .line-draw-right {
          width: 0%;
          animation: expandRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.5s;
        }

        .ambient-halo {
          animation: pulseHalo 2.5s ease-in-out infinite alternate;
        }

        @keyframes drawLetters {
          0% {
            stroke-dashoffset: 600;
            opacity: 0;
            letter-spacing: 6px;
          }
          40% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
            letter-spacing: 12px;
          }
        }

        @keyframes expandLeft {
          0% {
            width: 0px;
          }
          100% {
            width: 140px;
          }
        }

        @keyframes expandRight {
          0% {
            width: 0px;
          }
          100% {
            width: 140px;
          }
        }

        @keyframes pulseHalo {
          0% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(0.95);
          }
          100% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }
      `}</style>
    </div>
  );
}
