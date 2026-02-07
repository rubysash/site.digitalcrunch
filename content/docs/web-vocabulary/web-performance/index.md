---
title: "Web Performance"
description: "Performance terminology including Core Web Vitals, optimization techniques, and page speed metrics"
showTableOfContents: true
weight: 160
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 16
---

## Web Performance

### async / defer (Scripts)

Attributes controlling JavaScript loading. `async`: download parallel, execute immediately (order not guaranteed). `defer`: download parallel, execute after HTML parsing (order preserved). Both prevent render blocking.

### Bundling

Combining multiple CSS or JavaScript files into one to reduce HTTP requests. Hugo Pipes: `resources.Concat`. With HTTP/2, bundling is less critical but still beneficial for reducing connection overhead.

### CLS (Cumulative Layout Shift)

Measures visual stability — how much content shifts during page load. Frustrating when buttons move as you click. Target: **under 0.1**. Improve by: setting image dimensions, reserving space for ads/embeds, avoiding inserting content above existing.

### Code Splitting

Breaking JavaScript bundles into smaller chunks loaded on demand. Reduces initial load time by deferring non-critical code. More relevant for JS-heavy frameworks than typical Hugo sites.

### Compression (Gzip/Brotli)

Reducing file sizes during transfer. Gzip: widely supported, good compression. Brotli: newer, better compression (20-30% smaller than Gzip). Netlify applies both automatically. Check with: `curl -H "Accept-Encoding: br" -I url`.

### Core Web Vitals

Google's key metrics for user experience, affecting search rankings since 2021. Three metrics: LCP (loading), INP (interactivity), CLS (visual stability). Measured from real users (field data) and lab tests. Check at PageSpeed Insights or Chrome DevTools.

### Critical CSS

Inlining CSS required for above-the-fold content directly in `<head>`. Eliminates render-blocking CSS requests for initial view. Extract with tools like Critical or PurgeCSS. Load remaining CSS asynchronously.

### FCP (First Contentful Paint)

Time until the first content (text, image, canvas) appears on screen. Indicates the page is loading. Target: under 1.8 seconds. Not a Core Web Vital but still important for perceived performance.

### Image Optimization

Reducing image file size while maintaining acceptable quality. Techniques: proper format (WebP/AVIF), appropriate dimensions, compression, lazy loading. Hugo can resize and convert: `{{ $image.Resize "800x webp" }}`. Often the biggest performance win.

### INP (Interaction to Next Paint)

Measures responsiveness — time from user interaction (click, tap, keypress) to visual feedback. Replaced FID in March 2024. Target: **under 200ms**. Improve by: reducing JavaScript, breaking up long tasks, optimizing event handlers.

### Lazy Loading

Deferring load of off-screen resources (images, iframes) until needed. Native browser support: `<img loading="lazy">`. Improves initial load time, saves bandwidth. Don't lazy-load above-the-fold images.

### LCP (Largest Contentful Paint)

Time until the largest visible element (image, video, text block) renders. Measures perceived load speed. Target: **under 2.5 seconds**. Improve by: optimizing images, preloading hero images, using CDN, reducing server response time.

### Lighthouse

Open-source auditing tool by Google, built into Chrome DevTools. Scores pages on: Performance, Accessibility, Best Practices, SEO, and PWA. Provides actionable recommendations. Run via DevTools, CLI, or CI/CD integration.

### Minification

Removing unnecessary characters (whitespace, comments, newlines) from code without changing functionality. Reduces file size by 10-30%. Hugo: `hugo --minify` or `resources.Minify`. Apply to HTML, CSS, and JavaScript.

### PageSpeed Insights

Google tool ([pagespeed.web.dev](https://pagespeed.web.dev)) analyzing page performance on mobile and desktop. Shows Core Web Vitals, Lighthouse scores, and specific improvement recommendations. Uses both field data (real users) and lab data (simulated).

### Preconnect

Resource hint to establish early connections to third-party origins. `<link rel="preconnect" href="https://fonts.googleapis.com">`. Saves DNS lookup, TCP handshake, and TLS negotiation time. Use for known external resources.

### Prefetch

Resource hint for resources likely needed for future navigation. `<link rel="prefetch" href="next-page.html">`. Browser fetches during idle time. Use for likely next pages (pagination, related articles).

### Preload

Resource hint telling browsers to fetch critical resources early. `<link rel="preload" href="font.woff2" as="font" crossorigin>`. Use for: fonts, hero images, critical CSS/JS. Don't overuse — everything becomes low priority if everything is preloaded.

### Responsive Images

Serving different image sizes based on viewport/device. Uses `srcset` attribute with multiple sizes and `sizes` attribute for hints. Prevents mobile devices from downloading desktop-sized images. Hugo can generate multiple sizes automatically.

### TTFB (Time To First Byte)

Time from request start to the first byte of response received. Measures server responsiveness and network latency. Target: under 800ms. Static sites on CDN typically have excellent TTFB. Affected by DNS, SSL handshake, and server processing.

### WebPageTest

Advanced performance testing tool ([webpagetest.org](https://webpagetest.org)). Test from various locations and devices, waterfall charts, filmstrip view, detailed timing breakdowns. More granular than PageSpeed Insights.
