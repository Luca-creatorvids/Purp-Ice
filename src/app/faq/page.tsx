import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen",
  description:
    "Was ist Moissanite? Versand, Lieferzeiten, Rückgabe und Garantie bei PURPICE. Bald verfügbar.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <ComingSoon
      title="Häufige Fragen"
      description="Antworten zu Moissanite, Versand, Lieferzeiten, Rückgabe, Garantie und Pflegehinweisen folgen hier."
    />
  );
}
