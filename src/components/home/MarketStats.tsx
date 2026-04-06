const COUNTIES = [
  {
    name: "Utah County",
    stats: [
      { label: "Median Sale Price", value: "$510K" },
      { label: "Avg. Days on Market", value: "68" },
      { label: "List-to-Sale Ratio", value: "98.6%" },
    ],
  },
  {
    name: "Salt Lake County",
    stats: [
      { label: "Median Sale Price", value: "$544K" },
      { label: "Avg. Days on Market", value: "70" },
      { label: "List-to-Sale Ratio", value: "98.2%" },
    ],
  },
];

export function MarketStats() {
  return (
    <section className="bg-primary py-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:divide-x md:divide-white/20">
          {COUNTIES.map((county) => (
            <div key={county.name} className="px-6">
              <p className="text-center text-white/50 text-xs font-medium tracking-widest uppercase mb-4">
                {county.name}
              </p>
              <div className="grid grid-cols-3 divide-x divide-white/20">
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
