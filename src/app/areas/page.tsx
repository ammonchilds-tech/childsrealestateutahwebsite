import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CITIES_SERVED } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "City guides for Lehi, Highland, American Fork and the rest of northern Utah County from Ammon and Tasha Childs, Simple Choice Real Estate.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <p className="text-gold text-xs font-bold tracking-[0.18em] uppercase mb-3">City Guides</p>
          <h1 className="font-display text-6xl md:text-8xl leading-[0.92]">Areas We Serve</h1>
          <p className="mt-5 max-w-2xl text-white/75 text-lg">
            We list and sell homes across Utah County and the Salt Lake Valley. Start with a
            city guide below — more cities are on the way.
          </p>
        </div>
      </section>
      <section className="bg-white text-ink py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid gap-5 md:grid-cols-3">
          {CITIES_SERVED.map((c) => (
            <Link
              key={c.slug}
              href={`/areas/${c.slug}`}
              className="group bg-ink text-white p-8 min-h-[220px] flex flex-col gap-3 hover:bg-ink/90"
            >
              <h2 className="font-display text-5xl leading-none">{c.name}</h2>
              <p className="text-white/75">{c.tagline}</p>
              <span className="mt-auto inline-flex items-center gap-2 font-bold text-gold">
                Read the {c.name} guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <p className="max-w-7xl mx-auto px-6 mt-10 text-neutral-700">
          Don&apos;t see your city? We also work in Alpine, Cedar Hills, Orem, Provo, Draper,
          Springville, Sandy, Saratoga Springs, and more —{" "}
          <Link href="/contact" className="font-bold underline underline-offset-4">ask us</Link>.
        </p>
      </section>
    </>
  );
}
