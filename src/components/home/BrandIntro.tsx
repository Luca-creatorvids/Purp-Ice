import { Reveal } from "@/components/ui/Reveal";

export function BrandIntro() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
      <Reveal>
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          Diamant-Optik. <span className="text-gradient-ice">Fairer Preis.</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-ice-chrome-dark">
          Wir sind PURPICE, ein Newcomer aus München. Wir bauen Moissanite-Bezel-Kits,
          die genauso hart funkeln wie das Original – besetzt mit Moissanite statt echten
          Diamanten und ganz einfach selbst auf deiner eigenen Uhr montierbar. Gleicher
          Glanz, bruchtest und ethisch vertretbar, zu einem Bruchteil des Preises. Für
          alle, die auffallen wollen, ohne sich zu verschulden.
        </p>
      </Reveal>
    </section>
  );
}
