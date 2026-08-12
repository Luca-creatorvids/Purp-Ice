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
      title="Bracelets"
      description="Best Sellers und die Auswahl nach Premium/Standard Silver bauen wir als Nächstes."
    />
  );
}
