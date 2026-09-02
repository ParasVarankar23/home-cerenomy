"use client";

import { useState } from "react";
import { toPng } from "html-to-image";

export default function DownloadInvitation() {
  const [downloading, setDownloading] = useState(false);

  const downloadInvitation = async () => {
    setDownloading(true);

    try {
      const element = document.getElementById("invitation-download-card");

      if (!element) {
        throw new Error("Invitation card not found");
      }

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 3,
        cacheBust: true,
        backgroundColor: "#f8f0df",
      });

      const link = document.createElement("a");

      link.download = "Gruha-Pravesh-Aditya-Chauhan-Family.png";
      link.href = dataUrl;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Invitation download failed:", error);
      alert("Unable to download the invitation. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      {/* Hidden / Printable Invitation Card */}
      <div
        id="invitation-download-card"
        className="fixed -left-[99999px] top-0 w-[900px] overflow-hidden"
      >
        <div className="relative min-h-[1200px] bg-[#f8f0df] px-20 py-16 text-center text-[#4a141c]">
          {/* Outer Border */}
          <div className="absolute inset-8 border border-[#b08d37]" />
          <div className="absolute inset-11 border border-[#b08d37]/30" />

          {/* Decorative Corners */}
          <div className="absolute left-14 top-14 text-4xl text-[#b08d37]">
            ❈
          </div>

          <div className="absolute right-14 top-14 text-4xl text-[#b08d37]">
            ❈
          </div>

          <div className="absolute bottom-14 left-14 text-4xl text-[#b08d37]">
            ❈
          </div>

          <div className="absolute bottom-14 right-14 text-4xl text-[#b08d37]">
            ❈
          </div>

          {/* Diya */}
          <div className="mb-8 mt-8 text-7xl">🪔</div>

          {/* Small Heading */}
          <p className="text-sm uppercase tracking-[0.5em] text-[#a47c24]">
            You Are Cordially Invited
          </p>

          {/* Main Title */}
          <h1 className="mt-8 font-[var(--font-playfair)] text-7xl font-semibold tracking-wide text-[#641c27]">
            GRUHA
            <br />
            PRAVESH
          </h1>

          {/* Divider */}
          <div className="mx-auto my-10 flex items-center justify-center gap-4">
            <span className="h-px w-24 bg-[#b08d37]" />
            <span className="text-2xl text-[#b08d37]">✦</span>
            <span className="h-px w-24 bg-[#b08d37]" />
          </div>

          {/* Family */}
          <p className="font-[var(--font-cormorant)] text-4xl font-semibold">
            Aditya Chauhan & Family
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-[var(--font-cormorant)] text-2xl leading-relaxed text-[#6f5054]">
            warmly invite you and your family to join us in celebrating
            the auspicious beginning of our new home.
          </p>

          {/* Dates */}
          <div className="mx-auto mt-12 max-w-xl border-y border-[#b08d37]/50 py-8">
            <p className="text-sm uppercase tracking-[0.4em] text-[#a47c24]">
              Celebration
            </p>

            <p className="mt-4 font-[var(--font-playfair)] text-4xl">
              25th & 26th November 2026
            </p>

            <p className="mt-4 font-[var(--font-cormorant)] text-2xl text-[#6f5054]">
              Uttar Pradesh, India
            </p>
          </div>

          {/* Puja */}
          <div className="mt-12">
            <p className="text-sm uppercase tracking-[0.4em] text-[#a47c24]">
              Auspicious Ceremony
            </p>

            <p className="mt-4 font-[var(--font-cormorant)] text-3xl">
              24-Hour Akhand Puja
            </p>

            <p className="mx-auto mt-3 max-w-xl font-[var(--font-cormorant)] text-xl italic text-[#76585c]">
              A sacred celebration of prayers, blessings and new beginnings.
            </p>
          </div>

          {/* Meals */}
          <div className="mt-12">
            <div className="flex justify-center gap-12">
              <div>
                <p className="text-2xl">☀️</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em]">
                  Lunch
                </p>
              </div>

              <div>
                <p className="text-2xl">🌙</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em]">
                  Dinner
                </p>
              </div>
            </div>
          </div>

          {/* Blessing */}
          <div className="mt-14">
            <p className="font-[var(--font-cormorant)] text-2xl italic text-[#641c27]">
              Your presence and blessings
              <br />
              will make this occasion truly special.
            </p>
          </div>

          {/* Footer */}
          <div className="absolute bottom-16 left-0 right-0 text-center">
            <p className="font-[var(--font-playfair)] text-xl tracking-[0.2em]">
              A NEW HOME • A NEW BEGINNING
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[#a47c24]">
              With Love & Gratitude
            </p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <button
        type="button"
        onClick={downloadInvitation}
        disabled={downloading}
        className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#b08d37] bg-[#641c27] px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[#fff7e5] shadow-[0_12px_35px_rgba(80,20,30,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4e141d] hover:shadow-[0_18px_45px_rgba(80,20,30,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {/* Golden Hover Shine */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        <span className="relative text-lg">
          {downloading ? "⏳" : "↓"}
        </span>

        <span className="relative">
          {downloading ? "Preparing..." : "Download Invitation"}
        </span>
      </button>
    </>
  );
}