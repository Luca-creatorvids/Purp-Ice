export type WatchColor = {
  slug: string;
  name: string;
  /** Für den Farb-Swatch + Live-Vorschau-Tönung (Platzhalter-Look) */
  swatch: string;
  /** Preis der Uhr in dieser Farbe (ohne Rahmen) */
  price: number;
  /** PLATZHALTER: Bildpfad in public/products/ ergänzen, sobald vorhanden */
  image?: string;
};

export type BezelStyle = {
  slug: string;
  name: string;
  description: string;
  surcharge: number;
  /** PLATZHALTER: Bildpfad (Nahaufnahme des Rahmens) in public/bezels/ ergänzen */
  image?: string;
};

// ---------------------------------------------------------------------
// SCHRITT 1: Farben der Uhr (nur ein Basismodell, verschiedene Ausführungen)
// PLATZHALTER-DATEN – trage hier später die echten Preise und Bildpfade
// ein. Jeder Eintrag erscheint automatisch als große Auswahlkarte, am
// Komponenten-Code musst du dafür nichts ändern.
// ---------------------------------------------------------------------
export const watchColors: WatchColor[] = [
  {
    slug: "black",
    name: "Schwarz",
    swatch: "#1a1a1c",
    price: 249,
  },
  {
    slug: "silver",
    name: "Silber",
    swatch: "#c9cad1",
    price: 249,
  },
  {
    slug: "gold",
    name: "Gold",
    swatch: "#d4af6a",
    price: 269,
  },
  {
    slug: "two-tone",
    name: "Two-Tone",
    swatch: "linear-gradient(135deg, #c9cad1 50%, #d4af6a 50%)",
    price: 259,
  },
];

// ---------------------------------------------------------------------
// SCHRITT 2: Moissanite-Rahmen/Bezel-Stile
// PLATZHALTER-DATEN – trage hier später deine echten Rahmen-Stile, Preise
// und Bildpfade ein.
// ---------------------------------------------------------------------
export const bezelStyles: BezelStyle[] = [
  {
    slug: "classic-pave",
    name: "Classic Pavé",
    description: "Dicht besetzter Rahmen, gleichmäßiges Rundum-Funkeln.",
    surcharge: 249,
  },
  {
    slug: "twisted-rope",
    name: "Twisted Rope",
    description: "Gedrehtes Seil-Muster mit Steinbesatz entlang der Wellen.",
    surcharge: 279,
  },
  {
    slug: "spike-edge",
    name: "Spike Edge",
    description: "Kantiger, spitz zulaufender Besatz für einen aggressiven Look.",
    surcharge: 299,
  },
  {
    slug: "baguette-cut",
    name: "Baguette Cut",
    description: "Rechteckig geschliffene Steine für einen cleanen, edlen Auftritt.",
    surcharge: 329,
  },
];
