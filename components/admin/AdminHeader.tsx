import Link from "next/link";
import { logoutAdminAction } from "@/app/admin/actions";
import { ExternalLink, LogOut, Plus, BarChart2, Shield } from "lucide-react";

export default function AdminHeader({
  activeTab = "analytics"
}: {
  activeTab?: "analytics" | "new";
}) {
  return (
    <header
      style={{
        background: "var(--navy)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 50
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "14px",
          paddingBottom: "14px",
          flexWrap: "wrap",
          gap: "14px"
        }}
      >
        {/* Brand / Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "var(--orange)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: "14px"
            }}
          >
            KN
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "15px", fontWeight: 800, color: "#fff" }}>
                Analytics Management
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  background: "rgba(245, 158, 11, 0.2)",
                  color: "var(--orange)",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "3px"
                }}
              >
                <Shield size={10} /> Admin
              </span>
            </div>
            <p style={{ margin: 0, fontSize: "11px", color: "#94A3B8" }}>
              Manage Cricket Analytics Visualizations
            </p>
          </div>
        </div>

        {/* Navigation / Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <Link
            href="/admin/analytics"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              fontWeight: 700,
              color: activeTab === "analytics" ? "#fff" : "#94A3B8",
              background: activeTab === "analytics" ? "rgba(255, 255, 255, 0.1)" : "transparent",
              padding: "6px 12px",
              borderRadius: "6px",
              textDecoration: "none",
              transition: "all 0.2s"
            }}
          >
            <BarChart2 size={14} /> Analytics Table
          </Link>

          <Link
            href="/admin/analytics/new"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "12px",
              fontWeight: 700,
              color: "#fff",
              background: "var(--orange)",
              padding: "6px 14px",
              borderRadius: "6px",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(245, 158, 11, 0.3)"
            }}
          >
            <Plus size={14} /> Add New Analytics
          </Link>

          <div style={{ width: "1px", height: "24px", background: "rgba(255, 255, 255, 0.15)", margin: "0 4px" }} />

          <Link
            href="/analytics"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "12px",
              color: "#94A3B8",
              textDecoration: "none"
            }}
            title="Open public analytics page in new tab"
          >
            Public View <ExternalLink size={13} />
          </Link>

          <form action={logoutAdminAction}>
            <button
              type="submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "12px",
                color: "#F87171",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "6px 8px",
                borderRadius: "6px"
              }}
              title="Log out of admin"
            >
              <LogOut size={13} /> Logout
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
