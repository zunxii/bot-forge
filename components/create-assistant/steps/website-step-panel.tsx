import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ChevronRight,
  Globe,
  Info,
  PencilLine,
  RefreshCw,
  ShoppingBag,
  ArrowRight,
  Loader2,
  Sparkles
} from "lucide-react";

export function WebsiteStepPanel({
  onAnalyzed,
  onNext,
}: {
  onAnalyzed?: () => void;
  onNext?: () => void;
}) {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "analyzing" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    
    setStatus("analyzing");
    
    setTimeout(() => {
      setStatus("success");
      onAnalyzed?.();
    }, 2000);
  };

  return (
    <section className="rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <Sparkles className="h-3 w-3" /> Step 1
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
          Connect your website
        </h2>
        <p className="max-w-2xl text-sm text-zinc-500">
          We'll crawl your site to automatically build your initial knowledge base.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-950 mb-2">Website URL</label>

          <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-1.5 shadow-sm transition focus-within:border-zinc-400 focus-within:ring-4 focus-within:ring-zinc-100">
            <Globe className="h-4 w-4 text-zinc-400" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              disabled={status !== "idle"}
              className="flex-1 h-9 text-sm text-zinc-950 bg-transparent outline-none placeholder:text-zinc-400 disabled:opacity-50"
              required
            />
            {status === "success" && <CheckCircle2 className="h-4 w-4 text-zinc-950" />}
            {status === "analyzing" && <Loader2 className="h-4 w-4 text-zinc-400 animate-spin" />}
            {status === "idle" && (
              <Button type="submit" className="h-7 rounded-md bg-zinc-950 px-3 text-[11px] text-white hover:bg-zinc-800 transition">
                Analyze
              </Button>
            )}
          </div>
        </div>

        {status === "success" && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
            <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-800">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-zinc-950" />
              Website successfully analyzed and accessible.
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-zinc-200/60 bg-white p-4 shadow-sm">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                  Domain access
                </div>
                <div className="mt-2 inline-flex rounded border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-medium text-zinc-800">
                  Public
                </div>
                <p className="mt-2 text-xs text-zinc-500">No authentication required</p>
              </div>

              <div className="rounded-xl border border-zinc-200/60 bg-white p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                      Crawl limit
                    </div>
                    <div className="mt-2 text-lg font-semibold tracking-tight text-zinc-950">
                      500 pages
                    </div>
                  </div>
                  <button type="button" className="rounded-md border border-zinc-200 p-1.5 text-zinc-400 hover:bg-zinc-50 hover:text-zinc-950 transition">
                    <PencilLine className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-100 flex justify-end">
              <button onClick={onNext} type="button" className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 shadow-sm">
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
}