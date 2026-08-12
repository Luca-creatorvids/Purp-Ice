export type Category = "watches" | "bracelets" | "earrings" | "chains" | "pendants";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  /** Erscheint in der "Best Sellers"-Sektion der jeweiligen Kategorie */
  bestseller?: boolean;
  /** Filter-Tag für "Shop by Bezel" – nur bei Watches genutzt */
  bezel?: string;
  /** Filter-Tag für "Shop by Material/Quality" – nur bei Bracelets genutzt */
  quality?: string;
  /** PLATZHALTER: Bildpfad in public/products/ ergänzen, sobald vorhanden */
  image?: string;
};

// ---------------------------------------------------------------------
// Filter-Optionen für "Shop by Bezel" (Watches).
// PLATZHALTER – Werte/Reihenfolge frei anpassbar. Das "slug" jedes
// Filters muss mit dem "bezel"-Wert der Produkte weiter unten übereinstimmen.
// ---------------------------------------------------------------------
export const bezelFilters = [
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
// ---------------------------------------------------------------------
export const products: Product[] = [
  // --- WATCHES ---
  {
    slug: "moon-chrono-iced",
    name: "Moon Chrono Iced",
    category: "watches",
    price: 349,
    bestseller: true,
    bezel: "chrome",
  },
  {
    slug: "full-ice-classic",
    name: "Full Ice Classic",
    category: "watches",
    price: 429,
    bestseller: true,
    bezel: "two-tone",
  },
  {
    slug: "midnight-chrome-edition",
    name: "Midnight Chrome Edition",
    category: "watches",
    price: 499,
    bestseller: true,
    bezel: "gold",
  },
  {
    slug: "silver-flex-chain-watch",
    name: "Silver Flex Chain Watch",
    category: "watches",
    price: 299,
    bestseller: true,
    bezel: "chrome",
  },
  {
    slug: "spike-bezel-classic",
    name: "Spike Bezel Classic",
    category: "watches",
    price: 379,
    bezel: "gold",
  },
  {
    slug: "rope-edge-two-tone",
    name: "Rope Edge Two-Tone",
    category: "watches",
    price: 359,
    bezel: "two-tone",
  },
  {
    slug: "pave-chrome-classic",
    name: "Pavé Chrome Classic",
    category: "watches",
    price: 319,
    bezel: "chrome",
  },
  {
    slug: "baguette-gold-edition",
    name: "Baguette Gold Edition",
    category: "watches",
    price: 459,
    bezel: "gold",
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
