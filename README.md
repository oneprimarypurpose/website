# One Primary Purpose — Website

The website for the One Primary Purpose Narcotics Anonymous hybrid meeting.

A static site (plain HTML, no build step). Hosted on GitHub Pages.

## Pages

- `index.html` — welcome / home
- `guidelines.html` — group guidelines
- `guidelines/<position>/` — per-position guidelines (secretary, zoom-host, zoom-cohost, gsr, treasurer, business-chair)
- `resources.html` — resource hub
- `resources/secretary/` — meeting script + secretary rotation (protected)
- `resources/zoom-host/` + `resources/zoom-cohost/` — Zoom setup with screenshots (protected)
- `resources/business-meetings/` — business meeting minutes, filterable by month (protected)
- `favicon.svg` — NA mark, also inlined in each page's top bar

## Local preview

Serve the folder with any static server, e.g.:

```
python3 -m http.server 8080
```

then open http://127.0.0.1:8080
