export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  startDate: string;
  summary: string;
  teamSize?: string;
  tools?: string[];
  responsibilities: string[];
}

export function calculateExperienceDuration(startDateStr = "2023-11-01"): string {
  return "3+ Years";
}

export const experience: ExperienceItem[] = [
  {
    company: "Lifease Solutions LLP",
    role: "Principal Cricket Analyst",
    startDate: "November 2023",
    period: "November 2023 – Present",
    teamSize: "Analyst Squad (5–6 Members)",
    summary:
      "Principal Cricket Analyst with 3+ years of verified professional experience leading match operations, delivery-by-delivery coding, data quality control, video tagging, and advanced cricket intelligence at Lifease Solutions LLP.",
    tools: [
      "Power BI",
      "Tableau",
      "Python",
      "SQL",
      "Advanced Excel",
      "Streamlit",
      "Ball-by-Ball Live Scoring Tools",
      "Video Tagging Systems",
      "Pitch Maps & Wagon Wheels"
    ],
    responsibilities: [
      "Cricket match analysis across international and competitive tournaments.",
      "Live scoring and real-time match operations with strict latency standards.",
      "Ball-by-ball data analysis, capturing delivery trajectory, line, length, and outcomes.",
      "Video tagging and data quality control to ensure verified scorecard accuracy.",
      "Player performance analytics across batting, bowling, phases, and matchups.",
      "Cricket data visualization using Power BI, Tableau, Python, and broadcast-style graphics.",
      "Operational reporting and post-match analytical summaries for coaches and stakeholders.",
      "Analyst team coordination, leading analyst squads of 5–6 members across live tournament fixtures.",
      "Analytical insights and reporting, diagnosing false shot rates, dot-ball pressure, and momentum shifts."
    ]
  }
];
