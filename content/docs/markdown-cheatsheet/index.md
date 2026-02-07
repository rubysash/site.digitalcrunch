---
title: "Markdown Cheatsheet"
weight: 10
description: "All the basics of Markdown"
tags: ["hugo"]
showTableOfContents: true
---

This is a generic document for markdown, obsidian.  

We are using the blowfish theme, and it uses several custom shortcodes that will not work in other themes, whereas all generic markdown will.
- https://blowfish.page/samples/markdown/ 
- https://blowfish.page/docs/shortcodes/

All generic hugo markdown codes:
- https://gohugo.io/content-management/markdown-attributes/.   

All HTML also works, but preference is to use markdown:
- https://www.w3schools.com/html/default.asp

The items listed here are my personal cheatsheet of markdown I use frequently though the above links have many more options if you prefer.

## Alerts

### Default
{{< alert >}}
**Default** Default formatting
{{< /alert >}}

### Formatted
{{< alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
This is a formatted color
{{< /alert >}}

## Admonition/callout

Custom icons/autocollapse work only for the them, but note, tip, warning, danger work for all of hugo.

> [!TIP]+ Custom Title + Custom Icon
> A collapsible admonition with custom title and icon
{icon="twitter"}

```
> [!TIP]+ Custom Title + Custom Icon
> A collapsible admonition with custom title.
{icon="twitter"}
```

> [!note] Custom Title
> This is a note callout.

> [!tip]
> This is a tip.

> [!warning]
> Be careful with this.

> [!danger]
> Critical alert.

```
> [!note] Custom Title
> This is a note callout.

> [!tip]
> This is a tip.

> [!warning]
> Be careful with this.

> [!danger]
> Critical alert.
```

## Blockquote
```
> This is a quote.
>> Nested quote.
```

## Code

**Inline code:**
```
Use `code` inside a sentence
```

**Code block (fenced):**
<pre>
```bash
echo "Hello, World!"
```
</pre>

**Language-specific syntax highlighting:**
<pre>
```python
def hello():
    print("Hello World")
```
</pre>


## Checkboxes / Task List
```
- [ ] Task not done
- [x] Task done
```

## Diagrams

See the official examples, or ask LLM to create it in your diagram model choice.  https://gohugo.io/content-management/diagrams/.  I prefer mermaid, but I format it explicitly

### Goat

Goat is built into hugo.

```goat
      .               .                .               .--- 1          .-- 1     / 1
     / \              |                |           .---+            .-+         +
    /   \         .---+---.         .--+--.        |   '--- 2      |   '-- 2   / \ 2
   +     +        |       |        |       |    ---+            ---+          +
  / \   / \     .-+-.   .-+-.     .+.     .+.      |   .--- 3      |   .-- 3   \ / 3
 /   \ /   \    |   |   |   |    |   |   |   |     '---+            '-+         +
 1   2 3   4    1   2   3   4    1   2   3   4         '--- 4          '-- 4     \ 4

```
### Mermaid

mermaid is not default to hugo, but works in blowfish using the mermaid shortcode:

{{< mermaid >}}
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#ffecb3',
      'primaryTextColor': '#000000',
      'primaryBorderColor': '#ffcc80',
      'lineColor': '#333333',
      'secondaryColor': '#c8e6c9',
      'tertiaryColor': '#bbdefb'
    }
  }
}%%
graph LR;
    A[Lemons] --> B[Lemonade];
    B --> C[Profit];

    %% Specific Pastel Overrides
    style A fill:#fff9c4,stroke:#fbc02d,color:#000
    style B fill:#f8bbd0,stroke:#f06292,color:#000
    style C fill:#c8e6c9,stroke:#66bb6a,color:#000
{{< /mermaid >}}

## Links
```
[Link Text](https://example.com)
<https://example.com> (autolink)
```

## Emojis

I hate them, do not use them.   Here is a reference:
https://www.webfx.com/tools/emoji-cheat-sheet/


## Emphasis
```
*italic* or _italic_
**bold** or __bold__
***bold italic***
~~strikethrough~~
```


## Lists

**Unordered List:**
```
- Item 1
  - Subitem 1.1
    - Subsubitem
* Item 2
+ Item 3
```

**Ordered List:**
```
1. First
2. Second
   1. Sub-item
   2. Sub-item
3. Third
```



## Footnotes
```
Here is a statement.[^1]

[^1]: This is the footnote.
```

## Headers
```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

## Highlight / Mark
(Only works in Obsidian)
```
==highlight this text==
```

## Horizontal Rule
```
---
or
***
or
___
```

## Images
```
![Alt text](https://example.com/image.png)
```


## Links (Obsidian Only)
```
[[Note Title]]
[[Note Title#Section]]
[[Note Title|Custom Link Text]]
```


## Math (LaTeX)
**Inline Math:**
```
$\frac{a}{b}$
```

**Block Math:**
```
$$
E = mc^2
$$
```


## Short Codes
Review the source code.  Shortcodes are created in layouts/shortcodes folder, but  you call them with their file name.   For example 'process-steps.html' is one of my short codes.  It produces a diagram like this:

{{< process-steps >}}
## Step 1
- Sub Step A
- Sub Step B

## Step 2
- Sub Step A
- Sub Step B
{{< /process-steps >}}

More of the default short codes for blowfish can be found here:  https://blowfish.page/docs/shortcodes/

## Tables
```
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Data     | More     |
```

## Video Embeds

```
{{</* video
    src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
    poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
    caption="**Public domain demo** — CC0 video and poster."
    loop=true
    muted=true
    fit=fill
*/>}}
```

{{< video
    src="https://upload.wikimedia.org/wikipedia/commons/5/5a/CC0_-_Public_Domain_Dedication_video_bumper.webm"
    poster="https://upload.wikimedia.org/wikipedia/commons/e/e0/CC0.jpg"
    caption="**Public domain demo** — CC0 video and poster."
    loop=true
    muted=true
>}}




## Obsidian Only

These are for obsidian notes only, do not use.

### Dataview (if plugin enabled)
```
```dataview
table status, due
from "Tasks"
where status != "done"
sort due asc
```
```

## Embed Files or Notes

```
![[Note Name]]
![[image.png]]
![[Note Name#Section]]
```


## Tags (Obsidian)
```
#tagname
```


---
