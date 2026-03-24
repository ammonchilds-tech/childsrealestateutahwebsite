const STATS = [
  { label: "Median Sale Price", value: "$525K", note: "Utah County" },
  { label: "Avg. Days on Market", value: "18", note: "Active Listings" },
  { label: "List-to-Sale Ratio", value: "99.2%", note: "Avg. This Year" },
  { label: "Homes Sold", value: "500+", note: "By Our Team" },
];

export function MarketStats() {
  return (
    <section className="bg-primary py-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/20">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center px-6 py-2">
              <p className="font-heading text-2xl md:text-3xl text-accent font-semibold">
                {stat.value}
              </p>
              <p className="text-white/90 text-sm font-medium mt-0.5">{stat.label}</p>
              <p className="text-white/50 text-xs mt-0.5">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
