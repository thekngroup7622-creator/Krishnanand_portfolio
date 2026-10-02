import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, Target, Compass, Wrench, BarChart2, Eye, Award } from "lucide-react";
import { projects } from "@/data/projects";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found | Krishna Nand Yadav" };
  return { title: `${project.title} | Cricket Analytics Project`, description: project.description };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero Header */}
      <section className="project-detail-hero">
        <div className="container">
          <Link href="/projects" className="back-link">
            <ArrowLeft size={16} /> All Projects
          </Link>
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="project-detail-description">{project.description}</p>
          <span className="detail-status">
            <i />
            {project.status}
          </span>
        </div>
      </section>

      {/* Main Project Case Study Body */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "start" }}>
            {/* Visual & Core Outcomes */}
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid #DCE6F0",
                  boxShadow: "0 10px 30px rgba(0, 29, 56, 0.08)",
                  background: "#001D38"
                }}
              >
                <ImagePlaceholder src={project.image} alt={`${project.title} visual preview`} />
                <span className="visual-caption" style={{ zIndex: 2 }}>
                  {project.category} · SPECIFICATION & PLATFORM DESIGN
                </span>
              </div>

              {/* Outcome / Purpose Card */}
              <div style={{ marginTop: "24px", background: "var(--pale-blue)", border: "1px solid rgba(105, 167, 239, 0.4)", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <Award size={18} style={{ color: "var(--navy)" }} />
                  <strong style={{ fontSize: "14px", color: "var(--navy)", textTransform: "uppercase" }}>
                    Outcome & Purpose
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: "14px", color: "var(--navy)", lineHeight: 1.6 }}>
                  {project.outcome}
                </p>
              </div>

              {/* Key Features Check-List */}
              <div style={{ marginTop: "24px" }}>
                <strong style={{ fontSize: "13px", color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "12px" }}>
                  Core Deliverables & Specifications
                </strong>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "13px",
                        color: "var(--text)",
                        background: "#F8FAFC",
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "1px solid #EDEFEF"
                      }}
                    >
                      <CheckCircle2 size={16} style={{ color: "#16A34A", flexShrink: 0, marginTop: "2px" }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Case Study Breakdown: Problem, Objective, Approach, Technology, Analytics, Visualization */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Problem Statement */}
              <div style={{ background: "#FFF5F5", border: "1px solid #FED7D7", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <AlertCircle size={16} style={{ color: "#C53030" }} />
                  <strong style={{ fontSize: "12px", color: "#C53030", textTransform: "uppercase" }}>
                    The Problem
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "#742A2A", lineHeight: 1.6 }}>
                  {project.problem}
                </p>
              </div>

              {/* Objective */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Target size={16} style={{ color: "var(--navy)" }} />
                  <strong style={{ fontSize: "12px", color: "var(--navy)", textTransform: "uppercase" }}>
                    Objective
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--text)", lineHeight: 1.6 }}>
                  {project.objective}
                </p>
              </div>

              {/* Approach */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Compass size={16} style={{ color: "var(--navy)" }} />
                  <strong style={{ fontSize: "12px", color: "var(--navy)", textTransform: "uppercase" }}>
                    Approach & Methodology
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--text)", lineHeight: 1.6 }}>
                  {project.approach}
                </p>
              </div>

              {/* Analytics Focus */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <BarChart2 size={16} style={{ color: "var(--orange)" }} />
                  <strong style={{ fontSize: "12px", color: "var(--navy)", textTransform: "uppercase" }}>
                    Analytics & Statistical Scope
                  </strong>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {project.analytics.map((item, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--text)" }}>
                      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--orange)" }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visualization Approach */}
              <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <Eye size={16} style={{ color: "var(--navy)" }} />
                  <strong style={{ fontSize: "12px", color: "var(--navy)", textTransform: "uppercase" }}>
                    Visualization Method
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--text)", lineHeight: 1.6 }}>
                  {project.visualization}
                </p>
              </div>

              {/* Technologies */}
              <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                  <Wrench size={16} style={{ color: "var(--navy)" }} />
                  <strong style={{ fontSize: "12px", color: "var(--navy)", textTransform: "uppercase" }}>
                    Technologies & Tools Used
                  </strong>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        background: "var(--pale-blue)",
                        color: "var(--navy)",
                        padding: "3px 9px",
                        borderRadius: "4px",
                        border: "1px solid rgba(105, 167, 239, 0.3)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "8px" }}>
                <Link href="/contact" className="button button-primary">
                  Discuss this project <ArrowUpRight size={16} />
                </Link>
                <Link href="/projects" className="button button-outline">
                  View other projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
