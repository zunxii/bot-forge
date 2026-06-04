import Link from "next/link";
import { ArrowRight, Globe, Sparkles, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";

export function CTASection() {
  return (
    <section className="relative z-10">
      <Container className="py-16 lg:py-24">
        <GlassCard className="relative overflow-hidden px-6 py-14 text-center sm:px-10 lg:px-14">
          <div className="pointer-events-none absolute left-5 top-8 hidden rounded-2xl bg-white/80 p-3 shadow-[0_12px_35px_rgba(122,138,255,0.20)] lg:block">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#7888ff] rotate-[-16deg] shadow-sm">
              <span className="text-xl font-semibold">T</span>
            </div>
          </div>

          <div className="pointer-events-none absolute right-6 top-7 hidden rounded-2xl bg-white/80 p-3 shadow-[0_12px_35px_rgba(122,138,255,0.20)] lg:block">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#7888ff] rotate-[14deg] shadow-sm">
              <Globe className="h-5 w-5" />
            </div>
          </div>

          <div className="pointer-events-none absolute left-[13%] bottom-6 hidden rounded-2xl bg-white/80 p-3 shadow-[0_12px_35px_rgba(122,138,255,0.20)] lg:block">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#7888ff] rotate-[-8deg] shadow-sm">
              <Zap className="h-5 w-5" />
            </div>
          </div>

          <div className="pointer-events-none absolute right-[13%] bottom-8 hidden rounded-2xl bg-white/80 p-3 shadow-[0_12px_35px_rgba(122,138,255,0.20)] lg:block">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#7888ff] rotate-[10deg] shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <h3 className="text-[34px] font-semibold tracking-[-0.05em] text-slate-950 sm:text-[44px]">
            Ready to launch your assistant?
          </h3>
          <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-8 text-slate-500">
            Join businesses that are building better customer experiences with Tensor-Bot.
          </p>

          <Link
            href="#"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-2xl bg-slate-950 px-6 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Start building for free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </GlassCard>
      </Container>
    </section>
  );
}