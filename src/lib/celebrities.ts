export type Celebrity = {
  name: string;
  /** PLATZHALTER: Bildpfad in public/celebrities/ ergänzen, sobald vorhanden */
  image?: string;
};

// ---------------------------------------------------------------------
// "Worn By"-Sektion auf der Startseite. PLATZHALTER-DATEN – trage hier
// später die echten Namen (und optional Bildpfade) ein, sobald ihr
// Kooperationen/Erwähnungen habt. Jeder Eintrag erscheint automatisch
// als Kachel mit blauem Verified-Haken, am Komponenten-Code musst du
// nichts ändern.
// ---------------------------------------------------------------------
export const celebrities: Celebrity[] = [
  { name: "Name folgt" },
  { name: "Name folgt" },
  { name: "Name folgt" },
  { name: "Name folgt" },
  { name: "Name folgt" },
];
