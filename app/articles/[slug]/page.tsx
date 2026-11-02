import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import Reveal from "@/components/ui/Reveal";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found | Krishna Nand Yadav" };
  }

  return {
    title: `${article.title} | Krishna Nand Yadav`,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${article.slug}`
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/articles/${article.slug}`,
      type: "article",
      publishedTime: "2026-10-01T00:00:00.000Z",
      authors: ["Krishna Nand Yadav"]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt
    }
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Articles", url: "/articles" },
    { name: article.title, url: `/articles/${article.slug}` }
  ]);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: "Krishna Nand Yadav",
      url: SITE_URL
    },
    publisher: {
      "@type": "Person",
      name: "Krishna Nand Yadav"
    },
    datePublished: "2026-10-01",
    mainEntityOfPage: `${SITE_URL}/articles/${article.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header */}
      <section className="page-hero">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ marginBottom: "16px" }}>
            <Link href="/articles" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#3979BC", fontWeight: 700 }}>
              <ArrowLeft size={14} /> Back to all articles
            </Link>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "14px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--orange)", background: "rgba(242, 140, 40, 0.1)", padding: "3px 9px", borderRadius: "4px" }}>
              {article.category}
            </span>
            <span style={{ fontSize: "12px", color: "var(--muted)", display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock size={12} /> {article.readTime}
            </span>
            <span style={{ fontSize: "12px", color: "var(--muted)" }}>
              Published by Krishna Nand Yadav
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: "1.2", letterSpacing: "-1px", marginBottom: "16px" }}>
            {article.title}
          </h1>

          <p className="page-hero-description" style={{ fontSize: "16px", maxWidth: "100%" }}>
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          {/* Key Takeaways Highlight Box */}
          <Reveal>
            <div
              style={{
                background: "var(--pale-blue)",
                border: "1px solid rgba(105, 167, 239, 0.35)",
                borderRadius: "14px",
                padding: "24px",
                marginBottom: "36px"
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: 900, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "10px" }}>
                Key Analytical Takeaways
              </span>
              <ul style={{ margin: 0, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} style={{ fontSize: "14px", color: "var(--navy)", lineHeight: "1.6" }}>
                    {takeaway}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Article Text Paragraphs */}
          <article className="prose" style={{ fontSize: "16px", lineHeight: "1.85", color: "#334155" }}>
            {article.content.map((paragraph, pIdx) => (
              <p key={pIdx} style={{ marginBottom: "22px" }}>
                {paragraph}
              </p>
            ))}
          </article>

          {/* Author Box */}
          <div
            style={{
              marginTop: "48px",
              padding: "24px",
              background: "#F8FAFC",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <div style={{ position: "relative", width: "68px", height: "68px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #fff" }}>
              <Image
                src="/profile/krishna-nand-yadav.jpg"
                alt="Krishna Nand Yadav - Author"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: "220px" }}>
              <strong style={{ fontSize: "15px", color: "var(--navy)", display: "block" }}>
                Written by Krishna Nand Yadav
              </strong>
              <p style={{ fontSize: "13px", color: "var(--muted)", margin: "4px 0 8px", lineHeight: "1.5" }}>
                Cricket &amp; Sports Data Analyst originally from Ghazipur, UP, based in Noida. Principal Cricket Analyst at Lifease Solutions LLP &amp; Co-Founder of CricNexora.
              </p>
              <div style={{ display: "flex", gap: "10px", fontSize: "12px" }}>
                <Link href="/about-krishna" style={{ color: "var(--orange)", fontWeight: 700 }}>
                  View Bio →
                </Link>
                <Link href="/cricket-analyst-ghazipur" style={{ color: "var(--navy)", fontWeight: 700 }}>
                  Ghazipur Connection →
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "36px", paddingTop: "20px", borderTop: "1px solid #E2E8F0", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/articles" className="button button-outline">
              ← All Articles
            </Link>
            <Link href="/international-cricket-analysis" className="button button-primary">
              International Match Analysis →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
