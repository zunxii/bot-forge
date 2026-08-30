import {
  BadgeCheck,
  Database,
  FileText,
  Globe,
  Layers3,
  Sparkles,
  Type,
  Bot,
} from "lucide-react";

function DetailRow({
  label,
  value,
  swatch,
}: {
  label: string;
  value: string;
  swatch?: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 py-3 last:border-0">
      <div className="text-sm text-slate-600">{label}</div>
      <div className="flex items-center gap-2 text-sm font-medium text-slate-950">
        {swatch ? <span className="h-3 w-3 rounded-full" style={{ backgroundColor: swatch }} /> : null}
        {value}
      </div>
    </div>
  );
}

export function WebsiteIntelligencePanel() {
  return (
    <section className="rounded-[30px] border border-slate-900/5 bg-white/80 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-slate-950">
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <h3 className="text-lg font-medium">Website intelligence</h3>
          </div>
          <p className="mt-1 text-sm text-slate-500">Detected from your website</p>
        </div>
      </div>

      <div className="mt-5 rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-center gap-4">
          <div className="relative flex h-[72px] w-[72px] items-center justify-center">
            {/* Simple pie chart representation */}
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90 transform">
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e2e8f0" strokeWidth="20" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#111827" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="188.4" />
              <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3B82F6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="226.08" className="rotate-[-90deg] origin-center" />
            </svg>
          </div>

          <div className="min-w-0">
            <div className="text-sm font-medium text-slate-950">Design DNA extracted</div>
            <p className="mt-1 max-w-xs text-sm leading-6 text-slate-500">
              We analyzed your site&apos;s visual identity to match your assistant experience.
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-1">
          <DetailRow label="Primary color" value="#111827" swatch="#111827" />
          <DetailRow label="Accent color" value="#3B82F6" swatch="#3B82F6" />
          <DetailRow label="Typography" value="Inter" />
          <DetailRow label="Tone of voice" value="Professional" />
          <DetailRow label="Industry" value="E-commerce" />
        </div>
      </div>

      <div className="mt-4 rounded-[26px] border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.03)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-slate-950">Apply website styling</div>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Make your assistant look and feel native to your website.
            </p>
          </div>

          <div className="flex h-7 w-12 items-center rounded-full bg-indigo-500 p-1 shadow-sm">
            <div className="ml-auto h-5 w-5 rounded-full bg-white shadow-sm" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-[#f5f3ff] px-5 py-4 text-[13px] font-medium leading-6 text-indigo-700">
        <Sparkles className="h-4 w-4 shrink-0" />
        We&apos;ll use your brand colors, fonts, and tone to create a seamless experience.
      </div>
    </section>
  );
}