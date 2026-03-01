---
title: "FAQ - Speed Score & Performance"
description: "Frequently asked questions about PageSpeed scores, CDN delivery, Core Web Vitals, and why site performance matters for search rankings and conversions."
draft: true
date: 2026-03-01
tags: ["faq", "pagespeed", "performance", "cdn", "core-web-vitals"]
---

## Speed Score & Performance

We build sites that score 100 on Google PageSpeed. These are the questions we get about why that matters and how we do it.

#### Why does page speed matter?

Google uses page speed as a direct ranking factor. Slow sites rank lower. Beyond rankings, every second of load time costs conversions. A 1-second delay in page load reduces conversions by 7%. A site that takes 3 seconds to load loses 53% of mobile visitors. Your competitors with faster sites are getting the traffic and the sales that your slow site is giving away.

#### How do you consistently score 100 on PageSpeed?

The architecture eliminates the problems that slow sites down:

- **Static HTML** - No server-side rendering, no database queries, no PHP execution. Pages are pre-built files.
- **CDN delivery** - Files are served from Cloudflare's global edge network. The nearest server to the visitor delivers the page, not a single origin server.
- **No render-blocking resources** - CSS is inlined or optimized. JavaScript is deferred or eliminated where unnecessary.
- **Optimized images** - Hugo processes images at build time. Proper sizing, WebP format, lazy loading.
- **No plugin bloat** - WordPress sites average 20-30 plugins, each adding JavaScript and CSS. Hugo sites have zero plugins.

This is not optimization tricks applied to a slow foundation. This is a fast foundation by design.

#### What is Google PageSpeed Insights?

PageSpeed Insights (pagespeed.web.dev) is Google's tool for measuring how fast a page loads and how well it performs on mobile and desktop. It scores pages 0-100 across four categories: Performance, Accessibility, Best Practices, and SEO. A score of 90+ is considered "good." Our Hugo sites score 100 across all categories because the underlying architecture is built for it.

#### What are Core Web Vitals?

Three specific metrics Google uses to measure real-world user experience:

- **LCP (Largest Contentful Paint)** - How fast the main content becomes visible. Target: under 2.5 seconds.
- **INP (Interaction to Next Paint)** - How fast the page responds when a user clicks or taps. Target: under 200 milliseconds.
- **CLS (Cumulative Layout Shift)** - How much the page layout moves around while loading. Target: under 0.1.

Static sites on CDN crush all three. No database latency for LCP. Minimal JavaScript for INP. Pre-rendered layouts for CLS. WordPress sites struggle with all three without heavy optimization work.

#### What is a CDN and why does it matter?

A CDN (Content Delivery Network) copies your site files to servers around the world. When someone visits your site, the files come from the nearest server - not from a single machine in a datacenter somewhere. A visitor in London gets your page from a London server. A visitor in Tokyo gets it from a Tokyo server. This eliminates the distance-based latency that slows down sites hosted on a single server. Cloudflare's network has 300+ locations globally.

#### My WordPress site has caching plugins. Is that the same thing?

No. Caching plugins create temporary copies of dynamically generated pages so the server does not have to rebuild them on every request. This helps, but the page still has to travel from one server to the visitor. A CDN-served static site skips the generation step entirely (the page already exists as a file) AND serves it from the nearest edge location. Caching reduces the problem. Static + CDN eliminates it.

#### Does speed actually affect my Google rankings?

Yes. Google has confirmed it explicitly. Page Experience is a ranking signal that includes Core Web Vitals. All else being equal, a faster site outranks a slower one. In competitive markets where multiple businesses have similar content and authority, speed becomes the tiebreaker. A PageSpeed score of 100 is not vanity - it is a ranking advantage.

#### How fast is "fast enough"?

Google considers scores above 90 as "good." But 90 is not 100. The difference between 90 and 100 is usually render-blocking CSS, unoptimized images, or unnecessary JavaScript - all things that affect real user experience. We target 100 because it proves there is zero waste in the page delivery. It also makes a strong impression when a prospect runs your site through PageSpeed and sees perfect scores.

#### Can you make my existing WordPress site score 100?

Unlikely. WordPress has structural overhead - PHP execution, database queries, plugin JavaScript, theme bloat - that creates a performance ceiling. With aggressive optimization (caching, image compression, CSS/JS minification, plugin reduction), most WordPress sites can reach 80-90. Breaking 95 is rare. Reaching 100 consistently requires eliminating the dynamic rendering layer entirely, which means moving to a static architecture.

#### Does mobile speed matter more than desktop?

Google uses mobile-first indexing, meaning it primarily evaluates the mobile version of your site for rankings. Mobile connections are slower and devices are less powerful than desktop. If your site is slow on mobile, that is what Google sees as your "real" speed. Our static sites score 100 on both mobile and desktop because the same lightweight files are served regardless of device.

#### What about GHL landing pages - do they score 100 too?

No. GHL landing pages are dynamically generated and hosted on GHL's infrastructure. They are optimized for CRM integration, not raw speed. Typical GHL page scores range from 60-85 depending on content and configuration. For landing pages tied to paid ads, the conversion-rate advantage of direct CRM integration outweighs the speed difference. For your main business site and content that needs to rank organically, Hugo + CDN is the answer.

#### How do I test my current site speed?

Go to pagespeed.web.dev and enter your URL. Test both mobile and desktop. The report shows your scores and lists every specific issue dragging performance down. You can also test your competitors' sites to see where you stand. If they score higher, they have a structural advantage in search rankings.

#### Does page speed affect AI search citations?

AI models do not crawl pages in real-time the way Google does, so raw load speed is less relevant for AI citation. However, the same architecture that produces fast sites - clean HTML, proper heading structure, server-side rendered schema, no JavaScript-dependent content - also makes sites more parseable by AI crawlers. The content AI models need is in the HTML, not buried behind JavaScript that they cannot execute.
