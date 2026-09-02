"use client";

import { motion } from "framer-motion";

export default function EntranceReveal() {
  return (
    <motion.div
      className="intro-entrance"
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
    >
      <img
        src="/images/intro/entrance-decoration.jpg"
        alt="Beautifully decorated home entrance"
      />
    </motion.div>
  );
}