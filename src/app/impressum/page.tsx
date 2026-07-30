import type { Metadata } from "next";
import { LegalPlaceholder } from "@/components/ui/LegalPlaceholder";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return <LegalPlaceholder title="Impressum" />;
}
