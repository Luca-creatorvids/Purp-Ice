import { Reveal } from "@/components/ui/Reveal";

export function HappyCustomers() {
  return (
    <section className="border-y border-white/10 bg-ice-anthracite">
      <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:px-10">
        <Reveal>
          <div className="flex justify-center gap-1 text-ice-chrome">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} className="h-6 w-6" />
            ))}
          </div>
          <p className="font-headline mt-4 text-2xl font-bold sm:text-3xl">
            <span className="text-gradient-ice">500+</span> Happy Customers
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.95 6.28 6.85.82-5.1 4.78 1.4 6.87L12 17.77 5.9 21.25l1.4-6.87-5.1-4.78 6.85-.82L12 2.5Z" />
    </svg>
  );
}
