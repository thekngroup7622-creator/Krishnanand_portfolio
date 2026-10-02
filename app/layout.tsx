import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Krishna Nand Yadav | Cricket & Sports Data Analyst",
  description: "Portfolio of Krishna Nand Yadav — Cricket & Sports Data Analyst specializing in cricket analytics, ball-by-ball data, performance analysis, data visualization, dashboards, and sports technology.",
  openGraph: {
    title: "Krishna Nand Yadav | Cricket & Sports Data Analyst",
    description: "Portfolio of Krishna Nand Yadav — Cricket & Sports Data Analyst specializing in cricket analytics, ball-by-ball data, performance analysis, data visualization, dashboards, and sports technology.",
    type: "website",
    siteName: "Krishna Nand Yadav Portfolio"
  },
  twitter: { card: "summary_large_image", title: "Krishna Nand Yadav | Cricket & Sports Data Analyst", description: "Cricket analytics, sports data visualization and sports technology." },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F5F5"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body id="top"><a href="#main-content" className="skip-link">Skip to content</a><Navbar /><main id="main-content">{children}</main><Footer /></body></html>;
}
