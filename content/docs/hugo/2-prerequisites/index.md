---
title: "Hugo Prerequisites"
description: "Setup these things Before You Install Hugo"
showTableOfContents: true
series: ["Hugo Installation"]
series_order: 2
weight: 20
lastmod: "2026-01-25T00:18:00-06:00"
tags: ["hugo"]
---

{{< process-steps >}}
## Core Tools
- 15-30 min
- Install Go
- Install Hugo Extended
- Install Git
- Verify versions
## Accounts
- 15-30 min
- (Free tiers)
- Netlify signup
- Cloudflare signup
- Purchase domain
- Configure DNS
## Optional
- 15-30 min
- (Recommended)
- GA4 Analytics
- Search Console
- Comments system
{{< /process-steps >}}

## Prerequisites

Install the software and setup accounts.   You can do this on windows, mac, linux.   These instructions are for windows.

### Winget
Docs:
- https://docs.microsoft.com/en-us/windows/package-manager/winget

### Go
Docs and downloads:
- https://go.dev/doc/install
- https://go.dev/dl/

Verify:
```
go version
```

### Hugo (Extended)

Current version as of this writing is 155.1, but we are using 147.8.  Hugo is the tool that turns markdown + theme into static html.

Official Hugo Docs:
- https://gohugo.io/getting-started/installing

Install via winget:
```
winget show Hugo.Hugo.Extended --versions
winget uninstall Hugo.Hugo.Extended
winget uninstall --name "Hugo (Extended)"
winget install Hugo.Hugo.Extended --version 0.147.8
```

Verify:
```
hugo version
```

### Git

Git is the revision control system and part of the CI/CD pipeline.  We upload to git and then it automatically is published.

Installer:
- https://git-scm.com/install/windows

Install via winget:
```
winget install --id Git.Git -e --source winget
```

Verify:
```
git --version
```

### Analytics

Analytics allow us to see the traffic, search results, read time and other important metrics.   We use this data to know what to fix.

- GA4: https://analytics.google.com/analytics/web/
- Search Console: https://developers.google.com/search

### Comments

Comments are optional, but recommended.   People and AI answer optimization likes to see social interaction.

Hugo comments overview:
- https://gohugo.io/content-management/comments/

Options:
- Disqus (paid tiers): https://disqus.com/
- Giscus (free, GitHub-based): https://giscus.app/
- Remark42 (free, self-host): https://remark42.com/

### Netlify account

Netlify is the CDN and it builds the hugo pages on their servers to publish.   Netlify monitors your github account for changes and automatically publishes.

- https://app.netlify.com/login

### Cloudflare account

Cloudflare is the DNS tooll to manage records.  It has has protections against DDOS and other tools we need.  It's also the cheapest registrar with the most tools ($10.44 per year as of this writing)

- https://dash.cloudflare.com/
- Purchase domain
- Manage DNS records

There are 2 steps to setting up DNS.   You need to create a project in netlify before you can do the second step.   DNS will be covered in a separate document.
