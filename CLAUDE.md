# CLAUDE.md

## About this repo

This is a **test website** hosted on **GitHub Pages**.

It is a safe place to test different designs, layouts, and ideas — a sandbox for experimentation without affecting any production site.

## Purpose

- Try out different designs, components, and visual styles
- Experiment freely in an isolated environment
- Preview changes live via GitHub Pages

## Design reference — ALWAYS USE

**[`design.md`](design.md) is the design source of truth for this repo.**
Always read and follow `design.md` when creating or testing any design here. It
contains the brand, color palette, typography, content/copy, and the catalogue
of reusable media assets in [`assets/images/source/`](assets/images/source/).

The site has **three distinct focuses** (each should look/feel different in tone;
see `design.md` §2):

- **Klinik** — Fysiurgisk massage; calm/clinical, leads to booking & calendar.
- **Workout** — Outdoor training (currently TRX, may expand); energetic, with signup.
- **People & Performance** — B2B professional services; polished and premium.

## Local preview — ALWAYS run after each new feature

After implementing each new feature/change, **start a local test server so I can
verify it in the browser**. This is a static site, so serve from the repo root:

```bash
python3 -m http.server 8765
```

Then share the URLs to check:
- Landing: http://localhost:8765/
- Klinik: http://localhost:8765/klinik/
- Workout: http://localhost:8765/workout/
- People & Performance: http://localhost:8765/people-performance/

Notes:
- If port 8765 is busy, free it (`pkill -f "http.server 8765"`) or pick another port.
- Run the server in the background so work can continue, and stop it when no longer needed.
