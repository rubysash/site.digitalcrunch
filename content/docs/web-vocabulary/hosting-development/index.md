---
title: "Hosting & Deployment"
description: "Hosting and deployment terms including Netlify, continuous deployment, and serverless functions"
showTableOfContents: true
weight: 60
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 6
---

## Hosting & Deployment

### Atomic Deploys

Deployment strategy where the entire new version goes live instantly, not file-by-file. No broken states during deployment. If build fails, the old version remains live. Netlify uses atomic deploys by default.

### Branch Deploy

Automatic deployment of non-production branches to unique URLs (e.g., `develop--yoursite.netlify.app`). Configure which branches deploy in `netlify.toml` or UI. Useful for staging environments and feature testing.

### Build Command

The command Netlify executes to generate your site. For Hugo: `hugo` (basic) or `hugo --minify` (minified output) or `hugo --gc --minify` (garbage collect unused cache). Set in `netlify.toml` or Netlify UI. Can chain commands with `&&`.

### Cloudflare Pages

Static site hosting on Cloudflare's global network. Fast builds, unlimited bandwidth, integrates with Cloudflare's security and performance features. Free tier is generous. Growing alternative to Netlify.

### Continuous Deployment (CD)

Automatic build and deployment triggered by Git events (push, merge). With Netlify: push to main → webhook triggers build → new version deployed globally in seconds. No manual FTP or server management. Rollback to any previous deploy instantly.

### Deploy Preview

A Netlify feature that automatically builds and deploys every pull request to a unique URL (e.g., `deploy-preview-42--yoursite.netlify.app`). Allows testing changes before merging to production. Comments on the PR with the preview link.

### Edge Functions

Serverless functions running on Netlify's edge network (close to users). Lower latency than standard functions. Use for: geolocation, A/B testing, authentication, personalization. Written in JavaScript/TypeScript using Deno runtime.

### Environment Variables

Configuration values set outside code (API keys, feature flags, Hugo version). Set in Netlify UI (Site settings → Environment variables) or `netlify.toml`. Access in build: `HUGO_VERSION`, `HUGO_ENV`. Secrets should never be committed to Git.

### GitHub Pages

Free static hosting directly from GitHub repositories. Supports Jekyll natively; Hugo requires GitHub Actions for building. Limited features compared to Netlify (no functions, forms). Good for simple sites and documentation.

### HUGO_VERSION

Environment variable specifying which Hugo version Netlify should use for builds. Set to match your local version (e.g., `0.121.0`). Critical for consistent builds — different versions may have breaking changes. Check version with `hugo version`.

### Netlify

A platform for deploying and hosting static sites and serverless functions. Features: Git-based continuous deployment, global CDN, automatic HTTPS, deploy previews, forms processing, identity/auth, and serverless functions. Free tier generous for personal/small sites. Connects to GitHub/GitLab/Bitbucket.

### netlify.toml

Netlify's configuration file placed at the project root. Defines: build command (`[build] command = "hugo --minify"`), publish directory (`publish = "public"`), environment variables, redirects, headers, and plugin configuration. Overrides UI settings.

### Publish Directory

The folder containing built files to deploy. Hugo default: `public`. Configured in `netlify.toml` as `publish = "public"`. Netlify deploys only this directory's contents to the CDN.

### Serverless Functions

Backend code executed on-demand without managing servers. Netlify Functions use AWS Lambda. Place in `/netlify/functions/`. Use cases: form handling, API proxies, authentication, dynamic data. Scale automatically, pay per invocation.

### Vercel

Alternative hosting platform (created by Next.js team). Strong focus on frontend frameworks, serverless functions, and edge computing. Similar features to Netlify. Excellent for React/Next.js but also supports Hugo.
