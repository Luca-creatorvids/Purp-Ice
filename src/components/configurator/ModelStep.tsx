import { baseModels } from "@/lib/configurator";
import { ModelCard } from "./ModelCard";

type ModelStepProps = {
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
};

export function ModelStep({ selectedSlug, onSelect }: ModelStepProps) {
  return (
    <section>
      <h2 className="font-headline text-2xl font-bold sm:text-3xl">
        Schritt 1 — Wähle dein Basismodell
      </h2>
      <p className="mt-2 max-w-xl text-sm text-ice-chrome-dark">
        Die Uhr ohne Steinbesatz. Im nächsten Schritt wählst du deinen
        Moissanite-Rahmen dazu.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {baseModels.map((model) => (
          <ModelCard
            key={model.slug}
            model={model}
            selected={model.slug === selectedSlug}
            onSelect={() => onSelect(model.slug)}
          />
        ))}
      </div>
    </section>
  );
}
