const logos = ["Aster", "Monarch", "Ridge", "Northwind", "Parcel", "Easel"];

export function Logos() {
  return (
    <section className="border-y border-slate-900/5 bg-white/35">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
          Built for teams that care about product quality
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center rounded-2xl border border-slate-900/8 bg-white px-4 py-4 text-sm font-medium text-slate-500 shadow-sm"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}