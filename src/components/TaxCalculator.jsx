"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Calculator, CheckCircle2, TrendingDown, Sparkles, Phone } from "lucide-react";

export default function TaxCalculator({ onOpenBooking }) {
  const [annualIncome, setAnnualIncome] = useState(1500000);
  const [isSalaried, setIsSalaried] = useState(true);
  const [sec80C, setSec80C] = useState(150000);
  const [sec80D, setSec80D] = useState(25000);
  const [homeLoanSec24, setHomeLoanSec24] = useState(100000);
  const [nps80CCD, setNps80CCD] = useState(50000);

  const calculateOldRegime = () => {
    const stdDeduction = isSalaried ? 50000 : 0;
    const totalDeductions =
      stdDeduction +
      Math.min(Number(sec80C) || 0, 150000) +
      Math.min(Number(sec80D) || 0, 75000) +
      Math.min(Number(homeLoanSec24) || 0, 200000) +
      Math.min(Number(nps80CCD) || 0, 50000);

    const taxableIncome = Math.max(0, annualIncome - totalDeductions);

    let tax = 0;
    if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.3 + 100000 + 12500;
    } else if (taxableIncome > 500000) {
      tax += (taxableIncome - 500000) * 0.2 + 12500;
    } else if (taxableIncome > 250000) {
      tax += (taxableIncome - 250000) * 0.05;
    }

    // 87A Rebate for Old Regime
    if (taxableIncome <= 500000) {
      tax = 0;
    }

    const cess = tax * 0.04;
    return {
      taxableIncome,
      totalDeductions,
      tax: Math.round(tax + cess),
    };
  };

  const calculateNewRegime = () => {
    const stdDeduction = isSalaried ? 75000 : 0;
    const taxableIncome = Math.max(0, annualIncome - stdDeduction);

    let tax = 0;
    if (taxableIncome > 1500000) {
      tax += (taxableIncome - 1500000) * 0.3 + 60000 + 30000 + 30000 + 20000;
    } else if (taxableIncome > 1200000) {
      tax += (taxableIncome - 1200000) * 0.2 + 30000 + 30000 + 20000;
    } else if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.15 + 30000 + 20000;
    } else if (taxableIncome > 700000) {
      tax += (taxableIncome - 700000) * 0.1 + 20000;
    } else if (taxableIncome > 300000) {
      tax += (taxableIncome - 300000) * 0.05;
    }

    // 87A Rebate for New Regime (up to 7 Lakhs taxable income)
    if (taxableIncome <= 700000) {
      tax = 0;
    }

    const cess = tax * 0.04;
    return {
      taxableIncome,
      stdDeduction,
      tax: Math.round(tax + cess),
    };
  };

  const oldResult = useMemo(calculateOldRegime, [annualIncome, isSalaried, sec80C, sec80D, homeLoanSec24, nps80CCD]);
  const newResult = useMemo(calculateNewRegime, [annualIncome, isSalaried]);

  const diff = oldResult.tax - newResult.tax;
  const isNewBetter = diff > 0;
  const savings = Math.abs(diff);

  const formatINR = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div
      style={{
        backgroundColor: "#0d0d11",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        padding: "48px 36px",
        position: "relative",
      }}
    >
      <div style={{ marginBottom: "32px", textAlign: "center" }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent-gold)",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <Sparkles size={14} />
          FY 2024-25 / AY 2025-26 TAX INTELLIGENCE
        </span>
        <h3
          className="font-cinzel"
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#ffffff",
            marginBottom: "8px",
          }}
        >
          Old vs New Tax Regime Estimator
        </h3>
        <p style={{ color: "var(--text-silver)", fontSize: "0.95rem", maxWidth: "680px", margin: "0 auto" }}>
          Simulate your tax liability under both Indian tax regimes and see how much strategic Chartered Accountancy can save you.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
        {/* Input Parameters */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <label className="luxury-label">Gross Annual Income</label>
              <span className="font-cinzel" style={{ color: "#ffffff", fontWeight: 700, fontSize: "1.1rem" }}>
                {formatINR(annualIncome)}
              </span>
            </div>
            <input
              type="range"
              min={300000}
              max={10000000}
              step={50000}
              value={annualIncome}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: "#b88628",
                cursor: "pointer",
                height: "6px",
                backgroundColor: "#222226",
              }}
            />
          </div>

          <div>
            <label className="luxury-label">Employment Type</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <button
                type="button"
                onClick={() => setIsSalaried(true)}
                style={{
                  padding: "10px",
                  backgroundColor: isSalaried ? "#ffffff" : "transparent",
                  color: isSalaried ? "#000000" : "#ffffff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Salaried Professional
              </button>
              <button
                type="button"
                onClick={() => setIsSalaried(false)}
                style={{
                  padding: "10px",
                  backgroundColor: !isSalaried ? "#ffffff" : "transparent",
                  color: !isSalaried ? "#000000" : "#ffffff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Business / Consultant
              </button>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px" }}>
            <span style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-silver)", display: "block", marginBottom: "12px" }}>
              Old Regime Deductions (Optional)
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              <div>
                <label style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>
                  80C (PPF/ELSS/LIC)
                </label>
                <input
                  type="number"
                  className="luxury-input"
                  style={{ padding: "8px 12px", fontSize: "0.85rem" }}
                  value={sec80C}
                  onChange={(e) => setSec80C(e.target.value)}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>
                  80D (Health Insurance)
                </label>
                <input
                  type="number"
                  className="luxury-input"
                  style={{ padding: "8px 12px", fontSize: "0.85rem" }}
                  value={sec80D}
                  onChange={(e) => setSec80D(e.target.value)}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>
                  Sec 24 (Home Loan Int)
                </label>
                <input
                  type="number"
                  className="luxury-input"
                  style={{ padding: "8px 12px", fontSize: "0.85rem" }}
                  value={homeLoanSec24}
                  onChange={(e) => setHomeLoanSec24(e.target.value)}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>
                  80CCD(1B) (NPS Tier-1)
                </label>
                <input
                  type="number"
                  className="luxury-input"
                  style={{ padding: "8px 12px", fontSize: "0.85rem" }}
                  value={nps80CCD}
                  onChange={(e) => setNps80CCD(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Comparison Board */}
        <div
          style={{
            backgroundColor: "#050507",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-silver)" }}>
                Tax Comparison
              </span>
              <span
                style={{
                  backgroundColor: "rgba(184, 134, 40, 0.15)",
                  color: "var(--accent-gold)",
                  border: "1px solid var(--accent-gold)",
                  padding: "4px 10px",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Recommended: {isNewBetter ? "New Regime" : "Old Regime"}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
              {/* New Regime Card */}
              <div
                style={{
                  backgroundColor: isNewBetter ? "rgba(255,255,255,0.06)" : "transparent",
                  border: isNewBetter ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.1)",
                  padding: "18px 14px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-silver)", display: "block", marginBottom: "4px" }}>
                  New Regime Tax
                </span>
                <span className="font-cinzel" style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", display: "block" }}>
                  {formatINR(newResult.tax)}
                </span>
                <span style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>
                  Incl. 4% Cess
                </span>
              </div>

              {/* Old Regime Card */}
              <div
                style={{
                  backgroundColor: !isNewBetter ? "rgba(255,255,255,0.06)" : "transparent",
                  border: !isNewBetter ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.1)",
                  padding: "18px 14px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-silver)", display: "block", marginBottom: "4px" }}>
                  Old Regime Tax
                </span>
                <span className="font-cinzel" style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", display: "block" }}>
                  {formatINR(oldResult.tax)}
                </span>
                <span style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>
                  Incl. 4% Cess
                </span>
              </div>
            </div>

            {/* Savings Banner */}
            <div
              style={{
                backgroundColor: "rgba(184, 134, 40, 0.08)",
                border: "1px solid rgba(184, 134, 40, 0.3)",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <TrendingDown size={24} color="#b88628" />
              <div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-silver)", display: "block" }}>
                  Estimated Savings with {isNewBetter ? "New Regime" : "Old Regime"}:
                </span>
                <span className="font-cinzel" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--accent-gold)" }}>
                  {savings > 0 ? formatINR(savings) : "Equal Liability"}
                </span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenBooking}
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <span>Strategize Tax with CA Nikil</span>
              <ArrowRight size={16} />
            </button>
            <p style={{ textAlign: "center", fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "8px" }}>
              *Subject to capital gains, NRI status & corporate rebates. Book advisory for tailored filing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
