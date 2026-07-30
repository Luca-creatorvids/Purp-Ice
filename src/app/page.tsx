import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { BestsellerSlider } from "@/components/home/BestsellerSlider";
import { TrustSection } from "@/components/home/TrustSection";
import { SocialProof } from "@/components/home/SocialProof";

export const metadata: Metadata = {
  title: "Iced Out Custom-Uhren mit Moissanite aus München",
  description:
    "Entdecke PURPICE: Iced Out Custom-Uhren mit Moissanite-Steinen aus München. Gleicher Glanz wie Diamanten, fairer Preis. Jetzt individualisieren.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <BestsellerSlider />
      <TrustSection />
      <SocialProof />
    </>
  );
}
