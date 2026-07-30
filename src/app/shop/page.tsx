import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Shop – Iced Out Uhren",
  description:
    "Entdecke alle PURPICE Uhren: filterbar nach Kettenlänge, Uhrenart und Preis. Bald verfügbar.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <ComingSoon
      title="Der Shop"
      description="Hier entsteht als Nächstes unsere filterbare Produktübersicht – nach Kettenlänge, Uhrenart und Preis sortierbar."
    />
  );
}
