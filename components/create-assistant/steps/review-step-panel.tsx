"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useWizard } from "@/lib/wizard/wizard-context";
import { DeploymentPreview } from "@/components/create-assistant/shared/deployment-preview";
import { IntegrationCard } from "@/components/create-assistant/shared/integration-card";

export function ReviewStepPanel() {
  const { state } = useWizard();

  if (!state.botId) {
    return (
      <section className="rounded-[30px] border border-slate-900/5 bg-white/80 p-6 text-sm text-slate-500 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
        Add and analyze your website in step 1 first.
      </section>
    );
  }

  const completedSources = state.sources.filter((s) => s.status === "completed");
  const failedSources = state.sources.filter((s) => s.status === "failed");

  return (
    <section className="rounded-[30px] border border-slate-900/5 bg-white/80 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:p-6">
      <div className="flex flex-col gap-1">
        <div className="text-[11px] font-medium uppercase tracking-[0.26em] text-indigo-500">Step 5 of 5</div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">Review &amp; deploy</h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-500">
          Here&apos;s everything your assistant knows. Deploy when you&apos;re ready — you can keep adding
          sources afterward from the dashboard.
        </p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-4">
          <div className="rounded-[26px] border border-slate-900/10 bg-white p-5">
            <div className="text-sm font-medium text-slate-950">Summary</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <SummaryStat label="Website" value={state.websiteUrl ? "Connected" : "—"} />
              <SummaryStat label="Sources ready" value={String(completedSources.length)} />
              <SummaryStat label="Live data tools" value={String(state.liveData.tools.length)} />
            </div>

            {failedSources.length > 0 && (
              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {failedSources.length} source{failedSources.length === 1 ? "" : "s"} failed to process — you
                can retry them from the Sources step.
              </div>
            )}
          </div>

          {state.embed ? (
            <>
              <div className="flex items-center gap-3 rounded-[20px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                Your assistant is live. Add either snippet below to your site.
              </div>

              <IntegrationCard
                title="CDN script tag"
                description="Drop this in your site's <head> — works on any stack."
                language="html"
                code={state.embed.scriptSnippet}
              />

              <IntegrationCard
                title="React component"
                description="For React / Next.js apps that want full styling control."
                language="tsx"
                code={state.embed.reactSnippet}
              />
            </>
          ) : (
            <div className="rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
              Hit <span className="font-medium text-slate-900">Deploy assistant</span> below to generate your
              embed code.
            </div>
          )}
        </div>

        <div className="rounded-[26px] border border-slate-900/10 bg-white p-5">
          <div className="text-sm font-medium text-slate-950">Preview</div>
          <div className="mt-4">
            <DeploymentPreview brand={state.brand} botName={state.botName} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[18px] border border-slate-200 bg-[#fbfbfd] px-4 py-3">
      <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">{label}</div>
      <div className="mt-1 text-lg font-semibold text-slate-950">{value}</div>
    </div>
  );
}
