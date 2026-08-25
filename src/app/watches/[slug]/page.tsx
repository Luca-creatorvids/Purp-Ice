import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { finishFilters, getProductsByCategory } from "@/lib/products";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

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
    description: `${product.name} – Iced Out Moissanite-Uhr von PURPICE, Bezel werkseitig montiert. ${product.price} €.`,
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

  const finishLabel = finishFilters.find((f) => f.slug === product.finish)?.label;

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
          {finishLabel && (
            <span className="inline-block rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark">
              {finishLabel} Finish
            </span>
          )}
          <h1 className="font-headline mt-4 text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <p className="mt-3 text-2xl font-semibold text-ice-white">{product.price} €</p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ice-chrome-dark">
            {/* PLATZHALTER: Hier später die echte Produktbeschreibung ergänzen
                (Uhrwerk, Materialangaben, Moissanite-Karat, Pflegehinweise). */}
            Iced-Out-Uhr mit Moissanite-Bezel – gleicher Glanz wie ein Diamant,
            zum fairen Preis. Details zu Uhrwerk, Material und Karat folgen
            hier.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
            <SparkleGlyph className="mt-0.5 h-5 w-5 shrink-0 text-ice-chrome" />
            <p className="text-xs leading-relaxed text-ice-chrome-dark">
              <span className="font-semibold text-ice-white">Sofort tragbereit:</span>{" "}
              Der Moissanite-Bezel ist werkseitig montiert – keine
              Selbstmontage nötig.
            </p>
          </div>

          <div className="mt-8">
            <AddToCartButton
              product={{
                slug: product.slug,
                name: product.name,
                price: product.price,
                category: product.category,
                finish: product.finish,
              }}
            />
          </div>
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

function SparkleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" strokeLinecap="round" />
    </svg>
  );
}
