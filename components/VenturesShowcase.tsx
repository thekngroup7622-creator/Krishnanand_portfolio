import { ArrowUpRight, Cpu, Layers, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { associatedVentures } from "@/data/ventures";

export default function VenturesShowcase() {
  const [cricnexora, nexapeak] = associatedVentures;

  return (
    <section className="section" id="ventures" style={{ background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="ASSOCIATED VENTURES &amp; SPORTS TECHNOLOGY"
            title="Platforms &amp; Digital Innovation"
            description="Bridging deep cricket domain intelligence with enterprise technology and scalable AI software architectures."
          />
        </Reveal>

        <div className="ventures-grid">
          {/* Venture 1: CricNexora */}
          <Reveal delay={0.08}>
            <article
              className="venture-card"
              style={{
                background: "linear-gradient(135deg, #F8FAFC 0%, #EAF3FD 100%)",
                border: "1px solid #C9E1FF",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxShadow: "0 6px 24px rgba(0, 29, 56, 0.05)"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--navy)", color: "#fff", display: "grid", placeItems: "center" }}>
                      <Cpu size={22} style={{ color: "var(--orange)" }} />
                    </div>
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: 800, color: "var(--orange)", textTransform: "uppercase", letterSpacing: "1px" }}>
                        Sports Tech Platform
                      </span>
                      <h3 style={{ margin: 0, fontSize: "22px", color: "var(--navy)", fontWeight: 900 }}>
                        {cricnexora.name}
                      </h3>
                    </div>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#166534", background: "#DCFCE7", padding: "3px 9px", borderRadius: "6px" }}>
                    Live Platform
                  </span>
                </div>

                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--navy)", margin: "0 0 8px" }}>
                  {cricnexora.role}
                </p>

                <p style={{ fontSize: "13.5px", color: "#475467", lineHeight: "1.7", margin: "0 0 20px" }}>
                  {cricnexora.description}
                </p>

                <div style={{ background: "#fff", borderRadius: "10px", padding: "16px", border: "1px solid #DCE6F0", marginBottom: "20px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
                    Verified Features &amp; Capabilities
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px" }}>
                    {cricnexora.servicesOrFeatures.map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--navy)" }}>
                        <CheckCircle2 size={13} style={{ color: "var(--orange)", flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="venture-card-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid rgba(0, 29, 56, 0.08)" }}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {cricnexora.metrics.map((m) => (
                    <div key={m.label} style={{ fontSize: "11px" }}>
                      <span style={{ color: "var(--muted)", display: "block" }}>{m.label}</span>
                      <strong style={{ color: "var(--navy)" }}>{m.value}</strong>
                    </div>
                  ))}
                </div>

                <a
                  href={cricnexora.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-small button-primary"
                  title="Visit CricNexora (opens in new tab)"
                >
                  Explore CricNexora <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          </Reveal>

          {/* Venture 2: NexaPeak Digital Tech Solutions */}
          <Reveal delay={0.16}>
            <article
              className="venture-card"
              style={{
                background: "linear-gradient(135deg, #F8FAFC 0%, #FFF8F1 100%)",
                border: "1px solid #FFE4C8",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                boxShadow: "0 6px 24px rgba(0, 29, 56, 0.05)"
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "var(--navy)", color: "#fff", display: "grid", placeItems: "center" }}>
                      <Layers size={22} style={{ color: "#38BDF8" }} />
                    </div>
                    <div>
                      <span style={{ fontSize: "10px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", letterSpacing: "1px" }}>
                        Technology Venture
                      </span>
                      <h3 style={{ margin: 0, fontSize: "20px", color: "var(--navy)", fontWeight: 900 }}>
                        {nexapeak.name}
                      </h3>
                    </div>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#1E40AF", background: "#DBEAFE", padding: "3px 9px", borderRadius: "6px" }}>
                    Official Venture
                  </span>
                </div>

                <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--navy)", margin: "0 0 8px" }}>
                  {nexapeak.role}
                </p>

                <p style={{ fontSize: "13.5px", color: "#475467", lineHeight: "1.7", margin: "0 0 20px" }}>
                  {nexapeak.description}
                </p>

                <div style={{ background: "#fff", borderRadius: "10px", padding: "16px", border: "1px solid #F0D9C0", marginBottom: "20px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", display: "block", marginBottom: "10px" }}>
                    Verified Services &amp; Solutions
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px" }}>
                    {nexapeak.servicesOrFeatures.map((serv) => (
                      <div key={serv} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--navy)" }}>
                        <CheckCircle2 size={13} style={{ color: "#0284C7", flexShrink: 0 }} />
                        <span>{serv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="venture-card-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid rgba(0, 29, 56, 0.08)" }}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {nexapeak.metrics.map((m) => (
                    <div key={m.label} style={{ fontSize: "11px" }}>
                      <span style={{ color: "var(--muted)", display: "block" }}>{m.label}</span>
                      <strong style={{ color: "var(--navy)" }}>{m.value}</strong>
                    </div>
                  ))}
                </div>

                <a
                  href={nexapeak.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-small button-outline"
                  title="Visit NexaPeak Digital Tech Solutions (opens in new tab)"
                >
                  Visit NexaPeak <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
