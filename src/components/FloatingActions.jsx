"use client";

import { useState } from "react";
import { MessageSquare, Phone, Calendar, X, ArrowUpRight, ShieldCheck, Sparkles, Send } from "lucide-react";

export default function FloatingActions({ onOpenBooking }) {
  const [chatOpen, setChatOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");

  const quickTopics = [
    { title: "⚡ Urgent GST Notice / Audit", text: "Hello GUMASTA! I received a GST/IT department notice and need urgent advisory representation." },
    { title: "🏛️ Company / LLP Registration", text: "Hello GUMASTA! I want to incorporate a new Private Limited / LLP company and need full setup." },
    { title: "💎 Strategic Tax Minimization", text: "Hello GUMASTA! I would like to review our financial ledgers to legally reduce our corporate/individual tax." },
    { title: "🚀 DPIIT Startup 80-IAC Exemption", text: "Hello GUMASTA! We are looking to secure DPIIT Startup India certification and 3-year tax holiday." },
    { title: "🌍 NRI Lower TDS & 15CA/CB", text: "Hello GUMASTA! I am an NRI selling property in India / remitting funds and require Form 15CA/CB assistance." },
  ];

  const handleLaunchWhatsApp = (textToSend) => {
    const finalMsg = textToSend || customMsg || "Hello GUMASTA! I saw your advisory website and would like to schedule an advisory consultation.";
    const url = `https://wa.me/917416414358?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, "_blank");
    setChatOpen(false);
  };

  return (
    <>
      {/* Interactive Desktop Floating Advisory Hub */}
      <div className="floating-actions-desktop" style={{ position: "fixed", bottom: "32px", right: "32px", zIndex: 999 }}>
        {/* Chat Popover Card */}
        {chatOpen && (
          <div
            style={{
              position: "absolute",
              bottom: "76px",
              right: "0",
              width: "360px",
              backgroundColor: "#0d0d12",
              border: "1px solid rgba(184, 134, 40, 0.4)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.9), 0 0 30px rgba(184, 134, 40, 0.15)",
              overflow: "hidden",
              animation: "fadeUp 0.25s ease forwards",
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: "#121218",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "16px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#25D366",
                    boxShadow: "0 0 10px #25D366",
                  }}
                />
                <div>
                  <h4 className="font-cinzel" style={{ fontSize: "0.95rem", color: "#ffffff", margin: 0, fontWeight: 700 }}>
                    GUMASTA Advisory Desk
                  </h4>
                  <span style={{ fontSize: "0.7rem", color: "var(--accent-gold)", letterSpacing: "0.05em" }}>
                    The Accountant • Priority Support
                  </span>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-silver)",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Content & Quick Chips */}
            <div style={{ padding: "18px" }}>
              <p style={{ color: "var(--text-silver)", fontSize: "0.82rem", lineHeight: 1.5, marginBottom: "14px" }}>
                Select your advisory query or send a custom direct message to our senior desk:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
                {quickTopics.map((topic, i) => (
                  <button
                    key={i}
                    onClick={() => handleLaunchWhatsApp(topic.text)}
                    style={{
                      textAlign: "left",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      padding: "10px 14px",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    className="topic-hover-btn"
                  >
                    <span>{topic.title}</span>
                    <ArrowUpRight size={14} color="var(--accent-gold)" />
                  </button>
                ))}
              </div>

              {/* Direct message row */}
              <div style={{ display: "flex", gap: "8px" }}>
                <input
                  type="text"
                  placeholder="Type specific query..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLaunchWhatsApp()}
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#ffffff",
                    padding: "10px 12px",
                    fontSize: "0.82rem",
                    outline: "none",
                  }}
                />
                <button
                  onClick={() => handleLaunchWhatsApp()}
                  style={{
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    border: "none",
                    padding: "0 14px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  title="Send via WhatsApp"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="floating-whatsapp-btn"
          title="Direct WhatsApp with GUMASTA"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#25D366",
            color: "#ffffff",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "2px solid #ffffff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6), 0 0 20px rgba(37, 211, 102, 0.4)",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
        >
          {chatOpen ? <X size={26} /> : <MessageSquare size={26} />}
          {!chatOpen && (
            <span
              style={{
                position: "absolute",
                top: "2px",
                right: "2px",
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#b88628",
                border: "2px solid #000000",
              }}
            />
          )}
        </button>
      </div>

      {/* Mobile Sticky Conversion Bar (Optimized for Mobile Conversion) */}
      <div className="floating-mobile-bar">
        <a
          href="tel:+917416414358"
          className="btn-outline"
          style={{
            padding: "10px 14px",
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <Phone size={14} />
          <span>Call Office</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="btn-gold"
          style={{
            padding: "10px 14px",
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <Calendar size={14} />
          <span>Book Free Call</span>
        </button>

        <button
          onClick={() => handleLaunchWhatsApp()}
          style={{
            backgroundColor: "#25D366",
            color: "#ffffff",
            border: "none",
            padding: "10px 14px",
            fontSize: "0.75rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            cursor: "pointer",
          }}
        >
          <MessageSquare size={14} />
          <span>WhatsApp</span>
        </button>
      </div>

      <style jsx>{`
        .topic-hover-btn:hover {
          background-color: rgba(184, 134, 40, 0.15) !important;
          border-color: rgba(184, 134, 40, 0.5) !important;
          transform: translateX(4px);
        }
      `}</style>
    </>
  );
}
