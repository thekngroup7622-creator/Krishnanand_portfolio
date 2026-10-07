"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Download,
  ExternalLink,
  Printer,
  FileText,
  Eye,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from "lucide-react";

interface ResumeViewerProps {
  resumeUrl: string;
}

export default function ResumeViewer({ resumeUrl }: ResumeViewerProps) {
  const [viewMode, setViewMode] = useState<"interactive" | "pdf">("interactive");

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
      {/* Action Toolbar */}
      <div
        className="resume-toolbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          background: "#fff",
          padding: "16px 20px",
          borderRadius: "14px",
          border: "1px solid #E2E8F0",
          boxShadow: "0 4px 20px rgba(0, 29, 56, 0.06)",
          marginBottom: "24px",
          flexWrap: "wrap"
        }}
      >
        {/* View Switcher */}
        <div style={{ display: "flex", gap: "6px", background: "#F1F5F9", padding: "4px", borderRadius: "8px" }}>
          <button
            type="button"
            onClick={() => setViewMode("interactive")}
            className={`button button-small ${viewMode === "interactive" ? "button-primary" : "button-ghost"}`}
            style={{
              padding: "6px 14px",
              fontSize: "12px",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <FileText size={14} /> Interactive Resume
          </button>
          <button
            type="button"
            onClick={() => setViewMode("pdf")}
            className={`button button-small ${viewMode === "pdf" ? "button-primary" : "button-ghost"}`}
            style={{
              padding: "6px 14px",
              fontSize: "12px",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Eye size={14} /> PDF Document
          </button>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={handlePrint}
            className="button button-small button-outline no-print"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700 }}
            title="Print this resume"
          >
            <Printer size={14} /> Print
          </button>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-small button-outline no-print"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 700 }}
            title="Open original PDF in a new browser tab"
          >
            <ExternalLink size={14} /> Open PDF
          </a>
          <a
            href={resumeUrl}
            download="Krishna_Nand_Yadav_Cricket_Sports_Data_Analyst_Resume.pdf"
            className="button button-small button-primary no-print"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 800 }}
            title="Download original PDF resume"
          >
            <Download size={14} /> Download PDF
          </a>
        </div>
      </div>

      {/* PDF Document Mode */}
      {viewMode === "pdf" && (
        <div
          style={{
            background: "#fff",
            borderRadius: "14px",
            border: "1px solid #E2E8F0",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0, 29, 56, 0.08)",
            padding: "8px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 16px",
              background: "#F8FAFC",
              borderRadius: "8px",
              marginBottom: "8px",
              fontSize: "13px"
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--navy)" }}>
              Viewing: <strong>Krishna_Nand_Yadav__Cricket_Sports_Data_Analyst_Resume.pdf</strong>
            </span>
            <a
              href={resumeUrl}
              download="Krishna_Nand_Yadav_Cricket_Sports_Data_Analyst_Resume.pdf"
              style={{ color: "var(--orange)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}
            >
              Direct Download <Download size={13} />
            </a>
          </div>
          <iframe
            src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Krishna Nand Yadav Resume PDF"
            style={{
              width: "100%",
              height: "980px",
              border: "none",
              borderRadius: "8px"
            }}
          />
          <div style={{ padding: "12px 16px", textAlign: "center", fontSize: "12px", color: "var(--muted)" }}>
            If the PDF preview does not display in your browser,{" "}
            <a
              href={resumeUrl}
              download="Krishna_Nand_Yadav_Cricket_Sports_Data_Analyst_Resume.pdf"
              style={{ color: "var(--navy)", fontWeight: 700, textDecoration: "underline" }}
            >
              click here to download the PDF directly
            </a>
            .
          </div>
        </div>
      )}

      {/* Interactive Web ATS Resume Mode */}
      {viewMode === "interactive" && (
        <article
          className="resume-paper"
          style={{
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 12px 40px rgba(0, 29, 56, 0.08)",
            padding: "48px 48px",
            color: "#1E293B",
            lineHeight: 1.6
          }}
        >
          {/* Header */}
          <header
            style={{
              borderBottom: "2px solid #001D38",
              paddingBottom: "20px",
              marginBottom: "28px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <h1
                  style={{
                    fontSize: "32px",
                    fontWeight: 900,
                    letterSpacing: "0.5px",
                    color: "var(--navy)",
                    margin: 0,
                    textTransform: "uppercase"
                  }}
                >
                  KRISHNA NAND YADAV
                </h1>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: 800,
                    color: "var(--orange)",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    margin: "4px 0 0"
                  }}
                >
                  CRICKET &amp; SPORTS DATA ANALYST
                </p>
              </div>

              {/* Status Badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#DCFCE7",
                  color: "#166534",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700
                }}
              >
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#16A34A" }} />
                2.5+ Years Experience
              </div>
            </div>

            {/* Contact metadata strip */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px 20px",
                marginTop: "16px",
                fontSize: "13px",
                color: "var(--text)"
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                <MapPin size={14} style={{ color: "var(--orange)" }} /> Jaunpur, Uttar Pradesh, India
              </span>
              <a
                href="https://www.linkedin.com/in/krishna-nand-yadav-43493b28a/"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "var(--navy)", fontWeight: 600 }}
              >
                <Linkedin size={14} style={{ color: "#0A66C2" }} /> linkedin.com/in/krishna-nand-yadav-43493b28a
              </a>
              <a
                href="https://github.com/thekngroup7622-creator"
                target="_blank"
                rel="noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "var(--navy)", fontWeight: 600 }}
              >
                <Github size={14} /> github.com/thekngroup7622-creator
              </a>
              <a
                href="mailto:krishnanandcricketanalyst@gmail.com"
                style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "var(--navy)", fontWeight: 600 }}
              >
                <Mail size={14} style={{ color: "#2563EB" }} /> krishnanandcricketanalyst@gmail.com
              </a>
              <a
                href="tel:7607711590"
                style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "var(--navy)", fontWeight: 600 }}
              >
                <Phone size={14} style={{ color: "var(--orange)" }} /> +91 7607711590
              </a>
            </div>
          </header>

          {/* Section: Professional Summary */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 900,
                color: "var(--navy)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderBottom: "1.5px solid #CBD5E1",
                paddingBottom: "4px",
                marginBottom: "10px"
              }}
            >
              PROFESSIONAL SUMMARY
            </h2>
            <p style={{ fontSize: "14px", lineHeight: 1.7, margin: 0, color: "#334155" }}>
              Cricket and Sports Data Analyst with <strong>2.5+ years of experience</strong> in ball-by-ball data
              analysis, live scoring, match coding, player and team performance analysis, sports data operations, and
              quality control. Experienced in transforming cricket datasets into statistical insights, performance
              reports, and professional visualizations. Skilled in Power BI, Tableau, Excel, Python, SQL, dashboard
              development, data validation, and cricket performance metrics. Combines cricket domain expertise with
              data analytics and sports technology to support actionable performance analysis.
            </p>
          </section>

          {/* Section: Core Competencies */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 900,
                color: "var(--navy)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderBottom: "1.5px solid #CBD5E1",
                paddingBottom: "4px",
                marginBottom: "12px"
              }}
            >
              CORE COMPETENCIES
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "8px 16px",
                fontSize: "13px"
              }}
            >
              {[
                "Ball-by-Ball Analysis & Tracking",
                "Player & Team Performance Analysis",
                "Match Analysis",
                "Batting & Bowling Analytics",
                "Partnership Analysis",
                "Phase-wise Performance Metrics",
                "Live Scoring & Match Coding",
                "Pitch Maps & Wagon Wheels",
                "Data Quality Control & QA",
                "Data Cleaning & Extraction",
                "Statistical Analysis & Modeling",
                "Automated Match Reporting",
                "Power BI & Tableau Dashboards",
                "Python Data Modeling",
                "SQL Querying",
                "Advanced Excel Analytics",
                "Streamlit App Development",
                "Sports Technology"
              ].map((comp) => (
                <div key={comp} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--orange)", flexShrink: 0 }} />
                  <span style={{ color: "var(--navy)", fontWeight: 600 }}>{comp}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Professional Experience */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 900,
                color: "var(--navy)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderBottom: "1.5px solid #CBD5E1",
                paddingBottom: "4px",
                marginBottom: "14px"
              }}
            >
              PROFESSIONAL EXPERIENCE
            </h2>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                <div>
                  <strong style={{ fontSize: "16px", color: "var(--navy)", display: "block" }}>
                    Lifease Solutions LLP
                  </strong>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--orange)" }}>
                    Cricket &amp; Sports Data Analyst
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "12px",
                      fontWeight: 700,
                      background: "var(--pale-blue)",
                      color: "var(--navy)",
                      padding: "3px 10px",
                      borderRadius: "6px"
                    }}
                  >
                    2.5+ years of experience
                  </span>
                </div>
              </div>

              <ul style={{ margin: "12px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  "Performed delivery-by-delivery cricket data coding and analysis, maintaining accurate ball-by-ball match records and contextual information.",
                  "Analyzed batting, bowling, partnership, phase, and player-performance metrics to identify trends and generate actionable cricket insights.",
                  "Supported live scoring and match coding operations, including scorecard verification, data annotation, and match-level quality checks.",
                  "Conducted data quality control, auditing, bug investigation, and validation of cricket datasets in coordination with development and operations teams.",
                  "Worked with analyst squads of 5–6 members to coordinate match-data workflows and maintain consistency across live scoring and analytical outputs.",
                  "Created performance reports, statistical summaries, dashboards, and professional cricket visualizations for player and match analysis."
                ].map((resp, i) => (
                  <li key={i} style={{ fontSize: "13.5px", color: "#334155", lineHeight: 1.6 }}>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Selected Cricket Analytics Projects */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 900,
                color: "var(--navy)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderBottom: "1.5px solid #CBD5E1",
                paddingBottom: "4px",
                marginBottom: "14px"
              }}
            >
              SELECTED CRICKET ANALYTICS PROJECTS
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Project 1 */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "14px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  <strong style={{ fontSize: "14.5px", color: "var(--navy)" }}>
                    Rohit Sharma &amp; Shubman Gill — 255-Run Opening Partnership
                  </strong>
                  <Link
                    href="/analytics/rohit-sharma-shubman-gill-255-partnership"
                    className="no-print"
                    style={{ fontSize: "12px", color: "var(--orange)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "3px" }}
                  >
                    View Interactive Analysis <ArrowUpRight size={13} />
                  </Link>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>
                  Partnership analytics case study covering a 255-run opening partnership in 26.2 overs. Analyzed
                  phase-wise scoring patterns, momentum, contribution share, and partnership acceleration. Total: 255
                  runs off 158 balls.
                </p>
              </div>

              {/* Project 2 */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "14px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  <strong style={{ fontSize: "14.5px", color: "var(--navy)" }}>
                    Sanju Samson &amp; Abhishek Sharma — 142-Run Partnership
                  </strong>
                  <Link
                    href="/analytics/sanju-samson-abhishek-sharma-142-partnership"
                    className="no-print"
                    style={{ fontSize: "12px", color: "var(--orange)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "3px" }}
                  >
                    View Interactive Analysis <ArrowUpRight size={13} />
                  </Link>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>
                  Analyzed India&apos;s explosive first-wicket partnership using batter side-by-side comparisons,
                  scoring patterns, and powerplay performance. Partnership: 142 runs off 59 balls.
                </p>
              </div>

              {/* Project 3 */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "14px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  <strong style={{ fontSize: "14.5px", color: "var(--navy)" }}>
                    Shafali Verma — Scoring Impact by Pitching Length
                  </strong>
                  <Link
                    href="/analytics/shafali-verma-scoring-impact-by-length"
                    className="no-print"
                    style={{ fontSize: "12px", color: "var(--orange)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "3px" }}
                  >
                    View Interactive Analysis <ArrowUpRight size={13} />
                  </Link>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>
                  Developed a pitch-zone batting analysis examining scoring impact by delivery length, including
                  length-wise metrics and false-shot patterns. Innings: 68 runs off 39 balls.
                </p>
              </div>

              {/* Project 4 */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "14px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                  <strong style={{ fontSize: "14.5px", color: "var(--navy)" }}>
                    Sree Charani — 13-Metric Bowling Performance Radar
                  </strong>
                  <Link
                    href="/analytics/sree-charani-13-metric-bowling-performance"
                    className="no-print"
                    style={{ fontSize: "12px", color: "var(--orange)", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "3px" }}
                  >
                    View Interactive Analysis <ArrowUpRight size={13} />
                  </Link>
                </div>
                <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#475569", lineHeight: 1.6 }}>
                  Created a multivariate bowling performance analysis using a 13-axis radar framework and match
                  performance scorecards. Spell: 4 overs, 20 runs, 2 wickets.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Technical Skills */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 900,
                color: "var(--navy)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderBottom: "1.5px solid #CBD5E1",
                paddingBottom: "4px",
                marginBottom: "12px"
              }}
            >
              TECHNICAL SKILLS
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13.5px" }}>
              <div>
                <strong style={{ color: "var(--navy)" }}>Analytics &amp; BI: </strong>
                <span style={{ color: "#334155" }}>
                  Power BI, Tableau, Advanced Excel, Dashboard Development, Statistical Analysis
                </span>
              </div>
              <div>
                <strong style={{ color: "var(--navy)" }}>Programming &amp; Data: </strong>
                <span style={{ color: "#334155" }}>
                  Python, SQL, Data Modeling, Data Cleaning, Data Extraction
                </span>
              </div>
              <div>
                <strong style={{ color: "var(--navy)" }}>Sports Technology: </strong>
                <span style={{ color: "#334155" }}>
                  Ball-by-Ball Data, Live Scoring, Match Coding, Automated Match Reporting, Streamlit
                </span>
              </div>
              <div>
                <strong style={{ color: "var(--navy)" }}>Visualization: </strong>
                <span style={{ color: "#334155" }}>
                  Performance Dashboards, Pitch Maps, Wagon Wheels, Radar Charts, Cricket Performance Graphics
                </span>
              </div>
            </div>
          </section>

          {/* Section: Education */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 900,
                color: "var(--navy)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderBottom: "1.5px solid #CBD5E1",
                paddingBottom: "4px",
                marginBottom: "12px"
              }}
            >
              EDUCATION
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "13.5px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ color: "var(--navy)" }}>Bachelor of Arts (BA)</strong> — Veer Bahadur Singh Purvanchal University, Jaunpur
                </div>
                <span style={{ fontWeight: 800, color: "#166534", background: "#DCFCE7", padding: "2px 8px", borderRadius: "4px" }}>
                  70%
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ color: "var(--navy)" }}>Senior Secondary (Class XII)</strong> — Board of High School and Intermediate Education
                </div>
                <span style={{ fontWeight: 800, color: "#166534", background: "#DCFCE7", padding: "2px 8px", borderRadius: "4px" }}>
                  65%
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong style={{ color: "var(--navy)" }}>Secondary School Examination (Class X)</strong> — Board of High School and Intermediate Education
                </div>
                <span style={{ fontWeight: 800, color: "#166534", background: "#DCFCE7", padding: "2px 8px", borderRadius: "4px" }}>
                  61%
                </span>
              </div>
            </div>
          </section>

          {/* Section: Certification & Workshop */}
          <section style={{ marginBottom: "28px" }}>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 900,
                color: "var(--navy)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                borderBottom: "1.5px solid #CBD5E1",
                paddingBottom: "4px",
                marginBottom: "12px"
              }}
            >
              CERTIFICATION &amp; WORKSHOP
            </h2>

            <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "14px 18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "6px" }}>
                <strong style={{ fontSize: "14.5px", color: "var(--navy)" }}>
                  AI-Powered Sports Analytics Workshop
                </strong>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--orange)" }}>
                  15 August 2026
                </span>
              </div>
              <p style={{ margin: "3px 0 4px", fontSize: "13px", color: "var(--navy)", fontWeight: 600 }}>
                Instructor: Sai Prasad Kagne
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: "#475569", lineHeight: 1.5 }}>
                Training covered AI-driven data modeling, automated sports metrics, predictive delivery analytics, and
                modern sports technology workflows.
              </p>
            </div>
          </section>

          {/* Section: Portfolio & Analytics Links */}
          <section style={{ borderTop: "1.5px solid #CBD5E1", paddingTop: "16px", marginTop: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", fontSize: "13px", color: "var(--muted)" }}>
              <span>
                <strong>Portfolio:</strong> krishnanand-portfolio-theta.vercel.app
              </span>
              <span>
                <strong>Analytics:</strong> krishnanand-portfolio-theta.vercel.app/analytics
              </span>
            </div>
          </section>
        </article>
      )}
    </div>
  );
}
