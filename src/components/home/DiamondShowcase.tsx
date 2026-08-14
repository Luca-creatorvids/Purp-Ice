import Image from "next/image";

// ---------------------------------------------------------------------
// Bildpfad zum Diamant-/Moissanite-Steine-Bild. Neues Bild einfach in
// public/images/ ablegen und den Pfad hier eintragen (oder "null" für
// einen leeren Bereich, falls du das Bild mal entfernen willst).
// ---------------------------------------------------------------------
const DIAMOND_IMAGE_SRC: string | null = null;

// Seitenverhältnis des aktuellen Bilds (Hochformat-Nahaufnahme): 768 x 1376 px.
const DIAMOND_IMAGE_RATIO = "768/1376";

// Gleicher Trick wie bei der Hero-Animation: der Rand des Bilds wird
// weich ausgeblendet statt hart abgeschnitten, damit es nahtlos mit dem
// schwarzen Seitenhintergrund verschmilzt – kein sichtbarer Rahmen/Kasten.
const EDGE_FADE_MASK =
  "radial-gradient(ellipse 65% 65% at 50% 50%, black 55%, transparent 100%)";

/**
 * Bildplatz unter der "Diamant-Optik. Fairer Preis."-Überschrift für ein
 * Foto der Moissanite-/Diamant-Steine. Bewusst ohne Rahmen/Karte, mit
 * weich ausgeblendetem Rand, damit es mit dem schwarzen Hintergrund der
 * Seite verschmilzt.
 */
export function DiamondShowcase() {
  if (!DIAMOND_IMAGE_SRC) return null;

  return (
    <div
      className="relative mx-auto mt-10 w-full max-w-xs sm:max-w-sm"
      style={{ aspectRatio: DIAMOND_IMAGE_RATIO }}
    >
      <Image
        src={DIAMOND_IMAGE_SRC}
        alt="Moissanite-Diamant im Nahaufnahme-Funkeln"
        fill
        priority
        className="object-contain"
        style={{ maskImage: EDGE_FADE_MASK, WebkitMaskImage: EDGE_FADE_MASK }}
      />
    </div>
  );
}
