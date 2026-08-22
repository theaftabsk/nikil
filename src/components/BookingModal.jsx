"use client";

import { useState } from "react";
import { X, CheckCircle2, Calendar, Clock, MessageSquare, Phone, ArrowRight, Shield } from "lucide-react";
import confetti from "canvas-confetti";

export default function BookingModal({ isOpen, onClose, initialService = "" }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(initialService || "Income Tax Return Filing");
  const [slotDate, setSlotDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split("T")[0]
  );
  const [slotTime, setSlotTime] = useState("11:30 AM");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const servicesList = [
    "Accounting Services",
    "Income Tax Return Filing",
    "Business Registration",
    "Audit Services",
    "Trademark & NGO Registration",
    "Virtual CFO & Corporate Strategy",
    "NRI Taxation & 15CA/CB",
    "GST Notice & Litigation Shield",
  ];

  const times = [
    "10:00 AM - 10:45 AM",
    "11:30 AM - 12:15 PM",
    "02:00 PM - 02:45 PM",
    "04:00 PM - 04:45 PM",
    "06:00 PM - 06:45 PM (VIP)",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number");
      return;
    }

    // Trigger confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello GUMASTA (The Accountant),\n\nI would like to confirm a strategy session for:\n• Service: ${service}\n• Date: ${slotDate} (${slotTime})\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Query: ${formData.notes || "Tax Advisory & Compliance"}\n\nPlease share the meeting invite.`
    );
    window.open(`https://wa.me/917416414358?text=${text}`, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#0d0d11",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          width: "100%",
          maxWidth: "600px",
          maxHeight: "88vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)",
          padding: "clamp(20px, 4vw, 36px)",
          animation: "fadeUp 0.3s ease forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#ffffff",
            padding: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                <Shield size={14} color="#b88628" />
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent-gold)",
                  }}
                >
                  Direct Advisory with GUMASTA
                </span>
              </div>
              <h3
                className="font-cinzel"
                style={{
                  fontSize: "clamp(1.3rem, 3.5vw, 1.6rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.2,
                }}
              >
                Schedule Private Strategy Session
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--text-silver)", marginTop: "6px" }}>
                Step {step} of 3: {step === 1 ? "Select Practice Area" : step === 2 ? "Select Slot" : "Your Details"}
              </p>
            </div>

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <label className="luxury-label">Practice Area</label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "10px",
                    marginBottom: "24px",
                  }}
                >
                  {servicesList.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setService(item)}
                      style={{
                        padding: "12px",
                        textAlign: "left",
                        backgroundColor: service === item ? "#ffffff" : "rgba(255,255,255,0.03)",
                        color: service === item ? "#000000" : "#ffffff",
                        border: service === item ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.1)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-gold"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>Continue to Slot Picker</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* Step 2: Slot Selection */}
            {step === 2 && (
              <div>
                <div style={{ marginBottom: "16px" }}>
                  <label className="luxury-label">Preferred Consultation Date</label>
                  <input
                    type="date"
                    className="luxury-input"
                    value={slotDate}
                    onChange={(e) => setSlotDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label className="luxury-label">Preferred Time Slot</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {times.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSlotTime(t)}
                        style={{
                          padding: "10px 14px",
                          textAlign: "left",
                          backgroundColor: slotTime === t ? "#ffffff" : "rgba(255,255,255,0.03)",
                          color: slotTime === t ? "#000000" : "#ffffff",
                          border: slotTime === t ? "1px solid #ffffff" : "1px solid rgba(255,255,255,0.1)",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>{t}</span>
                        {slotTime === t && <CheckCircle2 size={16} color="#000000" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-outline"
                    style={{ flex: 1 }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn-gold"
                    style={{ flex: 2, justifyContent: "center" }}
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Submit */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
                  <div>
                    <label className="luxury-label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma / Business Name"
                      className="luxury-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="luxury-label">WhatsApp Phone Number *</label>
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
                      placeholder="rahul@example.com"
                      className="luxury-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="luxury-label">Brief Context (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="E.g., Business turnover ₹3 Cr, need statutory audit & tax optimization"
                      className="luxury-input"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-outline"
                    style={{ flex: 1 }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ flex: 2, justifyContent: "center" }}
                  >
                    Confirm Strategy Session
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Screen */
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "rgba(184, 134, 40, 0.15)",
                border: "1px solid #b88628",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
              }}
            >
              <CheckCircle2 size={32} color="#b88628" />
            </div>

            <span
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Consultation Reserved
            </span>

            <h3 className="font-cinzel" style={{ fontSize: "1.8rem", color: "#ffffff", marginBottom: "12px" }}>
              Thank You, {formData.name}
            </h3>

            <p style={{ color: "var(--text-silver)", fontSize: "0.9rem", maxWidth: "440px", margin: "0 auto 24px" }}>
              Your session for <strong style={{ color: "#ffffff" }}>{service}</strong> on{" "}
              <strong style={{ color: "#ffffff" }}>
                {slotDate} at {slotTime}
              </strong>{" "}
              has been logged. GUMASTA's executive advisory desk will contact you on{" "}
              <strong style={{ color: "#ffffff" }}>{formData.phone}</strong>.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                onClick={handleWhatsAppRedirect}
                style={{
                  backgroundColor: "#25D366",
                  color: "#ffffff",
                  border: "none",
                  padding: "14px 20px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <MessageSquare size={18} />
                <span>Instant Connect on WhatsApp Now</span>
              </button>

              <button
                onClick={onClose}
                className="btn-outline"
                style={{ justifyContent: "center" }}
              >
                Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
