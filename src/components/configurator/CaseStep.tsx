import { watchShapes, colorways } from "@/lib/configurator";
import { ShapeCard } from "./ShapeCard";
import { ColorPicker } from "./ColorPicker";

type CaseStepProps = {
  selectedShapeSlug: string | null;
  selectedColorSlug: string | null;
  onSelectShape: (slug: string) => void;
  onSelectColor: (slug: string) => void;
};

export function CaseStep({
  selectedShapeSlug,
  selectedColorSlug,
  onSelectShape,
  onSelectColor,
}: CaseStepProps) {
  return (
    <section>
      <h2 className="font-headline text-2xl font-bold sm:text-3xl">
        Schritt 1 — Case-Form &amp; Farbe
      </h2>
      <p className="mt-2 max-w-xl text-sm text-ice-chrome-dark">
        Die Uhr ohne Steinbesatz. Im nächsten Schritt wählst du deinen
        Moissanite-Rahmen dazu.
      </p>

      <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-ice-chrome">
        Case-Form
      </h3>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {watchShapes.map((shape) => (
          <ShapeCard
            key={shape.slug}
            shape={shape}
            selected={shape.slug === selectedShapeSlug}
            onSelect={() => onSelectShape(shape.slug)}
          />
        ))}
      </div>

      <h3 className="mt-8 text-xs font-semibold uppercase tracking-widest text-ice-chrome">
        Farbe
      </h3>
      <div className="mt-4">
        <ColorPicker colors={colorways} selectedSlug={selectedColorSlug} onSelect={onSelectColor} />
      </div>
    </section>
  );
}
