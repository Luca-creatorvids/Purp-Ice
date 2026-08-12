"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, infoLinks } from "./nav-links";
import { Logo } from "./Logo";

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

// PLATZHALTER: Social-Media-Links spaeter durch echte Profil-URLs ersetzen
const socialLinks = [
  { href: "https://instagram.com/", label: "Instagram" },
  { href: "https://tiktok.com/", label: "TikTok" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // HINWEIS: Hier ist noch kein echter Newsletter-Versand angebunden.
    // Spaeter z.B. mit einem Service wie Mailchimp, Klaviyo oder Brevo verbinden.
    if (email.trim().length > 3) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <footer className="border-t border-white/10 bg-ice-anthracite">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Marke + Newsletter */}
          <div className="lg:col-span-2">
            <Logo height={30} />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ice-chrome-dark">
              Iced Out Custom-Uhren mit Moissanite-Steinen – entworfen in München.
              Gleicher Glanz wie Diamanten, fairer Preis.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 max-w-sm">
              <label htmlFor="newsletter-email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-ice-chrome">
                Newsletter – Drops & Angebote zuerst erfahren
              </label>
              <div className="flex gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="deine@email.com"
                  className="w-full rounded-full border border-white/15 bg-ice-black/60 px-4 py-2.5 text-sm text-ice-white placeholder:text-ice-chrome-dark/70 outline-none focus:border-ice-chrome"
                />
                <button
                  type="submit"
                  className="btn-glow-chrome shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-ice-black"
                >
                  Anmelden
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-xs text-ice-chrome">
                  Danke! Du bist jetzt auf der Liste. ✔
                </p>
              )}
            </form>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ice-chrome">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ice-chrome-dark transition-colors hover:text-ice-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ice-chrome">
              Info
            </h3>
            <ul className="mt-4 space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ice-chrome-dark transition-colors hover:text-ice-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches + Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-ice-chrome">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ice-chrome-dark transition-colors hover:text-ice-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-ice-chrome">
              Social
            </h3>
            <ul className="mt-4 flex gap-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ice-chrome-dark transition-colors hover:text-ice-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zahlungsarten (Platzhalter-Icons) */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
          {["Visa", "Mastercard", "PayPal", "Klarna", "Apple Pay"].map((method) => (
            <span
              key={method}
              className="rounded-md border border-white/10 bg-ice-black/60 px-3 py-1.5 text-xs font-medium text-ice-chrome-dark"
            >
              {method}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-ice-chrome-dark sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PURPICE, München. Alle Rechte vorbehalten.</p>
          <p>Moissanite statt Diamant – gleicher Glanz, fairer Preis.</p>
        </div>
      </div>
    </footer>
  );
}
