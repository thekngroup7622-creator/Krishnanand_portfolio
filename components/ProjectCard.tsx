import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { PortfolioProject } from "@/data/projects";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export default function ProjectCard({ project, index = 0 }: { project: PortfolioProject; index?: number }) {
  return (
    <article className="project-card">
      <Link href={`/projects/${project.slug}`} className="project-image-wrap" aria-label={`View ${project.title} project`}>
        <ImagePlaceholder src={project.image} alt={`${project.title} visual preview`} />
        <span className="project-image-index">0{index + 1}</span>
        <span className="project-image-arrow">
          <ArrowUpRight size={20} />
        </span>
      </Link>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.eyebrow}</span>
          <span className="project-status">
            <i /> {project.status}
          </span>
        </div>

        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p>{project.description}</p>

        {/* Technology Pills */}
        {project.technology && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", margin: "10px 0 14px" }}>
            {project.technology.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  background: "#F1F5F9",
                  color: "var(--navy)",
                  padding: "2px 7px",
                  borderRadius: "4px",
                  border: "1px solid #E2E8F0"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-tags">
          {project.features.slice(0, 3).map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} className="project-open">
          <Layers3 size={15} /> Explore project <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
