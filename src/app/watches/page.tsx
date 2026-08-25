import type { Metadata } from "next";
import { WatchesShopSection } from "@/components/shop/WatchesShopSection";

export const metadata: Metadata = {
  title: "Watches",
  description:
    "Iced Out Moissanite-Uhren von PURPICE – werkseitig montierter Bezel, sofort tragbereit. Best Sellers und Auswahl nach Finish – Chrome, Gold, Two-Tone, Black.",
  alternates: { canonical: "/watches" },
};

export default function WatchesPage() {
  return <WatchesShopSection />;
}
