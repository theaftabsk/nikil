import "./globals.css";
import SignatureIntro from "@/components/SignatureIntro";

export const metadata = {
  title: "CA Nikil & Associates | Premier Chartered Accountants & Strategic Tax Advisors",
  description: "Elite Chartered Accountancy & Financial Advisory firm led by CA Nikil. Specializing in High-Net-Worth Tax Strategy, Corporate Audits, Business Incorporation, GST Compliance, Virtual CFO & NRI Taxation.",
  keywords: "Chartered Accountant, CA Nikil, Tax Consultant, Income Tax Filing, GST Registration, Corporate Audit, Startup Registration India, Virtual CFO, Trademark Registration Mumbai India",
  openGraph: {
    title: "CA Nikil & Associates | Chartered Accountants & Strategic Tax Advisors",
    description: "Strategic Financial Mastery & Elite Tax Advisory for Ambitious Businesses & High-Net-Worth Individuals.",
    type: "website",
    locale: "en_IN",
    siteName: "CA Nikil & Associates",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Allura&family=Great+Vibes&family=Herr+Von+Muellerhoff&family=MonteCarlo&family=Cinzel:wght@400;500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&display=swap"
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
