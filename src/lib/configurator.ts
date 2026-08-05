export type WatchShape = {
  slug: string;
  name: string;
  /** Kurzbeschreibung der Case-Form */
  description: string;
  startPrice: number;
  /** PLATZHALTER: Bildpfad in public/products/ ergänzen, sobald vorhanden */
  image?: string;
};

export type Colorway = {
  slug: string;
  name: string;
  /** Für den Farb-Swatch auf der Karte + Live-Vorschau-Tönung (Platzhalter-Look) */
  swatch: string;
  /** Aufpreis ggü. dem Case-Startpreis, z.B. für Gold. 0 = kein Aufpreis. */
  surcharge: number;
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
// SCHRITT 1a: Case-Formen (robuste Sport-/Streetwear-Gehäuse, wie z.B.
// bei bekannten "iced out" Digitaluhren-Customs).
// PLATZHALTER-DATEN – trage hier später deine echten Case-Modelle, Preise
// und Bildpfade ein. Jeder Eintrag erscheint automatisch als Auswahlkarte,
// am Komponenten-Code musst du dafür nichts ändern.
// ---------------------------------------------------------------------
export const watchShapes: WatchShape[] = [
  {
    slug: "sport-square",
    name: "Sport Square",
    description: "Eckiges, robustes Sport-Gehäuse",
    startPrice: 249,
  },
  {
    slug: "classic-round",
    name: "Classic Round",
    description: "Rundes Gehäuse, klassische Silhouette",
    startPrice: 229,
  },
  {
    slug: "octagon-bold",
    name: "Octagon Bold",
    description: "Achteckiges Gehäuse, maximaler Auftritt",
    startPrice: 269,
  },
];

// ---------------------------------------------------------------------
// SCHRITT 1b: Farben/Ausführungen – gilt für alle Case-Formen.
// PLATZHALTER-DATEN – "surcharge" ist ein optionaler Aufpreis (z.B. für
// Gold), 0 wenn kein Aufpreis anfallen soll.
// ---------------------------------------------------------------------
export const colorways: Colorway[] = [
  {
    slug: "black",
    name: "Schwarz",
    swatch: "#1a1a1c",
    surcharge: 0,
  },
  {
    slug: "silver",
    name: "Silber",
    swatch: "#c9cad1",
    surcharge: 0,
  },
  {
    slug: "gold",
    name: "Gold",
    swatch: "#d4af6a",
    surcharge: 20,
  },
  {
    slug: "two-tone",
    name: "Two-Tone",
    swatch: "linear-gradient(135deg, #c9cad1 50%, #d4af6a 50%)",
    surcharge: 15,
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
