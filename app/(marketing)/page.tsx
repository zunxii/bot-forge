import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero/hero";
import { LogoCloud } from "@/components/site/logo-cloud";
import { HowItWorks } from "@/components/site/how-it-works";
import { UseCases } from "@/components/site/use-cases";
import { Integrations } from "@/components/site/integrations";
import { CTASection } from "@/components/site/cta-section";
import { Footer } from "@/components/site/footer";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f9ff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-15%] h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(124,150,255,0.32)_0%,rgba(124,150,255,0.12)_28%,rgba(255,255,255,0)_68%)] blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle,rgba(148,171,255,0.24)_0%,rgba(148,171,255,0.10)_26%,rgba(255,255,255,0)_68%)] blur-3xl" />
        <div className="absolute bottom-[12%] left-[20%] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(132,155,255,0.16)_0%,rgba(255,255,255,0)_72%)] blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <LogoCloud />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <CTASection />
      <Footer />
    </main>
  );
}