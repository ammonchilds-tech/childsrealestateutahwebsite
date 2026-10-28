const COUNTIES = [
  {
    name: "Utah County",
    stats: [
      { label: "Avg Days on Market", value: "76" },
      { label: "Avg List Price", value: "$581K" },
      { label: "Avg Sold Price", value: "$572K" },
      { label: "Number of Sales", value: "66" },
    ],
  },
  {
    name: "Salt Lake County",
    stats: [
      { label: "Avg Days on Market", value: "68" },
      { label: "Avg List Price", value: "$617K" },
      { label: "Avg Sold Price", value: "$606K" },
      { label: "Number of Sales", value: "137" },
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
              October 15 – 28, 2026
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-none">
              This Week&apos;s Market Snapshot
            </h2>
          </div>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            Utah County sits at 76 days on market with 66 homes sold at an average of $572K, about 1.5% under list. Salt Lake County is moving at 68 days with 137 sales at $606K. With fewer homes competing for buyers this fall, a well-priced listing stands out.
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
