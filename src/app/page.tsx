import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { BestsellerSlider } from "@/components/home/BestsellerSlider";
import { TrustSection } from "@/components/home/TrustSection";
import { SocialProof } from "@/components/home/SocialProof";

export const metadata: Metadata = {
  title: "Iced Out Moissanite-Bezel-Kits aus München",
  description:
    "Entdecke PURPICE: Iced Out Moissanite-Bezel-Kits aus München, ganz einfach selbst montierbar. Gleicher Glanz wie Diamanten, fairer Preis.",
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
