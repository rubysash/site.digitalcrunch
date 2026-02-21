---
title: "Claude Project Summary — Digital Crunch"
description: "High-level project context for Claude AI Projects. Covers services, tech stack, customers, USP, and sitemap."
draft: true
date: 2026-02-21
---

## Company Overview

**Digital Crunch** (digitalcrunch.com) is the technical implementation division of **FrazeMarketing.com**, specializing in AI automation for small-to-mid-size businesses ($1M–$5M revenue). Based in Wylie, TX, operated by **James Fraze** — Principal AI Engineer & Cybersecurity Engineer with 31 IT certifications, a B.S. in Information Security, and Fortune 100 vulnerability management experience. Legal entity: James Fraze LLC.

## What We Do

We build, deploy, and harden AI automation systems for businesses that need to compete but can't afford (or staff) enterprise-level solutions. Everything we ship is security-first — built by a cybersecurity engineer, not a marketing generalist.

### Published Services

| Service | What It Solves |
|---------|---------------|
| **AI Bots & Automated Agents** | 24/7 voice receptionist, web chat (RAG-powered), SMS/social DM agents. Replaces missed calls and dead leads with always-on multi-channel coverage. |
| **AI Lead Generation** | Outbound AI voice, SMS, email, LinkedIn outreach. Trained on sales frameworks, not spam templates. Replaces $4K–$6K/month SDR hires. |
| **AI Voice Receptionist** | Sub-500ms inbound call handling, appointment booking, CRM logging. 62% of SMB calls go unanswered — this fixes that for pennies per minute. |
| **Schema Validation & AEO** | JSON-LD implementation, schema drift auditing, llms.txt configuration, ADA compliance. Ensures AI search engines cite you, not competitors. |

### Draft / Upcoming Services (Not Yet Published)

- **Organic Search** — GBP optimization, SEO, AEO, content creation, link building
- **CRM Integration** — GoHighLevel setup and automation
- **Email Marketing** — Drip campaigns, deliverability engineering (SPF/DKIM/DMARC)
- **AI Automation Workflows** — n8n, Make.com, Zapier orchestration

## Published Research & Articles

| Article | Topic |
|---------|-------|
| **Implement Schema in Hugo** | Technical deep-dive: server-side JSON-LD, trust signals, entity linking, FAQ schema for AI quotability |
| **llms.txt Creation for Hugo** | Guide to the llms.txt standard for LLM indexability, BRAIN framework, AEO positioning |

## Case Study (Draft)

**Insurance Lead Generation Funnel** — End-to-end funnel for Decisive Insurance covering lead magnets (14 topics), distribution channels, 14-email drip campaign, domain/subdomain strategy, email authentication (SPF/DKIM/DMARC), deliverability metrics, and list hygiene.

## Target Customers

- Small-to-mid-size businesses ($1M–$5M revenue)
- Wylie, TX area and surrounding DFW metroplex
- Industries: insurance, professional services, home services, local businesses
- Pain points: missed calls, manual lead follow-up, no AI search presence, zero governance on customer-facing AI

## Unique Selling Proposition

1. **Security-first AI implementation** — Not a marketing agency bolting on chatbots. Built by a cybersecurity engineer with Fortune 100 experience and professional liability (E&O) insurance.
2. **Sales methodology, not spam** — AI agents trained on proven sales frameworks. Pattern interrupts, objection handling, qualification — not blast-and-pray.
3. **AEO pioneer** — Answer Engine Optimization certified. We don't just optimize for Google — we optimize for ChatGPT, Claude, Perplexity, and every AI that's replacing search.
4. **Hardened AI infrastructure** — Prompt injection hardening, data leakage prevention, compliance documentation. Enterprise-grade guardrails at SMB pricing.
5. **FrazeMarketing.com integration** — Digital Crunch handles the technical build; FrazeMarketing handles the marketing strategy. One team, full stack.

## Tech Stack

### AI & Voice

- **Retell** — AI voice agent platform
- **VAPI** — Voice API for AI calling
- **GoHighLevel (GHL)** — CRM, marketing automation, appointment booking, pipeline management
- **OpenAI / Anthropic / Deepgram** — LLM and speech-to-text backends

