"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => projects.filter(project => (filter === "All" || project.category === filter) && `${project.title} ${project.description} ${project.features.join(" ")}`.toLowerCase().includes(search.toLowerCase())), [filter, search]);
  return <><section className="page-hero compact"><div className="container"><p className="eyebrow">PROJECT PORTFOLIO</p><h1>Ideas built around <span>the game.</span></h1><p className="page-hero-description">Explore cricket intelligence concepts, performance analysis frameworks and data operations workflows.</p></div></section><section className="section"><div className="container"><div className="listing-toolbar"><div className="filter-tabs" role="group" aria-label="Filter projects">{categories.map(category=><button key={category} className={`filter-tab ${filter===category?"selected":""}`} onClick={()=>setFilter(category)} aria-pressed={filter===category}>{category}</button>)}</div><label className="search-box"><Search size={17}/><span className="sr-only">Search projects</span><input value={search} onChange={event=>setSearch(event.target.value)} placeholder="Search projects..." /></label></div>{filtered.length ? <div className="project-grid">{filtered.map((project,index)=><ProjectCard key={project.slug} project={project} index={index}/>)}</div> : <div className="empty-state"><h3>No projects found</h3><p>Try another search or choose a different category.</p><button className="button button-outline" onClick={()=>{setFilter("All");setSearch("");}}>Clear filters</button></div>}</div></section></>;
}
