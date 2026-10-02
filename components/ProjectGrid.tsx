import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./ui/Reveal";

export default function ProjectGrid({ limit }: { limit?: number }) {
  const visible = typeof limit === "number" ? projects.slice(0, limit) : projects;
  return <div className="project-grid">{visible.map((project, index) => <Reveal key={project.slug} delay={(index % 3) * 0.07}><ProjectCard project={project} index={index} /></Reveal>)}</div>;
}
