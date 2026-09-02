"use client";

import { motion } from "framer-motion";

export default function DiyaReveal() {
  return (
    <motion.div
      className="intro-diya"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="flame">
        <span />
      </div>

      <div className="diya-body">🪔</div>
    </motion.div>
  );
}