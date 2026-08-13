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
      current="/pendants"
      title="Pendants"
      description="Diese Kollektion ist noch nicht im Sortiment. Trag dich ein und wir sagen dir Bescheid, sobald es losgeht."
    />
  );
}
