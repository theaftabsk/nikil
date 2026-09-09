"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BookingModal from "@/components/BookingModal";
import PressTicker from "@/components/PressTicker";
import {
  Calculator,
  FileSpreadsheet,
  Building2,
  TrendingUp,
  Briefcase,
  Users2,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  Clock,
  HeartHandshake,
} from "lucide-react";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const practicePillars = [
    {
      title: "ACCOUNTING",
      icon: <FileSpreadsheet size={24} color="var(--accent-gold)" />,
      items: [
        "Bookkeeping",
        "Outsourcing",
        "Day to day accounts",
        "Reconciliation statement",
        "Raising invoices",
      ],
    },
    {
      title: "TAXATION",
      icon: <Calculator size={24} color="var(--accent-gold)" />,
      items: [
        "Direct & indirect taxes",
        "TDS compliance & filing",
        "GST services & returns",
        "Income tax (Individuals & Firms)",
        "ROC filings",
        "Tax compliances & representations",
      ],
    },
    {
      title: "BUSINESS ADVISORY SERVICES",
      icon: <TrendingUp size={24} color="var(--accent-gold)" />,
      items: [
        "Business development",
        "Business analysis",
        "Business management",
        "Business structuring",
      ],
    },
    {
      title: "REGISTRATIONS",
      icon: <Building2 size={24} color="var(--accent-gold)" />,
      items: [
        "Incorporation of companies (Pvt Ltd, LLP, OPC)",
        "PAN issuance",
        "TAN registration",
        "GST registration",
        "PF, ESI Registrations",
        "IEC (Import Export Code)",
        "Trademark registrations",
      ],
    },
    {
      title: "COSTING",
      icon: <Briefcase size={24} color="var(--accent-gold)" />,
      items: [
        "Cost advices",
        "Budgeting",
        "Cost control analysis",
        "Financial variance audits",
      ],
    },
    {
      title: "HR SERVICES",
      icon: <Users2 size={24} color="var(--accent-gold)" />,
      items: [
        "Payroll processing",
        "PF (Provident Fund)",
        "ESI (Employee State Insurance)",
        "MIS reports for management",
      ],
    },
  ];

  return (
    <main style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative" }}>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* =========================================================================
          HERO SECTION (Brochure Header Theme)
      ========================================================================== */}
      <section
        style={{
          padding: "clamp(120px, 14vw, 170px) 0 clamp(40px, 6vw, 70px)",
          backgroundColor: "#08080a",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="container" style={{ maxWidth: "880px", position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(184, 134, 40, 0.12)",
              border: "1px solid rgba(184, 134, 40, 0.35)",
              padding: "6px 16px",
              marginBottom: "18px",
            }}
          >
            <Sparkles size={14} color="var(--accent-gold)" />
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                fontWeight: 700,
              }}
            >
              One Stop Solution For All Your Business Needs
            </span>
          </div>

          <h1
            className="font-cinzel"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
              letterSpacing: "0.06em",
              lineHeight: 1.1,
            }}
          >
            ABOUT GUMASTHA
          </h1>

          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--accent-champagne)",
              fontWeight: 700,
              display: "block",
              marginBottom: "20px",
            }}
          >
            Taxation | IFRS | Business Advisory Services
          </span>

          <p style={{ color: "var(--text-silver)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "720px", margin: "0 auto" }}>
            Headquartered in Hyderabad, serving businesses, corporate entities, and ambitious founders nationwide with 100% online, hassle-free registration and compliance solutions.
          </p>
        </div>
      </section>

      <PressTicker onOpenBooking={() => setIsBookingOpen(true)} />

      {/* =========================================================================
          OFFICIAL ABOUT US MISSION CARD (From Brochure)
      ========================================================================== */}
      <section style={{ padding: "clamp(60px, 8vw, 100px) 0", backgroundColor: "#050505" }}>
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div
            style={{
              backgroundColor: "#0d0d12",
              border: "1px solid rgba(184, 134, 40, 0.35)",
              padding: "clamp(28px, 5vw, 54px)",
              position: "relative",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(184, 134, 40, 0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--accent-gold)",
                  fontWeight: 700,
                }}
              >
                Our Core Philosophy
              </span>
            </div>

            <h2
              className="font-cinzel"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                color: "#ffffff",
                marginBottom: "24px",
                fontWeight: 700,
              }}
            >
              ABOUT US
            </h2>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: "#f0f0f5",
                lineHeight: 1.8,
                marginBottom: "32px",
                fontStyle: "normal",
                borderLeft: "3px solid var(--accent-gold)",
                paddingLeft: "20px",
              }}
            >
              "Gumastha based at Hyderabad providing varied services in the field of accounting, book keeping, taxation and business advisory services. We the team of positive thinkers and we respect time and efforts of our clients to provide hassle free services. We practice value for money concept hence, are concerned about our Clients well being."
            </p>

            {/* 3 Core Values from the statement */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Sparkles size={20} color="var(--accent-gold)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "4px" }}>
                    Positive Thinkers
                  </h4>
                  <p style={{ color: "var(--text-silver)", fontSize: "0.82rem", lineHeight: 1.5 }}>
                    Constructive, solution-driven approach to every accounting, taxation, and advisory challenge.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <Clock size={20} color="var(--accent-gold)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "4px" }}>
                    Respect Time & Effort
                  </h4>
                  <p style={{ color: "var(--text-silver)", fontSize: "0.82rem", lineHeight: 1.5 }}>
                    Providing fast, 100% hassle-free online services so you focus completely on growing your business.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <HeartHandshake size={20} color="var(--accent-gold)" style={{ marginTop: "2px", flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, marginBottom: "4px" }}>
                    Value For Money
                  </h4>
                  <p style={{ color: "var(--text-silver)", fontSize: "0.82rem", lineHeight: 1.5 }}>
                    Dedicated to our clients' financial well-being and long-term commercial sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRACTICE PILLARS (The 6 Services from Brochure)
      ========================================================================== */}
      <section
        style={{
          padding: "clamp(60px, 8vw, 100px) 0",
          backgroundColor: "#08080a",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                fontWeight: 700,
                display: "block",
                marginBottom: "10px",
              }}
            >
              Complete Scope of Services
            </span>
            <h2 className="font-cinzel" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#ffffff", fontWeight: 700 }}>
              OUR 6 PRACTICE PILLARS
            </h2>
            <p style={{ color: "var(--text-silver)", fontSize: "0.95rem", maxWidth: "600px", margin: "12px auto 0" }}>
              Comprehensive professional services delivered seamlessly online and in-person.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "28px",
            }}
          >
            {practicePillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#0c0c10",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                }}
                className="card-luxury"
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                    <div
                      style={{
                        backgroundColor: "rgba(184, 134, 40, 0.12)",
                        border: "1px solid rgba(184, 134, 40, 0.3)",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {pillar.icon}
                    </div>
                    <h3
                      className="font-cinzel"
                      style={{
                        fontSize: "1.1rem",
                        color: "#ffffff",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        margin: 0,
                      }}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {pillar.items.map((item, itemIdx) => (
                      <div key={itemIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckCircle2 size={16} color="var(--accent-gold)" style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ color: "var(--text-silver)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--accent-gold)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <span>Consult on {pillar.title.split(" ")[0]}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OFFICES & CONNECT (Exact details from Brochure)
      ========================================================================== */}
      <section style={{ padding: "clamp(60px, 8vw, 90px) 0", backgroundColor: "#050505" }}>
        <div className="container" style={{ maxWidth: "1040px" }}>
          <div
            style={{
              backgroundColor: "#0d0d12",
              border: "1px solid rgba(184, 134, 40, 0.3)",
              padding: "clamp(28px, 4vw, 44px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "36px",
              alignItems: "center",
            }}
          >
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
                Direct Office Presence
              </span>
              <h3 className="font-cinzel" style={{ fontSize: "1.8rem", color: "#ffffff", marginBottom: "18px" }}>
                HYDERABAD HEADQUARTERS
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", color: "var(--text-silver)", fontSize: "0.9rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <MapPin size={18} color="#ffffff" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#ffffff", display: "block" }}>Primary Executive Office:</strong>
                    <span>H.No: 47-003, 2nd Floor, Above Kaira, Sri Sai Colony, Hyderabad, Telangana 500037</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <MapPin size={18} color="#ffffff" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#ffffff", display: "block" }}>Branch / Registered Address:</strong>
                    <span>Sri Dariyav Super Market, 3rd Floor, IDPL X Roads, Gandhi Nagar, Hyderabad 54</span>
                    <span style={{ display: "block", color: "var(--text-muted)", fontSize: "0.82rem" }}>
                      Door No: 320, Padmavathi Plaza, KPHB, Hyderabad
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <Phone size={18} color="#ffffff" style={{ marginTop: "3px", flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#ffffff", display: "block" }}>Direct Contact Numbers:</strong>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <a href="tel:+919133235818" style={{ color: "#ffffff", textDecoration: "none" }}>
                        +91 91332 35818
                      </a>
                      <a href="tel:+917416414358" style={{ color: "#ffffff", textDecoration: "none" }}>
                        +91 7416 414 358
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Mail size={18} color="#ffffff" style={{ flexShrink: 0 }} />
                  <div>
                    <strong style={{ color: "#ffffff", display: "block" }}>Official Email:</strong>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      <a href="mailto:advisory@gumastha.co.in" style={{ color: "#ffffff", textDecoration: "none" }}>
                        advisory@gumastha.co.in
                      </a>
                      <span>•</span>
                      <a href="mailto:Gumasta143@gmail.com" style={{ color: "#ffffff", textDecoration: "none" }}>
                        Gumasta143@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                textAlign: "center",
              }}
            >
              <h4 className="font-cinzel" style={{ fontSize: "1.2rem", color: "#ffffff", margin: 0 }}>
                Instant Advisory Connect
              </h4>
              <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>
                Have an accounting, company registration, GST or tax query? Connect with our senior desk directly on WhatsApp.
              </p>

              <a
                href="https://wa.me/919133235818?text=Hello%20GUMASTHA%2C%20I%20would%20like%20to%20consult%20regarding%20accounting%2C%20taxation%20and%20business%20services."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  padding: "14px 20px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  boxShadow: "0 6px 20px rgba(37, 211, 102, 0.3)",
                }}
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp (+91 91332 35818)</span>
              </a>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="btn-gold"
                style={{ width: "100%", justifyContent: "center", padding: "13px 20px" }}
              >
                <span>Book Strategy Consultation</span>
                <ArrowRight size={16} />
              </button>
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
