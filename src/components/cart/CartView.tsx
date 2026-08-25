"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { finishFilters } from "@/lib/products";

export function CartView() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [checkoutNote, setCheckoutNote] = useState(false);

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <CartGlyph className="h-14 w-14 text-ice-chrome-dark opacity-60" />
        <h1 className="font-headline mt-6 text-2xl font-bold sm:text-3xl">
          Dein Warenkorb ist leer
        </h1>
        <p className="mt-3 text-sm text-ice-chrome-dark">
          Schau dich in unseren Watches um und finde dein Stück.
        </p>
        <Link href="/watches" className="btn-glow-chrome mt-6 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ice-black">
          Jetzt shoppen
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-10 lg:py-16">
      <h1 className="font-headline text-3xl font-bold sm:text-4xl">Warenkorb</h1>

      <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
        {items.map((item) => {
          const finishLabel = finishFilters.find((f) => f.slug === item.finish)?.label;
          return (
            <li key={item.slug} className="flex items-center gap-4 py-5 sm:gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-ice-anthracite sm:h-20 sm:w-20">
                <RingGlyph className="h-8 w-8 text-ice-chrome-dark opacity-60" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-headline text-sm font-semibold text-ice-white sm:text-base">
                  {item.name}
                </p>
                {finishLabel && (
                  <p className="mt-0.5 text-xs uppercase tracking-widest text-ice-chrome-dark">
                    {finishLabel}
                  </p>
                )}
                <p className="mt-1 text-sm text-ice-chrome sm:hidden">{item.price} €</p>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/15">
                <button
                  type="button"
                  aria-label="Menge verringern"
                  onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                  className="flex h-8 w-8 items-center justify-center text-ice-white hover:text-ice-chrome"
                >
                  −
                </button>
                <span className="w-4 text-center text-sm tabular-nums">{item.quantity}</span>
                <button
                  type="button"
                  aria-label="Menge erhöhen"
                  onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                  className="flex h-8 w-8 items-center justify-center text-ice-white hover:text-ice-chrome"
                >
                  +
                </button>
              </div>

              <p className="hidden w-20 shrink-0 text-right text-sm text-ice-chrome sm:block">
                {item.price * item.quantity} €
              </p>

              <button
                type="button"
                aria-label={`${item.name} entfernen`}
                onClick={() => removeItem(item.slug)}
                className="shrink-0 text-ice-chrome-dark transition-colors hover:text-ice-white"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col items-end gap-1">
        <div className="flex w-full max-w-xs items-center justify-between text-sm text-ice-chrome-dark sm:w-64">
          <span>Zwischensumme</span>
          <span className="text-ice-white">{totalPrice} €</span>
        </div>
        <p className="w-full max-w-xs text-right text-xs text-ice-chrome-dark sm:w-64">
          Versand wird beim Checkout berechnet.
        </p>

        <button
          type="button"
          onClick={() => setCheckoutNote(true)}
          className="btn-glow-chrome mt-4 w-full max-w-xs rounded-full px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-ice-black sm:w-64"
        >
          Zur Kasse
        </button>
        {checkoutNote && (
          <p className="max-w-xs text-right text-xs text-ice-chrome-dark sm:w-64">
            Checkout folgt in einem späteren Schritt – noch kein echtes Payment
            angebunden.
          </p>
        )}
      </div>
    </div>
  );
}

function CartGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className} aria-hidden="true">
      <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="21" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="21" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RingGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" strokeDasharray="2 5" />
      <circle cx="32" cy="32" r="13" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}
