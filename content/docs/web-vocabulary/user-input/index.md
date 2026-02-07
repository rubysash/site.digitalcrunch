---
title: "User Input & Forms"
description: "Form handling terminology including validation, spam protection, and form backends"
showTableOfContents: true
weight: 120
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 12
---

## User Input & Forms

### AJAX Form Submission

Submitting forms via JavaScript without page reload. Better UX: show loading state, display success/error inline. Use `fetch()` or Axios with Netlify Forms by posting to the page URL with form data. Handle response in JavaScript.

### Decap CMS Forms

If using Decap CMS, content editors use the CMS interface rather than traditional forms. Content is committed to Git as Markdown files. Editorial workflow supports draft/review/publish stages.

### Form Action

The URL where form data is sent on submission. For Netlify Forms: leave empty or use a page path (Netlify intercepts). For third parties like Formspree: `action="https://formspree.io/f/yourcode"`. Method is typically POST.

### Form Spam Protection

Methods to prevent bot submissions. Netlify Forms includes: honeypot field (`data-netlify-honeypot="bot-field"`), built-in spam filtering, and optional reCAPTCHA. Honeypot: hidden field bots fill out, humans don't. Essential for public contact forms.

### Form Validation

Checking user input before submission. HTML5 attributes: `required`, `type="email"`, `pattern`, `minlength`. JavaScript for complex validation. Always validate server-side too (Netlify does basic validation).

### Formspree

Third-party form backend for static sites. Point form `action` to Formspree URL. Features: email notifications, file uploads, Zapier integration. Alternative to Netlify Forms if not on Netlify or need additional features.

### Honeypot Field

Anti-spam technique: a hidden form field (via CSS) that humans won't see or fill. Bots automatically fill all fields. If honeypot has value, submission is spam. Netlify: add hidden input with `name="bot-field"` and `data-netlify-honeypot="bot-field"` on form.

### Netlify Forms

Built-in form handling for static sites without backend code. Add `netlify` or `data-netlify="true"` attribute to any `<form>`. Submissions stored in Netlify dashboard, can trigger email notifications, webhooks, or integrations (Slack, Zapier). Free tier: 100 submissions/month.

### reCAPTCHA

Google's bot detection service. v2: "I'm not a robot" checkbox or invisible. v3: scores requests without user interaction. Netlify supports v2 with `data-netlify-recaptcha="true"`. Adds friction but increases spam protection.
