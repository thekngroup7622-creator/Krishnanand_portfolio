import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Platforms | Krishna Nand Yadav — Cricket & Sports Data Analyst",
  description:
    "Explore cricket analytics platforms including CricNexora, CRICINTEL 3D Vision, broadcast performance visualization suites, and data operations workflows by Krishna Nand Yadav.",
  alternates: {
    canonical: "/projects"
  }
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

