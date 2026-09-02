"use client";

import { useEffect, useState } from "react";

const targetDate = new Date("2026-11-25T09:00:00+05:30");

function calculateTime() {
  const difference = targetDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <section className="countdown-section">
      <div className="section-heading">
        <span className="eyebrow">THE WAIT BEGINS</span>

        <h2>Counting Every Moment</h2>
      </div>

      <div className="countdown-grid">
        {items.map(([label, value]) => (
          <div className="countdown-box" key={label}>
            <strong>{String(value).padStart(2, "0")}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}