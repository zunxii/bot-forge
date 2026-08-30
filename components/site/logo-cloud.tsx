import { Container } from "@/components/ui/container";

const brands = [
  { name: "Northwind", icon: "N" },
  { name: "Aster",     icon: "✦" },
  { name: "Monarch",   icon: "M" },
  { name: "Studio",    icon: "◈" },
  { name: "Parcel",    icon: "⬡" },
  { name: "Fjord",     icon: "F" },
];

export function LogoCloud() {
  return (
    <section className="relative z-10">
      <Container className="mt-16 border-t border-slate-200/70 pt-7 lg:mt-20">
        <div className="reveal mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-400">
          Trusted by modern businesses
        </div>

        <div className="grid grid-cols-2 gap-y-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} flex items-center justify-center gap-2 text-[17px] font-semibold text-slate-400 transition-colors duration-200 hover:text-slate-600`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200/80 bg-white text-[13px] font-bold text-slate-400 shadow-[0_4px_12px_rgba(15,23,42,0.04)]">
                {brand.icon}
              </span>
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}