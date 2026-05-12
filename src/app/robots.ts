import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const AI_CRAWLERS = [
  "GPTBot",           // OpenAI / ChatGPT
  "ChatGPT-User",     // ChatGPT browsing
  "OAI-SearchBot",    // OpenAI search
  "Google-Extended",  // Google Gemini / AI Overviews
  "Googlebot",        // Google Search
  "anthropic-ai",     // Anthropic / Claude
  "ClaudeBot",        // Claude
  "PerplexityBot",    // Perplexity
  "Grok",             // xAI Grok
  "cohere-ai",        // Cohere
  "FacebookBot",      // Meta AI
  "Applebot",         // Apple
  "Bytespider",       // ByteDance / TikTok AI
  "CCBot",            // Common Crawl (AI training)
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Explicit allow for all major AI crawlers
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
      // Default rule for all other bots
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
