import type { BezelStyle, Colorway, WatchShape } from "@/lib/configurator";
import { WatchPreview } from "./WatchPreview";

type SummarySidebarProps = {
  shape: WatchShape | null;
  color: Colorway | null;
  bezel: BezelStyle | null;
  totalPrice: number;
};

/**
 * Zeigt die aktuelle Auswahl + Live-Vorschau + Gesamtpreis, live
 * aktualisiert. Desktop: sticky Sidebar rechts. Mobile: fixierte Leiste
 * unten. "In den Warenkorb" wird erst aktiv, wenn Case, Farbe UND Rahmen
 * gewählt sind.
 */
export function SummarySidebar({ shape, color, bezel, totalPrice }: SummarySidebarProps) {
  const complete = Boolean(shape && color && bezel);

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-fit lg:w-80 lg:shrink-0">
        <SummaryContent shape={shape} color={color} bezel={bezel} totalPrice={totalPrice} complete={complete} />
      </aside>

      {/* Mobile: fixierte Leiste am unteren Bildschirmrand */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ice-black/95 p-4 backdrop-blur-md lg:hidden">
        <SummaryContent
          shape={shape}
          color={color}
          bezel={bezel}
          totalPrice={totalPrice}
          complete={complete}
          compact
        />
      </div>

      {/* Platzhalter, damit die fixierte Mobile-Leiste den Seiteninhalt nicht überdeckt */}
      <div className="h-24 lg:hidden" aria-hidden="true" />
    </>
  );
}

function SummaryContent({
  shape,
  color,
  bezel,
  totalPrice,
  complete,
  compact = false,
}: SummarySidebarProps & { complete: boolean; compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <WatchPreview shape={shape} color={color} bezel={bezel} size="sm" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm text-ice-white">
            {shape ? shape.name : "Case wählen"}
            {color ? ` · ${color.name}` : ""}
            {bezel ? ` · ${bezel.name}` : ""}
          </p>
          <p className="font-headline text-lg font-bold text-ice-white">{totalPrice} €</p>
        </div>
        <button
          type="button"
          disabled={!complete}
          className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-wide ${
            complete
              ? "btn-glow-chrome text-ice-black"
              : "cursor-not-allowed border border-white/10 bg-white/5 text-ice-chrome-dark"
          }`}
        >
          In den Warenkorb
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
        <WatchPreview shape={shape} color={color} bezel={bezel} size="lg" />
      </div>

      <div className="mt-5 space-y-3">
        <Row label="Case" value={shape ? shape.name : "Noch nicht gewählt"} muted={!shape} />
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
        title={complete ? undefined : "Wähle Case, Farbe und Rahmen, um fortzufahren"}
        className={`mt-4 w-full rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide ${
          complete
            ? "btn-glow-chrome text-ice-black"
            : "cursor-not-allowed border border-white/10 bg-white/5 text-ice-chrome-dark"
        }`}
      >
        In den Warenkorb
      </button>
      <p className="mt-2 text-center text-xs text-ice-chrome-dark">
        {complete
          ? "Bereit! Deine Konfiguration ist vollständig."
          : !shape
            ? "Wähle zuerst eine Case-Form."
            : !color
              ? "Wähle jetzt deine Farbe."
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
