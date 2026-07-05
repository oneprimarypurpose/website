# One Primary Purpose — Website

The website for the One Primary Purpose Narcotics Anonymous hybrid meeting
(Sundays 10:00 AM Pacific, at the Alano Club in San Jose and on Zoom).

A static site (plain HTML, no build step), hosted on GitHub Pages.

**Live site:** https://oneprimarypurpose.github.io/website/

## Pages

### Public

- `index.html` — welcome / home, meeting times, how to join
- `guidelines.html` — group guidelines
- `guidelines/<position>/` — guidelines for each service position: `secretary`,
  `zoom-host`, `zoom-cohost`, `gsr`, `alt-gsr`, `treasurer`, `business-chair`
- `favicon.svg` — NA mark, also inlined in each page's top bar

### For trusted servants (group passphrase required)

Everything under Resources is encrypted in the page itself
([StatiCrypt](https://github.com/robinmoisson/staticrypt)) and unlocks in the
browser with the group passphrase — ask a trusted servant. Unlocking one page
unlocks them all for 30 days.

- `resources.html` — resource hub
- `resources/secretary/` — the full meeting script + secretary rotation
- `resources/zoom-host/` — Zoom Host setup with screenshots, chat messages,
  attendance verification, and the meeting timer
- `resources/zoom-cohost/` — Zoom Co-Host setup
- `resources/business-meetings/` — business meeting minutes, filterable by month

The editable plaintext masters for the protected pages live outside this repo
(in `../website-src/` on the maintainer's machine) — see the README there for
how to edit and re-encrypt. Never commit plaintext masters to this repo.

## Local preview

Serve the folder with any static server, e.g.:

```
python3 -m http.server 8080
```

then open http://127.0.0.1:8080
