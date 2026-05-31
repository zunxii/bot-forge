import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    note: "For testing and early launches.",
    features: ["1 chatbot", "Website ingestion", "Basic widget", "Email support"],
    featured: false,
  },
  {
    name: "Pro",
    price: "₹2,499",
    note: "For growing stores and support teams.",
    features: ["5 chatbots", "Docs + sitemap + store sync", "Analytics", "Custom branding"],
    featured: true,
  },
  {
    name: "Business",
    price: "Custom",
    note: "For larger teams and deeper integrations.",
    features: ["Unlimited bots", "Custom API connectors", "Priority support", "Advanced routing"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
          Pricing
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Simple pricing, clear value, no toy-tier packaging.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Start free, prove value, then move to the tier that matches your traffic and support needs.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[2rem] border p-7 shadow-[0_16px_60px_rgba(15,23,42,0.04)] ${
              plan.featured
                ? "border-slate-950/15 bg-slate-950 text-white"
                : "border-slate-900/10 bg-white text-slate-950"
            }`}
          >
            {plan.featured && (
              <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                Most popular
              </div>
            )}
            <h3 className={`text-lg font-medium ${plan.featured ? "text-white" : "text-slate-950"}`}>
              {plan.name}
            </h3>
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
              <span className={`pb-1 text-sm ${plan.featured ? "text-white/55" : "text-slate-500"}`}>
                / month
              </span>
            </div>
            <p className={`mt-3 text-sm leading-7 ${plan.featured ? "text-white/70" : "text-slate-600"}`}>
              {plan.note}
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 text-sm ${
                    plan.featured ? "text-white/80" : "text-slate-700"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full ${
                      plan.featured ? "bg-white/10 text-white" : "bg-slate-950 text-white"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/sign-up" className="mt-8 block">
              <Button
                variant={plan.featured ? "secondary" : "default"}
                className={`h-12 w-full ${
                  plan.featured ? "bg-white text-slate-950 hover:bg-slate-100" : ""
                }`}
              >
                {plan.name === "Business" ? "Contact sales" : "Get started"}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}