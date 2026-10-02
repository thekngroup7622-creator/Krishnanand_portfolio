"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Download,
  Menu,
  X,
  Phone,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Skills", "/skills"],
  ["Analytics", "/analytics"],
  ["Projects", "/projects"],
  ["Contact", "/contact"]
];

const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "7607711590";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "krishnanandcricketanalyst@gmail.com";
const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/krishna-nand-yadav-43493b28a/";
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/thekngroup7622-creator";
const resume = process.env.NEXT_PUBLIC_RESUME_URL || "/resume.pdf";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <header className="site-header">
      {/* 1. TOP CONTACT SHORTCUTS BAR (DARK NAVY THEME, HIGH VISIBILITY) */}
      <div className="header-top-bar" aria-label="Quick contact information">
        <div className="container header-top-inner">
          {/* Left: Phone & Email */}
          <div className="header-top-left">
            <a
              href={`tel:+91${phone}`}
              className="header-contact-link header-phone-link"
              title="Call Krishna directly"
            >
              <Phone size={13} className="header-icon-phone" />
              <span className="header-link-label">Phone:</span>
              <strong className="header-link-val">{phone}</strong>
            </a>

            <span className="header-top-sep" aria-hidden="true" />

            <a
              href={`mailto:${email}`}
              className="header-contact-link header-email-link"
              title="Email Krishna"
            >
              <Mail size={13} className="header-icon-email" />
              <span className="header-link-label">Email:</span>
              <strong className="header-link-val">{email}</strong>
            </a>
          </div>

          {/* Right: LinkedIn, GitHub, Get in Touch */}
          <div className="header-top-right">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="header-contact-link header-social-link"
              title="Krishna's LinkedIn Profile"
            >
              <Linkedin size={13} className="header-icon-linkedin" />
              <span>LinkedIn</span>
            </a>

            <span className="header-top-sep" aria-hidden="true" />

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="header-contact-link header-social-link"
              title="Krishna's GitHub Profile"
            >
              <Github size={13} className="header-icon-github" />
              <span>GitHub</span>
            </a>

            <span className="header-top-sep" aria-hidden="true" />

            <Link
              href="/contact"
              className="header-contact-cta"
              title="Open Contact page"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className="navbar container" aria-label="Main navigation">
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="Krishna Nand Yadav home"
        >
          <span className="brand-mark">KN</span>
          <span className="brand-copy">
            <strong>Krishna Nand Yadav</strong>
            <small>Cricket & Sports Data Analyst</small>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${
                pathname === href || (href !== "/" && pathname.startsWith(href))
                  ? "active"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href={`tel:+91${phone}`}
            className="button button-small button-outline desktop-call-btn"
            style={{
              padding: "0 12px",
              fontSize: "12px",
              fontWeight: 800,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px"
            }}
            title="Call Krishna directly"
          >
            <Phone size={13} style={{ color: "var(--orange)" }} />
            <span>{phone}</span>
          </a>

          <a
            className="button button-small button-outline resume-nav"
            href={resume}
            download
            style={{ fontWeight: 800 }}
          >
            <Download size={14} /> Resume
          </a>

          <button
            className="mobile-menu-button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU DROPDOWN */}
      {open && (
        <motion.div
          className="mobile-nav container"
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Main page links */}
          <div className="mobile-nav-links">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={pathname === href ? "active" : ""}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Dedicated Mobile Contact Shortcuts */}
          <div className="mobile-contact-panel">
            <span className="mobile-contact-heading">DIRECT CONTACT</span>

            <div className="mobile-contact-grid">
              <a
                href={`tel:+91${phone}`}
                className="mobile-contact-item"
                onClick={() => setOpen(false)}
              >
                <div className="mobile-contact-icon phone">
                  <Phone size={16} />
                </div>
                <div className="mobile-contact-meta">
                  <small>Phone</small>
                  <strong>{phone}</strong>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="mobile-contact-item"
                onClick={() => setOpen(false)}
              >
                <div className="mobile-contact-icon email">
                  <Mail size={16} />
                </div>
                <div className="mobile-contact-meta">
                  <small>Email</small>
                  <strong style={{ fontSize: "12px", wordBreak: "break-all" }}>
                    {email}
                  </strong>
                </div>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-contact-item"
                onClick={() => setOpen(false)}
              >
                <div className="mobile-contact-icon linkedin">
                  <Linkedin size={16} />
                </div>
                <div className="mobile-contact-meta">
                  <small>Professional Profile</small>
                  <strong>LinkedIn</strong>
                </div>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-contact-item"
                onClick={() => setOpen(false)}
              >
                <div className="mobile-contact-icon github">
                  <Github size={16} />
                </div>
                <div className="mobile-contact-meta">
                  <small>Data Repositories</small>
                  <strong>GitHub</strong>
                </div>
              </a>
            </div>

            <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
              <Link
                href="/contact"
                className="button button-primary"
                onClick={() => setOpen(false)}
                style={{ flex: 1, display: "flex", justifyContent: "center", gap: "6px" }}
              >
                Get in Touch <ArrowUpRight size={14} />
              </Link>
              <a
                className="button button-outline"
                href={resume}
                download
                style={{ flex: 1, display: "flex", justifyContent: "center", gap: "6px" }}
              >
                <Download size={14} /> Resume
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
