import { Hero } from "@/components/marketing/hero";
import { Logos } from "@/components/marketing/logos";
import { ProblemSolution } from "@/components/marketing/problem-solution";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { Workflow } from "@/components/marketing/workflow";
import { Integrations } from "@/components/marketing/integrations";
import { Pricing } from "@/components/marketing/pricing";
import { FAQ } from "@/components/marketing/faq";
import { CTA } from "@/components/marketing/cta";

export default function Page() {
  return (
    <>
      <Hero />
      <Logos />
      <ProblemSolution />
      <FeatureGrid />
      <Workflow />
      <Integrations />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}