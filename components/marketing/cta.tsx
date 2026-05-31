import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.25rem] border border-slate-900/10 bg-white p-10 shadow-[0_24px_100px_rgba(15,23,42,0.06)] sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Ship a chatbot that feels like part of the product.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Give customers a premium support and sales experience with a chatbot that respects the
              brand and understands the business.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/sign-up">
                <Button className="h-12 px-6">
                  Start building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="secondary" className="h-12 px-6">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}