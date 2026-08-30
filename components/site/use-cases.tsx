import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { GlassCard } from "@/components/ui/glass-card";
import { BarChart3, Headphones, ShoppingBag, UserRoundSearch } from "lucide-react";

const useCases = [
  {
    title: "E-commerce",
    desc: "Help shoppers find the right products, check stock, and complete purchases.",
    icon: ShoppingBag,
  },
  {
    title: "Customer Support",
    desc: "Reduce repetitive tickets and resolve issues with accurate, real-time answers.",
    icon: Headphones,
  },
  {
    title: "Internal Knowledge",
    desc: "Make company knowledge accessible for teams and partners.",
    icon: UserRoundSearch,
  },
  {
    title: "Sales & Conversion",
    desc: "Guide visitors, recommend better, and increase conversion rates.",
    icon: BarChart3,
  },
];

export function UseCases() {
  return (
    <section className="relative z-10">
      <Container className="py-14 lg:py-20">
        <div className="reveal flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <SectionLabel>Built for your business</SectionLabel>
            <h2 className="max-w-[520px] text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[46px]">
              More than answers.
              <br />
              Real business impact.
            </h2>
          </div>
          <p className="max-w-[360px] text-[15px] leading-7 text-slate-500">
            From product discovery to policy questions, Tensor-Bot helps your customers and your team.
          </p>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((item, i) => {
            const Icon = item.icon;
            return (
              <GlassCard
                key={item.title}
                className={`card-lift reveal reveal-delay-${Math.min(i + 1, 4)} p-6 cursor-default`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#7284ff] transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-[18px] font-semibold tracking-[-0.03em] text-slate-900">
                  {item.title}
                </div>
                <p className="mt-3 text-[14px] leading-7 text-slate-500">{item.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
