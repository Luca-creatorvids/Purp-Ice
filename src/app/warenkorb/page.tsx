import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/ComingSoon";

export const metadata: Metadata = {
  title: "Warenkorb",
  robots: { index: false },
  alternates: { canonical: "/warenkorb" },
};

export default function WarenkorbPage() {
  return (
    <ComingSoon
      title="Warenkorb"
      description="Hier entsteht später der Checkout-Flow als Mockup (ohne echtes Zahlungs-Backend)."
    />
  );
}
