import Link from "next/link";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { bezelFilters, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const bezelLabel = bezelFilters.find((f) => f.slug === product.bezel)?.label;

  return (
    <Link href={`/${product.category}/${product.slug}`} className="group/card block shrink-0 snap-start">
      <ProductVisual src={product.image} alt={product.name} />
      <div className="mt-4">
        {bezelLabel && (
          <p className="text-xs uppercase tracking-widest text-ice-chrome-dark">{bezelLabel} Bezel</p>
        )}
        <h3 className="mt-1 font-headline text-lg font-semibold text-ice-white transition-colors group-hover/card:text-ice-chrome">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-ice-chrome">{product.price} €</p>
      </div>
    </Link>
  );
}
