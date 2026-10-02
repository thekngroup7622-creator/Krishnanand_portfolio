import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Sparkles } from "lucide-react";
import { getFeaturedAnalytics } from "@/lib/analytics-repository";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default async function FeaturedAnalytics() {
  const items = await getFeaturedAnalytics();

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="section" id="featured-analytics" style={{ background: "#fff" }}>
      <div className="container">
        {/* Section Heading */}
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "2.5rem"
            }}
          >
            <SectionHeading
              eyebrow="FLAGSHIP VISUALIZATIONS"
              title="Featured Cricket Analytics"
              description="Real-world match studies, delivery tracking, and broadcast-grade performance graphics created by Krishna Nand Yadav."
            />
            <Link href="/analytics" className="button button-outline desktop-section-action">
              View All Analytics <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Featured Cards Grid: Desktop 4-col / 2x2, Tablet 2-col, Mobile 1-col */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "24px"
          }}
        >
          {items.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.08}>
              <article
                className="featured-analytics-card"
                style={{
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "14px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 4px 16px rgba(0, 29, 56, 0.04)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
                }}
              >
                {/* Image Container with Consistent Aspect Ratio */}
                <Link
                  href={`/analytics/${item.slug}`}
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    background: "#001D38",
                    display: "block",
                    overflow: "hidden"
                  }}
                  aria-label={`View analysis of ${item.title}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    style={{ objectFit: "cover", objectPosition: "top center", transition: "transform 0.3s ease" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,29,56,0.55) 0%, transparent 45%)",
                      pointerEvents: "none"
                    }}
                  />
                  {item.visualizationMethod && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "12px",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "#fff",
                        background: "rgba(0, 29, 56, 0.85)",
                        backdropFilter: "blur(4px)",
                        padding: "3px 8px",
                        borderRadius: "4px"
                      }}
                    >
                      {item.visualizationMethod.split("+")[0].trim()}
                    </span>
                  )}

                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontSize: "9px",
                      fontWeight: 800,
                      color: "#fff",
                      background: "var(--orange)",
                      padding: "2px 7px",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "3px"
                    }}
                  >
                    <Sparkles size={10} /> CricRadio Suite
                  </span>
                </Link>

                {/* Card Content Body */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1
                  }}
                >
                  {/* Category Badge & Analysis Type */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "10px"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--navy)",
                        background: "var(--pale-blue)",
                        padding: "3px 9px",
                        borderRadius: "4px",
                        border: "1px solid rgba(105, 167, 239, 0.3)"
                      }}
                    >
                      {item.category}
                    </span>
                    <span style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600 }}>
                      {item.analysisType.split("&")[0].trim()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "16px",
                      color: "var(--navy)",
                      margin: "0 0 10px",
                      lineHeight: 1.35,
                      fontWeight: 800
                    }}
                  >
                    <Link href={`/analytics/${item.slug}`} style={{ color: "inherit" }}>
                      {item.title}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      margin: "0 0 16px",
                      flex: 1
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Key Metric Highlight Pill */}
                  {item.keyMetrics && item.keyMetrics[0] ? (
                    <div
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "6px",
                        padding: "7px 10px",
                        marginBottom: "14px",
                        fontSize: "11px",
                        color: "var(--navy)",
                        fontWeight: 700
                      }}
                    >
                      <span style={{ color: "var(--orange)", marginRight: "4px" }}>●</span>
                      {item.keyMetrics[0].split("(")[0].trim()}
                    </div>
                  ) : (item.metricFocus && item.metricFocus.length > 0) ? (
                    <div
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "6px",
                        padding: "7px 10px",
                        marginBottom: "14px",
                        fontSize: "11px",
                        color: "var(--navy)",
                        fontWeight: 700
                      }}
                    >
                      <span style={{ color: "var(--orange)", marginRight: "4px" }}>●</span>
                      Metric: {item.metricFocus.slice(0, 2).join(" · ")}
                    </div>
                  ) : null}

                  {/* Bottom Action */}
                  <div
                    style={{
                      paddingTop: "14px",
                      borderTop: "1px solid #F1F5F9",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--navy)",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      <BarChart3 size={13} style={{ color: "var(--orange)" }} /> Case Study Ready
                    </span>
                    <Link
                      href={`/analytics/${item.slug}`}
                      className="button button-small button-outline"
                      style={{ padding: "0 12px", minHeight: "36px", fontSize: "12px", gap: "5px" }}
                    >
                      View Analysis <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* View All Analytics CTA Button */}
        <Reveal delay={0.2}>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link
              href="/analytics"
              className="button button-primary"
              style={{ padding: "0 28px", minHeight: "48px", fontSize: "13px" }}
            >
              View All Analytics Studies <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
