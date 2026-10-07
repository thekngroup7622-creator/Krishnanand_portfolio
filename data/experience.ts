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
    role: "Cricket & Sports Data Analyst",
    period: "2.5+ years of experience (November 2023 – Present)",
    teamSize: "Analyst Squad (5–6 Members)",
    summary: "Cricket and Sports Data Analyst with 2.5+ years of experience in ball-by-ball data analysis, live scoring, match coding, player and team performance analysis, sports data operations, and quality control. Experienced in transforming cricket datasets into statistical insights, performance reports, and professional visualizations.",
    tools: [
      "Power BI",
      "Tableau",
      "Python",
      "SQL",
      "Advanced Excel",
      "Streamlit",
      "Ball-by-Ball Live Scoring Tools",
      "Pitch Maps & Wagon Wheels"
    ],
    responsibilities: [
      "Performed delivery-by-delivery cricket data coding and analysis, maintaining accurate ball-by-ball match records and contextual information.",
      "Analyzed batting, bowling, partnership, phase, and player-performance metrics to identify trends and generate actionable cricket insights.",
      "Supported live scoring and match coding operations, including scorecard verification, data annotation, and match-level quality checks.",
      "Conducted data quality control, auditing, bug investigation, and validation of cricket datasets in coordination with development and operations teams.",
      "Worked with analyst squads of 5–6 members to coordinate match-data workflows and maintain consistency across live scoring and analytical outputs.",
      "Created performance reports, statistical summaries, dashboards, and professional cricket visualizations for player and match analysis."
    ]
  }
];
