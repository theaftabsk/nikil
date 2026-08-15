"use client";

import { MessageSquare, Phone, Calendar, ArrowUpRight } from "lucide-react";

export default function FloatingActions({ onOpenBooking }) {
  const whatsappUrl =
    "https://wa.me/919819267015?text=" +
    encodeURIComponent("Hello CA Nikil & Associates! I saw your advisory website and would like to speak regarding Tax Strategy & Compliance.");

  return (
    <>
      {/* Desktop Floating WhatsApp Hub */}
      <div className="floating-actions-desktop">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          title="Direct WhatsApp with CA Nikil"
        >
          <MessageSquare size={26} />
        </a>
      </div>

      {/* Mobile Sticky Conversion Bar (Crucial for Meta/Instagram Ad traffic) */}
      <div className="floating-mobile-bar">
        <a
          href="tel:+919819267015"
          className="btn-outline"
          style={{
            padding: "10px 14px",
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <Phone size={14} />
          <span>Call Office</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="btn-gold"
          style={{
            padding: "10px 14px",
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <Calendar size={14} />
          <span>Book Free Call</span>
        </button>
      </div>
    </>
  );
}
