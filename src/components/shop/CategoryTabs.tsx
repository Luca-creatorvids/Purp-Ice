import Link from "next/link";
import { navLinks } from "@/components/layout/nav-links";

type CategoryTabsProps = {
  /** href der aktuellen Kategorie, z.B. "/bezels" */
  current: string;
};

/**
 * Immer sichtbare Kategorie-Leiste oben auf jeder Shop-Seite, damit man
 * jederzeit direkt zwischen Bezels/Bracelets/Earrings/Chains/Pendants
 * wechseln kann, ohne zurück zur Startseite zu müssen.
 */
export function CategoryTabs({ current }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {navLinks.map((link) => {
        const active = link.href === current;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
              active
                ? "border-ice-chrome bg-ice-chrome text-ice-black"
                : "border-white/15 text-ice-chrome-dark hover:border-white/30 hover:text-ice-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
