import { Reveal } from "@/components/ui/Reveal";
import { IcedStar } from "@/components/ui/IcedStar";

// ---------------------------------------------------------------------
// PLATZHALTER-BEWERTUNGEN – kurze Beispiel-Reviews, damit die Sektion
// nicht leer wirkt. Bitte vor dem echten Launch durch eure tatsächlichen
// Kundenbewertungen ersetzen.
// ---------------------------------------------------------------------
const testimonials = [
  {
    quote:
      "Endlich Bling, das nicht nach zwei Wochen stumpf aussieht. Fühlt sich premium an, nicht wie billiges Fake-Ice.",
    name: "Jonas K.",
  },
  {
    quote:
      "Bestellt am Montag, Dienstag schon da. Sieht 1:1 aus wie auf den Fotos – eher noch krasser in echt.",
    name: "Malik R.",
  },
  {
    quote:
      "Erste Uhr mit richtig sauberem Iced-Out-Look, ohne dass es billig wirkt. Bin geflasht, kommt garantiert nicht die letzte Bestellung.",
    name: "Elias T.",
  },
];

export function HappyCustomers() {
  return (
    <section className="border-y border-white/10 bg-ice-anthracite">
      <div className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
        <Reveal>
          <div className="text-center">
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <IcedStar key={index} className="h-6 w-6" delay={index * 0.25} />
              ))}
            </div>
            <p className="font-headline mt-4 text-2xl font-bold sm:text-3xl">
              <span className="text-gradient-ice">500+</span> Happy Customers
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-ice-black/40 p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <IcedStar key={starIndex} className="h-4 w-4" delay={starIndex * 0.2 + index * 0.6} />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ice-chrome-dark">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ice-chrome">
                  {testimonial.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
