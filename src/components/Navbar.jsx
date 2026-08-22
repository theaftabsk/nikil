"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone, MessageSquare, ShieldCheck } from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Tax Calculator", href: "/calculator" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          backgroundColor: isScrolled ? "rgba(5, 5, 8, 0.96)" : "rgba(5, 5, 8, 0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(255, 255, 255, 0.05)",
          boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.8)" : "none",
          padding: isScrolled ? "12px 0" : "18px 0",
        }}
      >
        <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Handwritten Signature Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "0px" }}
          >
            <span
              style={{
                fontFamily: "'Great Vibes', 'Allura', 'Alex Brush', cursive",
                fontSize: "clamp(2.2rem, 3.5vw, 2.7rem)",
                color: "#ffffff",
                lineHeight: 0.85,
                letterSpacing: "1px",
                textShadow: "0 0 20px rgba(255,255,255,0.3)",
              }}
            >
              Gumasta
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.62rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                fontWeight: 700,
                marginTop: "4px",
              }}
            >
              The Accountant
            </span>
          </Link>

          {/* Desktop Navigation Links with Active Page Highlighter */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    color: isActive ? "var(--accent-champagne)" : "#ffffff",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: isActive ? 700 : 500,
                    transition: "all 0.2s ease",
                    position: "relative",
                    padding: "8px 14px",
                    backgroundColor: isActive ? "rgba(184, 134, 40, 0.16)" : "transparent",
                    border: isActive ? "1px solid rgba(184, 134, 40, 0.45)" : "1px solid transparent",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: isActive ? "0 0 15px rgba(184, 134, 40, 0.2)" : "none",
                  }}
                  className="nav-hover-link"
                >
                  {isActive && <span style={{ color: "var(--accent-gold)", fontSize: "0.75rem" }}>✦</span>}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <button
              onClick={onOpenBooking}
              className="btn-gold desktop-btn"
              style={{ padding: "11px 22px", fontSize: "0.78rem" }}
            >
              <span>Work With Gumasta</span>
              <ArrowUpRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-trigger"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.18)",
                padding: "8px 12px",
                color: "#ffffff",
                cursor: "pointer",
                display: "none",
                borderRadius: "0",
              }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={22} color="#ffffff" /> : <Menu size={22} color="#ffffff" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#050508",
            zIndex: 9999,
            padding: "90px 24px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "auto",
            animation: "fadeIn 0.3s ease forwards",
          }}
        >
          {/* Close trigger at top right */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#ffffff",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={22} />
          </button>

          {/* Links List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-cinzel"
                  style={{
                    color: isActive ? "var(--accent-champagne)" : "#ffffff",
                    textDecoration: "none",
                    fontSize: "1.3rem",
                    letterSpacing: "0.08em",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    paddingBottom: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: isActive ? "rgba(184, 134, 40, 0.12)" : "transparent",
                    padding: "10px 14px",
                    borderLeft: isActive ? "3px solid var(--accent-gold)" : "3px solid transparent",
                  }}
                >
                  <span>
                    0{idx + 1}. {link.name} {isActive && "(Active)"}
                  </span>
                  <ArrowUpRight size={18} color={isActive ? "var(--accent-gold)" : "#ffffff"} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Bottom Actions */}
          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center", padding: "14px" }}
            >
              <span>Work With Gumasta</span>
              <ArrowUpRight size={16} />
            </button>

            <a
              href="https://wa.me/917416414358?text=Hello%20GUMASTA%20Team%2C%20I%20would%20like%20to%20consult%20regarding%20tax%20and%20accounting%20advisory."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderColor: "#25D366",
                color: "#25D366",
              }}
            >
              <MessageSquare size={16} color="#25D366" />
              <span>WhatsApp Direct Connect</span>
            </a>

            <p style={{ textAlign: "center", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.15em", marginTop: "8px" }}>
              ICAI CERTIFIED • 100% SECURE & CONFIDENTIAL
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .nav-hover-link:hover {
          color: var(--accent-champagne) !important;
          background-color: rgba(255, 255, 255, 0.05);
        }
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
