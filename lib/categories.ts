export const PREDEFINED_CATEGORIES = [
  "Batting Analytics",
  "Bowling Analytics",
  "Partnership Analytics",
  "Player Performance",
  "Match Analysis",
  "Team Analysis",
  "Dismissal Analysis",
  "Shot & Wagon Wheel",
  "Pitch Analysis",
  "Phase Analysis",
  "Comparative Analysis",
  "Tournament Analytics",
  "Advanced Cricket Analytics"
] as const;

export type AnalyticsCategory = (typeof PREDEFINED_CATEGORIES)[number] | string;

export const PREDEFINED_ANALYSIS_TYPES = [
  "Batting Performance",
  "Bowling Performance",
  "Partnership Analysis",
  "Player Comparison",
  "Team Comparison",
  "Phase Analysis",
  "Pitch Analysis",
  "Shot Analysis",
  "Dismissal Analysis",
  "Match Analysis",
  "Tournament Analysis",
  "Partnership & Phase Progression Analysis",
  "Powerplay Assault & Partnership Velocity",
  "Pitch Zone Batting Analysis",
  "Multivariate Bowling Performance Analysis"
] as const;

export const COMMON_METRIC_SUGGESTIONS = [
  "Runs",
  "Strike Rate",
  "Dot %",
  "False Shot %",
  "Boundaries",
  "Economy",
  "Wickets",
  "Phase Performance",
  "Run Rate",
  "Boundary %",
  "Control %",
  "Good Length %",
  "Release Speed",
  "Swing Deviation"
];
