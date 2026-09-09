"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import PressTicker from "@/components/PressTicker";
import { Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Income Tax Return Filing",
    slotDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    slotTime: "11:30 AM",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and contact phone number");
      return;
    }
    
    setLoading(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: `${formData.message || "Advisory consultation requested"} | Slot: ${formData.slotDate || "Flexible"} (${formData.slotTime || "Standard"})`,
          source: "Contact Page Advisory Form",
        }),
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
      setIsSubmitted(true);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello GUMASTHA,\n\nI would like to schedule an advisory call:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Query: ${formData.message || "Tax & Accounting consultation"}`
    );
    window.open(`https://wa.me/919133235818?text=${text}`, "_blank");
  };

  return (
    <main style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative" }}>
      <Navbar onOpenBooking={() => {}} />

      {/* Header */}
      <section
        style={{
          padding: "clamp(120px, 14vw, 160px) 0 clamp(40px, 6vw, 80px)",
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
            Direct Senior Engagement
          </span>
          <h1
            className="font-cinzel"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.6rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            SCHEDULE PRIVATE CONSULTATION
          </h1>
          <p style={{ color: "var(--text-silver)", fontSize: "1rem", lineHeight: 1.6 }}>
            Reserve a confidential session with GUMASTHA to review your corporate financials, audit requirements, or tax planning strategy.
          </p>
        </div>
      </section>

      <PressTicker onOpenBooking={() => {}} />

      {/* Main Contact Content */}
      <section style={{ padding: "clamp(50px, 8vw, 90px) 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            {/* Left: Office & Direct Line Details */}
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
                Executive Chambers
              </span>

              <h2
                className="font-cinzel"
                style={{
                  fontSize: "clamp(1.8rem, 3.2vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "18px",
                }}
              >
                HYDERABAD OFFICE
              </h2>

              <p style={{ color: "var(--text-silver)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "28px" }}>
                Our corporate advisory practice is headquartered in Hyderabad, serving domestic corporate entities and global NRI clients with seamless remote and in-person advisory.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.06)", padding: "10px", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <MapPin size={20} color="#ffffff" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-silver)", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                      Registered Address
                    </span>
                    <p style={{ color: "#ffffff", fontSize: "0.9rem", lineHeight: 1.5 }}>
                      H.No: 47-003, 2nd Floor, Above Kaira, Sri Sai Colony, Hyderabad, Telangana 500037
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.06)", padding: "10px", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <Phone size={20} color="#ffffff" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-silver)", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                      Emergency Tax Hotline
                    </span>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <a href="tel:+919133235818" style={{ color: "#ffffff", fontSize: "1.05rem", fontWeight: 700, textDecoration: "none" }}>
                        +91 91332 35818
                      </a>
                      <a href="tel:+917416414358" style={{ color: "#ffffff", fontSize: "1.05rem", fontWeight: 700, textDecoration: "none" }}>
                        +91 7416 414 358
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.06)", padding: "10px", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <Mail size={20} color="#ffffff" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-silver)", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "4px" }}>
                      Direct Executive Email
                    </span>
                    <a href="mailto:advisory@gumastha.co.in" style={{ color: "#ffffff", fontSize: "1rem", textDecoration: "none" }}>
                      advisory@gumastha.co.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                <a
                  href="https://wa.me/919133235818?text=Hello%20GUMASTHA%2C%20I%20would%20like%20to%20speak%20regarding%20corporate%20tax%20and%20accounting%20advisory."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#25D366",
                    color: "#ffffff",
                    padding: "14px 20px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(37, 211, 102, 0.25)",
                  }}
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp: +91 91332 35818</span>
                </a>

                <a
                  href="https://wa.me/917416414358?text=Hello%20GUMASTHA%2C%20I%20would%20like%20to%20speak%20regarding%20corporate%20tax%20and%20accounting%20advisory."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "rgba(37, 211, 102, 0.1)",
                    border: "1px solid #25D366",
                    color: "#25D366",
                    padding: "12px 20px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp: +91 7416 414 358</span>
                </a>
              </div>

              {/* Founder Trust Card */}
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(184, 134, 40, 0.3)",
                  padding: "18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid var(--accent-gold)",
                    flexShrink: 0,
                    backgroundColor: "#050508",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <Image
                    src="/images/gumastha-emblem.png"
                    alt="GUMASTHA Official Emblem"
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--accent-gold)",
                      fontWeight: 700,
                      display: "block",
                    }}
                  >
                    Senior Advisory Desk
                  </span>
                  <h4
                    className="font-cinzel"
                    style={{ fontSize: "1.05rem", color: "#ffffff", margin: "2px 0 4px", fontWeight: 700 }}
                  >
                    GUMASTHA Advisory
                  </h4>
                  <p style={{ color: "var(--text-silver)", fontSize: "0.75rem", margin: 0, lineHeight: 1.4 }}>
                    Direct senior oversight on every accounting, tax & corporate file.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div
              className="card-luxury"
              style={{
                padding: "clamp(24px, 4vw, 36px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: "20px" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--accent-gold)",
                      }}
                    >
                      Book 1-on-1 Session
                    </span>
                    <h3 className="font-cinzel" style={{ fontSize: "1.45rem", color: "#ffffff", marginTop: "4px" }}>
                      Advisory Request Form
                    </h3>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <div>
                      <label className="luxury-label">Full Name / Entity Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma"
                        className="luxury-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
                      <div>
                        <label className="luxury-label">WhatsApp Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          className="luxury-input"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="luxury-label">Email Address</label>
                        <input
                          type="email"
                          placeholder="vikram@entity.com"
                          className="luxury-input"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="luxury-label">Primary Practice Area Needed</label>
                      <select
                        className="luxury-input"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Income Tax Return Filing">Income Tax Return Filing & Tax Planning</option>
                        <option value="Accounting Services">Accounting & Precision Bookkeeping</option>
                        <option value="Business Registration">Business & Startup Incorporation</option>
                        <option value="Audit Services">Statutory, Tax & Internal Audits</option>
                        <option value="Trademark & NGO Registration">Trademark & 12A/80G NGO Registration</option>
                        <option value="Virtual CFO">Virtual CFO & Financial Growth</option>
                        <option value="NRI Taxation">NRI Taxation & Form 15CA/CB</option>
                      </select>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
                      <div>
                        <label className="luxury-label">Preferred Date</label>
                        <input
                          type="date"
                          className="luxury-input"
                          value={formData.slotDate}
                          onChange={(e) => setFormData({ ...formData, slotDate: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="luxury-label">Preferred Time</label>
                        <select
                          className="luxury-input"
                          value={formData.slotTime}
                          onChange={(e) => setFormData({ ...formData, slotTime: e.target.value })}
                        >
                          <option value="10:00 AM">10:00 AM - 10:45 AM</option>
                          <option value="11:30 AM">11:30 AM - 12:15 PM</option>
                          <option value="02:00 PM">02:00 PM - 02:45 PM</option>
                          <option value="04:00 PM">04:00 PM - 04:45 PM</option>
                          <option value="06:00 PM VIP">06:00 PM (VIP Evening)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="luxury-label">Brief Overview of Inquiry</label>
                      <textarea
                        rows={2}
                        placeholder="E.g., Business turnover ₹5 Cr, need statutory audit & tax optimization"
                        className="luxury-input"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold"
                      style={{ width: "100%", justifyContent: "center", marginTop: "6px", opacity: loading ? 0.7 : 1, cursor: loading ? "wait" : "pointer" }}
                    >
                      <span>{loading ? "Sending Enquiry..." : "Submit Strategy Request"}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 10px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(184, 134, 40, 0.15)",
                      border: "1px solid #b88628",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                    }}
                  >
                    <CheckCircle2 size={30} color="#b88628" />
                  </div>

                  <h3 className="font-cinzel" style={{ fontSize: "1.6rem", color: "#ffffff", marginBottom: "10px" }}>
                    Enquiry Received, {formData.name}
                  </h3>

                  <p style={{ color: "var(--text-silver)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "24px" }}>
                    We have logged your advisory enquiry for <strong style={{ color: "#ffffff" }}>{formData.service}</strong>.
                    {formData.email && (
                      <span style={{ display: "block", color: "var(--accent-gold)", marginTop: "6px" }}>
                        ✓ A confirmation email has been sent to {formData.email}.
                      </span>
                    )}
                    Our executive desk will reach you shortly on <strong style={{ color: "#ffffff" }}>{formData.phone}</strong>.
                  </p>

                  <button
                    onClick={handleWhatsApp}
                    style={{
                      backgroundColor: "#25D366",
                      color: "#ffffff",
                      border: "none",
                      padding: "14px 20px",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      width: "100%",
                      marginBottom: "10px",
                    }}
                  >
                    <MessageSquare size={16} />
                    <span>Open Instant WhatsApp Chat</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Floating Actions */}
      <FloatingActions onOpenBooking={() => {}} />

      <Footer onOpenBooking={() => {}} />
    </main>
  );
}
