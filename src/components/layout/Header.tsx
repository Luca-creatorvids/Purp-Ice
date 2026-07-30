"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "./nav-links";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ice-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link
          href="/"
          className="font-headline text-2xl font-bold tracking-wide text-gradient-ice"
          onClick={() => setMenuOpen(false)}
        >
          PURPICE
        </Link>

        {/* Desktop-Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-ice-chrome transition-colors hover:text-ice-purple-light"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {/* Warenkorb-Mockup (kein echtes Backend) */}
          <Link
            href="/warenkorb"
            aria-label="Warenkorb"
            className="rounded-full border border-white/15 p-2.5 text-ice-white transition-colors hover:border-ice-purple-light hover:text-ice-purple-light"
          >
            <CartIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/custom-builder"
            className="btn-glow-purple rounded-full px-5 py-2.5 text-sm font-semibold text-ice-white"
          >
            Jetzt individualisieren
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ice-white lg:hidden"
        >
          {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile-Navigation */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ice-black px-6 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium uppercase tracking-wide text-ice-chrome transition-colors hover:bg-white/5 hover:text-ice-purple-light"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/warenkorb"
            onClick={() => setMenuOpen(false)}
            className="rounded-lg px-3 py-3 text-base font-medium uppercase tracking-wide text-ice-chrome transition-colors hover:bg-white/5 hover:text-ice-purple-light"
          >
            Warenkorb
          </Link>
          <Link
            href="/custom-builder"
            onClick={() => setMenuOpen(false)}
            className="btn-glow-purple mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-ice-white"
          >
            Jetzt individualisieren
          </Link>
        </nav>
      )}
    </header>
  );
}

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
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

function CartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="21" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="17" cy="21" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}
