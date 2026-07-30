"use client";

import { useEffect, useRef } from "react";

/**
 * Dezenter Parallax-Effekt fuer die Hero-Deko-Elemente: die violetten
 * Glow-Kreise bewegen sich beim Scrollen etwas langsamer als der Rest
 * der Seite, was der Hero-Section Tiefe verleiht.
 */
export function ParallaxGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (ref.current) {
          const offset = window.scrollY * 0.25;
          ref.current.style.transform = `translateY(${offset}px)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-ice-purple/30 blur-[100px]" />
      <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-ice-purple-dark/30 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-ice-chrome/10 blur-[90px]" />
    </div>
  );
}
