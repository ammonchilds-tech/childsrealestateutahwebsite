const COUNTIES = [
  {
    name: "Utah County",
    stats: [
      { label: "Avg Days on Market", value: "60" },
      { label: "Avg List Price", value: "$658K" },
      { label: "Avg Sold Price", value: "$653K" },
      { label: "Number of Sales", value: "199" },
    ],
  },
  {
    name: "Salt Lake County",
    stats: [
      { label: "Avg Days on Market", value: "49" },
      { label: "Avg List Price", value: "$696K" },
      { label: "Avg Sold Price", value: "$688K" },
      { label: "Number of Sales", value: "265" },
    ],
  },
];

export function MarketStats() {
  return (
    <section className="bg-primary py-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-2">
            June 15–24, 2026
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-white">
            This Week&apos;s Market Snapshot
          </h2>
          <p className="mt-3 text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
            Utah County sits at 60 days on market with 199 homes sold and sold prices tracking closely to list at $653K. Salt Lake County is moving faster at 49 days with 265 sales at $688K. If you&apos;re thinking of selling, now is a great time to list.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {COUNTIES.map((county) => (
            <div key={county.name} className="px-6">
              <p className="text-center text-white/50 text-xs font-medium tracking-widest uppercase mb-4">
                {county.name}
              </p>
              <div className="grid grid-cols-4 divide-x divide-white/20">
                {county.stats.map((stat) => (
                  <div key={stat.label} className="text-center px-3 py-2">
                    <p className="font-heading text-2xl md:text-3xl text-accent font-semibold">
                      {stat.value}
                    </p>
                    <p className="text-white/90 text-xs font-medium mt-0.5 leading-tight">
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
