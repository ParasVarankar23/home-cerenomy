"use client";

import { motion } from "framer-motion";

export default function FinalBlessing() {
  return (
    <section className="final-section">
      <img
        src="/images/home/home-front.jpg"
        alt="Our new home"
      />

      <div className="final-overlay" />

      <motion.div
        className="final-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="final-diya">🪔</div>

        <span>A NEW HOME</span>

        <h2>A NEW BEGINNING</h2>

        <p>
          May this home always be filled with love, laughter,
          peace and endless blessings.
        </p>

        <strong>Aditya Chauhan & Family</strong>

        <small>25th & 26th November 2026</small>
      </motion.div>
    </section>
  );
}