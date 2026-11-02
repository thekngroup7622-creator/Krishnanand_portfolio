import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cricket Analyst from Ghazipur, Uttar Pradesh | Krishna Nand Yadav",
  description:
    "Explore the journey of Krishna Nand Yadav, a professional Cricket & Sports Data Analyst originally from Ghazipur, Uttar Pradesh, currently based in Noida. Specializing in ball-by-ball analysis, international cricket metrics, and sports technology.",
  keywords: [
    "Krishna Nand Yadav",
    "Cricket Analyst from Ghazipur",
    "Cricket Analyst in Ghazipur",
    "Cricket Data Analyst in Uttar Pradesh",
    "Ghazipur cricket analyst",
    "Sports Data Analyst Ghazipur",
    "Cricket analyst Noida",
    "CricNexora",
    "Lifease Solutions LLP"
  ],
  alternates: {
    canonical: "/cricket-analyst-ghazipur"
  },
  openGraph: {
    title: "Cricket Analyst from Ghazipur, Uttar Pradesh | Krishna Nand Yadav",
    description:
      "From playing local cricket in Ghazipur to leading professional ball-by-ball match operations in Noida. Discover Krishna Nand Yadav's cricket analytics journey.",
    url: `${SITE_URL}/cricket-analyst-ghazipur`,
    type: "article"
  }
};

