import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, FileText, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { educationList, certifications } from "@/data/education";
import { experience, calculateExperienceDuration } from "@/data/experience";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Krishna Nand Yadav | Cricket & Sports Data Analyst | Journey from Ghazipur to Noida",
  description:
    "Professional biography of Krishna Nand Yadav — Cricket & Sports Data Analyst and Sports Technology Entrepreneur. Tracing his journey from cricket player in Ghazipur, UP, to Principal Cricket Analyst in Noida, leading match operations, CricNexora, and sports intelligence.",
  keywords: [
    "Krishna Nand Yadav",
    "About Krishna Nand Yadav",
    "Cricket Analyst from Ghazipur",
    "Cricket Analyst in Ghazipur",
    "Cricket Data Analyst in Uttar Pradesh",
    "Cricket & Sports Data Analyst in India",
    "Lifease Solutions LLP",
    "CricNexora",
    "NexaPeak Digital Tech Solutions"
  ],
  alternates: {
    canonical: "/about-krishna"
  },
  openGraph: {
    title: "About Krishna Nand Yadav | Cricket & Sports Data Analyst",
    description:
      "From competitive cricket player in Ghazipur, Uttar Pradesh, to Principal Cricket Analyst in Noida. Professional biography, analytics expertise, and vision.",
    url: `${SITE_URL}/about-krishna`,
    type: "profile"
  }
};

const resume = process.env.NEXT_PUBLIC_RESUME_URL || "/resume/Krishna_Nand_Yadav_Resume.pdf";

