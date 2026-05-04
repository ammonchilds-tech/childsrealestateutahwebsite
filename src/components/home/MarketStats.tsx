const COUNTIES = [
  {
    name: "Utah County",
    stats: [
      { label: "Avg Days on Market", value: "58" },
      { label: "Avg List Price", value: "$681K" },
      { label: "Avg Sold Price", value: "$680K" },
      { label: "Number of Sales", value: "166" },
    ],
  },
  {
    name: "Salt Lake County",
    stats: [
      { label: "Avg Days on Market", value: "50" },
      { label: "Avg List Price", value: "$676K" },
      { label: "Avg Sold Price", value: "$673K" },
      { label: "Number of Sales", value: "230" },
    ],
  },
];

export function MarketStats() {
  return (
    <section className="bg-primary py-10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-2">
            Week of May 4, 2026
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-white">
            This Week&apos;s Market Snapshot
          </h2>
          <p className="mt-3 text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
            Average days on market sit in the high 50s for Utah County and around 50 in Salt Lake County, with sold prices tracking closely to list. If you&apos;re thinking of selling, now is a great time to list.
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
