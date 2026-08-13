import { CategoryTabs } from "@/components/shop/CategoryTabs";
import { NotifyForm } from "./NotifyForm";

type ComingSoonProps = {
  title: string;
  description: string;
  /** href der aktuellen Kategorie fuer die Kategorie-Leiste, z.B. "/bracelets".
   * Nur bei Shop-Kategorien gesetzt – auf Seiten wie FAQ/Kontakt weggelassen. */
  current?: string;
};

/**
 * Ruhiger "Coming Soon"-Auftritt fuer Kategorien, die noch nicht im
 * Sortiment sind: Kategorie-Leiste zum Weiterspringen, Hero-Bereich mit
 * Kategorienamen, kurzer Text und optionalem "Notify me"-Formular.
 */
export function ComingSoon({ title, description, current }: ComingSoonProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      {current && <CategoryTabs current={current} />}

      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <span className="rounded-full border border-ice-chrome/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ice-chrome">
          Demnächst verfügbar
        </span>
        <h1 className="font-headline mt-6 text-4xl font-bold sm:text-5xl">
          <span className="text-gradient-ice">{title}</span>
        </h1>
        <p className="mt-5 max-w-xl text-ice-chrome-dark">{description}</p>
        <NotifyForm />
      </section>
    </div>
  );
}
