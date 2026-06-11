import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronRight,
  Globe,
  PencilLine,
  RefreshCw,
} from "lucide-react";

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white px-4 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
      <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold tracking-tight text-slate-950">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{hint}</div>
    </div>
  );
}

export function WebsiteStepPanel() {
  return (
    <section className="rounded-[30px] border border-slate-900/5 bg-white/80 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:p-6">
      <div className="flex flex-col gap-1">
        <div className="text-[11px] font-medium uppercase tracking-[0.26em] text-indigo-500">
          Step 1 of 5
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
          Add your website
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-500">
          We&apos;ll crawl and index your website to understand your business.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="rounded-[26px] border border-slate-900/10 bg-white p-5">
          <label className="text-sm font-medium text-slate-700">Website URL</label>

          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.03)]">
            <Globe className="h-5 w-5 text-slate-400" />
            <div className="flex-1 text-sm text-slate-950">https://acmestore.com</div>
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Enter your website homepage. We&apos;ll discover the rest.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-[20px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          Great! We can access your website.
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
              Domain access
            </div>
            <div className="mt-2 inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
              Public
            </div>
            <p className="mt-2 text-xs text-slate-500">No authentication required</p>
          </div>

          <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
                  Crawl limit
                </div>
                <div className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                  500 pages
                </div>
                <p className="mt-1 text-xs text-slate-500">You can increase this later</p>
              </div>
              <button className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50">
                <PencilLine className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-900/10 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-medium text-slate-950">Website snapshot</div>
              <p className="text-xs text-slate-500">
                We use this to understand your visual identity and customer experience.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-indigo-600 shadow-sm transition hover:bg-slate-50">
              <RefreshCw className="h-3.5 w-3.5" />
              Retake snapshot
            </button>
          </div>

          <div className="mt-4 overflow-hidden rounded-[24px] border border-slate-200 bg-[#fcfcfd]">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="rounded-md bg-slate-950 px-2 py-0.5 text-[10px] font-semibold tracking-[0.24em] text-white">
                  ACME
                </div>
                <div className="hidden text-xs text-slate-500 sm:block">Shop</div>
                <div className="hidden text-xs text-slate-500 sm:block">Collections</div>
                <div className="hidden text-xs text-slate-500 sm:block">About</div>
                <div className="hidden text-xs text-slate-500 sm:block">Help</div>
              </div>
              <div className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-400">
                •
              </div>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[1fr_0.92fr] lg:p-6">
              <div>
                <div className="max-w-sm">
                  <div className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Timeless Essentials
                  </div>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                    Quality products that stand the test of time.
                  </p>
                  <Button className="mt-5 h-10 rounded-full bg-slate-950 px-4 text-sm text-white hover:bg-slate-800">
                    Shop now
                  </Button>
                </div>
              </div>

              <div className="relative min-h-[220px] overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_48%),linear-gradient(180deg,#f9fafb,white)]">
                <div className="absolute right-6 top-4 h-36 w-28 rounded-[28px] bg-[linear-gradient(180deg,#f3f4f6,#d1d5db)] shadow-[0_16px_40px_rgba(15,23,42,0.12)]" />
                <div className="absolute bottom-3 left-6 h-28 w-32 rounded-[26px] bg-[linear-gradient(180deg,#ffffff,#e5e7eb)] shadow-[0_16px_40px_rgba(15,23,42,0.08)]" />
                <div className="absolute bottom-6 right-3 h-20 w-20 rounded-full bg-slate-200/70 blur-xl" />
              </div>
            </div>

            <div className="grid gap-3 border-t border-slate-200 bg-slate-950 px-4 py-4 text-white sm:grid-cols-4">
              <PreviewStat label="Pages discovered" value="148" />
              <PreviewStat label="Product pages" value="72" />
              <PreviewStat label="Collection pages" value="24" />
              <PreviewStat label="Blog pages" value="8" />
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard label="Pages discovered" value="148" hint="Last crawled 2m ago" />
          <StatCard label="Text pages" value="72" hint="Product + support pages" />
          <StatCard label="Collections" value="24" hint="Structured discovery" />
        </div>

        <div className="rounded-[22px] border border-slate-200 bg-white px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-950">Advanced settings</div>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] bg-white/5 px-4 py-3 ring-1 ring-white/8">
      <div className="text-lg font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/55">{label}</div>
    </div>
  );
}