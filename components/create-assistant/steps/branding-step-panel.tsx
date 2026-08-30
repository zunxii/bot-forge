import { Palette, MessageSquare, Image as ImageIcon } from "lucide-react";

export function BrandingStepPanel() {
  const colors = [
    "bg-indigo-600", "bg-emerald-500", "bg-rose-500", 
    "bg-amber-500", "bg-blue-500", "bg-violet-600", "bg-slate-900"
  ];

  return (
    <div className="flex flex-col rounded-[30px] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
      <div className="mb-8">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Step 4 of 5</h2>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Customize branding</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Make the assistant look and feel like a natural extension of your brand.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-sm font-medium text-slate-900">Assistant Name</label>
          <div className="relative mt-2">
            <input 
              type="text" 
              defaultValue="ACME Support Bot"
              className="h-11 w-full rounded-xl border border-slate-200 pl-4 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-900">Brand Color</label>
          <div className="mt-3 flex flex-wrap gap-3">
            {colors.map((color, idx) => (
              <button 
                key={color} 
                className={`h-8 w-8 rounded-full ${color} shadow-sm ring-offset-2 transition hover:scale-110 focus:outline-none ${idx === 0 ? 'ring-2 ring-indigo-600' : ''}`}
              />
            ))}
            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-slate-400 hover:bg-slate-100 transition">
              <Palette className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-900">Assistant Avatar</label>
          <div className="mt-3 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
              <span className="text-lg font-semibold">A</span>
            </div>
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
              <ImageIcon className="h-4 w-4 text-slate-400" /> Upload Image
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-900">Welcome Message</label>
          <div className="relative mt-2">
            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <textarea 
              rows={3}
              defaultValue="Hi there! 👋 How can I help you today?"
              className="w-full rounded-xl border border-slate-200 pl-10 pr-4 pt-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
