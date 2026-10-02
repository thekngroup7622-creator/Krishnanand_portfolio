import Image from "next/image";
import Link from "next/link";
import { Activity, BarChart3, Code2, ArrowUpRight, GraduationCap, Award } from "lucide-react";
import Reveal from "./ui/Reveal";
import { coreSkills } from "@/data/skills";
import { educationList, certifications } from "@/data/education";

const pillars = [
  {
    title: "Cricket Domain & Operations",
    icon: Activity,
    intro: "Deep ball-by-ball understanding, live match coding, and analyst leadership.",
    items: [
      "Ball-by-Ball Analysis & Tracking",
      "Player & Team Performance Analysis",
      "Live Scoring & Match Coding",
      "Batting, Bowling & Phase Metrics",
      "Pitch Maps & Wagon Wheels",
      "Analyst Squad Leadership (5–6 Analysts)"
    ],
    number: "01"
  },
  {
    title: "Data Analytics & Quality QA",
    icon: BarChart3,
    intro: "Transforming datasets into validated, clean, and statistical insights.",
    items: [
      "Data Quality Control & Auditing",
      "Bug Investigation & Dev Collaboration",
      "Data Annotation & Scorecard Verification",
      "Statistical Analysis & Modeling",
      "Data Cleaning & Extraction",
      "Automated Match Reporting"
    ],
    number: "02"
  },
  {
    title: "Technology & Visual BI",
    icon: Code2,
    intro: "Building executive dashboards, sports-tech products, and 3D visual concepts.",
    items: [
      "Power BI & Tableau Dashboards",
      "Python Data Modeling",
      "SQL Querying & Datasets",
      "Advanced Excel Analytics",
      "Streamlit App Development",
      "3D Delivery Replay Concepts"
    ],
    number: "03"
  }
];

export default function About() {
  return (
    <section className="section section-tinted" id="about">
      <div className="container">
        {/* Intro Section with Profile Photo & Bio */}
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "32px", alignItems: "center", marginBottom: "2.5rem" }}>
          <Reveal>
            <div
              style={{
                position: "relative",
                width: "140px",
                height: "140px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "3px solid #fff",
                boxShadow: "0 8px 24px rgba(0, 29, 56, 0.12)",
                flexShrink: 0
              }}
            >
              <Image
                src="/profile/krishna-nand-yadav.jpg"
                alt="Krishna Nand Yadav - Cricket & Sports Data Analyst"
                fill
                sizes="140px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </Reveal>

          <div className="about-intro" style={{ margin: 0, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "24px" }}>
            <Reveal>
              <div>
                <p className="eyebrow" style={{ margin: "0 0 8px" }}>
                  PROFESSIONAL INTRODUCTION
                </p>
                <h2 style={{ fontSize: "28px", color: "var(--navy)", margin: "0 0 12px", lineHeight: 1.25, fontWeight: 900 }}>
                  Cricket understanding meets modern data technology
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                  Cricket analytics professional with 2.5+ years of experience in ball-by-ball data analysis, live scoring, player and team performance analysis, sports data operations, and quality control. Skilled in transforming cricket datasets into statistical insights, performance reports, and professional visualizations. Combines cricket domain expertise with Power BI, Tableau, Excel, Python, SQL, and dashboard development to support data-driven performance analysis and sports technology solutions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="about-aside" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span className="aside-number">
                  2.5<span>+</span>
                </span>
                <p style={{ fontSize: "13px" }}>
                  Years in ball-by-ball cricket data coding, live scoring operations, squad coordination, and visual dashboard delivery.
                </p>
                <Link href="/about" className="text-link" style={{ marginTop: "auto" }}>
                  Full Profile & Education <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="pillar-grid">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <article className="pillar-card">
                <div className="pillar-top">
                  <span className="pillar-icon">
                    <pillar.icon size={21} />
                  </span>
                  <span className="pillar-number">{pillar.number}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.intro}</p>
                <ul>
                  {pillar.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Core Skills Chips Bar */}
        <Reveal delay={0.12}>
          <div style={{ marginTop: "2.5rem", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "1.5rem" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "1px", color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
              CORE CRICKET & SPORTS ANALYTICS COMPETENCIES
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    background: "var(--pale-blue)",
                    color: "var(--navy)",
                    padding: "5px 12px",
                    borderRadius: "6px",
                    border: "1px solid rgba(105, 167, 239, 0.25)"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Academic Education & Certification Snapshot */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem", marginTop: "2rem" }}>
          <Reveal delay={0.1}>
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "8px", background: "var(--pale-blue)", display: "grid", placeItems: "center", color: "var(--navy)" }}>
                  <GraduationCap size={20} />
                </span>
                <div>
                  <strong style={{ fontSize: "14px", color: "var(--navy)", display: "block" }}>Education</strong>
                  <small style={{ color: "var(--muted)" }}>Academic Qualifications</small>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {educationList.map((edu) => (
                  <div key={edu.degree} style={{ borderBottom: "1px solid #F1F5F9", paddingBottom: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <strong style={{ fontSize: "13px", color: "var(--navy)" }}>{edu.degree}</strong>
                      <span style={{ fontSize: "12px", fontWeight: 800, color: "#166534", background: "#DCFCE7", padding: "2px 8px", borderRadius: "4px" }}>
                        {edu.score}
                      </span>
                    </div>
                    <p style={{ margin: "3px 0 0", fontSize: "12px", color: "var(--muted)" }}>{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                <span style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(242, 140, 40, 0.12)", display: "grid", placeItems: "center", color: "var(--orange)" }}>
                  <Award size={20} />
                </span>
                <div>
                  <strong style={{ fontSize: "14px", color: "var(--navy)", display: "block" }}>Certification & Workshop</strong>
                  <small style={{ color: "var(--muted)" }}>Specialized Training</small>
                </div>
              </div>
              {certifications.map((cert) => (
                <div key={cert.title} style={{ padding: "12px", background: "#FAFBFD", borderRadius: "8px", border: "1px solid #E9EEF4" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                    <strong style={{ fontSize: "13px", color: "var(--navy)" }}>{cert.title}</strong>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", whiteSpace: "nowrap" }}>{cert.date}</span>
                  </div>
                  <p style={{ margin: "4px 0", fontSize: "12px", color: "var(--navy)", fontWeight: 600 }}>Instructor: {cert.instructor}</p>
                  <p style={{ margin: "4px 0 0", fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>{cert.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
