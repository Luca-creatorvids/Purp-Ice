import Image from "next/image";

// ---------------------------------------------------------------------
// Trage hier den Pfad zum Diamant-/Moissanite-Steine-Bild ein, sobald
// du es hast. Bilddatei einfach in public/images/ ablegen und den Pfad
// hier eintragen, z.B. "/images/diamonds.jpg". Solange hier "null"
// steht, bleibt der Bereich leer.
// ---------------------------------------------------------------------
const DIAMOND_IMAGE_SRC: string | null = null;

// Gleicher Trick wie bei der Hero-Animation: der Rand des Bilds wird
// weich ausgeblendet statt hart abgeschnitten, damit es nahtlos mit dem
// schwarzen Seitenhintergrund verschmilzt – kein sichtbarer Rahmen/Kasten.
const EDGE_FADE_MASK =
  "radial-gradient(ellipse 70% 70% at 50% 50%, black 55%, transparent 100%)";

/**
 * Bildplatz unter der "Diamant-Optik. Fairer Preis."-Überschrift für ein
 * Foto der Moissanite-/Diamant-Steine. Bewusst ohne Rahmen/Karte, mit
 * weich ausgeblendetem Rand, damit es mit dem schwarzen Hintergrund der
 * Seite verschmilzt.
 */
export function DiamondShowcase() {
  if (!DIAMOND_IMAGE_SRC) return null;

  return (
    <div className="relative mx-auto mt-10 aspect-[16/9] w-full max-w-2xl">
      <Image
        src={DIAMOND_IMAGE_SRC}
        alt="Moissanite-Steine im Nahaufnahme-Funkeln"
        fill
        className="object-contain"
        style={{ maskImage: EDGE_FADE_MASK, WebkitMaskImage: EDGE_FADE_MASK }}
      />
    </div>
  );
}
