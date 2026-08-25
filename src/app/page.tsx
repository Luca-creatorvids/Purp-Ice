import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BrandIntro } from "@/components/home/BrandIntro";
import { WornBy } from "@/components/home/WornBy";
import { BestsellerSlider } from "@/components/home/BestsellerSlider";
import { TrustSection } from "@/components/home/TrustSection";
import { SocialProof } from "@/components/home/SocialProof";

export const metadata: Metadata = {
  title: "Iced Out Moissanite-Watches aus München",
  description:
    "Entdecke PURPICE: Iced Out Moissanite-Watches aus München. Gleicher Glanz wie Diamanten, fairer Preis.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <WornBy />
      <BestsellerSlider />
      <TrustSection />
      <SocialProof />
    </>
  );
}
