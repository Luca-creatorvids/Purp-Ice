type LegalPlaceholderProps = {
  title: string;
};

/**
 * Einfache Platzhalter-Seite fuer rechtliche Inhalte (Impressum, Datenschutz,
 * AGB). Der Nutzer fuellt den eigentlichen Rechtstext spaeter selbst ein –
 * am besten mit einem Generator (z.B. eRecht24) oder per Anwalt geprueft.
 */
export function LegalPlaceholder({ title }: LegalPlaceholderProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <h1 className="font-headline text-4xl font-bold">{title}</h1>
      <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-ice-anthracite/60 p-8 text-sm leading-relaxed text-ice-chrome-dark">
        <p>
          {/* TODO: Hier den echten Rechtstext einfügen. */}
          Dieser Text ist ein Platzhalter. Bitte ersetze diesen Abschnitt mit
          deinem echten „{title}“-Text (z. B. erstellt mit einem Generator wie
          eRecht24 oder von einem Anwalt geprüft), bevor die Seite live geht.
        </p>
      </div>
    </section>
  );
}
