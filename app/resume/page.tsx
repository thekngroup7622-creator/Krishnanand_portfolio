import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowUpRight, CheckCircle2 } from "lucide-react";
import ResumeViewer from "@/components/ResumeViewer";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Resume | Krishna Nand Yadav — Cricket & Sports Data Analyst",
  description:
    "Official resume of Krishna Nand Yadav, Cricket & Sports Data Analyst with 2.5+ years of experience in ball-by-ball analysis, live scoring, quality control, Power BI, Python, and sports technology."
};

const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

export default function ResumePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero compact">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p className="eyebrow">OFFICIAL RESUME</p>
              <h1>
                Krishna Nand Yadav <span>Resume</span>
              </h1>
              <p className="page-hero-description" style={{ maxWidth: "620px" }}>
                Cricket &amp; Sports Data Analyst with 2.5+ years of experience in ball-by-ball data coding, live
                scoring operations, quality control, Power BI dashboards, and sports technology workflows.
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
              <a
                href={resumeUrl}
                download="Krishna_Nand_Yadav_Cricket_Sports_Data_Analyst_Resume.pdf"
                className="button button-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontWeight: 800 }}
              >
                <Download size={16} /> Download PDF Resume
              </a>
              <Link href="/contact" className="button button-outline">
                Contact Me <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resume Viewer Section */}
      <section className="section" style={{ background: "#F8FAFC", paddingTop: "2.5rem", paddingBottom: "4rem" }}>
        <div className="container">
          <Reveal>
            <ResumeViewer resumeUrl={resumeUrl} />
          </Reveal>
        </div>
      </section>

      {/* Quick Summary Strip */}
      <section className="section section-tinted">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="AT A GLANCE"
              title="Key Qualifications & Strengths"
              description="A quick overview of what Krishna brings to cricket data operations and sports analytics teams."
            />
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
              marginTop: "24px"
            }}
          >
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "#16A34A" }} />
                <strong style={{ fontSize: "15px", color: "var(--navy)" }}>Ball-by-Ball Precision</strong>
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                2.5+ years of live delivery-level coding, ensuring zero latency errors, verified scorecards, and
                rich contextual match logs.
              </p>
            </div>

            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "var(--orange)" }} />
                <strong style={{ fontSize: "15px", color: "var(--navy)" }}>Squad Leadership</strong>
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                Directly coordinated analyst squads of 5–6 members, overseeing shift rosters, live consistency,
                and data QA audits.
              </p>
            </div>

            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                <CheckCircle2 size={18} style={{ color: "#2563EB" }} />
                <strong style={{ fontSize: "15px", color: "var(--navy)" }}>Sports Tech & BI Stack</strong>
              </div>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                Skilled in Power BI, Tableau, Python, SQL, Streamlit, and advanced Excel to turn complex datasets
                into broadcast-ready visuals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
