"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone, ShieldCheck } from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: "all 0.3s ease",
          backgroundColor: isScrolled ? "rgba(5, 5, 5, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
          padding: isScrolled ? "14px 0" : "24px 0",
        }}
      >
        <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Signature Logo (Evan Luthra style) */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "0px" }}>
            <span
              style={{
                fontFamily: "'Great Vibes', 'Allura', 'Alex Brush', cursive",
                fontSize: "2.6rem",
                color: "#ffffff",
                lineHeight: 0.85,
                letterSpacing: "1px",
                textShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            >
              Nikil
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.6rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--text-silver)",
                fontWeight: 600,
                marginTop: "4px",
              }}
            >
              Chartered Accountants & Advisory
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-nav"
          >
            <Link
              href="/"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Home
            </Link>
            <Link
              href="/services"
              style={{
                color: "var(--text-silver)",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Services
            </Link>
            <Link
              href="/calculator"
              style={{
                color: "var(--text-silver)",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Tax Calculator
            </Link>
            <Link
              href="/about"
              style={{
                color: "var(--text-silver)",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              About
            </Link>
            <Link
              href="/case-studies"
              style={{
                color: "var(--text-silver)",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Case Studies
            </Link>
            <Link
              href="/contact"
              style={{
                color: "var(--text-silver)",
                textDecoration: "none",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              Contact
            </Link>
          </nav>

          {/* Action & Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={onOpenBooking}
              className="btn-gold desktop-btn"
              style={{ padding: "12px 24px" }}
            >
              <span>Work With Nikil</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-trigger"
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "8px",
                color: "#ffffff",
                cursor: "pointer",
                display: "none",
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#08080a",
            zIndex: 998,
            padding: "80px 24px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cinzel"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.4rem",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "12px",
              }}
            >
              01. Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cinzel"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.4rem",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "12px",
              }}
            >
              02. Services Catalog
            </Link>
            <Link
              href="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cinzel"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.4rem",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "12px",
              }}
            >
              03. Tax Calculator
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cinzel"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.4rem",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "12px",
              }}
            >
              04. About Nikil
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cinzel"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.4rem",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "12px",
              }}
            >
              05. Case Studies
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="font-cinzel"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.4rem",
                letterSpacing: "0.08em",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: "12px",
              }}
            >
              06. Contact & Advisory
            </Link>
          </div>

          <div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center", marginBottom: "12px" }}
            >
              Work With Nikil
            </button>
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
              ICAI CERTIFIED • 100% CONFIDENTIAL
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 991px) {
          :global(.desktop-nav),
          :global(.desktop-btn) {
            display: none !important;
          }
          :global(.mobile-menu-trigger) {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