export default function GhazipurPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Cricket Analyst from Ghazipur", url: "/cricket-analyst-ghazipur" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <MapPin size={13} style={{ color: "var(--orange)", display: "inline-block", marginRight: "4px" }} />
            REGIONAL ROOTS · GLOBAL CRICKET INTELLIGENCE
          </p>
          <h1>
            Cricket Analyst from<br />
            <span>Ghazipur, Uttar Pradesh</span>
          </h1>
          <p className="page-hero-description">
            Krishna Nand Yadav is a Cricket &amp; Sports Data Analyst originally from Ghazipur, Uttar Pradesh, India, currently operating out of Noida. Discover how grassroots playing experience in Purvanchal evolved into professional international match analysis, delivery-by-delivery data operations, and sports technology entrepreneurship.
          </p>
          <div className="page-hero-links">
            <Link href="/international-cricket-analysis" className="button button-primary">
              International Match Analysis <ArrowRight size={16} />
            </Link>
            <Link href="/about-krishna" className="button button-outline">
              Full Biography
            </Link>
            <Link href="/contact" className="button button-outline">
              Connect Directly
            </Link>
          </div>
        </div>
      </section>

      {/* Main Editorial Story */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px", padding: "18px 24px", background: "var(--pale-blue)", borderRadius: "12px", border: "1px solid rgba(105, 167, 239, 0.3)" }}>
              <div style={{ position: "relative", width: "70px", height: "70px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #fff" }}>
                <Image
                  src="/profile/krishna-nand-yadav.jpg"
                  alt="Krishna Nand Yadav - Cricket Analyst from Ghazipur, UP"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <strong style={{ fontSize: "16px", color: "var(--navy)", display: "block" }}>
                  Krishna Nand Yadav
                </strong>
                <span style={{ fontSize: "13px", color: "var(--muted)" }}>
                  Native of Ghazipur (Purvanchal), Uttar Pradesh · Professional Base: Noida, India
                </span>
              </div>
            </div>
          </Reveal>

          <article className="prose" style={{ fontSize: "16px", lineHeight: "1.8", color: "#334155" }}>
            <h2 style={{ fontSize: "26px", color: "var(--navy)", fontWeight: 900, marginBottom: "16px" }}>
              The Cricket Foundation in Ghazipur
            </h2>
            <p>
              Ghazipur, situated in eastern Uttar Pradesh along the banks of the Ganges, has a proud sporting spirit. Like thousands of youngsters across Purvanchal, cricket was the foundation of my early life. Competing in local tournaments and playing competitive cricket across Ghazipur nurtured my intuitive understanding of pitch dynamics, player temperament, bowler rhythm, and the pressure moments that decide matches.
            </p>
            <p>
              However, as the sport evolved globally with telemetry, ball-tracking sensors, and granular performance metrics, I recognized a critical need: the gap between instinct-driven grassroots cricket and structured, scientific sports data analytics.
            </p>

            <h2 style={{ fontSize: "26px", color: "var(--navy)", fontWeight: 900, marginTop: "36px", marginBottom: "16px" }}>
              Transition from Player to Cricket Data Analyst
            </h2>
            <p>
              Transitioning from an active cricket player to an analyst demanded a disciplined shift in technical capabilities. I supplemented my cricket domain intuition with rigorous technical competencies in <strong>Python, SQL, Power BI, Tableau, Advanced Excel, and Streamlit</strong>.
            </p>
            <p>
              Rather than viewing data as cold numbers, my playing background provided a unique tactical lens: understanding that a dot ball in the 18th over carries an entirely different psychological weight than a dot ball in the 3rd over; or that pitching length variance of just six inches dictates whether an edge carries to slip or drops harmlessly short.
            </p>

            <h2 style={{ fontSize: "26px", color: "var(--navy)", fontWeight: 900, marginTop: "36px", marginBottom: "16px" }}>
              Professional Operations in Noida &amp; International Analysis
            </h2>
            <p>
              Moving to the major tech and media corridor of Noida provided the professional platform to apply these competencies at scale. Currently serving as <strong>Principal Cricket Analyst at Lifease Solutions LLP</strong> (since November 2023), I lead analyst squads of 5–6 professionals across live match operations.
            </p>
            <p>
              My professional responsibilities include:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
              <li><strong>Ball-by-Ball Delivery Coding:</strong> Capturing release points, bounce coordinates, seam/swing angles, batter footwork, and execution outcomes in real time.</li>
              <li><strong>Video Tagging &amp; Quality Control:</strong> Validating live feeds against video replays to eliminate scoring discrepancies.</li>
              <li><strong>International Tournament Analysis:</strong> Publishing diagnostic breakdowns on high-profile clashes, including the Women&apos;s Asia Cup 2026 (such as Sree Charani&apos;s 13-metric bowling radar and Shafali Verma&apos;s pitch-length impact).</li>
              <li><strong>Diagnostic Performance Indicators:</strong> Evaluating false shot inducement rates, dot-ball pressure indices, and phase-wise momentum.</li>
            </ul>

            <h2 style={{ fontSize: "26px", color: "var(--navy)", fontWeight: 900, marginTop: "36px", marginBottom: "16px" }}>
              Sports Technology Entrepreneurship: CricNexora &amp; NexaPeak
            </h2>
            <p>
              Beyond day-to-day match coding, my vision is to make modern cricket analytics accessible across all tiers of the game. This led to the development of <strong>CricNexora</strong> (<a href="https://cricnexora.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)", fontWeight: 700 }}>cricnexora.vercel.app</a>), an AI-powered cricket analytics platform delivering ball-by-ball intelligence, dynamic pitch maps, and interactive wagon wheels.
            </p>
            <p>
              Additionally, through <strong>NexaPeak Digital Tech Solutions</strong> (<a href="https://nexapeakdigitaltechsolutions.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)", fontWeight: 700 }}>nexapeakdigitaltechsolutions.com</a>), we engineer full-stack digital products, business intelligence dashboards, and custom software architectures for modern sports and enterprise organizations.
            </p>

            <h2 style={{ fontSize: "26px", color: "var(--navy)", fontWeight: 900, marginTop: "36px", marginBottom: "16px" }}>
              Vision for Indian &amp; Global Cricket
            </h2>
            <p>
              Coming from Ghazipur, my goal is to demonstrate that world-class sports analytics expertise can emerge from every corner of India. Whether collaborating with international franchises, state cricket associations, media broadcasters, or analytics teams, I am committed to advancing cricket intelligence through authentic, scientifically verified data.
            </p>
          </article>

          {/* Quick Key Metrics Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "40px" }}>
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "18px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--orange)", textTransform: "uppercase" }}>Origin</span>
              <strong style={{ fontSize: "16px", color: "var(--navy)", display: "block", marginTop: "4px" }}>Ghazipur, UP</strong>
              <small style={{ color: "var(--muted)" }}>Roots in Purvanchal grassroots cricket</small>
            </div>
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "18px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase" }}>Work Base</span>
              <strong style={{ fontSize: "16px", color: "var(--navy)", display: "block", marginTop: "4px" }}>Noida, India</strong>
              <small style={{ color: "var(--muted)" }}>Principal Analyst · Lifease Solutions</small>
            </div>
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "18px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--orange)", textTransform: "uppercase" }}>Platform</span>
              <strong style={{ fontSize: "16px", color: "var(--navy)", display: "block", marginTop: "4px" }}>CricNexora</strong>
              <small style={{ color: "var(--muted)" }}>AI-Powered Cricket Analytics</small>
            </div>
          </div>

          {/* Navigation CTA */}
          <div style={{ marginTop: "48px", paddingTop: "24px", borderTop: "1px solid #E2E8F0", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <Link href="/about-krishna" className="button button-outline">
              ← About Krishna
            </Link>
            <Link href="/international-cricket-analysis" className="button button-primary">
              International Cricket Analysis →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
