import { skillGroups, coreSkills } from "@/data/skills";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section className="section section-tinted" id="skills">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="TECHNICAL TOOLKIT & CORE SKILLS"
            title="Skills that connect cricket intuition with data engineering"
            description="A cross-functional toolkit covering ball-by-ball performance modeling, BI dashboard development, SQL/Python data extraction, and live scoring operations."
          />
        </Reveal>

        {/* Core Skills Chips Bar */}
        <Reveal delay={0.05}>
          <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "1.25rem", margin: "1.5rem 0 2.5rem" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", letterSpacing: "1px", textTransform: "uppercase", display: "block", marginBottom: "0.75rem" }}>
              Core Skills & Cricket Domain Competencies
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
                    border: "1px solid rgba(105, 167, 239, 0.3)"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Categorized Technical Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <article className="skill-card">
                <div className="skill-card-top">
                  <span>0{index + 1}</span>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", background: "rgba(242, 140, 40, 0.1)", padding: "3px 8px", borderRadius: "4px" }}>
                    {group.badge}
                  </span>
                </div>
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
                <div className="skill-chips">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
