"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AssistantSidebar } from "@/components/create-assistant/assistant-sidebar";
import { AssistantHeader } from "@/components/create-assistant/assistant-header";
import { AssistantStepper } from "@/components/create-assistant/assistant-stepper";
import { WebsiteStepPanel } from "@/components/create-assistant/steps/website-step-panel";
import { SourcesStepPanel } from "@/components/create-assistant/steps/sources-step-panel";
import { WebsiteIntelligencePanel } from "@/components/create-assistant/shared/website-intelligence-panel";
import { NextStepsPanel } from "@/components/create-assistant/shared/next-steps-panel";
import { SourceInsightsPanel } from "@/components/create-assistant/shared/source-insights-panel";
import { LiveDataStepPanel } from "@/components/create-assistant/steps/live-data-step-panel";
import { LiveDataInsightsPanel } from "@/components/create-assistant/shared/live-data-insights-panel";
import { BrandingStepPanel } from "@/components/create-assistant/steps/branding-step-panel";
import { BrandingPreviewPanel } from "@/components/create-assistant/shared/branding-preview-panel";
import { DeployStepPanel } from "@/components/create-assistant/steps/deploy-step-panel";
import { DeployStatusPanel } from "@/components/create-assistant/shared/deploy-status-panel";
import { Globe } from "lucide-react";
import { AssistantFooterBar } from "@/components/create-assistant/assistant-footer-bar";

export function CreateAssistantPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isWebsiteAnalyzed, setIsWebsiteAnalyzed] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    toast.loading("Deploying your assistant...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Assistant deployed successfully!");
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 selection:bg-zinc-200">
      <div className="mx-auto grid min-h-screen lg:grid-cols-[260px_1fr]">
        <AssistantSidebar />

        <div className="flex min-w-0 flex-col">
          <AssistantHeader />

          <main className="flex-1 px-4 pb-6 pt-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1160px]">
              <AssistantStepper currentStep={currentStep} />

              <div className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_0.95fr]">
                {currentStep === 1 && (
                  <>
                    <WebsiteStepPanel
                      onAnalyzed={() => setIsWebsiteAnalyzed(true)}
                      onNext={handleNext}
                    />
                    <div className="space-y-4">
                      {isWebsiteAnalyzed ? (
                        <>
                          <WebsiteIntelligencePanel />
                          <NextStepsPanel />
                        </>
                      ) : (
                        <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200/80 bg-zinc-50/50 p-8 text-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-400">
                            <Globe className="h-4 w-4" />
                          </div>
                          <h3 className="mt-4 text-sm font-medium tracking-tight text-zinc-950">Waiting for website</h3>
                          <p className="mt-1.5 text-xs text-zinc-500 max-w-[200px] mx-auto">
                            Enter your URL to see your AI's initial intelligence data.
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <SourcesStepPanel />
                    <div className="space-y-4">
                      <SourceInsightsPanel />
                    </div>
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <LiveDataStepPanel />
                    <div className="space-y-4">
                      <LiveDataInsightsPanel />
                    </div>
                  </>
                )}

                {currentStep === 4 && (
                  <>
                    <BrandingStepPanel />
                    <div className="space-y-4">
                      <BrandingPreviewPanel />
                    </div>
                  </>
                )}

                {currentStep === 5 && (
                  <>
                    <DeployStepPanel onDeploy={handleDeploy} />
                    <div className="space-y-4">
                      <DeployStatusPanel />
                    </div>
                  </>
                )}
              </div>
            </div>
          </main>

          <AssistantFooterBar
            currentStep={currentStep}
            onNext={currentStep === 5 ? handleDeploy : handleNext}
            onBack={handleBack}
            isDeploying={isDeploying}
          />
        </div>
      </div>
    </div>
  );
}