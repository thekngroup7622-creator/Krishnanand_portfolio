import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Download, ArrowRight, Phone, FileText } from "lucide-react";

const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/krishna-nand-yadav-43493b28a/";
const github = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/thekngroup7622-creator";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "krishnanandcricketanalyst@gmail.com";
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "7607711590";
const resume = process.env.NEXT_PUBLIC_RESUME_URL || "/resume/Krishna_Nand_Yadav_Resume.pdf";

function ContactLink({
  href,
  label,
  value,
  icon: Icon,
  external = false
}: {
  href?: string;
  label: string;
  value?: string;
  icon: typeof Linkedin;
  external?: boolean;
}) {
  if (!href) {
    return (
      <div className="contact-link disabled" aria-label={`${label} link not configured`}>
        <Icon size={19} />
        <span>
          {label}
          <small>Not configured</small>
        </span>
        <ArrowUpRight size={16} />
      </div>
    );
  }
  return (
    <a className="contact-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <Icon size={19} />
      <span>
        {label}
        <small>{value || href.replace(/^mailto:/, "").replace(/^tel:/, "")}</small>
      </span>
      <ArrowUpRight size={16} />
    </a>
  );
}

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> OPEN TO OPPORTUNITIES & COLLABORATIONS
          </p>
          <h2>
            Let’s build something<br />
            <span>with cricket data.</span>
          </h2>
          <p>
            Interested in ball-by-ball analysis, live match scoring operations, player performance modeling, or sports technology platforms? I am open to full-time roles, consulting, and sports-tech projects.
          </p>
          <div className="contact-cta">
            <Link href="/contact" className="button button-white">
              Start a conversation <ArrowRight size={17} />
            </Link>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-ghost"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              title="View Resume in new tab"
            >
              <FileText size={16} /> View Resume
            </a>
            <a
              href={resume}
              download="Krishna_Nand_Yadav_Resume.pdf"
              className="button button-ghost"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              title="Download Resume PDF"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        <div className="contact-links">
          <ContactLink href={`tel:${phone}`} label="Phone & WhatsApp" value={`+91 ${phone}`} icon={Phone} />
          <ContactLink href={`mailto:${email}`} label="Direct Email" value={email} icon={Mail} />
          <ContactLink href={linkedin} label="LinkedIn" value="krishna-nand-yadav" icon={Linkedin} external />
          <ContactLink href={github} label="GitHub" value="thekngroup7622-creator" icon={Github} external />
        </div>

        <div className="contact-orbit" />
      </div>
    </section>
  );
}
