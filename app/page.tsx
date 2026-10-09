import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedAnalytics from "@/components/FeaturedAnalytics";
import Skills from "@/components/Skills";
import ProjectGrid from "@/components/ProjectGrid";
import Methodology from "@/components/Methodology";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";


export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Professional Introduction */}
      <About />

      {/* 3. Featured Analytics (4 Sample Analytics Cards) */}
      <FeaturedAnalytics />

      {/* 4. Core Expertise (Skills) */}
      <Skills />

      {/* 5. Selected Projects */}
      <section className="section section-tinted" id="projects">
        <div className="container">
          <div className="section-heading-row">
            <Reveal>
              <SectionHeading
                eyebrow="SELECTED WORK"
                title="Projects with cricket at the core"
                description="Portfolio concepts and analytical workflows connecting ball-by-ball detail with practical visual experiences."
              />
            </Reveal>
            <Link href="/projects" className="button button-outline desktop-section-action">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <ProjectGrid limit={3} />
          <div className="mobile-section-action">
            <Link href="/projects" className="button button-outline">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Analytics Methodology (6-Step Visual Workflow) */}
      <Methodology />

      {/* 7. Experience */}
      <Experience />

      {/* 8. Contact */}
      <Contact />
    </>
  );
}
