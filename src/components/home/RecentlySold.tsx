import { RECENT_SALES } from "@/lib/listings";

/**
 * Recently closed deals. City and month only unless Ammon confirms the
 * client agreed to share more (see RECENT_SALES in src/lib/listings.ts).
 */
export function RecentlySold({ variant = "light" }: { variant?: "light" | "dark" }) {
  const dark = variant === "dark";
  return (
    <div>
      <p className={`text-xs font-bold tracking-[0.18em] uppercase mb-4 ${dark ? "text-gold" : "text-neutral-600"}`}>
        Recently Sold
      </p>
      <ul className="grid gap-4 sm:grid-cols-3">
        {RECENT_SALES.map((sale) => (
          <li
            key={`${sale.city}-${sale.month}-${sale.side}`}
            className={`border-t-4 border-gold pt-3 ${dark ? "text-white" : "text-ink"}`}
          >
            <p className="font-display text-3xl leading-none">{sale.city}</p>
            <p className={`mt-1.5 text-sm font-medium ${dark ? "text-white/70" : "text-neutral-600"}`}>
              {sale.side === "Purchased" ? "Buyer purchase" : sale.side === "Sold" ? "Sold" : "Closed"} · {sale.month}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
