---
title: "FAQ - Email Sending & Deliverability"
description: "Frequently asked questions about email deliverability, SPF, DKIM, DMARC, domain reputation, and inbox placement."
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
tags: ["faq", "email", "deliverability", "spf", "dkim", "dmarc", "ghl"]
---

## Email Sending & Deliverability

Your emails are useless if they land in spam. These are the questions we get about email authentication, domain reputation, and inbox placement.

#### Why are my emails going to spam?

Most likely one or more of these: your domain is missing SPF, DKIM, or DMARC records. Your sending domain has no reputation (brand new or unused). You are sending from a shared IP with poor history. Your content triggers spam filters (too many links, spammy words, heavy images). Or you are sending to a list full of invalid addresses that generate bounces. We diagnose the specific cause and fix it.

#### What are SPF, DKIM, and DMARC?

Three DNS records that prove your emails are legitimate.

- **SPF (Sender Policy Framework):** Tells receiving servers which mail servers are authorized to send email on behalf of your domain. Without it, anyone can spoof your address.
- **DKIM (DomainKeys Identified Mail):** Adds a cryptographic signature to every email you send. The receiving server verifies the signature to confirm the email was not altered in transit.
- **DMARC (Domain-based Message Authentication, Reporting & Conformance):** Tells receiving servers what to do when an email fails SPF or DKIM checks - quarantine it, reject it, or let it through. Also sends you reports about who is sending email using your domain.

All three are required. Missing even one gives email providers a reason to downgrade your messages.

#### Do I need a separate sending domain?

For cold outreach and bulk campaigns, yes. You should never send high-volume or cold email from your primary business domain. If that domain gets flagged, your regular business email (invoices, client communication, proposals) gets caught in the crossfire. We set up a dedicated sending subdomain (like mail.yourbusiness.com or outreach.yourbusiness.com) with its own authentication records. Your primary domain stays clean.

#### What is domain warmup and why does it take so long?

Email providers (Gmail, Outlook, Yahoo) do not trust new sending domains. If you send 5,000 emails from a domain that has never sent before, every major provider will flag it as suspicious. Domain warmup is the process of gradually increasing send volume over 2-4 weeks so providers build a positive reputation for your domain. Start with 20-50 emails per day to engaged contacts. Increase slowly. Skip this step and your domain is burned before you start.

#### What email sending platforms do you use?

Depends on the use case:

- **GoHighLevel** - Built-in email for CRM-triggered sequences and follow-up campaigns
- **Mailgun** - Transactional and bulk sending with strong deliverability controls
- **SendGrid** - High-volume delivery infrastructure with detailed analytics

We configure whichever platform fits your workflow. All get full SPF/DKIM/DMARC authentication.

#### What is the difference between transactional and marketing email?

Transactional emails are triggered by a user action - appointment confirmations, password resets, receipts, booking reminders. These have high open rates and should always be delivered. Marketing emails are campaigns, newsletters, promotions, and nurture sequences. Providers treat them differently. We separate the two so your transactional emails never get dragged down by marketing campaign reputation.

#### How do I check if my emails are landing in inbox or spam?

We test deliverability against Gmail, Outlook, and Yahoo using seed testing before launching campaigns. After launch, we monitor bounce rates, open rates, and spam complaint rates. If open rates drop below expected thresholds, something changed - either content, reputation, or authentication. We investigate and fix.

#### What bounce rate is acceptable?

Under 2% for a clean list. Over 5% and providers start throttling you. Over 10% and your domain reputation takes serious damage. High bounce rates mean your list contains invalid addresses. We configure list hygiene workflows - verification before sending, automatic removal of hard bounces, suppression of inactive contacts. Clean lists are the foundation of deliverability.

#### Can you fix a domain that is already blacklisted?

Sometimes. It depends on which blacklist, how long it has been listed, and what caused it. We check major blacklists (Spamhaus, Barracuda, SORBS, etc.), identify the cause, remediate the issue, and submit delisting requests. Some lists clear automatically once the problem is resolved. Others require manual review. In severe cases, the faster path is setting up a new sending subdomain and warming it properly from scratch.

#### What is DMARC reporting and should I care about it?

DMARC reports tell you every server that sent email using your domain - including servers you did not authorize. This catches spoofing attempts, misconfigured services, and shadow IT sending email without your knowledge. We configure DMARC with reporting enabled and review the data. Most businesses have no idea who is sending email on their behalf until they turn on DMARC reporting.

#### Does email authentication affect Google rankings?

Not directly for web search rankings. But Google uses domain reputation signals for Gmail inbox placement, and a domain known for spam gets treated accordingly across Google's ecosystem. More importantly, if your business emails land in spam because of poor authentication, you lose deals, miss client communication, and damage trust. The SEO argument is secondary to the business operations argument.

#### How long until I see deliverability improvements?

Authentication changes (SPF/DKIM/DMARC) propagate within 24-48 hours. Domain warmup takes 2-4 weeks. Reputation recovery from a blacklist can take 1-4 weeks depending on severity. If the issue is list quality, improvements show immediately after cleaning the list and removing bad addresses. There is no shortcut - providers track reputation over time.

#### What is the cost of poor email deliverability?

Every email that lands in spam is a lead, follow-up, or invoice your customer never sees. If 30% of your follow-up emails go to spam, you are losing 30% of those potential conversions. For a business sending 1,000 follow-up emails per month with a 5% conversion rate, that is 15 lost sales per month. Multiply by your average deal value. The math gets ugly fast.