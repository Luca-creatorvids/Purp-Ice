import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiere PURPICE aus München: Kontaktformular, Social Media und Standort. Bald verfügbar.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <ComingSoon
      title="Kontakt"
      description="Unser Kontaktformular, Social-Media-Links und unser Standort in München folgen hier."
    />
  );
}
