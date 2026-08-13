import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Chains",
  description: "Iced Out Chains von PURPICE. Bald verfügbar.",
  alternates: { canonical: "/chains" },
};

export default function ChainsPage() {
  return (
    <ComingSoon
      current="/chains"
      title="Chains"
      description="Diese Kollektion ist noch nicht im Sortiment. Trag dich ein und wir sagen dir Bescheid, sobald es losgeht."
    />
  );
}
