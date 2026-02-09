# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo static site for **Digital Crunch** (digitalcrunch.com) — an AI automation implementation services company. Uses the **Blowfish** theme (git submodule in `themes/blowfish/`). Requires Hugo Extended v0.141.0+.

## Build & Development Commands

```bash
hugo server                    # Local dev server (excludes content/guides, content/users)
hugo server -e production      # Preview with production settings
hugo                           # Production build (outputs to public/)
hugo new content/section/page/index.md  # Create new content page
```

Hugo server must be restarted to pick up changes to tags/authors taxonomies.

## Architecture

### Configuration

Config lives in `config/_default/` (not a single root config file):
- `hugo.toml` — base URL, theme, taxonomies, pagination, related content weights
- `params.toml` — Blowfish theme params (dark mode, homepage layout "background", article display, analytics)
- `menus.en.toml` — navigation and footer menus
- `languages.en.toml` — site title, author info, language settings
- `markup.toml` — LaTeX passthrough, unsafe HTML enabled, TOC depth 2-4
- `config/development/hugo.toml` — dev overrides (ignores large image folders)

Multiple languages are defined (de, es, fr, it, ja, pt-br, pt-pt, zh-cn) but all disabled except English.

### Content Sections

- `content/services/` — AI Bots, AI Automation, CRM, Email Marketing, Organic Search, Schema Validation
- `content/tools/` — Interactive tools (SVG Tracer)
- `content/about/` — Legal/policy pages (privacy, cookies, terms, accessibility)
- `content/internal-notes/` — Draft-only dev notes (not published)

Service pages use `layout: "full"`. Author data lives in `data/authors/jamesfraze.json`.

### Custom Components

Layout overrides are in `layouts/` (not in the theme):
- `layouts/shortcodes/category-cards.html` — card grid from markdown (parses `## Title` and `- items`)
- `layouts/shortcodes/process-steps.html` — color-coded workflow visualization (red→orange→yellow→green)
- `layouts/shortcodes/tracer.html` — SVG tracing tool (pairs with `assets/js/tracer.js` and `assets/css/tracer.css`)
- `layouts/partials/home/custom.html` — custom homepage with layout switching via `assets/js/home.js`

### Styling

Custom CSS in `assets/css/custom.css` implements a dark cyberpunk aesthetic. Key design tokens:
- Background: `#0e1219` (obsidian) through `#32475c` (slate)
- Primary accent: `#439cf4` (azure blue)
- Highlight: `#00ff44` (electric green)
- Headings have glow/shadow effects and colored borders

### Theme

Blowfish is installed as a git submodule. Do not edit files in `themes/blowfish/` — override via `layouts/` and `assets/` in the project root. The theme provides Tailwind CSS 3.0, dark mode, search (Fuse.js), Mermaid diagrams, Chart.js, and FontAwesome 6 icons.

## Rules

- Always commit with `git add -A && git commit -m "checkpoint: [description]"` before making any file changes

## Known Quirks

- Tel links in menus require `.URL | safeURL` pipe filter
- The `resources/_gen/` directory contains Hugo's image processing cache — can be regenerated
- No CI/CD pipeline configured — deployment is manual
- `.gitignore` only excludes `/public/`
