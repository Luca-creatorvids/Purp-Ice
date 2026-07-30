export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  /** PLATZHALTER: Bildpfad in public/products/ ergaenzen, sobald vorhanden */
  image?: string;
};

// PLATZHALTER-PRODUKTDATEN – bitte durch echte Produkte, Preise und
// Bilder ersetzen, sobald diese verfuegbar sind.
export const bestsellers: Product[] = [
  {
    slug: "moon-chrono-iced",
    name: "Moon Chrono Iced",
    category: "Herrenuhr",
    price: 349,
  },
  {
    slug: "full-ice-classic",
    name: "Full Ice Classic",
    category: "Unisex-Uhr",
    price: 429,
  },
  {
    slug: "midnight-chrome-edition",
    name: "Midnight Chrome Edition",
    category: "Limited Edition",
    price: 499,
  },
  {
    slug: "silver-flex-chain-watch",
    name: "Silver Flex Chain Watch",
    category: "Damenuhr",
    price: 299,
  },
];
