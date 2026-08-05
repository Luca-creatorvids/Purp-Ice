import type { Metadata } from "next";
import { CustomBuilder } from "@/components/configurator/CustomBuilder";

export const metadata: Metadata = {
  title: "Custom Builder – Individualisiere deine Uhr",
  description:
    "Stelle deine PURPICE Uhr in zwei Schritten individuell zusammen: Basismodell wählen, Moissanite-Rahmen dazu wählen.",
  alternates: { canonical: "/custom-builder" },
};

export default function CustomBuilderPage() {
  return <CustomBuilder />;
}
