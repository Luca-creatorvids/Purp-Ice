import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Über uns – Die PURPICE Story",
  description:
    "Warum München, warum Moissanite: die Geschichte, Mission und Werte hinter PURPICE. Bald verfügbar.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <ComingSoon
      title="Über uns"
      description="Unsere Brand Story: warum München, warum Moissanite, und wofür PURPICE steht. Kommt als Nächstes."
    />
  );
}
