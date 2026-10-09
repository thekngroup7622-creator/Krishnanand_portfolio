import type { Metadata } from "next";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Phone, Clock, FileText } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Krishna Nand Yadav — Cricket & Sports Data Analyst",
  description: "Connect with Krishna Nand Yadav about cricket analytics, ball-by-ball analysis, live scoring operations, and sports technology."
};

const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/krishna-nand-yadav-43493b28a/";
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/thekngroup7622-creator";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "krishnanandcricketanalyst@gmail.com";
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "7607711590";
const resume = process.env.NEXT_PUBLIC_RESUME_URL || "/resume/Krishna_Nand_Yadav_Resume.pdf";

export default function ContactPage() {
  return (
    <>
      <section className="page-hero contact-page-hero">
        <div className="container">
          <p className="eyebrow">DIRECT CONTACT & COLLABORATION</p>
          <h1>
            Let’s build something<br />
            <span>with cricket data.</span>
          </h1>
          <p className="page-hero-description">
            Looking for a Cricket Analytics Specialist, Live Match Scoring Leader, or Sports Tech Consultant? Get in touch directly via phone, email, or send an inquiry below.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
            <a href={`tel:${phone}`} className="button button-primary">
              <Phone size={16} /> Call +91 {phone}
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              title="View Resume in new tab"
            >
              <FileText size={16} /> View Resume
            </a>
            <a
              href={resume}
              download="Krishna_Nand_Yadav_Resume.pdf"
              className="button button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              title="Download Resume PDF"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "40px", alignItems: "start" }}>
          {/* Left Column: Contact Channels */}
          <div>
            <p className="eyebrow">CHANNELS & AVAILABILITY</p>
            <h2 style={{ fontSize: "28px", color: "var(--navy)", marginBottom: "14px" }}>Start a Conversation</h2>
            <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px" }}>
              Reach out for match analysis contracts, full-time analyst roles, squad leadership, or sports software consulting.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Phone */}
              <a
                href={`tel:${phone}`}
                className="contact-option"
                style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", transition: "all 0.2s" }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: "rgba(242, 140, 40, 0.12)", color: "var(--orange)", display: "grid", placeItems: "center" }}>
                  <Phone size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 2px", fontSize: "15px", color: "var(--navy)" }}>Phone & WhatsApp</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)" }}>+91 {phone}</p>
                </div>
                <ArrowUpRight size={17} style={{ color: "var(--muted)" }} />
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="contact-option"
                style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", transition: "all 0.2s" }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: "var(--pale-blue)", color: "#2563EB", display: "grid", placeItems: "center" }}>
                  <Mail size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 2px", fontSize: "15px", color: "var(--navy)" }}>Direct Email</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)", wordBreak: "break-all" }}>{email}</p>
                </div>
                <ArrowUpRight size={17} style={{ color: "var(--muted)" }} />
              </a>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-option"
                style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", transition: "all 0.2s" }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: "#EEF4FF", color: "#0A66C2", display: "grid", placeItems: "center" }}>
                  <Linkedin size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 2px", fontSize: "15px", color: "var(--navy)" }}>LinkedIn Profile</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)" }}>krishna-nand-yadav-43493b28a</p>
                </div>
                <ArrowUpRight size={17} style={{ color: "var(--muted)" }} />
              </a>

              {/* GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="contact-option"
                style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px", background: "#fff", border: "1px solid #E2E8F0", borderRadius: "10px", transition: "all 0.2s" }}
              >
                <div style={{ width: "42px", height: "42px", borderRadius: "8px", background: "#F1F5F9", color: "var(--navy)", display: "grid", placeItems: "center" }}>
                  <Github size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: "0 0 2px", fontSize: "15px", color: "var(--navy)" }}>GitHub Profile</h3>
                  <p style={{ margin: 0, fontSize: "13px", color: "var(--muted)" }}>thekngroup7622-creator</p>
                </div>
                <ArrowUpRight size={17} style={{ color: "var(--muted)" }} />
              </a>
            </div>

            {/* Quick Operational Info */}
            <div style={{ marginTop: "24px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Clock size={16} style={{ color: "var(--navy)" }} />
                <strong style={{ fontSize: "13px", color: "var(--navy)" }}>Availability & Operational Hours</strong>
              </div>
              <p style={{ margin: 0, fontSize: "12px", color: "var(--muted)", lineHeight: 1.5 }}>
                Available for live tournament match shifts, ball-by-ball scoring operations, weekend match series, and sports-technology sprint deadlines.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
