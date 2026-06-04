import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe } from "lucide-react";

export function HeroContent() {
  return (
    <div className="relative">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/75 px-4 py-2 text-[12px] font-medium text-slate-600 shadow-sm backdrop-blur-xl">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#eef2ff] text-[#7890ff]">
          <Globe className="h-3 w-3" />
        </div>
        AI Chatbot Infrastructure for Business
      </div>

      <h1 className="max-w-[640px] text-[54px] font-semibold leading-[0.96] tracking-[-0.06em] text-slate-950 sm:text-[62px] lg:text-[72px]">
        Turn your business
        <br />
        knowledge into a
        <br />
        <span className="bg-gradient-to-r from-[#5875ff] via-[#7d8eff] to-[#8d94ff] bg-clip-text text-transparent">
          smart assistant.
        </span>
      </h1>

      <p className="mt-7 max-w-[560px] text-[16px] leading-8 text-slate-500 sm:text-[17px]">
        Tensor-Bot reads your website, documents, FAQs, policies, and live data to answer customer questions,
        recommend products, and reduce support workload.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="#"
          className="inline-flex h-12 items-center gap-2 rounded-2xl bg-slate-950 px-6 text-[14px] font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Start for free
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link href="#" className="inline-flex h-12 items-center gap-3 text-[14px] font-semibold text-slate-800">
          <span>See how it works</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
            <ArrowRight className="h-4 w-4 rotate-45 text-slate-700" />
          </span>
        </Link>
      </div>

      <div className="mt-7 flex flex-wrap gap-7 text-[13px] text-slate-500">
        {["No credit card", "Setup in minutes", "Cancel anytime"].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eef2ff] text-[#7b8eff]">
              <BadgeCheck className="h-4 w-4" />
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}