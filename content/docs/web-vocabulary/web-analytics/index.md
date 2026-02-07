---
title: "Web Analytics"
description: "Analytics and tracking terminology including Google Analytics, privacy-focused alternatives, and conversion tracking"
showTableOfContents: true
weight: 150
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 15
---

## Web Analytics

### Conversion Tracking

Measuring when users complete desired actions (sign up, purchase, download). Set up goals in analytics platform. Fire events on conversion: `gtag('event', 'conversion', {...})` for GA4. Essential for measuring marketing effectiveness.

### Cookie Consent

Legal requirement (GDPR, CCPA) to inform users about tracking cookies and obtain consent. Requires consent banner/popup before setting non-essential cookies. Privacy-focused analytics (Plausible, Fathom) don't require consent banners as they don't use cookies.

### Event Tracking

Recording specific user interactions beyond pageviews: button clicks, video plays, downloads, scroll depth, form submissions. GA4 is event-based by default. Fire custom events with JavaScript: `gtag('event', 'download', {file: 'ebook.pdf'})`.

### Fathom Analytics

Another privacy-first analytics service. No personal data collection, GDPR compliant. Simple interface, essential metrics. Paid service with generous free tier. Good for businesses needing privacy compliance.

### GoatCounter

Open-source, privacy-aware analytics. Free for non-commercial use, self-hostable. No tracking cookies, minimal JavaScript. Simple pageview counting with referrer and browser data. Good lightweight option.

### Google Analytics 4 (GA4)

Google's current analytics platform (replaced Universal Analytics in 2023). Event-based model tracking user interactions. Provides: traffic sources, user behavior, conversions, audience demographics. Add tracking code to site `<head>`. Privacy concerns — consider alternatives.

### Netlify Analytics

Server-side analytics from Netlify (paid add-on). Advantages: no client-side JavaScript, not blocked by ad blockers, GDPR-friendly (no cookies). Shows: pageviews, unique visitors, top pages, sources, 404s. Less detailed than GA but more privacy-respecting.

### Plausible Analytics

Privacy-focused, lightweight analytics (paid, open-source option). No cookies, GDPR/CCPA compliant without consent banners. Simple dashboard showing essential metrics. Script under 1KB. Growing alternative to Google Analytics for privacy-conscious sites.

### Privacy Policy

Legal document describing what data you collect and how it's used. Required by law if collecting any personal data or using analytics. Include: what data, why collected, how used, third parties, user rights. Link in footer. Tools like Termageddon can generate.

### Umami

Open-source, self-hosted analytics alternative to Google Analytics. Privacy-focused, no cookies, GDPR compliant. Clean UI, real-time dashboard. Free to self-host on services like Railway, Vercel, or your own server.

### UTM Parameters

URL parameters for tracking marketing campaign traffic. Standard parameters: `utm_source` (where), `utm_medium` (how), `utm_campaign` (why), `utm_content` (what), `utm_term` (keywords). Example: `?utm_source=twitter&utm_medium=social&utm_campaign=launch`.
