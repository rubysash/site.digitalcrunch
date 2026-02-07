---
title: "Hugo & Build Tools"
description: "Hugo static site generator and build tool terminology including Hugo Pipes, Node.js, and preprocessors"
showTableOfContents: true
weight: 80
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 8
---

## Hugo & Build Tools

### Dart Sass

The primary implementation of the Sass CSS preprocessor, written in Dart. Hugo Extended includes LibSass (now deprecated), but some advanced Sass features require the standalone Dart Sass binary. Install separately if your theme's SCSS uses newer Sass features not supported by LibSass.

### Go (Golang)

The programming language Hugo is written in, developed by Google. You don't need to know Go to use Hugo, but Go must be installed if you're using Hugo Modules. Go's compiled nature contributes to Hugo's speed. Hugo templates use Go's `text/template` and `html/template` packages.

### Go Templates

Hugo's templating language inherited from Go's standard library. Uses double curly braces `{{ }}` for expressions. Supports variables, conditionals (`if`, `else`), loops (`range`), functions, and pipelines. Context is accessed via the dot `.` which represents the current scope (page, site, or passed value).

### Hugo

A fast, open-source static site generator written in Go. Hugo compiles Markdown content files and Go-based HTML templates into a complete static website. Known for extremely fast build times (often under 1 second for thousands of pages), Hugo is ideal for blogs, documentation sites, portfolios, and marketing sites. No database or server-side runtime required.

### Hugo Extended

The Hugo binary with extended features enabled, specifically support for Sass/SCSS compilation and WebP image encoding. Required if your theme uses `.scss` files processed via Hugo Pipes. Check your version with `hugo version` — look for "extended" in the output. Most themes (including Blowfish) require the extended version.

### Hugo Modules

A dependency management system for Hugo built on Go Modules. Allows you to import themes, components, and content from Git repositories without git submodules. Defined in `go.mod` and configured in `hugo.toml` under `[module]`. Commands include `hugo mod get`, `hugo mod tidy`, and `hugo mod graph`.

### Hugo Pipes

Hugo's built-in asset processing pipeline. Allows you to transform CSS, JavaScript, and images directly in templates without external build tools. Capabilities include: SCSS/Sass compilation, minification, fingerprinting (cache busting), bundling multiple files, PostCSS processing, and image resizing/conversion. Accessed via functions like `resources.Get`, `resources.ToCSS`, `resources.Minify`, and `resources.Fingerprint`.

### Node.js

A JavaScript runtime built on Chrome's V8 engine. Not required for basic Hugo sites, but needed if your theme uses Tailwind CSS, PostCSS plugins, or other npm-based build tools. Install via nodejs.org or a version manager like nvm.

### npm (Node Package Manager)

The default package manager for Node.js. Used to install JavaScript dependencies defined in `package.json`. Commands: `npm install` (install dependencies), `npm run build` (run scripts). Creates a `node_modules/` folder (should be git-ignored).

### PostCSS

A tool for transforming CSS with JavaScript plugins. Common uses include autoprefixing (adding vendor prefixes), minification, and processing Tailwind CSS. Hugo Pipes has built-in PostCSS support via `resources.PostCSS`. Requires Node.js and a `postcss.config.js` file.

### Tailwind CSS

A utility-first CSS framework that provides low-level utility classes (like `flex`, `pt-4`, `text-center`) instead of pre-built components. Requires Node.js and a build step to purge unused classes. Some Hugo themes integrate Tailwind, requiring `npm install` and a PostCSS build process alongside Hugo.
