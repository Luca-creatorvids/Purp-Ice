// ---------------------------------------------------------------------
// Hero-Loop: Nahaufnahme einer Iced-Out-Uhr. Liegt in public/animations/
// als mp4 (breite Kompatibilität) + webm (Fallback). "null" zeigt
// stattdessen den Platzhalter mit Play-Symbol.
// ---------------------------------------------------------------------
const HERO_ANIMATION_SRC_MP4: string | null = "/animations/hero-watch.mp4";
const HERO_ANIMATION_SRC_WEBM: string | null = "/animations/hero-watch.webm";
const HERO_ANIMATION_POSTER: string | undefined = "/animations/hero-watch-poster.jpg";

// WICHTIG: Bei radial-gradient() mit expliziter Ellipsen-Größe wird die
// Prozentangabe gegen die VOLLE Breite/Höhe der Box aufgelöst, nicht die
// halbe. "50% 50%" ist also die Ellipse, die die Box exakt einbeschreibt
// (Radius = halbe Breite/Höhe -> berührt den Rand mittig auf allen vier
// Seiten). Nur bei dieser Größe erreicht der letzte Farb-Stopp
// ("transparent 100%") auch wirklich genau den physischen Rand der Box –
// bei größeren Werten (z.B. 62% oder 100%, wie zuvor hier verwendet) liegt
// der Verlauf großteils AUSSERHALB der Box, wodurch der sichtbare Teil an
// der Kante hart abgeschnitten wirkt statt weich auszulaufen (genau der
// "das ist offensichtlich ein eingefügtes Video"-Kanten-Effekt).
const EDGE_FADE_MASK =
  "radial-gradient(ellipse 50% 50% at 50% 50%, black 62%, transparent 100%)";

/**
 * Reservierter Platz ganz oben auf der Startseite (im Hero-Bereich) für
 * die Uhren-Loop-Animation. Läuft direkt auf dem Seitenhintergrund –
 * bewusst ohne Rahmen/Karte, mit weich ausgeblendetem Rand, damit es mit
 * dem schwarzen Hintergrund der Seite verschmilzt (das Video selbst hat
 * ebenfalls einen schwarzen Hintergrund).
 */
export function HeroAnimationSlot({ className = "" }: { className?: string }) {
  if (HERO_ANIMATION_SRC_MP4) {
    return (
      <video
        poster={HERO_ANIMATION_POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ maskImage: EDGE_FADE_MASK, WebkitMaskImage: EDGE_FADE_MASK }}
        className={`block w-full ${className}`}
      >
        <source src={HERO_ANIMATION_SRC_MP4} type="video/mp4" />
        {HERO_ANIMATION_SRC_WEBM && <source src={HERO_ANIMATION_SRC_WEBM} type="video/webm" />}
      </video>
    );
  }

  return (
    <div
      className={`relative flex aspect-square w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black text-ice-chrome-dark ${className}`}
    >
      <PlayGlyph className="h-14 w-14 opacity-60" />
      <span className="px-6 text-center text-xs uppercase tracking-widest">
Animation folgt
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
