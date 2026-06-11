import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AssistantFooterBar() {
  return (
    <div className="sticky bottom-0 border-t border-slate-900/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/dashboard" className="hidden sm:block">
          <Button variant="ghost" className="h-11 px-5 text-slate-600">
            Cancel
          </Button>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <Button variant="secondary" className="h-11 px-5 text-slate-700">
            Save draft
          </Button>
          <Button className="h-11 bg-slate-950 px-5 text-white hover:bg-slate-800">
            Continue
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}