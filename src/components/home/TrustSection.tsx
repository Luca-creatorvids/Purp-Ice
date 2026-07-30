import { Reveal } from "@/components/ui/Reveal";

const trustPoints = [
  {
    title: "Gleicher Glanz",
    description:
      "Moissanite bricht Licht sogar noch stärker als ein Diamant – für maximales Funkeln auf den ersten Blick.",
  },
  {
    title: "Bruchtest & langlebig",
    description:
      "Mit einer Härte von 9,25 auf der Mohs-Skala hält Moissanite dem Alltag locker stand.",
  },
  {
    title: "Ethisch vertretbar",
    description:
      "Moissanite wird im Labor hergestellt – kein Konfliktrohstoff, kein Minenabbau.",
  },
  {
    title: "Fairer Preis",
    description:
      "Bis zu 90% günstiger als vergleichbarer Diamant-Besatz – Iced Out ohne Kompromisse beim Budget.",
  },
];

export function TrustSection() {
  return (
    <section className="border-y border-white/10 bg-ice-anthracite">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal>
          <h2 className="font-headline max-w-2xl text-3xl font-bold sm:text-4xl">
            Moissanite statt Diamant –{" "}
            <span className="text-gradient-ice">gleicher Glanz, fairer Preis.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 100}>
              <div className="h-full rounded-2xl border border-white/10 bg-ice-black/40 p-6">
                <h3 className="font-headline text-lg font-semibold text-ice-chrome">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ice-chrome-dark">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
