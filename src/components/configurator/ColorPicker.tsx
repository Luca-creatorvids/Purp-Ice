import type { Colorway } from "@/lib/configurator";

type ColorPickerProps = {
  colors: Colorway[];
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
};

export function ColorPicker({ colors, selectedSlug, onSelect }: ColorPickerProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color) => {
        const selected = color.slug === selectedSlug;
        return (
          <button
            key={color.slug}
            type="button"
            onClick={() => onSelect(color.slug)}
            aria-pressed={selected}
            className={`flex items-center gap-2.5 rounded-full border py-2 pl-2 pr-4 transition-all ${
              selected
                ? "border-ice-chrome bg-white/5 shadow-[0_0_20px_-6px_rgba(230,229,231,0.5)]"
                : "border-white/10 hover:border-white/25"
            }`}
          >
            <span
              className="h-6 w-6 shrink-0 rounded-full border border-white/20"
              style={{ background: color.swatch }}
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-ice-white">{color.name}</span>
            {color.surcharge > 0 && (
              <span className="text-xs text-ice-chrome-dark">+{color.surcharge} €</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
