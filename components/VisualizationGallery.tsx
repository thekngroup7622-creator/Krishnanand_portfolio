"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import ImagePlaceholder from "./ui/ImagePlaceholder";

export interface VisualizationItem {
  title: string;
  category: string;
  description: string;
  image: string;
}

const items: VisualizationItem[] = [
  {
    title: "Rohit & Gill — 255-Run Partnership Flow",
    category: "Partnership",
    description: "Multi-phase scoring progression, contribution donut breakdown, and wagon wheels from the 2nd ODI vs West Indies (255 runs off 158 balls).",
    image: "/analytics/rohit-sharma-shubman-gill-partnership.jpg"
  },
  {
    title: "Sanju & Abhishek — 142-Run Partnership Graphic",
    category: "Partnership",
    description: "Side-by-side batter breakdown, wagon wheels, and strike rate acceleration during India's 142 runs off 59 balls assault.",
    image: "/analytics/sanju-samson-abhishek-sharma-partnership.jpg"
  },
  {
    title: "Shafali Verma — Pitch Length Scoring Impact",
    category: "Batting",
    description: "3D isometric pitch strip analyzing scoring zones, boundary distribution, and false shot % in the Women's Asia Cup 2026 Final (68 off 39).",
    image: "/analytics/shafali-verma-pitching-length.jpg"
  },
  {
    title: "Sree Charani — 13-Metric Bowling Radar",
    category: "Bowling",
    description: "Multivariate 13-axis radar chart evaluating economy, dot ball %, line/length consistency, and wicket threat in the Women's Asia Cup Final.",
    image: "/analytics/sree-charani-bowling-performance.jpg"
  },
  {
    title: "360° Wagon Wheel Visualizer",
    category: "Wagon Wheel",
    description: "Granular delivery trajectory mapping showing boundary angles, ground strokes, and field zone concentrations.",
    image: "/visualizations/wagon.png"
  },
  {
    title: "Spatial Pitch Map Density",
    category: "Pitch Map",
    description: "Millimeter-level delivery bounce coordinate tracking across good length, full, back-of-length, and yorker corridors.",
    image: "/visualizations/pitch_map.png"
  },
  {
    title: "Shot Selection & Ground Sector Map",
    category: "Batting",
    description: "Field sector angle mapping correlating batter shot choice with delivery line and pitch bounce.",
    image: "/visualizations/shot_map.png"
  },
  {
    title: "Footwork & Crease Movement Mapping",
    category: "Footwork",
    description: "Biomechanical tracking of front-foot vs back-foot trigger movements and lateral crease depth adjustments.",
    image: "/visualizations/footwork.png"
  },
  {
    title: "Dismissal Cause & Mode Breakdown",
    category: "Advanced Analytics",
    description: "Statistical classification of wicket causes, false shot conversion, and delivery pressure prior to dismissal.",
    image: "/visualizations/cause.png"
  },
  {
    title: "Phase Scoring Treemap Distribution",
    category: "Phase Analysis",
    description: "Hierarchical area visualization representing runs scored, balls consumed, and boundary shares across match phases.",
    image: "/visualizations/treemap.png"
  },
  {
    title: "Partnership Contribution Donut",
    category: "Partnership",
    description: "Proportional scoring contribution analysis highlighting strike rotation shares and boundary generation.",
    image: "/visualizations/donut.png"
  },
  {
    title: "Performance Quadrant Benchmark",
    category: "Advanced Analytics",
    description: "Multi-player quadrant scatter benchmarking strike rate against control percentage and dot ball containment.",
    image: "/visualizations/quadrant.png"
  }
];

const filters = [
  "All",
  "Partnership",
  "Batting",
  "Bowling",
  "Pitch Map",
  "Wagon Wheel",
  "Footwork",
  "Phase Analysis",
  "Advanced Analytics"
];

export default function VisualizationGallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter]
  );

  const selectedItem = selected === null ? null : filtered[selected];

  function move(direction: number) {
    if (selected === null || filtered.length === 0) return;
    setSelected((selected + direction + filtered.length) % filtered.length);
  }

  return (
    <div className="gallery-system">
      {/* Filter Tabs */}
      <div className="filter-tabs" role="group" aria-label="Filter visualizations">
        {filters.map((value) => (
          <button
            key={value}
            className={filter === value ? "filter-tab selected" : "filter-tab"}
            onClick={() => {
              setFilter(value);
              setSelected(null);
            }}
            aria-pressed={filter === value}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Visualizations Grid */}
      <div className="visualization-grid">
        {filtered.map((item, index) => (
          <motion.button
            layout
            key={item.title}
            className="visualization-card"
            onClick={() => setSelected(index)}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            aria-label={`Open ${item.title} preview`}
          >
            <div className="visualization-image">
              <ImagePlaceholder src={item.image} alt={`${item.title} preview`} />
              <span className="visualization-zoom">
                <Maximize2 size={17} />
              </span>
            </div>
            <div className="visualization-caption">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedItem.title} preview`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="lightbox-panel"
              initial={reduceMotion ? false : { scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setSelected(null)}
                aria-label="Close preview"
              >
                <X size={22} />
              </button>
              <button
                className="lightbox-prev"
                onClick={() => move(-1)}
                aria-label="Previous visualization"
              >
                <ChevronLeft size={23} />
              </button>
              <div className="lightbox-image">
                <ImagePlaceholder
                  src={selectedItem.image}
                  alt={`${selectedItem.title} broadcast visualization`}
                />
              </div>
              <button
                className="lightbox-next"
                onClick={() => move(1)}
                aria-label="Next visualization"
              >
                <ChevronRight size={23} />
              </button>
              <div className="lightbox-info">
                <span>{selectedItem.category}</span>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
                <small>
                  Broadcast-grade sports data graphic · Ball-by-ball performance context · CricRadio Data Suite
                </small>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
