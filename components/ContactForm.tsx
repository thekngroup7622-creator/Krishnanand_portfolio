"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "International Cricket Analytics Opportunities",
    message: ""
  });
  const [honeypot, setHoneypot] = useState(""); // Anti-spam honeypot field

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "loading") return; // Prevent duplicate submissions

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          honeypot
        })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          data?.error ||
          "Your message could not be sent. Please try again or contact me directly by email."
        );
      }
    } catch (err) {
      console.error("[ContactForm] Network or dispatch error:", err);
      setStatus("error");
      setErrorMessage("Your message could not be sent. Please try again or contact me directly by email.");
    }
  };

  if (status === "success") {
    return (
      <div
        className="contact-form-card"
        style={{
          background: "#F0FDF4",
          border: "1px solid #BBF7D0",
          borderRadius: "14px",
          padding: "32px 24px",
          textAlign: "center"
        }}
        role="alert"
        aria-live="polite"
      >
        <CheckCircle2 size={44} style={{ color: "#16A34A", margin: "0 auto 14px" }} />
        <h3 style={{ color: "#166534", margin: "0 0 10px", fontSize: "20px", fontWeight: 800 }}>
          Your message has been sent successfully. Thank you for contacting me.
        </h3>
        <p style={{ color: "#15803D", fontSize: "14px", lineHeight: 1.6, maxWidth: "440px", margin: "0 auto 20px" }}>
          Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <em>{formData.subject}</em> has been safely dispatched to Krishna. A confirmation has been routed to <strong>{formData.email}</strong>.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", subject: "International Cricket Analytics Opportunities", message: "" });
            setErrorMessage("");
          }}
          className="button button-outline"
          style={{ fontSize: "13px", padding: "8px 18px", minHeight: "38px" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form-card"
      style={{
        background: "#fff",
        border: "1px solid #E2E8F0",
        borderRadius: "14px",
        padding: "28px",
        boxShadow: "0 4px 20px rgba(0,29,56,0.04)"
      }}
      noValidate={false}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <MessageSquare size={18} style={{ color: "var(--navy)" }} />
        <h3 style={{ margin: 0, fontSize: "18px", color: "var(--navy)" }}>Send a Direct Message</h3>
      </div>

      {/* Error Banner displayed ONLY on submission failure */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            background: "#FEF2F2",
            border: "1px solid #FCA5A5",
            borderRadius: "10px",
            padding: "14px 16px",
            marginBottom: "18px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px"
          }}
        >
          <AlertCircle size={20} style={{ color: "#DC2626", flexShrink: 0, marginTop: "2px" }} />
          <div style={{ flex: 1, fontSize: "13px", color: "#991B1B", lineHeight: 1.5 }}>
            <strong style={{ display: "block", color: "#7F1D1D", marginBottom: "3px" }}>
              Message Delivery Issue
            </strong>
            {errorMessage}
            <div style={{ marginTop: "8px" }}>
              <a
                href="mailto:krishnanandcricketanalyst@gmail.com"
                style={{
                  color: "#B91C1C",
                  fontWeight: 700,
                  textDecoration: "underline",
                  fontSize: "12px"
                }}
              >
                Send email directly to krishnanandcricketanalyst@gmail.com →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hidden honeypot field for anti-spam bots */}
      <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
        <label htmlFor="contact_website_hp">Leave this field blank</label>
        <input
          id="contact_website_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="contact-form-row">
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", marginBottom: "6px" }}>
            Your Name *
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            disabled={status === "loading"}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13px" }}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", marginBottom: "6px" }}>
            Your Email *
          </label>
          <input
            required
            type="email"
            placeholder="e.g. recruiter@cricketteam.com"
            value={formData.email}
            disabled={status === "loading"}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13px" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "14px" }}>
        <label style={{ display: "block", fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", marginBottom: "6px" }}>
          Inquiry Type / Engagement Area
        </label>
        <select
          value={formData.subject}
          disabled={status === "loading"}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13px", background: "#fff" }}
        >
          <option value="International Cricket Analytics Opportunities">International Cricket Analytics Opportunities</option>
          <option value="Remote Data Analyst Position">Remote Data Analyst Position</option>
          <option value="Contract-based Cricket Analytics Work">Contract-based Cricket Analytics Work</option>
          <option value="Sports Technology Collaborations">Sports Technology Collaborations</option>
          <option value="Cricket Data Projects & Dashboards">Cricket Data Projects & Dashboards</option>
          <option value="Live Match Scoring & Operations">Live Match Scoring & Operations</option>
        </select>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <label style={{ display: "block", fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", marginBottom: "6px" }}>
          Message / Match Context *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Briefly describe the match, dataset, or analytical requirement..."
          value={formData.message}
          disabled={status === "loading"}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13px", fontFamily: "inherit" }}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="button button-primary"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          opacity: status === "loading" ? 0.75 : 1,
          cursor: status === "loading" ? "not-allowed" : "pointer"
        }}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send size={15} />
            <span>Send Message to Krishna</span>
          </>
        )}
      </button>
    </form>
  );
}
