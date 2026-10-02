import type { Metadata } from "next";
import Skills from "@/components/Skills";
import SignatureMetrics from "@/components/SignatureMetrics";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Skills | Krishna Nand Yadav", description: "Cricket analytics, data analytics, sports technology and data operations skills." };

export default function SkillsPage() {
  return <><section className="page-hero compact"><div className="container"><p className="eyebrow">SKILLS & TOOLKIT</p><h1>Tools for better <span>cricket questions.</span></h1><p className="page-hero-description">A cross-disciplinary toolkit for data preparation, cricket performance analysis, visualization and dependable operations.</p></div></section><Skills/><SignatureMetrics/><section className="section"><div className="container"><Reveal><SectionHeading eyebrow="HOW THE PIECES CONNECT" title="From source data to a clear answer" description="The tools matter most when they support a consistent method: define the question, validate the data, calculate metrics carefully and communicate the context." /></Reveal><div className="skills-bottom-note"><span className="brand-mark">KN</span><p>Tools and methods are selected for the problem at hand — with transparent definitions and cricket context kept in view.</p></div></div></section></>;
}
