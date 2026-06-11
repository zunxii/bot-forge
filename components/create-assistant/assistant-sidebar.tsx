import Link from "next/link";
import {
  BarChart3,
  Bot,
  Crown,
  LayoutDashboard,
  Plug,
  Settings2,
  Sparkles,
  ArrowRight,
  CircleHelp,
} from "lucide-react";

const navItems = [
  {
    label: "Create Assistant",
    description: "Build your AI assistant",
    icon: Sparkles,
    active: true,
  },
  {
    label: "My Assistants",
    description: "Manage your bots",
    icon: Bot,
    active: false,
  },
  {
    label: "Analytics",
    description: "Track usage and queries",
    icon: BarChart3,
    active: false,
  },
  {
    label: "Integrations",
    description: "Connect business data",
    icon: Plug,
    active: false,
  },
  {
    label: "Settings",
    description: "Workspace preferences",
    icon: Settings2,
    active: false,
  },
];

export function AssistantSidebar() {
  return (
    <aside className="hidden border-r border-slate-900/5 bg-white/70 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="flex items-center gap-3 px-5 py-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-slate-950 text-white shadow-sm">
          <span className="text-sm font-semibold tracking-tight">T</span>
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-tight text-slate-950">Tensor-Bot</div>
          <div className="text-xs text-slate-500">AI chatbot infrastructure</div>
        </div>
      </div>

      <nav className="flex-1 px-3">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href="#"
                className={[
                  "flex items-center gap-3 rounded-[20px] px-4 py-4 transition",
                  item.active
                    ? "border border-indigo-100 bg-[#eef2ff] shadow-[0_10px_30px_rgba(79,70,229,0.06)]"
                    : "hover:bg-slate-50",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-2xl border",
                    item.active
                      ? "border-indigo-200 bg-indigo-500 text-white shadow-[0_12px_30px_rgba(99,102,241,0.2)]"
                      : "border-slate-200 bg-white text-slate-500",
                  ].join(" ")}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <div
                    className={[
                      "text-sm font-medium",
                      item.active ? "text-indigo-600" : "text-slate-800",
                    ].join(" ")}
                  >
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500">{item.description}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="space-y-4 p-4">
        <div className="rounded-[24px] border border-slate-900/10 bg-gradient-to-b from-indigo-50 to-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600">
              <Crown className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-slate-950">Pro Plan</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Unlock more sources, higher limits, and advanced features.
              </p>
            </div>
          </div>

          <button className="mt-4 inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-indigo-600 shadow-sm transition hover:bg-slate-50">
            <span>Upgrade Plan</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-[24px] border border-slate-900/10 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white">
              <span className="text-sm font-medium">JK</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-slate-950">Junaid Khan</div>
              <div className="text-xs text-slate-500">junaid@acme.com</div>
            </div>
            <button className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50">
              <LayoutDashboard className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-900/10 bg-white p-4 shadow-[0_14px_40px_rgba(15,23,42,0.04)]">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <CircleHelp className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-950">Need help?</div>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Check our guide to create the perfect assistant.
              </p>
            </div>
          </div>

          <button className="mt-4 inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-indigo-600 shadow-sm transition hover:bg-slate-50">
            <span>View guide</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}