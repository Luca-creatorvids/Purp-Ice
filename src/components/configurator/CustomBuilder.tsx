"use client";

import { useMemo, useState } from "react";
import { bezelStyles, watchColors } from "@/lib/configurator";
import { ProgressSteps } from "./ProgressSteps";
import { ColorStep } from "./ColorStep";
import { BezelStep } from "./BezelStep";
import { FinishStep } from "./FinishStep";
import { StepReveal } from "./StepReveal";
import { SummarySidebar } from "./SummarySidebar";

export function CustomBuilder() {
  const [colorSlug, setColorSlug] = useState<string | null>(null);
  const [bezelSlug, setBezelSlug] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const color = useMemo(() => watchColors.find((c) => c.slug === colorSlug) ?? null, [colorSlug]);
  const bezel = useMemo(() => bezelStyles.find((b) => b.slug === bezelSlug) ?? null, [bezelSlug]);

  const currentStep = !color ? 1 : !bezel ? 2 : 3;
  const totalPrice = (color?.price ?? 0) + (bezel?.surcharge ?? 0);

  function handleSelectColor(slug: string) {
    setColorSlug(slug);
    setAddedToCart(false);
  }

  function handleSelectBezel(slug: string) {
    setBezelSlug(slug);
    setAddedToCart(false);
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
      <header>
        <span className="text-xs font-semibold uppercase tracking-widest text-ice-chrome-dark">
          Custom Builder
        </span>
        <h1 className="font-headline mt-2 text-3xl font-bold sm:text-4xl">
          <span className="text-gradient-ice">Baue deine Uhr</span>
        </h1>
        <div className="mt-6">
          <ProgressSteps currentStep={currentStep} />
        </div>
      </header>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <ColorStep selectedSlug={colorSlug} onSelect={handleSelectColor} />

          {color && (
            <StepReveal key="bezel-step">
              <BezelStep selectedSlug={bezelSlug} onSelect={handleSelectBezel} />
            </StepReveal>
          )}

          {color && bezel && (
            <StepReveal key="finish-step">
              <FinishStep
                color={color}
                bezel={bezel}
                totalPrice={totalPrice}
                addedToCart={addedToCart}
                onAddToCart={() => setAddedToCart(true)}
              />
            </StepReveal>
          )}
        </div>

        <SummarySidebar
          color={color}
          bezel={bezel}
          totalPrice={totalPrice}
          addedToCart={addedToCart}
          onAddToCart={() => setAddedToCart(true)}
        />
      </div>
    </div>
  );
}
