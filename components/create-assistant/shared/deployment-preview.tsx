"use client";

import { Bot } from "lucide-react";
import type { BrandState } from "@/lib/wizard/wizard-context";

export function DeploymentPreview({ brand, botName }: { brand: BrandState; botName: string }) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-[#fcfcfd]" style={{ fontFamily: brand.font }}>
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div className="text-xs text-slate-500">yourwebsite.com</div>
        <div className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-400">preview</div>
      </div>

      <div className="relative min-h-[260px] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.06),transparent_48%),linear-gradient(180deg,#f9fafb,white)] p-5">
        <div className="absolute bottom-4 right-4 w-72 max-w-[80%] overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
          <div
            className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-white"
            style={{ backgroundColor: brand.primaryColor }}
          >
            <Bot className="h-4 w-4" />
            {botName}
          </div>
          <div className="space-y-2 p-3">
            <div className="max-w-[85%] rounded-2xl bg-slate-100 px-3 py-2 text-xs text-slate-700">
              Hi! Ask me anything about {botName}.
            </div>
            <div
              className="ml-auto max-w-[85%] rounded-2xl px-3 py-2 text-right text-xs text-white"
              style={{ backgroundColor: brand.accentColor }}
            >
              Is this in stock?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
