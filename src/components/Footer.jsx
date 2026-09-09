"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer({ onOpenBooking }) {
  return (
    <footer
      style={{
        backgroundColor: "#050507",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "80px 0 40px",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "48px",
            marginBottom: "60px",
          }}
        >


          {/* Practice Areas */}
          <div>
            <h4
              className="font-cinzel"
              style={{
                fontSize: "1rem",
                color: "#ffffff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Practice Areas
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/services" style={{ color: "var(--text-silver)", textDecoration: "none", fontSize: "0.85rem" }}>
                Accounting & Bookkeeping
              </Link>
              <Link href="/services" style={{ color: "var(--text-silver)", textDecoration: "none", fontSize: "0.85rem" }}>
                Income Tax Return (ITR) Filing
              </Link>
              <Link href="/services" style={{ color: "var(--text-silver)", textDecoration: "none", fontSize: "0.85rem" }}>
                Startup & Company Registration
              </Link>
              <Link href="/services" style={{ color: "var(--text-silver)", textDecoration: "none", fontSize: "0.85rem" }}>
                Statutory, Internal & Tax Audits
              </Link>
              <Link href="/services" style={{ color: "var(--text-silver)", textDecoration: "none", fontSize: "0.85rem" }}>
                Trademark, 12A & 80G NGO Setup
              </Link>
              <Link href="/services" style={{ color: "var(--text-silver)", textDecoration: "none", fontSize: "0.85rem" }}>
                Virtual CFO & Fractional Advisory
              </Link>
            </div>
          </div>

          {/* Quick Links & Tools */}
          <div>
            <h4
              className="font-cinzel"
              style={{
                fontSize: "1rem",
                color: "#ffffff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Intelligence & Hub
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link href="/calculator" style={{ color: "var(--text-silver)", textDecoration: "none", fontSize: "0.85rem" }}>
                Old vs New Tax Regime Tool
              </Link>
              <Link href="/about" style={{ color: "var(--text-silver)", textDecoration: "none", fontSize: "0.85rem" }}>
                About GUMASTHA
              </Link>
              <button
                onClick={onOpenBooking}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--accent-gold)",
                  textAlign: "left",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span>Book 1-on-1 Consultation</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Direct Office & Contact */}
          <div>
            <h4
              className="font-cinzel"
              style={{
                fontSize: "1rem",
                color: "#ffffff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Direct Office
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", color: "var(--text-silver)", fontSize: "0.85rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={16} color="#ffffff" style={{ marginTop: "3px", flexShrink: 0 }} />
                <span>H.No: 47-003, 2nd Floor, Above Kaira, Sri Sai Colony, Hyderabad, Telangana 500037</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <Phone size={16} color="#ffffff" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <a href="tel:+919133235818" style={{ color: "#ffffff", textDecoration: "none" }}>
                    +91 91332 35818
                  </a>
                  <a href="tel:+917416414358" style={{ color: "#ffffff", textDecoration: "none" }}>
                    +91 7416 414 358
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MessageSquare size={16} color="#25D366" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <a
                    href="https://wa.me/919133235818?text=Hello%20GUMASTHA%20Team%2C%20I%20would%20like%20to%20consult%20regarding%20taxation%20and%20advisory."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#25D366", textDecoration: "none", fontWeight: 600 }}
                  >
                    WhatsApp: +91 91332 35818
                  </a>
                  <a
                    href="https://wa.me/917416414358?text=Hello%20GUMASTHA%20Team%2C%20I%20would%20like%20to%20consult%20regarding%20taxation%20and%20advisory."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#25D366", textDecoration: "none", fontWeight: 600 }}
                  >
                    WhatsApp: +91 7416 414 358
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={16} color="#ffffff" style={{ flexShrink: 0 }} />
                <a href="mailto:advisory@gumastha.co.in" style={{ color: "#ffffff", textDecoration: "none" }}>
                  advisory@gumastha.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "28px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", maxWidth: "780px" }}>
            © {new Date().getFullYear()} GUMASTHA • Taxation | IFRS | Business Advisory Services. All rights reserved. In accordance with professional standards, this website provides informational content regarding professional services and does not constitute advertisement or solicitation.
          </p>
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
            CRAFTED FOR EXCELLENCE
          </span>
        </div>
      </div>
    </footer>
  );
}
