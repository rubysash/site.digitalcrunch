---
title: "FAQ - llms.txt"
description: "Frequently asked questions about llms.txt, the machine-readable file standard for AI indexability and LLM-friendly website structure."
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
tags: ["faq", "llms-txt", "aeo", "ai-search", "structured-data"]
---

## llms.txt

llms.txt is how you tell AI models what your business is and what you do. These are the questions we get about this standard.

#### What is llms.txt?

llms.txt is a plain text file placed at the root of your website (yourdomain.com/llms.txt) that provides a structured, machine-readable summary of your business for Large Language Models. Think of it like robots.txt but for AI assistants instead of search engine crawlers. It tells ChatGPT, Claude, Perplexity, and other AI models exactly who you are, what you offer, and where to find your important content.

#### Why do I need llms.txt if I already have schema markup?

Schema markup is embedded in individual pages. An AI crawler has to visit each page, parse the HTML, and extract the schema. llms.txt gives the AI a single file with your entire business summary upfront - before it crawls anything else. It is the table of contents. Schema is the detailed chapters. Both are needed. llms.txt gets you noticed. Schema provides the depth.

#### How is llms.txt different from a sitemap?

A sitemap (sitemap.xml) is a list of URLs for search engine crawlers. It tells Google which pages exist. It says nothing about what those pages contain, what your business does, or why someone should care. llms.txt is a narrative summary written specifically for AI consumption - your services, credentials, tech stack, authority signals, and direct links to key content. It is the difference between handing someone a phone book versus handing them a briefing document.

#### What goes in a llms.txt file?

At minimum:

- Business name and description
- Core services with brief explanations and URLs
- Key credentials and authority signals
- Technology stack (what you use and how you use it)
- Contact and booking information
- Links to important content (research, case studies, tools)
- Legal pages (privacy policy, terms of service)
- External authority signals (LinkedIn, GitHub, industry profiles)

The format is plain markdown. No HTML, no JavaScript, no schema syntax. Just clean, structured text that any AI model can parse immediately.

#### What is the llms.txt standard? Is it official?

The llms.txt standard was proposed to give website owners a way to communicate directly with AI models during crawling and inference. It is gaining adoption but is not yet an official W3C or IETF standard like robots.txt. That does not matter for practical purposes. AI companies are actively looking for these files because they make training and retrieval more accurate. Early adopters get indexed correctly while competitors remain invisible.

#### How does llms.txt help with AI search results?

When someone asks an AI assistant about your industry, the model pulls from its training data and any available real-time sources. If your llms.txt is well-structured, the AI can quickly determine your relevance, authority, and service offerings. This increases the probability that the model cites your business in its response. Without llms.txt, the AI has to guess based on scattered web content - and it often guesses wrong or picks a competitor.

#### Can llms.txt hurt my SEO?

No. llms.txt is a separate file that search engine crawlers (Googlebot, Bingbot) generally ignore. It does not affect your HTML, your page speed, or your traditional search rankings. It is purely additive - a new channel for AI discovery that operates alongside your existing SEO.

#### How often should llms.txt be updated?

Every time you add or remove a service, publish significant content, change your contact information, or update your credentials. If your llms.txt says you offer a service you discontinued, that is the same trust problem as schema drift. We recommend updating llms.txt as part of any major site change. For Hugo sites, we can automate generation from your content structure.

#### Do I need llms.txt if I have a small business?

Especially if you have a small business. Large enterprises already have enough web presence that AI models can piece together their information from multiple sources. Small businesses do not have that luxury. Your llms.txt might be the only structured document an AI model reads about your company. It is your chance to define the narrative instead of letting the AI guess.

#### How do you implement llms.txt for my site?

We write the file based on your current business data, services, credentials, and content. For Hugo sites, we place it in the static directory so it deploys to your root URL automatically. For GHL-hosted sites or WordPress, we configure the file at the server level. After deployment, we verify the file is accessible at yourdomain.com/llms.txt and parseable by AI models.

#### Is anyone actually using llms.txt right now?

Yes. AI-forward companies and technical businesses are adopting it. The businesses that implement it now are the ones that get indexed correctly as AI search usage grows. This is the same window that existed for SEO in 2005 and schema markup in 2015. Early movers set the standard. Late adopters play catch-up.

#### What does your llms.txt look like as an example?

You can view ours at digitalcrunch.com/llms.txt. It includes our entity information, service descriptions with URLs, tech stack, credentials, research links, tools, and legal pages. It is a working example of the format we implement for clients.