import { Reveal } from "@/components/ui/Reveal";
import { DiamondShowcase } from "./DiamondShowcase";

export function BrandIntro() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
      <Reveal>
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          Diamant-Optik. <span className="text-gradient-ice">Fairer Preis.</span>
        </h2>
        <DiamondShowcase />
      </Reveal>
    </section>
  );
}
