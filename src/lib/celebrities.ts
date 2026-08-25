export type Celebrity = {
  name: string;
  /** Instagram-Handle, wird klein unter dem Namen angezeigt */
  handle?: string;
  /** PLATZHALTER: Bildpfad in public/celebrities/ ergänzen, sobald vorhanden */
  image?: string;
};

// ---------------------------------------------------------------------
// "Worn By"-Sektion auf der Startseite. Trage hier die echten Namen,
// Instagram-Handles und (optional) Bildpfade ein, sobald ihr
// Kooperationen/Erwähnungen habt. Jeder Eintrag erscheint automatisch
// als Kachel mit blauem Verified-Haken, am Komponenten-Code musst du
// nichts ändern.
// ---------------------------------------------------------------------
export const celebrities: Celebrity[] = [
  {
    name: "Castello Jr Lukeba",
    handle: "@jrcastello_",
    image: "/celebrities/castello-jr-lukeba.jpg",
  },
  { name: "Name folgt" },
  { name: "Name folgt" },
];
