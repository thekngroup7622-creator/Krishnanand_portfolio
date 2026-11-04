import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Target, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { analyticsCaseStudies } from "@/data/analytics";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "International Cricket Analysis Portfolio | Krishna Nand Yadav",
  description:
    "Comprehensive international cricket match analysis by Krishna Nand Yadav. Featuring ball-by-ball case studies, pitching length distributions, False Shot Induced Rate (FSIR) methodology, and broadcast performance visualizations.",
  keywords: [
    "International Cricket Match Analyst",
    "Krishna Nand Yadav",
    "False Shot Induced Rate methodology",
    "Cricket Performance Analyst",
    "Ball-by-ball cricket analytics",
    "Pitching length analysis",
    "Line and length analysis",
    "Sree Charani bowling radar",
    "Shafali Verma pitch length",
    "Cricket Data Analyst in India"
  ],
  alternates: {
    canonical: "/international-cricket-analysis"
  },
  openGraph: {
    title: "International Cricket Analysis Portfolio | Krishna Nand Yadav",
    description:
      "Deep-dive international cricket match case studies, delivery-level breakdowns, and verified performance analytics by Krishna Nand Yadav.",
    url: `${SITE_URL}/international-cricket-analysis`,
    type: "article"
  }
};

export default function InternationalCricketAnalysisPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "International Cricket Analysis", url: "/international-cricket-analysis" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            CRICKET INTELLIGENCE · MATCH OPERATIONS · ADVANCED METRICS
          </p>
          <h1>
            International Cricket<br />
            <span>Match Analysis Portfolio</span>
          </h1>
          <p className="page-hero-description">
            Examining international cricket fixtures through verified ball-by-ball delivery telemetry, pitch landing coordinates, radial wagon wheels, and advanced diagnostic metrics developed by Krishna Nand Yadav.
          </p>
          <div className="page-hero-links">
            <a href="#methodology" className="button button-primary">
              FSIR Methodology <ArrowRight size={16} />
            </a>
            <a href="#case-studies" className="button button-outline">
              Explore Case Studies
            </a>
            <Link href="/contact" className="button button-outline">
              Discuss Collaborations
            </Link>
          </div>
        </div>
      </section>

      {/* Methodology Section: False Shot Induced Rate & Verification Standard */}
      <section className="section" id="methodology" style={{ background: "#fff", borderBottom: "1px solid #E2E8F0" }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="ANALYTICAL RIGOR &amp; METHODOLOGY"
              title="False Shot Induced Rate (FSIR) &amp; Delivery Telemetry"
              description="A clear distinction between traditional aggregate scorecard numbers and calculated diagnostic metrics."
            />
          </Reveal>

          {/* Metric Comparison Card */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "24px", marginTop: "28px" }}>
            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", color: "var(--navy)" }}>
                <Target size={22} style={{ color: "var(--orange)" }} />
                <h3 style={{ margin: 0, fontSize: "18px" }}>False Shot Induced Rate (FSIR)</h3>
              </div>
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--muted)", margin: "0 0 16px" }}>
                While traditional statistics record only wickets and runs conceded, FSIR captures underlying bowling quality and batter discomfort on every ball:
              </p>
              <div style={{ background: "#fff", padding: "14px", borderRadius: "8px", border: "1px dashed #CBD5E1", fontSize: "13px", fontFamily: "monospace", color: "var(--navy)", marginBottom: "16px" }}>
                FSIR (%) = (Beaten Edges + Misses + Mistimed Leading Edges) / Legal Deliveries × 100
              </div>
              <ul style={{ fontSize: "13px", lineHeight: "1.6", color: "#334155", paddingLeft: "20px", margin: 0 }}>
                <li>Captures bowler pressure creation regardless of whether slip catches are taken or dropped.</li>
                <li>Identifies technical compromises in batter footwork (e.g., hard hands outside off stump).</li>
                <li>Provides early indicator of dismissal probability prior to actual wicket occurrences.</li>
              </ul>
            </div>

            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "26px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", color: "var(--navy)" }}>
                <ShieldCheck size={22} style={{ color: "#166534" }} />
                <h3 style={{ margin: 0, fontSize: "18px" }}>Data Verification &amp; Metric Integrity</h3>
              </div>
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "var(--muted)", margin: "0 0 16px" }}>
                All case studies adhere to professional data hygiene standards, separating verified official statistics from proprietary calculated metrics:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "#fff", padding: "10px 12px", borderRadius: "6px", border: "1px solid #E2E8F0" }}>
                  <CheckCircle2 size={16} style={{ color: "#166534", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "13px", color: "#1E293B" }}>
                    <strong>Official Figures:</strong> Runs, overs, balls faced, official boundary tallies, and match outcomes.
                  </span>
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "#fff", padding: "10px 12px", borderRadius: "6px", border: "1px solid #E2E8F0" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--orange)", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "13px", color: "#1E293B" }}>
                    <strong>Calculated Indicators:</strong> FSIR, dot-ball pressure index, phase-wise strike rate delta, and spatial pitch length percentages.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive */}
      <section className="section" id="case-studies" style={{ background: "var(--background)" }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="INTERNATIONAL MATCH CASE STUDIES"
              title="Verified Performance Breakdowns"
              description="Detailed delivery-level analyses demonstrating real-world tactical intelligence across international tournaments."
            />
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginTop: "32px" }}>
            {analyticsCaseStudies.map((study, idx) => (
              <Reveal key={study.slug} delay={idx * 0.08}>
                <article
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 29, 56, 0.06)",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                    alignItems: "stretch"
                  }}
                >
                  {/* Left Column: Visual graphic */}
                  <div style={{ position: "relative", minHeight: "280px", background: "#001528" }}>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "14px",
                        background: "rgba(0, 29, 56, 0.85)",
                        backdropFilter: "blur(4px)",
                        color: "var(--orange)",
                        fontSize: "11px",
                        fontWeight: 800,
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: "1px solid rgba(242, 140, 40, 0.3)"
                      }}
                    >
                      {study.category}
                    </div>
                  </div>

                  {/* Right Column: Case study content */}
                  <div style={{ padding: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase" }}>
                          {study.analysisType}
                        </span>
                      </div>
                      <h3 style={{ fontSize: "22px", color: "var(--navy)", margin: "0 0 12px", lineHeight: "1.3", fontWeight: 900 }}>
                        {study.title}
                      </h3>
                      <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", margin: "0 0 16px" }}>
                        {study.description}
                      </p>

                      <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "14px", marginBottom: "18px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                          Verified Key Metrics
                        </span>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "6px" }}>
                          {study.keyMetrics.slice(0, 4).map((metric, mIdx) => (
                            <div key={mIdx} style={{ fontSize: "12.5px", color: "#334155", display: "flex", alignItems: "baseline", gap: "6px" }}>
                              <span style={{ color: "var(--orange)", fontWeight: 900 }}>•</span>
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                          Analytical Conclusions
                        </span>
                        <ul style={{ fontSize: "13px", color: "#475467", lineHeight: "1.6", paddingLeft: "18px", margin: 0 }}>
                          {study.keyInsights.slice(0, 2).map((insight, iIdx) => (
                            <li key={iIdx} style={{ marginBottom: "4px" }}>{insight}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #E2E8F0", flexWrap: "wrap", gap: "12px" }}>
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                        {study.tools.slice(0, 3).map((tool) => (
                          <span key={tool} style={{ fontSize: "11px", background: "var(--pale-blue)", color: "var(--navy)", padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>
                            {tool}
                          </span>
                        ))}
                      </div>

                      <Link href={`/analytics/${study.slug}`} className="button button-small button-outline">
                        Full Case Study <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bottom Callout */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/analytics" className="button button-primary">
              View All Analytics Dashboards &amp; Case Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
