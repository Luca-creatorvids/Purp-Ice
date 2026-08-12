// ---------------------------------------------------------------------
// Trage hier den Pfad zu deiner Bezel-Animation ein. Video-Datei liegt in
// public/animations/ – neue Animation einfach dort ablegen und Pfad hier
// anpassen. "null" zeigt stattdessen den Platzhalter mit Play-Symbol.
//
// HINWEIS: Das vorherige Video zeigte eine Casio G-Shock samt Logo – da
// PURPICE keine kompletten (fremdmarkigen) Uhren verkauft, ist hier
// bewusst wieder "null" gesetzt. Neues Video ohne fremdes Marken-Logo
// hier eintragen, sobald verfügbar (z.B. Nahaufnahme nur vom Bezel).
// ---------------------------------------------------------------------
const HERO_ANIMATION_SRC: string | null = null;
const HERO_ANIMATION_POSTER: string | undefined = undefined;

// Blendet den Rand des Videos weich aus, statt ihn hart abzuschneiden –
// dadurch verschmilzt das rechteckige Video optisch mit dem schwarzen
// Seitenhintergrund, ohne dass ein "Kasten" zu sehen ist.
const EDGE_FADE_MASK =
  "radial-gradient(ellipse 62% 62% at 50% 50%, black 45%, transparent 100%)";

/**
 * Reservierter Platz ganz oben auf der Startseite (im Hero-Bereich) für
 * eine Bezel-Animation. Sobald HERO_ANIMATION_SRC gesetzt ist, läuft das
 * Video direkt auf dem Seitenhintergrund – bewusst ohne Rahmen/Karte,
 * mit weich ausgeblendetem Rand, damit es mit dem schwarzen Hintergrund
 * der Seite verschmilzt (das Video selbst hat ebenfalls einen schwarzen
 * Hintergrund).
 */
export function WatchAnimationSlot({ className = "" }: { className?: string }) {
  if (HERO_ANIMATION_SRC) {
    return (
      <video
        src={HERO_ANIMATION_SRC}
        poster={HERO_ANIMATION_POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ maskImage: EDGE_FADE_MASK, WebkitMaskImage: EDGE_FADE_MASK }}
        className={`block w-full ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative flex aspect-square w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black text-ice-chrome-dark ${className}`}
    >
      <PlayGlyph className="h-14 w-14 opacity-60" />
      <span className="px-6 text-center text-xs uppercase tracking-widest">
        Bezel-Animation folgt
      </span>
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
