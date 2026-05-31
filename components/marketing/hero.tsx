import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageSquareText, ShieldCheck, Wand2 } from "lucide-react";

const bullets = [
  "Train on your website, PDFs, and product catalog",
  "Answer stock, sizing, and support questions",
  "Embed in one script tag or React component",
];

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-slate-950" />
            Premium AI assistant for ecommerce and support teams
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            A custom chatbot that understands your business, not just your words.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600">
            BotForge turns your website, products, documents, and live inventory into a polished AI
            assistant that helps customers buy faster and support teams answer less.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/sign-up">
              <Button className="h-12 px-6">
                Start free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="secondary" className="h-12 px-6">
                See product flow
              </Button>
            </a>
          </div>

          <div className="mt-8 space-y-3">
            {bullets.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
                <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-slate-900/10 bg-white">
                  <Check className="h-3.5 w-3.5 text-slate-950" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.06),transparent_55%)]" />
          <div className="relative rounded-[2rem] border border-slate-900/10 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <div className="text-sm font-medium text-slate-950">Store assistant preview</div>
                <div className="text-xs text-slate-500">Feels native to the brand</div>
              </div>
              <div className="rounded-full border border-slate-900/10 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                Live
              </div>
            </div>

            <div className="mt-5 grid gap-4">
              <MetricCard
                icon={<MessageSquareText className="h-4 w-4" />}
                title="Customer intent"
                value="High"
                note="Understands product, policy, and support queries"
              />
              <MetricCard
                icon={<Wand2 className="h-4 w-4" />}
                title="Recommendation quality"
                value="Smart"
                note="Suggests in-stock alternatives and best sellers"
              />
              <MetricCard
                icon={<ShieldCheck className="h-4 w-4" />}
                title="Deployment"
                value="1 script"
                note="Widget, API, and later React SDK support"
              />
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-slate-200 bg-[#fbfaf7] p-4">
              <div className="space-y-3 text-sm">
                <Bubble align="left">
                  Do you have a black oversized hoodie in medium?
                </Bubble>
                <Bubble align="right">
                  Yes. The black oversized hoodie is in stock in M. I can also show similar options
                  under ₹2000.
                </Bubble>
                <Bubble align="left">
                  Which one is most likely to convert?
                </Bubble>
                <Bubble align="right">
                  The Classic Black Hoodie is currently the strongest seller based on reviews and
                  stock availability.
                </Bubble>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  icon,
  title,
  value,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-[#fcfbf8] p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950">
            {icon}
          </span>
          {title}
        </div>
      </div>
      <div className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{value}</div>
      <p className="mt-1 text-sm leading-6 text-slate-500">{note}</p>
    </div>
  );
}

function Bubble({
  children,
  align,
}: {
  children: React.ReactNode;
  align: "left" | "right";
}) {
  return (
    <div className={`flex ${align === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] rounded-2xl px-4 py-3 leading-6 ${
          align === "right"
            ? "bg-slate-950 text-white"
            : "border border-slate-200 bg-white text-slate-800"
        }`}
      >
        {children}
      </div>
    </div>
  );
}