---
title: "Hugo Content Creation"
description: "Hugo Basics"
showTableOfContents: true
weight: 60
series: ["Hugo Installation"]
series_order: 6
lastmod: "2026-01-26T00:18:00-06:00"
tags: ["hugo"]
---

## Hugo Versions

running the command `hugo version` will tell you the version.   As of this documentation we run version 0.147.8.   Themes work with specific versions of hugo, so it's best to not update unless there is a reason to do so.    Also, all computers that edit content must be on the same version and the netlify build variables must match the version you are using.

## Leaf vs Bundle

- A "Bundle" would be a group of bundles/leafs (children).
- A "Leaf" is a final page, with no children.

For example we have _index.md that are bundles (docs, hugo) and we have leafs (index.md + *.jpg)

```
docs/
|-- _index.md
`-- hugo/
    |-- _index.md
    |-- hugo-overview/
    |   |-- featured.(jpg,svg,gif,png)
    |   |-- image1.(jpg,svg,gif,png)
    |   `-- index.md
    `-- hugo-prequisits/
        `-- index.md
```

## Folder Structure

Each theme is different, but blowfish theme looks for a folder and inside that folder are all assets.

## Folder Architecture

Typically you only edit 2 folders consistently:   assets/static, content

You might setup and modify sitewide settings in the *.toml files, or the layouts folder and archetypes.

For our purposes, I've already done all settings and you will only modify files and folders in the "content" directory.   Editing anything else will break the site.

```
site.digitalcrunch/
├── archetypes/              # Templates for new content (hugo new)
│   └── default.md           #   Default front matter template
├── assets/                  # Blowfish uses this for processed assets (Hugo Pipes)
│   ├── css/                 #   Stylesheets (scss/css)
│   ├── js/                  #   JavaScript files
│   └── img/                 #   Images (processed/optimized by Hugo)
├── content/                 # All site content lives here
│   └── docs/                #   Example section
│       └── _index.md        #     Section bundle index
├── data/                    # Data files (JSON, YAML, TOML) for templates
├── i18n/                    # Translation strings for multilingual sites
├── layouts/                 # Custom templates (override theme defaults)
│   ├── _default/            #   Default templates (baseof, list, single)
│   ├── partials/            #   Reusable template fragments
│   └── shortcodes/          #   Custom shortcodes
├── public/                  # Generated site output (hugo build) - DO NOT EDIT
├── resources/               # Hugo cache (processed assets) - auto-generated
├── static/                  # Other themes use this for static files (copied as-is)
│   ├── images/              #   Unprocessed images
│   ├── fonts/               #   Web fonts
│   └── robots.txt           #   Example static file
├── themes/                  # Installed themes
│   └── blowfish/            #   Blowfish theme files
├── config.toml              # Site configuration (or hugo.toml / config/)
├── go.mod                   # Hugo module config (if using modules)
└── go.sum                   # Hugo module checksums
```
