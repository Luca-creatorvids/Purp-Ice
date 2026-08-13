"use client";

import { useState } from "react";

/**
 * "Notify me when available"-Formular auf den Coming-Soon-Seiten.
 * HINWEIS: Noch kein echter Versand angebunden – spaeter z.B. mit einem
 * Service wie Mailchimp, Klaviyo oder Brevo verbinden.
 */
export function NotifyForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim().length > 3) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-sm">
      <div className="flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="deine@email.com"
          aria-label="E-Mail-Adresse"
          className="w-full rounded-full border border-white/15 bg-ice-black/60 px-4 py-2.5 text-sm text-ice-white placeholder:text-ice-chrome-dark/70 outline-none focus:border-ice-chrome"
        />
        <button
          type="submit"
          className="btn-glow-chrome shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-ice-black"
        >
          Notify me
        </button>
      </div>
      {submitted && (
        <p className="mt-2 text-xs text-ice-chrome">
          Danke! Wir melden uns, sobald es losgeht. ✔
        </p>
      )}
    </form>
  );
}
