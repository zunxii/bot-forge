import Link from "next/link";

const cols = {
  Product: ["Features", "Pricing", "Integrations"],
  Company: ["About", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-900/5 bg-[#f6f2ea]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-base font-semibold text-slate-950">BotForge</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              A premium AI chatbot platform for businesses that want better support, better product
              discovery, and a better customer experience.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {Object.entries(cols).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-slate-950">{title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {links.map((link) => (
                    <li key={link}>
                      <Link href="#" className="transition hover:text-slate-950">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-900/5 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BotForge. All rights reserved.</p>
          <p>Quiet UI. Mature product. Production-ready mindset.</p>
        </div>
      </div>
    </footer>
  );
}