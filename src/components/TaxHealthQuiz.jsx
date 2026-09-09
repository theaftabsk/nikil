"use client";

import { useState } from "react";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  MessageSquare,
  Building2,
  Users,
  Briefcase,
  Globe2,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function TaxHealthQuiz({ onOpenBooking }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [entityType, setEntityType] = useState("");
  const [turnover, setTurnover] = useState("");
  const [priority, setPriority] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const entityOptions = [
    {
      id: "pvt_ltd",
      title: "Private Limited / LLP",
      desc: "Corporate entities scaling revenue & compliance",
      icon: <Building2 size={20} color="#b88628" />,
    },
    {
      id: "msme",
      title: "Proprietorship / MSME",
      desc: "Growing business, retail, hospitality & services",
      icon: <Briefcase size={20} color="#b88628" />,
    },
    {
      id: "startup",
      title: "Funded Tech Startup",
      desc: "Seeking DPIIT 80-IAC exemption & investor due diligence",
      icon: <Zap size={20} color="#b88628" />,
    },
    {
      id: "hni",
      title: "Individual / HNI",
      desc: "High-earner, directorships, capital gains & investments",
      icon: <Users size={20} color="#b88628" />,
    },
    {
      id: "nri",
      title: "NRI / Global Citizen",
      desc: "Indian assets, property sale, Lower TDS & 15CA/CB",
      icon: <Globe2 size={20} color="#b88628" />,
    },
  ];

  const turnoverOptions = [
    { id: "tier_1", label: "Under ₹25 Lakhs", subtitle: "Early-stage or individual filing" },
    { id: "tier_2", label: "₹25 Lakhs – ₹1 Crore", subtitle: "GST registered & scaling operations" },
    { id: "tier_3", label: "₹1 Crore – ₹10 Crores", subtitle: "Mandatory Tax Audit & multi-vendor ledgers" },
    { id: "tier_4", label: "₹10 Crores+", subtitle: "Enterprise balance sheet & advanced restructuring" },
  ];

  const priorityOptions = [
    { id: "tax_save", label: "Aggressive & 100% Legal Tax Minimization", icon: "💎" },
    { id: "gst_notice", label: "Resolve Pending GST / IT Scrutiny Notices", icon: "⚖️" },
    { id: "dpiit", label: "Secure DPIIT Startup India 3-Year Tax Holiday", icon: "🚀" },
    { id: "cfo", label: "Fractional Virtual CFO & Clean Monthly Ledgers", icon: "📊" },
    { id: "nri_repatriate", label: "Section 197 Lower TDS & Foreign Repatriation", icon: "🌍" },
  ];

  const handleSelectEntity = (id) => {
    setEntityType(id);
    setCurrentStep(2);
  };

  const handleSelectTurnover = (id) => {
    setTurnover(id);
    setCurrentStep(3);
  };

  const handleSelectPriority = (id) => {
    setPriority(id);
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setIsCompleted(true);
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 1100);
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setEntityType("");
    setTurnover("");
    setPriority("");
    setIsCompleted(false);
    setIsCalculating(false);
  };

  // Dynamic calculations based on user input
  const getDiagnosticResults = () => {
    let savingsRange = "₹3.5 Lakhs – ₹12 Lakhs";
    let riskLevel = "Moderate Exposure";
    let riskScore = 72;
    let riskColor = "#f59e0b";

    if (turnover === "tier_3" || turnover === "tier_4") {
      savingsRange = "₹18 Lakhs – ₹65+ Lakhs";
      riskScore = 88;
      riskLevel = "High Optimization Potential";
      riskColor = "#10b981";
    } else if (entityType === "startup") {
      savingsRange = "100% Tax Exemption (Sec 80-IAC)";
      riskScore = 94;
      riskLevel = "Critical Tax Holiday Eligibility";
      riskColor = "#b88628";
    } else if (entityType === "nri") {
      savingsRange = "₹12 Lakhs – ₹35 Lakhs on Property/TDS";
      riskScore = 84;
      riskLevel = "Section 197 Lower TDS Applicable";
      riskColor = "#3b82f6";
    }

    return { savingsRange, riskLevel, riskScore, riskColor };
  };

  const results = getDiagnosticResults();

  const handleWhatsAppWithQuizData = () => {
    const selectedEntityObj = entityOptions.find((e) => e.id === entityType)?.title || entityType;
    const selectedTurnoverObj = turnoverOptions.find((t) => t.id === turnover)?.label || turnover;
    const selectedPriorityObj = priorityOptions.find((p) => p.id === priority)?.label || priority;

    const message = `Hello GUMASTHA,\n\nI just completed your 30-Second Diagnostic:\n• Entity: ${selectedEntityObj}\n• Turnover: ${selectedTurnoverObj}\n• Strategic Focus: ${selectedPriorityObj}\n• Estimated Savings: ${results.savingsRange}\n\nPlease share my tailored strategy blueprint.`;
    window.open(`https://wa.me/919133235818?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div
      style={{
        backgroundColor: "#09090d",
        border: "1px solid rgba(184, 134, 40, 0.3)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(184, 134, 40, 0.08)",
        borderRadius: "0px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Top Gold Ribbon & Stepper */}
      <div
        style={{
          padding: "24px 28px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(184, 134, 40, 0.04)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              backgroundColor: "rgba(184, 134, 40, 0.15)",
              border: "1px solid #b88628",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Sparkles size={16} color="#b88628" />
          </div>
          <div>
            <span
              style={{
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                display: "block",
              }}
            >
              Interactive Diagnostic Engine
            </span>
            <h3
              className="font-cinzel"
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#ffffff",
                margin: 0,
              }}
            >
              30-Second Tax & Compliance Health Check
            </h3>
          </div>
        </div>

        {/* Step Indicator */}
        {!isCompleted && !isCalculating && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                style={{
                  width: currentStep === s ? "28px" : "10px",
                  height: "8px",
                  backgroundColor: currentStep >= s ? "#b88628" : "rgba(255, 255, 255, 0.15)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
            <span style={{ fontSize: "0.75rem", color: "var(--text-silver)", marginLeft: "6px" }}>
              Step {currentStep} of 3
            </span>
          </div>
        )}
      </div>

      {/* Main Body */}
      <div style={{ padding: "clamp(24px, 4vw, 40px)" }}>
        {/* Loading / Calculating State */}
        {isCalculating && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                border: "3px solid rgba(184, 134, 40, 0.2)",
                borderTop: "3px solid #b88628",
                borderRadius: "50%",
                animation: "spin 0.8s linear infinite",
              }}
            />
            <h4 className="font-cinzel" style={{ fontSize: "1.25rem", color: "#ffffff" }}>
              Benchmarking Against ICAI Compliance Standards...
            </h4>
            <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", maxWidth: "420px" }}>
              Analyzing entity structure, potential Input Tax Credit leakage, and legitimate Section 80 / DTAA tax shields.
            </p>
          </div>
        )}

        {/* STEP 1: Entity Type */}
        {!isCalculating && !isCompleted && currentStep === 1 && (
          <div>
            <span
              style={{
                fontSize: "0.72rem",
                color: "var(--accent-champagne)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                display: "block",
                marginBottom: "8px",
              }}
            >
              Step 01 / 03
            </span>
            <h4
              className="font-cinzel"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", color: "#ffffff", marginBottom: "8px" }}
            >
              Select Your Business Or Individual Profile
            </h4>
            <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", marginBottom: "24px" }}>
              Our advisory framework is customized to the legal structure of your enterprise.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "14px",
              }}
            >
              {entityOptions.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => handleSelectEntity(opt.id)}
                  className="quiz-option-card"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "18px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      {opt.icon}
                      <strong style={{ color: "#ffffff", fontSize: "0.95rem" }}>{opt.title}</strong>
                    </div>
                    <ArrowRight size={16} color="var(--text-silver)" />
                  </div>
                  <p style={{ color: "var(--text-silver)", fontSize: "0.78rem", lineHeight: 1.4, margin: 0 }}>
                    {opt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Turnover Bracket */}
        {!isCalculating && !isCompleted && currentStep === 2 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--accent-champagne)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Step 02 / 03
              </span>
              <button
                onClick={() => setCurrentStep(1)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-silver)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                ← Back
              </button>
            </div>

            <h4
              className="font-cinzel"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", color: "#ffffff", marginBottom: "8px" }}
            >
              Estimated Annual Gross Turnover / Income
            </h4>
            <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", marginBottom: "24px" }}>
              Used to determine mandatory audit thresholds, GST frequency, and tax bracket exposure.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "14px",
              }}
            >
              {turnoverOptions.map((t) => (
                <div
                  key={t.id}
                  onClick={() => handleSelectTurnover(t.id)}
                  className="quiz-option-card"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "20px 18px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <strong style={{ color: "var(--accent-champagne)", fontSize: "1.1rem", display: "block", marginBottom: "4px" }}>
                    {t.label}
                  </strong>
                  <span style={{ color: "var(--text-silver)", fontSize: "0.78rem" }}>{t.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Primary Strategic Focus */}
        {!isCalculating && !isCompleted && currentStep === 3 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--accent-champagne)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Step 03 / 03
              </span>
              <button
                onClick={() => setCurrentStep(2)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-silver)",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                ← Back
              </button>
            </div>

            <h4
              className="font-cinzel"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", color: "#ffffff", marginBottom: "8px" }}
            >
              What Is Your Immediate Financial Objective?
            </h4>
            <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", marginBottom: "24px" }}>
              Select your high-priority goal to generate your tailored compliance & tax-shield roadmap.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {priorityOptions.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelectPriority(p.id)}
                  className="quiz-option-card"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "16px 20px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                    <strong style={{ color: "#ffffff", fontSize: "0.92rem" }}>{p.label}</strong>
                  </div>
                  <ArrowRight size={16} color="var(--accent-gold)" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: DIAGNOSTIC RESULTS & BLUEPRINT */}
        {isCompleted && (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "28px",
                alignItems: "center",
                marginBottom: "32px",
              }}
            >
              {/* Score Box */}
              <div
                style={{
                  backgroundColor: "rgba(184, 134, 40, 0.08)",
                  border: "1px solid rgba(184, 134, 40, 0.4)",
                  padding: "26px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent-gold)",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Strategic Assessment Score
                </span>
                <div
                  className="font-cinzel"
                  style={{
                    fontSize: "3.2rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {results.riskScore}
                  <span style={{ fontSize: "1.6rem", color: "var(--accent-gold)" }}>/100</span>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    padding: "4px 12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "0.78rem",
                    color: results.riskColor,
                    fontWeight: 700,
                  }}
                >
                  <ShieldCheck size={14} />
                  <span>{results.riskLevel}</span>
                </div>
              </div>

              {/* Savings Potential Box */}
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--text-silver)",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Estimated Tax Shield Potential:
                </span>
                <h3
                  className="font-cinzel"
                  style={{
                    fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)",
                    color: "var(--accent-champagne)",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  {results.savingsRange}
                </h3>
                <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                  Based on your revenue bracket and legal structure, our proactive tax structuring framework can eliminate tax leakage and protect against departmental notice penalties.
                </p>
              </div>
            </div>

            {/* Strategic Directives List */}
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "20px 24px",
                marginBottom: "28px",
              }}
            >
              <h5
                className="font-cinzel"
                style={{ fontSize: "0.95rem", color: "#ffffff", marginBottom: "14px", letterSpacing: "0.05em" }}
              >
                Recommended Immediate Strategic Actions:
              </h5>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={16} color="#b88628" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ color: "#ffffff", fontSize: "0.85rem" }}>
                    <strong>General Ledger & ITC Reconciliation:</strong> Cross-verify GSTR-2B vs 3B to reclaim dormant vendor credits.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={16} color="#b88628" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ color: "#ffffff", fontSize: "0.85rem" }}>
                    <strong>Statutory Exemption Filing:</strong> Leverage eligible DPIIT 80-IAC or Section 197 certifications before current quarter close.
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <CheckCircle2 size={16} color="#b88628" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <span style={{ color: "#ffffff", fontSize: "0.85rem" }}>
                    <strong>Executive Advisory Blueprint:</strong> Discuss balance-sheet tax provisioning directly with GUMASTA.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
              <button
                onClick={() => onOpenBooking && onOpenBooking("Tax Strategy & Health Check Advisory")}
                className="btn-gold"
                style={{ flex: "1 1 240px", justifyContent: "center" }}
              >
                <span>Book 1-on-1 Advisory Session</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleWhatsAppWithQuizData}
                style={{
                  flex: "1 1 240px",
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  border: "none",
                  padding: "14px 22px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.25s ease",
                }}
              >
                <MessageSquare size={16} />
                <span>Receive Blueprint On WhatsApp</span>
              </button>

              <button
                onClick={resetQuiz}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "var(--text-silver)",
                  padding: "14px 18px",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <RotateCcw size={14} />
                <span>Retake</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .quiz-option-card:hover {
          border-color: rgba(184, 134, 40, 0.6) !important;
          background-color: rgba(184, 134, 40, 0.08) !important;
          transform: translateY(-2px);
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
