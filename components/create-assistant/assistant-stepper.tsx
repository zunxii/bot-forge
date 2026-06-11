const steps = [
  { no: "1", label: "Website", active: true },
  { no: "2", label: "Sources", active: false },
  { no: "3", label: "Live Data", active: false },
  { no: "4", label: "Branding", active: false },
  { no: "5", label: "Deploy", active: false },
];

export function AssistantStepper() {
  return (
    <div className="rounded-[28px] border border-slate-900/5 bg-white/80 px-4 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="grid gap-3 sm:grid-cols-5">
        {steps.map((step) => (
          <div key={step.label} className="flex items-center gap-3">
            <div
              className={[
                "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium",
                step.active
                  ? "border-indigo-200 bg-indigo-500 text-white shadow-[0_10px_24px_rgba(99,102,241,0.22)]"
                  : "border-slate-200 bg-white text-slate-500",
              ].join(" ")}
            >
              {step.no}
            </div>
            <div className="min-w-0">
              <div
                className={[
                  "text-sm font-medium",
                  step.active ? "text-indigo-600" : "text-slate-700",
                ].join(" ")}
              >
                {step.label}
              </div>
              <div className="mt-1 h-px bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}