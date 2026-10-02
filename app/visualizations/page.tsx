import type { Metadata } from "next";
import VisualizationGallery from "@/components/VisualizationGallery";

export const metadata: Metadata = {
  title: "Visualizations | Krishna Nand Yadav — Cricket & Sports Data Analyst",
  description: "Cricket data visualization gallery covering batting and bowling performance, pitch maps, wagon wheels, partnerships, footwork, and phase analysis."
};

export default function VisualizationsPage() {
  return (
    <>
      <section className="page-hero compact">
        <div className="container">
          <p className="eyebrow">SPORTS DATA VISUALIZATION</p>
          <h1>
            See the game <span>in the data.</span>
          </h1>
          <p className="page-hero-description">
            Broadcast-style cricket visualization suite covering batting and bowling performance, phase-wise statistics, partnerships, 3D pitch maps, wagon wheels, and player comparisons.
          </p>
          <div className="demo-disclaimer" style={{ background: "rgba(0, 29, 56, 0.05)", borderColor: "rgba(0, 29, 56, 0.12)", color: "var(--navy)" }}>
            ⚡ <strong>Broadcast Standard:</strong> Designed for live scoring feeds, match broadcasts, team analytics rooms, and digital cricket platforms.
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <VisualizationGallery />
        </div>
      </section>
    </>
  );
}
