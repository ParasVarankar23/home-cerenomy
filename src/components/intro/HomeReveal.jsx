"use client";

import { motion } from "framer-motion";

export default function HomeReveal() {
  return (
    <motion.div
      className="home-reveal"
      initial={{
        opacity: 0,
        scale: 1.25,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeOut",
      }}
    >
      <img
        src="/images/home/home-front.jpg"
        alt="Aditya Chauhan family home"
      />

      <div className="home-reveal-overlay" />
    </motion.div>
  );
}