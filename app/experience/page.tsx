import type { Metadata } from "next";
import Experience from "@/components/Experience";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ShieldCheck, Users, Bug, LineChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience | Krishna Nand Yadav — Cricket & Sports Data Analyst",
  description: "Professional experience of Krishna Nand Yadav as Principal Cricket Analyst at Lifease Solutions LLP, managing live scoring, ball-by-ball analysis, and quality control."
};

const principles = [
  {
    icon: ShieldCheck,
    title: "Data Quality & Accuracy",
    desc: "Rigorous quality checks across delivery coding, scorecards, commentary, and event metadata to ensure zero discrepancies."
  },
  {
    icon: Users,
    title: "Squad Leadership (5–6 Analysts)",
    desc: "Active coordination of analyst shifts, match allocations, real-time live scoring oversight, and productivity standards."
  },
  {
    icon: Bug,
    title: "Dev & Bug Resolution",
    desc: "Investigating edge-case data anomalies and working directly with software developers to patch bugs in scoring tools."
  },
  {
    icon: LineChart,
    title: "Actionable Performance BI",
    desc: "Translating ball-by-ball metrics into intuitive Power BI, Tableau, and visual summaries for coaches, teams, and platforms."
  }
];

export default function ExperiencePage() {
  return (
    <>
      <section className="page-hero compact">
        <div className="container">
          <p className="eyebrow">PROFESSIONAL EXPERIENCE & LEADERSHIP</p>
          <h1>
            Cricket Analysis meets <span>Operations.</span>
          </h1>
          <p className="page-hero-description">
            2.5+ years of proven expertise in ball-by-ball cricket data coding, live scoring operations, squad coordination, and quality control at Lifease Solutions LLP.
          </p>
        </div>
      </section>

      <Experience />

      <section className="section section-tinted">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="OPERATIONAL FRAMEWORK"
              title="How Operations Drive Analytics Excellence"
              description="High-quality sports analytics requires impeccable ground-truth data. Here are the core pillars that guide my daily operations."
            />
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginTop: "24px" }}>
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "var(--pale-blue)", display: "grid", placeItems: "center", color: "var(--navy)", marginBottom: "12px" }}>
                    <p.icon size={20} />
                  </div>
                  <h3 style={{ margin: "0 0 6px", fontSize: "16px", color: "var(--navy)" }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
