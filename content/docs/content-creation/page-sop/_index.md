---
title: "SOP Creation"
description: "All about SOP Content"
showTableOfContents: true
---

{{< lead >}}
SOP: Creating SOPs 
(Markdown for Hugo)
{{< /lead >}}


## 1. Objective & Scope
- Outcome: Produce an institutional-quality SOP in Markdown that can be published on the Hugo site and reliably executed by another worker without extra explanation.
- Trigger: A recurring task, fragile process, or multi-step workflow needs to be documented so it can be delegated, repeated, audited, or improved.
- Exclusions:
  - This SOP does not define the technical content of every domain SOP (it defines the SOP-writing method).
  - This SOP does not replace team policy decisions (it documents how to write once decisions are made).
  - This SOP does not cover private secrets handling beyond documentation hygiene (no secrets in repo).

## 2. Prerequisites
- Tools/Software:
  - Text editor capable of Markdown (VS Code / VSCodium recommended)
  - Git (commit/push workflow)
  - Hugo local dev server (for preview)
  - Optional: screenshot tool (OS-level) for UI anchors
- Permissions:
  - Write access to the Hugo repository and the content directory
  - Ability to run Hugo locally (or access a preview environment)
- Required Inputs:
  - Process name and business purpose
  - Audience definition (who will run it)
  - Source artifacts: links to scripts, docs, vendor docs, internal pages, repos
  - Known constraints: environments, credentials method, time windows, rate limits, safety requirements
  - Acceptance criteria: how to prove the process worked

## 3. (Step-by-Step)
> [!IMPORTANT]
> Use the "Action-Result" format: [Action] so that [Expected Result].

### Define the SOP 
(title, owner, audience, frequency).
   - Write the SOP Title so that the reader knows exactly what is being done.
   - Declare the intended executor (e.g., VA, engineer, marketer) so the detail level matches the operator.
   - Set the frequency (one-time, daily, weekly, on-trigger) so that steps reflect real usage.
   - Expected Result: A clear identity for the SOP so the right person can run it the right way.

### Organize SOP
 (bundle vs leaf) and create the folder.
   - Choose a parent folder under content based on site taxonomy (example: content/ops/sops/ or content/docs/sops/).
   - If the SOP will be a single page, create a leaf page:
     - Create content/<path>/<sop-slug>/index.md
   - If the SOP will be a series with multiple pages, create a branch bundle:
     - Create content/<path>/<sop-slug>/_index.md
     - Create child pages in the same folder (example: content/<path>/<sop-slug>/part-01.md)
   - If complicated, split into a series:
     - Part 01: Overview + prerequisites + safety
     - Part 02+: Execution details, per sub-process
   - Expected Result: The Hugo folder structure matches the SOP complexity and renders correctly.

### Front Matter
Add front matter and standard metadata.
   - Add front matter fields required by your Hugo theme and site conventions.
   - Include (minimum) title and (recommended) description, tags/categories, weight/order.
   - Expected Result: The page appears correctly in navigation and lists.

### Write Section 1: 
Objective & Scope using operational language.
   - State the successful end state in measurable terms (what exists, where, and how verified).
   - State the trigger as an observable condition (email received, ticket created, failed check, schedule).
   - State exclusions explicitly to prevent scope creep.
   - Expected Result: The operator knows when to run it and what "done" means.

### Write Section 2: 
Prerequisites & Access with zero ambiguity.
   - List tools by name and include version constraints only when they matter.
   - Specify permissions as roles and access levels, not personal accounts.
   - List required inputs as a checklist and include where to find them.
   - Expected Result: The operator can prepare everything before starting and avoid mid-process stalls.

### Write Section 3: 
Execution in Action-Result steps with logic branching.
   - Start each step with a verb.
   - Use one primary action per step; split steps when actions differ in intent.
   - Add logic branches when outcomes diverge:
     - If Condition A, then Action X so that Result X.
     - If Condition B, then Action Y so that Result Y.
   - Add verification points after risky steps or state changes:
     - Verify by checking an observable output (file exists, UI state, command output, log entry).
   - Expected Result: A runnable procedure where each step confirms progress and reduces errors.

