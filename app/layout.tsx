import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPersonSchema, getWebsiteSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Krishna Nand Yadav | Cricket & Sports Data Analyst | Sports Technology Entrepreneur",
    template: "%s | Krishna Nand Yadav"
  },
  description:
    "Official portfolio of Krishna Nand Yadav — Cricket & Sports Data Analyst and Sports Technology Entrepreneur originally from Ghazipur, UP, based in Noida. Specializing in international match analysis, ball-by-ball data, performance analytics, video tagging, quality control, CricNexora, and NexaPeak Digital Tech Solutions.",
  keywords: [
    "Krishna Nand Yadav",
    "Cricket Analyst from Ghazipur",
    "Cricket Analyst in Ghazipur",
    "Cricket Data Analyst in Uttar Pradesh",
    "Cricket & Sports Data Analyst in India",
    "International Cricket Match Analyst",
    "Cricket Performance Analyst",
    "Ball-by-Ball Cricket Analytics",
    "AI-Powered Cricket Analytics",
    "CricNexora",
    "NexaPeak Digital Tech Solutions",
    "Sports Technology Entrepreneur",
    "Lifease Solutions LLP"
  ],
  authors: [{ name: "Krishna Nand Yadav", url: SITE_URL }],
  creator: "Krishna Nand Yadav",
  publisher: "Krishna Nand Yadav",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Krishna Nand Yadav — Cricket & Sports Data Analyst",
    description:
      "Explore international cricket match analysis, ball-by-ball datasets, pitch maps, wagon wheels, and sports tech platforms by Krishna Nand Yadav.",
    url: SITE_URL,
    type: "website",
    siteName: "Krishna Nand Yadav | Cricket & Sports Data Analyst",
    locale: "en_US",
    images: [
      {
        url: "/profile/krishna-nand-yadav.jpg",
        width: 800,
        height: 800,
        alt: "Krishna Nand Yadav - Cricket & Sports Data Analyst"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Nand Yadav | Cricket & Sports Data Analyst",
    description:
      "Cricket & Sports Data Analyst originally from Ghazipur, UP. Ball-by-ball analytics, sports technology, and international match performance.",
    images: ["/profile/krishna-nand-yadav.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001D38"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = getPersonSchema();
  const websiteJsonLd = getWebsiteSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body id="top">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
