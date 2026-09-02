"use client";

import { motion } from "framer-motion";

export default function HomeStory() {
  return (
    <section className="home-story">
      <div className="section-container home-story-grid">
        <motion.div
          className="home-story-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/home/home-front.jpg"
            alt="Our new home"
          />

          <div className="image-frame" />
        </motion.div>

        <motion.div
          className="home-story-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">A PLACE TO CALL HOME</span>

          <h2>A Home Filled With Dreams</h2>

          <div className="gold-line" />

          <p>
            Every home begins with a dream. Every room holds a
            story waiting to unfold.
          </p>

          <p>
            As we step into this beautiful new chapter, we are
            grateful to share this special moment with our family,
            friends and loved ones.
          </p>

          <div className="home-signature">
            <span>With love,</span>
            <strong>Aditya Chauhan & Family</strong>
          </div>
        </motion.div>
      </div>
    </section>
  );
}