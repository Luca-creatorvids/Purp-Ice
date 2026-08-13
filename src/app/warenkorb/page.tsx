import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Warenkorb",
  robots: { index: false },
  alternates: { canonical: "/warenkorb" },
};

export default function WarenkorbPage() {
  return <CartView />;
}
