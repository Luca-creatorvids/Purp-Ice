import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Bracelets",
  description: "Iced Out Bracelets von PURPICE – Best Sellers und Auswahl nach Material/Quality. Bald verfügbar.",
  alternates: { canonical: "/bracelets" },
};

export default function BraceletsPage() {
  return (
    <ComingSoon
      current="/bracelets"
      title="Bracelets"
      description="Diese Kollektion ist noch nicht im Sortiment. Trag dich ein und wir sagen dir Bescheid, sobald es losgeht."
    />
  );
}
