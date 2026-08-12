"use client";

import { useMemo, useState } from "react";
import { bezelFilters, getBestsellers, getProductsByCategory } from "@/lib/products";
import { ShopProductCard } from "./ShopProductCard";
import { FilterTabs } from "./FilterTabs";

export function WatchesShopSection() {
  const [bezel, setBezel] = useState<string | null>(null);

  const bestsellers = useMemo(() => getBestsellers("watches"), []);
  const allWatches = useMemo(() => getProductsByCategory("watches"), []);
  const filtered = useMemo(
    () => (bezel ? allWatches.filter((product) => product.bezel === bezel) : allWatches),
    [allWatches, bezel]
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <header>
        <span className="text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark">
          Shop
        </span>
        <h1 className="font-headline mt-2 text-3xl font-bold sm:text-4xl">
          <span className="text-gradient-ice">Watches</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm text-ice-chrome-dark">
          Iced Out Uhren mit Moissanite-Besatz – fertig konfiguriert, einzeln
          erhältlich.
        </p>
      </header>

      {/* Best Sellers */}
      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-ice-chrome">
          Best Sellers
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {bestsellers.map((product) => (
            <ShopProductCard key={product.slug} product={product} href={`/watches/${product.slug}`} />
          ))}
        </div>
      </section>

      {/* Shop by Bezel */}
      <section className="mt-16 border-t border-white/10 pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-ice-chrome">
          Shop by Bezel
        </h2>
        <div className="mt-5">
          <FilterTabs options={bezelFilters} value={bezel} onChange={setBezel} allLabel="All Bezels" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {filtered.map((product) => (
            <ShopProductCard key={product.slug} product={product} href={`/watches/${product.slug}`} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-sm text-ice-chrome-dark">
            Keine Uhren mit diesem Bezel-Stil gefunden.
          </p>
        )}
      </section>
    </div>
  );
}
