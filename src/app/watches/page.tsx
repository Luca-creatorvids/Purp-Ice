import type { Metadata } from "next";
import { WatchesShopSection } from "@/components/shop/WatchesShopSection";

export const metadata: Metadata = {
  title: "Watches",
  description:
    "Iced Out Uhren mit Moissanite-Bezel von PURPICE. Best Sellers und Auswahl nach Bezel-Stil – Chrome, Gold, Two-Tone.",
  alternates: { canonical: "/watches" },
};

export default function WatchesPage() {
  return <WatchesShopSection />;
}
