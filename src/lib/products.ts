export type Category = "watches" | "bracelets" | "earrings" | "chains" | "pendants";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  /** Erscheint in der "Best Sellers"-Sektion der jeweiligen Kategorie */
  bestseller?: boolean;
  /** Filter-Tag für "Shop by Finish" – nur bei Watches genutzt */
  finish?: string;
  /** Filter-Tag für "Shop by Material/Quality" – nur bei Bracelets genutzt */
  quality?: string;
  /** PLATZHALTER: Bildpfad in public/products/ ergänzen, sobald vorhanden */
  image?: string;
};

// ---------------------------------------------------------------------
// Filter-Optionen für "Shop by Finish" (Watches).
// PLATZHALTER – Werte/Reihenfolge frei anpassbar. Das "slug" jedes
// Filters muss mit dem "finish"-Wert der Produkte weiter unten übereinstimmen.
// ---------------------------------------------------------------------
export const finishFilters = [
  { slug: "chrome", label: "Chrome" },
  { slug: "gold", label: "Gold" },
  { slug: "two-tone", label: "Two-Tone" },
  { slug: "black", label: "Black" },
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
// WATCHES kommen bereits mit werkseitig montiertem Moissanite-Bezel und
// sind sofort tragbereit.
// ---------------------------------------------------------------------
export const products: Product[] = [
  // --- WATCHES (komplette Uhr, Bezel bereits montiert) ---
  {
    slug: "classic-chrome",
    name: "Classic Chrome",
    category: "watches",
    price: 549,
    bestseller: true,
    finish: "chrome",
  },
  {
    slug: "classic-gold",
    name: "Classic Gold",
    category: "watches",
    price: 599,
    bestseller: true,
    finish: "gold",
  },
  {
    slug: "two-tone-elite",
    name: "Two-Tone Elite",
    category: "watches",
    price: 629,
    bestseller: true,
    finish: "two-tone",
  },
  {
    slug: "full-black",
    name: "Full Black",
    category: "watches",
    price: 579,
    bestseller: true,
    finish: "black",
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