export default function AboutKrishnaPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Krishna Nand Yadav", url: "/about-krishna" }
  ]);

  const expDuration = calculateExperienceDuration();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Header */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            PROFESSIONAL BIOGRAPHY · KRISHNA NAND YADAV
          </p>
          <h1>
            From the Pitches of Ghazipur<br />
            <span>To International Cricket Analytics</span>
          </h1>
          <p className="page-hero-description">
            Originally from Ghazipur, Uttar Pradesh, and currently based in Noida, Krishna Nand Yadav is a Cricket &amp; Sports Data Analyst and Sports Technology Entrepreneur working at the intersection of cricket intelligence, data analytics, and sports technology.
          </p>
          <div className="page-hero-links">
            <Link href="/international-cricket-analysis" className="button button-primary">
              International Analysis Portfolio <ArrowRight size={16} />
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              <FileText size={16} /> View Resume
            </a>
            <a
              href={resume}
              download="Krishna_Nand_Yadav_Resume.pdf"
              className="button button-outline"
            >
              <Download size={16} /> Download Resume PDF
            </a>
            <Link href="/contact" className="button button-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "920px" }}>
          {/* Identity Snapshot Card */}
          <Reveal>
            <div className="bio-header-grid">
              <div
                style={{
                  position: "relative",
                  width: "140px",
                  height: "140px",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "3px solid #fff",
                  boxShadow: "0 8px 20px rgba(0,29,56,0.12)",
                  flexShrink: 0
                }}
              >
                <Image
                  src="/profile/krishna-nand-yadav.jpg"
                  alt="Krishna Nand Yadav - Cricket & Sports Data Analyst"
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              <div>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--orange)", textTransform: "uppercase", letterSpacing: "1px" }}>
                  Verified Professional Profile
                </span>
                <h2 style={{ fontSize: "22px", color: "var(--navy)", margin: "4px 0 6px", fontWeight: 900 }}>
                  Krishna Nand Yadav
                </h2>
                <p style={{ margin: "0 0 10px", fontSize: "13px", color: "var(--navy)", fontWeight: 700 }}>
                  Principal Cricket Analyst · Lifease Solutions LLP (Nov 2023 – Present · {expDuration})
                </p>
                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", fontSize: "12px", color: "var(--muted)" }}>
                  <span>📍 Origin: <strong>Ghazipur, Uttar Pradesh</strong></span>
                  <span>🏢 Work Base: <strong>Noida, India</strong></span>
                  <span>🚀 Ventures: <strong>CricNexora · NexaPeak</strong></span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Detailed Narrative */}
          <article className="prose" style={{ fontSize: "16px", lineHeight: "1.8", color: "#334155" }}>
            <h2 style={{ fontSize: "24px", color: "var(--navy)", fontWeight: 900, marginBottom: "14px" }}>
              1. The Foundation: Cricket Player Roots in Ghazipur
            </h2>
            <p>
              My journey began in <strong>Ghazipur, Uttar Pradesh</strong>. Like most young athletes across Eastern Uttar Pradesh, cricket was far more than an extracurricular pastime—it was a rigorous pursuit of discipline, spatial awareness, and competitive drive. As an active cricket player, I spent thousands of hours on the pitch learning the tangible physics of the game:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "18px" }}>
              <li>Reading subtle variations in pitch bounce, seam movement, and air swing under changing weather conditions.</li>
              <li>Understanding batter positioning, trigger movements, and footwork commitments against pace and spin.</li>
              <li>Feeling the acute psychological momentum that shifts during boundary dry spells or sudden wickets.</li>
            </ul>

            <h2 style={{ fontSize: "24px", color: "var(--navy)", fontWeight: 900, marginTop: "36px", marginBottom: "14px" }}>
              2. The Transition: From On-Field Intuition to Data Intelligence
            </h2>
            <p>
              As professional cricket entered the modern analytics era, I observed that while match telecasts and team managements captured immense raw numbers, few individuals possessed both the <strong>on-field cricketer&apos;s intuition</strong> and the <strong>technical data engineering skills</strong> to interpret those numbers contextually.
            </p>
            <p>
              I made a deliberate decision to bridge this divide. I invested systematically in technical masteries—learning <strong>Python data manipulation (Pandas, NumPy), relational databases (SQL), interactive business intelligence (Power BI, Tableau), rapid application prototyping (Streamlit), and delivery-level video tagging</strong>.
            </p>

            <h2 style={{ fontSize: "24px", color: "var(--navy)", fontWeight: 900, marginTop: "36px", marginBottom: "14px" }}>
              3. Professional Experience at Lifease Solutions LLP (Noida)
            </h2>
            <p>
              Since <strong>November 2023</strong>, I have served as <strong>Principal Cricket Analyst at Lifease Solutions LLP</strong> based in Noida. In this leadership role, I head match operations squads of 5–6 analysts, maintaining strict data fidelity standards during high-stakes competitive fixtures.
            </p>
            <p>
              Core responsibilities executed across hundreds of match hours include:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "12px", margin: "20px 0" }}>
              {experience[0].responsibilities.map((resp, idx) => (
                <div key={idx} style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "#F8FAFC", padding: "12px", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--orange)", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontSize: "13px", lineHeight: "1.5", color: "var(--navy)" }}>{resp}</span>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: "24px", color: "var(--navy)", fontWeight: 900, marginTop: "36px", marginBottom: "14px" }}>
              4. Sports Technology Entrepreneurship: CricNexora &amp; NexaPeak
            </h2>
            <p>
              Recognizing that top-tier cricket intelligence should not be restricted to closed dressing rooms, I co-founded and contributed to two dedicated digital initiatives:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "20px" }}>
              <li>
                <strong>CricNexora (<a href="https://cricnexora.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)", fontWeight: 700 }}>cricnexora.vercel.app</a>):</strong> An AI-powered cricket analytics platform engineered to deliver real-time match tracking, dynamic pitch maps, radial wagon wheels, and performance analytics with delivery-level precision.
              </li>
              <li>
                <strong>NexaPeak Digital Tech Solutions (<a href="https://nexapeakdigitaltechsolutions.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy)", fontWeight: 700 }}>nexapeakdigitaltechsolutions.com</a>):</strong> A technology venture delivering full-stack software development, data analytics, business intelligence dashboards, and custom sports technology architectures.
              </li>
            </ul>

            <h2 style={{ fontSize: "24px", color: "var(--navy)", fontWeight: 900, marginTop: "36px", marginBottom: "14px" }}>
              5. Future Vision &amp; International Cricket Collaborations
            </h2>
            <p>
              My goal is to support national cricket boards, franchise coaching setups, broadcast media houses, and sports analytics companies with rigorous, verified match intelligence. Whether developing multi-axis bowling radar profiles or diagnosing false shot frequencies under tournament pressure, I remain committed to advancing cricket intelligence through authentic, evidence-based data science.
            </p>
          </article>

          {/* Academic & Certifications Block */}
          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "2px solid #E2E8F0" }}>
            <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 900, marginBottom: "18px" }}>
              Academic Foundation &amp; Professional Workshops
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
              {educationList.map((edu) => (
                <div key={edu.degree} style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <strong style={{ fontSize: "14px", color: "var(--navy)" }}>{edu.degree}</strong>
                    <span style={{ fontSize: "12px", fontWeight: 800, color: "#166534", background: "#DCFCE7", padding: "2px 8px", borderRadius: "4px" }}>
                      {edu.score}
                    </span>
                  </div>
                  <small style={{ color: "var(--muted)", display: "block", marginTop: "4px" }}>{edu.institution}</small>
                </div>
              ))}
              {certifications.map((cert) => (
                <div key={cert.title} style={{ background: "rgba(242, 140, 40, 0.06)", border: "1px solid rgba(242, 140, 40, 0.25)", borderRadius: "10px", padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <strong style={{ fontSize: "14px", color: "var(--navy)" }}>{cert.title}</strong>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "#9A4D00" }}>{cert.badge}</span>
                  </div>
                  <small style={{ color: "var(--muted)", display: "block", marginTop: "4px" }}>
                    Instructor: {cert.instructor} · {cert.date}
                  </small>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Navigation Footnotes */}
          <div style={{ marginTop: "40px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/cricket-analyst-ghazipur" className="button button-outline">
              ← Cricket Analyst from Ghazipur
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
