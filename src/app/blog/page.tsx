import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: `Real estate insights, market updates, and home tips from ${SITE_NAME}. Stay informed on the Utah County and Salt Lake Valley housing market.`,
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description: `Real estate insights, market updates, and home tips from ${SITE_NAME}. Stay informed on the Utah County and Salt Lake Valley housing market.`,
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${SITE_NAME}`,
    description: `Real estate insights, market updates, and home tips from ${SITE_NAME}. Stay informed on the Utah County and Salt Lake Valley housing market.`,
  },
};

const POSTS = [
  {
    slug: "the-two-speed-market-why-pricing-your-home-right-has-never-mattered-more",
    title: "The Two-Speed Market: Why Pricing Your Home Right Has Never Mattered More",
    excerpt:
      "Well-priced homes are selling in 63 days. Overpriced homes are sitting for 121. That 58-day gap is costing sellers thousands — here's how to make sure you're on the right side of it.",
    date: "April 13, 2026",
    readTime: "6 min read",
    category: "Sellers",
  },
  {
    slug: "spring-market-2026-tips-to-get-your-home-ready-to-list",
    title: "The Spring Market Is Here: Tips & Tricks to Get Your Home Ready to List",
    excerpt:
      "Spring is the most competitive selling season in Utah. Here's what you need to do right now to maximize your home's value and attract serious buyers.",
    date: "April 6, 2026",
    readTime: "7 min read",
    category: "Sellers",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #1a0e30 0%, #2D1B4E 30%, #1B3A4B 70%, #0f2633 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A96E 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Childs Real Estate
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Blog & Market Updates
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real estate insights, market trends, and practical advice for buyers
            and sellers across Utah County and the Salt Lake Valley.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="group border border-border/50 rounded-2xl p-8 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-xs">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
