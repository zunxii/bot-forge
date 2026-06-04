import Link from "next/link";

const navItems = ["Product", "Platform", "Use cases", "Pricing", "Docs", "Resources"];

export function Navbar() {
  return (
    <header className="relative z-10">
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="#" className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-slate-950 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(15,23,42,0.18)]">
            T
          </div>
          <span className="text-[15px] font-semibold tracking-[-0.02em] text-slate-950">
            Tensor-Bot
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-[13px] font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/sign-in" className="text-[13px] font-medium text-slate-700 transition hover:text-slate-950">
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className="inline-flex h-10 items-center rounded-full bg-slate-950 px-5 text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.24)] transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}