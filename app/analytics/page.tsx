import { getAllAnalytics, getActiveCategories } from "@/lib/analytics-repository";
import AnalyticsClientView from "@/components/AnalyticsClientView";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Cricket Analytics Visualizations | Krishna Nand Yadav",
  description:
    "Explore match analysis, phase momentum, pitch length distributions, and broadcast-grade performance graphics created by Krishna Nand Yadav."
};

export default async function AnalyticsPage() {
  const [items, categories] = await Promise.all([
    getAllAnalytics(false),
    getActiveCategories()
  ]);

  return (
    <>
      <section className="page-hero compact">
        <div className="container">
          <p className="eyebrow">CURATED CRICKET ANALYTICS GALLERY</p>
          <h1>
            Explore Performance.<br />
            <span>Keep the Context.</span>
          </h1>
          <p className="page-hero-description">
            A categorized portfolio of ball-by-ball analysis, broadcast-grade performance graphics, pitch length impact models, and match case studies.
          </p>
          <div
            className="demo-disclaimer"
            style={{
              background: "rgba(0, 29, 56, 0.05)",
              borderColor: "rgba(0, 29, 56, 0.12)",
              color: "var(--navy)"
            }}
          >
            ⚡ <strong>Analytical Integrity:</strong> Every case study is grounded in ball-by-ball match records with defined denominators and transparent methodology.
          </div>
        </div>
      </section>

      <AnalyticsClientView initialItems={items} categories={categories} />
    </>
  );
}
