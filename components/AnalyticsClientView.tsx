"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import AnalyticsCard from "@/components/AnalyticsCard";
import type { AnalyticsItem } from "@/lib/analytics-types";

export default function AnalyticsClientView({
  initialItems,
  categories
}: {
  initialItems: AnalyticsItem[];
  categories: string[];
}) {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  const allFilters = ["All", ...categories];

  const filtered = useMemo(() => {
    return initialItems.filter((item) => {
      const matchesCategory = filter === "All" || item.category === filter;
      const searchTerms = `${item.title} ${item.description} ${item.analysisType} ${item.category} ${item.tags?.join(" ") || ""} ${item.metricFocus?.join(" ") || ""}`.toLowerCase();
      const matchesSearch = searchTerms.includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialItems, filter, search]);

  return (
    <section className="section" style={{ background: "#fff" }}>
      <div className="container">
        {/* Toolbar: Category Filter Tabs & Search Box */}
        <div className="listing-toolbar" style={{ marginBottom: "2rem" }}>
          <div
            className="filter-tabs analytics-filters"
            role="group"
            aria-label="Filter analytics by category"
            style={{ flexWrap: "wrap", gap: "6px" }}
          >
            {allFilters.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${filter === cat ? "selected" : ""}`}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                style={{ fontSize: "12px", padding: "8px 14px" }}
              >
                {cat}
              </button>
            ))}
          </div>

          <label className="search-box">
            <Search size={17} />
            <span className="sr-only">Search cricket analytics</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search players, spells, partnerships..."
            />
          </label>
        </div>

        {/* Results Count & Current Category */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            borderBottom: "1px solid #E2E8F0",
            paddingBottom: "12px"
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase" }}>
            {filter === "All" ? "All Analytics Categories" : filter} ({filtered.length})
          </span>
          {search && (
            <span style={{ fontSize: "12px", color: "var(--muted)" }}>
              Showing results for &ldquo;{search}&rdquo;
            </span>
          )}
        </div>

        {/* Analytics Cards Grid */}
        {filtered.length ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "24px"
            }}
          >
            {filtered.map((item) => (
              <div key={item.slug} id={item.slug}>
                <AnalyticsCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No analytics match your criteria</h3>
            <p>Try searching for a different player, team, or clear the category filters.</p>
            <button
              className="button button-outline"
              onClick={() => {
                setFilter("All");
                setSearch("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
