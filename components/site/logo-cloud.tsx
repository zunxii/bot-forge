import { Container } from "@/components/ui/container";
import { Star } from "lucide-react";

const brands = ["Northwind", "Aster", "Monarch", "Studio", "Parcel", "Fjord"];

export function LogoCloud() {
  return (
    <section className="relative z-10">
      <Container className="mt-14 border-t border-slate-200/70 pt-8 lg:mt-20">
        <div className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
          Trusted by modern businesses
        </div>

        <div className="grid grid-cols-2 gap-y-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center justify-center gap-2 text-[18px] font-medium text-slate-400">
              <Star className="h-5 w-5 fill-current text-slate-300" />
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}