"use client";

import { Share2, Copy } from "lucide-react";

export default function ShareInvitation() {
  const share = async () => {
    const data = {
      title: "Gruha Pravesh",
      text: "You are invited to the Gruha Pravesh of Aditya Chauhan & Family.",
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(data);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Invitation link copied!");
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("Invitation link copied!");
  };

  return (
    <section className="share-section">
      <span className="eyebrow">SPREAD THE JOY</span>

      <h2>Share The Invitation</h2>

      <div className="share-buttons">
        <button onClick={share}>
          <Share2 size={18} />
          SHARE INVITATION
        </button>

        <button onClick={copy}>
          <Copy size={18} />
          COPY LINK
        </button>
      </div>
    </section>
  );
}