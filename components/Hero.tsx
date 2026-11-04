"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  Linkedin,
  Github,
  Mail,
  Phone,
  Activity,
  Award,
  FileText
} from "lucide-react";

const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/krishna-nand-yadav-43493b28a/";
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/thekngroup7622-creator";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "krishnanandcricketanalyst@gmail.com";
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "7607711590";
const resume = process.env.NEXT_PUBLIC_RESUME_URL || "/resume/Krishna_Nand_Yadav_Resume.pdf";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="hero">
      <div className="hero-grid-pattern" />
      <div className="container hero-layout">
        {/* Left Column: Personal Brand & CTAs */}
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            CRICKET & SPORTS DATA ANALYST · SPORTS TECHNOLOGY ENTREPRENEUR
          </div>

          <h1 style={{ fontSize: "clamp(34px, 4.4vw, 58px)", letterSpacing: "-1.5px", lineHeight: 1.08 }}>
            Krishna Nand Yadav<br />
            <span style={{ fontSize: "0.68em", display: "block", color: "#3979BC", fontWeight: 800, letterSpacing: "-0.5px", marginTop: "4px" }}>
              Cricket & Sports Data Analyst
            </span>
          </h1>

          <p className="hero-role" style={{ fontSize: "15px", color: "var(--navy)", fontWeight: 700, margin: "14px 0 6px", letterSpacing: "0.2px" }}>
            Cricket &amp; Sports Data Analyst | Ball-by-Ball Analytics | Performance Intelligence | Sports Data Operations
          </p>

          <p className="hero-tagline" style={{ color: "var(--orange)", fontSize: "17px", fontWeight: 800, margin: "6px 0 10px", lineHeight: 1.4 }}>
            &ldquo;Transforming Cricket Data into Meaningful Performance Insights.&rdquo;
          </p>

          <p className="hero-description" style={{ color: "var(--muted)", fontSize: "13.5px", lineHeight: 1.75, maxWidth: "540px", margin: "0 0 16px" }}>
            Originally from <strong>Ghazipur, Uttar Pradesh</strong> and currently based in <strong>Noida, India</strong>. Principal Cricket Analyst working across ball-by-ball tracking, video tagging, live match operations, and performance intelligence using Python, SQL, Power BI, Tableau, and Streamlit. Associated with <strong>CricNexora</strong> (AI Cricket Analytics) and <strong>NexaPeak Digital Tech Solutions</strong>.
          </p>

          {/* Quick Route Anchors */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "18px", fontSize: "11px", fontWeight: 700 }}>
            <Link href="/cricket-analyst-ghazipur" style={{ background: "rgba(105, 167, 239, 0.14)", color: "var(--navy)", padding: "3px 9px", borderRadius: "4px", border: "1px solid rgba(105, 167, 239, 0.3)" }}>
              📍 Ghazipur Journey
            </Link>
            <Link href="/international-cricket-analysis" style={{ background: "rgba(242, 140, 40, 0.12)", color: "#9A4D00", padding: "3px 9px", borderRadius: "4px", border: "1px solid rgba(242, 140, 40, 0.3)" }}>
              🏏 International Match Analysis
            </Link>
            <Link href="/about-krishna" style={{ background: "#F1F5F9", color: "var(--navy)", padding: "3px 9px", borderRadius: "4px" }}>
              👤 About Krishna
            </Link>
            <Link href="/articles" style={{ background: "#F1F5F9", color: "var(--navy)", padding: "3px 9px", borderRadius: "4px" }}>
              📰 Cricket Insights & Articles
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hero-actions" style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="/analytics" className="button button-primary">
              Cricket Analytics <ArrowRight size={15} />
            </Link>
            <Link href="/projects" className="button button-outline">
              Featured Projects
            </Link>
            <Link href="/experience" className="button button-outline">
              Experience
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              title="View Krishna Nand Yadav's Resume (opens in new tab)"
            >
              <FileText size={15} /> Resume
            </a>
            <Link href="/contact" className="button button-outline">
              Contact <ArrowDownRight size={15} />
            </Link>
          </div>

          {/* Social Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "22px", paddingTop: "16px", borderTop: "1px solid rgba(0, 29, 56, 0.08)", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Connect:
            </span>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="button button-small button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", padding: "0 10px" }}
              title="LinkedIn"
            >
              <Linkedin size={14} style={{ color: "#0A66C2" }} />
              <span>LinkedIn</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="button button-small button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", padding: "0 10px" }}
              title="GitHub"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="button button-small button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", padding: "0 10px" }}
              title="Email"
            >
              <Mail size={14} style={{ color: "#2563EB" }} />
              <span>Email</span>
            </a>
            <a
              href={`tel:${phone}`}
              className="button button-small button-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", padding: "0 10px" }}
              title="Phone"
            >
              <Phone size={14} style={{ color: "var(--orange)" }} />
              <span>{phone}</span>
            </a>
          </div>

          {/* Trust points */}
          <div className="hero-trust" style={{ marginTop: "24px" }}>
            <span className="trust-icon">
              <Activity size={15} />
            </span>
            <span>CRICKET ANALYTICS</span>
            <i />
            <span>BALL-BY-BALL DATA</span>
            <i />
            <span>PERFORMANCE INSIGHTS</span>
            <i />
            <span>SPORTS TECHNOLOGY</span>
          </div>
        </motion.div>

        {/* Right Column: Prominent Actual Profile Photo */}
        <motion.div
          className="hero-art"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
        >
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-accent" />

          {/* Profile Card Container */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              background: "#fff",
              borderRadius: "18px",
              padding: "16px",
              border: "1px solid #DCE6F0",
              boxShadow: "0 20px 50px rgba(0, 29, 56, 0.12)",
              maxWidth: "380px",
              width: "100%"
            }}
          >
            {/* Top Badge Strip */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span className="live-dot" />
                <span style={{ fontSize: "10px", fontWeight: 800, color: "var(--navy)", letterSpacing: "0.5px" }}>
                  CRICKET ANALYST
                </span>
              </div>
              <span style={{ fontSize: "10px", color: "var(--orange)", fontWeight: 700, background: "rgba(242, 140, 40, 0.1)", padding: "2px 8px", borderRadius: "12px" }}>
                3+ Yrs Exp
              </span>
            </div>

            {/* Profile Image with Next.js Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                borderRadius: "14px",
                overflow: "hidden",
                border: "2px solid #EAF3FD"
              }}
            >
              <Image
                src="/profile/krishna-nand-yadav.jpg"
                alt="Krishna Nand Yadav - Cricket & Sports Data Analyst"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 380px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            {/* Caption & Identity */}
            <div style={{ marginTop: "14px", textAlign: "center" }}>
              <strong style={{ fontSize: "17px", color: "var(--navy)", display: "block" }}>
                Krishna Nand Yadav
              </strong>
              <small style={{ color: "var(--navy)", fontSize: "12px", display: "block", marginTop: "2px", fontWeight: 600 }}>
                Principal Cricket Analyst · Lifease Solutions LLP
              </small>
              <span style={{ color: "var(--muted)", fontSize: "11px", display: "block", marginTop: "1px" }}>
                Ghazipur, UP ➔ Noida, India · Sports Tech Entrepreneur
              </span>
            </div>

            {/* Mini Highlights */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "12px" }}>
              <div style={{ background: "var(--pale-blue)", padding: "8px 10px", borderRadius: "8px", textAlign: "center" }}>
                <span style={{ fontSize: "10px", color: "var(--navy)", fontWeight: 800, display: "block" }}>
                  BALL-BY-BALL
                </span>
                <span style={{ fontSize: "10px", color: "var(--muted)" }}>Live Scoring & Coding</span>
              </div>
              <div style={{ background: "rgba(242, 140, 40, 0.08)", padding: "8px 10px", borderRadius: "8px", textAlign: "center" }}>
                <span style={{ fontSize: "10px", color: "var(--orange)", fontWeight: 800, display: "block" }}>
                  VISUAL BI & 3D
                </span>
                <span style={{ fontSize: "10px", color: "var(--muted)" }}>Power BI · Tableau · Tech</span>
              </div>
            </div>
          </div>

          {/* Floating contextual notes */}
          <div className="floating-note note-top" style={{ zIndex: 3 }}>
            <span className="note-icon">
              <Activity size={15} />
            </span>
            <span>
              <strong>Ball-by-Ball Analysis</strong>
              <small>Delivery by delivery context</small>
            </span>
          </div>

          <div className="floating-note note-bottom" style={{ zIndex: 3 }}>
            <span className="note-icon orange">
              <Award size={15} />
            </span>
            <span>
              <strong>Performance Insights</strong>
              <small>Player & Match Analytics</small>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom container">
        <span>01 / CRICKET ANALYTICS & SPORTS DATA</span>
        <span className="hero-bottom-line" />
        <span>TURNING CRICKET DATA INTO ACTIONABLE PERFORMANCE INSIGHTS</span>
      </div>
    </section>
  );
}
