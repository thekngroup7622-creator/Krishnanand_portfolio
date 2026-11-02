import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { articles } from "@/data/articles";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cricket Analytics Articles & Insights | Krishna Nand Yadav",
  description:
    "Authoritative articles and technical guides on ball-by-ball analysis, AI in sports analytics, pitch mapping, False Shot Induced Rate, and sports technology by Krishna Nand Yadav.",
  keywords: [
    "Krishna Nand Yadav",
    "Cricket analytics articles",
    "Ball-by-ball data cricket",
    "AI in cricket analytics",
    "Cricket pitch maps and wagon wheels",
    "International match analysis guide",
    "CricNexora technology"
  ],
  alternates: {
    canonical: "/articles"
  },
  openGraph: {
    title: "Cricket Analytics Articles & Insights | Krishna Nand Yadav",
    description:
      "Original cricket intelligence guides, technical essays, and domain methodologies written by Krishna Nand Yadav.",
    url: `${SITE_URL}/articles`,
    type: "website"
  }
};

export default function ArticlesIndexPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Articles & Insights", url: "/articles" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            THOUGHT LEADERSHIP · CRICKET INTELLIGENCE · TECHNICAL GUIDES
          </p>
          <h1>
            Cricket Analytics<br />
            <span>Articles &amp; Industry Insights</span>
          </h1>
          <p className="page-hero-description">
            Original publications exploring the mechanics of delivery-by-delivery data collection, spatial pitch mapping, artificial intelligence in sports analytics, and the journey from grassroots cricket in Ghazipur to professional operations in Noida.
          </p>
          <div className="page-hero-links">
            <Link href="/international-cricket-analysis" className="button button-primary">
              International Match Portfolio <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="button button-outline">
              Propose Editorial Collaboration
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="PUBLISHED GUIDES &amp; ESSAYS"
              title="Original Cricket Data Research"
              description="Written for analysts, coaches, sports technologists, and serious followers of the game."
            />
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px", marginTop: "32px" }}>
            {articles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06}>
                <article
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    borderRadius: "14px",
                    padding: "26px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--orange)", background: "rgba(242, 140, 40, 0.1)", padding: "3px 8px", borderRadius: "4px" }}>
                        {article.category}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", color: "var(--muted)" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                          <Clock size={12} /> {article.readTime}
                        </span>
                      </div>
                    </div>

                    <h2 style={{ fontSize: "19px", color: "var(--navy)", margin: "0 0 10px", lineHeight: "1.35", fontWeight: 900 }}>
                      <Link href={`/articles/${article.slug}`} style={{ color: "inherit" }}>
                        {article.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: "1.7", margin: "0 0 16px" }}>
                      {article.excerpt}
                    </p>

                    <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "12px", marginBottom: "16px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
                        Key Takeaway
                      </span>
                      <p style={{ fontSize: "12.5px", color: "#334155", margin: 0, lineHeight: "1.5" }}>
                        {article.keyTakeaways[0]}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #E2E8F0" }}>
                    <span style={{ fontSize: "12px", color: "var(--muted)" }}>By Krishna Nand Yadav</span>
                    <Link href={`/articles/${article.slug}`} className="button button-small button-outline">
                      Read Article <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
