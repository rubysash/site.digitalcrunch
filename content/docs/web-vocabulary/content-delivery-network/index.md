---
title: "Content Delivery Network"
description: "CDN and infrastructure terms including caching, edge networks, and content distribution"
showTableOfContents: true
weight: 30
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 3
---

## Content Delivery Network

### Cache

Temporary storage of content for faster retrieval. CDN caches static files at edge locations. Browser caches files locally. Proper cache headers crucial for performance. Trade-off: caching improves speed but can serve stale content.

### Cache Headers

HTTP headers controlling how responses are cached. Key headers: `Cache-Control` (directives like `max-age`, `no-cache`), `ETag` (content hash for validation), `Expires` (legacy). Configure in `netlify.toml` under `[[headers]]`.

### Cache Invalidation

Clearing cached content so users receive updated files. "One of the two hard problems in computer science." Netlify automatically invalidates CDN cache on deploy. Fingerprinting sidesteps the problem by using unique filenames.

### CDN (Content Delivery Network)

A globally distributed network of servers that cache and serve content from locations close to users. Reduces latency, improves load times, handles traffic spikes, and provides DDoS protection. Netlify, Vercel, and Cloudflare include CDN automatically. Static sites are ideal for CDN delivery.

### Edge Network

CDN servers at the "edge" of the network — geographically closest to end users. Netlify has edge nodes worldwide. Content served from the nearest edge location for minimal round-trip time. Edge functions execute at these locations.

### Fingerprinting / Cache Busting

Adding a content hash to filenames (e.g., `style.a1b2c3d4.css`). When content changes, the hash changes, creating a new filename. Browsers fetch the new file instead of using cached old version. Hugo Pipes: `resources.Fingerprint`.

### Immutable Assets

Fingerprinted files that never change (if content changes, filename changes). Can be cached forever: `Cache-Control: public, max-age=31536000, immutable`. Optimal for CSS, JS, and images processed through Hugo Pipes.

### PoP (Point of Presence)

A physical CDN location containing servers that cache content. Major CDNs have hundreds of PoPs globally. More PoPs = content closer to more users = faster delivery. Netlify and Cloudflare have extensive PoP networks.
