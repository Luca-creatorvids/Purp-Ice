import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { celebrities } from "@/lib/celebrities";

export function WornBy() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark">
          Worn By
        </span>
        <h2 className="font-headline mt-2 text-3xl font-bold sm:text-4xl">
          Getragen von <span className="text-gradient-ice">den Größten.</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-8">
          {celebrities.map((celebrity, index) => (
            <div key={index} className="flex w-24 flex-col items-center gap-3">
              <div className="relative h-20 w-20 shrink-0">
                <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-ice-anthracite-light via-ice-anthracite to-ice-black">
                  {celebrity.image ? (
                    <Image src={celebrity.image} alt={celebrity.name} fill className="object-cover" />
                  ) : (
                    <PersonGlyph className="h-9 w-9 text-ice-chrome-dark opacity-60" />
                  )}
                </div>
                <VerifiedBadge className="absolute bottom-0 right-0 h-6 w-6 rounded-full ring-2 ring-ice-black" />
              </div>
              <span className="text-xs text-ice-chrome-dark">{celebrity.name}</span>
              {celebrity.handle && (
                <span className="-mt-2.5 text-[0.65rem] text-ice-chrome-dark/60">{celebrity.handle}</span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function PersonGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#3b9eff"
        d="M12 1.6l2.35 1.6 2.84-.3 1.06 2.65 2.65 1.06-.3 2.84 1.6 2.35-1.6 2.35.3 2.84-2.65 1.06-1.06 2.65-2.84-.3L12 22.4l-2.35-1.6-2.84.3-1.06-2.65-2.65-1.06.3-2.84L1.8 12l1.6-2.35-.3-2.84 2.65-1.06 1.06-2.65 2.84.3L12 1.6Z"
      />
      <path d="M8.2 12.3l2.4 2.4 5-5.2" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
