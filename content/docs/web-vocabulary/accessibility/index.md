---
title: "Accessibility"
description: "Web accessibility terms including WCAG, ARIA, screen readers, and inclusive design practices"
showTableOfContents: true
weight: 20
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 2
---

## Accessibility

### Alt Text

Alternative text for images, read by screen readers and shown if image fails to load. Describe the image's content and function. Skip for decorative images (`alt=""`). In Hugo Markdown: `![Description of image](image.jpg)`. Keep under 125 characters.

### ARIA (Accessible Rich Internet Applications)

Attributes adding accessibility information to HTML. Examples: `aria-label`, `aria-hidden`, `aria-expanded`, `role`. Use when native HTML semantics are insufficient. First rule of ARIA: don't use ARIA if native HTML works.

### Color Contrast

The difference in luminance between text and background. WCAG AA requires: 4.5:1 for normal text, 3:1 for large text. Check with: Chrome DevTools, WebAIM Contrast Checker. Low contrast makes text hard to read for many users.

### Focus Management

Controlling where keyboard focus goes, especially after user actions (opening modals, submitting forms). Focus should move logically. Trap focus in modals. Return focus when closing dialogs. Use `tabindex` carefully.

### Keyboard Navigation

Ability to use the site with keyboard only (Tab, Enter, Escape, arrows). All interactive elements must be focusable and operable. Ensure visible focus indicators (outline). Essential for motor impairments and power users.

### Screen Reader

Assistive technology that reads page content aloud for blind/low-vision users. Popular: NVDA (Windows, free), JAWS (Windows, paid), VoiceOver (macOS/iOS built-in), TalkBack (Android). Test your site with a screen reader to find issues.

### Semantic HTML

Using HTML elements for their intended purpose. `<nav>` for navigation, `<main>` for main content, `<article>` for articles, `<aside>` for sidebars, `<button>` for buttons (not `<div>`). Improves accessibility and SEO.

### Skip Links

Hidden links (visible on focus) allowing keyboard users to skip repetitive content (navigation) and jump to main content. Example: "Skip to main content" link at page start that jumps to `#main`. Essential for keyboard accessibility.

### WCAG (Web Content Accessibility Guidelines)

International standards for web accessibility by W3C. Three conformance levels: A (minimum), AA (standard target), AAA (highest). Covers: perceivable, operable, understandable, robust. Current version: WCAG 2.2. Many laws reference WCAG AA compliance.

### Web Accessibility (a11y)

Designing and developing websites usable by everyone, including people with disabilities. Covers visual, auditory, motor, and cognitive impairments. Benefits: larger audience, better SEO, legal compliance, improved UX for all. "a11y" = "a" + 11 letters + "y".
