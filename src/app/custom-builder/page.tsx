import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Custom Builder – Individualisiere deine Uhr",
  description:
    "Stelle deine PURPICE Uhr individuell zusammen: Gravur, Kettenlänge, Steinbesatz und mehr. Bald verfügbar.",
  alternates: { canonical: "/custom-builder" },
};

export default function CustomBuilderPage() {
  return (
    <ComingSoon
      title="Custom Builder"
      description="Hier kannst du bald deine Wunsch-Uhr konfigurieren: Gravur, Kettenlänge, Steinbesatz und Farbe – und die Anfrage direkt an uns senden."
    />
  );
}
