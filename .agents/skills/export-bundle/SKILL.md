---
name: export-bundle
description: Combine all matching source files from a chosen folder inside src/ into a single copyable code block separated by file path comments.
---

# Export Source Bundle

When the user invokes this skill, follow these steps strictly:

## 1. Gather Missing Inputs First
Check if the user has already specified both:
1. **Target folder** inside `src/` (e.g., `src/`, `src/features/landingpage`, `src/features/components/card`).
2. **File extensions** to include (e.g., `.ts, .tsx`, `.css`, or `all`).

If **either** is missing, stop and ask the user concisely for both before reading any files. Do not guess or dump the entire `src/` folder without confirmation.

## 2. Collect Files
- Scope strictly to the requested folder inside `src/`. Never read files outside `src/`.
- Recursively find all files matching the requested extensions (sort alphabetically by path for predictable output).
- Ignore binary assets (images, fonts) even if `all` is requested.

## 3. Output Format
- Return **only one single fenced code block** (` ``` `) containing all matched files so the user can copy everything with one click.
- Do **not** summarize, truncate, omit lines, or alter any code.
- Separate each file with a clear comment header showing its relative path:

```text
// ============================================================================
// File: src/path/to/File.tsx
// ============================================================================

<exact file contents>
```
