// ---------------------------------------------------------------------
// PLATZHALTER: Trage hier den Pfad zu deiner Uhren-Animation ein, sobald
// du eine hast, z.B. "/animations/hero-watch.mp4". Die Videodatei dafür
// einfach in den Ordner "public/animations/" legen. Unterstützt werden
// normale Video-Dateien (MP4/WebM) – sie laufen automatisch, stumm und
// in Dauerschleife. Solange hier "null" steht, zeigt die Startseite an
// dieser Stelle einen Platzhalter.
// ---------------------------------------------------------------------
const HERO_ANIMATION_SRC: string | null = null;

/**
 * Reservierter Platz ganz oben auf der Startseite (im Hero-Bereich) für
 * eine Uhren-Animation. Sobald HERO_ANIMATION_SRC gesetzt ist, wird das
 * Video automatisch anstelle des Platzhalters angezeigt.
 */
export function WatchAnimationSlot({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black ${className}`}
    >
      {HERO_ANIMATION_SRC ? (
        <video
          src={HERO_ANIMATION_SRC}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ice-chrome-dark">
          <PlayGlyph className="h-14 w-14 opacity-60" />
          <span className="px-6 text-center text-xs uppercase tracking-widest">
            Uhren-Animation folgt
          </span>
        </div>
      )}
      <div className="sparkle-layer" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}

function PlayGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2" />
      <path d="M27 23l14 9-14 9V23z" fill="currentColor" />
    </svg>
  );
}
