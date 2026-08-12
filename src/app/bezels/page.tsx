import type { Metadata } from "next";
import { BezelsShopSection } from "@/components/shop/BezelsShopSection";

export const metadata: Metadata = {
  title: "Bezels",
  description:
    "Moissanite-Bezel-Kits von PURPICE – inklusive Schraubenzieher zur Selbstmontage auf deiner eigenen Uhr. Best Sellers und Auswahl nach Finish – Chrome, Gold, Two-Tone.",
  alternates: { canonical: "/bezels" },
};

export default function BezelsPage() {
  return <BezelsShopSection />;
}
