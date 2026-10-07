export interface SkillCategory {
  title: string;
  badge: string;
  intro: string;
  skills: string[];
}

export const coreSkills: string[] = [
  "Ball-by-Ball Analysis & Tracking",
  "Player & Team Performance Analysis",
  "Match Analysis",
  "Batting & Bowling Analytics",
  "Partnership Analysis",
  "Phase-wise Performance Metrics",
  "Live Scoring & Match Coding",
  "Pitch Maps & Wagon Wheels",
  "Data Quality Control & QA",
  "Data Cleaning & Extraction",
  "Statistical Analysis & Modeling",
  "Automated Match Reporting",
  "Power BI & Tableau Dashboards",
  "Python Data Modeling",
  "SQL Querying",
  "Advanced Excel Analytics",
  "Streamlit App Development",
  "Sports Technology"
];

export const skillGroups: SkillCategory[] = [
  {
    title: "ANALYTICS & BI",
    badge: "BI & Performance Insights",
    intro: "Power BI and Tableau dashboards, statistical reporting, and visual cricket analytics.",
    skills: [
      "Power BI",
      "Tableau",
      "Advanced Excel",
      "Dashboard Development",
      "Statistical Analysis",
      "Phase-wise Performance Metrics",
      "Partnership Analysis"
    ]
  },
  {
    title: "PROGRAMMING & DATA",
    badge: "Core Data Engineering",
    intro: "Python data modeling, SQL querying, data cleaning, extraction, and validation.",
    skills: [
      "Python",
      "SQL",
      "Data Modeling",
      "Data Cleaning",
      "Data Extraction",
      "Statistical Modeling"
    ]
  },
  {
    title: "SPORTS TECHNOLOGY & OPERATIONS",
    badge: "Live Operations & Tools",
    intro: "Ball-by-ball match coding, live scoring operations, QA auditing, and sports tech apps.",
    skills: [
      "Ball-by-Ball Data",
      "Live Scoring & Match Coding",
      "Data Quality Control & QA",
      "Automated Match Reporting",
      "Streamlit App Development",
      "Bug Investigation & Validation"
    ]
  },
  {
    title: "VISUALIZATION & CRICKET GRAPHICS",
    badge: "Visual Storytelling",
    intro: "Custom broadcast-style graphics, pitch maps, wagon wheels, and performance radars.",
    skills: [
      "Performance Dashboards",
      "Pitch Maps",
      "Wagon Wheels",
      "Radar Charts (13-Metric)",
      "Cricket Performance Graphics",
      "Player & Team Comparison Cards"
    ]
  }
];
