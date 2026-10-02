"use client";

import { useState } from "react";
import { loginAdminAction } from "@/app/admin/actions";
import { KeyRound, Lock, Loader2 } from "lucide-react";

export default function AdminLoginForm({ targetUrl }: { targetUrl: string }) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await loginAdminAction(null, formData);
      if (res?.error) {
        setError(res.error);
        setLoading(false);
      }
    } catch (err: unknown) {
      const errMessage = err instanceof Error ? err.message : "";
      if (errMessage.includes("NEXT_REDIRECT")) {
        throw err;
      }
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      <input type="hidden" name="from" value={targetUrl} />

      {error && (
        <div
          style={{
            background: "rgba(239, 68, 68, 0.15)",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            borderRadius: "8px",
            padding: "10px 14px",
            fontSize: "12px",
            color: "#FCA5A5",
            lineHeight: 1.4
          }}
        >
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="admin-password"
          style={{
            display: "block",
            fontSize: "12px",
            fontWeight: 700,
            color: "#CBD5E1",
            marginBottom: "8px",
            textTransform: "uppercase",
            letterSpacing: "0.5px"
          }}
        >
          Admin Password
        </label>
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#94A3B8"
            }}
          >
            <Lock size={16} />
          </span>
          <input
            id="admin-password"
            name="password"
            type="password"
            required
            autoFocus
            placeholder="Enter admin password..."
            style={{
              width: "100%",
              height: "44px",
              paddingLeft: "38px",
              paddingRight: "14px",
              background: "rgba(0, 0, 0, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
              transition: "border-color 0.2s"
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="button"
        style={{
          width: "100%",
          height: "44px",
          background: "var(--orange)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: 700,
          fontSize: "13px",
          cursor: loading ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          marginTop: "6px"
        }}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Verifying...
          </>
        ) : (
          <>
            <KeyRound size={16} /> Enter Analytics Admin
          </>
        )}
      </button>

      <div style={{ textAlign: "center", fontSize: "11px", color: "#64748B", marginTop: "4px" }}>
        Default access configured in <code>.env.local</code>
      </div>
    </form>
  );
}
