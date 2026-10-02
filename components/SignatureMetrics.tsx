import { Activity, Crosshair, ChartNoAxesCombined } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const groups = [
  { title: "Batting", icon: Activity, items: ["Runs", "Balls", "Strike Rate", "Boundary %", "Dot %", "False Shot %", "Phase Performance"] },
  { title: "Bowling", icon: Crosshair, items: ["Overs", "Runs", "Wickets", "Economy", "Dot %", "False Shot %", "Pitching Length", "Pitching Line"] },
  { title: "Advanced", icon: ChartNoAxesCombined, items: ["Shot Direction", "Shot Type", "Feet Movement", "Wagon Wheel", "Pitch Map", "Batter–Bowler Matchup", "Delivery Classification"] }
];

export default function SignatureMetrics() {
  return <section className="section metrics-section"><div className="container"><Reveal><SectionHeading eyebrow="THE DETAIL BEHIND THE STORY" title="Signature metrics" description="Metric selection depends on the question, data availability and the definition used. Each measure should have a clear, documented calculation." /></Reveal><div className="signature-grid">{groups.map((group, index) => <Reveal key={group.title} delay={index * 0.08}><article className="signature-card"><div className="signature-heading"><span><group.icon size={20} /></span><h3>{group.title}</h3><small>0{index + 1}</small></div><div className="signature-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article></Reveal>)}</div></div></section>;
}
