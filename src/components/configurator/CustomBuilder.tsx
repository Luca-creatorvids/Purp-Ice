"use client";

import { useMemo, useState } from "react";
import { baseModels } from "@/lib/configurator";
import { ProgressSteps } from "./ProgressSteps";
import { ModelStep } from "./ModelStep";
import { SummarySidebar } from "./SummarySidebar";

export function CustomBuilder() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const selectedModel = useMemo(
    () => baseModels.find((model) => model.slug === selectedSlug) ?? null,
    [selectedSlug]
  );

  // Gesamtpreis = Basismodell-Preis (+ später Rahmen-Aufpreis aus Schritt 2)
  const totalPrice = selectedModel?.startPrice ?? 0;

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
          <ProgressSteps currentStep={1} />
        </div>
      </header>

      <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1">
          <ModelStep selectedSlug={selectedSlug} onSelect={setSelectedSlug} />
        </div>

        <SummarySidebar selectedModel={selectedModel} totalPrice={totalPrice} />
      </div>
    </div>
  );
}
