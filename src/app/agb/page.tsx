import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "AGB",
  robots: { index: false },
  alternates: { canonical: "/agb" },
};

export default function AgbPage() {
  return <LegalPlaceholder title="Allgemeine Geschäftsbedingungen" />;
}
