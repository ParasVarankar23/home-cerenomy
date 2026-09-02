"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function InvitationCard() {
  return (
    <section className="invitation-section">
      <div className="mandala-bg" />

      <motion.div
        className="invitation-card"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="invitation-symbol">🪔</div>

        <p className="eyebrow">YOU ARE CORDIALLY INVITED</p>

        <h2>GRUHA PRAVESH</h2>

        <div className="gold-line" />

        <h3>Aditya Chauhan & Family</h3>

        <p className="invitation-text">
          warmly invite you and your family to join us in
          celebrating the auspicious occasion of our new home.
        </p>

        <div className="invitation-date">
          <strong>25th & 26th</strong>
          <span>November 2026</span>
        </div>

        <p className="blessing">
          Your presence and blessings will make this beautiful
          new beginning truly special.
        </p>

        <Heart size={22} className="heart-icon" />
      </motion.div>
    </section>
  );
}