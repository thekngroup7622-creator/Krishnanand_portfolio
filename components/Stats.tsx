import { Activity, ChartNoAxesCombined, Database, Users2 } from "lucide-react";
import Reveal from "./ui/Reveal";

const items = [
  {
    icon: Activity,
    title: "2.5+ Years",
    label: "Cricket Analytics Experience",
    detail: "Ball-by-ball analysis, live scoring, and player & team performance"
  },
  {
    icon: Users2,
    title: "5–6 Analysts",
    label: "Team Leadership & Coordination",
    detail: "Managing match assignments, daily operations, productivity & quality"
  },
  {
    icon: Database,
    title: "Data QA & Ops",
    label: "Quality Control & Bug Resolution",
    detail: "Real-time cricket event coding, QA checks & dev collaboration"
  },
  {
    icon: ChartNoAxesCombined,
    title: "BI & Sports Tech",
    label: "Dashboards & 3D Concepts",
    detail: "Power BI, Tableau, Python, SQL, Excel, and 3D delivery replays"
  }
];

export default function Stats() {
  return (
    <section className="stats-strip">
      <div className="container stats-grid">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <article className="stat-card">
              <div className="stat-icon">
                <item.icon size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: "20px", color: "var(--navy)", fontWeight: 900 }}>{item.title}</h3>
                <strong>{item.label}</strong>
                <p>{item.detail}</p>
              </div>
              <span className="stat-index">0{i + 1}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
