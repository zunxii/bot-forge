import {
  Globe,
  FileText,
  HelpCircle,
  Network,
  Type,
  MoreHorizontal,
  CheckCircle2,
  Brain,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

function SourceListItem({
  icon: Icon,
  title,
  subtitle,
  status,
  action,
  iconBg,
  iconColor,
}: {
  icon: any;
  title: string;
  subtitle: string;
  status?: "added" | "connect";
  action: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-[20px] border border-slate-100 bg-white px-3 py-3 shadow-[0_4px_20px_rgba(15,23,42,0.02)] transition hover:border-slate-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${iconBg} ${iconColor}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="text-xs text-slate-500">{subtitle}</div>
        </div>
      </div>
      {status === "added" ? (
        <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
          Added <CheckCircle2 className="h-3.5 w-3.5" />
        </div>
      ) : status === "connect" ? (
        <Button variant="ghost" className="h-8 rounded-full px-3 text-xs font-medium text-indigo-600 hover:bg-indigo-50">
          Connect
        </Button>
      ) : (
        <Button variant="ghost" className="h-8 rounded-full px-3 text-xs font-medium text-indigo-600 hover:bg-indigo-50">
          Add +
        </Button>
      )}
    </div>
  );
}

function GraphNode({
  icon: Icon,
  label,
  sublabel,
  x,
  y,
  active,
}: {
  icon: any;
  label: string;
  sublabel: string;
  x: string;
  y: string;
  active?: boolean;
}) {
  return (
    <div
      className="absolute flex flex-col items-center gap-2 transition-transform duration-500 hover:scale-105"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl border shadow-sm ${
          active
            ? "border-emerald-200 bg-emerald-50 text-emerald-600"
            : "border-slate-200 bg-white text-slate-500"
        }`}
      >
        <Icon className="h-5 w-5" />
        {active && (
          <div className="absolute -bottom-1 -right-1 rounded-full bg-emerald-500 p-0.5 text-white ring-2 ring-white">
            <CheckCircle2 className="h-3 w-3" />
          </div>
        )}
      </div>
      <div className="text-center">
        <div className="text-xs font-semibold text-slate-900">{label}</div>
        <div className="text-[10px] text-slate-500">{sublabel}</div>
      </div>
    </div>
  );
}

export function SourcesStepPanel() {
  return (
    <section className="rounded-[30px] border border-slate-900/5 bg-white/80 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl sm:p-6">
      <div className="flex flex-col gap-1">
        <div className="text-[11px] font-medium uppercase tracking-[0.26em] text-indigo-500">
          Step 2 of 5
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
          Build your knowledge base
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-500">
          Add sources and documents your assistant should learn from. The more relevant content, the smarter your assistant.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-4">
          <div className="rounded-[26px] border border-slate-900/10 bg-white p-5">
            <div className="mb-4">
              <div className="text-sm font-medium text-slate-950">Add sources</div>
              <div className="text-xs text-slate-500">Choose what to add to your knowledge base.</div>
            </div>

            <div className="space-y-2.5">
              <SourceListItem
                icon={Globe}
                title="Website (Crawled)"
                subtitle="acmestore.com"
                status="added"
                action=""
                iconBg="bg-[#eef2ff]"
                iconColor="text-indigo-600"
              />
              <SourceListItem
                icon={FileText}
                title="PDF Documents"
                subtitle="Add product guides, policies, etc."
                action="Add +"
                iconBg="bg-rose-50"
                iconColor="text-rose-600"
              />
              <SourceListItem
                icon={HelpCircle}
                title="FAQs"
                subtitle="Add frequently asked questions"
                action="Add +"
                iconBg="bg-amber-50"
                iconColor="text-amber-600"
              />
              <SourceListItem
                icon={Network}
                title="Sitemap"
                subtitle="Add your sitemap.xml"
                action="Add +"
                iconBg="bg-emerald-50"
                iconColor="text-emerald-600"
              />
              <SourceListItem
                icon={Type}
                title="Text or Markdown"
                subtitle="Add custom knowledge"
                action="Add +"
                iconBg="bg-slate-100"
                iconColor="text-slate-600"
              />
              <SourceListItem
                icon={MoreHorizontal}
                title="Notion (Beta)"
                subtitle="Sync pages and databases"
                status="connect"
                action="Connect"
                iconBg="bg-[#f0f0f0]"
                iconColor="text-slate-800"
              />
            </div>

            <button className="mt-2 flex h-auto items-center p-0 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition">
              View all integrations <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative flex flex-1 flex-col rounded-[26px] border border-slate-900/10 bg-white p-5">
            <div className="mb-4">
              <div className="text-sm font-medium text-slate-950">Your knowledge base</div>
              <div className="text-xs text-slate-500">See how your sources connect to build smarter responses.</div>
            </div>

            <div className="relative mt-2 min-h-[340px] flex-1 overflow-hidden rounded-[20px] bg-[#fbfbfd]">
              {/* Background circles */}
              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 border-dashed" />
              <div className="absolute left-1/2 top-1/2 h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200 border-dashed" />
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 h-full w-full" style={{ opacity: 0.4 }}>
                <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="80%" y2="45%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="20%" y2="45%" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
              </svg>

              {/* Central node */}
              <div className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_12px_40px_rgba(15,23,42,0.08)]">
                <div className="flex flex-col items-center gap-1">
                  <Brain className="h-7 w-7 text-indigo-600" />
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Assistant
                    <br />
                    Knowledge
                  </div>
                </div>
              </div>

              {/* Surrounding nodes */}
              <GraphNode icon={Globe} label="Website" sublabel="acmestore.com" x="50%" y="20%" active />
              <GraphNode icon={FileText} label="Products.pdf" sublabel="120 Pages" x="80%" y="45%" />
              <GraphNode icon={Network} label="Sitemap.xml" sublabel="1,248 URLs" x="70%" y="80%" active />
              <GraphNode icon={FileText} label="Returns.pdf" sublabel="34 Pages" x="30%" y="80%" active />
              <GraphNode icon={HelpCircle} label="FAQ" sublabel="24 Questions" x="20%" y="45%" />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2 border-t border-slate-100 pt-4">
              <div>
                <div className="text-xl font-semibold text-slate-900">5</div>
                <div className="text-[11px] text-slate-500">Sources added</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-slate-900">348</div>
                <div className="text-[11px] text-slate-500">Documents</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-slate-900">12,842</div>
                <div className="text-[11px] text-slate-500">Chunks indexed</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-slate-900">98%</div>
                <div className="text-[11px] text-slate-500">Indexing quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
