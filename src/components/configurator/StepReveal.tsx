"use client";

import { useEffect, useState } from "react";

/**
 * Blendet einen Schritt sanft ein, sobald er gemountet wird (z.B. wenn
 * Schritt 2 erscheint, weil Schritt 1 abgeschlossen ist). Anders als
 * <Reveal> (scroll-basiert) reagiert das hier auf das Erscheinen selbst.
 */
export function StepReveal({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
