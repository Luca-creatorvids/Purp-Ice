"use client";

import { useRef, useState } from "react";

/**
 * Kurzer Clip, der zeigt, wie die Moissanite-Steine den Diamond-Tester
 * bestehen. Startet nicht automatisch – klickt man auf den Play-Button,
 * läuft das Video mit Ton.
 */
export function DiamondTestVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    videoRef.current?.play();
    setPlaying(true);
  }

  return (
    <div
      className="relative mx-auto mt-12 w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-ice-black"
      style={{ aspectRatio: "1046/1814" }}
    >
      <video
        ref={videoRef}
        poster="/videos/diamond-test-poster.jpg"
        controls={playing}
        playsInline
        className="h-full w-full object-cover"
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src="/videos/diamond-test.mp4" type="video/mp4" />
        <source src="/videos/diamond-test.webm" type="video/webm" />
      </video>

      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Video mit Ton abspielen"
          className="group absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-ice-black shadow-lg transition-transform group-hover:scale-105">
            <PlayIcon className="ml-1 h-6 w-6" />
          </span>
        </button>
      )}
    </div>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.87l11-6.86a1 1 0 0 0 0-1.74l-11-6.86A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}
