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
          2. BRAND INFO & SITEMAP DIRECTORY STRIP
         ======================================================== */}
      <div className="container footer-main" style={{ flexDirection: "column", alignItems: "stretch", gap: "24px", padding: "32px 0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <Link href="/" className="footer-brand" aria-label="Krishna Nand Yadav home">
            <span className="brand-mark">KN</span>
            <span>
              <strong>KRISHNA NAND YADAV</strong>
              <small>
                Cricket &amp; Sports Data Analyst | Sports Technology Entrepreneur
              </small>
            </span>
          </Link>
          <div style={{ fontSize: "12px", color: "var(--muted)" }}>
            📍 Origin: <strong>Ghazipur, Uttar Pradesh</strong> · Base: <strong>Noida, India</strong>
          </div>
          <Link href="/contact" className="footer-contact-pill">
            <span>Message Inquiry</span> <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* 4-Column Internal Links & Entity Graph */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "12px" }}>
          <div>
            <span style={{ display: "block", color: "var(--orange)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px", fontSize: "11px" }}>
              Identity &amp; Profile
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><Link href="/about-krishna" style={{ opacity: 0.85 }}>About Krishna Nand Yadav</Link></li>
              <li><Link href="/cricket-analyst-ghazipur" style={{ opacity: 0.85 }}>Cricket Analyst from Ghazipur</Link></li>
              <li><Link href="/experience" style={{ opacity: 0.85 }}>Experience (Lifease Solutions)</Link></li>
              <li><Link href="/resume" style={{ opacity: 0.85 }}>Professional Resume</Link></li>
              <li><Link href="/contact" style={{ opacity: 0.85 }}>Get in Touch / Collaborations</Link></li>
            </ul>
          </div>

          <div>
            <span style={{ display: "block", color: "var(--orange)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px", fontSize: "11px" }}>
              Cricket Analytics
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><Link href="/international-cricket-analysis" style={{ opacity: 0.85 }}>International Match Analysis</Link></li>
              <li><Link href="/analytics" style={{ opacity: 0.85 }}>Match Analytics Case Studies</Link></li>
              <li><Link href="/analytics/sree-charani-13-metric-bowling-performance" style={{ opacity: 0.85 }}>13-Metric Bowling Radar</Link></li>
              <li><Link href="/analytics/shafali-verma-scoring-impact-by-length" style={{ opacity: 0.85 }}>Pitch Length Impact Analysis</Link></li>
              <li><Link href="/visualizations" style={{ opacity: 0.85 }}>Broadcast Visualizations</Link></li>
            </ul>
          </div>

          <div>
            <span style={{ display: "block", color: "var(--orange)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px", fontSize: "11px" }}>
              Ventures &amp; Products
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              <li>
                <a href="https://cricnexora.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", opacity: 0.85 }}>
                  CricNexora (AI Platform) <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="https://nexapeakdigitaltechsolutions.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "4px", opacity: 0.85 }}>
                  NexaPeak Digital Tech Solutions <ArrowUpRight size={12} />
                </a>
              </li>
              <li><Link href="/projects/cricintel-3d-vision" style={{ opacity: 0.85 }}>CRICINTEL 3D Vision</Link></li>
              <li><Link href="/projects/cricket-data-visualization" style={{ opacity: 0.85 }}>Broadcast Graphics Suite</Link></li>
              <li><Link href="/projects" style={{ opacity: 0.85 }}>All Portfolio Projects</Link></li>
            </ul>
          </div>

          <div>
            <span style={{ display: "block", color: "var(--orange)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px", fontSize: "11px" }}>
              Articles &amp; Insights
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
              <li><Link href="/articles" style={{ opacity: 0.85 }}>All Cricket Analytics Articles</Link></li>
              <li><Link href="/articles/from-ghazipur-to-the-world-of-cricket-analytics" style={{ opacity: 0.85 }}>Ghazipur to Cricket Analytics</Link></li>
              <li><Link href="/articles/the-role-of-ai-in-modern-cricket-analytics" style={{ opacity: 0.85 }}>AI in Modern Cricket Analytics</Link></li>
              <li><Link href="/articles/how-ball-by-ball-data-improves-cricket-performance-analysis" style={{ opacity: 0.85 }}>Ball-by-Ball Performance</Link></li>
              <li><Link href="/articles/building-cricnexora-a-cricket-analytics-technology-journey" style={{ opacity: 0.85 }}>Building CricNexora</Link></li>
            </ul>
          </div>
        </div>
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
          <a
            href="/resume/Krishna_Nand_Yadav_Resume.pdf"
            download="Krishna_Nand_Yadav_Resume.pdf"
            style={{ color: "inherit", textDecoration: "none", fontSize: "12px", fontWeight: 600, opacity: 0.8 }}
            title="Download Official Resume PDF"
          >
            Download PDF
          </a>
          <Link href="#top" title="Scroll to top of page">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
