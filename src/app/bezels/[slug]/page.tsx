import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { finishFilters, getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return getProductsByCategory("bezels").map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductsByCategory("bezels").find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: `${product.name} – Moissanite-Bezel-Kit von PURPICE inkl. Schraubenzieher zur Selbstmontage. ${product.price} €.`,
    alternates: { canonical: `/bezels/${product.slug}` },
  };
}

export default async function BezelDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductsByCategory("bezels").find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const finishLabel = finishFilters.find((f) => f.slug === product.finish)?.label;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10 lg:py-16">
      <Link href="/bezels" className="text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark hover:text-ice-white">
        ← Bezels
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="aspect-square rounded-2xl border border-white/10 bg-ice-anthracite p-10 sm:p-14">
          <div className="relative h-full w-full">
            {product.image ? (
              <Image src={product.image} alt={product.name} fill className="object-contain" priority />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ice-chrome-dark">
                <RingGlyph className="h-20 w-20 opacity-50" />
                <span className="px-4 text-center text-xs uppercase tracking-widest">
                  Produktbild folgt
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          {finishLabel && (
            <span className="inline-block rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark">
              {finishLabel} Finish
            </span>
          )}
          <h1 className="font-headline mt-4 text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-2xl font-semibold text-ice-white">{product.price} €</p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ice-chrome-dark">
            {/* PLATZHALTER: Hier später die echte Produktbeschreibung ergänzen
                (Materialangaben, Moissanite-Karat, passende Uhrenmodelle,
                Pflegehinweise). */}
            Moissanite-Bezel-Kit – gleicher Glanz wie ein Diamant, zum fairen
            Preis. Details zu Material, Karat und passenden Uhrenmodellen
            folgen hier.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <ScrewdriverGlyph className="mt-0.5 h-5 w-5 shrink-0 text-ice-chrome" />
            <p className="text-xs leading-relaxed text-ice-chrome-dark">
              <span className="font-semibold text-ice-white">Im Kit enthalten:</span>{" "}
              Bezel + passender Schraubenzieher – ganz einfach selbst auf deiner
              eigenen Uhr montierbar. Keine Werkstatt nötig.
            </p>
          </div>

          <button
            type="button"
            className="btn-glow-chrome mt-8 w-full rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ice-black sm:w-auto sm:px-10"
          >
            In den Warenkorb
          </button>
        </div>
      </div>
    </div>
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

function ScrewdriverGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M14.5 3.5l6 6-2.5 2.5-6-6 2.5-2.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 5.5l-8 8v3h3l8-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 16.5l-1 4 4-1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
