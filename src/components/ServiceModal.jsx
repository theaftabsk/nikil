"use client";

import { X, CheckCircle2, FileText, ArrowRight, ShieldCheck } from "lucide-react";

export default function ServiceModal({ service, isOpen, onClose, onBookService }) {
  if (!isOpen || !service) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#0d0d11",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)",
          padding: "36px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
            padding: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <ShieldCheck size={16} color="#b88628" />
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
            }}
          >
            Practice Area Blueprint
          </span>
        </div>

        <h3
          className="font-cinzel"
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "12px",
          }}
        >
          {service.title}
        </h3>

        <p style={{ color: "var(--text-silver)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
          {service.fullDescription || service.description}
        </p>

        {/* Deliverables / Scope */}
        {service.deliverables && (
          <div style={{ marginBottom: "24px" }}>
            <span
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
                fontWeight: 700,
                display: "block",
                marginBottom: "12px",
              }}
            >
              Key Deliverables & Scope
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    padding: "10px 14px",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <CheckCircle2 size={16} color="#b88628" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.85rem", color: "var(--text-silver)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents Required */}
        {service.documents && (
          <div style={{ marginBottom: "28px" }}>
            <span
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#ffffff",
                fontWeight: 700,
                display: "block",
                marginBottom: "12px",
              }}
            >
              Checklist & Documentation
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {service.documents.map((doc, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "6px 12px",
                    fontSize: "0.78rem",
                    color: "var(--text-silver)",
                  }}
                >
                  {doc}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="btn-gold"
            style={{ flex: 1, justifyContent: "center" }}
          >
            <span>Book Consultation for {service.title}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
