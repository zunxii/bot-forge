import { ArrowRight, Clock3 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export function HeroChatPreview() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[520px]">
        <div className="absolute inset-0 rounded-[44px] bg-[radial-gradient(circle_at_50%_40%,rgba(126,145,255,0.28)_0%,rgba(126,145,255,0.14)_20%,rgba(255,255,255,0)_62%)] blur-3xl" />

        <GlassCard className="relative overflow-hidden p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-[11px] font-semibold text-white">
                T
              </div>
              <div>
                <div className="text-[13px] font-semibold text-slate-900">Hi, I&apos;m your assistant</div>
                <div className="text-[11px] text-slate-500">How can I help you today?</div>
              </div>
            </div>
            <div className="rounded-full px-2 py-1 text-slate-400">•••</div>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="max-w-[78%] rounded-2xl bg-slate-100 px-4 py-3 text-[13px] font-medium text-slate-700 shadow-sm">
              Do you have the black hoodie in medium?
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-[12px] font-semibold text-white shadow-sm">
              T
            </div>
            <div className="max-w-[82%] rounded-2xl bg-white px-4 py-3 text-[13px] leading-6 text-slate-700 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
              Yes! The Black Oversized Hoodie is in stock in Medium.
              <br />
              Would you like me to show similar options under ₹2000?
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 text-slate-400">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
              <Clock3 className="h-3.5 w-3.5" />
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
              <span className="text-[14px] leading-none">•••</span>
            </div>
          </div>

          <div className="mt-8 flex h-14 items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 text-[13px] text-slate-400 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
            <span>Ask anything about our products...</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7a8aff] to-[#9aa8ff] text-white shadow-md shadow-[#8596ff]/30">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}