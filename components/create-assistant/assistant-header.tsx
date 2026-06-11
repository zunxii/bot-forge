import { Button } from "@/components/ui/button";
import { HelpCircle, Sparkles, X } from "lucide-react";

export function AssistantHeader() {
  return (
    <header className="border-b border-slate-900/5 bg-white/70 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
              Create Assistant
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
              Build your assistant step by step
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden h-10 px-4 text-indigo-600 sm:inline-flex">
            Save draft
          </Button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50">
            <HelpCircle className="h-4 w-4" />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}