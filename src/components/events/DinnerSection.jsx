"use client";

import { motion } from "framer-motion";

export default function DinnerSection() {
  return (
    <section className="meal-section dinner-section">
      <motion.div
        className="meal-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="eyebrow">25 & 26 NOVEMBER</span>

        <div className="meal-icon">🍽️</div>

        <h2>Dinner</h2>

        <div className="gold-line" />

        <p>
          As the day comes to an end, let's gather around the
          table and celebrate together.
        </p>

        <span className="meal-note">
          Dinner will be served on both days.
        </span>
      </motion.div>
    </section>
  );
}