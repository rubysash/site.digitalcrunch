---
title: "Hugo Architecture"
description: "Hugo site structure terminology including layouts, templates, content organization, and configuration"
showTableOfContents: true
weight: 70
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 7
---

## Hugo Architecture

### Archetypes

Templates for new content created with `hugo new`. Located in `/archetypes/`. `default.md` applies to all content; section-specific archetypes (e.g., `posts.md`) override for that section. Pre-populate front matter with common fields, dates, and draft status.

### assets/

Directory for files processed by Hugo Pipes. Unlike `/static`, these files are transformed (compiled, minified, fingerprinted) before output. Access via `resources.Get`. Blowfish and many modern themes use `/assets` for CSS, JS, and images.

### Base Template (baseof.html)

The root template that defines the overall HTML structure (doctype, head, body). Other templates extend it using `{{ define "main" }}` blocks. Located at `/layouts/_default/baseof.html`. Typically includes common elements like header, footer, and defines blocks for content and scripts.

### Branch Bundle

A content directory containing `_index.md` that acts as a section or list page with child pages. The underscore prefix indicates it's a branch (has children), not a leaf. Can contain its own resources and nested bundles or leaves. Example: `/content/docs/_index.md`.

### Built-in Shortcodes

Hugo provides several shortcodes out of the box: `figure` (images with captions), `gist` (GitHub gists), `highlight` (syntax highlighting), `instagram`, `param` (access page params), `ref`/`relref` (internal links), `twitter`, `vimeo`, and `youtube`.

### Config Directory

Alternative to a single config file — use `/config/_default/` for base configuration split across multiple files (`hugo.toml`, `params.toml`, `menus.toml`). Environment-specific overrides in `/config/production/`, `/config/staging/`. Merged at build time based on `--environment` flag.

### Custom Shortcodes

User-defined shortcodes created as HTML files in `/layouts/shortcodes/`. The filename becomes the shortcode name (e.g., `alert.html` → `{< alert >}`). Can accept positional or named parameters, access inner content via `.Inner`, and use all Hugo template functions.

### Data Files

JSON, YAML, or TOML files in `/data/` folder providing structured data accessible in templates via `site.Data.filename`. Useful for: navigation menus, team member lists, pricing tables, or any repeated structured content. Can also fetch remote data with `getJSON`/`getCSV`.

### hugo.toml / config.toml

The main site configuration file at the project root. Defines: `baseURL`, `title`, `languageCode`, theme, build options, taxonomies, menus, and custom params. Hugo looks for `hugo.toml`, `hugo.yaml`, `hugo.json`, or legacy `config.*` names.

### i18n (Internationalization)

Translation system for multilingual sites. String translations stored in `/i18n/` as YAML/TOML/JSON files named by language code (e.g., `en.yaml`, `es.yaml`). Access in templates via `{{ i18n "key" }}` or `{{ T "key" }}`. Supports pluralization and string interpolation.

### Layouts

HTML template files defining how content is rendered. Located in `/layouts` (your customizations) or `/themes/[name]/layouts` (theme defaults). Your layouts override theme layouts with matching paths. Key files include `baseof.html` (base template), `list.html` (section pages), and `single.html` (content pages).

### Leaf Bundle

A content directory containing `index.md` (no underscore) representing a single page with its own resources. All files in the directory (images, PDFs, data) are page resources accessible via `.Resources`. Cannot have children. Example: `/content/posts/my-post/index.md`.

### List Template (list.html)

Template for pages that list other content — section indexes, taxonomy pages, the homepage. Iterates over `.Pages` or `.RegularPages` to display child content. Located at `/layouts/_default/list.html` or section-specific paths.

### Page Resources

Files co-located with content in leaf bundles. Accessed in templates via `.Resources` methods: `.Resources.GetMatch "image.jpg"`, `.Resources.ByType "image"`. Can be processed with Hugo Pipes (resize images, etc.). Keeps content and assets together for better organization.

### Partials

Reusable template fragments stored in `/layouts/partials/`. Included in other templates via `{{ partial "header.html" . }}`. Use for repeated elements (navigation, footer, head meta, social icons) to maintain DRY (Don't Repeat Yourself) code. Can accept context and return values.

### public/

The output directory where Hugo generates the complete static site. Created by `hugo` or `hugo build`. Contains all HTML, CSS, JS, and assets ready for deployment. Should be git-ignored (regenerated on build). This is what you deploy to your host.

### resources/

Hugo's cache directory for processed assets (resized images, compiled SCSS, fingerprinted files). Auto-generated, speeds up subsequent builds. Can be git-ignored or committed for faster CI builds. Safe to delete — will be regenerated.

### Section

A top-level content directory under `/content/` that represents a distinct area of your site (blog, docs, projects). Each section can have its own list template (`/layouts/blog/list.html`), RSS feed, and configuration. Nested folders create subsections.

### Shortcodes

Reusable content snippets called from within Markdown files using `{< shortcode >}` or `{% shortcode %}` syntax. Built-in shortcodes include `figure`, `youtube`, `vimeo`, `gist`, and `highlight`. Custom shortcodes go in `/layouts/shortcodes/`. Useful for embedding media, alerts, callouts, and complex HTML structures.

### Single Template (single.html)

Template for individual content pages (blog posts, articles, documentation pages). Displays the full content via `{{ .Content }}` along with metadata like title, date, and taxonomies. Located at `/layouts/_default/single.html`.

### static/

Directory for files copied directly to `/public/` without processing. Use for: favicons, `robots.txt`, verification files, fonts, or any assets that shouldn't be fingerprinted. Files at `/static/images/logo.png` become `/images/logo.png` in the output.

### Taxonomies

Hugo's system for classifying and grouping content. Default taxonomies are `tags` and `categories`. Custom taxonomies (series, authors, topics) defined in config. Hugo automatically generates list pages for each taxonomy and term. Accessed in front matter as arrays: `tags: ["hugo", "tutorial"]`.

### themes/

Directory containing installed Hugo themes. Each theme is a subdirectory with its own `layouts`, `assets`, `static`, and config. Activated via `theme = "themename"` in config. Can also use Hugo Modules instead of this directory.
