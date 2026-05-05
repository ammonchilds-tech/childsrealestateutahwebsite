/**
 * Cloudflare Pages _worker.js entry point wrapper.
 *
 * Cloudflare Pages Advanced Mode routes ALL requests through _worker.js.
 * The opennext worker passes every request to the Next.js handler, which
 * returns 404 for /_next/static/* assets because they live in the Assets
 * binding, not in the worker bundle.
 *
 * This wrapper checks env.ASSETS first so static files (CSS, JS chunks,
 * fonts, images, favicon, etc.) are served directly from the CDN edge.
 * Only requests that ASSETS can't satisfy fall through to the Next.js worker.
 */

import nextWorker from "./worker.js";

// Re-export Durable Objects required by opennext.
export { DOQueueHandler } from "./.build/durable-objects/queue.js";
export { DOShardedTagCache } from "./.build/durable-objects/sharded-tag-cache.js";
export { BucketCachePurge } from "./.build/durable-objects/bucket-cache-purge.js";

export default {
  async fetch(request, env, ctx) {
    // Try to serve from the static asset binding first.
    // This handles /_next/static/*, /images/*, favicon.ico, etc.
    if (env.ASSETS) {
      const assetResponse = await env.ASSETS.fetch(request.clone());
      if (assetResponse.status !== 404 && assetResponse.status !== 405) {
        return assetResponse;
      }
    }

    // Fall through to the Next.js / opennext worker for dynamic routes.
    return nextWorker.fetch(request, env, ctx);
  },
};
