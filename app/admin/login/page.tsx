import { isAdminAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminLoginForm from "./LoginForm";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default async function AdminLoginPage({
  searchParams
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const isAuth = await isAdminAuthenticated();
  const { from } = await searchParams;

  if (isAuth) {
    redirect(from || "/admin/analytics");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at top, #0A2540 0%, #001D38 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: "#fff"
      }}
    >
      <div style={{ maxWidth: "420px", width: "100%" }}>
        <div style={{ marginBottom: "24px" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "rgba(255,255,255,0.7)",
              fontSize: "13px",
              textDecoration: "none",
              fontWeight: 600
            }}
          >
            <ArrowLeft size={16} /> Return to Portfolio
          </Link>
        </div>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "16px",
            padding: "36px 32px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "var(--orange)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                boxShadow: "0 8px 16px rgba(245, 158, 11, 0.3)"
              }}
            >
              <ShieldCheck size={24} />
            </div>
            <h1 style={{ fontSize: "22px", fontWeight: 800, margin: "0 0 6px", color: "#fff" }}>
              Analytics Management
            </h1>
            <p style={{ margin: 0, fontSize: "13px", color: "#94A3B8" }}>
              Krishna Nand Yadav — Admin Portal
            </p>
          </div>

          <AdminLoginForm targetUrl={from || "/admin/analytics"} />
        </div>

        <div style={{ textAlign: "center", marginTop: "24px", color: "#64748B", fontSize: "12px" }}>
          Protected System · Cricket Analytics Administration
        </div>
      </div>
    </div>
  );
}
