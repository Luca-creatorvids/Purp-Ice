import type { BezelStyle, WatchColor } from "@/lib/configurator";
import { WatchPreview } from "./WatchPreview";

type FinishStepProps = {
  color: WatchColor;
  bezel: BezelStyle;
  totalPrice: number;
  addedToCart: boolean;
  onAddToCart: () => void;
};

export function FinishStep({ color, bezel, totalPrice, addedToCart, onAddToCart }: FinishStepProps) {
  return (
    <section className="mt-12 border-t border-white/10 pt-10">
      <h2 className="font-headline text-2xl font-bold sm:text-3xl">Schritt 3 — Fertig</h2>
      <p className="mt-2 max-w-xl text-sm text-ice-chrome-dark">
        Deine individuelle Uhr ist konfiguriert. Prüfe deine Auswahl und leg sie
        in den Warenkorb.
      </p>

      <div className="mt-6 flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-ice-anthracite p-8 sm:flex-row sm:items-center">
        <div className="w-40 shrink-0 sm:w-48">
          <WatchPreview color={color} bezel={bezel} size="lg" />
        </div>

        <div className="w-full flex-1">
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-ice-chrome-dark">Farbe</span>
              <span className="text-ice-white">{color.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-ice-chrome-dark">Rahmen</span>
              <span className="text-ice-white">{bezel.name}</span>
            </div>
          </div>

          <div className="mt-4 border-t border-white/10 pt-4">
            <p className="text-xs uppercase tracking-widest text-ice-chrome-dark">Gesamtpreis</p>
            <p className="font-headline text-3xl font-bold text-ice-white">{totalPrice} €</p>
          </div>

          <button
            type="button"
            onClick={onAddToCart}
            className="btn-glow-chrome mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ice-black sm:w-auto"
          >
            {addedToCart ? "Im Warenkorb ✓" : "In den Warenkorb"}
          </button>
        </div>
      </div>
    </section>
  );
}
