"use client";

import { useMemo, useState } from "react";
import { finishFilters, getBestsellers, getProductsByCategory } from "@/lib/products";
import { ShopProductCard } from "./ShopProductCard";
import { FilterTabs } from "./FilterTabs";
import { CategoryTabs } from "./CategoryTabs";

export function BezelsShopSection() {
  const [finish, setFinish] = useState<string | null>(null);

  const bestsellers = useMemo(() => getBestsellers("bezels"), []);
  const allBezels = useMemo(() => getProductsByCategory("bezels"), []);
  const filtered = useMemo(
    () => (finish ? allBezels.filter((product) => product.finish === finish) : allBezels),
    [allBezels, finish]
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <CategoryTabs current="/bezels" />

      <header className="mt-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark">
          Shop
        </span>
        <h1 className="font-headline mt-2 text-3xl font-bold sm:text-4xl">
          <span className="text-gradient-ice">Bezels</span>
        </h1>
        <p className="mt-3 max-w-xl text-sm text-ice-chrome-dark">
          Moissanite-Bezel-Kits zum Nachrüsten deiner eigenen Uhr – jedes Kit
          enthält den Rahmen und einen Schraubenzieher zur einfachen
          Selbstmontage.
        </p>
      </header>

      {/* Best Sellers */}
      <section className="mt-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-ice-chrome">
          Best Sellers
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {bestsellers.map((product) => (
            <ShopProductCard key={product.slug} product={product} href={`/bezels/${product.slug}`} />
          ))}
        </div>
      </section>

      {/* Shop by Finish */}
      <section className="mt-16 border-t border-white/10 pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-ice-chrome">
          Shop by Finish
        </h2>
        <div className="mt-5">
          <FilterTabs options={finishFilters} value={finish} onChange={setFinish} allLabel="All Finishes" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {filtered.map((product) => (
            <ShopProductCard key={product.slug} product={product} href={`/bezels/${product.slug}`} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-sm text-ice-chrome-dark">
            Keine Bezels mit diesem Finish gefunden.
          </p>
        )}
      </section>
    </div>
  );
}
