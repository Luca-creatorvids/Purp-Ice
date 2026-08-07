import type { BezelStyle, WatchColor } from "@/lib/configurator";

type WatchPreviewProps = {
  color: WatchColor | null;
  bezel: BezelStyle | null;
  size?: "sm" | "lg";
};

/**
 * Live-Vorschau der aktuellen Konfiguration: gewählte Farbe (als Ring um
 * die Vorschau) und – sobald gewählt – der Moissanite-Rahmen (als
 * funkelnder Ring-Overlay). Sobald es echte Produktfotos gibt, kann diese
 * Komponente durch eine Bild-Überlagerung (Uhren-Foto + Rahmen-Foto
 * übereinander) ersetzt werden.
 */
export function WatchPreview({ color, bezel, size = "lg" }: WatchPreviewProps) {
  const dimension = size === "lg" ? "aspect-square w-full" : "h-16 w-16";

  return (
    <div className={`relative ${dimension}`}>
      {/* Farb-Ring: zeigt die gewählte Ausführung (Schwarz/Silber/Gold/...) */}
      <div
        className="h-full w-full rounded-2xl p-[3px] transition-colors duration-300"
        style={{ background: color ? color.swatch : "rgba(255,255,255,0.12)" }}
      >
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black">
          {color ? (
            <WatchGlyph className={`${size === "lg" ? "h-16 w-16" : "h-7 w-7"} text-ice-chrome-dark opacity-80`} />
          ) : (
            <span className="px-4 text-center text-[10px] uppercase tracking-widest text-ice-chrome-dark">
              Farbe wählen
            </span>
          )}

          {bezel && <div className="sparkle-layer opacity-100" aria-hidden="true" />}
        </div>
      </div>

      {/* Rahmen-Overlay: funkelnder Ring, sobald ein Moissanite-Bezel gewählt ist */}
      {bezel && <BezelRing />}
    </div>
  );
}

function BezelRing() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute inset-0 h-full w-full rounded-2xl"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke="var(--color-ice-chrome)"
        strokeWidth="2"
        strokeDasharray="3 4"
        opacity="0.85"
      />
    </svg>
  );
}

function WatchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="20" y="4" width="24" height="10" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="20" y="50" width="24" height="10" rx="2" fill="currentColor" opacity="0.5" />
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M32 22V32L39 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
