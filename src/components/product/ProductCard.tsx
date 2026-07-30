import Link from "next/link";
import { ProductVisual } from "@/components/ui/ProductVisual";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href="/shop"
      className="group/card block shrink-0 snap-start"
    >
      <ProductVisual src={product.image} alt={product.name} />
      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-ice-chrome-dark">
          {product.category}
        </p>
        <h3 className="mt-1 font-headline text-lg font-semibold text-ice-white transition-colors group-hover/card:text-ice-purple-light">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-ice-chrome">{product.price} €</p>
      </div>
    </Link>
  );
}
