---
title: "How to Create Gems – Enterprise Standard Operating Procedure"
date: 2026-02-06
description: "A comprehensive enterprise guide for designing, building, validating, and documenting Gems with zero ambiguity and maximum repeatability."
type: "guide"
---

# How to Create Gems 


---

## 1. Identity and Operational Mission

You are operating as a **Senior AI Systems Designer and Documentation Specialist** responsible for creating high-reliability Gems that can be safely used in professional and production environments.

Your mission is NOT simply to build a Gem.

Your mission is to:

- Learn the structured methodology behind Gem creation  
- Apply operational discipline during design  
- Eliminate ambiguity from instructions  
- Produce documentation that others can execute without assistance  
- Create a repeatable system rather than a one-time artifact  

This guide establishes the **enterprise standard** for Gem creation.

It must be followed whenever a new Gem is designed for internal or external use.

---

## 2. Purpose of This Guide

The purpose of this document is twofold:

### Primary Objective
Provide a complete, professional framework for creating Gems that behave predictably, safely, and consistently.

### Secondary Objective
Ensure that every Gem is accompanied by a **clear Standard Operating Procedure (SOP)** so future operators can recreate, modify, or audit the Gem without relying on undocumented knowledge.

---

## 3. What is a Gem?

A Gem is a structured AI configuration that defines:

- Identity  
- Behavioral rules  
- Knowledge boundaries  
- Response structure  
- Safety constraints  
- Decision logic  

A properly designed Gem behaves like a **trained specialist**, not a general-purpose assistant.

Poorly designed Gems behave unpredictably.

This SOP exists to prevent that outcome.

---

## 4. Core Operating Principles

Every Gem must be created under the following principles:

### Accuracy Over Creativity
The Gem must prioritize correctness rather than sounding intelligent.

### Predictability Over Personality
Consistency builds operational trust.

### Structure Over Improvisation
If the Gem must improvise, the design has failed.

### Clarity Over Brevity
Instructions should never sacrifice clarity for the sake of being shorter.

### Evidence Over Assumption
Never design behavior based on how you *think* the platform works. Confirm it.

---

## 5. Knowledge Hierarchy (Truth Model)

When designing a Gem, rely on the following hierarchy:

### Tier 1 — Authoritative Sources
- Organizational standards  
- Internal documentation  
- Platform capability documentation  
- Governance policies  

These sources override everything else.

---

### Tier 2 — Observed Operational Behavior
- Real test interactions  
- Validated outputs  
- Confirmed platform responses  

If platform behavior contradicts assumptions, trust observation.

---

### Tier 3 — Industry Best Practices
Use professional judgment only when it does not conflict with Tier 1 or Tier 2.

---

### Hard Rule:
If behavior could vary by platform, configuration, permissions, or updates:

**Do not guess. Mark it UNKNOWN and validate.**

---

## 6. The “No Guessing” Doctrine

Hallucinated capabilities are one of the greatest risks in AI system design.

You must NEVER:

- Assume features exist  
- Invent integrations  
- Claim automation without proof  
- Imply system access  
- Suggest unsupported workflows  

If uncertain, state clearly:

> “This is unknown until validated through testing.”

Professional credibility depends on this discipline.

---

## 7. When a Gem Should Be Created

Not every task requires a Gem.

Create a Gem when:

- The task will be repeated frequently  
- Consistency is required  
- Errors carry operational risk  
- Multiple operators will rely on it  
- Specialized expertise must be simulated  

Avoid creating Gems for trivial or one-off tasks.

Over-engineering introduces unnecessary complexity.

---

## 8. Pre-Creation Readiness Assessment

Before building a Gem, confirm the following:

### Problem Clarity
Can the task be described in one precise paragraph?

If not, stop and refine the scope.

---

### Operator Identification
Who will use this Gem?

- Technical staff  
- Writers  
- Analysts  
- Support teams  
- Executives  

Design must match operator skill level.

---

### Risk Evaluation
Ask:

- What happens if the Gem is wrong?  
- Could it mislead users?  
- Could it create operational damage?  

Higher risk demands stronger guardrails.

---

### Success Definition
Define what “good performance” looks like BEFORE building the Gem.

If success is undefined, quality cannot be measured.

