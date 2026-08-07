import type { BezelStyle, WatchColor } from "@/lib/configurator";
import { WatchPreview } from "./WatchPreview";

type SummarySidebarProps = {
  color: WatchColor | null;
  bezel: BezelStyle | null;
  totalPrice: number;
  addedToCart: boolean;
  onAddToCart: () => void;
};

/**
 * Zeigt die aktuelle Auswahl + Live-Vorschau + Gesamtpreis, live
 * aktualisiert. Desktop: sticky Sidebar rechts. Mobile: fixierte Leiste
 * unten. "In den Warenkorb" wird erst aktiv, wenn Farbe UND Rahmen
 * gewählt sind (Schritt 3 / Fertig).
 */
export function SummarySidebar({ color, bezel, totalPrice, addedToCart, onAddToCart }: SummarySidebarProps) {
  const complete = Boolean(color && bezel);

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-fit lg:w-80 lg:shrink-0">
        <SummaryContent
          color={color}
          bezel={bezel}
          totalPrice={totalPrice}
          complete={complete}
          addedToCart={addedToCart}
          onAddToCart={onAddToCart}
        />
      </aside>

      {/* Mobile: fixierte Leiste am unteren Bildschirmrand */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ice-black/95 p-4 backdrop-blur-md lg:hidden">
        <SummaryContent
          color={color}
          bezel={bezel}
          totalPrice={totalPrice}
          complete={complete}
          addedToCart={addedToCart}
          onAddToCart={onAddToCart}
          compact
        />
      </div>

      {/* Platzhalter, damit die fixierte Mobile-Leiste den Seiteninhalt nicht überdeckt */}
      <div className="h-24 lg:hidden" aria-hidden="true" />
    </>
  );
}

function SummaryContent({
  color,
  bezel,
  totalPrice,
  complete,
  addedToCart,
  onAddToCart,
  compact = false,
}: SummarySidebarProps & { complete: boolean; compact?: boolean }) {
  const buttonLabel = addedToCart ? "Im Warenkorb ✓" : "In den Warenkorb";

  if (compact) {
    return (
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <WatchPreview color={color} bezel={bezel} size="sm" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm text-ice-white">
            {color ? color.name : "Farbe wählen"}
            {bezel ? ` · ${bezel.name}` : ""}
          </p>
          <p className="font-headline text-lg font-bold text-ice-white">{totalPrice} €</p>
        </div>
        <button
          type="button"
          disabled={!complete}
          onClick={onAddToCart}
          className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wide ${
            complete
              ? "btn-glow-chrome text-ice-black"
              : "cursor-not-allowed border border-white/10 bg-white/5 text-ice-chrome-dark"
          }`}
        >
          {buttonLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-ice-anthracite p-6">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-ice-chrome">
        Deine Auswahl
      </h3>

      <div className="mt-4 w-32">
        <WatchPreview color={color} bezel={bezel} size="lg" />
      </div>

      <div className="mt-5 space-y-3">
        <Row label="Farbe" value={color ? color.name : "Noch nicht gewählt"} muted={!color} />
        <Row label="Rahmen" value={bezel ? bezel.name : "Noch nicht gewählt"} muted={!bezel} />

        <div className="border-t border-white/10 pt-3">
          <p className="text-xs uppercase tracking-widest text-ice-chrome-dark">Gesamt ab</p>
          <p className="font-headline text-xl font-bold text-ice-white">{totalPrice} €</p>
        </div>
      </div>

      <button
        type="button"
        disabled={!complete}
        onClick={onAddToCart}
        title={complete ? undefined : "Wähle Farbe und Rahmen, um fortzufahren"}
        className={`mt-4 w-full rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide ${
          complete
            ? "btn-glow-chrome text-ice-black"
            : "cursor-not-allowed border border-white/10 bg-white/5 text-ice-chrome-dark"
        }`}
      >
        {buttonLabel}
      </button>
      <p className="mt-2 text-center text-xs text-ice-chrome-dark">
        {addedToCart
          ? "Erledigt! Du findest die Uhr in deinem Warenkorb."
          : complete
            ? "Bereit! Deine Konfiguration ist vollständig."
            : !color
              ? "Wähle zuerst deine Farbe."
              : "Wähle jetzt deinen Moissanite-Rahmen."}
      </p>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-ice-chrome-dark">{label}</span>
      <span className={`truncate text-right ${muted ? "text-ice-chrome-dark" : "text-ice-white"}`}>
        {value}
      </span>
    </div>
  );
}
