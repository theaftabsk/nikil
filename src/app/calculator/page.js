"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BookingModal from "@/components/BookingModal";
import TaxCalculator from "@/components/TaxCalculator";
import PressTicker from "@/components/PressTicker";
import { Calculator, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";

export default function CalculatorPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative" }}>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Header */}
      <section
        style={{
          padding: "160px 0 60px",
          backgroundColor: "#08080a",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              fontWeight: 700,
              display: "block",
              marginBottom: "12px",
            }}
          >
            Real-Time Financial Intelligence
          </span>
          <h1
            className="font-cinzel"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            INCOME TAX REGIME ESTIMATOR
          </h1>
          <p style={{ color: "var(--text-silver)", fontSize: "1rem", lineHeight: 1.6 }}>
            Accurate simulation for Assessment Year 2025-26 under the latest Indian Finance Act provisions. Compare your liability and uncover potential savings.
          </p>
        </div>
      </section>

      <PressTicker onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Calculator Interactive Section */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <TaxCalculator onOpenBooking={() => setIsBookingOpen(true)} />

          {/* Advance Tax Compliance Guide */}
          <div
            style={{
              marginTop: "60px",
              backgroundColor: "#0a0a0d",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "36px",
            }}
          >
            <h3
              className="font-cinzel"
              style={{
                fontSize: "1.4rem",
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              Advance Tax Calendar & Statutory Deadlines (FY 2024-25)
            </h3>
            <p style={{ color: "var(--text-silver)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "24px" }}>
              If your estimated net tax liability exceeds ₹10,000 for the financial year, Advance Tax must be paid in four installments to avoid interest penalties under Section 234B and 234C:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              <div style={{ backgroundColor: "#060608", padding: "18px", borderLeft: "3px solid var(--accent-gold)" }}>
                <span style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--accent-gold)", fontWeight: 700, display: "block" }}>
                  1st Installment (15%)
                </span>
                <span className="font-cinzel" style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", margin: "4px 0" }}>
                  On or before 15th June
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>15% of estimated advance tax</span>
              </div>

              <div style={{ backgroundColor: "#060608", padding: "18px", borderLeft: "3px solid #ffffff" }}>
                <span style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--text-silver)", fontWeight: 700, display: "block" }}>
                  2nd Installment (45%)
                </span>
                <span className="font-cinzel" style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", margin: "4px 0" }}>
                  On or before 15th Sept
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>45% of estimated advance tax</span>
              </div>

              <div style={{ backgroundColor: "#060608", padding: "18px", borderLeft: "3px solid #ffffff" }}>
                <span style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--text-silver)", fontWeight: 700, display: "block" }}>
                  3rd Installment (75%)
                </span>
                <span className="font-cinzel" style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", margin: "4px 0" }}>
                  On or before 15th Dec
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>75% of estimated advance tax</span>
              </div>

              <div style={{ backgroundColor: "#060608", padding: "18px", borderLeft: "3px solid var(--accent-gold)" }}>
                <span style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--accent-gold)", fontWeight: 700, display: "block" }}>
                  4th Installment (100%)
                </span>
                <span className="font-cinzel" style={{ fontSize: "1.1rem", color: "#ffffff", display: "block", margin: "4px 0" }}>
                  On or before 15th March
                </span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>100% of estimated advance tax</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Actions */}
      <FloatingActions onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService="Income Tax Return Filing"
      />

      <Footer onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