### Automation & Orchestration

- **n8n** — Self-hosted workflow automation
- **Make.com** — Cloud workflow automation
- **Zapier** — Integration glue for SaaS tools

### Email & Deliverability

- **Mailgun** — Transactional and bulk email sending
- **SendGrid** — Email delivery infrastructure
- **SPF / DKIM / DMARC** — Email authentication stack

### Web & Hosting

- **Hugo Extended (v0.141.0+)** — Static site generator
- **Blowfish theme** — Tailwind CSS 3.0, dark mode, search (Fuse.js)
- **Cloudflare** — DNS, CDN, DDoS protection
- **Netlify** — Hosting (status-monitored)
- **DigitalOcean** — Infrastructure

### Schema & SEO

- **JSON-LD** — Structured data markup (server-side rendered)
- **llms.txt** — LLM indexability standard
- **Google Analytics (G-QGTMME0CK1)** — Site analytics

### Monitoring

- Status dashboard tracks 15+ API services, DNS resolvers, and manual-check dependencies in real-time

## Interactive Tools

- **SVG Tracer** — Browser-based tool to extract SVG path coordinates for animation. Catmull-Rom spline interpolation, snap-to-grid, pan/zoom.
- **Status Dashboard** — Live infrastructure monitoring for all upstream dependencies (Retell, Anthropic, Deepgram, GHL, Twilio, Cloudflare, etc.)

## ASCII Sitemap

```
digitalcrunch.com/
├── / ................................................ Homepage (5 service cards, CTA)
│
├── /services/
│   ├── /ai-bots/ .................................... AI Bots & Automated Agents (hub)
│   │   └── /ai-voice-receptionist/ .................. AI Voice Receptionist (detail)
│   ├── /ai-lead-generation/ ......................... AI Lead Generation
│   └── /schema-validation/ .......................... Schema Validation & AEO
│   [draft] /organic-search/ ......................... Organic Search (SEO/GBP/AEO)
│   [draft] /crm/ .................................... CRM Tools (GHL)
│   [draft] /email-marketing/ ........................ Email Marketing
│   [draft]   └── /case-study-insurance/ ............. Case Study: Insurance Funnel
│   [draft] /ai-automation/ .......................... AI Automation Workflows
│
├── /research/
│   └── /schema/
│       ├── /implement-schema-in-hugo/ ............... Schema Implementation Guide
│       └── /llms-txt-creation-for-hugo/ ............. llms.txt Guide
│
├── /tools/
│   ├── /svg-tracer/ ................................. SVG Tracer Tool
│   └── /status-dashboard/ ........................... Tech Stack Status Monitor
│
├── /about/ .......................................... About Digital Crunch
│   ├── /privacy/ .................................... Privacy Policy
│   ├── /cookies/ .................................... Cookie Policy
│   ├── /terms/ ...................................... Terms of Service
│   ├── /accessibility/ .............................. Accessibility Statement
│   └── /color-codes/ ................................ Color Reference
│
├── /internal-notes/ ................................. Dev Notes (draft)
│   └── /claude-project-summary/ ..................... This File (draft)
│
├── /llms.txt ........................................ LLM Indexability File
├── /sitemap.xml ..................................... Auto-generated Sitemap
└── /robots.txt ...................................... Crawl Directives
```

## Relationship: Digital Crunch ↔ FrazeMarketing

- **FrazeMarketing.com** — Marketing strategy, client relationships, brand management
- **Digital Crunch** — Technical implementation arm (AI builds, automation, security hardening, schema/AEO)
- **GHL CRM** — Shared platform for pipeline management, appointment booking, email/SMS campaigns, and client reporting
- James Fraze operates both under James Fraze LLC

## Updating This Document

This is a manual reference. When you add new services, articles, tools, or change the tech stack, update the relevant section above. Key things to keep current:

- Published Services table (when drafts go live)
- Published Research table (new articles)
- ASCII Sitemap (new pages/sections)
- Tech Stack (new tools or platforms)
- Target Customers (if market shifts)
