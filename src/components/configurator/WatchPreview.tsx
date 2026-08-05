import type { BezelStyle, Colorway, WatchShape } from "@/lib/configurator";

type WatchPreviewProps = {
  shape: WatchShape | null;
  color: Colorway | null;
  bezel: BezelStyle | null;
  size?: "sm" | "lg";
};

// Passt die Form der Platzhalter-Vorschau grob an die gewählte Case-Form an,
// solange noch keine echten Produktfotos hinterlegt sind.
const SHAPE_CLASS: Record<string, string> = {
  "sport-square": "rounded-2xl",
  "classic-round": "rounded-full",
  "octagon-bold": "[clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]",
};

/**
 * Live-Vorschau der aktuellen Konfiguration: Case-Form (grob angedeutet),
 * gewählte Farbe (als Rahmen-Ring um die Vorschau) und – sobald gewählt –
 * der Moissanite-Rahmen (als funkelnder Ring-Overlay). Sobald es echte
 * Produktfotos gibt, kann diese Komponente durch eine Bild-Überlagerung
 * (Case-Foto + Rahmen-Foto übereinander) ersetzt werden.
 */
export function WatchPreview({ shape, color, bezel, size = "lg" }: WatchPreviewProps) {
  const shapeClass = shape ? SHAPE_CLASS[shape.slug] ?? "rounded-2xl" : "rounded-2xl";
  const dimension = size === "lg" ? "aspect-square w-full" : "h-16 w-16";

  return (
    <div className={`relative ${dimension}`}>
      {/* Farb-Ring: zeigt die gewählte Ausführung (Schwarz/Silber/Gold/...) */}
      <div
        className={`h-full w-full p-[3px] transition-colors duration-300 ${shapeClass}`}
        style={{ background: color ? color.swatch : "rgba(255,255,255,0.12)" }}
      >
        <div
          className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black ${shapeClass}`}
        >
          {shape ? (
            <WatchGlyph className={`${size === "lg" ? "h-16 w-16" : "h-7 w-7"} text-ice-chrome-dark opacity-80`} />
          ) : (
            <span className="px-4 text-center text-[10px] uppercase tracking-widest text-ice-chrome-dark">
              Case wählen
            </span>
          )}

          {bezel && <div className="sparkle-layer opacity-100" aria-hidden="true" />}
        </div>
      </div>

      {/* Rahmen-Overlay: funkelnder Ring, sobald ein Moissanite-Bezel gewählt ist */}
      {bezel && <BezelRing className={shapeClass} />}
    </div>
  );
}

function BezelRing({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
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
