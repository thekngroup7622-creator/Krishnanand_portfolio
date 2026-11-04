export interface SkillCategory {
  title: string;
  badge: string;
  intro: string;
  skills: string[];
}

export const coreSkills: string[] = [
  "Ball-by-Ball Data Analysis",
  "Player Performance Analysis",
  "Match Analysis",
  "Video Tagging",
  "Live Scoring Operations",
  "Cricket Data Quality Control",
  "Power BI",
  "Tableau",
  "Advanced Excel",
  "Data Visualization",
  "Dashboard Development",
  "Python",
  "SQL",
  "Streamlit",
  "Data Processing"
];

export const skillGroups: SkillCategory[] = [
  {
    title: "CRICKET ANALYTICS",
    badge: "Core Domain Expertise",
    intro: "Delivery-level match intelligence, live operational coding, video tagging, and high-standard cricket data quality control.",
    skills: [
      "Ball-by-ball data analysis",
      "Player performance analysis",
      "Match analysis",
      "Video tagging",
      "Live scoring operations",
      "Cricket data quality control",
      "Partnership analytics",
      "Pitch mapping & wagon wheels"
    ]
  },
  {
    title: "BUSINESS INTELLIGENCE",
    badge: "Dashboards & Storytelling",
    intro: "Interactive business intelligence dashboards, executive reporting, and visual cricket analytics for teams, coaches, and sports organizations.",
    skills: [
      "Power BI",
      "Tableau",
      "Advanced Excel",
      "Data visualization",
      "Dashboard development",
      "13-Metric bowling radars",
      "Automated match reporting"
    ]
  },
  {
    title: "PROGRAMMING & DATA",
    badge: "Engineering & Modeling",
    intro: "Data manipulation pipelines, database querying, statistical data modeling, and rapid analytical web applications.",
    skills: [
      "Python (Pandas, NumPy, Matplotlib)",
      "SQL Querying & ETL",
      "Streamlit",
      "Data processing & cleaning",
      "Statistical modeling",
      "Data extraction & validation"
    ]
  }
];
