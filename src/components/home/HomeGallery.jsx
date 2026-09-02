"use client";

import { useState } from "react";
import Image from "next/image";
import HomePhotoModal from "./HomePhotoModal";

const images = [
  "/images/home/home-front.jpg",
  "/images/home/entrance.jpg",
  "/images/home/living-room.jpg",
  "/images/home/puja-room.jpg",
  "/images/home/interior.jpg",
];

export default function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-[#b08d27]">
              Our Home
            </p>

            <h2 className="mt-3 font-[var(--font-playfair)] text-4xl text-[#4b151d] md:text-6xl">
              A Glimpse Into Our New Beginning
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-2xl ${
                  index === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0
                      ? "h-[420px] md:h-[620px]"
                      : "h-[200px] md:h-[300px]"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Our new home ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#16090b]/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff8e8]/90 text-[#5a1821] opacity-0 shadow-lg transition duration-500 group-hover:opacity-100">
                    ↗
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <HomePhotoModal
        images={images}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
}