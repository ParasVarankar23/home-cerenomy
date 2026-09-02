"use client";

import { Share2, MessageCircle, Copy } from "lucide-react";

export default function InvitationActions() {
  const shareWhatsApp = () => {
    const message = encodeURIComponent(
      "🏡 You are warmly invited to the Gruha Pravesh of Aditya Chauhan & Family on 25th & 26th November 2026.\n\nWe would be delighted to have you and your family with us. ❤️\n\nView the invitation:"
    );

    window.open(
      `https://wa.me/?text=${message}%20${encodeURIComponent(
        window.location.href
      )}`,
      "_blank"
    );
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);

    alert("Invitation link copied!");
  };

  const nativeShare = async () => {
    if (!navigator.share) {
      copyLink();
      return;
    }

    await navigator.share({
      title: "Gruha Pravesh",
      text: "You are invited to the Gruha Pravesh of Aditya Chauhan & Family.",
      url: window.location.href,
    });
  };

  return (
    <div className="invitation-actions">
      <button onClick={shareWhatsApp}>
        <MessageCircle size={18} />
        WhatsApp
      </button>

      <button onClick={nativeShare}>
        <Share2 size={18} />
        Share
      </button>

      <button onClick={copyLink}>
        <Copy size={18} />
        Copy Link
      </button>
    </div>
  );
}