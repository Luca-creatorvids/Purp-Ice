import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { bezelFilters, getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return getProductsByCategory("watches").map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductsByCategory("watches").find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.name,
    description: `${product.name} – Iced Out Uhr mit Moissanite-Bezel von PURPICE. ${product.price} €.`,
    alternates: { canonical: `/watches/${product.slug}` },
  };
}

export default async function WatchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductsByCategory("watches").find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const bezelLabel = bezelFilters.find((f) => f.slug === product.bezel)?.label;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10 lg:py-16">
      <Link href="/watches" className="text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark hover:text-ice-white">
        ← Watches
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="aspect-square rounded-2xl border border-white/10 bg-ice-anthracite p-10 sm:p-14">
          <div className="relative h-full w-full">
            {product.image ? (
              <Image src={product.image} alt={product.name} fill className="object-contain" priority />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ice-chrome-dark">
                <WatchGlyph className="h-20 w-20 opacity-50" />
                <span className="px-4 text-center text-xs uppercase tracking-widest">
                  Produktbild folgt
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          {bezelLabel && (
            <span className="inline-block rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark">
              {bezelLabel} Bezel
            </span>
          )}
          <h1 className="font-headline mt-4 text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-2xl font-semibold text-ice-white">{product.price} €</p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ice-chrome-dark">
            {/* PLATZHALTER: Hier später die echte Produktbeschreibung ergänzen
                (Materialangaben, Moissanite-Karat, Größe, Pflegehinweise). */}
            Iced Out Uhr mit Moissanite-Besatz – gleicher Glanz wie ein Diamant,
            zum fairen Preis. Details zu Material, Karat und Größe folgen hier.
          </p>

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
