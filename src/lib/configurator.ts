export type BaseModel = {
  slug: string;
  name: string;
  /** Kurzbezeichnung der Ausführung, z.B. "Schwarz PVD" */
  finish: string;
  /** Für den kleinen Farb-Swatch auf der Karte (Platzhalter-Look) */
  swatch: string;
  startPrice: number;
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
// SCHRITT 1: Basismodelle (Uhr ohne Steinbesatz)
// PLATZHALTER-DATEN – trage hier später deine echten Modelle, Preise und
// Bildpfade ein. Jeder Eintrag wird automatisch als Auswahlkarte im
// Custom Builder angezeigt, du musst am Komponenten-Code nichts ändern.
// ---------------------------------------------------------------------
export const baseModels: BaseModel[] = [
  {
    slug: "onyx-base",
    name: "Onyx Base",
    finish: "Schwarz PVD",
    swatch: "#1a1a1c",
    startPrice: 249,
  },
  {
    slug: "chrome-base",
    name: "Chrome Base",
    finish: "Silber Edelstahl",
    swatch: "#c9cad1",
    startPrice: 249,
  },
  {
    slug: "gold-base",
    name: "Gold Base",
    finish: "Gold vergoldet",
    swatch: "#d4af6a",
    startPrice: 279,
  },
  {
    slug: "two-tone-base",
    name: "Two-Tone Base",
    finish: "Silber/Gold Bicolor",
    swatch: "linear-gradient(135deg, #c9cad1 50%, #d4af6a 50%)",
    startPrice: 269,
  },
];

// ---------------------------------------------------------------------
// SCHRITT 2: Moissanite-Rahmen/Bezel-Stile
// PLATZHALTER-DATEN – wird im nächsten Bauschritt (Rahmen-Auswahl +
// Live-Vorschau) verwendet. Struktur schon jetzt angelegt, damit du bei
// Bedarf schon eigene Namen/Preise eintragen kannst.
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
