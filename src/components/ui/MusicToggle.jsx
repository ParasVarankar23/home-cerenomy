    "use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/background-music.mp3"
        loop
        preload="none"
      />

      <button
        className="music-toggle"
        onClick={toggleMusic}
        aria-label="Toggle music"
      >
        {playing ? (
          <Volume2 size={18} />
        ) : (
          <VolumeX size={18} />
        )}
      </button>
    </>
  );
}