"use client";

import { motion } from "framer-motion";
import { ceremonyData } from "@/data/ceremonyData";

export default function DayOne() {
  return (
    <section className="event-day">
      <div className="day-heading">
        <span>{ceremonyData.dayOne.date}</span>
        <h2>{ceremonyData.dayOne.title}</h2>
      </div>

      <div className="day-events">
        {ceremonyData.dayOne.events.map((event, index) => (
          <motion.article
            className="event-card"
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="event-icon">{event.icon}</div>

            <span>{event.time}</span>

            <h3>{event.title}</h3>

            <p>{event.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}