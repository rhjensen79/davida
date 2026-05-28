# Vinnie Davida Søndergaard — test site

A **sandbox / test marketing site** used to experiment with designs, layouts,
and components for Vinnie Davida Søndergaard. It is a static site (Danish,
`da_DK`) hosted on **GitHub Pages**.

This is **not a production website** — it is an isolated playground for trying
out visual ideas without affecting any live site.

**Live URL:** https://rhjensen79.github.io/davida/

## The three focuses

The site presents three distinct areas, each with its own tone:

- **Klinik** — Fysiurgisk massage; calm/clinical, leads to booking & calendar.
- **Workout** — Outdoor training (e.g. TRX); energetic, with signup.
- **People & Performance** — B2B professional services; polished and premium.

## Mock UIs — no backend

> **Important:** All interactive UIs are **non-functional visual mocks.** There
> is no backend or server.
>
> - The Klinik **booking calendar / time-slot picker** does not reserve
>   anything — it swaps to a static confirmation.
> - The Workout **signup form** does not submit anywhere.
> - The People & Performance **contact / lead form** does not submit anywhere.
> - The **cookie banner** does not load or block any real cookies; it only
>   remembers the dismiss choice locally.
>
> These exist purely to demonstrate look, layout, and flow.

## Local preview

This is a static site — serve it from the repo root:

```bash
python3 -m http.server 8765
```

Then open:

- Landing: http://localhost:8765/
- Klinik: http://localhost:8765/klinik/
- Workout: http://localhost:8765/workout/
- People & Performance: http://localhost:8765/people-performance/

If port 8765 is busy, free it (`pkill -f "http.server 8765"`) or pick another
port.

## Project structure

```
index.html                  Landing page
klinik/index.html           Klinik sub-site (booking mock)
workout/index.html          Workout sub-site (signup mock)
people-performance/index.html  People & Performance sub-site (contact mock)
privatlivspolitik.html      Privacy policy
cookie-politik.html         Cookie policy
404.html                    Custom not-found page (served by GitHub Pages)
assets/css/tokens.css       Shared design tokens (colors, type, spacing)
assets/js/nav.js            Shared top-nav / mobile menu + footer year
assets/js/booking.js        Klinik booking calendar mock
assets/js/signup.js         Workout signup form mock
assets/js/contact.js        People & Performance contact form mock
assets/js/cookie.js         Cookie consent banner
assets/images/source/       Source media (logos, photos, references)
design.md                   Design source of truth
```

## Design reference

[`design.md`](design.md) is the **design source of truth** — brand, color
palette, typography, content/copy, and the catalogue of reusable media assets.
Read and follow it when creating or testing any design here.

## Credits & copyright

Content and media are © Vinnie Davida Søndergaard and the respective
photographers (e.g. Martin Kaufmann) and partners whose logos appear here. The
original design is credited to Standoutmedia. All such material is used here for
**reference and testing only**, with no commercial intent.
