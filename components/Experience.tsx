import { CheckCircle2, Users, Wrench, GraduationCap, Award } from "lucide-react";
import { experience } from "@/data/experience";
import { educationList, certifications } from "@/data/education";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="PROFESSIONAL EXPERIENCE & JOURNEY"
            title="Analysis, Leadership & Sports Data Operations"
            description="2.5+ years of hands-on experience in real-time match coding, quality control, team coordination, and sports technology development."
          />
        </Reveal>

        {/* Experience Timeline */}
        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={item.company} delay={index * 0.08}>
              <article className="timeline-item">
                <div className="timeline-rail">
                  <span className="timeline-dot" />
                  <span className="timeline-line" />
                </div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <span className="experience-period">{item.period}</span>
                      <h3 style={{ fontSize: "22px", color: "var(--navy)", marginTop: "4px" }}>{item.role}</h3>
                      <p className="company-name" style={{ fontSize: "16px", fontWeight: 700, color: "var(--navy)" }}>
                        {item.company}
                      </p>
                    </div>
                    {item.teamSize && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          background: "var(--pale-blue)",
                          color: "var(--navy)",
                          border: "1px solid rgba(105, 167, 239, 0.4)",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: 700
                        }}
                      >
                        <Users size={14} style={{ color: "var(--navy)" }} />
                        {item.teamSize}
                      </span>
                    )}
                  </div>

                  <p className="experience-summary" style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--text)", margin: "14px 0" }}>
                    {item.summary}
                  </p>

                  {/* Tools Strip */}
                  {item.tools && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "12px 0 18px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--muted)", display: "flex", alignItems: "center", gap: "4px", marginRight: "4px" }}>
                        <Wrench size={12} /> Tech Stack:
                      </span>
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          style={{
                            fontSize: "11px",
                            background: "#F1F5F9",
                            color: "var(--navy)",
                            padding: "3px 8px",
                            borderRadius: "4px",
                            fontWeight: 600,
                            border: "1px solid #E2E8F0"
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 7 Core Responsibilities */}
                  <div className="responsibility-grid" style={{ marginTop: "14px" }}>
                    {item.responsibilities.map((task) => (
                      <div key={task} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", lineHeight: 1.5 }}>
                        <CheckCircle2 size={16} style={{ color: "#16A34A", flexShrink: 0, marginTop: "2px" }} />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Education & Certification Section */}
        <div style={{ marginTop: "3.5rem" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
              <span className="eyebrow" style={{ margin: 0 }}>
                CREDENTIALS & WORKSHOPS
              </span>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {/* Education Summary */}
            <Reveal delay={0.08}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "8px", background: "var(--pale-blue)", display: "grid", placeItems: "center", color: "var(--navy)" }}>
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <strong style={{ fontSize: "14px", color: "var(--navy)", display: "block" }}>Academic Education</strong>
                    <small style={{ color: "var(--muted)" }}>Purvanchal University & Board Credentials</small>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {educationList.map((edu) => (
                    <div key={edu.degree} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #EDEFEF", paddingBottom: "8px" }}>
                      <div>
                        <strong style={{ fontSize: "13px", color: "var(--navy)" }}>{edu.degree}</strong>
                        <p style={{ margin: 0, fontSize: "11px", color: "var(--muted)" }}>{edu.institution}</p>
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: 800, color: "#166534", background: "#DCFCE7", padding: "2px 8px", borderRadius: "4px" }}>
                        {edu.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Certification Summary */}
            <Reveal delay={0.12}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <span style={{ width: "34px", height: "34px", borderRadius: "8px", background: "rgba(242, 140, 40, 0.15)", display: "grid", placeItems: "center", color: "var(--orange)" }}>
                    <Award size={18} />
                  </span>
                  <div>
                    <strong style={{ fontSize: "14px", color: "var(--navy)", display: "block" }}>Workshop & Certification</strong>
                    <small style={{ color: "var(--muted)" }}>AI-Powered Sports Analytics</small>
                  </div>
                </div>

                {certifications.map((cert) => (
                  <div key={cert.title} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                      <strong style={{ fontSize: "13px", color: "var(--navy)" }}>{cert.title}</strong>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", whiteSpace: "nowrap" }}>{cert.date}</span>
                    </div>
                    <p style={{ margin: "4px 0", fontSize: "12px", color: "var(--navy)", fontWeight: 600 }}>Instructor: {cert.instructor}</p>
                    <p style={{ margin: "4px 0 0", fontSize: "11px", color: "var(--muted)", lineHeight: 1.5 }}>{cert.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
