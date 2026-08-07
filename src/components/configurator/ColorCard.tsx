import Image from "next/image";
import type { WatchColor } from "@/lib/configurator";

type ColorCardProps = {
  color: WatchColor;
  selected: boolean;
  onSelect: () => void;
};

export function ColorCard({ color, selected, onSelect }: ColorCardProps) {
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

      <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black">
        {color.image ? (
          <Image
            src={color.image}
            alt={color.name}
            fill
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ice-chrome-dark">
            <WatchGlyph className="h-14 w-14 opacity-70 transition-transform duration-500 group-hover:scale-110" />
            <span className="px-4 text-center text-[10px] uppercase tracking-widest">
              Produktbild folgt
            </span>
          </div>
        )}
        <div className="sparkle-layer" aria-hidden="true" />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span
          className="h-4 w-4 shrink-0 rounded-full border border-white/20"
          style={{ background: color.swatch }}
          aria-hidden="true"
        />
        <h3 className="font-headline text-lg font-semibold text-ice-white">{color.name}</h3>
      </div>
      <p className="mt-1 text-sm text-ice-chrome">ab {color.price} €</p>
    </button>
  );
}

function WatchGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect x="20" y="4" width="24" height="10" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="20" y="50" width="24" height="10" rx="2" fill="currentColor" opacity="0.5" />
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <path d="M32 22V32L39 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
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
