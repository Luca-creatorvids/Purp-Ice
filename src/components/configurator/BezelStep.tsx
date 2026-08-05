import { bezelStyles } from "@/lib/configurator";
import { BezelCard } from "./BezelCard";

type BezelStepProps = {
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
};

export function BezelStep({ selectedSlug, onSelect }: BezelStepProps) {
  return (
    <section className="mt-12 border-t border-white/10 pt-10">
      <h2 className="font-headline text-2xl font-bold sm:text-3xl">
        Schritt 2 — Moissanite-Rahmen
      </h2>
      <p className="mt-2 max-w-xl text-sm text-ice-chrome-dark">
        Der Steinbesatz rund um dein Case. Die Vorschau rechts zeigt deine
        Kombination.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {bezelStyles.map((bezel) => (
          <BezelCard
            key={bezel.slug}
            bezel={bezel}
            selected={bezel.slug === selectedSlug}
            onSelect={() => onSelect(bezel.slug)}
          />
        ))}
      </div>
    </section>
  );
}
