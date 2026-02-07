---
title: "Content & File Types"
description: "Web file formats and content types including HTML, CSS, JavaScript, images, and data formats"
showTableOfContents: true
weight: 40
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 4
---

## Content & File Types

### AVIF (.avif)

AV1 Image File Format — a next-generation image format based on the AV1 video codec. Even better compression than WebP (up to 50% smaller than JPEG). Growing browser support. Hugo 0.83+ supports AVIF encoding with Hugo Extended.

### CSS (.css)

Cascading Style Sheets — the language for styling HTML documents. Defines colors, fonts, layout, spacing, and responsive behavior. Can be placed in `/static` (copied as-is) or `/assets` (processed by Hugo Pipes for minification, fingerprinting).

### Favicon (.ico, .png, .svg)

The small icon displayed in browser tabs, bookmarks, and history. Modern best practice: provide `favicon.ico` (legacy), `favicon.svg` (scalable), and `apple-touch-icon.png` (iOS). Place in `/static` at the root level.

### Front Matter

Metadata at the top of content files enclosed in delimiters. Defines page properties like `title`, `date`, `draft`, `tags`, `categories`, `weight`, and custom parameters. Supports three formats: YAML (between `---`), TOML (between `+++`), or JSON (between `{ }`). Accessed in templates via `.Params`.

### HTML (.html)

HyperText Markup Language — the standard markup language for web pages. Hugo compiles templates and Markdown into static HTML files. Template files in `/layouts` are HTML with Go template syntax embedded. The final output in `/public` is pure HTML.

### JavaScript (.js)

The programming language of the web for client-side interactivity. Hugo can process JS files via Hugo Pipes (bundle, minify, fingerprint) or tools like ESBuild. Place in `/assets` for processing or `/static` to copy unchanged.

### JSON (.json)

JavaScript Object Notation — a lightweight data interchange format. Used for data files, API responses, and occasionally front matter. Strict syntax with double quotes required for keys and strings. Hugo can output JSON (for APIs, search indexes) and read JSON data files.

### Markdown (.md)

A lightweight markup language using plain text formatting syntax. Hugo content files are written in Markdown, which gets converted to HTML during build. Supports headings (`#`), bold (`**text**`), links (`[text](url)`), images, code blocks, and more. Hugo uses the Goldmark parser by default, which supports CommonMark and GitHub Flavored Markdown.

### SCSS / Sass (.scss, .sass)

A CSS preprocessor adding programming features: variables (`$primary-color`), nesting, mixins, functions, and imports. `.scss` uses CSS-like syntax with braces; `.sass` uses indentation. Requires Hugo Extended. Compiled to CSS via Hugo Pipes using `resources.ToCSS`.

### SVG (.svg)

Scalable Vector Graphics — an XML-based vector image format. Resolution-independent, small file size, and can be styled with CSS or manipulated with JavaScript. Ideal for logos, icons, and illustrations. Can be inlined directly in HTML or used as image sources.

### TOML (.toml)

"Tom's Obvious Minimal Language" — a configuration file format designed to be easy to read. Hugo's preferred format for `hugo.toml` (or `config.toml`). Uses `key = "value"` syntax and `[sections]` for grouping. More explicit than YAML with less ambiguity.

### WebP (.webp)

A modern image format developed by Google providing superior lossless and lossy compression. Typically 25-35% smaller than equivalent JPEG/PNG with similar quality. Supported by all modern browsers. Hugo Extended can convert images to WebP via `images.Process`.

### YAML (.yaml, .yml)

"YAML Ain't Markup Language" — a human-readable data serialization format using indentation for structure. Common for front matter and config files. Uses colons for key-value pairs (`title: My Page`) and hyphens for lists. Sensitive to whitespace — use spaces, not tabs.
