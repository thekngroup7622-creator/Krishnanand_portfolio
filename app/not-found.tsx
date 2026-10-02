import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="section" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "600px" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>404 · INNINGS CONCLUDED</p>
        <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "1rem", color: "var(--navy)" }}>
          Delivery Outside Off
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1.1rem", marginBottom: "2rem" }}>
          The page or cricket dataset you are looking for is not currently in the match scorecard. It might have been moved or updated.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="button button-primary">
            <Home size={16} /> Return to Home
          </Link>
          <Link href="/projects" className="button button-outline">
            <Search size={16} /> Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
