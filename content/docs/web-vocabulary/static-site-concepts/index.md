---
title: "Static Site Concepts"
description: "Static site terminology including JAMstack, SSGs, and headless CMS concepts"
showTableOfContents: true
weight: 110
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 11
---

## Static Site Concepts

### Build Time vs. Runtime

**Build time**: When the static site is generated (running `hugo build`). All pages are pre-rendered. **Runtime**: When users visit the site. With static sites, runtime is just serving files — no processing. Content updates require a new build and deploy.

### Decap CMS (formerly Netlify CMS)

An open-source, Git-based headless CMS that provides a friendly editing interface for static site content. Stores content as files in your Git repository. Configured via `config.yml`. Integrates seamlessly with Hugo and Netlify.

### Headless CMS

A content management system that provides content via API without a built-in frontend. Examples: Contentful, Sanity, Strapi, Netlify CMS, Decap CMS, Forestry. Content editors use the CMS; the SSG pulls content at build time. Decouples content management from presentation.

### JAMstack

Modern web architecture: **J**avaScript (client-side interactivity), **A**PIs (server-side functions via HTTPS), **M**arkup (pre-rendered HTML). Decouples the frontend from the backend. Enables atomic deploys, instant cache invalidation, and global CDN distribution. Netlify coined the term.

### Static Site

A website consisting of fixed HTML, CSS, and JavaScript files served directly without server-side processing. No database queries or dynamic rendering per request. Benefits: extremely fast, highly secure (no server vulnerabilities), cheap to host, scales infinitely via CDN. Content changes require rebuilding and redeploying.

### Static Site Generator (SSG)

A tool that compiles content and templates into static HTML files at build time. Popular SSGs: Hugo (Go), Jekyll (Ruby), Eleventy (JS), Gatsby (React), Astro, Next.js (hybrid). Enables dynamic development workflows (templates, components) with static output benefits.
