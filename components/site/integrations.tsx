import { Container } from "@/components/ui/container";
import { Database, Globe, ShoppingBag, Zap } from "lucide-react";
import type { ComponentType } from "react";

type LucideIcon = ComponentType<{ className?: string }>;

const integrations: { name: string; icon: LucideIcon }[] = [
  { name: "Shopify",     icon: ShoppingBag },
  { name: "WooCommerce", icon: Globe },
  { name: "Stripe",      icon: Zap },
  { name: "MongoDB",     icon: Database },
  { name: "PostgreSQL",  icon: Database },
  { name: "REST API",    icon: Globe },
];

export function Integrations() {
  return (
    <section className="relative z-10">
      <Container className="py-8 lg:py-10">
        <div className="border-y border-slate-200/70 py-8">
          <div className="reveal mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
            Connect with what you use
          </div>

          <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
            {integrations.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-center justify-center gap-2 text-[15px] font-semibold text-slate-400 transition-colors duration-200 hover:text-slate-600`}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                    <Icon className="h-4 w-4 text-slate-400" />
                  </div>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}