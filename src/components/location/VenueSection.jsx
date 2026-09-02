"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function VenueSection() {
  return (
    <section className="venue-section">
      <div className="section-container">
        <motion.div
          className="venue-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MapPin size={34} />

          <span className="eyebrow">THE DESTINATION</span>

          <h2>Our New Home</h2>

          <p>Uttar Pradesh, India</p>

          <div className="venue-date">
            25th & 26th November 2026
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Uttar+Pradesh+India"
            target="_blank"
            rel="noreferrer"
            className="gold-button"
          >
            <Navigation size={17} />
            GET DIRECTIONS
          </a>
        </motion.div>
      </div>
    </section>
  );
}