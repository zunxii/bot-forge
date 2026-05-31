const steps = [
  {
    no: "01",
    title: "Add sources",
    text: "Website URLs, sitemap, PDFs, FAQs, and product data are imported into one workspace.",
  },
  {
    no: "02",
    title: "Configure behavior",
    text: "Choose the assistant tone, welcome copy, escalation behavior, and visual theme.",
  },
  {
    no: "03",
    title: "Deploy everywhere",
    text: "Install with a script tag, React component, or API endpoint once your widget is ready.",
  },
];

export function Workflow() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="max-w-xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            How it works
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A guided setup that feels like a polished software product.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            No workflow builder, no node editor, and no technical clutter. The user is led through a
            clean setup that gets them to a working chatbot as fast as possible.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step) => (
            <div
              key={step.no}
              className="flex gap-5 rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_16px_60px_rgba(15,23,42,0.04)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-[#fbfaf7] text-sm font-semibold text-slate-950">
                {step.no}
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}