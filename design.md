# design.md — Design Reference

This file is the **design source of truth** for this test site. It captures the
brand, content, and media reference material extracted from the original site
[vinnie-davida-sondergaard.dk](https://vinnie-davida-sondergaard.dk/), plus the
planned structure for the new site, so it can be reused when building and
testing designs here.

> Source platform: WordPress (theme `number-three` + child theme). Language: Danish (`da_DK`).
> Original design credit: Standoutmedia.

---

## 1. Brand

- **Name:** Vinnie Davida Søndergaard
- **Tagline / hero headline:** *"Jeg er drevet af at udvikle og optimere mennesker."*
- **Sub-tagline:** *"Jeg har en ærlig, nysgerrig og helhedsorienteret tilgang, der vægter balancen mellem performance, trivsel og sundhed – både fysisk og mentalt."*
- **Core philosophy:** *"Den maskuline og feminine kraft er noget vi alle besidder. Når du finder modet til at balancere de to sider, vil du og din organisation performe og trives på en ny, sund og stærk måde."*
- **Concept / sub-brand:** **MiBo Gold** (the method).

---

## 2. Site focuses — three sub-sites

The site is built around **three distinct focuses**. Each should look and feel
different in tone, while all three stay recognisably part of the same brand
(shared logo, the natural palette in §3, and the Oswald/Work Sans type system in
§4). Think of them as three "moods" of one brand.

### 2.1 Klinik — Fysiurgisk massage
- **Purpose:** Treatment clinic. The site's job is to **lead to booking** — calendar, availability, and practical information around treatments.
- **Tone:** Calm, clean, clinical-but-warm, trustworthy, healing. Lots of whitespace, soft edges, reassuring.
- **Primary action:** `Book tid` → booking/calendar. Surface the clinic address and practical info clearly.
- **Suggested palette emphasis:** light & airy — pale green wash `#f0f3f0`, light sage `#d6ddd5`, white, with `#2c3f46` for calm, readable text. Minimal accent.
- **Suggested type feel:** Work Sans-led, soft and highly readable; Oswald used sparingly and gently (not shouty).
- **Imagery:** body-treatment / clinic / hands-on photography (e.g. `vinnie-davida-soendergaard-photo-martin-kaufmann-*`), calm and close-up.
- **Maps to content:** Kropsbehandling · clinic address (Vejlegade 12, kld. th., 2100 København Ø) · contact.

### 2.2 Workout — Outdoor training
- **Purpose:** Outdoor workouts with **signup**. Currently primarily **TRX**, but may expand to more formats in the future — keep the structure open/extensible.
- **Tone:** Energetic, dynamic, motivating, outdoorsy, raw. Movement and momentum.
- **Primary action:** `Tilmeld dig nu` → class signup. Show the schedule and remaining spots (**12 pladser pr. hold**).
- **Suggested palette emphasis:** bold & high-contrast — strong sage/olive `#b8c0a6`, near-black `#080d12` / dark slate `#2c3f46`, punchy.
- **Suggested type feel:** Oswald, bold and uppercase, condensed and punchy for headlines.
- **Imagery:** outdoor/by-the-water action shots, `split-trx.jpg`, training in motion.
- **Maps to content:** Udendørs TRX holdtræning (*"…I smukke omgivelser lige ved vandet guider jeg dig igennem en time med både styrke, puls, balance og teknik… Der er 12 pladser på hvert hold."*). Built to add more workout types later.

### 2.3 People & Performance — Business
- **Purpose:** B2B / professional services aimed at **businesses and organizations**.
- **Tone:** Professional, premium, confident, refined, corporate. Structured and editorial.
- **Primary action:** `Lad os komme i gang` / `Jeg vil gerne høre mere` → lead/contact.
- **Suggested palette emphasis:** sophisticated & restrained — dark slate `#2c3f46` dominant, sand `#e0ddd4` accents, muted greens, generous structure.
- **Suggested type feel:** Oswald + Work Sans in an editorial pairing — larger headings, generous spacing, confident.
- **Imagery:** professional portrait photography (Martin Kaufmann), partner logos, polished.
- **Maps to content:** Huscoach i virksomheden · 1:1 mentoring & forløb · Play Your Talent · Workshops & foredrag · Ergonomi & APV · MiBo Gold · partners/clients · testimonials · podcast *Mod til Indsigt & Udvikling*.

---

## 3. Color palette

Earthy, natural palette — sage/olive greens, warm sand, and a dark slate. Shared
across all three focuses; each focus leans on a different subset (see §2).

| Role | Hex | Notes |
|------|-----|-------|
| Primary accent (sage/olive green) | `#b8c0a6` | Most-used brand color |
| Light sage | `#d6ddd5` | Section backgrounds |
| Muted green tints | `#c0c9b6`, `#afb89b`, `#c3c0ab` | Hover/variations |
| Pale green wash | `#f0f3f0` | Soft backgrounds |
| Dark slate / teal | `#2c3f46` | Headings, dark sections, footer |
| Near-black | `#080d12` | Strong text |
| Sand / beige | `#e0ddd4` | Buttons, accent blocks |
| Afdæmpet messingguld (gold) | `#b8924f` | From the logo; eyebrow/subtitle accents (e.g. landing tile tags) |
| Body text grey | `#434343`, `#515151` | Paragraph text |
| Off-white / neutrals | `#ffffff`, `#f5f5f5`, `#f2f2f2`, `#fafafa` | Page background |

---

## 4. Typography

Served via **Adobe Fonts (Typekit)**.

- **Headings:** `Oswald`, sans-serif (condensed, uppercase-friendly).
- **Body:** `Work Sans`, sans-serif.

Suggested web-safe / Google Fonts fallbacks: Oswald (available on Google Fonts),
Work Sans (available on Google Fonts).

---

## 5. Navigation / site structure (original)

- **Ydelser** (Services)
  - Huscoach i virksomheden
  - Ergonomi og APV
  - 1:1 mentoring og forløb
  - Play Your Talent
  - Workshops og foredrag
  - Kropsbehandling
  - Udendørs TRX holdtræning
  - BKST og adfærd dyr
- **Udgivelser** (Publications)
  - Podcast: *Mod til Indsigt & Udvikling*
  - Blog
- **MiBo Gold**
  - Min metode
  - MiBo Gold Workshops
- **Partnerskaber** (Partnerships)
- **Om** (About)
  - Om mig
  - Testimonials
  - Boksekarriere
  - Galleri
  - Privatlivspolitik
  - Cookie-politik
- **Priser** (Pricing)
- **Kontakt** (Contact)

---

## 6. Services (copy)

- **Huscoach i virksomheden** — *"Jeg kan hjælpe dig og din organisation mod performance og vækst, i et sundt miljø hvor vindermindset, trivsel, talentudvikling og selvledelse er i fokus."*
- **Ergonomi & APV** — same focus on healthy, high-performing work environments.
- **1:1 mentoring & forløb** — *"Er for dig der løbende ønsker at investere i og vedligeholde dig selv fysisk og mentalt, men som selv har styr på den overordnede proces og ramme."*
- **Play Your Talent** — evidence-based talent/team tool: *"PLAY YOUR TALENT is a strong and important tool for Vinnie with her 1:1- and business processes… an understanding that can be used to optimize every parameter, and to get stronger together and individually."*
- **8-ugers forløb** — *"Jeg skræddersyr altid mine forløb, da udgangspunkt, ressourcer og rammer altid er forskellig. 8-ugers forløb har jeg god erfaring med, men det kan tilrettelægges kortere eller længere."*
- **Workshops & foredrag** — performance, well-being and self-leadership focus.
- **Kropsbehandling** — *"Jeg har altid haft en stor interesse for, hvordan kroppen fungerer, og hvordan vi i et samarbejde kan få den til at fungere endnu bedre på alle niveauer."*
- **Udendørs TRX holdtræning** — *"Har du lyst til at investere i din sundhed, din styrke og dit immunforsvar? Så kom med under åben himmel, når vi træner TRX og funktionel træning. I smukke omgivelser lige ved vandet guider jeg dig igennem en time med både styrke, puls, balance og teknik… Der er 12 pladser på hvert hold."*
- **BKST og adfærd dyr** — animal behaviour service.

### Key messaging blocks
- **Det hele starter med mennesket** — *"Udvikling, vækst og sundhed i en organisation kræver trivsel og motivation hele vejen rundt. Hvis ikke du som leder kender dig selv og kan mærke dig selv, kan du heller ikke mærke dine medarbejdere – og dermed heller ikke lede og motivere dem i en sund og stærk retning for dem og for virksomheden."*
- **Tilbage til styrke og balance** — *"Jeg hjælper også dig og din organisation med genopbygning og restitution efter stress eller sygdom. Det er i bund og grund også en toppræstation at lære sig selv at kende på en ny måde, og måske bygge sig selv op fra bunden."*

### Blog themes
Fysisk og mental balance · Helhed og autenticitet · Performanceoptimering · Styrk din feminine kraft

### Podcast
**Mod til Indsigt & Udvikling** — *"…en podcast der stiller skarpt på, at hele autentiske mennesker skaber hele virksomheder, og at sundhed, trivsel og styrke i livet først og fremmest bygges og udleves indefra."*

---

## 7. Testimonials

- **Peter Schmeichel** (tidligere professionel fodboldmålmand) — *"Jeg har trænet med Vinnie i næsten 4 år. Det er den bedste og mest udfordrende træning jeg har lavet, siden jeg stoppede med fodbold… Siden vi startede, er jeg blevet stærkere og meget mere stabil…"*
- **Ida Krause** (junior elite tennisspiller) — *"…Vinnie er super sød og inspirerende og så har hun forståelse for, hvad det vil sige at dyrke en individuel sport… Hvis jeg kunne ha' min egen fysiske træner hver dag, skulle det helt klart være Vinnie."*
- **Nils Trier** (juniorcheftræner, Birkerød tennisklub) — *"…Det har været en kæmpe succes. Vinnie bruger mange forskellige træningsmetoder som er utrolig effektive og kan bruges af alle i alle aldre… jeg kan varmt anbefale Vinnie Søndergaard."*
- **Julie Kissow Kristensen** (elite landsholdsgymnast) — *"…Efter et forløb på snart to måneder, har hun formået at løsne op og fremskynde restitutionsprocessen, så jeg har haft mulighed for at være konkurrenceklar… Flotte anbefalinger herfra!"*

---

## 8. Partners / clients

Saxo Bank · NOR · Champs Camp · Weesgaard Dental Kirurgi · AirCat · BloxHub · Generous Development · AndNumbers · NPV

---

## 9. Calls to action

`Lad os komme i gang` · `Læs mere` · `Tilmeld dig nu` · `Jeg vil gerne høre mere` · `Skriv til os` · `Ring til os` · `Book tid`

---

## 10. Contact

- **Phone:** +45 25 61 60 00
- **Email:** vinnie@davida-sondergaard.dk
- **CVR:** 30259939
- **Clinic address:** Vejlegade 12, kld. th., 2100 København Ø
- **LinkedIn:** Vinnie Davida Søndergaard
- **Facebook:** lifepoweredthroughinside
- **Instagram:** vinnie_davida_sondergaard

---

## 11. Media assets

All media downloaded from the original site lives in
[`assets/images/source/`](assets/images/source/). Reuse freely when building test designs.

> **Image pipeline:** raw photo masters are kept locally in `assets/originals/`
> (git-ignored, not deployed). Web-ready derivatives are exported to
> `assets/images/` as optimized **WebP** (resized, stripped, sRGB) and committed.
> Regenerate with ImageMagick, e.g.
> `magick SRC -auto-orient -strip -colorspace sRGB -resize '1500x1500>' -quality 82 OUT.webp`.

### Optimized photography in use (`assets/images/`)
- **Workout** — `workout-udendoers-1/2/3.webp`: outdoor TRX holdtræning on the
  boardwalk by the water (the "Sådan ser det ud" band).
- **Klinik** — `klinik-balance.webp`: calm namaste/balance portrait (approach block).
- **Om · Boksekarriere** — `om-boks-feature.webp`: boxing stance under dramatic
  sky (section feature).
- **Om · Galleri** — `om-galleri-boks-titel.webp` (Europamester m. bælte),
  `om-galleri-boksesaek.webp` (heavy-bag), `om-galleri-loeb.webp` (løb),
  `om-galleri-ro.webp` (ro ved vandet), `om-galleri-portraet.webp` (portræt).

### Logos / brand marks
- `logo2.png`, `logolight.png` — site logos (light variant)
- `logo-signature-dk.png` — signature logo
- `favicon.png` — favicon
- `happy.png` — theme decorative graphic

### Portrait / lifestyle photography (Vinnie Davida Søndergaard, photo: Martin Kaufmann)
- `vinnie-davida-soendergaard-photo-martin-kaufmann-dsc-3793.jpg`
- `vinnie-davida-soendergaard-photo-martin-kaufmann-dsc-3914-1.jpg`
- `vinnie-davida-soendergaard-photo-martin-kaufmann-dsc-4379-kopi-330x380.jpg`
- `vinnie-davida-soendergaard-photo-martin-kaufmann-dsc-4499.jpg`
- `vinnie-davida-soendergaard-photo-martin-kaufmann-dsc-4688-330x380.jpg`
- `fb-img-1559329893377-330x380.jpg`, `fb-img-1559329900610.jpg`
- `26221195-10155130775217765-308828091607471913-o-e1655989816773.jpg`
- `split-trx.jpg` — TRX training image
- `lipti-cover.jpg` — cover image
- `vinnie-davida-soendergaard-portrait-muusfoto.jpg` — B/W portrait w/ boxing gloves (photo: Muusfoto); the canonical "Om Vinnie" portrait. Used on the About page hero + landing "Om" banner.

### Testimonial portraits
- `ref-peter-schmeichel1-180x160-1.jpg`
- `ref-ida-krause-180x180-1.jpg`

### Partner / client logos
- `saxobanklogo.png` — Saxo Bank
- `nor-primary-logo-w-tagline-rgb-pos-large-e1539977408170.png` — NOR
- `19tii81qktc-champs-camp-logo-415.png` — Champs Camp
- `weesgaard-dental-kirurgi-since-1962-horizontal-logo-white-12-2025-1920x315.webp` — Weesgaard Dental Kirurgi
- `logo-generous-development-black-final.png` — Generous Development
- `npv-logo-cmyk-pos-002.png` — NPV
- `logo-dark-1920x632.png` — partner logo (dark)

---

> **Note:** Content and media are copyrighted by Vinnie Davida Søndergaard / their
> respective photographers and partners. This repo uses them only as design
> reference material for private testing on GitHub Pages.
