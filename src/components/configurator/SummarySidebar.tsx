import type { BaseModel } from "@/lib/configurator";

type SummarySidebarProps = {
  selectedModel: BaseModel | null;
  totalPrice: number;
};

/**
 * Zeigt die aktuelle Auswahl + Gesamtpreis, live aktualisiert.
 * Desktop: sticky Sidebar rechts. Mobile: fixierte Leiste unten.
 * "In den Warenkorb" bleibt inaktiv, bis auch Schritt 2 (Rahmen-Auswahl)
 * gebaut ist und ausgewählt wurde – das kommt im nächsten Bauschritt.
 */
export function SummarySidebar({ selectedModel, totalPrice }: SummarySidebarProps) {
  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-fit lg:w-80 lg:shrink-0">
        <SummaryContent selectedModel={selectedModel} totalPrice={totalPrice} />
      </aside>

      {/* Mobile: fixierte Leiste am unteren Bildschirmrand */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ice-black/95 p-4 backdrop-blur-md lg:hidden">
        <SummaryContent selectedModel={selectedModel} totalPrice={totalPrice} compact />
      </div>

      {/* Platzhalter, damit die fixierte Mobile-Leiste den Seiteninhalt nicht überdeckt */}
      <div className="h-40 lg:hidden" aria-hidden="true" />
    </>
  );
}

function SummaryContent({
  selectedModel,
  totalPrice,
  compact = false,
}: SummarySidebarProps & { compact?: boolean }) {
  return (
    <div className={compact ? "" : "rounded-2xl border border-white/10 bg-ice-anthracite p-6"}>
      {!compact && (
        <h3 className="text-sm font-semibold uppercase tracking-widest text-ice-chrome">
          Deine Auswahl
        </h3>
      )}

      <div className={compact ? "flex items-center justify-between gap-4" : "mt-4 space-y-3"}>
        <div className={compact ? "min-w-0" : ""}>
          <Row
            label="Modell"
            value={
              selectedModel ? `${selectedModel.name} (${selectedModel.finish})` : "Noch nicht gewählt"
            }
            muted={!selectedModel}
            compact={compact}
          />
          {!compact && <Row label="Rahmen" value="Folgt in Schritt 2" muted compact={compact} />}
        </div>

        <div className={compact ? "shrink-0 text-right" : "border-t border-white/10 pt-3"}>
          <p className="text-xs uppercase tracking-widest text-ice-chrome-dark">Gesamt ab</p>
          <p className="font-headline text-xl font-bold text-ice-white">{totalPrice} €</p>
        </div>
      </div>

      <button
        type="button"
        disabled
        title="Wähle im nächsten Schritt auch deinen Moissanite-Rahmen"
        className="mt-4 w-full cursor-not-allowed rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ice-chrome-dark"
      >
        In den Warenkorb
      </button>
      {!compact && (
        <p className="mt-2 text-center text-xs text-ice-chrome-dark">
          {selectedModel
            ? "Rahmen-Auswahl (Schritt 2) folgt als Nächstes."
            : "Wähle zuerst ein Basismodell."}
        </p>
      )}
    </div>
  );
}

function Row({
  label,
  value,
  muted,
  compact,
}: {
  label: string;
  value: string;
  muted?: boolean;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <p className="truncate text-sm">
        <span className="text-ice-chrome-dark">{label}: </span>
        <span className={muted ? "text-ice-chrome-dark" : "text-ice-white"}>{value}</span>
      </p>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-ice-chrome-dark">{label}</span>
      <span className={`truncate text-right ${muted ? "text-ice-chrome-dark" : "text-ice-white"}`}>
        {value}
      </span>
    </div>
  );
}
