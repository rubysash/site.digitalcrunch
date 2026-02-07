---
title: "Git Workflow SOP"
description: "Standard Operating Procedure for creating, committing, and submitting documentation changes using Git and Pull Requests."
date: 2026-02-07
draft: false
weight: 1
---

# Git Workflow Standard Operating Procedure (SOP)

## Purpose

This document outlines the standardized Git workflow required for creating, managing, and submitting documentation updates. Following this process ensures:

- Codebase stability  
- Proper review before publishing  
- Clear change tracking  
- Team collaboration  
- Reduced deployment risk  

This workflow is mandatory for all contributors.

---

## Prerequisites

Before beginning, ensure you have:

- Git installed  
- Access to the repository  
- Proper write permissions  
- A cloned local copy of the repository  
- A terminal or command-line interface  

Verify Git installation:

```bash
git --version
```

---

## Core Workflow Overview

The approved workflow follows this structure:

**Update Main → Create Branch → Make Changes → Commit → Push → Pull Request → Review → Merge**

Contributors must **never push directly to the `main` branch.**

All changes must go through a Pull Request.

---

## Step 1 — Navigate to the Repository

Open your terminal and move into the project directory:

```bash
cd ~/site.workers.digitalcrunch
```

---

## Step 2 — Synchronize With the Main Branch

Always begin by ensuring your local repository matches the remote version.

```bash
git checkout main
git pull --ff-only
```

### Why This Matters
Working from an outdated branch can create merge conflicts and disrupt the deployment pipeline.

---

## Step 3 — Create a New Branch

Create a descriptive branch for your work.

```bash
git checkout -b git-workflow-sop
```

### Branch Naming Best Practices

Use clear, descriptive names:

✅ `git-workflow-sop`  
✅ `update-api-docs`  
✅ `fix-typos-homepage`  

Avoid vague names such as:

❌ `changes`  
❌ `new`  
❌ `test`  

A good branch name should immediately communicate the purpose of the change.

---

## Step 4 — Create or Update Documentation

Place documentation in the correct directory structure.

Example:

```
content/docs/git/git-workflow/index.md
```

Maintaining consistent structure ensures the documentation site remains organized and searchable.

---

## Step 5 — Review Changes Locally

Before committing, verify what has changed:

```bash
git status
```

This command displays:

- Modified files  
- Newly created files  
- Deleted files  

Carefully confirm that only intended changes are included.

---

## Step 6 — Stage Files

Add files to the staging area:

```bash
git add -A
```

### Best Practice
Stage all related files together to keep commits logically grouped.

---

## Step 7 — Commit Changes

Create a concise, professional commit message:

```bash
git commit -m "Added Git workflow SOP for documentation training"
```

### Commit Message Guidelines

A strong commit message should be:

- Clear  
- Specific  
- Professional  
- Written in one sentence  

**Good Examples:**

✅ "Created onboarding guide for new contributors"  
✅ "Updated installation instructions"  

**Poor Examples:**

❌ "stuff"  
❌ "updates"  
❌ "fixed things"  

Commit messages become part of the permanent project history.

---

## Step 8 — Push the Branch

Upload your branch to the remote repository:

```bash
git push -u origin git-workflow-sop
```

The `-u` flag sets the upstream branch so future pushes require only:

```bash
git push
```

---

## Step 9 — Open a Pull Request

After pushing, navigate to the repository on GitHub.

You will typically see a highlighted prompt:

**"Compare & pull request"**

Click it to begin.

---

### Pull Request Best Practices

**Title Example:**
```
Git Workflow SOP
```

**Description Example:**
```
Added a comprehensive Git workflow SOP to support contributor training and standardize the documentation process.
```

Keep descriptions short but informative.

---

## Step 10 — Review Process

Once submitted:

- A reviewer evaluates the changes  
- Feedback may be provided  
- Adjustments may be requested  

If updates are required:

```bash
git add -A
git commit -m "Addressed review feedback"
git push
```

The Pull Request updates automatically.

---

## Step 11 — Merge Approval

After approval, the Pull Request will be merged into `main`.

This ensures:

- Documentation accuracy  
- Quality control  
- Deployment safety  

---

## Common Mistakes to Avoid

### ❌ Pushing Directly to Main
This is typically restricted and can break production environments.

---

### ❌ Skipping `git pull`
Always synchronize before starting new work.

---

### ❌ Poor Branch Names
Descriptive names improve collaboration and repository clarity.

---

### ❌ Weak Commit Messages
Future contributors rely on commit history for context.

---

## Professional Workflow Summary

Follow this sequence every time:

```bash
git checkout main
git pull --ff-only
git checkout -b branch-name
git add -A
git commit -m "clear message"
git push -u origin branch-name
```

Then open a Pull Request.

---

## Why This Workflow Matters

This structured Git process enables teams to:

- Collaborate efficiently  
- Maintain documentation quality  
- Prevent accidental production issues  
- Track historical changes  
- Scale operations safely  

It reflects industry-standard engineering practices used across professional software teams.

---

## Final Recommendation

Always approach documentation updates with the same discipline as production code changes.

Consistency in Git usage is essential for maintaining a reliable and professional documentation ecosystem.
