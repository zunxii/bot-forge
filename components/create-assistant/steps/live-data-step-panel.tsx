import { Database, Link2, Key, RefreshCw } from "lucide-react";

export function LiveDataStepPanel() {
  return (
    <div className="flex flex-col rounded-[30px] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Step 3 of 5</h2>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Connect live data</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Sync your product database or connect external APIs to give your assistant real-time knowledge.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Custom Database API</h3>
                <p className="text-xs text-slate-500">Fetch real-time inventory and product details.</p>
              </div>
            </div>
            <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 transition-colors duration-200 ease-in-out hover:bg-slate-300 focus:outline-none">
              <span className="pointer-events-none inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Link2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Webhook Connection</h3>
                <p className="text-xs text-slate-500">Send user events to your external systems.</p>
              </div>
            </div>
            <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-indigo-600 transition-colors duration-200 ease-in-out focus:outline-none">
              <span className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
            </button>
          </div>

          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div>
              <label className="text-[12px] font-medium text-slate-700">Webhook URL</label>
              <div className="relative mt-1">
                <input 
                  type="text" 
                  defaultValue="https://api.acme.com/v1/webhook"
                  className="h-10 w-full rounded-xl border border-slate-200 pl-4 pr-4 text-sm text-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-slate-50"
                />
              </div>
            </div>
            <div>
              <label className="text-[12px] font-medium text-slate-700">Secret Key</label>
              <div className="relative mt-1">
                <Key className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input 
                  type="password" 
                  defaultValue="sk_live_123456789"
                  className="h-10 w-full rounded-xl border border-slate-200 pl-9 pr-4 text-sm text-slate-600 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-slate-50"
                />
              </div>
            </div>
            <button className="mt-2 flex items-center gap-2 text-xs font-medium text-indigo-600 hover:text-indigo-700">
              <RefreshCw className="h-3 w-3" /> Test Connection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
