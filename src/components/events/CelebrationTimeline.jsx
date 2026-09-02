"use client";

import { motion } from "framer-motion";
import { ceremonyData } from "@/data/ceremonyData";

function DayTimeline({ day }) {
  return (
    <div className="day-timeline">
      <div className="day-heading">
        <span>{day.date}</span>
        <h3>{day.title}</h3>
      </div>

      <div className="timeline">
        {day.events.map((event, index) => (
          <motion.div
            className="timeline-item"
            key={event.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.6,
            }}
          >
            <div className="timeline-dot">
              {event.icon}
            </div>

            <div className="timeline-card">
              <span>{event.time}</span>

              <h4>{event.title}</h4>

              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CelebrationTimeline() {
  return (
    <section className="celebration-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="eyebrow">THE CELEBRATION</span>

          <h2>Two Days of Blessings</h2>

          <p>
            A beautiful gathering filled with prayers, food,
            family and memories.
          </p>
        </div>

        <DayTimeline day={ceremonyData.dayOne} />

        <div className="between-days">
          <div className="akhand-symbol">🪔</div>

          <span>24 HOURS OF CONTINUOUS DEVOTION</span>

          <strong>AKHAND PUJA</strong>

          <small>25 November → 26 November</small>
        </div>

        <DayTimeline day={ceremonyData.dayTwo} />
      </div>
    </section>
  );
}