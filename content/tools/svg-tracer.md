---
title: "SVG Tracer"
date: 2026-01-25
layout: "full"
fullWidth: true
showTableOfContents: false
showTaxonomies: false
---

I needed to create paths, with coordinates on a given SVG so I could have another tool create animations from them. This is the result of what I needed to create.  The animated background image you see is an SVG.  I used this tool to trace the paths of the pulses.

## Load Your File
- You can manually paste an SVG into "Render" if you wish
or
- Load BG SVG File sample: <a href="/img/dc_logo.svg" target="new_window" rel="noopener noreferrer">Download DC Logo</a>

## Get your paths:

- Adjust the big black window below (scroll)
- Click the Path you want to Trace
- Hold Space Bar and Drag if you need to
- Click "Copy" to save that Path
- Click "Clear" to make new Path
- Repeat

## What's Next?

Use the cooridinates, along with your LLM of choice, to animate pulses.   The LLM will know the code of your SVG, and the code of your path and can easily animate pulses.     This is a single use tool I created just for the background.

We are sharing it because it might be useful for CNC routing, Laser engraving and 3D printing because they all work with SVGs too.

{{< tracer >}}