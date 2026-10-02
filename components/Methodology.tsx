"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Database, Filter, ChartNoAxesCombined, Sparkles, Lightbulb, Send } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "DATA COLLECTION",
    desc: "Ball-by-ball cricket data and match datasets.",
    icon: Database
  },
  {
    step: "02",
    title: "DATA CLEANING",
    desc: "Validation, normalization, and quality checks.",
    icon: Filter
  },
  {
    step: "03",
    title: "ANALYSIS",
    desc: "Batting, bowling, partnerships, phases, pitch length, shots, dismissals, and performance metrics.",
    icon: ChartNoAxesCombined
  },
  {
    step: "04",
    title: "VISUALIZATION",
    desc: "Charts, dashboards, pitch maps, wagon wheels, radar charts, and broadcast-style graphics.",
    icon: Sparkles
  },
  {
    step: "05",
    title: "INSIGHT",
    desc: "Convert raw cricket data into understandable performance insights.",
    icon: Lightbulb
  },
  {
    step: "06",
    title: "DELIVERY",
    desc: "Reports, dashboards, visualizations, and analytics applications.",
    icon: Send
  }
];

export default function Methodology() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section methodology-section" id="methodology">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="ANALYTICS METHODOLOGY"
            title="Cricket Analytics Methodology"
            description="A disciplined, repeatable end-to-end framework converting raw match deliveries into actionable performance value."
            centered
          />
        </Reveal>

        <div className="methodology-flow" style={{ marginTop: "2.5rem" }}>
          {steps.map((step, index) => (
            <div className="methodology-step-wrap" key={step.title}>
              <Reveal delay={index * 0.04}>
                <motion.article
                  className={`methodology-step ${index === steps.length - 1 ? "final-step" : ""}`}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <span className="methodology-index">{step.step}</span>
                  <span className="methodology-icon">
                    <step.icon size={21} />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </motion.article>
              </Reveal>
              {index < steps.length - 1 && (
                <div className="methodology-connector" aria-hidden="true">
                  <ArrowDown size={17} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
