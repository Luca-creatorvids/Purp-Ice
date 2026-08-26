import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function FounderSpotlight() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
      <Reveal>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/community/owner-lukeba.jpg"
            alt="Owner Shadrach mit Fußball-Profi Castello Lukeba"
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-5 text-sm text-ice-chrome-dark">
          Owner <span className="font-semibold text-ice-white">Shadrach</span> mit Fußball-Profi{" "}
          <span className="font-semibold text-ice-white">Castello Lukeba</span>
        </p>
      </Reveal>
    </section>
  );
}
