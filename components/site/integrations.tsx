import { Container } from "@/components/ui/container";

const integrations = ["Shopify", "Woo Commerce", "Stripe", "MongoDB", "PostgreSQL", "REST API"];

export function Integrations() {
  return (
    <section className="relative z-10">
      <Container className="py-8 lg:py-10">
        <div className="border-y border-slate-200/70 py-8">
          <div className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            Connect with what you use
          </div>

          <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
            {integrations.map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 text-[17px] font-medium text-slate-400">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-300 shadow-sm">
                  <span className="text-[12px] font-semibold">◌</span>
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}