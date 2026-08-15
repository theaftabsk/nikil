"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import BookingModal from "@/components/BookingModal";
import PressTicker from "@/components/PressTicker";
import { TrendingUp, ArrowRight, CheckCircle2, ShieldAlert, Award } from "lucide-react";

export default function CaseStudiesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const cases = [
    {
      sector: "Tech SaaS & Venture Funded",
      title: "How A B2B SaaS Startup Saved ₹42 Lakhs in Tax & Cleared Series A Due Diligence",
      metrics: "₹42 Lakhs Saved • $3M Diligence Cleared",
      problem:
        "The company had grown to ₹12 Cr ARR with complex multi-currency revenue but lacked DPIIT tax exemption paperwork and had unresolved GST input mismatches, threatening an upcoming $3M Series A term sheet.",
      solution:
        "CA Nikil's firm restructured the company's IP licensing agreements, fast-tracked DPIIT Startup India 80-IAC tax holiday certification, and audited 36 months of general ledgers to establish an investor-ready data room.",
      impact: [
        "100% Tax exemption secured under Section 80-IAC for consecutive fiscal years",
        "Reclaimed ₹14.8 Lakhs in unutilized Input Tax Credit (ITC)",
        "Zero audit queries raised by venture capital due diligence auditors",
      ],
    },
    {
      sector: "Hospitality & Multi-Chain F&B",
      title: "Eliminating GST Notice Liabilities & Restructuring Supply Chain for 8 Restaurants",
      metrics: "₹35 Lakhs Saved • 0% Notice Recurrence",
      problem:
        "A premium dining group received substantial department notices under Section 73 for purported ITC discrepancies between GSTR-3B and GSTR-2A across multiple municipal locations.",
      solution:
        "Our team conducted a forensic line-by-line vendor audit, represented the entity before the adjudicating authority, and implemented automated central accounting across all 8 branches.",
      impact: [
        "Disputed penalty and demand of ₹35 Lakhs fully waived upon proper legal reconciliation",
        "Synchronized daily POS reconciliation with GST portal",
        "Streamlined monthly bookkeeping cycle down from 25 days to 4 days",
      ],
    },
    {
      sector: "NRI Taxation & Capital Gains",
      title: "Saving ₹18.5 Lakhs on Mumbai Commercial Property Sale & Seamless Repatriation",
      metrics: "₹18.5L Saved • 48-Hour 15CA/CB",
      problem:
        "A Non-Resident Indian client residing in the UAE was selling commercial property in Mumbai and faced mandatory 23.92% flat TDS deduction without benefit of indexation.",
      solution:
        "CA Nikil filed for a Section 197 Lower Tax Deduction Certificate with the Income Tax Department, calculated exact indexed long-term capital gains, and issued Form 15CA/15CB for smooth bank remittance.",
      impact: [
        "Reduced effective tax withholding from 23.92% down to 6.2%",
        "Direct tax saving of ₹18.5 Lakhs on transaction settlement",
        "100% compliant outward remittance to NRE account in Dubai without regulatory delay",
      ],
    },
    {
      sector: "D2C E-Commerce Brand",
      title: "Virtual CFO Leadership: Boosting Operating Margins by 22% & Eliminating Cash Burn",
      metrics: "22% Margin Lift • ₹28L ITC Recovered",
      problem:
        "Scaling rapidly from ₹3 Cr to ₹18 Cr GMV, the brand struggled with inventory holding costs, marketplace deduction reconciliations (Amazon/Flipkart), and delayed vendor payouts.",
      solution:
        "We deployed a Fractional CFO advisory framework, overhauled working capital cycles, and automated marketplace TDS/TCS matching.",
      impact: [
        "Uncovered ₹28 Lakhs in lost ITC and marketplace refund adjustments",
        "Extended cash runway from 3 months to 14 months without external dilution",
        "Real-time executive unit economics dashboard deployed for founders",
      ],
    },
  ];

  return (
    <main style={{ backgroundColor: "#050505", minHeight: "100vh", position: "relative" }}>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

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
            Verified Client Case Studies
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
            PROVEN ROI & MEASURABLE IMPACT
          </h1>
          <p style={{ color: "var(--text-silver)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Real-world outcomes engineered for ambitious startups, corporate groups, and high-net-worth investors.
          </p>
        </div>
      </section>

      <PressTicker onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Case Studies Grid */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {cases.map((c, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#0a0a0d",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "48px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--accent-gold)",
                      fontWeight: 700,
                    }}
                  >
                    {c.sector}
                  </span>
                  <span
                    style={{
                      backgroundColor: "rgba(184, 134, 40, 0.15)",
                      border: "1px solid var(--accent-gold)",
                      color: "#f3e5ab",
                      padding: "4px 12px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {c.metrics}
                  </span>
                </div>

                <h2 className="font-cinzel" style={{ fontSize: "1.8rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.25 }}>
                  {c.title}
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px" }}>
                  <div style={{ backgroundColor: "#060608", padding: "20px", borderLeft: "3px solid #666666" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-silver)", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                      The Vulnerability
                    </span>
                    <p style={{ color: "var(--text-silver)", fontSize: "0.88rem", lineHeight: 1.6 }}>{c.problem}</p>
                  </div>

                  <div style={{ backgroundColor: "#060608", padding: "20px", borderLeft: "3px solid #b88628" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-gold)", textTransform: "uppercase", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                      Strategic Intervention
                    </span>
                    <p style={{ color: "var(--text-silver)", fontSize: "0.88rem", lineHeight: 1.6 }}>{c.solution}</p>
                  </div>
                </div>

                {/* Measurable Results */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "20px" }}>
                  <span style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", fontWeight: 700, display: "block", marginBottom: "14px" }}>
                    Key Deliverables Achieved
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
                    {c.impact.map((item, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <CheckCircle2 size={16} color="#b88628" style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ color: "var(--text-silver)", fontSize: "0.85rem" }}>{item}</span>
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
