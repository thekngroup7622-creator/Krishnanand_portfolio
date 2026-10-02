"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  UploadCloud,
  X,
  RefreshCw,
  Check,
  AlertCircle,
  ArrowLeft,
  Sparkles,
  Eye,
  Loader2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import {
  PREDEFINED_CATEGORIES,
  PREDEFINED_ANALYSIS_TYPES,
  COMMON_METRIC_SUGGESTIONS
} from "@/lib/categories";
import { slugify, type AnalyticsItem, type AnalyticsInput } from "@/lib/analytics-types";

interface AnalyticsFormProps {
  initialData?: Partial<AnalyticsItem>;
  isEdit?: boolean;
  onSubmit: (data: AnalyticsInput) => Promise<unknown>;
}

export default function AnalyticsForm({
  initialData,
  isEdit = false,
  onSubmit
}: AnalyticsFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(Boolean(initialData?.slug));
  const [category, setCategory] = useState(initialData?.category || "Batting Analytics");
  const [analysisType, setAnalysisType] = useState(initialData?.analysisType || "Batting Performance");
  const [description, setDescription] = useState(initialData?.description || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [featured, setFeatured] = useState(initialData?.featured ?? false);
  const [published, setPublished] = useState(initialData?.published ?? true);
  const [displayOrder, setDisplayOrder] = useState<number>(initialData?.displayOrder ?? 1);

  // Tags & Metrics as comma-separated strings for easy input
  const [tagsInput, setTagsInput] = useState(initialData?.tags ? initialData.tags.join(", ") : "");
  const [metricFocusInput, setMetricFocusInput] = useState(
    initialData?.metricFocus ? initialData.metricFocus.join(", ") : ""
  );

  // Advanced fields (collapsible)
  const [showAdvanced, setShowAdvanced] = useState(
    Boolean(
      initialData?.objective ||
      initialData?.dataUsed ||
      (initialData?.keyInsights && initialData.keyInsights.length > 0) ||
      (initialData?.keyMetrics && initialData.keyMetrics.length > 0)
    )
  );
  const [objective, setObjective] = useState(initialData?.objective || "");
  const [dataUsed, setDataUsed] = useState(initialData?.dataUsed || "");
  const [visualizationMethod, setVisualizationMethod] = useState(initialData?.visualizationMethod || "");
  const [keyMetricsInput, setKeyMetricsInput] = useState(
    initialData?.keyMetrics ? initialData.keyMetrics.join("\n") : ""
  );
  const [keyInsightsInput, setKeyInsightsInput] = useState(
    initialData?.keyInsights ? initialData.keyInsights.join("\n") : ""
  );
  const [toolsInput, setToolsInput] = useState(
    initialData?.tools ? initialData.tools.join(", ") : "Python, Sports Data Graphics"
  );

  // Upload state
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // Form submission state
  const [isSaving, setIsSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Auto-slugify when title changes (unless manually edited)
  function handleTitleChange(val: string) {
    setTitle(val);
    if (!isSlugManuallyEdited) {
      setSlug(slugify(val));
    }
  }

  // Handle Image File Selection
  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError(null);

    // Validate type
    const validTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setUploadError("Please upload a JPG, JPEG, PNG, or WEBP image.");
      return;
    }

    // Validate size (15MB max)
    if (file.size > 15 * 1024 * 1024) {
      setUploadError("Image file size must be less than 15MB.");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to upload image.");
      }

      setImage(data.url);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to upload image.";
      setUploadError(msg);
    } finally {
      setIsUploading(false);
      // Reset input value so same file can be re-selected if needed
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function removeImage() {
    setImage("");
    setUploadError(null);
  }

  function addQuickMetric(m: string) {
    const current = metricFocusInput
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    if (!current.includes(m)) {
      current.push(m);
      setMetricFocusInput(current.join(", "));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    if (!title.trim()) {
      setFormError("Title is required.");
      return;
    }

    if (!image.trim()) {
      setFormError("Please upload or provide a visualization image.");
      return;
    }

    setIsSaving(true);

    try {
      // Parse tags and metrics
      const tags = tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const metricFocus = metricFocusInput
        .split(",")
        .map((m) => m.trim())
        .filter(Boolean);

      const tools = toolsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const keyMetrics = keyMetricsInput
        .split("\n")
        .map((m) => m.trim())
        .filter(Boolean);

      const keyInsights = keyInsightsInput
        .split("\n")
        .map((i) => i.trim())
        .filter(Boolean);

      const payload: AnalyticsInput = {
        title: title.trim(),
        slug: slugify(slug || title),
        category: category.trim(),
        analysisType: analysisType.trim(),
        description: description.trim(),
        image: image.trim(),
        featured,
        published,
        displayOrder: Number(displayOrder) || 1,
        tags,
        metricFocus,
        tools,
        objective: objective.trim() || undefined,
        dataUsed: dataUsed.trim() || undefined,
        visualizationMethod: visualizationMethod.trim() || undefined,
        keyMetrics: keyMetrics.length > 0 ? keyMetrics : undefined,
        keyInsights: keyInsights.length > 0 ? keyInsights : undefined
      };

      await onSubmit(payload);
      router.push("/admin/analytics");
      router.refresh();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to save analytics visualization.";
      setFormError(msg);
      setIsSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "860px", margin: "0 auto" }}>
      {/* Back button & Form Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <Link
          href="/admin/analytics"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#64748B",
            fontSize: "13px",
            textDecoration: "none",
            fontWeight: 700
          }}
        >
          <ArrowLeft size={16} /> Back to Analytics Table
        </Link>

        {isEdit && slug && (
          <Link
            href={`/analytics/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              color: "var(--navy)",
              fontSize: "12px",
              fontWeight: 700,
              textDecoration: "none"
            }}
          >
            <Eye size={14} /> View Public Visual
          </Link>
        )}
      </div>

      {formError && (
        <div
          style={{
            background: "#FEE2E2",
            border: "1px solid #FCA5A5",
            borderRadius: "10px",
            padding: "14px 16px",
            marginBottom: "24px",
            color: "#991B1B",
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{formError}</span>
        </div>
      )}

      {/* Main Form Card */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2E8F0",
          borderRadius: "16px",
          padding: "32px",
          boxShadow: "0 2px 16px rgba(0,29,56,0.04)",
          display: "flex",
          flexDirection: "column",
          gap: "24px"
        }}
      >
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}
          >
            Title <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <input
            id="title"
            type="text"
            required
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="e.g. Rohit Sharma & Shubman Gill — 255-Run Opening Partnership"
            style={{
              width: "100%",
              height: "44px",
              padding: "0 14px",
              background: "#F8FAFC",
              border: "1px solid #CBD5E1",
              borderRadius: "8px",
              fontSize: "14px",
              color: "var(--navy)",
              outline: "none"
            }}
          />
        </div>

        {/* Slug */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
            <label
              htmlFor="slug"
              style={{ fontSize: "12px", fontWeight: 700, color: "#475569" }}
            >
              URL Slug <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <span style={{ fontSize: "11px", color: "#94A3B8" }}>
              Public URL: /analytics/{slug || "slug-preview"}
            </span>
          </div>
          <input
            id="slug"
            type="text"
            required
            value={slug}
            onChange={(e) => {
              setIsSlugManuallyEdited(true);
              setSlug(slugify(e.target.value));
            }}
            placeholder="auto-generated-from-title"
            style={{
              width: "100%",
              height: "40px",
              padding: "0 14px",
              background: "#F8FAFC",
              border: "1px solid #CBD5E1",
              borderRadius: "8px",
              fontSize: "13px",
              fontFamily: "monospace",
              color: "var(--navy)",
              outline: "none"
            }}
          />
        </div>

        {/* Category & Analysis Type (2 Columns) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {/* Category Dropdown */}
          <div>
            <label
              htmlFor="category"
              style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}
            >
              Category <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <select
              id="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%",
                height: "44px",
                padding: "0 14px",
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
              {PREDEFINED_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Analysis Type */}
          <div>
            <label
              htmlFor="analysisType"
              style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}
            >
              Analysis Type <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <div style={{ position: "relative" }}>
              <input
                id="analysisType"
                type="text"
                required
                list="analysis-types-list"
                value={analysisType}
                onChange={(e) => setAnalysisType(e.target.value)}
                placeholder="Select or enter analysis type..."
                style={{
                  width: "100%",
                  height: "44px",
                  padding: "0 14px",
                  background: "#F8FAFC",
                  border: "1px solid #CBD5E1",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "var(--navy)",
                  outline: "none"
                }}
              />
              <datalist id="analysis-types-list">
                {PREDEFINED_ANALYSIS_TYPES.map((t) => (
                  <option key={t} value={t} />
                ))}
              </datalist>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}
          >
            Description <span style={{ color: "#EF4444" }}>*</span>
          </label>
          <textarea
            id="description"
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A concise summary of the match study, phase momentum, key questions answered, and analytical context..."
            style={{
              width: "100%",
              padding: "12px 14px",
              background: "#F8FAFC",
              border: "1px solid #CBD5E1",
              borderRadius: "8px",
              fontSize: "13px",
              lineHeight: 1.6,
              color: "var(--navy)",
              outline: "none",
              resize: "vertical"
            }}
          />
        </div>

        {/* IMAGE UPLOAD SECTION */}
        <div>
          <label
            style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "var(--navy)", marginBottom: "8px" }}
          >
            Visualization Image <span style={{ color: "#EF4444" }}>*</span>
          </label>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {uploadError && (
            <div
              style={{
                background: "#FEE2E2",
                border: "1px solid #FCA5A5",
                borderRadius: "8px",
                padding: "8px 12px",
                marginBottom: "12px",
                fontSize: "12px",
                color: "#991B1B"
              }}
            >
              {uploadError}
            </div>
          )}

          {image ? (
            /* Image Preview */
            <div
              style={{
                border: "1px solid #CBD5E1",
                borderRadius: "12px",
                padding: "14px",
                background: "#F8FAFC"
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxHeight: "360px",
                  aspectRatio: "16 / 10",
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "#001D38",
                  marginBottom: "12px"
                }}
              >
                <Image
                  src={image}
                  alt="Visual Preview"
                  fill
                  sizes="(max-width: 860px) 100vw, 860px"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                <span style={{ fontSize: "12px", color: "#64748B", fontFamily: "monospace" }}>
                  {image}
                </span>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                    className="button button-outline"
                    style={{ minHeight: "34px", padding: "0 12px", fontSize: "12px", gap: "5px" }}
                  >
                    <RefreshCw size={13} /> Replace Image
                  </button>
                  <button
                    type="button"
                    onClick={removeImage}
                    disabled={isUploading}
                    style={{
                      minHeight: "34px",
                      padding: "0 12px",
                      fontSize: "12px",
                      background: "#FEE2E2",
                      color: "#DC2626",
                      border: "1px solid #FECACA",
                      borderRadius: "6px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      fontWeight: 700
                    }}
                  >
                    <X size={13} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Upload Drop Area */
            <div
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: "2px dashed #CBD5E1",
                borderRadius: "12px",
                padding: "36px 20px",
                textAlign: "center",
                background: "#F8FAFC",
                cursor: isUploading ? "not-allowed" : "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--orange)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#CBD5E1")}
            >
              {isUploading ? (
                <div>
                  <Loader2 size={36} className="animate-spin" style={{ color: "var(--orange)", margin: "0 auto 10px" }} />
                  <div style={{ fontWeight: 800, color: "var(--navy)", fontSize: "14px" }}>
                    Uploading Cricket Visualization...
                  </div>
                  <span style={{ fontSize: "12px", color: "#94A3B8" }}>Processing and preserving quality</span>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(245, 158, 11, 0.15)",
                      color: "var(--orange)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "12px"
                    }}
                  >
                    <UploadCloud size={24} />
                  </div>
                  <div style={{ fontWeight: 800, color: "var(--navy)", fontSize: "15px", marginBottom: "4px" }}>
                    Click to Upload Cricket Analytics Graphic
                  </div>
                  <p style={{ margin: "0 0 10px", fontSize: "12px", color: "#64748B" }}>
                    Supports high-resolution JPG, JPEG, PNG, WEBP (up to 15MB)
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      background: "#E2E8F0",
                      padding: "3px 10px",
                      borderRadius: "4px"
                    }}
                  >
                    Select File
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Tags & Metric Focus (2 Columns) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {/* Tags */}
          <div>
            <label
              htmlFor="tags"
              style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}
            >
              Tags (comma separated)
            </label>
            <input
              id="tags"
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="e.g. ODI, Batting, Partnership, Powerplay"
              style={{
                width: "100%",
                height: "42px",
                padding: "0 14px",
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                borderRadius: "8px",
                fontSize: "13px",
                color: "var(--navy)",
                outline: "none"
              }}
            />
            <span style={{ fontSize: "11px", color: "#94A3B8", marginTop: "4px", display: "block" }}>
              Displayed on public cards as search tags
            </span>
          </div>

          {/* Metric Focus */}
          <div>
            <label
              htmlFor="metricFocus"
              style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}
            >
              Metric Focus (comma separated)
            </label>
            <input
              id="metricFocus"
              type="text"
              value={metricFocusInput}
              onChange={(e) => setMetricFocusInput(e.target.value)}
              placeholder="e.g. Strike Rate, Dot %, False Shot %, Boundaries"
              style={{
                width: "100%",
                height: "42px",
                padding: "0 14px",
                background: "#F8FAFC",
                border: "1px solid #CBD5E1",
                borderRadius: "8px",
                fontSize: "13px",
                color: "var(--navy)",
                outline: "none"
              }}
            />
            {/* Quick click metric chips */}
            <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", marginTop: "6px" }}>
              {COMMON_METRIC_SUGGESTIONS.slice(0, 6).map((m) => (
                <button
                  type="button"
                  key={m}
                  onClick={() => addQuickMetric(m)}
                  style={{
                    fontSize: "10px",
                    background: "#F1F5F9",
                    border: "1px solid #E2E8F0",
                    borderRadius: "3px",
                    padding: "2px 6px",
                    color: "#475569",
                    cursor: "pointer"
                  }}
                >
                  +{m}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Display Order, Featured & Published Controls */}
        <div
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "12px",
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            alignItems: "center"
          }}
        >
          {/* Display Order */}
          <div>
            <label
              htmlFor="displayOrder"
              style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--navy)", marginBottom: "4px" }}
            >
              Display Order
            </label>
            <input
              id="displayOrder"
              type="number"
              min={1}
              value={displayOrder}
              onChange={(e) => setDisplayOrder(parseInt(e.target.value, 10) || 1)}
              style={{
                width: "90px",
                height: "38px",
                padding: "0 10px",
                background: "#fff",
                border: "1px solid #CBD5E1",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 800,
                color: "var(--navy)",
                outline: "none"
              }}
            />
            <span style={{ fontSize: "11px", color: "#64748B", display: "block", marginTop: "3px" }}>
              Lower numbers appear first (1, 2, 3...)
            </span>
          </div>

          {/* Featured Toggle */}
          <div>
            <span style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}>
              Featured on Homepage
            </span>
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                userSelect: "none"
              }}
            >
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                style={{ width: "18px", height: "18px", accentColor: "var(--orange)" }}
              />
              <span style={{ fontSize: "13px", fontWeight: 700, color: featured ? "var(--orange)" : "#64748B" }}>
                {featured ? "★ Featured" : "Standard"}
              </span>
            </label>
          </div>

          {/* Published Toggle */}
          <div>
            <span style={{ display: "block", fontSize: "12px", fontWeight: 800, color: "var(--navy)", marginBottom: "6px" }}>
              Public Visibility
            </span>
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                userSelect: "none"
              }}
            >
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                style={{ width: "18px", height: "18px", accentColor: "#16A34A" }}
              />
              <span style={{ fontSize: "13px", fontWeight: 700, color: published ? "#16A34A" : "#D97706" }}>
                {published ? "● Published (Live)" : "○ Draft (Hidden)"}
              </span>
            </label>
          </div>
        </div>

        {/* Collapsible Advanced Case Study Section */}
        <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "16px" }}>
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 0",
              color: "var(--navy)",
              fontWeight: 800,
              fontSize: "13px"
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Sparkles size={15} style={{ color: "var(--orange)" }} />
              Detailed Case Study & Analytical Breakdown (Optional)
            </span>
            {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {showAdvanced && (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "4px" }}>
                  Analysis Objective
                </label>
                <input
                  type="text"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  placeholder="e.g. Understand how the partnership progressed across match phases..."
                  style={{
                    width: "100%",
                    height: "40px",
                    padding: "0 12px",
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    borderRadius: "6px",
                    fontSize: "13px"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "4px" }}>
                  Data Used
                </label>
                <input
                  type="text"
                  value={dataUsed}
                  onChange={(e) => setDataUsed(e.target.value)}
                  placeholder="e.g. Ball-by-ball cricket event data (Source: CricRadio Data Portal)"
                  style={{
                    width: "100%",
                    height: "40px",
                    padding: "0 12px",
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    borderRadius: "6px",
                    fontSize: "13px"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "4px" }}>
                  Visualization Method
                </label>
                <input
                  type="text"
                  value={visualizationMethod}
                  onChange={(e) => setVisualizationMethod(e.target.value)}
                  placeholder="e.g. Phase-wise trend + Over-by-Over line progression + Contribution donut"
                  style={{
                    width: "100%",
                    height: "40px",
                    padding: "0 12px",
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    borderRadius: "6px",
                    fontSize: "13px"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "4px" }}>
                  Key Performance Metrics (one per line)
                </label>
                <textarea
                  rows={4}
                  value={keyMetricsInput}
                  onChange={(e) => setKeyMetricsInput(e.target.value)}
                  placeholder={"Total Runs: 255 off 158 Balls\nStrike Rate: 161.4\nDot Ball %: 28.9%"}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    borderRadius: "6px",
                    fontSize: "12px",
                    lineHeight: 1.5,
                    fontFamily: "monospace"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "4px" }}>
                  Key Analytical Insights (one per line)
                </label>
                <textarea
                  rows={4}
                  value={keyInsightsInput}
                  onChange={(e) => setKeyInsightsInput(e.target.value)}
                  placeholder={"The partnership accelerated systematically from 153 SR in the powerplay to 176 SR.\nDot-ball percentage dropped consistently."}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    borderRadius: "6px",
                    fontSize: "12px",
                    lineHeight: 1.5
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: 700, color: "#475569", marginBottom: "4px" }}>
                  Tools & Technologies (comma separated)
                </label>
                <input
                  type="text"
                  value={toolsInput}
                  onChange={(e) => setToolsInput(e.target.value)}
                  placeholder="Python, SQL, Power BI, Delivery Tracking"
                  style={{
                    width: "100%",
                    height: "40px",
                    padding: "0 12px",
                    background: "#F8FAFC",
                    border: "1px solid #CBD5E1",
                    borderRadius: "6px",
                    fontSize: "13px"
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit Actions */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", borderTop: "1px solid #E2E8F0", paddingTop: "20px" }}>
          <Link
            href="/admin/analytics"
            className="button button-outline"
            style={{ minHeight: "44px", padding: "0 22px", fontSize: "13px" }}
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isSaving || isUploading}
            className="button button-primary"
            style={{
              minHeight: "44px",
              padding: "0 32px",
              fontSize: "14px",
              boxShadow: "0 4px 14px rgba(245, 158, 11, 0.3)"
            }}
          >
            {isSaving ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Saving Analytics...
              </>
            ) : isEdit ? (
              <>
                <Check size={16} /> Update Analytics
              </>
            ) : (
              <>
                <Check size={16} /> Save Analytics
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
