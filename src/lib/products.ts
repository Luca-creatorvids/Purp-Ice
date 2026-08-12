export type Category = "bezels" | "bracelets" | "earrings" | "chains" | "pendants";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  /** Erscheint in der "Best Sellers"-Sektion der jeweiligen Kategorie */
  bestseller?: boolean;
  /** Filter-Tag für "Shop by Finish" – nur bei Bezels genutzt */
  finish?: string;
  /** Filter-Tag für "Shop by Material/Quality" – nur bei Bracelets genutzt */
  quality?: string;
  /** PLATZHALTER: Bildpfad in public/products/ ergänzen, sobald vorhanden */
  image?: string;
};

// ---------------------------------------------------------------------
// Filter-Optionen für "Shop by Finish" (Bezels).
// PLATZHALTER – Werte/Reihenfolge frei anpassbar. Das "slug" jedes
// Filters muss mit dem "finish"-Wert der Produkte weiter unten übereinstimmen.
// ---------------------------------------------------------------------
export const finishFilters = [
  { slug: "chrome", label: "Chrome" },
  { slug: "gold", label: "Gold" },
  { slug: "two-tone", label: "Two-Tone" },
];

// ---------------------------------------------------------------------
// Filter-Optionen für "Shop by Material/Quality" (Bracelets).
// PLATZHALTER – wird in einem der nächsten Schritte für die Bracelets-Seite
// verwendet.
// ---------------------------------------------------------------------
export const braceletQualityFilters = [
  { slug: "premium-silver", label: "Premium Silver" },
  { slug: "standard-silver", label: "Standard Silver" },
];

// ---------------------------------------------------------------------
// PRODUKTE – PLATZHALTER-DATEN. Trage hier später deine echten Produkte,
// Preise und Bildpfade ein (Bilder in public/products/ ablegen). Jeder
// Eintrag erscheint automatisch auf der passenden Kategorie-Seite bzw. in
// der Best-Sellers-Sektion, am Komponenten-Code musst du nichts ändern.
//
// WICHTIG: PURPICE verkauft keine kompletten Uhren, sondern nur die
// Moissanite-Bezel-Kits (Rahmen + Schraubenzieher) zur Selbstmontage auf
// der eigenen Uhr des Kunden.
// ---------------------------------------------------------------------
export const products: Product[] = [
  // --- BEZELS (Rahmen-Kits inkl. Schraubenzieher zur Selbstmontage) ---
  {
    slug: "classic-pave-chrome",
    name: "Classic Pavé",
    category: "bezels",
    price: 249,
    bestseller: true,
    finish: "chrome",
  },
  {
    slug: "classic-pave-gold",
    name: "Classic Pavé",
    category: "bezels",
    price: 269,
    finish: "gold",
  },
  {
    slug: "twisted-rope-two-tone",
    name: "Twisted Rope",
    category: "bezels",
    price: 279,
    bestseller: true,
    finish: "two-tone",
  },
  {
    slug: "spike-edge-gold",
    name: "Spike Edge",
    category: "bezels",
    price: 299,
    bestseller: true,
    finish: "gold",
  },
  {
    slug: "spike-edge-chrome",
    name: "Spike Edge",
    category: "bezels",
    price: 289,
    finish: "chrome",
  },
  {
    slug: "baguette-cut-two-tone",
    name: "Baguette Cut",
    category: "bezels",
    price: 329,
    bestseller: true,
    finish: "two-tone",
  },
  {
    slug: "baguette-cut-chrome",
    name: "Baguette Cut",
    category: "bezels",
    price: 309,
    finish: "chrome",
  },

  // --- BRACELETS ---
  // PLATZHALTER – wird in einem der nächsten Schritte auf einer eigenen
  // Bracelets-Seite angezeigt (Best Sellers + Shop by Material/Quality).
  {
    slug: "cuban-link-premium",
    name: "Cuban Link Premium",
    category: "bracelets",
    price: 199,
    bestseller: true,
    quality: "premium-silver",
  },
  {
    slug: "tennis-classic",
    name: "Tennis Classic",
    category: "bracelets",
    price: 129,
    bestseller: true,
    quality: "standard-silver",
  },
  {
    slug: "iced-cuban-standard",
    name: "Iced Cuban Standard",
    category: "bracelets",
    price: 109,
    quality: "standard-silver",
  },
  {
    slug: "moissanite-tennis-premium",
    name: "Moissanite Tennis Premium",
    category: "bracelets",
    price: 249,
    quality: "premium-silver",
  },
];

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((product) => product.category === category);
}

export function getBestsellers(category: Category): Product[] {
  return products.filter((product) => product.category === category && product.bestseller);
}
