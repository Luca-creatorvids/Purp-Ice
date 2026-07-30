import { Reveal } from "@/components/ui/Reveal";

// PLATZHALTER: Diese Kacheln spaeter durch einen echten Instagram-Feed
// (z.B. via Instagram Basic Display API oder ein Tool wie SnapWidget/Elfsight)
// oder durch echte Kundenbilder / Rapper-Flexes ersetzen.
const placeholderPosts = Array.from({ length: 8 }, (_, index) => index);

export function SocialProof() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <Reveal>
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold sm:text-4xl">
            Getragen. Gepostet. <span className="text-gradient-ice">Geiced.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ice-chrome-dark">
            Folge @purpice auf Instagram und TikTok – tagge uns in deinen Fotos für
            die Chance, hier featured zu werden.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {placeholderPosts.map((index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-ice-anthracite-light to-ice-black"
            >
              <div className="flex h-full w-full items-center justify-center text-ice-chrome-dark">
                <InstagramGlyph className="h-8 w-8 opacity-50 transition-opacity group-hover:opacity-90" />
              </div>
              <div className="sparkle-layer" aria-hidden="true" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
