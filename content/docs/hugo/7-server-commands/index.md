---
title: "Hugo Server"
description: "Commands for running the server"
showTableOfContents: true
weight: 70
tags: ["hugo"]
series: ["Hugo Installation"]
series_order: 7
---

## Correct Directory First
Run Hugo from the root of the site repo so it loads the correct config, theme, and content. This avoids starting the wrong site or getting missing-config errors.

~~~text
cd site.workers.digitalcrunch
~~~

## Server Flags

Multiple ways depending on what you want to do.

### Normally
Use for day-to-day work. Fast rebuilds and live reload while editing content and templates.

~~~text
hugo server
~~~

### Suspected Stale behavior
Use when changes are not showing up reliably (common with list pages, menus, taxonomies, partials, and shortcode-driven output). Disabling fast render forces fuller rebuilds so the output matches current templates and content.

~~~text
hugo server --disableFastRender
~~~

### Rebuild all (slow)
Use when you suspect caching or leftover artifacts are causing incorrect output. This combination forces deeper rebuild behavior and cleanup, but it will be noticeably slower.

~~~text
hugo server --disableFastRender --ignoreCache --gc --cleanDestinationDir
~~~

### Expose to LAN
Use to test the site from another device on your local network (phone/tablet). Binding to 0.0.0.0 exposes the dev server beyond localhost. Setting baseURL and disabling appendPort helps keep generated URLs consistent for LAN access.

~~~text
hugo server --bind 0.0.0.0 --baseURL http://YOUR-LAN-IP:1313/ --appendPort=false
~~~

### Specify Port
Use if 1313 is already in use, or you want to run multiple Hugo sites at once (each port is a unique server).  You would run each port in it's own shell.

~~~text
hugo server --port 1414
~~~

### Draft True
Use when you want to preview content with draft: true while you are still writing.

~~~text
hugo server -D
~~~

### Clean Dest Directory
Use when you suspect old generated files are lingering and confusing your results. This forces Hugo to clear the output directory so removed/renamed pages do not leave stale files behind.

~~~text
hugo server --cleanDestinationDir
~~~

### Debugs
Use to get more visibility into what Hugo is doing when something is not behaving as expected. Debug is noisier; info is lighter.

~~~text
hugo server --logLevel debug
hugo server --logLevel info
~~~

### Find Slow
Use to identify slow templates/partials and performance bottlenecks in large sites. Metrics show where time is spent; hints help interpret the results.

~~~text
hugo server --templateMetrics --templateMetricsHints
~~~