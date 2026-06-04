import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Boxes, Database, LayoutGrid, Sparkles, Workflow } from "lucide-react";

const features = [
  {
    title: "Add your sources",
    desc: "Website, sitemap, PDFs, FAQs, policies, help docs and more.",
    icon: LayoutGrid,
  },
  {
    title: "Connect live data",
    desc: "Inventory, catalog, pricing, orders, or any API.",
    icon: Workflow,
  },
  {
    title: "Train and configure",
    desc: "We index, understand, and prepare your data.",
    icon: Sparkles,
  },
  {
    title: "Deploy anywhere",
    desc: "Embed on your site, share a link, or use our API.",
    icon: Boxes,
  },
];

export function HowItWorks() {
  return (
    <section className="relative z-10">
      <Container className="py-10 lg:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="max-w-[420px] text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[46px]">
              Connect your data.
              <br />
              Deliver real answers.
            </h2>

            <div className="mt-8 space-y-5">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#8796ff] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[16px] font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-1 max-w-[280px] text-[14px] leading-7 text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-[14px] font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5"
            >
              Explore the platform
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative">
            <GlassCard className="relative overflow-hidden p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-1.5 px-1">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>

              <div className="grid gap-4 md:grid-cols-[0.36fr_0.64fr]">
                <div className="rounded-[22px] border border-slate-200 bg-[#fafcff] p-4">
                  <div className="mb-4 text-[12px] font-semibold text-slate-800">Your Assistant</div>
                  <div className="space-y-1.5 text-[13px] text-slate-500">
                    {["Sources", "Data Connections", "Appearance", "Behavior", "Deploy", "Analytics", "Settings"].map(
                      (item, idx) => (
                        <div
                          key={item}
                          className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
                            idx === 0 ? "bg-[#eef2ff] text-[#637cff]" : ""
                          }`}
                        >
                          <span className={`h-2 w-2 rounded-full ${idx === 0 ? "bg-[#637cff]" : "bg-slate-300"}`} />
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                  <div className="text-[16px] font-semibold text-slate-900">Sources</div>
                  <div className="mt-1 text-[12px] text-slate-500">
                    Add or manage knowledge sources for your assistant.
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      ["Website", "https://yourstore.com", "Indexed"],
                      ["FAQs", "Imported 245 items", "Parsed"],
                      ["Policy.pdf", "Uploaded 2 days ago", "Indexed"],
                      ["Products.csv", "12,430 products", "Indexed"],
                    ].map(([title, sub, status]) => (
                      <div
                        key={title}
                        className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#fbfcff] px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef2ff] text-[#6b7dff]">
                            {title === "Policy.pdf" ? (
                              <Database className="h-4 w-4" />
                            ) : title === "FAQs" ? (
                              <LayoutGrid className="h-4 w-4" />
                            ) : (
                              <Workflow className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-slate-900">{title}</div>
                            <div className="text-[12px] text-slate-500">{sub}</div>
                          </div>
                        </div>
                        <div className="rounded-full bg-emerald-50 px-3 py-1 text-[12px] font-semibold text-emerald-600">
                          {status}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-4 inline-flex h-10 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-[13px] font-semibold text-slate-700 shadow-sm">
                    <span className="text-lg leading-none">+</span> Add source
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-4">
                {[
                  ["Sources", "24"],
                  ["Documents", "1,245"],
                  ["Products", "12.4K"],
                  ["Queries / day", "3,842"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[22px] border border-slate-200 bg-white p-4 text-center shadow-sm">
                    <div className="text-[12px] text-slate-500">{label}</div>
                    <div className="mt-1 text-[26px] font-semibold tracking-[-0.05em] text-slate-950">{value}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}