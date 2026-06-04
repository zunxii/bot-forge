import Link from "next/link";
import { Globe, MessageSquare, Shield, Workflow } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="relative z-10">
      <Container className="pb-10 pt-4">
        <div className="grid gap-10 border-t border-slate-200/70 py-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr_0.85fr]">
          <div>
            <Link href="#" className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-slate-950 text-sm font-semibold text-white shadow-md shadow-slate-900/20">
                T
              </div>
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-slate-900">
                Tensor-Bot
              </span>
            </Link>

            <p className="mt-4 max-w-[220px] text-[14px] leading-7 text-slate-500">
              AI chatbot infrastructure for modern businesses.
            </p>

            <div className="mt-5 flex gap-3 text-slate-400">
              {[Globe, MessageSquare, Workflow, Shield].map((Icon, i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_8px_16px_rgba(15,23,42,0.035)]"
                >
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          {[
            { title: "Product", items: ["Platform", "Use cases", "Pricing", "Changelog"] },
            { title: "Resources", items: ["Docs", "Guides", "API Reference", "Help center"] },
            { title: "Company", items: ["About", "Careers", "Contact", "Privacy"] },
            { title: "Legal", items: ["Terms", "Security", "Privacy Policy"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-[14px] font-semibold text-slate-900">{col.title}</div>
              <div className="mt-4 space-y-3 text-[14px] text-slate-500">
                {col.items.map((item) => (
                  <div key={item} className="transition hover:text-slate-900">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pb-2 text-center text-[12px] text-slate-400">
          © 2025 Tensor-Bot. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}