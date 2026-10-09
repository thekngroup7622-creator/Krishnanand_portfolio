import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Target,
  Database,
  Eye,
  Wrench,
  BarChart2,
  Activity
} from "lucide-react";
import { getAnalyticsBySlug, getAllAnalytics } from "@/lib/analytics-repository";



export async function generateStaticParams() {
  const items = await getAllAnalytics(false);
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await getAnalyticsBySlug(slug, false);
  if (!study) return { title: "Analysis Not Found | Krishna Nand Yadav" };
  return {
    title: `${study.title} | Cricket Analytics Case Study`,
    description: study.description
  };
}

export default async function AnalyticsDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await getAnalyticsBySlug(slug, false);
  if (!study) notFound();

  const hasMetrics = study.keyMetrics && study.keyMetrics.length > 0;
  const hasInsights = study.keyInsights && study.keyInsights.length > 0;
  const hasTools = study.tools && study.tools.length > 0;
  const hasTags = study.tags && study.tags.length > 0;
  const hasMetricFocus = study.metricFocus && study.metricFocus.length > 0;

  return (
    <>
      {/* Header Banner */}
      <section className="page-hero compact">
        <div className="container">
          <Link href="/analytics" className="back-link">
            <ArrowLeft size={16} /> All Cricket Analytics
          </Link>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "12px", marginBottom: "8px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 800,
                color: "var(--navy)",
                background: "var(--pale-blue)",
                padding: "3px 10px",
                borderRadius: "4px"
              }}
            >
              {study.category}
            </span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)" }}>
              {study.analysisType}
            </span>
            {hasTags && (
              <div style={{ display: "inline-flex", gap: "5px" }}>
                {study.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "10px",
                      color: "#64748B",
                      background: "rgba(255, 255, 255, 0.6)",
                      padding: "2px 7px",
                      borderRadius: "3px"
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>
          <h1 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", margin: "0 0 14px", lineHeight: 1.2 }}>
            {study.title}
          </h1>
          <p className="page-hero-description" style={{ maxWidth: "700px" }}>
            {study.description}
          </p>
        </div>
      </section>

      {/* Main Case Study Content */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div className="analytics-detail-grid">
            {/* Left Column: Visual & Insights */}
            <div>
              {/* Actual Visual Image Display */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid #DCE6F0",
                  boxShadow: "0 10px 30px rgba(0, 29, 56, 0.08)",
                  background: "#001D38"
                }}
              >
                <div style={{ position: "relative", width: "100%", minHeight: "380px", aspectRatio: "16 / 11" }}>
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 700px"
                    style={{ objectFit: "contain", background: "#001D38" }}
                  />
                </div>
                <div
                  style={{
                    background: "rgba(0, 29, 56, 0.95)",
                    padding: "10px 16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "11px",
                    flexWrap: "wrap",
                    gap: "6px"
                  }}
                >
                  <span>VISUAL SPECIFICATION · CRICRADIO DATA PORTAL / ANALYTICS SUITE</span>
                  <span style={{ color: "var(--orange)", fontWeight: 700 }}>Created By Krishna Nand Yadav</span>
                </div>
              </div>

              {/* Key Insights Section (if available) */}
              {hasInsights && (
                <div style={{ marginTop: "32px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <Eye size={20} style={{ color: "var(--navy)" }} />
                    <h2 style={{ fontSize: "20px", color: "var(--navy)", margin: 0 }}>Key Analytical Insights</h2>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {study.keyInsights!.map((insight, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          gap: "12px",
                          background: "#F8FAFC",
                          border: "1px solid #E2E8F0",
                          borderRadius: "10px",
                          padding: "14px 16px"
                        }}
                      >
                        <span
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            background: "var(--pale-blue)",
                            color: "var(--navy)",
                            fontWeight: 800,
                            fontSize: "12px",
                            display: "grid",
                            placeItems: "center",
                            flexShrink: 0
                          }}
                        >
                          {idx + 1}
                        </span>
                        <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "var(--text)" }}>
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Case Study Metadata & Architecture */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Metric Focus Card (if provided) */}
              {hasMetricFocus && (
                <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <Activity size={18} style={{ color: "var(--orange)" }} />
                    <strong style={{ fontSize: "13px", color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Metric Focus
                    </strong>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {study.metricFocus!.map((metric) => (
                      <span
                        key={metric}
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          background: "#fff",
                          color: "var(--navy)",
                          border: "1px solid #CBD5E1",
                          borderRadius: "6px",
                          padding: "4px 10px"
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview & Objective Card */}
              {(study.objective || study.dataUsed) && (
                <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "22px" }}>
                  {study.objective && (
                    <>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                        <Target size={18} style={{ color: "var(--navy)" }} />
                        <strong style={{ fontSize: "13px", color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                          Analysis Objective
                        </strong>
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.6, margin: "0 0 16px" }}>
                        {study.objective}
                      </p>
                    </>
                  )}

                  {study.dataUsed && (
                    <>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", paddingTop: "12px", borderTop: "1px solid #E2E8F0" }}>
                        <Database size={16} style={{ color: "var(--navy)" }} />
                        <strong style={{ fontSize: "12px", color: "var(--navy)", textTransform: "uppercase" }}>
                          Data Used
                        </strong>
                      </div>
                      <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>
                        {study.dataUsed}
                      </p>
                    </>
                  )}
                </div>
              )}

              {/* Key Metrics Card */}
              {hasMetrics && (
                <div style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                    <BarChart2 size={18} style={{ color: "var(--orange)" }} />
                    <strong style={{ fontSize: "14px", color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      Key Performance Metrics
                    </strong>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {study.keyMetrics!.map((metric, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          fontSize: "12px",
                          lineHeight: 1.5,
                          color: "var(--navy)",
                          background: "#F8FAFC",
                          padding: "8px 10px",
                          borderRadius: "6px",
                          border: "1px solid #EDEFEF"
                        }}
                      >
                        <CheckCircle2 size={14} style={{ color: "#16A34A", flexShrink: 0, marginTop: "2px" }} />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visualization Method & Tools */}
              {(study.visualizationMethod || hasTools) && (
                <div style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "22px" }}>
                  {study.visualizationMethod && (
                    <>
                      <strong style={{ fontSize: "12px", color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                        Visualization Method
                      </strong>
                      <p style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.5, margin: "0 0 16px" }}>
                        {study.visualizationMethod}
                      </p>
                    </>
                  )}

                  {hasTools && (
                    <>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", paddingTop: "12px", borderTop: "1px solid #E2E8F0" }}>
                        <Wrench size={15} style={{ color: "var(--navy)" }} />
                        <strong style={{ fontSize: "12px", color: "var(--navy)", textTransform: "uppercase" }}>
                          Tools & Technologies
                        </strong>
                      </div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {study.tools!.map((tool) => (
                          <span
                            key={tool}
                            style={{
                              fontSize: "11px",
                              fontWeight: 600,
                              background: "#fff",
                              color: "var(--navy)",
                              padding: "3px 9px",
                              borderRadius: "4px",
                              border: "1px solid #CBD5E1"
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Inquire CTA */}
              <div style={{ background: "var(--navy)", borderRadius: "12px", padding: "20px", color: "#fff" }}>
                <h4 style={{ margin: "0 0 6px", fontSize: "15px", color: "#fff" }}>
                  Need Similar Match Analysis?
                </h4>
                <p style={{ margin: "0 0 14px", fontSize: "12px", color: "#CBD5E1", lineHeight: 1.5 }}>
                  I provide bespoke ball-by-ball analysis, live match coding, and broadcast graphics for teams, tournaments, and media platforms.
                </p>
                <Link href="/contact" className="button button-white" style={{ width: "100%", justifyContent: "center", fontSize: "12px" }}>
                  Connect with Krishna <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
