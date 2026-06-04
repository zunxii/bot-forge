import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#90a3ff]">
      {children}
    </div>
  );
}