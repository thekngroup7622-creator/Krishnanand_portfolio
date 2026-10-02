export type AnalyticsCategory =
  | "Partnership Analytics"
  | "Player Performance"
  | "Bowling Analytics";

export interface AnalyticsCaseStudy {
  slug: string;
  title: string;
  category: AnalyticsCategory;
  description: string;
  analysisType: string;
  visualizationMethod: string;
  image: string;
  dataUsed: string;
  objective: string;
  keyMetrics: string[];
  keyInsights: string[];
  tools: string[];
  featured?: boolean;
}

export const analyticsCaseStudies: AnalyticsCaseStudy[] = [
  // =========================================================================
  // ANALYTICS #1: Rohit Sharma & Shubman Gill — 255-Run Opening Partnership
  // =========================================================================
  {
    slug: "rohit-sharma-shubman-gill-255-partnership",
    title: "Rohit Sharma & Shubman Gill — 255-Run Opening Partnership",
    category: "Partnership Analytics",
    description: "Phase-wise analysis of a 255-run opening partnership in 26.2 overs, highlighting scoring patterns, phase momentum, contribution share, and partnership acceleration.",
    analysisType: "Partnership & Phase Progression Analysis",
    visualizationMethod: "Phase-wise trend + Over-by-Over line progression + Contribution donut breakdown",
    image: "/analytics/rohit-sharma-shubman-gill-partnership.jpg",
    dataUsed: "Ball-by-ball cricket event data (India vs West Indies — 2nd ODI, Kensington Oval)",
    objective: "Understand how the partnership progressed across match phases and identify individual contribution, strike rotation, boundary rates, and scoring acceleration patterns.",
    keyMetrics: [
      "Total Partnership Runs: 255 Runs off 158 Balls (RR: 9.68 | SR: 161.4)",
      "Rohit Sharma Contribution: 104 Runs (40.8% share)",
      "Shubman Gill Contribution: 112 Runs (43.9% share)",
      "Extras Contribution: 39 Runs (15.3% share)",
      "Boundary Value: 180 Runs off Boundaries (70.6% of total)",
      "Boundary Breakdown: 27 Fours & 12 Sixes",
      "Phase 1 (Overs 1–10): 92 Runs | SR 153.3 | Dot Ball % 53.3%",
      "Middle Phase (Overs 11–20): 96 Runs | SR 160.0 | Dot Ball % 43.3%",
      "Acceleration Phase (Overs 21–26.2): 67 Runs | SR 176.3 | Dot Ball % 28.9%"
    ],
    keyInsights: [
      "The partnership accelerated systematically from 153.3 SR in the opening Powerplay to 176.3 SR during the acceleration phase.",
      "Dot-ball percentage dropped consistently from 53.3% in overs 1–10 down to 28.9% in overs 21–26.2, maintaining intense pressure on the opposition.",
      "Boundary hitting generated over 70% of total partnership runs, preventing pressure accumulation between deliveries.",
      "Scoring bursts in the 8th, 10th, 16th, 17th, and 25th overs decisively swung match win probability in India's favor."
    ],
    tools: ["Python", "SQL", "Power BI", "Ball-by-Ball Data Extraction", "Sports Data Graphics"],
    featured: true
  },

  // =========================================================================
  // ANALYTICS #2: Sanju Samson & Abhishek Sharma — Inside India's Explosive 1st-Wicket Partnership
  // =========================================================================
  {
    slug: "sanju-samson-abhishek-sharma-142-partnership",
    title: "Sanju Samson & Abhishek Sharma — Inside India's Explosive 1st-Wicket Partnership",
    category: "Partnership Analytics",
    description: "Delivery-by-delivery breakdown of India's blistering 142-run 1st-wicket partnership in 9.5 overs (59 balls) at a run rate of 14.44 RPO.",
    analysisType: "Powerplay Assault & Partnership Velocity",
    visualizationMethod: "Batter side-by-side comparison + Dual wagon wheels + Over progression trajectory",
    image: "/analytics/sanju-samson-abhishek-sharma-partnership.jpg",
    dataUsed: "Ball-by-ball delivery event logs (Source: CricRadio Data Portal)",
    objective: "Examine ultra-aggressive partnership dynamics, asymmetric strike distribution, boundary frequency, and over-by-over momentum spikes.",
    keyMetrics: [
      "Partnership Runs: 142 Runs off 59 Balls (Combined SR: 240.7 | RR: 14.44 RPO)",
      "Abhishek Sharma: 84 Runs off 34 Balls (SR: 247.1 | 7 Fours, 7 Sixes)",
      "Sanju Samson: 58 Runs off 25 Balls (SR: 232.0 | 6 Fours, 4 Sixes)",
      "Total Boundaries: 13 Fours & 11 Sixes (118 Runs off Boundaries | 83.1%)",
      "Dot Ball Containment: Only 11 dot balls faced across 59 deliveries (18.6% Dot Ball %)",
      "Powerplay Impact: 88 Runs plundered in the opening 6 overs",
      "Peak Scoring Over: 26 Runs extracted in a single over (3 sixes & 2 boundaries)"
    ],
    keyInsights: [
      "Both openers maintained strike rates above 230, preventing the bowling unit from settling into defensive lines.",
      "Boundary runs accounted for an astonishing 83.1% of all runs scored, dismantling field settings within the first 4 overs.",
      "Sanju anchored off-side gaps through extra cover and point, while Abhishek dominated the aerial arc from long-off to cow corner.",
      "An exceptionally low dot ball rate of 18.6% ensured non-stop strike rotation and compound scoreboard pressure."
    ],
    tools: ["Python", "SQL", "Power BI", "Delivery Tracking", "CricRadio Data Suite"],
    featured: true
  },

  // =========================================================================
  // ANALYTICS #3: Shafali Verma — Scoring Impact by Pitching Length
  // =========================================================================
  {
    slug: "shafali-verma-scoring-impact-by-length",
    title: "Shafali Verma — Scoring Impact by Pitching Length",
    category: "Player Performance",
    description: "Detailed pitch length analysis examining runs, strike rate, and false shot percentage across length zones in the Final Match vs Sri Lanka (Women's Asia Cup 2026).",
    analysisType: "Pitch Zone Batting Analysis",
    visualizationMethod: "3D Isometric Pitch Strip with length-wise metric badges & false shot matrix",
    image: "/analytics/shafali-verma-pitching-length.jpg",
    dataUsed: "Delivery-level pitch coordinates (Women's Asia Cup 2026 Final vs Sri Lanka)",
    objective: "Identify scoring productivity and tactical vulnerabilities across 6 distinct bowling lengths.",
    keyMetrics: [
      "Total Innings: 68 Runs off 39 Balls (Strike Rate: 174.4)",
      "Boundary Count: 9 Fours & 2 Sixes (48 Boundary Runs)",
      "Overall False Shot %: 17.95%",
      "Back of Length: 31 Runs off 15 Balls (SR: 206.7 | 45.6% of Innings Runs | 13.3% False)",
      "Good Length: 21 Runs off 13 Balls (SR: 161.5 | 30.9% of Innings Runs | 23.1% False)",
      "Half Volley / Full: 9 Runs off 6 Balls (SR: 150.0 | 0.0% False Shot)",
      "Short Length: 7 Runs off 5 Balls (SR: 140.0 | Controlled back-foot pulls)"
    ],
    keyInsights: [
      "Back-of-length deliveries were exploited most brutally, producing 45.6% of her total runs at an explosive 206.7 strike rate.",
      "Good length generated the highest false shot rate (23.1%), yet she counter-attacked by stepping out to score at 161.5 SR.",
      "Zero false shots conceded against full-length balls, severely punishing any bowler missing their yorker mark.",
      "Demonstrates how spatial pitch length zoning pinpoints a batter's optimal attack corridor and defensive compromises."
    ],
    tools: ["Python", "Sports Data Graphics", "Data Cleaning", "Ball-by-Ball Analysis"],
    featured: true
  },

  // =========================================================================
  // ANALYTICS #4: Sree Charani — 13-Metric Bowling Performance Radar
  // =========================================================================
  {
    slug: "sree-charani-13-metric-bowling-performance",
    title: "Sree Charani — 13-Metric Bowling Performance Radar",
    category: "Bowling Analytics",
    description: "Multivariate 13-metric radar analysis of Sree Charani's bowling in the Final of Women's Asia Cup 2026 vs Sri Lanka, evaluating discipline, containment, and wicket threat.",
    analysisType: "Multivariate Bowling Performance Analysis",
    visualizationMethod: "13-Axis Polar Radar Web Chart with Match Performance Scorecard",
    image: "/analytics/sree-charani-bowling-performance.jpg",
    dataUsed: "Final Match Ball-by-Ball Delivery Logs (Source: CricRadio Data Portal)",
    objective: "Evaluate complete bowling control, discipline, length consistency, and wicket-taking impact across 13 core analytical indicators.",
    keyMetrics: [
      "Spell Summary: 4.0 Overs, 0 Maidens, 20 Runs, 2 Wickets (Economy: 5.00)",
      "Dot Ball Percentage: 58.3% (14 Dot Balls out of 24 deliveries)",
      "False Shot Inducement: 58.33% of deliveries provoked false shots / beaten bat",
      "Boundary Concession: Only 2 Boundaries conceded (8.3% boundary ball rate)",
      "Discipline Rating: 0 Wides & 0 No Balls bowled in high-stakes final",
      "Good Length Hit Rate: 62.5% on target in the corridor of uncertainty",
      "Phase 1 Control: 2 overs in powerplay yielding just 9 runs and 1 wicket"
    ],
    keyInsights: [
      "An elite 58.33% false shot rate demonstrates total mastery over batter footwork and timing.",
      "14 dot balls in 4 overs created sustained scoreboard pressure, compelling aggressive mistakes.",
      "Flawless technical discipline with zero extras (0 wides, 0 no-balls) in a continental tournament final.",
      "Highlights the diagnostic power of 13-metric radar profiles in capturing complete bowler value beyond traditional bowling figures."
    ],
    tools: ["Python", "Radar Charting", "Data Quality Control", "Sports Data Graphics"],
    featured: true
  }
];

// Alias export for backward compatibility
export const analytics = analyticsCaseStudies;

export const featuredAnalytics = analyticsCaseStudies.filter(
  (item) => item.featured
);

export const categoriesList: AnalyticsCategory[] = [
  "Partnership Analytics",
  "Player Performance",
  "Bowling Analytics"
];
