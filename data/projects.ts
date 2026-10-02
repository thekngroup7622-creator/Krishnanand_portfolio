export interface PortfolioProject {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  category: string;
  image: string;
  problem: string;
  objective: string;
  approach: string;
  technology: string[];
  analytics: string[];
  visualization: string;
  outcome: string;
  features: string[];
  status: string;
  highlight?: boolean;
}

export const projects: PortfolioProject[] = [
  {
    slug: "cricvision-analytics",
    title: "CricVision Analytics",
    eyebrow: "CRICKET ANALYTICS PLATFORM",
    description: "An advanced cricket analytics platform concept bringing match context, player metrics, and interactive analysis into one unified workflow.",
    category: "Analytics Platform",
    image: "/projects/cricradio.png",
    highlight: true,
    problem: "Cricket performance datasets are often fragmented between raw scorecards, ball-by-ball spreadsheets, and isolated video clips, making fast tactical decision-making difficult for teams and analysts.",
    objective: "Create an integrated cricket analytics platform that centralizes ball-by-ball analysis, player & team performance insights, statistical reporting, and interactive visual dashboards.",
    approach: "Designed a delivery-first data model with automated metrics computation (strike rate progressions, false shot %, dot ball pressure), multi-filter match centers, and executive summary exports.",
    technology: ["Power BI", "Python", "SQL", "Streamlit", "Excel", "Data Modeling"],
    analytics: [
      "Ball-by-ball tracking & phase classification",
      "Player performance progression & career trajectories",
      "Team tactical matchups & scoring burst identification",
      "Automated scorecard summaries & KPI benchmarking"
    ],
    visualization: "Interactive Power BI & Streamlit dashboards featuring dynamic pitch maps, batting wagon wheels, and strike rate acceleration curves.",
    outcome: "Provides analysts and coaches with immediate, contextual answers to match questions without manual data wrangling.",
    features: [
      "Match Center with live delivery-by-delivery feed",
      "Player Analytics with phase-wise filters",
      "Team Analytics & head-to-head benchmarking",
      "Automated statistical reporting & visual exports"
    ],
    status: "Featured Platform Concept"
  },
  {
    slug: "cricintel-3d-vision",
    title: "CRICINTEL 3D Vision",
    eyebrow: "3D CRICKET VISUALIZATION & REPLAY",
    description: "Developed a 3D cricket delivery visualization concept integrating ball-by-ball synchronization, delivery information, pitch maps, wagon wheels, shot direction, pitching line and length, and batter/bowler details.",
    category: "Sports Technology",
    image: "/projects/cricintel-3d-vision-logo.png",
    highlight: true,
    problem: "Traditional 2D pitch maps and static wagon wheels lack depth perspective, failing to convey delivery trajectory, release angles, bounce height, and subtle swing/seam deviation.",
    objective: "Design a spatial 3D cricket delivery replay and intelligence concept that links live ball-by-ball data with visual delivery physics.",
    approach: "Combined spatial coordinate tracking (release point, bounce coordinate, stump trajectory) with delivery event coding (speed, line, length, seam angle, batter footwork direction).",
    technology: ["3D Delivery Modeling", "Sports Technology", "Spatial Data Processing", "Pitch Mapping", "Wagon Wheels"],
    analytics: [
      "Release-to-pitch trajectory and bounce point mapping (6.9m good length strip)",
      "Seam & swing deviation degrees calculation",
      "Pitching line and length categorization (Yorker, Full, Good, Short)",
      "Batter footwork direction and shot timing correlation"
    ],
    visualization: "Broadcast-quality 3D delivery view with projected stump trajectories, radial wagon wheels, and spatial pitch heatmaps.",
    outcome: "Enables viewers, coaches, and players to clearly understand why a delivery succeeded or induced a false shot in full spatial context.",
    features: [
      "3D delivery trajectory & release-to-pitch visualization",
      "Active delivery synchronization with live match scoring",
      "Spatial pitch mapping with millimeter precision zones",
      "360-degree wagon wheel with shot elevation"
    ],
    status: "Advanced 3D Concept"
  },
  {
    slug: "cricket-data-visualization",
    title: "Cricket Data Visualization",
    eyebrow: "BROADCAST-STYLE PERFORMANCE GRAPHICS",
    description: "Created sports broadcast-style visualizations covering batting and bowling performance, phase-wise statistics, partnerships, pitch maps, wagon wheels, and player comparisons.",
    category: "Data Visualization",
    image: "/visualizations/wagon.png",
    highlight: true,
    problem: "Standard data charts often look generic and fail to respect cricket-specific visual conventions (e.g., pitch dimensions, 360-degree wagon wheels, spider radars).",
    objective: "Develop a cohesive broadcast-grade visual language for cricket data that communicates complex match narratives at a glance.",
    approach: "Engineered customized visualization templates including 13-metric bowling radar charts, phase-wise partnership line progressions, and isometric pitch landing heatmaps.",
    technology: ["Tableau", "Power BI", "Python (Matplotlib/Seaborn)", "Sports Broadcast Graphics", "Data Annotation"],
    analytics: [
      "Batting & bowling phase performance (Powerplay, Middle, Death)",
      "13-Axis bowling discipline & control profiling (Sree Charani Asia Cup visual)",
      "Partnership momentum line tracking & turning point identification",
      "Pitch length scoring impact vs false shot percentage (Shafali Verma Asia Cup visual)"
    ],
    visualization: "Sleek, broadcast-ready layouts with clear typography, high contrast, branded source watermarks, and intuitive color hierarchies.",
    outcome: "Demonstrated in live publication visuals (CricRadio Data Portal) reaching broad sports audiences with clear, trustworthy statistical storytelling.",
    features: [
      "13-metric radar bowling performance graphics",
      "Partnership over-by-over progression graphs",
      "3D pitch zone scoring & false shot impact maps",
      "Player head-to-head comparison cards"
    ],
    status: "Broadcast Performance Suite"
  },
  {
    slug: "ball-by-ball-cricket-analytics",
    title: "Ball-by-Ball Cricket Analytics",
    eyebrow: "PLAYER PERFORMANCE",
    description: "A structured approach to batting, bowling, and phase-level analysis using delivery data and interpretable performance indicators.",
    category: "Performance Analysis",
    image: "/visualizations/pitch_map.png",
    problem: "Traditional cricket statistics (batting average, bowling economy) fail to account for match situation, pitch conditions, and ball-by-ball pressure.",
    objective: "Formulate delivery-level metrics (false shot percentage, dot ball percentage, boundary frequency, entry point pressure) for deeper player evaluation.",
    approach: "Processed granular match logs in Python & SQL, classifying each delivery by line, length, shot response, and fielding outcome.",
    technology: ["Python", "SQL", "Pandas", "Excel", "Data Cleaning"],
    analytics: [
      "Batting strike rate progression & boundary percentage",
      "Bowling economy, dot-ball pressure, and wicket clusters",
      "Line and length distribution vs right/left-hand batters",
      "False shot percentage vs swing, seam, and spin types"
    ],
    visualization: "Phase-wise trend graphs and player comparison matrix cards.",
    outcome: "Gives scouts and analysts a realistic indicator of player skill beyond basic aggregate numbers.",
    features: [
      "Batting and bowling analysis",
      "Phase analysis (Powerplay, Middle, Death)",
      "Pitching length and line distribution",
      "False shot and dot-ball calculations"
    ],
    status: "Analytics Workflow"
  },
  {
    slug: "sports-analytics-dashboards",
    title: "Sports Analytics Dashboards",
    eyebrow: "OPERATIONAL WORKFLOWS",
    description: "Operational workflows and interactive dashboards focused on reliable live scoring, data quality control, coordination, and reporting.",
    category: "Data Operations",
    image: "/visualizations/donut.png",
    problem: "Live match scoring operations require immediate error detection to avoid publishing corrupted data to downstream feeds.",
    objective: "Implement operational QA workflows, auditor checklists, and real-time dashboard monitoring for scoring teams.",
    approach: "Designed structured data validation rules (boundary verification, bowler spell limits, extras consistency) and coordinated daily analyst shifts.",
    technology: ["Live Scoring Systems", "Power BI", "Excel", "Data QA Auditing", "Workflow Management"],
    analytics: [
      "Real-time event verification & latency monitoring",
      "Scorer accuracy & audit consistency tracking",
      "Match assignment & analyst shift reporting",
      "Cross-functional bug logging and dev collaboration"
    ],
    visualization: "Operations control dashboards tracking match coverage, QA pass rates, and analyst productivity.",
    outcome: "Guarantees zero-defect data delivery for commercial sports portals and live broadcasts.",
    features: [
      "Live match ball-by-ball event coding",
      "Data QA & error identification procedures",
      "Analyst coordination (5–6 squad lead)",
      "Development bug investigation & resolution"
    ],
    status: "Professional Workflow"
  }
];
