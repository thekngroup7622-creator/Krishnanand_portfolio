export interface AssociatedVenture {
  name: string;
  role: string;
  tagline: string;
  description: string;
  website: string;
  category: "Platform" | "Technology Venture";
  servicesOrFeatures: string[];
  metrics: { label: string; value: string }[];
}

export const associatedVentures: AssociatedVenture[] = [
  {
    name: "CricNexora",
    role: "AI-Powered Cricket Analytics Platform",
    tagline: "Empowering the Game with Intelligent Cricket Data & Live Visuals",
    description:
      "CricNexora is an AI-powered cricket analytics platform developed to deliver real-time match intelligence, delivery tracking, interactive pitch maps, and performance visualization for analysts, coaches, and sports organizations.",
    website: "https://cricnexora.vercel.app/",
    category: "Platform",
    servicesOrFeatures: [
      "Live Cricket Analytics",
      "Ball-by-Ball Data Tracking",
      "Pitch Maps & Length Distributions",
      "Wagon Wheels & Radial Shot Plots",
      "Cricket Performance Visualization",
      "Match Analysis & Tactical Scouting",
      "Data-Driven Cricket Insights"
    ],
    metrics: [
      { label: "Architecture", value: "AI + Next.js" },
      { label: "Data Granularity", value: "Delivery-Level" },
      { label: "Visualizations", value: "Spatial & 360°" }
    ]
  },
  {
    name: "NexaPeak Digital Tech Solutions",
    role: "Technology & Digital Solutions Venture",
    tagline: "Engineering Digital Transformation, Intelligent Software & Sports Technology",
    description:
      "NexaPeak Digital Tech Solutions is a forward-thinking technology venture focused on digital innovation, enterprise software development, business intelligence, and sports technology solutions.",
    website: "https://nexapeakdigitaltechsolutions.com/",
    category: "Technology Venture",
    servicesOrFeatures: [
      "Software Development",
      "Web Development",
      "AI Solutions",
      "Business Intelligence",
      "Data Analytics",
      "Digital Transformation",
      "Sports Technology"
    ],
    metrics: [
      { label: "Focus", value: "Enterprise & Sports Tech" },
      { label: "Capabilities", value: "Full-Stack + AI/BI" },
      { label: "Mission", value: "Scalable Solutions" }
    ]
  }
];

