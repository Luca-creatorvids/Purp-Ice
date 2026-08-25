type FilterOption = { slug: string; label: string };

type FilterTabsProps = {
  options: FilterOption[];
  value: string | null;
  onChange: (slug: string | null) => void;
  /** Label für die "alle anzeigen"-Option, z.B. "All Finishes" */
  allLabel?: string;
};

/**
 * Einfache, horizontal scrollbare Filter-Tabs (kein Dropdown). Auf dem
 * Handy scrollt die Reihe seitwärts, falls nicht alle Optionen passen.
 */
export function FilterTabs({ options, value, onChange, allLabel = "All" }: FilterTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <Tab label={allLabel} active={value === null} onClick={() => onChange(null)} />
      {options.map((option) => (
        <Tab
          key={option.slug}
          label={option.label}
          active={value === option.slug}
          onClick={() => onChange(option.slug)}
        />
      ))}
    </div>
  );
}

function Tab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
        active
          ? "border-ice-chrome bg-ice-chrome text-ice-black"
          : "border-white/15 text-ice-chrome-dark hover:border-white/30 hover:text-ice-white"
      }`}
    >
      {label}
    </button>
  );
}
