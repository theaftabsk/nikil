"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PressTicker from "@/components/PressTicker";
import TaxCalculator from "@/components/TaxCalculator";
import BookingModal from "@/components/BookingModal";
import ServiceModal from "@/components/ServiceModal";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Award,
  CheckCircle,
  Clock,
  TrendingUp,
  FileCheck,
  Users,
  ChevronDown,
  Sparkles,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState("");
  const [activeServiceModal, setActiveServiceModal] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const openBookingWithService = (serviceName = "") => {
    setSelectedServiceForBooking(serviceName);
    setIsBookingOpen(true);
  };

  const faqs = [
    {
      q: "What makes CA Nikil & Associates different from traditional accounting firms?",
      a: "Traditional accountants are reactive—filing your taxes only at year-end. At CA Nikil & Associates, we take a proactive, strategic advisory approach. We continuously evaluate your balance sheet, corporate structure, GST input claims, and government incentives (such as DPIIT Startup India exemptions) throughout the fiscal year to legally minimize your tax burden and protect you against scrutiny.",
    },
    {
      q: "Can you assist with DPIIT Startup India registration and Angel Tax exemptions?",
      a: "Yes. We have helped numerous early-stage and funded startups secure DPIIT recognition and Section 80-IAC / Section 56(2)(viib) tax exemptions. We prepare complete investor-grade compliance documentation, pitch decks, and ROC filings.",
    },
    {
      q: "How does the Income Tax Return (ITR) filing process work for NRIs and High-Net-Worth individuals?",
      a: "Our team conducts a thorough reconciliation of your AIS (Annual Information Statement), Form 26AS, foreign asset disclosures (Schedule FA), and DTAA double taxation relief. We also issue Form 15CA/15CB certificates for seamless repatriation of funds.",
    },
    {
      q: "What types of audits does your firm undertake?",
      a: "We conduct Statutory Audits under the Companies Act 2013, Tax Audits under Section 44AB of the Income Tax Act, GST Audits, Internal Forensic Audits, and specific sector audits for Hospitality (F&B), E-Commerce, Healthcare, and Real Estate.",
    },
    {
      q: "How quickly can a new Private Limited Company or LLP be registered?",
      a: "Under the SPICe+ MCA simplified process, we typically complete company incorporation within 5 to 7 business days, including PAN, TAN, Digital Signature Certificates (DSC), and bank account setup assistance.",
    },
  ];

  return (
    <main style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative" }}>
      {/* Navigation */}
      <Navbar onOpenBooking={() => openBookingWithService()} />

      {/* =========================================================================
          HERO SECTION (Evan Luthra Signature Aesthetic + Regal Insignia)
      ========================================================================== */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "160px 0 60px",
          overflow: "hidden",
          backgroundColor: "#050505",
        }}
      >
        {/* Background Moody Regal Image Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "60%",
            height: "100%",
            zIndex: 1,
            opacity: 0.38,
            maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)",
            WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)",
          }}
        >
          <Image
            src="/images/regal-crown.jpg"
            alt="Prestige Symbol"
            fill
            style={{ objectFit: "cover", objectPosition: "center right" }}
            priority
          />
        </div>

        {/* Ambient Dark Gradient Vignette */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 20% 50%, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.4) 60%, rgba(5,5,5,0.95) 100%)",
            zIndex: 2,
          }}
        />

        <div className="container-wide" style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto",
              gap: "48px",
              alignItems: "flex-end",
            }}
            className="hero-grid"
          >
            {/* Left Vertical Indicator (Evan Luthra style) */}
            <div className="vertical-scroll-label desktop-only">
              Scroll To Explore
            </div>

            {/* Center Authority Headline */}
            <div style={{ maxWidth: "780px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid rgba(184, 134, 40, 0.4)",
                  padding: "6px 14px",
                  marginBottom: "24px",
                  backgroundColor: "rgba(184, 134, 40, 0.08)",
                }}
              >
                <Sparkles size={14} color="#b88628" />
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#f3e5ab",
                  }}
                >
                  ICAI Registered Practice • Mumbai & Global
                </span>
              </div>

              <h1
                className="font-cinzel"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "0.02em",
                  color: "#ffffff",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                }}
              >
                STRATEGIC TAX ADVISOR & CHARTERED ACCOUNTANT
              </h1>

              <p
                style={{
                  color: "var(--text-silver)",
                  fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  maxWidth: "640px",
                }}
              >
                CA Nikil advises ambitious founders, high-growth enterprises, and HNIs. Over ₹120 Crores protected in strategic tax compliance, statutory audits, and corporate restructuring.
              </p>
            </div>

            {/* Right White Card Overlay (Evan Luthra style screenshot 1) */}
            <div
              className="hero-side-card"
              style={{
                width: "360px",
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "32px 28px",
                boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#666666",
                }}
              >
                Priority Strategy Session
              </span>

              <h2
                className="font-cinzel"
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: "#000000",
                }}
              >
                Private 1-on-1 Tax & Corporate Advisory
              </h2>

              <p style={{ fontSize: "0.85rem", color: "#444444", lineHeight: 1.5 }}>
                Reserve a confidential consultation with CA Nikil to structure your entity, resolve scrutiny, or optimize fiscal liabilities.
              </p>

              <button
                onClick={() => openBookingWithService()}
                className="btn-gold"
                style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}
              >
                <span>Work With Nikil</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Credential Ticker */}
      <PressTicker onOpenBooking={() => openBookingWithService()} />

      {/* =========================================================================
          3-STEP STRATEGY FRAMEWORK (Evan Luthra style: 01, 02, 03)
      ========================================================================== */}
      <section
        style={{
          padding: "100px 0",
          backgroundColor: "#000000",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
              The 3-Pillar Framework
            </span>
            <h2 className="font-cinzel" style={{ fontSize: "2.4rem", fontWeight: 700, color: "#ffffff" }}>
              HOW WE DELIVER CERTAINTY
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Step 01 */}
            <div
              style={{
                backgroundColor: "#0a0a0d",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "40px 32px",
                position: "relative",
              }}
            >
              <div className="step-number">01.</div>
              <h3 className="step-title">DIAGNOSE & AUDIT</h3>
              <p style={{ color: "var(--text-silver)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                We conduct an exhaustive forensic review of your prior returns, GST input matches, accounting ledgers, and contract structures to pinpoint hidden liabilities and unutilized tax credits.
              </p>
            </div>

            {/* Step 02 */}
            <div
              style={{
                backgroundColor: "#0a0a0d",
                border: "1px solid rgba(184, 134, 40, 0.3)",
                padding: "40px 32px",
                position: "relative",
              }}
            >
              <div className="step-number" style={{ color: "var(--accent-gold)" }}>02.</div>
              <h3 className="step-title" style={{ color: "#ffffff" }}>STRATEGIZE & SHIELD</h3>
              <p style={{ color: "var(--text-silver)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                We engineer a bespoke tax roadmap leveraging legitimate government exemptions (DPIIT Startup India, R&D credits, optimal corporate entity structures, and Section 80 incentives).
              </p>
            </div>

            {/* Step 03 */}
            <div
              style={{
                backgroundColor: "#0a0a0d",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "40px 32px",
                position: "relative",
              }}
            >
              <div className="step-number">03.</div>
              <h3 className="step-title">EXECUTE & GROW</h3>
              <p style={{ color: "var(--text-silver)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Seamless execution of statutory filings, virtual CFO advisory, and round-the-clock compliance shields, ensuring 100% adherence without unexpected department scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AUTHORITY STORY / PERSONAL BRAND (Evan Luthra style split block)
      ========================================================================== */}
      <section style={{ backgroundColor: "#ffffff", color: "#000000", padding: "100px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "60px",
              alignItems: "center",
            }}
          >
            {/* Left Portrait & Quote Box */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "500px",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src="/images/nikil-portrait.jpg"
                  alt="CA Nikil"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>

              {/* Black quote banner overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "20px",
                  right: "20px",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  padding: "24px 28px",
                  borderLeft: "4px solid #b88628",
                }}
              >
                <p className="font-cormorant" style={{ fontSize: "1.15rem", fontStyle: "italic", lineHeight: 1.4 }}>
                  "A great Chartered Accountant does not merely document historical numbers—they architect your future wealth."
                </p>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent-gold)",
                    display: "block",
                    marginTop: "8px",
                  }}
                >
                  — CA Nikil, Managing Partner
                </span>
              </div>
            </div>

            {/* Right Story Content */}
            <div style={{ paddingTop: "20px" }}>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#666666",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Executive Philosophy
              </span>

              <h2
                className="font-cinzel"
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#000000",
                  marginBottom: "24px",
                }}
              >
                FINANCIAL MASTERY MEETS UNCOMPROMISING PRECISION
              </h2>

              <p style={{ fontSize: "1rem", color: "#333333", lineHeight: 1.7, marginBottom: "16px" }}>
                CA Nikil established this advisory practice with a singular vision: to dismantle the antiquated, reactive model of accounting and provide founders, corporates, and high-net-worth individuals with institutional-grade financial strategy.
              </p>

              <p style={{ fontSize: "1rem", color: "#555555", lineHeight: 1.7, marginBottom: "32px" }}>
                Having steered over 500+ businesses across hospitality, technology, real estate, and export sectors, CA Nikil pairs rigorous ICAI statutory excellence with an aggressive focus on legitimate tax minimization and seamless regulatory compliance.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "36px" }}>
                <div style={{ borderLeft: "2px solid #000000", paddingLeft: "16px" }}>
                  <span className="font-cinzel" style={{ fontSize: "1.8rem", fontWeight: 700, color: "#000000", display: "block" }}>
                    ₹120+ Cr
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#666666", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Tax Saved Legally
                  </span>
                </div>
                <div style={{ borderLeft: "2px solid #000000", paddingLeft: "16px" }}>
                  <span className="font-cinzel" style={{ fontSize: "1.8rem", fontWeight: 700, color: "#000000", display: "block" }}>
                    500+
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#666666", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Enterprises Advised
                  </span>
                </div>
              </div>

              <button
                onClick={() => openBookingWithService()}
                className="btn-dark"
                style={{ display: "inline-flex" }}
              >
                <span>Consult CA Nikil</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRACTICE AREAS & SERVICES (CA Shahnawaz Exact Services Grid)
      ========================================================================== */}
      <section
        id="services"
        style={{
          padding: "120px 0",
          backgroundColor: "#050505",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "20px" }}>
            <div>
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
                Core Practice Areas
              </span>
              <h2 className="font-cinzel" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700, color: "#ffffff" }}>
                COMPREHENSIVE CA SERVICES
              </h2>
            </div>

            <Link href="/services" className="btn-outline" style={{ display: "inline-flex", alignItems: "center" }}>
              <span>View All Services</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="card-luxury"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                    <span className="font-cinzel" style={{ fontSize: "1.2rem", color: "var(--accent-gold)" }}>
                      {svc.number}
                    </span>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--text-silver)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "3px 8px",
                      }}
                    >
                      Statutory & Advisory
                    </span>
                  </div>

                  <h3
                    className="font-cinzel"
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "12px",
                    }}
                  >
                    {svc.title}
                  </h3>

                  <p style={{ color: "var(--text-silver)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "24px" }}>
                    {svc.description}
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "18px" }}>
                  <button
                    onClick={() => setActiveServiceModal(svc)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ffffff",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: 0,
                    }}
                  >
                    <span>Explore Scope</span>
                    <ArrowRight size={14} />
                  </button>

                  <button
                    onClick={() => openBookingWithService(svc.title)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--accent-gold)",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    Book Practice →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE TAX CALCULATOR (FY 2024-25 / AY 2025-26)
      ========================================================================== */}
      <section style={{ padding: "100px 0", backgroundColor: "#09090c" }}>
        <div className="container">
          <TaxCalculator onOpenBooking={() => openBookingWithService("Income Tax Return Filing")} />
        </div>
      </section>

      {/* =========================================================================
          CORPORATE ADVISORY & BOARDROOM SHOWCASE
      ========================================================================== */}
      <section style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
        {/* Background Boardroom Image with Dark Filter */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }}>
          <Image
            src="/images/luxury-boardroom.jpg"
            alt="Corporate Advisory Boardroom"
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(5, 5, 8, 0.92)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "720px", marginBottom: "60px" }}>
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
              Institutional Excellence
            </span>
            <h2
              className="font-cinzel"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              TRUSTED BY ENTERPRISES, VALUED BY BOARDS
            </h2>
            <p style={{ color: "var(--text-silver)", fontSize: "1rem", lineHeight: 1.6 }}>
              Whether you are scaling from Seed to Series B, expanding cross-border into India, or navigating a high-stakes statutory tax audit, our senior advisory team ensures complete peace of mind.
            </p>
          </div>

          {/* 4 Pillars of Boardroom Confidence */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            <div style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "28px" }}>
              <ShieldCheck size={28} color="#b88628" style={{ marginBottom: "14px" }} />
              <h3 className="font-cinzel" style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "8px" }}>
                Zero Scrutiny Shield
              </h3>
              <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                100% data reconciliation across AIS, 26AS, GSTR-2B, and audited general ledgers before any filing.
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "28px" }}>
              <TrendingUp size={28} color="#b88628" style={{ marginBottom: "14px" }} />
              <h3 className="font-cinzel" style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "8px" }}>
                Proactive Tax Alpha
              </h3>
              <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                Structuring transactions and investments to legally maximize post-tax retained earnings.
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "28px" }}>
              <Clock size={28} color="#b88628" style={{ marginBottom: "14px" }} />
              <h3 className="font-cinzel" style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "8px" }}>
                99.8% On-Time Record
              </h3>
              <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                Automated regulatory calendars preventing late fees, interest penalties, and director disqualifications.
              </p>
            </div>

            <div style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", padding: "28px" }}>
              <Users size={28} color="#b88628" style={{ marginBottom: "14px" }} />
              <h3 className="font-cinzel" style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "8px" }}>
                Dedicated CA Partner
              </h3>
              <p style={{ color: "var(--text-silver)", fontSize: "0.85rem", lineHeight: 1.5 }}>
                Direct access to senior Chartered Accountants, not junior ticket queues or chatbots.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button onClick={() => openBookingWithService()} className="btn-gold">
              <span>Schedule Strategy Call</span>
              <ArrowRight size={16} />
            </button>
            <a href="tel:+919819267015" className="btn-outline">
              <span>Emergency Tax Hotline: +91 98192 67015</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT TESTIMONIALS & CASE PROOF (5.0 Google Rating)
      ========================================================================== */}
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
              Proven Track Record
            </span>
            <h2 className="font-cinzel" style={{ fontSize: "2.4rem", fontWeight: 700, color: "#000000" }}>
              WHAT OUR CLIENTS SAY
            </h2>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", color: "#b88628", fontWeight: 700 }}>
              <span>★★★★★</span>
              <span style={{ color: "#222222", fontSize: "0.88rem" }}>5.0 Rating Across 180+ Verified Corporate Clients</span>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Review 1 */}
            <div className="card-white" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ color: "#b88628", fontSize: "1.1rem", marginBottom: "14px" }}>★★★★★</div>
                <p style={{ color: "#333333", fontSize: "0.92rem", lineHeight: 1.65, fontStyle: "italic", marginBottom: "20px" }}>
                  "CA Nikil restructured our restaurant chain's GST and supply chain accounting. His proactive advice saved us over ₹35 Lakhs in legitimate tax deductions during our multi-city expansion. Absolute master of his craft."
                </p>
              </div>
              <div style={{ borderTop: "1px solid #eaeaea", paddingTop: "14px" }}>
                <span className="font-cinzel" style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", display: "block" }}>
                  Vikramaditya S.
                </span>
                <span style={{ fontSize: "0.78rem", color: "#777777", textTransform: "uppercase" }}>
                  Founder, Premium Hospitality Group
                </span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="card-white" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ color: "#b88628", fontSize: "1.1rem", marginBottom: "14px" }}>★★★★★</div>
                <p style={{ color: "#333333", fontSize: "0.92rem", lineHeight: 1.65, fontStyle: "italic", marginBottom: "20px" }}>
                  "As an NRI selling ancestral property in Mumbai, navigating Section 195 Lower TDS and Form 15CA/CB felt daunting. CA Nikil's firm executed everything seamlessly, saving us huge delays and tax leakages."
                </p>
              </div>
              <div style={{ borderTop: "1px solid #eaeaea", paddingTop: "14px" }}>
                <span className="font-cinzel" style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", display: "block" }}>
                  Ananya & Rajesh K.
                </span>
                <span style={{ fontSize: "0.78rem", color: "#777777", textTransform: "uppercase" }}>
                  NRI Real Estate Investors (Dubai / UK)
                </span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="card-white" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ color: "#b88628", fontSize: "1.1rem", marginBottom: "14px" }}>★★★★★</div>
                <p style={{ color: "#333333", fontSize: "0.92rem", lineHeight: 1.65, fontStyle: "italic", marginBottom: "20px" }}>
                  "From Private Limited incorporation to securing DPIIT Startup India certification, Nikil and his team functioned as our outsourced CFO. Their response speed and audit rigor are unparalleled."
                </p>
              </div>
              <div style={{ borderTop: "1px solid #eaeaea", paddingTop: "14px" }}>
                <span className="font-cinzel" style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", display: "block" }}>
                  Siddharth Mehta
                </span>
                <span style={{ fontSize: "0.78rem", color: "#777777", textTransform: "uppercase" }}>
                  Co-Founder & CEO, FinTech SaaS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION SECTION
      ========================================================================== */}
      <section style={{ padding: "100px 0", backgroundColor: "#08080a" }}>
        <div className="container" style={{ maxWidth: "880px" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
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
              Clarity & Transparency
            </span>
            <h2 className="font-cinzel" style={{ fontSize: "2.2rem", fontWeight: 700, color: "#ffffff" }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: isOpen ? "#0f0f14" : "#0a0a0d",
                    border: isOpen ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.08)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: "100%",
                      padding: "20px 24px",
                      background: "none",
                      border: "none",
                      color: "#ffffff",
                      textAlign: "left",
                      fontSize: "1rem",
                      fontWeight: 600,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      gap: "16px",
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                        color: isOpen ? "var(--accent-gold)" : "#ffffff",
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: "0 24px 24px", color: "var(--text-silver)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL HIGH-CONVERSION CTA
      ========================================================================== */}
      <section
        style={{
          padding: "100px 0",
          backgroundColor: "#000000",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "780px" }}>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              fontWeight: 700,
              display: "block",
              marginBottom: "16px",
            }}
          >
            Confidential Consultation
          </span>

          <h2
            className="font-cinzel"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            LET'S ARCHITECT YOUR TAX & CORPORATE CERTAINTY
          </h2>

          <p style={{ color: "var(--text-silver)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "36px" }}>
            Speak directly with CA Nikil. Discuss your business financials, upcoming tax deadlines, or enterprise audit requirements.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => openBookingWithService()}
              className="btn-gold"
              style={{ padding: "16px 36px", fontSize: "0.9rem" }}
            >
              <span>Schedule 1-on-1 Strategy Session</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="https://wa.me/919819267015?text=Hello%20CA%20Nikil%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ padding: "16px 32px", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "8px" }}
            >
              <MessageSquare size={18} />
              <span>Instant WhatsApp Connect</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Actions (WhatsApp & Mobile Bar) */}
      <FloatingActions onOpenBooking={() => openBookingWithService()} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedServiceForBooking}
      />

      {/* Service Details Modal */}
      <ServiceModal
        service={activeServiceModal}
        isOpen={!!activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBookService={(name) => openBookingWithService(name)}
      />

      {/* Footer */}
      <Footer onOpenBooking={() => openBookingWithService()} />

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 991px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.hero-side-card) {
            width: 100% !important;
            margin-top: 24px;
          }
          :global(.desktop-only) {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
