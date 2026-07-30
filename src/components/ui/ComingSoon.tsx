import Link from "next/link";

type ComingSoonProps = {
  title: string;
  description: string;
};

/**
 * Platzhalter-Seite fuer Unterseiten, die als naechstes Schritt fuer
 * Schritt fuer die Schritt gebaut werden. Damit funktioniert die
 * Navigation schon jetzt, ohne 404-Fehler.
 */
export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <span className="rounded-full border border-ice-purple-light/40 bg-ice-purple/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ice-purple-light">
        Demnächst verfügbar
      </span>
      <h1 className="font-headline mt-6 text-4xl font-bold sm:text-5xl">
        <span className="text-gradient-ice">{title}</span>
      </h1>
      <p className="mt-5 max-w-xl text-ice-chrome-dark">{description}</p>
      <Link
        href="/"
        className="btn-glow-purple mt-8 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ice-white"
      >
        Zurück zur Startseite
      </Link>
    </section>
  );
}
