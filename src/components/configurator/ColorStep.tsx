import { watchColors } from "@/lib/configurator";
import { ColorCard } from "./ColorCard";

type ColorStepProps = {
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
};

export function ColorStep({ selectedSlug, onSelect }: ColorStepProps) {
  return (
    <section>
      <h2 className="font-headline text-2xl font-bold sm:text-3xl">
        Schritt 1 — Wähle deine Farbe
      </h2>
      <p className="mt-2 max-w-xl text-sm text-ice-chrome-dark">
        Deine Uhr ohne Steinbesatz. Im nächsten Schritt wählst du deinen
        Moissanite-Rahmen dazu.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {watchColors.map((color) => (
          <ColorCard
            key={color.slug}
            color={color}
            selected={color.slug === selectedSlug}
            onSelect={() => onSelect(color.slug)}
          />
        ))}
      </div>
    </section>
  );
}
