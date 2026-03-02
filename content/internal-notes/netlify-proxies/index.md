---
title: "Netlify Proxy Rewrites"
description: "How the _redirects file works, why we use it, and how to add new proxy rules."
draft: true
date: 2026-03-01
showTableOfContents: true
showAuthor: false
showReadingTime: false
showWordCount: false
authors:
  - "jamesfraze"
---

## What This Is

Netlify supports reverse proxy rewrites via a `_redirects` file in the publish directory. When a browser requests a path like `/api/status/retell`, Netlify fetches `https://status.retellai.com/api/v2/summary.json` server-side and returns the response to the browser. The browser sees a same-origin response from `digitalcrunch.com`. No CORS. No third-party proxy services.

## File Location

`static/_redirects`

Hugo copies `static/` contents into the publish root (`public/`) at build time. Netlify reads `_redirects` from the publish root automatically. No Netlify dashboard config needed.

## Syntax

```
/local/path    https://external-url.com/endpoint    200!
```

Three columns, whitespace-separated:

| Column | Purpose |
|---|---|
| `/local/path` | The path on your domain that triggers the proxy |
| `https://...` | The external URL Netlify fetches server-side |
| `200!` | Status code. `200` means proxy (not redirect). The `!` forces the rewrite even if a file exists at that path. |

Without the `!`, Netlify would serve a local file if one existed at `/local/path` instead of proxying. The `!` ensures the proxy always wins.

A `301` or `302` instead of `200!` would send the browser a redirect header. We use `200!` because we want the browser to never see the external URL. Same-origin fetch. No CORS.

## Current Rules

All rules proxy the status dashboard's API calls:

| Local Path | Proxies To | Used By |
|---|---|---|
| `/api/status/retell` | `status.retellai.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/anthropic` | `status.anthropic.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/deepgram` | `status.deepgram.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/gcp` | `status.cloud.google.com/incidents.json` | Status Dashboard |
| `/api/status/sendgrid` | `status.sendgrid.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/netlify` | `www.netlifystatus.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/openai` | `status.openai.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/twilio` | `status.twilio.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/cloudflare` | `www.cloudflarestatus.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/github` | `www.githubstatus.com/api/v2/summary.json` | Status Dashboard |
| `/api/status/digitalocean` | `status.digitalocean.com/api/v2/summary.json` | Status Dashboard |

## How to Add a New Proxy

1. Open `static/_redirects`
2. Add a new line:
```
/api/your-path    https://external-api.com/endpoint    200!
```
3. In your JavaScript, fetch from the local path:
```javascript
const response = await fetch('/api/your-path');
const data = await response.json();
```
4. Build and deploy. No other config needed.

## How to Test

Netlify proxy rewrites only work on the deployed site. Hugo's local dev server does not read `_redirects`. There is no way to test proxy rewrites on localhost.

After deploying, verify by hitting the proxy URL directly in a browser:

```
https://digitalcrunch.com/api/status/retell
```

If it returns JSON from the external API, the proxy works. If it 404s, check the `_redirects` file syntax (whitespace issues, missing `200!`).

## Why Not Third-Party CORS Proxies

We previously used `corsproxy.io` and `allorigins.win` to bypass CORS on external API calls. Problems:

- **Reliability.** `corsproxy.io` started returning 403 with no warning. These are free services run by unknown parties. They go down, change policies, or disappear.
- **Security.** Every request passes through a third party that can inspect, modify, or log the data. For a status dashboard this is low risk, but the pattern is bad.
- **Performance.** Extra hop through a third-party server adds latency.

Netlify proxy rewrites run at the CDN level on infrastructure we control. No third party. No CORS. No dependency on free services.

## Security Notes

Each rule maps one fixed path to one fixed external URL. Users cannot control the destination. There is no wildcard passthrough and no open proxy. Someone could hit the proxy endpoints to scrape status APIs through your domain (consuming your Netlify bandwidth), but they could also just hit those status APIs directly.

## Limitations

- **No query parameters.** The `_redirects` syntax proxies a fixed path to a fixed URL. You cannot forward query strings from the browser to the external API. If you need dynamic query parameters, use Netlify Functions (serverless) instead.
- **No POST/PUT/DELETE.** Proxy rewrites work for GET requests. For other HTTP methods, use Netlify Functions.
- **No localhost testing.** Hugo dev server ignores `_redirects`. You must deploy to test.
- **Netlify-specific.** If the site moves off Netlify, this file does nothing. The equivalent on other platforms: Cloudflare Pages uses `_redirects` with the same syntax. Vercel uses `vercel.json` rewrites. AWS CloudFront uses Lambda@Edge.

## Related Files

| File | Purpose |
|---|---|
| `static/_redirects` | The proxy rules |
| `assets/js/status-dashboard.js` | Fetches from `/api/status/*` paths |
| `content/research/free-tools/status-dashboard/_index.md` | The page that loads the dashboard |
| `layouts/shortcodes/status-dashboard.html` | Shortcode that loads the CSS and JS |
