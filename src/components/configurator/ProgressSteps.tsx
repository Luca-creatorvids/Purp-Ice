type ProgressStepsProps = {
  currentStep: 1 | 2 | 3;
};

const steps = [
  { step: 1, label: "Farbe" },
  { step: 2, label: "Rahmen" },
  { step: 3, label: "Fertig" },
] as const;

/**
 * Kleine Schritte-Anzeige oben im Custom Builder: "1. Farbe → 2. Rahmen →
 * 3. Fertig". Zeigt, wo der Kunde gerade steht – künftige Schritte werden
 * gedimmt dargestellt, solange sie noch nicht erreichbar sind.
 */
export function ProgressSteps({ currentStep }: ProgressStepsProps) {
  return (
    <ol className="flex items-center gap-2 sm:gap-4">
      {steps.map(({ step, label }, index) => {
        const state =
          step === currentStep ? "current" : step < currentStep ? "done" : "upcoming";

        return (
          <li key={step} className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                  state === "current"
                    ? "border-ice-chrome bg-ice-chrome text-ice-black"
                    : state === "done"
                      ? "border-ice-chrome text-ice-chrome"
                      : "border-white/15 text-ice-chrome-dark"
                }`}
              >
                {step}
              </span>
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${
                  state === "upcoming" ? "text-ice-chrome-dark" : "text-ice-white"
                }`}
              >
                {label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span className="h-px w-6 shrink-0 bg-white/15 sm:w-10" aria-hidden="true" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
