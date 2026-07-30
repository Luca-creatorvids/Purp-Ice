import Image from "next/image";

type ProductVisualProps = {
  /**
   * PLATZHALTER: Sobald du echte Produktfotos hast, hier den Bildpfad
   * uebergeben (z.B. "/products/chrono-01.jpg"). Bild einfach in den
   * Ordner "public/products/" legen. Ohne "src" wird automatisch der
   * violette Platzhalter mit Uhren-Icon angezeigt.
   */
  src?: string;
  alt: string;
  className?: string;
};

/**
 * Zeigt ein Produktbild (oder einen Platzhalter) inkl. Hover-Sparkle-Effekt.
 * Der Sparkle-Effekt kommt aus der Klasse ".sparkle-layer" in globals.css.
 */
export function ProductVisual({ src, alt, className = "" }: ProductVisualProps) {
  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ice-chrome-dark">
          <WatchGlyph className="h-16 w-16 opacity-70 transition-transform duration-500 group-hover:scale-110" />
          <span className="px-6 text-center text-xs uppercase tracking-widest">
            Produktbild folgt
          </span>
        </div>
      )}

      {/* Funkel-Overlay, aktiv bei Hover ueber das Bild */}
      <div className="sparkle-layer" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}

function WatchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="20" y="4" width="24" height="10" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="20" y="50" width="24" height="10" rx="2" fill="currentColor" opacity="0.5" />
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M32 22V32L39 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
