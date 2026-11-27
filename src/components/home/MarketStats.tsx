import Link from "next/link";

/**
 * Wasatch Front Market Snapshot (punch list Task 4, option b): no headline date range.
 * Figures are the latest ones we have published, date-stamped in the small print.
 * When new numbers are published, update COUNTIES, FIGURES_PERIOD and FIGURES_SOURCE together.
 */
const FIGURES_PERIOD = "closed sales, October 15–28, 2026. Source: WFRMLS";
const FIGURES_SOURCE = { label: "October 2026 market update", href: "/blog/utah-october-2026-market-update" };

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
              Utah &amp; Salt Lake Counties
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-none">
              Wasatch Front Market Snapshot
            </h2>
          </div>
          <p className="text-white/70 text-sm max-w-xl leading-relaxed">
            In our latest numbers, Utah County homes took 76 days on average to sell
            and closed about 1.5% under list. Salt Lake County homes took 68 days. In a
            slower market, a well-priced listing stands out.
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
        <p className="mt-8 text-white/50 text-xs">
          Figures: {FIGURES_PERIOD}. Details in our{" "}
          <Link href={FIGURES_SOURCE.href} className="underline underline-offset-2 hover:text-gold">
            {FIGURES_SOURCE.label}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
