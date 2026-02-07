---
title: "Domain Name System"
description: "DNS terminology including records, nameservers, propagation, and domain management"
showTableOfContents: true
weight: 50
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 5
---

## Domain Name System

### A Record

DNS record mapping a domain to an IPv4 address. Example: `example.com → 104.198.14.52`. For Netlify: point your apex domain to Netlify's load balancer IP. Multiple A records can provide redundancy. Use with ALIAS/ANAME for apex domains when CNAME isn't allowed.

### AAAA Record

DNS record mapping a domain to an IPv6 address. Example: `example.com → 2607:f8b0:4004:800::200e`. IPv6 adoption growing; providing AAAA records future-proofs your site. Netlify supports IPv6.

### ALIAS / ANAME Record

Pseudo-record types (provider-specific, not official DNS standard) that work like CNAME but for apex domains. Cloudflare calls it "CNAME Flattening." Netlify DNS supports ALIAS. Resolves to IP at query time, allowing CDN benefits on root domains.

### CAA Record

Certificate Authority Authorization record specifying which CAs can issue SSL certificates for your domain. Security measure preventing unauthorized certificate issuance. Example: `example.com CAA 0 issue "letsencrypt.org"`.

### Cloudflare

Popular DNS provider, CDN, and security service. Offers free DNS hosting with fast propagation, DDoS protection, and CNAME flattening. Also provides domain registration at cost. Can proxy traffic for additional security/performance features.

### CNAME Record

Canonical Name record — aliases one domain to another. Example: `www.example.com → example.netlify.app`. The target must be a domain, not an IP. Cannot be used on apex/root domains (use A or ALIAS instead). Primary method for connecting custom domains to Netlify.

### DNS (Domain Name System)

The internet's phone book — translates human-readable domain names (example.com) to IP addresses (104.198.14.52) that computers use to connect. Hierarchical, distributed system of servers. Managed through your domain registrar or dedicated DNS provider (Cloudflare, Route 53).

### DNS Propagation

Time for DNS changes to spread across global servers. Can take minutes to 48 hours depending on TTL values and DNS resolver caching. Check propagation at [dnschecker.org](https://dnschecker.org) or [whatsmydns.net](https://whatsmydns.net).

### DNS Provider

Service hosting your DNS records. Can be your registrar (Namecheap, Cloudflare) or separate (AWS Route 53, Netlify DNS, Google Cloud DNS). Benefits of dedicated DNS: faster propagation, more record types, better security, integration with CDN.

### DNS Zone

The collection of DNS records for a domain. Managed through your DNS provider's dashboard. Contains A, AAAA, CNAME, MX, TXT, and other records. Can be exported/imported as zone files.

### Domain Registrar

A company where you purchase and manage domain names. Examples: Namecheap, Cloudflare Registrar, Google Domains, GoDaddy, Porkbun. The registrar controls your nameserver settings and domain ownership. Annual renewal required.

### MX Record

Mail Exchange record specifying mail servers for a domain. Required for receiving email. Includes priority value (lower = preferred). Example: `example.com MX 10 mail.example.com`. Not needed if using external email (Gmail, Outlook) — set at the email provider.

### Nameserver (NS)

Servers that respond to DNS queries for your domain. Set at your registrar to point to your DNS provider. Netlify nameservers: `dns1.p01.nsone.net`, etc. Cloudflare provides its own nameservers. Changes can take up to 48 hours to propagate.

### NS Record

Nameserver record identifying authoritative DNS servers for a domain. Set at the registrar level to delegate DNS to a provider. Example: `example.com NS dns1.p01.nsone.net`. Typically 2-4 nameservers for redundancy.

### TTL (Time To Live)

How long DNS records are cached before refreshing, in seconds. Common values: 300 (5 min), 3600 (1 hour), 86400 (24 hours). Lower TTL = faster propagation but more DNS queries. Reduce TTL before making changes, then increase after.

### TXT Record

DNS record containing arbitrary text data. Common uses: domain verification (Google, Netlify, SSL certificates), email authentication (SPF, DKIM, DMARC), and service configuration. Example: `_netlify.example.com TXT "abc123verification"`.
