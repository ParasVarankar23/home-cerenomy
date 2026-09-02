"use client";

import { motion } from "framer-motion";

export default function OpeningDoors({ open = false }) {
  return (
    <div className={`cinematic-doors ${open ? "doors-open" : ""}`}>
      <motion.div
        className="door door-left"
        animate={{
          rotateY: open ? -95 : 0,
        }}
        transition={{
          duration: 2,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <img src="/images/intro/door-left.png" alt="" />
      </motion.div>

      <motion.div
        className="door door-right"
        animate={{
          rotateY: open ? 95 : 0,
        }}
        transition={{
          duration: 2,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <img src="/images/intro/door-right.png" alt="" />
      </motion.div>
    </div>
  );
}