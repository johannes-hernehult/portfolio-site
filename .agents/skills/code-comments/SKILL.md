---
name: code-comments
description: Audit, rewrite, and add consistent TypeScript/React comments inside src/ without altering runtime code.
---

# Code Commenting Guidelines

## Scope & Execution
- **Only** inspect and edit source files inside `src/` (`.ts`, `.tsx`, `.css`). Ignore root config files, `public/`, and `.zed/`.
- Process files **one or two at a time** when editing so responses stay concise and never truncate mid-file.

## Formatting Rules

1. **TSDoc (`/** ... */`) for public interfaces:**
   - Add concise TSDoc blocks above exported functions, custom React hooks, and non-obvious TypeScript interfaces/types.
   - Describe *purpose and behavior* in 1–2 sentences.
   - Omit `@param` and `@returns` tags unless a parameter has non-obvious constraints (e.g., units, valid ranges, or side effects).

2. **Inline (`//`) comments for intent only:**
   - Use `//` only to explain *why* something is written a certain way (workarounds, browser quirks, React Router/CSS edge cases).
   - Never narrate *what* the code visibly does (e.g., avoid `// increment counter` or `// render grid`).

3. **Cleanup & consistency:**
   - Rewrite vague or inconsistent existing comments to match the rules above.
   - Delete redundant or outdated comments.

4. **Strict safety constraint:**
   - **Never** modify runtime logic, JSX structure, imports, type definitions, or code formatting outside of comments.
