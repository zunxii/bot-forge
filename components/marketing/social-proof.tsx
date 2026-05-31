const logos = ["Nimbus", "Threadly", "Northstar", "Orbit", "Luma", "PeakFlow"];

export function SocialProof() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.24em] text-white/40">
          Trusted by modern support teams and ecommerce founders
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/65 backdrop-blur-md"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}