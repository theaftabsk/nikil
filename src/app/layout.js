import "./globals.css";
import SignatureIntro from "@/components/SignatureIntro";

export const metadata = {
  title: "GUMASTHA | Taxation • IFRS • Business Advisory Services",
  description: "GUMASTHA - Elite Financial Advisory & Accounting firm specializing in High-Net-Worth Tax Strategy, IFRS Compliance, Corporate Audits, Business Incorporation, GST Compliance, Virtual CFO & Business Advisory Services.",
  keywords: "GUMASTHA, Taxation, IFRS, Business Advisory Services, Chartered Accountant, Tax Consultant, Income Tax Filing, GST Registration, Corporate Audit, Startup Registration India, Virtual CFO, Trademark Registration Hyderabad India",
  openGraph: {
    title: "GUMASTHA | Taxation • IFRS • Business Advisory Services",
    description: "Strategic Financial Mastery & Elite Advisory for Ambitious Businesses & Corporate Entities.",
    type: "website",
    locale: "en_IN",
    siteName: "GUMASTHA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SignatureIntro />
        {children}
      </body>
    </html>
  );
}
