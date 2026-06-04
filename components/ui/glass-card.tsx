import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-slate-200/80 bg-white/85 shadow-[0_18px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}