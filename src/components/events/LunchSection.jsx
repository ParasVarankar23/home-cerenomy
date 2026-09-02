"use client";

import { motion } from "framer-motion";

export default function LunchSection() {
  return (
    <section className="meal-section lunch-section">
      <motion.div
        className="meal-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="eyebrow">25 & 26 NOVEMBER</span>

        <div className="meal-icon">🍛</div>

        <h2>Lunch</h2>

        <div className="gold-line" />

        <p>
          A table filled with warmth, delicious food and the
          joy of being together.
        </p>

        <span className="meal-note">
          Lunch will be served on both days.
        </span>
      </motion.div>
    </section>
  );
}