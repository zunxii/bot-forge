const faqs = [
  {
    q: "Can the chatbot use live stock and product data?",
    a: "Yes. That is part of the core product direction, not an afterthought.",
  },
  {
    q: "Will it support a simple script embed?",
    a: "Yes. The first integration should be a clean script embed, with React and API options later.",
  },
  {
    q: "Does the user need to understand AI setup?",
    a: "No. The experience should stay guided and business-friendly from the first screen to launch.",
  },
  {
    q: "Is this only for ecommerce?",
    a: "Ecommerce is the primary launch use case, but the structure also works for SaaS and service businesses.",
  },
];

export function FAQ() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">FAQ</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Answers before launch.
        </h2>
      </div>

      <div className="mt-12 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-[1.5rem] border border-slate-900/10 bg-white p-5 shadow-[0_16px_60px_rgba(15,23,42,0.04)]"
          >
            <summary className="cursor-pointer list-none text-base font-medium text-slate-950">
              {faq.q}
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}