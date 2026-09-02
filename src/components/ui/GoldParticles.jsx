"use client";

export default function GoldParticles() {
  return (
    <div className="gold-particles" aria-hidden="true">
      {Array.from({ length: 35 }).map((_, i) => (
        <span key={i} style={{ "--i": i }} />
      ))}
    </div>
  );
}