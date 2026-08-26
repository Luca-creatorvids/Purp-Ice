import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Reines Bild-Break zwischen zwei Text-lastigen Sektionen, damit die Seite
 * nicht nur aus schwarzem Hintergrund besteht.
 */
export function LifestyleBreak() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
      <Reveal>
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/community/lukeba-lifestyle.jpg"
            alt="Castello Jr Lukeba im Alltag mit PURPICE"
            fill
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
