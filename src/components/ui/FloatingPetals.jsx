"use client";

export default function FloatingPetals() {
  return (
    <div className="floating-petals" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} style={{ "--i": i }}>
          🌼
        </span>
      ))}
    </div>
  );
}