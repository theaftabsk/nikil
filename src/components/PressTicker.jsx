"use client";

import { ArrowRight } from "lucide-react";

export default function PressTicker({ onOpenBooking }) {
  const items = [
    "OVER ₹120 CRORES SAVED IN STRATEGIC TAX COMPLIANCE",
    "OFFICIAL DPIIT STARTUP INDIA RECOGNITION & TAX EXEMPTION FACILITATOR",
    "TRUSTED ADVISOR TO 500+ CORPORATES, RESTAURATEURS & D2C BRANDS",
    "CROSS-BORDER NRI TAXATION & FORM 15CA/CB ADVISORY",
    "STATUTORY, INTERNAL & TAX AUDIT SHIELD WITH 100% REGULATORY RECORD",
    "VIRTUAL CFO & FRACTIONAL FINANCIAL MANAGEMENT FOR SCALE",
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        borderTop: "1px solid #ffffff",
        borderBottom: "1px solid #ffffff",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Static Label Badge on Left (Evan Luthra style) */}
      <div
        style={{
          backgroundColor: "#000000",
          color: "#ffffff",
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontFamily: "var(--font-serif)",
          fontSize: "0.82rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          flexShrink: 0,
          zIndex: 2,
          borderRight: "1px solid rgba(255,255,255,0.2)",
          cursor: "pointer",
        }}
        onClick={onOpenBooking}
      >
        <span>GUMASTA'S CREDENTIALS</span>
        <ArrowRight size={16} />
      </div>

      {/* Infinite Scrolling Ticker */}
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          width: "100%",
          padding: "12px 0",
          whiteSpace: "nowrap",
        }}
      >
        <div className="marquee-track">
          {[...items, ...items, ...items].map((item, index) => (
            <span
              key={index}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "24px",
                color: "#111111",
              }}
            >
              <span>{item}</span>
              <span style={{ color: "#b88628", fontSize: "1rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
