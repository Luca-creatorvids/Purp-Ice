import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return <LegalPlaceholder title="Datenschutzerklärung" />;
}
