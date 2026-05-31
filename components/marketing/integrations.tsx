import { Cloud, Layers3, Store, Table2, Upload, Workflow } from "lucide-react";

const items = [
  { icon: Store, name: "Shopify" },
  { icon: Workflow, name: "WooCommerce" },
  { icon: Cloud, name: "Custom API" },
  { icon: Table2, name: "CSV" },
  { icon: Upload, name: "PDFs" },
  { icon: Layers3, name: "Sitemap" },
];

export function Integrations() {
  return (
    <section id="integrations" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
            Integrations
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Connect live business data when answers need to be accurate.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Static knowledge is not enough for ecommerce. Live product and inventory signals are what
            make the assistant useful.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="rounded-[1.75rem] border border-slate-900/10 bg-white p-5 text-center shadow-[0_16px_60px_rgba(15,23,42,0.04)]"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-[#fbfaf7] text-slate-950">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium text-slate-700">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}