# One Primary Purpose — Website

The website for the **One Primary Purpose** Narcotics Anonymous hybrid meeting
(Sundays, 10:00 AM Pacific — in person + Zoom).

A static site: plain HTML and one shared CSS file, **no build step**. Hosted on
GitHub Pages.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Welcome / home (meeting time, Zoom link, Venmo QR) |
| `guidelines.html` | Group guidelines (format, finances, business meeting, roster) |
| `service-positions.html` | **Synopsis** — short blurb per position, links to each guide; holds the general requirements (`#general`) |
| `secretaries.html` | Secretaries guide |
| `zoom-host.html` | Zoom Host guide — **interactive step-by-step checklist** |
| `zoom-cohost.html` | Zoom Co-Host guide — **interactive checklist** |
| `gsr.html` | GSR & Alternate GSR guide |
| `treasurer.html` | Treasurer guide |
| `business-chair.html` | Business Meeting Chair guide |
| `resources.html` | Meeting script link + every position's resources gathered in one place (`#positions`) |
| `guides.html` | Redirect → `service-positions.html` (kept so old links don't break) |

Each **position page** follows the same shape: **Requirements → Responsibilities
→ Term → Resources**, plus a Print button and prev/next navigation.

## Shared assets

- `style.css` — all shared styles and design tokens. Edit the look here once;
  every page picks it up.
- `checklist.js` — turns the Zoom guides' step lists into tappable checklists
  with a saved-progress bar (uses `localStorage`).

## Docs (for Google Drive)

- `docs/secretary-script.md` — the full secretary meeting format, cleaned up and
  ready to paste into a Google Doc. (The site also links to the live Drive copy
  from `resources.html`.)

## Placeholders

Anything still to be decided by the group is marked in **gold** with
`<span class="ph">[ … ]</span>` (e.g. clean-time minimums, term lengths, Drive
links). Search the project for `class="ph"` to find everything that needs
filling in before adoption.

## Local preview

Serve the folder with any static server, e.g.:

```
python3 -m http.server 8080
```

then open http://127.0.0.1:8080
