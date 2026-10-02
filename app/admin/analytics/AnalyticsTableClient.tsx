"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Edit,
  Trash2,
  Copy,
  Search,
  Star,
  CheckCircle2,
  AlertCircle,
  Eye,
  Plus,
  Loader2,
  X
} from "lucide-react";
import type { AnalyticsItem } from "@/lib/analytics-types";
import {
  deleteAnalyticsAction,
  toggleFeaturedAction,
  togglePublishedAction,
  duplicateAnalyticsAction
} from "@/app/admin/actions";

interface Stats {
  total: number;
  featured: number;
  published: number;
  draft: number;
}

export default function AnalyticsTableClient({
  initialItems,
  stats
}: {
  initialItems: AnalyticsItem[];
  stats: Stats;
}) {
  const router = useRouter();
  const [items, setItems] = useState<AnalyticsItem[]>(initialItems);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ALL" | "PUBLISHED" | "DRAFT" | "FEATURED">("ALL");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [isPending, startTransition] = useTransition();

  // Delete modal state
  const [deleteModalItem, setDeleteModalItem] = useState<AnalyticsItem | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Distinct categories from current items
  const categories = Array.from(new Set(items.map((i) => i.category))).filter(Boolean);

  // Filtered items
  const filtered = items.filter((item) => {
    // Status
    if (statusFilter === "PUBLISHED" && !item.published) return false;
    if (statusFilter === "DRAFT" && item.published) return false;
    if (statusFilter === "FEATURED" && !item.featured) return false;

    // Category
    if (categoryFilter !== "ALL" && item.category !== categoryFilter) return false;

    // Search query
    if (search.trim()) {
      const q = search.toLowerCase();
      const match =
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.analysisType.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  async function handleToggleFeatured(id: string) {
    startTransition(async () => {
      try {
        const res = await toggleFeaturedAction(id);
        setItems((prev) =>
          prev.map((item) => (item.id === id ? { ...item, featured: res.featured } : item))
        );
        router.refresh();
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Failed to toggle featured status";
        alert(msg);
      }
    });
  }

  async function handleTogglePublished(id: string) {
    startTransition(async () => {
      try {
        const res = await togglePublishedAction(id);
        setItems((prev) =>
          prev.map((item) => (item.id === id ? { ...item, published: res.published } : item))
        );
        router.refresh();
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Failed to toggle published status";
        alert(msg);
      }
    });
  }

  async function handleDuplicate(id: string) {
    startTransition(async () => {
      try {
        const res = await duplicateAnalyticsAction(id);
        setItems((prev) => [res.item, ...prev]);
        router.refresh();
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Failed to duplicate item";
        alert(msg);
      }
    });
  }

  async function confirmDelete() {
    if (!deleteModalItem) return;
    setIsDeleting(true);
    try {
      await deleteAnalyticsAction(deleteModalItem.id);
      setItems((prev) => prev.filter((i) => i.id !== deleteModalItem.id));
      setDeleteModalItem(null);
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to delete analytics visualization";
      alert(msg);
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <div>
      {/* Top Statistics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "28px"
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(0,29,56,0.03)"
          }}
        >
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#64748B", textTransform: "uppercase" }}>
            Total Analytics
          </span>
          <div style={{ fontSize: "28px", fontWeight: 900, color: "var(--navy)", marginTop: "4px" }}>
            {stats.total}
          </div>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>All visuals in library</span>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(0,29,56,0.03)"
          }}
        >
          <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--orange)", textTransform: "uppercase" }}>
            Featured
          </span>
          <div style={{ fontSize: "28px", fontWeight: 900, color: "var(--orange)", marginTop: "4px" }}>
            {stats.featured}
          </div>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>Displayed on homepage</span>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(0,29,56,0.03)"
          }}
        >
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#16A34A", textTransform: "uppercase" }}>
            Published
          </span>
          <div style={{ fontSize: "28px", fontWeight: 900, color: "#16A34A", marginTop: "4px" }}>
            {stats.published}
          </div>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>Live on public /analytics</span>
        </div>

        <div
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 2px 8px rgba(0,29,56,0.03)"
          }}
        >
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#D97706", textTransform: "uppercase" }}>
            Draft
          </span>
          <div style={{ fontSize: "28px", fontWeight: 900, color: "#D97706", marginTop: "4px" }}>
            {stats.draft}
          </div>
          <span style={{ fontSize: "11px", color: "#94A3B8" }}>Hidden from public view</span>
        </div>
      </div>

      {/* Action Bar: Search, Category, Status Filters & Add Button */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2E8F0",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "14px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", flex: 1 }}>
          {/* Search box */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#F8FAFC",
              border: "1px solid #CBD5E1",
              borderRadius: "8px",
              padding: "0 12px",
              height: "40px",
              minWidth: "220px",
              flex: "1 1 220px"
            }}
          >
            <Search size={16} style={{ color: "#94A3B8" }} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, category, type..."
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                fontSize: "13px",
                width: "100%",
                color: "var(--navy)"
              }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#94A3B8" }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as "ALL" | "PUBLISHED" | "DRAFT" | "FEATURED")}
            style={{
              height: "40px",
              padding: "0 12px",
              background: "#F8FAFC",
              border: "1px solid #CBD5E1",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              color: "var(--navy)",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="ALL">All Statuses ({items.length})</option>
            <option value="PUBLISHED">Published Only</option>
            <option value="DRAFT">Drafts Only</option>
            <option value="FEATURED">Featured Only</option>
          </select>

          {/* Category Filter */}
          {categories.length > 0 && (
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              style={{
                height: "40px",
                padding: "0 12px",
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                borderRadius: "8px",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--navy)",
                outline: "none",
                cursor: "pointer"
              }}
            >
              <option value="ALL">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Primary CTA */}
        <Link
          href="/admin/analytics/new"
          className="button button-primary"
          style={{
            minHeight: "40px",
            fontSize: "13px",
            padding: "0 18px",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(245, 158, 11, 0.25)"
          }}
        >
          <Plus size={16} /> Add New Analytics
        </Link>
      </div>

      {/* Main Analytics Table */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2E8F0",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(0,29,56,0.04)"
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
              fontSize: "13px"
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#F8FAFC",
                  borderBottom: "1px solid #E2E8F0",
                  color: "#475569",
                  fontSize: "11px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px"
                }}
              >
                <th style={{ padding: "14px 16px", width: "90px" }}>Visual</th>
                <th style={{ padding: "14px 16px" }}>Title & Slug</th>
                <th style={{ padding: "14px 16px" }}>Category</th>
                <th style={{ padding: "14px 16px" }}>Analysis Type</th>
                <th style={{ padding: "14px 16px", textAlign: "center" }}>Order</th>
                <th style={{ padding: "14px 16px", textAlign: "center" }}>Status</th>
                <th style={{ padding: "14px 16px", textAlign: "center" }}>Featured</th>
                <th style={{ padding: "14px 16px", textAlign: "right" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} style={{ padding: "48px 16px", textAlign: "center", color: "#64748B" }}>
                    <AlertCircle size={32} style={{ color: "#94A3B8", margin: "0 auto 8px" }} />
                    <div style={{ fontWeight: 700, fontSize: "14px" }}>No analytics visuals found</div>
                    <p style={{ margin: "4px 0 16px", fontSize: "12px" }}>
                      Try adjusting your search criteria or add a new visual.
                    </p>
                    <Link href="/admin/analytics/new" className="button button-outline button-small">
                      <Plus size={14} /> Add First Visual
                    </Link>
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      borderBottom: "1px solid #F1F5F9",
                      transition: "background 0.15s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#F8FAFC")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                  >
                    {/* Visual Thumbnail */}
                    <td style={{ padding: "12px 16px" }}>
                      <div
                        style={{
                          position: "relative",
                          width: "72px",
                          height: "46px",
                          borderRadius: "6px",
                          overflow: "hidden",
                          background: "#001D38",
                          border: "1px solid #CBD5E1"
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="72px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </td>

                    {/* Title & Slug */}
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ fontWeight: 800, color: "var(--navy)", marginBottom: "3px" }}>
                        <Link
                          href={`/admin/analytics/${item.id}/edit`}
                          style={{ color: "inherit", textDecoration: "none" }}
                          title="Click to edit"
                        >
                          {item.title}
                        </Link>
                      </div>
                      <div style={{ fontSize: "11px", color: "#64748B", fontFamily: "monospace" }}>
                        /{item.slug}
                      </div>
                      {item.tags && item.tags.length > 0 && (
                        <div style={{ display: "flex", gap: "4px", marginTop: "6px", flexWrap: "wrap" }}>
                          {item.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              style={{
                                fontSize: "9px",
                                background: "#F1F5F9",
                                color: "#475569",
                                padding: "2px 5px",
                                borderRadius: "3px"
                              }}
                            >
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>

                    {/* Category */}
                    <td style={{ padding: "12px 16px" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "var(--navy)",
                          background: "var(--pale-blue)",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {item.category}
                      </span>
                    </td>

                    {/* Analysis Type */}
                    <td style={{ padding: "12px 16px", color: "#475569", fontSize: "12px" }}>
                      {item.analysisType}
                    </td>

                    {/* Display Order */}
                    <td style={{ padding: "12px 16px", textAlign: "center", fontWeight: 800, color: "var(--navy)" }}>
                      <span
                        style={{
                          display: "inline-block",
                          width: "26px",
                          height: "26px",
                          lineHeight: "26px",
                          borderRadius: "50%",
                          background: "#F1F5F9",
                          fontSize: "12px"
                        }}
                      >
                        {item.displayOrder}
                      </span>
                    </td>

                    {/* Status Toggle (Published / Draft) */}
                    <td style={{ padding: "12px 16px", textAlign: "center" }}>
                      <button
                        onClick={() => handleTogglePublished(item.id)}
                        disabled={isPending}
                        style={{
                          background: item.published ? "rgba(22, 163, 74, 0.1)" : "rgba(217, 119, 6, 0.1)",
                          color: item.published ? "#16A34A" : "#D97706",
                          border: `1px solid ${item.published ? "rgba(22, 163, 74, 0.25)" : "rgba(217, 119, 6, 0.25)"}`,
                          padding: "4px 10px",
                          borderRadius: "20px",
                          fontSize: "11px",
                          fontWeight: 800,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          transition: "all 0.2s"
                        }}
                        title={item.published ? "Live. Click to change to Draft" : "Draft. Click to Publish"}
                      >
                        {item.published ? (
                          <>
                            <CheckCircle2 size={12} /> Published
                          </>
                        ) : (
                          <>
                            <AlertCircle size={12} /> Draft
                          </>
                        )}
                      </button>
                    </td>

                    {/* Featured Toggle */}
                    <td style={{ padding: "12px 16px", textAlign: "center" }}>
                      <button
                        onClick={() => handleToggleFeatured(item.id)}
                        disabled={isPending}
                        style={{
                          background: item.featured ? "rgba(245, 158, 11, 0.15)" : "#F8FAFC",
                          color: item.featured ? "var(--orange)" : "#94A3B8",
                          border: `1px solid ${item.featured ? "rgba(245, 158, 11, 0.3)" : "#CBD5E1"}`,
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.2s"
                        }}
                        title={item.featured ? "Featured on Homepage (Click to unfeature)" : "Not featured (Click to feature)"}
                      >
                        <Star size={15} fill={item.featured ? "var(--orange)" : "none"} />
                      </button>
                    </td>

                    {/* Actions */}
                    <td style={{ padding: "12px 16px", textAlign: "right" }}>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                        {/* Public Link */}
                        <Link
                          href={`/analytics/${item.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "6px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#64748B",
                            background: "#F8FAFC",
                            border: "1px solid #E2E8F0"
                          }}
                          title="View public page"
                        >
                          <Eye size={14} />
                        </Link>

                        {/* Edit Button */}
                        <Link
                          href={`/admin/analytics/${item.id}/edit`}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "6px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--navy)",
                            background: "#F0F7FF",
                            border: "1px solid #BAE6FD"
                          }}
                          title="Edit Analytics"
                        >
                          <Edit size={14} />
                        </Link>

                        {/* Duplicate Button */}
                        <button
                          onClick={() => handleDuplicate(item.id)}
                          disabled={isPending}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "6px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#64748B",
                            background: "#F8FAFC",
                            border: "1px solid #E2E8F0",
                            cursor: "pointer"
                          }}
                          title="Duplicate as Draft"
                        >
                          <Copy size={13} />
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => setDeleteModalItem(item)}
                          disabled={isPending}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "6px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#EF4444",
                            background: "#FEF2F2",
                            border: "1px solid #FECACA",
                            cursor: "pointer"
                          }}
                          title="Delete Analytics"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 29, 56, 0.6)",
            backdropFilter: "blur(4px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "28px",
              maxWidth: "460px",
              width: "100%",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
              border: "1px solid #E2E8F0"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#FEE2E2",
                  color: "#EF4444",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}
              >
                <Trash2 size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: "17px", color: "var(--navy)", fontWeight: 800 }}>
                  Delete Analytics Visualization
                </h3>
                <span style={{ fontSize: "12px", color: "#64748B" }}>Confirm action</span>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.6, margin: "0 0 16px" }}>
              Are you sure you want to delete this analytics visualization?
            </p>

            <div
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "24px"
              }}
            >
              <div style={{ fontWeight: 800, fontSize: "13px", color: "var(--navy)" }}>
                {deleteModalItem.title}
              </div>
              <div style={{ fontSize: "11px", color: "#64748B", marginTop: "2px" }}>
                Slug: /{deleteModalItem.slug} · Category: {deleteModalItem.category}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                type="button"
                onClick={() => setDeleteModalItem(null)}
                disabled={isDeleting}
                className="button button-outline"
                style={{ minHeight: "38px", fontSize: "13px", padding: "0 18px" }}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                disabled={isDeleting}
                style={{
                  minHeight: "38px",
                  fontSize: "13px",
                  padding: "0 18px",
                  background: "#DC2626",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: 700,
                  cursor: isDeleting ? "not-allowed" : "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                {isDeleting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Deleting...
                  </>
                ) : (
                  <>Delete</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
