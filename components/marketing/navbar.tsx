import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/5 bg-[#f6f2ea]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-900/10 bg-white shadow-sm">
            <span className="text-sm font-semibold tracking-tight text-slate-950">B</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-slate-950">BotForge</div>
            <div className="text-xs text-slate-500">AI chatbots for modern businesses</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/sign-in" className="hidden sm:block">
            <Button variant="ghost" className="px-4">
              Sign in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="secondary" className="px-4">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}