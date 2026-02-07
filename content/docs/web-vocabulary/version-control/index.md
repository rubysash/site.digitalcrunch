---
title: "Version Control"
description: "Git and version control terminology including branches, commits, and GitHub workflows"
showTableOfContents: true
weight: 130
tags: ['hugo']
series: ["Web Vocabulary"]
series_order: 13
---

## Version Control

### .gitignore

A file specifying patterns for files/folders Git should not track. Essential entries for Hugo: `public/`, `resources/`, `node_modules/`, `.hugo_build.lock`, `.DS_Store`, `*.log`. One pattern per line. Comments with `#`.

### Branch

A parallel version of the repository for isolated development. Common branches: `main`/`master` (production), `develop` (integration), feature branches (`feature/new-header`). Create with `git branch` or `git checkout -b`. Merge when complete.

### Commit

A snapshot of staged changes saved to the repository with a descriptive message. Each commit has a unique SHA hash. Best practice: small, focused commits with clear messages (`git commit -m "Add contact form validation"`). Forms the project history.

### Git

A distributed version control system for tracking changes in source code. Created by Linus Torvalds for Linux kernel development. Enables collaboration, branching, history tracking, and rollbacks. Essential for modern development workflows and CI/CD pipelines.

### Git Submodule

A Git repository embedded inside another repository. Traditional way to add Hugo themes: `git submodule add https://github.com/theme/repo themes/themename`. Requires `git submodule update --init` after cloning. Hugo Modules are the modern alternative.

### GitHub

The largest cloud-based Git hosting platform (owned by Microsoft). Provides repositories, pull requests, issues, actions (CI/CD), pages (static hosting), and integrations. Free for public repos and limited private repos. Connects directly to Netlify for automatic deployments.

### GitHub Actions

GitHub's built-in CI/CD automation platform. Define workflows in `.github/workflows/*.yml`. Can build Hugo sites, run tests, and deploy to various hosts. Triggered by pushes, PRs, schedules, or manual dispatch. Free tier includes 2,000 minutes/month.

### GitLab

A Git hosting platform and DevOps lifecycle tool. Offers repositories, CI/CD pipelines, container registry, and more. Can be self-hosted or used as SaaS. Alternative to GitHub with strong CI/CD features built-in.

### Merge

Combine changes from one branch into another. Command: `git merge feature-branch`. Creates a merge commit (unless fast-forward). Conflicts occur when the same lines were changed in both branches — must be resolved manually.

### Pull / Fetch

**Fetch**: Download remote changes without merging (`git fetch`). **Pull**: Fetch and merge in one step (`git pull`). Always pull before starting work to avoid conflicts. `git pull --rebase` keeps history cleaner.

### Pull Request (PR) / Merge Request (MR)

A request to merge changes from one branch to another, typically with code review. GitHub calls them Pull Requests; GitLab uses Merge Requests. Enables discussion, automated checks, and approval workflows before integration. Netlify creates deploy previews for PRs.

### Push

Upload local commits to a remote repository. Command: `git push origin main`. Triggers CI/CD pipelines (like Netlify builds). Requires write access to the remote. May require pull first if remote has new commits.

### Rebase

Replay commits from one branch onto another, creating a linear history. `git rebase main` moves your branch's commits to the tip of main. Cleaner than merge commits but rewrites history — don't rebase shared branches.

### Repository (Repo)

A Git project containing all files, complete history, and branches. Can be local (on your machine) or remote (GitHub, GitLab). Initialized with `git init` or cloned with `git clone`. The `.git/` directory contains all version data.

### Staging Area (Index)

An intermediate area where changes are prepared before committing. Add files with `git add`. Allows selective commits — stage only related changes. View status with `git status`. Unstage with `git reset HEAD file`.
