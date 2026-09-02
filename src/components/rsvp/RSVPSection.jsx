"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RSVPSection() {
  const [selected, setSelected] = useState("");

  const options = [
    "YES, I'LL BE THERE ❤️",
    "MAYBE",
    "SORRY, CAN'T ATTEND",
  ];

  return (
    <section className="rsvp-section">
      <motion.div
        className="rsvp-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <span className="eyebrow">WE WOULD LOVE TO SEE YOU</span>

        <h2>Will You Join Us?</h2>

        <p>
          Your presence would make our celebration even more
          meaningful.
        </p>

        <div className="rsvp-options">
          {options.map((option) => (
            <button
              key={option}
              className={selected === option ? "selected" : ""}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {selected && (
          <motion.div
            className="rsvp-thanks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Thank you for letting us know. ❤️
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}