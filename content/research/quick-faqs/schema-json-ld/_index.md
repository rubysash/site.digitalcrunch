---
title: "FAQ - Schema & JSON-LD"
description: "Frequently asked questions about schema markup, JSON-LD structured data, rich results, and search engine optimization through structured data."
draft: false
date: 2026-03-01
showTableOfContents: true
showHero: true
heroStyle: background
showAuthor: false
showReadingTime: false
showWordCount: false
authors:
  - "jamesfraze"
tags: ["faq", "schema", "json-ld", "structured-data", "seo", "aeo"]
---

## Schema & JSON-LD

Schema markup is how search engines and AI models read your business data. These are the questions we get about structured data implementation.

#### What is schema markup?

Schema markup is code added to your website that tells search engines exactly what your content means. Instead of Google guessing that "Digital Crunch" is a business name, schema explicitly declares it - along with your address, phone number, services, hours, reviews, and every other structured fact about your business. It is a machine-readable description of your business that removes all ambiguity.

#### What is JSON-LD and why do you use it over other formats?

JSON-LD (JavaScript Object Notation for Linked Data) is the format Google recommends for schema markup. It sits in a script tag in your page header, separate from your visible content. This means we can add or update structured data without touching your page layout. The alternatives - Microdata and RDFa - require embedding schema attributes directly in your HTML, which makes maintenance harder and breaks more easily. JSON-LD is cleaner, easier to validate, and the industry standard.

#### What types of schema do you implement?

Depends on your business. Common types we configure:

- **LocalBusiness / Organization** - Name, address, phone, hours, service area
- **Service** - Individual service descriptions with pricing and availability
- **FAQ** - Question and answer pairs that appear in search results and get quoted by AI
- **Review / AggregateRating** - Star ratings that show in search results
- **Article / BlogPosting** - Content attribution, publish dates, author info
- **BreadcrumbList** - Navigation structure for search result display
- **Event** - Upcoming events, webinars, or promotions
- **Person** - Professional credentials, expertise, authority signals

Each type is implemented according to schema.org specifications and validated against Google's requirements.

#### What are rich results and how does schema enable them?

Rich results are the enhanced search listings you see in Google - star ratings below a business name, FAQ dropdowns, event dates, pricing, breadcrumb navigation. These are not random. Google generates them from valid schema markup on your page. Without schema, you get a plain blue link. With schema, your listing takes up more visual space, provides more information, and gets higher click-through rates.

#### What is schema drift and why is it dangerous?

Schema drift happens when your JSON-LD says one thing and your page says another. Your schema lists hours as 8am-6pm but your contact page says 9am-5pm. Your schema lists a service you discontinued. Your pricing in schema has not been updated in a year. AI models and search engines cross-reference schema against visible content. When they find mismatches, they flag the data as unreliable. Your trust score drops. Citations stop. One mismatch is all it takes for the AI to pick a competitor instead.

#### Can schema markup get my business sued?

Yes. Schema advertising pricing or services not actually available creates deceptive trade practices liability. If your schema says you offer a service at a specific price and you do not, that is legally actionable in most states. Incorrectly structured data can also interfere with screen readers, creating ADA compliance issues. Schema is not just technical SEO - it is a data accuracy and legal compliance concern.

#### How do I know if my current schema is broken?

Test it. Paste your URL into Google's Rich Results Test (search.google.com/test/rich-results) or the Schema.org Validator (validator.schema.org). If you see errors or warnings, your schema needs work. If you see nothing at all, you have no schema. We run both validators on every page we implement and deliver zero-error, zero-warning results.

#### Does schema help with AI search (ChatGPT, Perplexity, Claude)?

Absolutely. This is the entire point of Answer Engine Optimization (AEO). When someone asks an AI assistant "who does AI automation in Wylie TX," the model scans structured data to build its answer. JSON-LD is deterministic - the AI reads it exactly as written. Plain text is probabilistic - the AI guesses at meaning. Businesses with valid schema get cited. Businesses without it get skipped. This is not theoretical. It is happening on every AI query right now.

#### Is schema a one-time setup or ongoing maintenance?

Ongoing. Every time you change your hours, add a service, update pricing, move locations, or publish new content, your schema needs to match. We build schema that pulls from your actual business data where possible, reducing manual updates. But schema drift audits should happen quarterly at minimum. Set it and forget it is how schema becomes a liability instead of an asset.

#### How long does schema implementation take?

For a typical local business site with 5-15 pages, 8-15 hours. That includes auditing existing markup, building JSON-LD for every relevant page, validating against both Google and schema.org tools, cross-checking against visible content for drift, and testing rich result eligibility. Complex sites with hundreds of pages or multiple locations take longer. This is precision work, not a template paste.

#### What is the difference between schema and SEO?

SEO is the broad practice of making your site rank in search results. Schema is one specific component of technical SEO - the structured data layer that tells search engines what your content means. You can do SEO without schema, but you are leaving rich results, AI citations, and trust signals on the table. Schema without broader SEO strategy is also incomplete. They work together. Schema is the foundation that makes everything else more effective.

#### My web developer said they added schema. How do I verify?

Run your URL through Google's Rich Results Test. If it returns valid structured data types with no errors, your schema is technically correct. Then check for drift - does the schema data match what is actually on your page? Many developers add schema once during the build and never update it. The schema might be valid but inaccurate. Both matter.