import "./globals.css";
import SignatureIntro from "@/components/SignatureIntro";

export const metadata = {
  title: "GUMASTA | The Accountant - Premier Financial Advisory & Tax Practice",
  description: "GUMASTA - The Accountant. Elite Financial Advisory & Accounting firm specializing in High-Net-Worth Tax Strategy, Corporate Audits, Business Incorporation, GST Compliance, Virtual CFO & NRI Taxation.",
  keywords: "GUMASTA, The Accountant, Chartered Accountant, Tax Consultant, Income Tax Filing, GST Registration, Corporate Audit, Startup Registration India, Virtual CFO, Trademark Registration Mumbai India",
  openGraph: {
    title: "GUMASTA | The Accountant",
    description: "Strategic Financial Mastery & Elite Tax Advisory for Ambitious Businesses & High-Net-Worth Individuals.",
    type: "website",
    locale: "en_IN",
    siteName: "GUMASTA - The Accountant",
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
