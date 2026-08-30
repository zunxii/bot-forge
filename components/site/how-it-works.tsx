import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  ArrowRight, 
  Boxes, 
  Globe, 
  LayoutGrid, 
  Sparkles, 
  Workflow, 
  Palette, 
  Settings, 
  BarChart2, 
  Cpu, 
  HelpCircle, 
  FileText, 
  FileSpreadsheet 
} from "lucide-react";

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

const sourceItems = [
  {
    title: "Website",
    subtitle: "https://yourstore.com",
    status: "Indexed",
    icon: Globe,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "FAQs",
    subtitle: "Imported 245 items",
    status: "Parsed",
    icon: FileText,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Policy.pdf",
    subtitle: "Uploaded 2 days ago",
    status: "Indexed",
    icon: FileText,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    title: "Products.csv",
    subtitle: "12,430 products",
    status: "Indexed",
    icon: FileSpreadsheet,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

const sidebarItems = [
  { label: "Sources", icon: LayoutGrid },
  { label: "Data Connections", icon: Workflow },
  { label: "Appearance", icon: Palette },
  { label: "Behavior", icon: Cpu },
  { label: "Deploy", icon: Boxes },
  { label: "Analytics", icon: BarChart2 },
  { label: "Settings", icon: Settings },
];

export function HowItWorks() {
  return (
    <section className="relative z-10">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
          {/* Left: text + steps */}
          <div className="pt-2">
            <div className="reveal">
              <SectionLabel>How it works</SectionLabel>
              <h2 className="max-w-[420px] text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[46px]">
                Connect your data.
                <br />
                Deliver real answers.
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-start gap-4`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#8796ff] shadow-[0_8px_18px_rgba(15,23,42,0.04)]">
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
              className="reveal mt-8 inline-flex h-12 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 text-[14px] font-semibold text-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition hover:-translate-y-0.5"
            >
              Explore the platform
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right: dashboard UI mock */}
          <div className="reveal relative">
            <GlassCard className="px-4 py-4 sm:px-5 sm:py-5">
              {/* Window chrome dots */}
              <div className="mb-3 flex items-center gap-1.5 px-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd93d]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#6bcb77]/70" />
              </div>

              <div className="grid gap-4 md:grid-cols-[0.34fr_0.66fr]">
                {/* Sidebar nav */}
                <div className="rounded-[22px] border border-slate-200 bg-[#fbfcff] px-3 py-4">
                  <div className="mb-4 px-2 text-[12px] font-semibold text-slate-800">Your Assistant</div>
                  <div className="space-y-0.5 text-[13px] text-slate-500">
                    {sidebarItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] transition ${
                            idx === 0
                              ? "bg-indigo-50 font-semibold text-indigo-600"
                              : "text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          <Icon className="h-[18px] w-[18px]" />
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sources panel */}
                <div className="rounded-[22px] border border-slate-200 bg-white px-5 py-5">
                  <div className="text-base font-semibold text-slate-900">Sources</div>
                  <div className="mt-1 text-[13px] text-slate-500">
                    Add or manage knowledge sources for your assistant.
                  </div>

                  <div className="mt-5 space-y-3">
                    {sourceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="flex items-center justify-between rounded-[16px] border border-slate-100 bg-white px-4 py-3 shadow-[0_2px_10px_rgba(15,23,42,0.02)] transition hover:border-slate-200"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}>
                              <Icon className="h-[18px] w-[18px]" />
                            </div>
                            <div>
                              <div className="text-[13px] font-semibold text-slate-900">{item.title}</div>
                              <div className="text-[12px] text-slate-500">{item.subtitle}</div>
                            </div>
                          </div>
                          <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                            {item.status}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button className="mt-4 inline-flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-[13px] font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                    <span className="text-base leading-none text-slate-400">+</span> Add source
                  </button>
                </div>
              </div>

              {/* Stats row */}
              <div className="absolute -bottom-5 left-[10%] right-[10%] mx-auto flex items-center justify-between divide-x divide-slate-100 rounded-[20px] border border-slate-100 bg-white px-6 py-4 shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
                {[
                  ["Sources",     "24"],
                  ["Documents",   "1,245"],
                  ["Products",    "12.4K"],
                  ["Queries / day", "3,842"],
                ].map(([label, value]) => (
                  <div key={label} className="flex-1 px-4 text-center first:pl-0 last:pr-0">
                    <div className="text-[11px] text-slate-500">{label}</div>
                    <div className="mt-1 text-[20px] font-semibold tracking-[-0.05em] text-slate-950">{value}</div>
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