import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedAnalytics from "@/components/FeaturedAnalytics";
import VenturesShowcase from "@/components/VenturesShowcase";
import Skills from "@/components/Skills";
import ProjectGrid from "@/components/ProjectGrid";
import Methodology from "@/components/Methodology";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { articles } from "@/data/articles";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Professional Introduction (Ghazipur Roots to Noida Operations) */}
      <About />

      {/* 3. Associated Ventures: CricNexora & NexaPeak Digital Tech Solutions */}
      <VenturesShowcase />

      {/* 4. Featured Analytics (Sample Analytics Cards) */}
      <FeaturedAnalytics />

      {/* 5. Core Expertise (Skills) */}
      <Skills />

      {/* 6. Selected Projects (CricNexora, CRICINTEL 3D Vision, Cricket Data Visualization) */}
      <section className="section section-tinted" id="projects">
        <div className="container">
          <div className="section-heading-row">
            <Reveal>
              <SectionHeading
                eyebrow="SELECTED WORK &amp; PLATFORMS"
                title="Projects with cricket at the core"
                description="From AI-powered platforms like CricNexora to 3D spatial delivery replay concepts and broadcast visualization suites."
              />
            </Reveal>
            <Link href="/projects" className="button button-outline desktop-section-action">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <ProjectGrid limit={3} />
          <div className="mobile-section-action">
            <Link href="/projects" className="button button-outline">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Analytics Methodology (6-Step Visual Workflow) */}
      <Methodology />

      {/* 8. Experience (Principal Cricket Analyst at Lifease Solutions LLP) */}
      <Experience />

      {/* 9. Thought Leadership & Cricket Intelligence Articles */}
      <section className="section" style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <div className="container">
          <div className="section-heading-row">
            <Reveal>
              <SectionHeading
                eyebrow="THOUGHT LEADERSHIP &amp; RESEARCH"
                title="Cricket Analytics Articles"
                description="Original insights on ball-by-ball analysis, AI in modern cricket, pitch mapping, and the Ghazipur to Noida journey."
              />
            </Reveal>
            <Link href="/articles" className="button button-outline desktop-section-action">
              Browse all articles <ArrowUpRight size={16} />
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginTop: "24px" }}>
            {articles.slice(0, 3).map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <article
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--orange)", background: "rgba(242, 140, 40, 0.1)", padding: "2px 8px", borderRadius: "4px" }}>
                        {article.category}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>
                    <h3 style={{ fontSize: "17px", color: "var(--navy)", margin: "0 0 10px", lineHeight: "1.4", fontWeight: 800 }}>
                      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                    </h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.65", margin: "0 0 16px" }}>
                      {article.excerpt}
                    </p>
                  </div>
                  <Link href={`/articles/${article.slug}`} className="button button-small button-outline">
                    Read Article <ArrowUpRight size={14} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mobile-section-action" style={{ marginTop: "20px" }}>
            <Link href="/articles" className="button button-outline">
              Browse all articles <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Contact Section */}
      <Contact />
    </>
  );
}
