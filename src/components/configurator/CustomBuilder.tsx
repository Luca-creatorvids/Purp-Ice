"use client";

import { useMemo, useState } from "react";
import { bezelStyles, colorways, watchShapes } from "@/lib/configurator";
import { ProgressSteps } from "./ProgressSteps";
import { CaseStep } from "./CaseStep";
import { BezelStep } from "./BezelStep";
import { StepReveal } from "./StepReveal";
import { SummarySidebar } from "./SummarySidebar";

export function CustomBuilder() {
  const [shapeSlug, setShapeSlug] = useState<string | null>(null);
  const [colorSlug, setColorSlug] = useState<string | null>(null);
  const [bezelSlug, setBezelSlug] = useState<string | null>(null);

  const shape = useMemo(() => watchShapes.find((s) => s.slug === shapeSlug) ?? null, [shapeSlug]);
  const color = useMemo(() => colorways.find((c) => c.slug === colorSlug) ?? null, [colorSlug]);
  const bezel = useMemo(() => bezelStyles.find((b) => b.slug === bezelSlug) ?? null, [bezelSlug]);

  const caseComplete = Boolean(shape && color);
  const currentStep = !caseComplete ? 1 : !bezel ? 2 : 3;

  const totalPrice = (shape?.startPrice ?? 0) + (color?.surcharge ?? 0) + (bezel?.surcharge ?? 0);

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
          <CaseStep
            selectedShapeSlug={shapeSlug}
            selectedColorSlug={colorSlug}
            onSelectShape={setShapeSlug}
            onSelectColor={setColorSlug}
          />

          {caseComplete && (
            <StepReveal key="bezel-step">
              <BezelStep selectedSlug={bezelSlug} onSelect={setBezelSlug} />
            </StepReveal>
          )}
        </div>

        <SummarySidebar shape={shape} color={color} bezel={bezel} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
