"use client";

import { useEffect, useState } from "react";

export default function GuestGreeting() {
  const [guest, setGuest] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestName = params.get("guest");

    if (guestName) {
      setGuest(decodeURIComponent(guestName));
    }
  }, []);

  if (!guest) return null;

  return (
    <div className="guest-greeting">
      <span>With warm regards to</span>

      <strong>{guest}</strong>

      <small>& Family</small>
    </div>
  );
}