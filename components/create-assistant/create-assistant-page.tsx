import { AssistantSidebar } from "@/components/create-assistant/assistant-sidebar";
import { AssistantHeader } from "@/components/create-assistant/assistant-header";
import { AssistantStepper } from "@/components/create-assistant/assistant-stepper";
import { WebsiteStepPanel } from "@/components/create-assistant/steps/website-step-panel";
import { WebsiteIntelligencePanel } from "@/components/create-assistant/shared/website-intelligence-panel";
import { NextStepsPanel } from "@/components/create-assistant/shared/next-steps-panel";
import { AssistantFooterBar } from "@/components/create-assistant/assistant-footer-bar";

export function CreateAssistantPage() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-slate-950">
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[280px_1fr]">
        <AssistantSidebar />

        <div className="flex min-w-0 flex-col">
          <AssistantHeader />

          <main className="flex-1 px-4 pb-6 pt-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1160px]">
              <AssistantStepper />

              <div className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_0.95fr]">
                <WebsiteStepPanel />

                <div className="space-y-4">
                  <WebsiteIntelligencePanel />
                  <NextStepsPanel />
                </div>
              </div>
            </div>
          </main>

          <AssistantFooterBar />
        </div>
      </div>
    </div>
  );
}