"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BookingModal from "@/components/BookingModal";
import ServiceModal from "@/components/ServiceModal";
import PressTicker from "@/components/PressTicker";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2, FileText, Shield, Sparkles, MessageSquare } from "lucide-react";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [activeModalService, setActiveModalService] = useState(null);

  const openBooking = (name = "") => {
    setSelectedService(name);
    setIsBookingOpen(true);
  };

  return (
    <main style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative" }}>
      <Navbar onOpenBooking={() => openBooking()} />

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
            100% Online Paperless Process • Pan-India Delivery
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
            ONLINE REGISTRATIONS & TAX COMPLIANCE
          </h1>
          <p style={{ color: "var(--text-silver)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "24px" }}>
            Fast, paperless online company incorporation, GST, trademark, ITR filing & annual compliances across India—handled end-to-end with direct Chartered Accountant expertise.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="https://wa.me/919133235818?text=Hello%20GUMASTHA%2C%20I%20would%20like%20to%20know%20more%20about%20your%20online%20registration%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#25D366",
                color: "#ffffff",
                padding: "12px 24px",
                fontSize: "0.85rem",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.3)",
              }}
            >
              <MessageSquare size={16} />
              <span>Instant WhatsApp Inquiry (+91 91332 35818)</span>
            </a>
          </div>
        </div>
      </section>

      <PressTicker onOpenBooking={() => openBooking()} />

      {/* Services Full Catalog List */}
      <section style={{ padding: "clamp(50px, 8vw, 90px) 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                id={svc.id}
                className="card-luxury"
                style={{
                  padding: "clamp(24px, 4vw, 44px) clamp(18px, 3.5vw, 36px)",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "32px",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                    <span className="font-cinzel" style={{ fontSize: "1.4rem", color: "var(--accent-gold)" }}>
                      {svc.number}.
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-silver)",
                      }}
                    >
                      {svc.tagline}
                    </span>
                  </div>

                  <h2
                    className="font-cinzel"
                    style={{
                      fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "14px",
                    }}
                  >
                    {svc.title}
                  </h2>

                  <p style={{ color: "var(--text-silver)", fontSize: "0.92rem", lineHeight: 1.65, marginBottom: "24px" }}>
                    {svc.fullDescription || svc.description}
                  </p>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <button onClick={() => openBooking(svc.title)} className="btn-gold">
                      <span>Book {svc.title}</span>
                      <ArrowRight size={15} />
                    </button>
                    <button
                      onClick={() => setActiveModalService(svc)}
                      className="btn-outline"
                    >
                      <span>Checklist & Docs</span>
                    </button>
                  </div>
                </div>

                {/* Deliverables Panel */}
                <div
                  style={{
                    backgroundColor: "#060608",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "24px 20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      fontWeight: 700,
                      display: "block",
                      marginBottom: "14px",
                    }}
                  >
                    Included In This Practice Area
                  </span>

                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {svc.deliverables.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <CheckCircle2 size={15} color="#b88628" style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ fontSize: "0.85rem", color: "var(--text-silver)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Actions */}
      <FloatingActions onOpenBooking={() => openBooking()} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      {/* Service Detail Modal */}
      <ServiceModal
        service={activeModalService}
        isOpen={!!activeModalService}
        onClose={() => setActiveModalService(null)}
        onBookService={(name) => openBooking(name)}
      />

      <Footer onOpenBooking={() => openBooking()} />
    </main>
  );
}
