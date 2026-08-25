import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ShopProductCard } from "@/components/shop/ShopProductCard";
import { getProductsByCategory } from "@/lib/products";

// Die 4 Bezel-Arten, jede bekommt eine eigene Sektion mit ihren Finish-Varianten.
const bezelTypes = ["Classic Pavé", "Twisted Rope", "Spike Edge", "Baguette Cut"];

export function BezelTypeShowcase() {
  const allBezels = getProductsByCategory("bezels");

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal>
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark">
            Bezel-Kits
          </span>
          <h2 className="font-headline mt-2 text-3xl font-bold sm:text-4xl">
            Jede Art. <span className="text-gradient-ice">Jeder Style.</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 space-y-16">
        {bezelTypes.map((type, index) => {
          const items = allBezels.filter((product) => product.name === type);
          if (items.length === 0) return null;

          return (
            <Reveal key={type} delay={index * 80}>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h3 className="font-headline text-2xl font-bold">{type}</h3>
                <Link
                  href="/bezels"
                  className="text-sm font-semibold uppercase tracking-wide text-ice-chrome hover:text-ice-white transition-colors"
                >
                  Alle Bezels ansehen →
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
                {items.map((product) => (
                  <ShopProductCard key={product.slug} product={product} href={`/bezels/${product.slug}`} />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
