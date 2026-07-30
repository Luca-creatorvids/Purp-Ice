import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/product/ProductCard";
import { bestsellers } from "@/lib/products";

export function BestsellerSlider() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Bestseller
          </h2>
          <Link
            href="/shop"
            className="text-sm font-semibold uppercase tracking-wide text-ice-purple-light hover:text-ice-purple transition-colors"
          >
            Alle Uhren ansehen →
          </Link>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {bestsellers.map((product) => (
            <div key={product.slug} className="w-64 shrink-0 sm:w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
