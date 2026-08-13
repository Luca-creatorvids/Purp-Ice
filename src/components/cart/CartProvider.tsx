"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  category: string;
  finish?: string;
  quantity: number;
};

type NewCartItem = Omit<CartItem, "quantity">;

type CartContextValue = {
  items: CartItem[];
  addItem: (item: NewCartItem, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  totalCount: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "purpice-cart";

/**
 * Warenkorb-Status fuer die ganze Seite (kein echtes Backend, nur UI):
 * haelt die hinzugefuegten Produkte im Speicher und im localStorage,
 * damit der Warenkorb auch nach einem Reload erhalten bleibt.
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Bewusst erst nach dem Mount aus localStorage lesen (nicht per lazy
    // useState-Initializer): so ist der erste Client-Render identisch zum
    // Server-Render (leerer Warenkorb) und es gibt keinen Hydration-Mismatch.
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ungueltige/gesperrte localStorage-Daten ignorieren, Warenkorb bleibt leer
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback((item: NewCartItem, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === item.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === item.slug ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  }, []);

  const removeItem = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((i) => i.slug !== slug);
      return prev.map((i) => (i.slug === slug ? { ...i, quantity } : i));
    });
  }, []);

  const totalCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const totalPrice = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity * i.price, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, removeItem, updateQuantity, totalCount, totalPrice }),
    [items, addItem, removeItem, updateQuantity, totalCount, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart muss innerhalb von <CartProvider> verwendet werden");
  return ctx;
}
