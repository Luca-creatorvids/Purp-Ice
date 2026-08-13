"use client";

import { useCart } from "./CartProvider";

type AddToCartButtonProps = {
  product: {
    slug: string;
    name: string;
    price: number;
    category: string;
    finish?: string;
  };
};

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { items, addItem } = useCart();
  const inCart = items.find((item) => item.slug === product.slug);

  return (
    <div>
      <button
        type="button"
        onClick={() => addItem(product)}
        className="btn-glow-chrome w-full rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ice-black sm:w-auto sm:px-10"
      >
        {inCart ? "Noch eins hinzufügen" : "In den Warenkorb"}
      </button>
      {inCart && (
        <p className="mt-2 text-xs text-ice-chrome">
          Im Warenkorb: {inCart.quantity} ✔
        </p>
      )}
    </div>
  );
}
