import Image from "next/image";
import type { BezelStyle } from "@/lib/configurator";

type BezelCardProps = {
  bezel: BezelStyle;
  selected: boolean;
  onSelect: () => void;
};

export function BezelCard({ bezel, selected, onSelect }: BezelCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group relative block rounded-2xl border p-3 text-left transition-all ${
        selected
          ? "border-ice-chrome bg-white/5 shadow-[0_0_30px_-8px_rgba(230,229,231,0.5)]"
          : "border-white/10 hover:border-white/25 hover:bg-white/[0.03]"
      }`}
    >
      {selected && (
        <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-ice-chrome px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ice-black">
          <CheckIcon className="h-3 w-3" />
          Ausgewählt
        </span>
      )}

      <div className="relative aspect-square overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black">
        {bezel.image ? (
          <Image
            src={bezel.image}
            alt={bezel.name}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ice-chrome-dark">
            <RingGlyph className="h-12 w-12 opacity-70 transition-transform duration-500 group-hover:scale-110" />
            <span className="px-4 text-center text-[9px] uppercase tracking-widest">
              Nahaufnahme folgt
            </span>
          </div>
        )}
        <div className="sparkle-layer" aria-hidden="true" />
      </div>

      <h3 className="mt-3 font-headline text-lg font-semibold text-ice-white">{bezel.name}</h3>
      <p className="mt-0.5 text-xs leading-relaxed text-ice-chrome-dark">{bezel.description}</p>
      <p className="mt-1 text-sm text-ice-chrome">+ {bezel.surcharge} €</p>
    </button>
  );
}

function RingGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" strokeDasharray="2 5" />
      <circle cx="32" cy="32" r="13" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={className} aria-hidden="true">
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
