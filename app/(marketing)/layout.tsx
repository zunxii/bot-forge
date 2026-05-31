import type { ReactNode } from "react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f2ea] text-slate-950 antialiased selection:bg-slate-950 selection:text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.06),transparent_58%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.55),transparent_18%,transparent_82%,rgba(15,23,42,0.02))]" />
      </div>

      <Navbar />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
}