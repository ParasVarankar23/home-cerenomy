"use client";

import { motion } from "framer-motion";

export default function AkhandPuja() {
  return (
    <section className="akhand-section">
      <div className="akhand-glow" />

      <motion.div
        className="akhand-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="big-diya">
          <div className="big-flame" />
          🪔
        </div>

        <span className="eyebrow">
          A SACRED CONTINUOUS PRAYER
        </span>

        <h2>Akhand Puja</h2>

        <div className="akhand-number">24</div>

        <span className="hours">HOURS</span>

        <p>
          Of continuous devotion, prayers and blessings for our
          new home.
        </p>

        <div className="akhand-dates">
          25 NOVEMBER
          <span>→</span>
          26 NOVEMBER
        </div>
      </motion.div>
    </section>
  );
}