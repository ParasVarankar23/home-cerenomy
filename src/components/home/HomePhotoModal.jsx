"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function HomePhotoModal({
  images = [],
  selectedIndex = null,
  onClose,
}) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex ?? 0);

  useEffect(() => {
    if (selectedIndex !== null && selectedIndex !== undefined) {
      setCurrentIndex(selectedIndex);
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null || selectedIndex === undefined) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }

      if (event.key === "ArrowRight" && images.length > 1) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }

      if (event.key === "ArrowLeft" && images.length > 1) {
        setCurrentIndex(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, images.length, onClose]);

  if (
    selectedIndex === null ||
    selectedIndex === undefined ||
    !images.length
  ) {
    return null;
  }

  const currentImage = images[currentIndex];

  const getImageSrc = (image) => {
    if (typeof image === "string") return image;
    return image?.src || "";
  };

  const getImageAlt = (image, index) => {
    if (typeof image === "object" && image?.alt) return image.alt;
    return `Our new home - photo ${index + 1}`;
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#16090b]/95 px-4 py-6 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Golden Ambient Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-[100px]" />

        {/* Close Button */}
        <motion.button
          type="button"
          aria-label="Close photo"
          onClick={onClose}
          className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#3b1117]/80 text-2xl text-[#f8e7b0] backdrop-blur-md transition hover:border-[#d4af37] hover:bg-[#5a1821]"
          whileHover={{ scale: 1.08, rotate: 5 }}
          whileTap={{ scale: 0.92 }}
        >
          ×
        </motion.button>

        {/* Counter */}
        <div className="absolute left-5 top-5 z-20 rounded-full border border-[#d4af37]/30 bg-[#3b1117]/70 px-4 py-2 text-xs tracking-[0.2em] text-[#f8e7b0] backdrop-blur-md">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>

        {/* Previous */}
        {images.length > 1 && (
          <motion.button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#3b1117]/80 text-2xl text-[#f8e7b0] backdrop-blur-md transition hover:border-[#d4af37] hover:bg-[#5a1821] md:left-8"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            ‹
          </motion.button>
        )}

        {/* Image Area */}
        <motion.div
          className="relative flex h-full max-h-[88vh] w-full max-w-6xl items-center justify-center"
          onClick={(event) => event.stopPropagation()}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative h-full max-h-[82vh] w-full"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={getImageSrc(currentImage)}
                alt={getImageAlt(currentImage, currentIndex)}
                fill
                priority
                sizes="(max-width: 768px) 95vw, 90vw"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Next */}
        {images.length > 1 && (
          <motion.button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#3b1117]/80 text-2xl text-[#f8e7b0] backdrop-blur-md transition hover:border-[#d4af37] hover:bg-[#5a1821] md:right-8"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
          >
            ›
          </motion.button>
        )}

        {/* Bottom Info */}
        <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-center">
          <p className="font-[var(--font-cormorant)] text-lg italic text-[#f8e7b0]">
            A glimpse of our new beginning
          </p>

          <div className="mx-auto mt-2 h-px w-16 bg-[#d4af37]/60" />

          <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[#d4af37]/80">
            Aditya Chauhan & Family
          </p>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && images.length <= 8 && (
          <div
            className="absolute bottom-16 left-1/2 z-30 hidden -translate-x-1/2 items-center gap-2 rounded-2xl border border-[#d4af37]/20 bg-[#250c10]/70 p-2 backdrop-blur-lg md:flex"
            onClick={(event) => event.stopPropagation()}
          >
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                aria-label={`View photo ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`relative h-12 w-16 overflow-hidden rounded-lg border transition-all ${
                  index === currentIndex
                    ? "scale-105 border-[#d4af37]"
                    : "border-transparent opacity-50 hover:opacity-90"
                }`}
              >
                <Image
                  src={getImageSrc(image)}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}