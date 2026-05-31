const items = [
  {
    title: "Before",
    points: [
      "Visitors ask repetitive product and support questions",
      "Teams answer the same stock, sizing, and policy queries all day",
      "Generic chatbots feel detached from the business",
    ],
  },
  {
    title: "After",
    points: [
      "A branded assistant answers like it belongs on the site",
      "Live data improves accuracy and product recommendations",
      "Support load drops while conversion quality improves",
    ],
  },
];

export function ProblemSolution() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((section) => (
          <div
            key={section.title}
            className="rounded-[2rem] border border-slate-900/10 bg-white p-8 shadow-[0_16px_60px_rgba(15,23,42,0.05)]"
          >
            <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
              {section.title}
            </div>
            <div className="mt-6 space-y-4">
              {section.points.map((point) => (
                <div key={point} className="flex gap-3 text-slate-600">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-950" />
                  <p className="leading-7">{point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}