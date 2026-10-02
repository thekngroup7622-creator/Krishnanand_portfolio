export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  teamSize?: string;
  tools?: string[];
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Lifease Solutions LLP",
    role: "Principal Cricket Analyst",
    period: "November 2023 – Present",
    teamSize: "Leading 5–6 Cricket Data Analysts",
    summary: "Leading cricket data analytics, real-time ball-by-ball match coding, data quality governance, and sports-technology product workflows. Coordinating cross-functional operations across analysts, scorers, and tech teams.",
    tools: [
      "Power BI",
      "Tableau",
      "Python",
      "SQL",
      "Advanced Excel",
      "Ball-by-Ball Live Scoring Tools",
      "Pitch Map & Wagon Wheel Systems"
    ],
    responsibilities: [
      "Analyze ball-by-ball cricket data, match events, scorecards, and player statistics to generate player-level and team-level performance insights.",
      "Conduct live match scoring and real-time cricket data coding while maintaining high data accuracy, latency standards, and consistency.",
      "Lead and coordinate approximately 5–6 analysts, managing match assignments, daily operations, productivity, and quality standards.",
      "Conduct data quality checks, identify inconsistencies, and coordinate with development teams to investigate and resolve data-related bugs.",
      "Develop cricket analytics dashboards, statistical reports, and visual performance summaries using Power BI, Tableau, Excel, Python, and SQL.",
      "Analyze batting, bowling, partnerships, match phases, player matchups, shot patterns, pitch maps, and wagon wheels.",
      "Support cricket analytics and sports technology products through structured data workflows, reporting, visualization, and operational coordination."
    ]
  }
];