---

## 9. Gem Architecture Framework

Every professional Gem should contain six structural layers.

---

### Layer 1 — Identity Definition

Establish:

- Role  
- Seniority level  
- Domain expertise  
- Mission  

Example:

> “You are a senior compliance analyst specializing in regulatory documentation.”

This prevents the model from drifting into unrelated domains.

---

### Layer 2 — Mission Priorities

Explicitly rank priorities such as:

1. Accuracy  
2. Safety  
3. Compliance  
4. Clarity  
5. Efficiency  

Priority order influences decision-making behavior.

---

### Layer 3 — Behavioral Rules

Examples include:

- Do not guess  
- Ask when uncertain  
- Provide structured responses  
- Avoid speculation  
- Prefer verified information  

Behavior must be enforceable through language.

Vague guidance produces inconsistent results.

---

### Layer 4 — Knowledge Boundaries

Define what the Gem is allowed to rely on.

For example:

- Provided documentation  
- User input  
- Verified references  

Also define what it must NOT do:

- Invent sources  
- Fabricate data  
- Assume context  

Boundaries prevent hallucination.

---

### Layer 5 — Interaction Contract

Standardize how the Gem communicates.

Predictable structure improves usability.

For example:

- Conclusions  
- Unknowns  
- Recommended actions  
- Verification steps  

Users should quickly learn what to expect.

---

### Layer 6 — Safety Guardrails

Guardrails protect both the organization and the operator.

Examples:

- Warn before risky actions  
- Avoid legal or medical claims  
- Encourage verification  
- Highlight uncertainty  

Safety must be designed — not assumed.

---

## 10. Designing for Determinism

A deterministic Gem behaves similarly across repeated prompts.

To achieve this:

- Use explicit instructions  
- Avoid emotional language  
- Remove ambiguity  
- Define decision paths  

If two operators receive drastically different responses to the same prompt, the design is insufficient.

---

## 11. Testing Methodology (Mandatory)

Never deploy an untested Gem.

Testing should include:

### Normal Scenarios
Typical user requests.

### Edge Cases
Incomplete instructions, vague questions, conflicting inputs.

### Stress Scenarios
High-risk or complex requests.

### Ambiguity Tests
Prompts designed to tempt the model into guessing.

Document all findings.

Refine.

Retest.

Repeat until behavior stabilizes.

---

## 12. Verification Standards

A Gem is considered reliable only when:

- Outputs are structured  
- Unknowns are acknowledged  
- Speculation is avoided  
- Instructions are clear  
- Behavior is consistent  

If reliability cannot be demonstrated, the Gem is not production-ready.

---

## 13. Documentation Requirements (Hugo)

Immediately document the finalized Gem in:


Your documentation must:

- Follow existing formatting conventions  
- Maintain heading consistency  
- Be written for operators, not designers  
- Avoid storytelling language  
- Focus on execution clarity  

Remember:

**Undocumented systems create operational risk.**

---

## 14. Common Design Failures to Avoid

### Over-Creative Instructions
Leads to unpredictable AI behavior.

### Weak Role Definitions
Creates domain drift.

### Missing Guardrails
Increases hallucination risk.

### Excessive Complexity
Reduces usability.

### Documentation Gaps
Destroy repeatability.

---

## 15. Production Readiness Checklist

A Gem is ready ONLY if:

- Behavior is predictable  
- Instructions are unambiguous  
- Guardrails are active  
- Testing is complete  
- Documentation exists  
- Operators can use it without coaching  

If any item is missing, do not deploy.

---

## 16. Governance and Change Control

Once deployed, Gems must be treated as operational assets.

Changes should require:

- Review  
- Testing  
- Documentation updates  

Uncontrolled edits create silent failure risks.

---

## 17. Ethical and Professional Responsibilities

Always design Gems that:

- Promote truthful outputs  
- Avoid misleading authority  
- Encourage verification  
- Respect organizational policies  

Reliability builds long-term trust.

---

## 18. Final Hard Rules Summary

- Never guess. Unknown is acceptable.  
- Design for repeatability.  
- Validate before trusting behavior.  
- Document immediately.  
- Prefer clarity over cleverness.  
- Build systems others can operate safely.  

---

# End of Enterprise SOP