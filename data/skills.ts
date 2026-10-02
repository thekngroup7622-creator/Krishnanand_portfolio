export interface SkillCategory {
  title: string;
  badge: string;
  intro: string;
  skills: string[];
}

export const coreSkills: string[] = [
  "Cricket Analytics",
  "Player Performance Analysis",
  "Match Analysis",
  "Ball-by-Ball Analysis",
  "Partnership Analysis",
  "Bowling Analysis",
  "Batting Analysis",
  "Data Quality / QA"
];

export const skillGroups: SkillCategory[] = [
  {
    title: "CRICKET & SPORTS ANALYTICS",
    badge: "Domain Expertise",
    intro: "In-depth cricket match review, delivery-level coding, and player/team performance analysis.",
    skills: [
      "Cricket Analytics",
      "Player Performance Analysis",
      "Match Analysis",
      "Ball-by-Ball Analysis",
      "Partnership Analysis",
      "Bowling Analysis",
      "Batting Analysis",
      "Data Quality / QA"
    ]
  },
  {
    title: "DATA & PROGRAMMING",
    badge: "Core Engineering",
    intro: "Data extraction, structured datasets, statistical transformation, and analytical scripts.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "Data Processing",
      "Data Analysis"
    ]
  },
  {
    title: "BUSINESS INTELLIGENCE",
    badge: "BI & Reporting",
    intro: "Designing interactive visual dashboards, performance graphics, and operational summaries.",
    skills: [
      "Power BI",
      "Tableau",
      "Dashboard Development",
      "Data Visualization"
    ]
  },
  {
    title: "SPORTS TECHNOLOGY",
    badge: "Sports Applications",
    intro: "Connecting analytical thinking with specialized sports platforms and interactive systems.",
    skills: [
      "Streamlit",
      "Sports Analytics Applications",
      "Cricket Data Systems",
      "Sports Visualization"
    ]
  }
];
