import { Container } from "@/components/ui/container";

export default function PricingPage() {
  return (
    <section className="relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[40px] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-[56px]">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-slate-500">
            Start for free, upgrade when you need more power. No hidden fees.
          </p>
        </div>
        <div className="mt-16 flex items-center justify-center">
          <div className="flex h-[400px] w-full max-w-4xl items-center justify-center rounded-[30px] border border-slate-200/80 bg-white/50 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-sm">
            <span className="text-sm font-medium text-slate-400">Pricing plans coming soon</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
