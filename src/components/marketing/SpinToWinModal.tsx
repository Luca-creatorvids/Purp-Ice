"use client";

import { useEffect, useMemo, useState } from "react";

// ---------------------------------------------------------------------
// "Spin to Win"-Rabattrad. Erscheint einmal pro Browser-Sitzung ein paar
// Sekunden nach dem Laden. Rein clientseitig: die eingegebene E-Mail wird
// nirgends verschickt, der Rabattcode ist nur eine Deko-Zeichenfolge –
// hier später an einen echten Newsletter-/Rabatt-Service anbinden.
// ---------------------------------------------------------------------
const SEGMENTS = [5, 10, 15, 5, 10, 15, 5, 10];
const SEGMENT_ANGLE = 360 / SEGMENTS.length;
const SESSION_KEY = "purpice-spin-seen";

export function SpinToWinModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<{ percent: number; code: string } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, "1");
    const timer = setTimeout(() => setOpen(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  const gradient = useMemo(() => {
    const colorA = "#e6e5e7";
    const colorB = "#221f28";
    const stops = SEGMENTS.map((_, index) => {
      const from = index * SEGMENT_ANGLE;
      const to = from + SEGMENT_ANGLE;
      const color = index % 2 === 0 ? colorA : colorB;
      return `${color} ${from}deg ${to}deg`;
    });
    return `conic-gradient(from 0deg, ${stops.join(", ")})`;
  }, []);

  function handleSpin(event: React.FormEvent) {
    event.preventDefault();
    if (spinning || result) return;

    const segmentIndex = Math.floor(Math.random() * SEGMENTS.length);
    const segmentCenter = segmentIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
    const fullSpins = 6 * 360;
    const finalRotation = fullSpins + (360 - segmentCenter);

    setSpinning(true);
    setRotation(finalRotation);

    window.setTimeout(() => {
      const percent = SEGMENTS[segmentIndex];
      setResult({ percent, code: `PURPICE${percent}` });
      setSpinning(false);
    }, 4000);
  }

  function handleClose() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-ice-anthracite p-6 text-center sm:p-8">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Schließen"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-ice-chrome-dark transition-colors hover:border-ice-chrome hover:text-ice-white"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        <h2 className="font-headline text-2xl font-bold">
          <span className="text-gradient-ice">Spin to Win!</span>
        </h2>

        {!result ? (
          <p className="mt-2 text-sm text-ice-chrome-dark">
            Trag deine E-Mail ein und dreh am Rad – für die Chance auf bis zu 15% Rabatt.
          </p>
        ) : (
          <p className="mt-2 text-sm text-ice-chrome-dark">
            Nice, das war&apos;s! Dein Rabatt wartet unten.
          </p>
        )}

        <div className="relative mx-auto mt-6 h-56 w-56">
          <div
            className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--color-ice-chrome)">
              <path d="M12 17L4 7h16l-8 10Z" />
            </svg>
          </div>

          <div
            className="h-full w-full rounded-full border-4 border-white/10 shadow-[0_0_30px_rgba(230,229,231,0.15)]"
            style={{
              background: gradient,
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? "transform 4s cubic-bezier(0.15, 0.85, 0.25, 1)" : "none",
            }}
          >
            {SEGMENTS.map((percent, index) => {
              const angle = index * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
              return (
                <span
                  key={index}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(0, -5.4rem) rotate(${-angle}deg)`,
                    transformOrigin: "0 0",
                  }}
                >
                  {/* Zweite Ebene zentriert den Text exakt auf dem oben berechneten
                      Punkt (statt an dessen Ecke hängen zu lassen). */}
                  <span
                    className="block -translate-x-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-wide"
                    style={{ color: index % 2 === 0 ? "#060506" : "#e6e5e7" }}
                  >
                    {percent}%
                  </span>
                </span>
              );
            })}
          </div>

          <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ice-black text-ice-chrome">
            <SparkleIcon className="h-5 w-5" />
          </div>
        </div>

        {result ? (
          <div className="mt-6 rounded-xl border border-white/10 bg-ice-black/60 p-4">
            <p className="text-sm text-ice-chrome-dark">
              Du hast <span className="font-semibold text-ice-white">{result.percent}% Rabatt</span> gewonnen!
            </p>
            <p className="mt-2 font-headline text-lg font-bold tracking-widest text-gradient-ice">
              {result.code}
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="btn-glow-chrome mt-4 w-full rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-ice-black"
            >
              Jetzt shoppen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSpin} className="mt-6 flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="deine@email.com"
              className="w-full rounded-full border border-white/15 bg-ice-black/60 px-4 py-2.5 text-sm text-ice-white placeholder:text-ice-chrome-dark/70 outline-none focus:border-ice-chrome"
            />
            <button
              type="submit"
              disabled={spinning}
              className="btn-glow-chrome w-full rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-ice-black disabled:opacity-60"
            >
              {spinning ? "Dreht sich…" : "Spin the wheel!"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" strokeLinecap="round" />
    </svg>
  );
}
