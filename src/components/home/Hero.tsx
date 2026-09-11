import Link from "next/link";
import { ParallaxGlow } from "./ParallaxGlow";
import { HeroAnimationSlot } from "./HeroAnimationSlot";

export function Hero() {
  return (
    // bg-black (statt bg-ice-black): das Hero-Video hat selbst einen
    // reinschwarzen Hintergrund - nur mit #000 verschmilzt der Rand
    // wirklich unsichtbar, mit dem sonstigen Seiten-Ice-Black gab es
    // einen leichten Farbstich-Unterschied am Video-Rand.
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <ParallaxGlow />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-16 lg:grid-cols-[1fr_1.3fr] lg:px-10 lg:pt-24">
        <div>
          <span className="inline-block rounded-full border border-ice-chrome/30 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ice-chrome">
            Made in Munich
          </span>

          <h1 className="font-headline mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-ice">Iced out.</span>
            <br />
            <span className="text-ice-white">Built different.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ice-chrome-dark">
            Jewellery, crafted with moissanite brilliance — made in Munich.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/watches"
              className="btn-glow-chrome rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-ice-black"
            >
              Watches
            </Link>
          </div>
        </div>

        {/* Hero-Animationsplatz: siehe components/home/HeroAnimationSlot.tsx */}
        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none lg:w-[115%] lg:-mr-10">
          <HeroAnimationSlot />
        </div>
      </div>
    </section>
  );
}
