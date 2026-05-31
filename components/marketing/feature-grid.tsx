import { ArrowUpRight, FileText, PackageSearch, Palette, PlugZap, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Website and document training",
    text: "Index pages, PDFs, FAQs, policies, and product descriptions into one clean knowledge layer.",
  },
  {
    icon: PackageSearch,
    title: "Inventory-aware answers",
    text: "Tell customers what is in stock, what is similar, and what is likely to convert better.",
  },
  {
    icon: Palette,
    title: "Brand-matched UI",
    text: "The widget feels native, quiet, and premium rather than like a generic chatbot popup.",
  },
  {
    icon: PlugZap,
    title: "Flexible integrations",
    text: "Connect Shopify, WooCommerce, or a custom API when the customer has live data needs.",
  },
  {
    icon: Shield,
    title: "Enterprise-ready boundaries",
    text: "Keep tenant data isolated and access scoped from the start of the product architecture.",
  },
  {
    icon: Sparkles,
    title: "Smart product suggestions",
    text: "Move beyond support answers and surface better product options that help the user buy.",
  },
];

export function FeatureGrid() {
  return (
    <section id="product" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            Product
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A premium SaaS surface on top of live business intelligence.
          </h2>
        </div>
        <div className="hidden text-sm text-slate-500 lg:block">
          Built for conversion, trust, and clarity.
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group rounded-[2rem] border border-slate-900/10 bg-white p-6 shadow-[0_16px_60px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(15,23,42,0.07)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-[#fbfaf7] text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-slate-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}