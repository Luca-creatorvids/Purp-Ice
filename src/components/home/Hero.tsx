import Link from "next/link";
import { ParallaxGlow } from "./ParallaxGlow";
import { WatchAnimationSlot } from "./WatchAnimationSlot";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-ice-black">
      <ParallaxGlow />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 lg:grid-cols-2 lg:px-10 lg:pt-24">
        <div>
          <span className="inline-block rounded-full border border-ice-chrome/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ice-chrome">
            Made in München
          </span>

          <h1 className="font-headline mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-ice">ICED OUT.</span>
            <br />
            <span className="text-ice-white">MADE IN MUNICH.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ice-chrome-dark">
            PURPICE bringt Luxus-Streetwear und Uhrmacherkunst zusammen: Custom-Uhren,
            besetzt mit Moissanite-Steinen – gleicher Glanz wie echte Diamanten, aber
            ohne den Luxuspreis. Kein steifes Rolex-Gehabe. Einfach hyped.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/watches"
              className="btn-glow-chrome rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ice-black"
            >
              Shop Watches
            </Link>
            <Link
              href="/bracelets"
              className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ice-white transition-colors hover:border-ice-chrome hover:text-ice-chrome"
            >
              Shop Bracelets
            </Link>
          </div>
        </div>

        {/* Hero-Animationsplatz: siehe components/home/WatchAnimationSlot.tsx */}
        <div className="relative mx-auto w-full max-w-md">
          <WatchAnimationSlot />
        </div>
      </div>
    </section>
  );
}