### Write Section 4:
Quality Control & Definition of Done (DoD) as explicit checks.
   - Add validation items that are objective (commands, screenshots, URLs, counts).
   - Include cleanup (closing sessions, removing temp files, revoking tokens if applicable).
   - Include reporting/notification requirements (who, what to send, where to log).
   - Expected Result: The SOP closes the loop and leaves the system clean and auditable.

### Write Section 5: 
Troubleshooting & Fail-Safes based on real failure modes.
   - Add common errors that have occurred or are likely given tooling.
   - For each error, list symptoms and the fastest safe fix.
   - Add an escalation rule with a specific role and what evidence to include.
   - Expected Result: The operator can recover without guessing and knows when to escalate.

### Gold Standard 
   - Active voice: rewrite passive steps.
   - Bus test: remove assumed knowledge and add missing context.
   - Logic branching: ensure every fork is documented.
   - Visual anchors: add screenshots or exact UI labels for non-intuitive steps.
   - Single source of truth: link to scripts/docs; do not duplicate volatile content.
   - Expected Result: The SOP is institution-grade, not personal notes.

### Preview in Hugo 
   - Run local Hugo server and open the page.
   - Fix broken headings, callouts, lists, and links.
   - Ensure code blocks render properly and are copyable.
   - Expected Result: The SOP renders cleanly and is usable in the browser.

### Commit and publish
   - Add new files and changes.
   - Commit with a descriptive message (SOP: add <name>).
   - Push and verify deployment success in the hosting pipeline.
   - Expected Result: The SOP is live and versioned.

## 4. Definition of Done
- [ ] Validation: Hugo page builds successfully and renders correctly; links resolve; steps are executable as written.
- [ ] Validation: At least one independent run-through (by a peer or by the author pretending to be a new operator) succeeds without back-and-forth questions.
- [ ] Cleanup: No secrets included; no temporary files left behind; any sessions/tokens described have closure steps.
- [ ] Reporting: SOP is logged in the change history (git commit), and any required stakeholders are notified per team practice.

## 5. Troubleshooting 
- Common Error A: SOP is too vague to execute -> Rewrite each step in Action-Result format and add verification outputs.
- Common Error B: Wrong Hugo structure (leaf vs bundle) -> If single page, use <slug>/index.md; if series, use <slug>/_index.md and add child pages.
- Common Error C: UI steps are unclear -> Add screenshots and exact UI labels; include menu paths and button names.
- Common Error D: Content duplicates volatile documentation -> Replace duplicated content with a link to the authoritative source and summarize only the stable intent.
- Escalation: If the SOP requires access the operator does not have or risks production impact, contact the SOP owner or technical lead immediately with:
  - SOP title + URL/path
  - Step number where blocked
  - Screenshot or exact error text
  - What was attempted

## The Gold Standard 
Active Voice: Every step starts with a verb and describes a concrete outcome.

The Bus Test: A peer with similar technical skills can complete the task flawlessly without live coaching.

Logic Branching: Decision points use explicit If/Then statements and cover the major branches.

Visual Anchors: Include screenshots for UI-heavy steps and code blocks for CLI commands or config snippets.

Single Source of Truth: Link to scripts and authoritative docs; avoid copy-pasting content that will drift.

## Markdown Skeleton
```
## 1. Objective & Scope
- Outcome:
- Trigger:
- Exclusions:

## 2. Prerequisites
- Tools/Software:
- Permissions:
- Required Inputs:

## 3. (Step-by-Step)
> [!IMPORTANT]
> Use the "Action-Result" format: [Action] so that [Expected Result].

### Step Title:
   - Action so that expected result.
   - If condition, then action so that result.
   - Verify by checking observable output.

## 4. Definition of Done 
- [ ] Validation:
- [ ] Cleanup:
- [ ] Reporting:

## 5. Troubleshooting 
- Common Error A: Symptoms -> Solution.
- Escalation: If situation occurs, contact role with evidence.
```
