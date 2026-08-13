import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Earrings",
  description: "Iced Out Earrings von PURPICE. Bald verfügbar.",
  alternates: { canonical: "/earrings" },
};

export default function EarringsPage() {
  return (
    <ComingSoon
      current="/earrings"
      title="Earrings"
      description="Diese Kollektion ist noch nicht im Sortiment. Trag dich ein und wir sagen dir Bescheid, sobald es losgeht."
    />
  );
}
