"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Cricket Analytics Consultation",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "12px", padding: "28px", textAlign: "center" }}>
        <CheckCircle2 size={42} style={{ color: "#16A34A", margin: "0 auto 12px" }} />
        <h3 style={{ color: "#166534", margin: "0 0 8px", fontSize: "20px" }}>Message Received</h3>
        <p style={{ color: "#15803D", fontSize: "14px", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto 16px" }}>
          Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.subject}</em> has been logged. Krishna will respond to <strong>{formData.email}</strong> shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", subject: "Cricket Analytics Consultation", message: "" });
          }}
          className="button button-outline"
          style={{ fontSize: "12px", padding: "6px 14px", minHeight: "36px" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "14px", padding: "28px", boxShadow: "0 4px 20px rgba(0,29,56,0.04)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <MessageSquare size={18} style={{ color: "var(--navy)" }} />
        <h3 style={{ margin: 0, fontSize: "18px", color: "var(--navy)" }}>Send a Direct Message</h3>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", marginBottom: "6px" }}>
            Your Name *
          </label>
          <input
            required
            type="text"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
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
            placeholder="e.g. rahul@cricketteam.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13px" }}
          />
        </div>
      </div>

      <div style={{ marginBottom: "14px" }}>
        <label style={{ display: "block", fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", marginBottom: "6px" }}>
          Inquiry Type / Scope
        </label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13px", background: "#fff" }}
        >
          <option value="Cricket Analytics Consultation">Cricket Analytics Consultation</option>
          <option value="Live Match Scoring & Operations">Live Match Scoring & Operations</option>
          <option value="Player & Team Performance Analysis">Player & Team Performance Analysis</option>
          <option value="Sports Tech & BI Dashboard Development">Sports Tech & BI Dashboard Development</option>
          <option value="Recruitment / Full-Time Role">Recruitment / Full-Time Role</option>
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
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ width: "100%", padding: "10px 14px", borderRadius: "8px", border: "1px solid #CBD5E1", fontSize: "13px", fontFamily: "inherit" }}
        />
      </div>

      <button type="submit" className="button button-primary" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Send size={15} /> Send Message to Krishna
      </button>
    </form>
  );
}
