---
title: "Claude Skills"
description: "Creating and using Claude Skills"
showTableOfContents: true
weight: 20
series: ["Claude Skills"]
series_order: 10
tags: ["claude"]
type: 'claude'
---
{{< lead >}}
Customize AI to behave predictably and produce superior output through curated context, expert methods, and defined workflows.
{{< /lead >}}

## What Are Skills?

Skills are customized AI configurations tuned for specific tasks. Rather than relying on generic responses, a skill forces the AI to behave a certain way by providing:

- Custom instructions
- Specialized knowledge base
- Connected agents/MCPs
- Defined output formats

The term "skills" is platform-agnostic. Whether you're using Claude Projects, OpenAI's CustomGPTs, NotebookLM, or Google's Gems—the concept is identical. Knowing which button to push is trivial; gathering quality data is where the real work happens.

Skills work best when specific. A skill designed to write sales copy won't be good at technical SEO audits. Specialization is the point.

## The Creation Process

{{< process-steps >}}
## Define Objectives
- Define Target Audience
- List Use Cases

## Define Skills
- Specific Step 1
- Specific Step 2
- Specific Step 3
- Specific Step 4
- etc

## Create Each Skill
- Research
- Copy Experts
- Compile Relevant Data
- Provide Logic
- Definite I/O
{{< /process-steps >}}

## Example Skill

Here is the process for **copywriting skill**.   Authors, frameworks, exact data, and instructions change, but the process is the same for any skill

### Data/Research

This section is pretty much mandatory.    It can be as little or as much as you like, but the more the better.   Use AI and common sense to build this data set.

- Identify the top 5 copywriters in the world
- Biography/research on top copywriters
- Links and compilations of their methods and frameworks
- Cliff notes from seminal books of best in the world copywriters (Ogilvy, Halbert, Schwartz)
- Extracted nuggets from seminars and transcripts
- Build Massive Swipe files of proven headlines, sales letters, and ad copy
- Add case studies of white space, font, colors, etc
- Templates/Examples for long-form and short-form copy
- Do/don't checklists for best practices
- Do/don't checklists for warnings and known problems
- Index all included files with brief explanation

### MCP/Connections

MCP is a way to connect other agents and their results to your session.   These are optional, and often not needed at all, but I wanted to demonstrate how an external connection might work with a skill.

- Run through AI Fingerprint remover
- Add in Case Study/Realtime Data
- Gather data from User input Form

### Instructions

Having all knowledge is not as beneficial as how to apply a set of rules to that knowledge to get the desired result. The same data above could be used on 3 separate skills or could be combined with 3 instruction sets in one skill.    I prefer to have instructions for each specific output.   The interface may allow you to add multiple skills to the same data set though.

- How to write long form sales copy
- How to write a service description
- How to write a linked in Profile

When complete, this skill produces better copy than a generic prompt because it's drawing from **curated expertise** rather than general training data, and it has a **specific instruction set** for **specific task**.

### Results

As you can see, there are quite a few steps to customizing an AI to be a specialist.

But, when you ask this customized version a copywriting question it will very likely produce superior results to anything you would find elsewhere. 

In addition, you can simply reference the skill when doing other work that needs it!   Claude skills are automatically detected based on what task they are asked.

## Token Usage

One advantage of skills is how it maximizes the uag eof tokens.   When instructions are loaded they consume part of the maximum token count that an LLM can process.    As you converse with AI it is predicting it's responses based on all of the tokens in that session.    When it loads a skill, it loads those tokens.   When a skill is not loaded, it frees up those tokens from the context window.

Bottom line - skills make conversations more efficient, allowing you to use lower powered (cost) LLMs to get superior results.   As LLMs become more powerful, perhaps people will not consider optimizations like this.   They will be paying more to use AI because it will require more energy consumption to do it. 

This is a technical advantage that most people will not realize, but it's how the tokens/context work.

## What's Next

Browse the [Skills Catalog]({{< relref "/docs/ai/skills-catalog" >}}) for the full list of skills we're building, or start the Build Process to create your own.