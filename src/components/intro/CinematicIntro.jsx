"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicIntro({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 700),
      setTimeout(() => setStage(2), 1800),
      setTimeout(() => setStage(3), 3000),
      setTimeout(() => setStage(4), 5000),
      setTimeout(() => setStage(5), 7000),
      setTimeout(() => setStage(6), 9000),
      setTimeout(() => setStage(7), 11000),
      setTimeout(() => {
        onComplete?.();
      }, 13000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="cinematic-intro"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Background */}
        <motion.div
          className="intro-background"
          animate={{
            scale: stage >= 6 ? 1.08 : 1,
          }}
        />

        {/* Dark overlay */}
        <div className="intro-darkness" />

        {/* Diya */}
        <motion.div
          className="intro-diya"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: stage >= 1 ? 1 : 0,
            scale: stage >= 1 ? 1 : 0.5,
          }}
        >
          <div className="flame">
            <span />
          </div>

          <div className="diya-body">🪔</div>
        </motion.div>

        {/* Golden light */}
        <motion.div
          className="golden-light"
          animate={{
            opacity: stage >= 2 ? 1 : 0,
            scale: stage >= 2 ? 1.8 : 0.2,
          }}
        />

        {/* Entrance */}
        <motion.div
          className="intro-entrance"
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{
            opacity: stage >= 3 ? 1 : 0,
            scale: stage >= 6 ? 1.05 : 1,
          }}
        >
          <img
            src="/images/intro/entrance-decoration.jpg"
            alt="Decorated home entrance"
          />
        </motion.div>

        {/* Flowers */}
        <motion.div
          className="floating-flowers"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 4 ? 1 : 0 }}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} style={{ "--i": i }}>
              🌼
            </span>
          ))}
        </motion.div>

        {/* Doors */}
        <div
          className={`cinematic-doors ${
            stage >= 5 ? "doors-open" : ""
          }`}
        >
          <div className="door door-left">
            <img src="/images/intro/door-left.png" alt="" />
          </div>

          <div className="door door-right">
            <img src="/images/intro/door-right.png" alt="" />
          </div>
        </div>

        {/* Home reveal */}
        <motion.div
          className="home-reveal"
          initial={{ opacity: 0, scale: 1.3 }}
          animate={{
            opacity: stage >= 6 ? 1 : 0,
            scale: stage >= 6 ? 1 : 1.3,
          }}
        >
          <img src="/images/home/home-front.jpg" alt="Our new home" />
        </motion.div>

        {/* Title */}
        <motion.div
          className="intro-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: stage >= 7 ? 1 : 0,
            y: stage >= 7 ? 0 : 30,
          }}
        >
          <span>A NEW HOME</span>

          <h1>GRUHA PRAVESH</h1>

          <p>Aditya Chauhan & Family</p>

          <small>25th & 26th November 2026</small>
        </motion.div>

        {/* Skip */}
        <button className="skip-intro" onClick={onComplete}>
          Skip Intro
        </button>
      </motion.div>
    </AnimatePresence>
  );
}