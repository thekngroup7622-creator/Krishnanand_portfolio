import type { Metadata } from "next";
import { ArrowRight, GraduationCap, Award, Phone, Mail, Linkedin, Github, Download, FileText } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import { educationList, certifications } from "@/data/education";

export const metadata: Metadata = {
  title: "About | Krishna Nand Yadav — Cricket & Sports Data Analyst",
  description: "About Krishna Nand Yadav, Principal Cricket Analyst with 2.5+ years of experience in ball-by-ball cricket data, live scoring, sports data operations, and performance analysis."
};

const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/krishna-nand-yadav-43493b28a/";
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/thekngroup7622-creator";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "krishnanandcricketanalyst@gmail.com";
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "7607711590";
const resume = process.env.NEXT_PUBLIC_RESUME_URL || "/resume/Krishna_Nand_Yadav_Resume.pdf";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ABOUT KRISHNA NAND YADAV</p>
          <h1>
            Cricket Domain Expertise.<br />
            <span>Data-Led Execution.</span>
          </h1>
          <p className="page-hero-description">
            Cricket analytics professional with 2.5+ years of experience in ball-by-ball data analysis, live scoring, player and team performance analysis, sports data operations, and quality control. Skilled in transforming cricket datasets into statistical insights, performance reports, and professional visualizations.
          </p>
          <div className="page-hero-links">
            <Link href="/projects" className="button button-primary">
              Explore Projects <ArrowRight size={16} />
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              title="View Resume in new tab"
            >
              <FileText size={16} /> View Resume
            </a>
            <a
              href={resume}
              download="Krishna_Nand_Yadav_Resume.pdf"
              className="button button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              title="Download Resume PDF"
            >
              <Download size={16} /> Download Resume
            </a>
            <Link href="/contact" className="button button-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Detailed Education & Certifications Deep Dive */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="ACADEMICS & PROFESSIONAL CREDENTIALS"
              title="Education & Continuous Learning"
              description="A strong foundation in structured analytical thinking complemented by specialized sports analytics workshops."
            />
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginTop: "24px" }}>
            {/* Education Card */}
            <Reveal delay={0.1}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--pale-blue)", display: "grid", placeItems: "center", color: "var(--navy)" }}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", color: "var(--navy)" }}>Formal Education</h3>
                    <small style={{ color: "var(--muted)" }}>University & School Board Qualifications</small>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {educationList.map((edu) => (
                    <div key={edu.degree} style={{ borderBottom: "1px solid #E2E8F0", paddingBottom: "16px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <strong style={{ fontSize: "15px", color: "var(--navy)" }}>{edu.degree}</strong>
                        <span style={{ fontSize: "13px", fontWeight: 800, color: "#166534", background: "#DCFCE7", padding: "3px 10px", borderRadius: "6px" }}>
                          {edu.score}
                        </span>
                      </div>
                      <p style={{ margin: "4px 0 2px", fontSize: "13px", color: "var(--navy)", fontWeight: 500 }}>
                        {edu.institution}
                      </p>
                      <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)" }}>
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Certification Card */}
            <Reveal delay={0.15}>
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(242, 140, 40, 0.15)", display: "grid", placeItems: "center", color: "var(--orange)" }}>
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: "18px", color: "var(--navy)" }}>Workshop & Certification</h3>
                    <small style={{ color: "var(--muted)" }}>Advanced Sports Analytics Training</small>
                  </div>
                </div>

                {certifications.map((cert) => (
                  <div key={cert.title} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
                    <span style={{ display: "inline-block", fontSize: "11px", fontWeight: 700, color: "var(--orange)", background: "rgba(242, 140, 40, 0.1)", padding: "3px 8px", borderRadius: "4px", marginBottom: "8px" }}>
                      {cert.badge}
                    </span>
                    <h4 style={{ margin: "0 0 6px", fontSize: "16px", color: "var(--navy)" }}>{cert.title}</h4>
                    <p style={{ margin: "0 0 6px", fontSize: "13px", color: "var(--navy)", fontWeight: 600 }}>
                      Instructor: {cert.instructor} · <span style={{ color: "var(--muted)", fontWeight: 400 }}>{cert.date}</span>
                    </p>
                    <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
                      {cert.description}
                    </p>
                  </div>
                ))}

                {/* Direct Contact snippet */}
                <div style={{ marginTop: "24px", background: "var(--navy)", borderRadius: "10px", padding: "18px", color: "#fff" }}>
                  <h4 style={{ margin: "0 0 6px", fontSize: "14px", color: "#fff" }}>Direct Collaboration</h4>
                  <p style={{ margin: "0 0 12px", fontSize: "12px", color: "#CBD5E1" }}>
                    Available for cricket data operations, player performance analysis, and sports technology consulting.
                  </p>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <a href={`tel:${phone}`} style={{ fontSize: "12px", color: "#fff", background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <Phone size={13} /> {phone}
                    </a>
                    <a href={`mailto:${email}`} style={{ fontSize: "12px", color: "#fff", background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <Mail size={13} /> Email
                    </a>
                    <a href={linkedin} target="_blank" rel="noreferrer" style={{ fontSize: "12px", color: "#fff", background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <Linkedin size={13} /> LinkedIn
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" style={{ fontSize: "12px", color: "#fff", background: "rgba(255,255,255,0.15)", padding: "4px 10px", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      <Github size={13} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <Methodology />
    </>
  );
}
