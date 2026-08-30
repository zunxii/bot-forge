import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

export function AssistantFooterBar({
  currentStep,
  onNext,
  onBack,
  isDeploying,
}: {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  isDeploying?: boolean;
}) {
  return (
    <div className="sticky bottom-0 border-t border-slate-900/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {currentStep > 1 && (
            <Button variant="ghost" className="h-11 px-5 text-slate-600" onClick={onBack} disabled={isDeploying}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Button variant="secondary" className="h-11 px-5 text-slate-700" disabled={isDeploying}>
            Save draft
          </Button>
          <Button 
            className="h-11 bg-slate-950 px-5 text-white hover:bg-slate-800 disabled:opacity-50" 
            onClick={onNext}
            disabled={isDeploying}
          >
            {isDeploying ? (
              <>
                Deploying...
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                {currentStep === 5 ? "Deploy Assistant" : "Continue"}
                {currentStep !== 5 && <ArrowRight className="ml-2 h-4 w-4" />}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}