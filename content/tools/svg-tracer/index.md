---
title: "SVG Tracer"
date: 2026-01-25
layout: "full"
fullWidth: true
showAuthor: false
authors:
 - "jamesfraze"
tags: ["tools"]
---

I needed to create paths, with coordinates on a given SVG so I could have another tool create animations from them. This is the result of what I needed to create.  The animated background image you see is an SVG created with the help of this tool.  I used this tool to trace the paths of the pulses.

## Load Your File
- You can manually paste an SVG into "Render" if you wish
or
- Load BG SVG File sample: <a href="/img/dc_logo.svg" target="new_window" rel="noopener noreferrer">Download DC Logo</a>

## Get your paths:

- Adjust the big black window below (scroll down)
- Hold Space Bar and Drag if you need to move image
- Click the Path you want to Trace Coorindates
- Click "Copy" to save that Path
- Click "Clear" to make new Path
- Repeat

## What's Next?

Use the cooridinates, along with your LLM of choice, to animate pulses by giving it your base image and the path like this:

```
Use is SVG file (attached) and these cooridinates (paste your cooridinates), to create an animated SVG file with a blue pulse along this line.
```   

The LLM will know the code of your SVG, and the code of your path and can easily animate pulses.  Keep modifying it with the design you are creating using this method. 

{{< tracer >}}