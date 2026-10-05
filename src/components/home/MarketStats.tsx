const COUNTIES = [
  {
    name: "Utah County",
    stats: [
      { label: "Avg Days on Market", value: "72" },
      { label: "Avg List Price", value: "$686K" },
      { label: "Avg Sold Price", value: "$676K" },
      { label: "Number of Sales", value: "214" },
    ],
  },
  {
    name: "Salt Lake County",
    stats: [
      { label: "Avg Days on Market", value: "57" },
      { label: "Avg List Price", value: "$650K" },
      { label: "Avg Sold Price", value: "$640K" },
      { label: "Number of Sales", value: "296" },
    ],
  },
];

export function MarketStats() {
  return (
    <section className="bg-ink text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-gold text-xs font-bold tracking-[0.18em] uppercase mb-2">
              August 21 – September 3, 2026
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-none">
              This Week&apos;s Market Snapshot
            </h2>
          </div>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            Utah County sits at 72 days on market with 214 homes sold and sold prices tracking closely to list at $676K. Salt Lake County is moving at 57 days with 296 sales at $640K. If you&apos;re thinking of selling, now is a great time to list.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {COUNTIES.map((county, i) => (
            <div key={county.name}>
              <p className="text-white/60 text-xs font-bold tracking-[0.18em] uppercase mb-4">
                {county.name}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {county.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`border-t-4 pt-3 ${i === 0 ? "border-gold" : "border-white"}`}
                  >
                    <p className="font-display text-4xl md:text-[44px] leading-none">
                      {stat.value}
                    </p>
                    <p className="text-white/70 text-xs font-medium mt-1.5 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
