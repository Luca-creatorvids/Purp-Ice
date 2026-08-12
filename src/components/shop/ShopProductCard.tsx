import Image from "next/image";
import Link from "next/link";
import { finishFilters, type Product } from "@/lib/products";

type ShopProductCardProps = {
  product: Product;
  /** Wenn gesetzt, ist die Karte klickbar und führt zur Produktdetailseite */
  href?: string;
};

/**
 * Schlichte Produktkarte für die Shop-Kategorie-Seiten: großzügig Platz für
 * das Produktbild, kein Text/Overlay über dem Bild selbst – viel
 * Weißraum, wie bei hochwertigen Uhren-/Schmuck-Shops üblich.
 */
export function ShopProductCard({ product, href }: ShopProductCardProps) {
  const finishLabel = finishFilters.find((f) => f.slug === product.finish)?.label;

  const content = (
    <>
      <div className="aspect-square rounded-2xl border border-white/10 bg-ice-anthracite p-8 sm:p-10">
        <div className="relative h-full w-full">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              loading="lazy"
              className="object-contain"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ice-chrome-dark">
              <WatchGlyph className="h-16 w-16 opacity-50" />
              <span className="px-4 text-center text-[10px] uppercase tracking-widest">
                Produktbild folgt
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-center">
        {finishLabel && (
          <p className="text-xs uppercase tracking-widest text-ice-chrome-dark">{finishLabel}</p>
        )}
        <h3 className="font-headline text-base font-semibold text-ice-white">{product.name}</h3>
        <p className="mt-1 text-sm text-ice-chrome-dark">{product.price} €</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group block transition-transform duration-300 hover:-translate-y-1">
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
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
