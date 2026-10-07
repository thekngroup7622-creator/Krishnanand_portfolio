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
            CRICKET & SPORTS DATA ANALYST
          </div>

          <h1>
            Krishna Nand<br />
            <span>Yadav</span>
          </h1>

          <p className="hero-role">
            Cricket & Sports Data Analyst
          </p>

          <p className="hero-tagline" style={{ color: "var(--navy)", fontSize: "19px", fontWeight: 700, margin: "14px 0 10px", lineHeight: 1.4 }}>
            &ldquo;Turning cricket data into actionable performance insights.&rdquo;
          </p>

          <p className="hero-description" style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.7, maxWidth: "520px", margin: "0 0 20px" }}>
            Working across ball-by-ball data, player and match performance analysis, data visualization, dashboards, and sports technology.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions" style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <Link href="#featured-analytics" className="button button-primary">
              View My Work <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="button button-outline">
              Contact Me <ArrowDownRight size={16} />
            </Link>
            <Link href="/resume" className="button button-outline" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <FileText size={16} /> Resume
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
                2.5+ Yrs Exp
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
              <small style={{ color: "var(--muted)", fontSize: "12px", display: "block", marginTop: "2px" }}>
                Cricket & Sports Data Analyst · Lifease Solutions LLP
              </small>
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
