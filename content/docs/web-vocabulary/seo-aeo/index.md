---
title: "SEO & Discovery"
description: "Search engine optimization terminology including structured data, meta tags, and search console"
showTableOfContents: true
weight: 90
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 9
---

## SEO & Discovery

### Bing Webmaster Tools

Microsoft's equivalent to Search Console for Bing search. Submit sitemaps, monitor indexing, view search analytics. Worth setting up — Bing has meaningful market share, especially for desktop users.

### Canonical URL

The preferred URL for a page when multiple URLs show the same content (www vs non-www, HTTP vs HTTPS, URL parameters). Specified via `<link rel="canonical" href="...">`. Prevents duplicate content issues in search rankings. Hugo themes typically include this.

### Google Search Console

Free Google tool for monitoring site presence in search. Features: performance data (impressions, clicks, position), index coverage, Core Web Vitals, mobile usability, sitemap submission, manual actions. Essential for SEO monitoring. Requires domain verification.

### Heading Structure (H1-H6)

Hierarchical headings organizing content. `<h1>`: one per page, main topic. `<h2>`-`<h6>`: subsections in order. Don't skip levels. Helps SEO and accessibility. In Markdown: `# H1`, `## H2`, etc.

### JSON-LD

JavaScript Object Notation for Linked Data — format for embedding structured data (schema.org) in HTML. Placed in `<script type="application/ld+json">`. Preferred by Google over microdata or RDFa. Hugo templates can generate JSON-LD dynamically from page data.

### Meta Description

A summary of the page shown in search results below the title. Not a direct ranking factor but affects click-through rate. Keep 150-160 characters. Include keywords naturally. Set in front matter: `description: "Your description here"`.

### Meta Tags

HTML tags in `<head>` providing page metadata. Essential tags: `<title>`, `<meta name="description">` (snippet in search results), `<meta name="viewport">` (mobile), `<meta name="robots">` (indexing). Define in front matter, output via templates.

### Open Graph (OG)

Meta tags controlling how pages appear when shared on social media (Facebook, LinkedIn, Discord). Key tags: `og:title`, `og:description`, `og:image`, `og:url`. Test at [Facebook Debugger](https://developers.facebook.com/tools/debug/). Most Hugo themes include OG tags.

### Rich Snippets / Rich Results

Enhanced search results featuring additional information: star ratings, FAQs, recipes, events, breadcrumbs, product prices. Powered by structured data (schema.org). Test at [Google Rich Results Test](https://search.google.com/test/rich-results).

### robots.txt

A text file at your site's root (`/robots.txt`) instructing web crawlers which pages to crawl or ignore. Uses `User-agent` and `Disallow`/`Allow` directives. Also specifies sitemap location. Hugo can generate via template or use a static file. Example: `User-agent: * Disallow: /admin/`. Not a security measure — respectable bots honor it, malicious ones ignore it.

### schema.org

A collaborative vocabulary for structured data markup. Defines types (Article, Product, Organization, Person, FAQ, HowTo, Recipe) and properties. Used by search engines to understand page content and generate rich results. Browse schemas at [schema.org](https://schema.org).

### SEO (Search Engine Optimization)

Practices to improve visibility in search engine results. Encompasses: technical SEO (crawlability, speed, mobile-friendly), on-page SEO (content, keywords, structure), and off-page SEO (backlinks, authority). Static sites excel at technical SEO due to fast load times and clean HTML.

### sitemap.xml

An XML file listing all pages on your site with metadata (last modified date, change frequency, priority). Helps search engines discover and index content efficiently. Hugo generates automatically — enable in config: `enableRobotsTXT = true`. Located at `/sitemap.xml`. Submit to Google Search Console and Bing Webmaster Tools.

### Title Tag

The `<title>` element — appears in browser tabs, search results, and social shares. Most important on-page SEO element. Keep under 60 characters. Include primary keyword. Format: "Page Title | Site Name" or "Page Title - Site Name".

### Twitter Cards

Meta tags for Twitter/X share previews. Types: summary, summary_large_image, player, app. Tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. Validate at [Twitter Card Validator](https://cards-dev.twitter.com/validator). Falls back to OG tags if not specified.
