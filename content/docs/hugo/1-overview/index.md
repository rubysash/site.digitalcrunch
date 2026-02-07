---
title: "Hugo Overview"
weight: 10
description: "Hugo Basics"
tags: ["hugo"]
series: ["Hugo Installation"]
series_order: 1
showTableOfContents: true
---

# Hugo build and deploy notes

We are going to setup hugo on windows to use github and netlify for free hosting of static pages that are fast and secure.  The times I have listed are without AI.  AI GREATLY speeds up this process by 8x or more.    Of course it takes longer the first time but you get faster at it.   Out of the box, you don't "NEED" to design anything.  The theme does that.  AI can create wonderful content in minutes, but you might spend 1-2 hours verifying, fixing, updating, and polishing it.   

You will almost entirely stay in the "Publish" category of workflow once things are setup.

{{< process-steps >}}
## Setup
- 2-4hrs Approx
- (Required, Once)
- Install Go
- Install Git
- Install Hugo
- Init Repo
- Netlify Project
- Domain Name 

## Design
- 2-8hrs + Changes
- Choose theme
- List Theme Colors
- Create Logos
- Create Backgrounds
- Edit hugo.toml
- Customize CSS
- Short Codes

## Publish
- 1-2 hours Manually
- 30 min if AI Boosted
- Write in Markdown
- Add True Images
- Optional Diagrams
- Optional AI Images
- Confirm Locally
- Push to GitHub

## CI/CD
- (Automatic/3min)
- CI triggers CD
- CDN delivery
{{< /process-steps >}}

The rest of this is going to be an overview so you get the basic understanding of the tech and terms behind what you're doing.   To be honest, you don't need to learn much, but it's intimidating the first time because it's not the way hosting is advertised or taught.    This is a superior system in all ways.

### Audience

- Who this is for
  - People who want fast, secure, low-maintenance static sites
  - People comfortable with git-based workflows
- Who this is not for
  - People who want click-only editing and plugins with no code/config
  - People who need complex server-side apps without serverless add-ons

### Static sites

Reasons to prefer static:

- Fast (CDN caching)
- Low attack surface
- Simple hosting
- Version-controlled content and config
- Easy rollback

### Alternatives

None of the alternatives compare, but this is what is commonly used:

- WordPress
- Site builders
- GoHighLevel pages

### Pricing

Wordpress hosting might be $15-$20 a month, but static site hosting is free or less than $5 a month even for high tiers.   Some features like disqus have a paid monthly fee as well, but there are free options (Giscus).    Chat bots and other AI powered widgets have the cost as a standard site.

- Hosting: often free/cheap (Netlify, Cloudflare Pages, etc.)
- Build + CDN: typically included
- Comments: varies (Disqus paid tiers, Giscus free, Remark42 self-host)

### Tooling map

Tools are all free and easy to use.

Pre-installs:
- Winget
- Go

Main installs:
- Hugo Extended
- Git
- Notepad++ or Visual Studio Code
- Obsidian
- LLM tooling (optional)

Tool setups (optional):
- Notepad++ or VS Code extensions
- Obsidian vault and templates
- LLM system prompt / instructions

### Accounts

Free tiers on these providers allow for large sites.   Paid tier is huge, in case the site grows, and it's still inexpensive compared to other forms of hosting.

- GitHub
- Cloudflare
- Netlify

### Workflow (manual)

Creating pages is done in markdown, then pushed to github.  Extremely simple automatic revision control.

- Create/edit page
- Validate locally (hugo server)
- Commit and push to GitHub

### Workflow (auto)

Once this is setup, it is 100% automatic.

- GitHub push triggers Netlify build
- Netlify builds site
- Netlify publishes to CDN

### Customizations

Hugo has a rich theme ecosystem, and is 100% customizable.

- Theme selection
- Shortcodes
- CSS
- Template overrides (copy theme template into site layouts/)

### Metrics

All standard metrics are available on hugo sites.

- GA4
- Google Search Console (Webmaster Tools)
- DNS analytics (Cloudflare)

### Restoration

Restoration is simple, often taking less than a few minutes even on a full crash.

- git clone
- hugo server
- push changes


