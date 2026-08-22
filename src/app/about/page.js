"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BookingModal from "@/components/BookingModal";
import PressTicker from "@/components/PressTicker";
import { ShieldCheck, Award, Target, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative" }}>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Header */}
      <section
        style={{
          padding: "160px 0 80px",
          backgroundColor: "#08080a",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "840px" }}>
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
            The Firm & Leadership
          </span>
          <h1
            className="font-cinzel"
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "20px",
              lineHeight: 1.1,
            }}
          >
            ARCHITECTS OF FISCAL CERTAINTY
          </h1>
          <p style={{ color: "var(--text-silver)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Merging ICAI statutory rigor with modern financial strategy to protect wealth and scale ambitious enterprises.
          </p>
        </div>
      </section>

      <PressTicker onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Executive Bio */}
      <section style={{ padding: "100px 0", backgroundColor: "#050505" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "540px",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <Image
                  src="/images/nikil-portrait.jpg"
                  alt="GUMASTA - The Accountant"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
            </div>

            <div>
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--accent-gold)",
                  fontWeight: 700,
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                The Firm • The Accountant
              </span>

              <h2
                className="font-cinzel"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "20px",
                }}
              >
                GUMASTA
              </h2>

              <p style={{ color: "var(--text-silver)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "16px" }}>
                GUMASTA (The Accountant) is a premier accounting and strategic advisory practice with deep specialization in corporate tax planning, indirect tax litigation, statutory audits, and startup valuations.
              </p>

              <p style={{ color: "var(--text-silver)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "24px" }}>
                Over the past decade, our firm has acted as a trusted financial confidant to high-profile founders, real estate magnates, restaurateurs, and NRI investors across the UAE, UK, US, and Singapore. Under our leadership, the practice has successfully advised over 500+ businesses and safeguarded more than ₹120 Crores in legitimate tax deductions.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="#b88628" />
                  <span style={{ color: "#ffffff", fontSize: "0.9rem" }}>ICAI Certified & Peer-Reviewed Practice</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="#b88628" />
                  <span style={{ color: "#ffffff", fontSize: "0.9rem" }}>Registered GST & Income Tax Scrutiny Practitioner</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="#b88628" />
                  <span style={{ color: "#ffffff", fontSize: "0.9rem" }}>Official Startup India DPIIT Advisory Partner</span>
                </div>
              </div>

              <button onClick={() => setIsBookingOpen(true)} className="btn-gold">
                <span>Book 1-on-1 Strategy Session</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section style={{ padding: "100px 0", backgroundColor: "#ffffff", color: "#000000" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#666666",
                fontWeight: 700,
                display: "block",
                marginBottom: "12px",
              }}
            >
              Our Foundation
            </span>
            <h2 className="font-cinzel" style={{ fontSize: "2.4rem", fontWeight: 700, color: "#000000" }}>
              FOUR PILLARS OF EXCELLENCE
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "32px",
            }}
          >
            <div className="card-white">
              <span className="font-cinzel" style={{ fontSize: "1.5rem", color: "#000000", display: "block", marginBottom: "12px" }}>
                01. Absolute Integrity
              </span>
              <p style={{ color: "#444444", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Every financial report and tax schedule prepared by our firm adheres strictly to ICAI professional standards and statutory mandates.
              </p>
            </div>

            <div className="card-white">
              <span className="font-cinzel" style={{ fontSize: "1.5rem", color: "#000000", display: "block", marginBottom: "12px" }}>
                02. Proactive Alpha
              </span>
              <p style={{ color: "#444444", fontSize: "0.9rem", lineHeight: 1.6 }}>
                We do not wait for year-end to plan. We optimize cash flow, input tax credits, and deduction buckets in real-time.
              </p>
            </div>

            <div className="card-white">
              <span className="font-cinzel" style={{ fontSize: "1.5rem", color: "#000000", display: "block", marginBottom: "12px" }}>
                03. Data Fortress
              </span>
              <p style={{ color: "#444444", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Bank-grade 256-bit encrypted data handling. We treat client balance sheets and cap tables with extreme confidentiality.
              </p>
            </div>

            <div className="card-white">
              <span className="font-cinzel" style={{ fontSize: "1.5rem", color: "#000000", display: "block", marginBottom: "12px" }}>
                04. Velocity & Agility
              </span>
              <p style={{ color: "#444444", fontSize: "0.9rem", lineHeight: 1.6 }}>
                Direct responses within hours, not weeks. Fast-track company incorporations in 5-7 days and zero-delay filings.
              </p>
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
      />

      <Footer onOpenBooking={() => setIsBookingOpen(true)} />
    </main>
  );
}
