import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { AnalyticsItem } from "@/lib/analytics-types";

export default function AnalyticsCard({ item }: { item: AnalyticsItem }) {
  const displayTags = (item.tags && item.tags.length > 0) ? item.tags : (item.tools || []);
  const primaryMetric = item.metricFocus && item.metricFocus[0] ? item.metricFocus[0] : null;

  return (
    <article
      className="analytics-card"
      style={{
        background: "#fff",
        border: "1px solid #E2E8F0",
        borderRadius: "14px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: "0 2px 12px rgba(0, 29, 56, 0.04)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease"
      }}
    >
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
        aria-label={`View ${item.title} case study`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,29,56,0.45) 0%, transparent 40%)",
            pointerEvents: "none"
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontSize: "10px",
            fontWeight: 700,
            color: "var(--navy)",
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(4px)",
            padding: "3px 8px",
            borderRadius: "4px"
          }}
        >
          {item.category}
        </span>

        {primaryMetric && (
          <span
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              fontSize: "9px",
              fontWeight: 800,
              color: "#fff",
              background: "rgba(0, 29, 56, 0.85)",
              backdropFilter: "blur(4px)",
              padding: "2px 7px",
              borderRadius: "4px"
            }}
          >
            Metric: {primaryMetric}
          </span>
        )}
      </Link>

      <div style={{ padding: "18px", display: "flex", flexDirection: "column", flex: 1 }}>
        <span style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 600, display: "block", marginBottom: "6px" }}>
          {item.analysisType}
        </span>

        <h3 style={{ fontSize: "16px", color: "var(--navy)", margin: "0 0 8px", fontWeight: 800, lineHeight: 1.35 }}>
          <Link href={`/analytics/${item.slug}`} style={{ color: "inherit" }}>
            {item.title}
          </Link>
        </h3>

        <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, margin: "0 0 14px", flex: 1 }}>
          {item.description}
        </p>

        {/* Tags */}
        {displayTags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "12px" }}>
            {displayTags.slice(0, 3).map((tag: string) => (
              <span
                key={tag}
                style={{
                  fontSize: "9px",
                  background: "#F1F5F9",
                  color: "#475569",
                  padding: "2px 6px",
                  borderRadius: "3px",
                  fontWeight: 600
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ paddingTop: "12px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--navy)", background: "var(--pale-blue)", padding: "2px 6px", borderRadius: "3px" }}>
            {item.tools?.[0] || item.category.split(" ")[0]}
          </span>
          <Link
            href={`/analytics/${item.slug}`}
            className="text-link"
            style={{ fontSize: "12px", fontWeight: 700, padding: 0 }}
          >
            View Analysis <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
