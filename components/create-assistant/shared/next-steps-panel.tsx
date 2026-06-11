import {
  Check,
  FileText,
  Globe,
  Layers3,
  Search,
} from "lucide-react";

const steps = [
  {
    icon: Globe,
    label: "We&apos;ll crawl your website",
  },
  {
    icon: FileText,
    label: "Extract content and structure",
  },
  {
    icon: Layers3,
    label: "Index into knowledge base",
  },
  {
    icon: Search,
    label: "Make it searchable for your assistant",
  },
];

export function NextStepsPanel() {
  return (
    <section className="rounded-[30px] border border-slate-900/5 bg-white/80 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:p-6">
      <h3 className="text-lg font-medium text-slate-950">What happens next?</h3>

      <div className="mt-4 space-y-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.label}
              className="flex items-center gap-3 rounded-[20px] border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <Icon className="h-4 w-4" />
              </div>
              <div className="text-sm text-slate-700">{step.label}</div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-[24px] border border-slate-200 bg-[#fbfbfd] p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <Check className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-medium text-slate-950">Ready for step 2</div>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              After this, we&apos;ll add sources, live data, and final deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}