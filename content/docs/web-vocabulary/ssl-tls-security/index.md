---
title: "SSL/TLS & Security"
description: "Web security terminology including HTTPS, certificates, and security headers"
showTableOfContents: true
weight: 100
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 10
---

## SSL/TLS & Security

### Content Security Policy (CSP)

HTTP header restricting which resources can load on your page, preventing XSS attacks. Example: `Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com`. Start with report-only mode to identify issues before enforcing.

### HSTS (HTTP Strict Transport Security)

Security header instructing browsers to only use HTTPS for the domain, preventing downgrade attacks. Header: `Strict-Transport-Security: max-age=31536000; includeSubDomains`. Enable in Netlify via `[[headers]]`. Consider HSTS preloading for maximum security.

### HTTPS

HTTP Secure — encrypted communication between browser and server using TLS. Essential for: security, SEO (Google ranking factor), modern features (geolocation, service workers), and user trust (padlock icon). Netlify enforces HTTPS by default.

### Let's Encrypt

Free, automated certificate authority. Issues domain-validated (DV) certificates. Certificates expire every 90 days but auto-renew. Netlify, Cloudflare, and most modern hosts use Let's Encrypt automatically. Revolutionized HTTPS adoption.

### Mixed Content

When an HTTPS page loads resources (images, scripts) over HTTP. Browsers block or warn about this. Fix by ensuring all URLs use `https://` or protocol-relative URLs (`//example.com/image.jpg`), or use relative paths.

### SSL/TLS Certificate

Digital certificate enabling encrypted HTTPS connections. SSL (Secure Sockets Layer) is deprecated; TLS (Transport Layer Security) is the current standard, but "SSL" is still commonly used. Netlify provides free certificates via Let's Encrypt, automatically provisioned and renewed.
