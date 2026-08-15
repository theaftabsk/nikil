"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BookingModal from "@/components/BookingModal";
import ServiceModal from "@/components/ServiceModal";
import PressTicker from "@/components/PressTicker";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2, FileText, Shield, Sparkles } from "lucide-react";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [activeModalService, setActiveModalService] = useState(null);
  const [filterCategory, setFilterCategory] = useState("all");

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
            Practice Areas & Scope of Work
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
            INSTITUTIONAL CA & CORPORATE ADVISORY
          </h1>
          <p style={{ color: "var(--text-silver)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            From high-stakes income tax strategy and statutory audits to fast-track business incorporation and virtual CFO leadership.
          </p>
        </div>
      </section>

      <PressTicker onOpenBooking={() => openBooking()} />

      {/* Services Full Catalog List */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
            {servicesData.map((svc, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  style={{
                    backgroundColor: "#0a0a0d",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    padding: "48px 40px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "40px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <span className="font-cinzel" style={{ fontSize: "1.5rem", color: "var(--accent-gold)" }}>
                        {svc.number}.
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
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
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "16px",
                      }}
                    >
                      {svc.title}
                    </h2>

                    <p style={{ color: "var(--text-silver)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "24px" }}>
                      {svc.fullDescription || svc.description}
                    </p>

                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      <button onClick={() => openBooking(svc.title)} className="btn-gold">
                        <span>Book {svc.title}</span>
                        <ArrowRight size={16} />
                      </button>
                      <button
                        onClick={() => setActiveModalService(svc)}
                        className="btn-outline"
                      >
                        <span>View Checklists & Docs</span>
                      </button>
                    </div>
                  </div>

                  {/* Deliverables Panel */}
                  <div
                    style={{
                      backgroundColor: "#060608",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      padding: "28px 24px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#ffffff",
                        fontWeight: 700,
                        display: "block",
                        marginBottom: "16px",
                      }}
                    >
                      Included In This Practice Area
                    </span>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {svc.deliverables.map((item, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <CheckCircle2 size={16} color="#b88628" style={{ marginTop: "3px", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.85rem", color: "var(--text-silver)" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
