import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Pendants",
  description: "Iced Out Pendants von PURPICE. Bald verfügbar.",
  alternates: { canonical: "/pendants" },
};

export default function PendantsPage() {
  return (
    <ComingSoon
      title="Pendants"
      description="Diese Kollektion ist noch nicht im Sortiment. Eine eigene Coming-Soon-Seite mit Newsletter-Anmeldung folgt als Nächstes."
    />
  );
}
