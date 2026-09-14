# CLAUDE.md

Guidance for working in this repo.

## What this is

The static website for the One Primary Purpose NA hybrid meeting. Plain HTML +
one shared stylesheet. **No build step, no framework, no package manager.** You
edit `.html`/`.css`/`.js` directly and reload the browser.

Preview locally with `python3 -m http.server 8080`. Deployed via GitHub Pages
from `main`.

## Conventions

- **Shared styles live in `style.css`.** Every page links it. Don't reintroduce
  per-page `<style>` blocks — add or adjust a class in `style.css` instead. The
  color/spacing system is CSS custom properties in `:root` (`--paper`, `--ink`,
  `--gold`, `--line`, …); use the tokens, don't hardcode hex.
- **Fonts:** Fraunces (headings) + Mulish (body), loaded from Google Fonts in
  each page `<head>`.
- **Placeholders the group must fill in** use `<span class="ph">[ like this ]</span>`
  — gold, bracketed. Use this for any value not yet decided (clean-time minimums,
  term lengths, Drive links, contacts). Don't invent real values.
- **Print matters.** These guides get printed as handouts. `style.css` has an
  `@media print` block; keep new content print-friendly and test with the Print
  button (`.printbtn`).

## Page structure

- `index.html` is the landing page and keeps its own richer inline styling
  (hero, scroll reveals, inline base64 Venmo QR). Leave its styling alone unless
  asked; it does **not** use `style.css`.
- `guidelines.html`, `service-positions.html`, `resources.html`, and the six
  position pages all use `style.css`.
- `service-positions.html` is the **synopsis hub**: a `.cards` grid of `.pcard`
  links to each position page, plus the general-requirements box at `#general`.
- Each **position page** is one `<section class="role" id="…">` with subheads in
  this order: **Requirements → Responsibilities → Term → Resources**, a
  `.printbtn`, and a `.pn` prev/next pager. Requirements end with a link to
  `service-positions.html#general`.
- `resources.html` collects every position's resources under `#positions` (a
  `.reslist` per position) and links the meeting script.

## Interactive Zoom checklists

`zoom-host.html` and `zoom-cohost.html` are interactive:

- The `<section class="role">` carries `data-interactive`.
- Step lists that should become checkable carry `class="checklist"` on the
  `<ol>`/`<ol>`; only **direct** `<li>` children become checkboxes (nested
  `<ul>` detail bullets stay plain).
- `checklist.js` (included at the bottom of those pages) injects the checkboxes
  and a progress bar, and persists ticks in `localStorage` per page id.

To make another page interactive: add `data-interactive` to its role section,
`class="checklist"` to the relevant lists, and `<script src="checklist.js"></script>`
before `</body>`.

## Adding a new service position

1. Copy an existing position page (e.g. `treasurer.html`) and edit the head/tag/
   title and the four sections.
2. Add a `.pcard` for it in `service-positions.html`.
3. Add a `.reslist` block for it under `#positions` in `resources.html`.
4. Add a row in the roster table in `guidelines.html` and a line in the roster
   on `index.html`.
5. Fix the `.pn` prev/next links on the neighboring position pages.

## Source notes

`docs/secretary-script.md` is the cleaned-up meeting script (the canonical copy
lives in Google Drive; `resources.html` links it). The `downloads/` folder at
the repo parent held an older single-page-per-role export that this site
supersedes — don't copy from it without checking it isn't stale.
