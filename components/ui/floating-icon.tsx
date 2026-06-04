import type { ReactNode } from "react";

export function FloatingIcon({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex items-center justify-center rounded-2xl border border-white/70 bg-white/85 shadow-[0_12px_40px_rgba(120,140,255,0.20)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}