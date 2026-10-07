import Link from "next/link";
import { ArrowUpRight, Phone, Mail, Linkedin, Github, Sparkles } from "lucide-react";

const linkedin =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  "https://www.linkedin.com/in/krishna-nand-yadav-43493b28a/";
const github =
  process.env.NEXT_PUBLIC_GITHUB_URL ||
  "https://github.com/thekngroup7622-creator";
const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
  "krishnanandcricketanalyst@gmail.com";
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "7607711590";

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      {/* ========================================================
          1. DEDICATED HIGH-VISIBILITY CONTACT SECTION
         ======================================================== */}
      <section className="footer-contact-block" aria-labelledby="footer-contact-title">
        <div className="container">
          <div className="footer-contact-header">
            <span className="footer-contact-eyebrow">
              <Sparkles size={14} className="eyebrow-sparkle" /> DIRECT COMMUNICATION
            </span>
            <h2 id="footer-contact-title" className="footer-contact-heading">
              GET IN TOUCH
            </h2>
            <p className="footer-contact-description">
              Let&apos;s connect about cricket analytics, sports data, and sports technology.
            </p>
          </div>

          {/* 2-Column Responsive Contact Cards Grid */}
          <div className="footer-contact-grid">
            {/* 1. Phone Card */}
            <a
              href={`tel:+91${phone}`}
              className="footer-contact-card"
              title="Call Krishna directly"
              aria-label={`Call Krishna at ${phone}`}
            >
              <div className="footer-card-icon-wrap phone-badge">
                <Phone size={22} className="card-icon" />
              </div>
              <div className="footer-card-content">
                <span className="footer-card-subtitle">Phone</span>
                <strong className="footer-card-main-val">{phone}</strong>
              </div>
              <div className="footer-card-action" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* 2. Email Card */}
            <a
              href={`mailto:${email}`}
              className="footer-contact-card"
              title="Send an email to Krishna"
              aria-label={`Email Krishna at ${email}`}
            >
              <div className="footer-card-icon-wrap email-badge">
                <Mail size={22} className="card-icon" />
              </div>
              <div className="footer-card-content">
                <span className="footer-card-subtitle">Email</span>
                <strong className="footer-card-main-val email-text-val">
                  {email}
                </strong>
              </div>
              <div className="footer-card-action" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* 3. LinkedIn Card */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-card"
              title="View Krishna's LinkedIn profile (opens in new tab)"
              aria-label="View LinkedIn profile"
            >
              <div className="footer-card-icon-wrap linkedin-badge">
                <Linkedin size={22} className="card-icon" />
              </div>
              <div className="footer-card-content">
                <span className="footer-card-subtitle">LinkedIn</span>
                <strong className="footer-card-main-val">LinkedIn</strong>
              </div>
              <div className="footer-card-action" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            </a>

            {/* 4. GitHub Card */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-card"
              title="View Krishna's GitHub repositories (opens in new tab)"
              aria-label="View GitHub repositories"
            >
              <div className="footer-card-icon-wrap github-badge">
                <Github size={22} className="card-icon" />
              </div>
              <div className="footer-card-content">
                <span className="footer-card-subtitle">GitHub</span>
                <strong className="footer-card-main-val">GitHub</strong>
              </div>
              <div className="footer-card-action" aria-hidden="true">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. BRAND INFO & TECHNICAL FOCUS STRIP
         ======================================================== */}
      <div className="container footer-main">
        <Link href="/" className="footer-brand" aria-label="Krishna Nand Yadav home">
          <span className="brand-mark">KN</span>
          <span>
            <strong>KRISHNA NAND YADAV</strong>
            <small>
              Cricket & Sports Data Analyst | Performance Analysis | Sports Technology
            </small>
          </span>
        </Link>
        <p className="footer-tagline">
          Ball-by-Ball Analysis <i aria-hidden="true" /> Live Scoring{" "}
          <i aria-hidden="true" /> Data Quality QA <i aria-hidden="true" /> Power BI & 3D Sports Tech
        </p>
        <Link href="/contact" className="footer-contact-pill">
          <span>Message Inquiry</span> <ArrowUpRight size={14} />
        </Link>
      </div>

      {/* ========================================================
          3. FOOTER BOTTOM METADATA
         ======================================================== */}
      <div className="container footer-bottom">
        <span>© 2026 Krishna Nand Yadav · All Rights Reserved</span>
        <span>Built around the game. Driven by data.</span>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Link
            href="/resume"
            style={{ color: "inherit", textDecoration: "none", fontSize: "12px", fontWeight: 700 }}
            title="Official Resume"
          >
            Resume
          </Link>
          <Link
            href="/admin/analytics"
            style={{ color: "inherit", textDecoration: "none", fontSize: "11px", opacity: 0.6 }}
            title="Analytics Management Admin"
          >
            Admin
          </Link>
          <Link href="#top" title="Scroll to top of page">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
