# Tsukimi Ramen Website — Design Spec

**Date:** 2026-03-19
**Client:** Tsukimi Ramen
**Location:** Damrak 45, Floor 2 (inside At James), Amsterdam
**Domain:** tsukimiramen.nl

---

## Overview

A static HTML/CSS website for Tsukimi Ramen — a ramen restaurant on the second floor of Damrak 45 in Amsterdam. The primary goal is to drive walk-in traffic and reservations from tourists. The site must communicate the concept instantly and work well on mobile.

**Core message:** A ramen break upstairs in the heart of Amsterdam.

---

## Goals

- Make clear within seconds what the restaurant is
- Visually convince visitors to walk in or reserve
- Work flawlessly on mobile (primary device of target audience)
- Support reservations via Guestplan (placeholder for now, to be integrated later)

---

## Target Audience

1. Tourists (primary)
2. Asian visitors (secondary)
3. Locals / students (supporting)

---

## Tech Stack

- **Pure HTML/CSS** — no frameworks, no build tools
- **Hosting:** Netlify (free tier, drag & drop deploy)
- **Domain:** tsukimiramen.nl
- **Fonts:** Google Fonts — Cormorant Garamond (headings) + Inter (body)
- **Maps:** Google Maps iframe embed. To generate: go to [maps.google.com](https://maps.google.com), search "Damrak 45 Amsterdam", click Share → Embed a map → copy the `<iframe>` HTML. Paste into the Location section. The iframe should have `width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"`.
- **Reservations:** `tel:+31614351973` as placeholder until Guestplan is configured

---

## Site Structure

```
tsukimi-ramen/
├── index.html         ← home page (scrollable)
├── menu.html          ← full menu page
├── about.html         ← about page
├── css/
│   └── style.css      ← shared styles
└── images/            ← photos copied from WeTransfer zip
```

**Approach:** Hybrid — the home page is a single scrollable experience optimized for fast tourist decision-making. Menu and About have their own dedicated pages with clean URLs for sharing and QR codes.

---

## Visual Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` (near-black) |
| Surface (card bg) | `#141414` |
| Gold accent | `#c9a84c` |
| Body text | `#f0ede6` (warm off-white) |
| Muted text | `#888880` |
| Reserve section bg | `rgba(201, 168, 76, 0.07)` with `1px solid rgba(201,168,76,0.2)` border |
| Heading font | Cormorant Garamond (serif, weights 300 + 600) |
| Body font | Inter (sans-serif, weights 400 + 500) |
| Moon motif | ☽ crescent — used in nav logo and hero only |

**Aesthetic:** Dark Luxury — cinematic, moody, premium. Generous white space. Food photography on dark backgrounds. Subtle Japanese/moon theme in typography and motifs, not decoration.

---

## Page Titles & Meta

| Page | `<title>` | `<meta name="description">` |
|---|---|---|
| index.html | Tsukimi Ramen — Amsterdam | Authentic ramen upstairs in the heart of Amsterdam. Walk in or reserve your table at Damrak 45, Floor 2. |
| menu.html | Menu — Tsukimi Ramen | Fresh ramen, sides, and Japanese dishes. View the full menu at Tsukimi Ramen Amsterdam. |
| about.html | About — Tsukimi Ramen | Tsukimi Ramen is a casual ramen spot above the busy streets of Damrak, Amsterdam. |

All pages: `<link rel="icon" href="images/logo.png" type="image/png">` (32×32 crop of logo is sufficient; no separate favicon file needed).

---

## Responsive Layout

Single breakpoint at `max-width: 768px`:

- Nav: links hidden; CSS-only hamburger appears (see Nav spec below)
- Hero: headline font size reduced (~2rem), buttons stack vertically (flex-direction: column)
- Menu preview cards: 3-column grid → single column
- Menu page ramen grid: 2-column → single column
- Footer: stacks vertically, center-aligned

---

## Navigation (shared across all pages)

**Desktop:** Fixed/sticky top bar, full width, dark `#0a0a0a` background with subtle `border-bottom: 1px solid rgba(201,168,76,0.15)`.
- Left: ☽ + "TSUKIMI" text (links to `index.html`)
- Right: `Menu` (→ `menu.html`) · `About` (→ `about.html`) · `Reserve` (→ `tel:+31614351973`, gold-colored)

**Mobile (≤768px):** CSS-only hamburger using hidden checkbox toggle.

```html
<!-- Pattern to use: -->
<input type="checkbox" id="nav-toggle" hidden>
<label for="nav-toggle" class="hamburger">☰</label>
<nav class="nav-links">...</nav>
```

When open: nav links appear below the bar as a vertical stack (not an overlay), pushing page content down. Logo always visible. Hamburger becomes ✕ via CSS `checked` state.

---

## Pages

### index.html — Home (scrollable)

**Hero (full-screen, min-height: 100vh)**
- Background: `images/pork-bone-ramen.png` (`background-size: cover; background-position: center`) with dark overlay `rgba(0,0,0,0.58)`
- Centered content (flex column, centered):
  - ☽ icon in gold
  - Japanese: `月見ラーメン` (Cormorant Garamond, muted gold, letter-spacing)
  - Headline: *"Discover a ramen break upstairs in the heart of Amsterdam"* (Cormorant Garamond, ~3.5rem)
  - Subtext: *"Warm, casual ramen experience away from the busy streets"*
  - Primary CTA: `Reserve a table` → `tel:+31614351973` (gold filled button)
  - Secondary CTA: `View Menu` → `menu.html` (gold outline button)

**Concept section**
- `padding: 100px 20px`, centered, `max-width: 640px`, `margin: 0 auto`
- Copy: *"Located just above the busy streets of Damrak, Tsukimi Ramen offers a quiet escape in the heart of Amsterdam. Step upstairs and enjoy a warm, casual ramen experience away from the crowds."*

**Menu Preview section**
- Title: `Fresh, simple ramen.`
- 3 cards in a row (CSS Grid, `grid-template-columns: repeat(3, 1fr)`, gap 24px):
  - Card 1 — **Tonkotsu Ramen** — `images/pork-bone-ramen.png` — Rich pork bone broth — €19.95
  - Card 2 — **Chicken Ramen** — `images/chicken-ramen.png` — Clear chicken broth — €18.95
  - Card 3 — **Shrimp Miso Ramen** — `images/shrimp-miso-ramen.png` — Miso broth with fried shrimp — €19.95
- Each card structure (top to bottom): image (`aspect-ratio: 4/3`, `object-fit: cover`, full card width), dish name (Cormorant Garamond, ~1.3rem, off-white), short description (Inter, small, muted), price (Inter 500, gold `#c9a84c`). Card background: `#141414`, subtle border `1px solid rgba(255,255,255,0.06)`.
- Button below cards: `Our Ramen →` → `menu.html`

**Reserve CTA section**
- Background: `rgba(201, 168, 76, 0.07)`, border-top/bottom `1px solid rgba(201,168,76,0.2)`
- `padding: 100px 20px`, centered
- Title: *"Reserve your table"* (Cormorant Garamond, gold)
- Subtext: *"Skip the wait and secure your spot upstairs."* (off-white)
- Button: `Reserve now` → `tel:+31614351973` (gold filled)
- Small note below button: *"We'll integrate online reservations soon."* (muted text, italic)

**Location section**
- Two-column layout (desktop): left = text, right = map embed
- Single column on mobile
- Address: Damrak 45, Floor 2, Amsterdam
- Instructions: *"Located inside At James on Damrak 45, floor 2. Step upstairs and discover Tsukimi Ramen."*
- Google Maps iframe (generate from Maps for "Damrak 45, 1012 LG Amsterdam"), `width: 100%, height: 350px, border: 0`
- Hours: `09:00 – 23:00` daily
- Phone: `06 14 35 19 73` (linked: `tel:+31614351973`)

**Footer**
- Centered, dark background, `padding: 40px 20px`
- ☽ TSUKIMI logo
- Instagram: `@tsukimi_ramen` → `https://www.instagram.com/tsukimi_ramen`
- Address: Damrak 45, Floor 2 · Amsterdam
- Hours: 09:00 – 23:00
- Copyright: `© 2026 Tsukimi Ramen`

---

### menu.html — Full Menu

Same nav and footer as index.html. Page header: "Our Menu" + Japanese subtitle `メニュー`.

**Ramen section** — 2-column grid (desktop), 1-column (mobile)

Each ramen card: food photo (background-removed versions preferred for dark bg), Japanese name, English name, full description, price.

| Name | Japanese | Description | Price |
|---|---|---|---|
| Tonkotsu Ramen | とんこつラーメン | Rich pork bone broth with noodles, chashu pork, bok choy, bamboo shoots, narutomaki, soft-boiled egg, seaweed, sesame, scallions | €19.95 |
| Chicken Ramen | チキンラーメン | Clear chicken broth with noodles, chicken fillet, bok choy, bamboo shoots, narutomaki, soft-boiled egg, scallions | €18.95 |
| Shrimp Miso Ramen | えびみそラーメン | Miso broth with noodles, fried shrimp, bok choy, bamboo shoots, narutomaki, soft-boiled egg, bonito flakes, scallions | €19.95 |
| Vegetable Soy-Sauce Ramen | 野菜醤油ラーメン | Soy sauce broth with noodles, bok choy, corn, broccoli, bamboo shoots, seaweed, dry onions, scallions | €17.95 |

**Side Dishes, Fried Dishes, Desserts, Toppings** — displayed as simple list rows (name + price, no grid), with food photo where available. Items without a photo use text-only layout (no placeholder image).

Side Dishes:
- Seasoned seaweed salad €7.95 (photo: `Seasoned Seaweed Salad.png`)
- Edamame €7.50 (photo: `Endamame.png`)
- Kimchi €6.50 (photo: `Kimchi.png`)
- Soft boiled seasoned eggs €7.50 (no photo)
- Pan-fried chicken dumplings €7.50 (5x) / €14.50 (10x) (photo: `Dumplings.png`)
- Pan-fried vegetable gyoza €7.50 (5x) / €14.50 (10x) (photo: `Gyoza.png`)
- Japanese savory pancake sticks (2x) €9.95 (photo: `Pancake Sticks.png`)

Fried Dishes:
- Octopus balls (4x) €8.95 (photo: `Octopus Balls.png`)
- Japanese fried chicken (5x) €9.95 (photo: `Fried Chicken.png`)
- Spring rolls (5x) €8.50 (photo: `Spring Rolls.png`)
- Ebifry / fried shrimp (4x) €9.95 (photo: `Fried Shrimp.png`)
- Chicken onion skewers (2x) €7.95 (photo: `Chicken Onion Skewers.png`)
- Fried chicken dumplings €7.50 (5x) / €14.50 (10x) (photo: `Dumplings.png`)
- Fried vegetable dumplings €7.50 (5x) / €14.50 (10x) (no separate photo)

Desserts:
- Dango sticks €7.95 (no photo available)
- Mochi ice cream €6.95 (photo: `Ice cream.jpeg`)
- Tofu pudding (almond) €6.95 (photo: `Tofu Pudding.png`)

Extra Toppings (compact table, no photos):
Chashu pork 3x €3.50 · Chicken fillet 3x €3.00 · Shrimp 3x €3.50 · Ajitama egg €1.50 · Scallions €1.00 · Corn €1.00 · Bamboo shoots €1.50 · Boiled bok choy €1.50 · Portion noodles €3.50 · Dry seaweed €1.50

Sauces (compact, no photos):
Japanese mayo €1.50 · Sweet chili €1.50 · Sriracha €2.00 · Takoyaki sauce €1.50 · Okonomiyaki sauce €1.50 · Soy sauce €1.00 · Teriyaki sauce €1.00

---

### about.html — About

Same nav and footer as index.html. Single centered column, `max-width: 720px`, generous padding.

**Copy:**

> Tsukimi Ramen is a casual ramen spot located in the heart of Amsterdam, on the second floor of Damrak 45 — inside At James, which has been welcoming guests since 2011.
>
> Inspired by the energy of the city, we offer a simple and welcoming space just above the busy streets. Step upstairs and take a break from the crowds.
>
> Our focus is on fresh, quality ramen made for a quick, comfortable meal in the city.

---

## Image Map

All images copied from the WeTransfer zip into `images/`. Use the "Achtergrond van X verwijderd.png" (background-removed) versions for menu page items displayed on dark cards. Use the regular versions for full-bleed backgrounds.

| Source filename | Destination in `images/` | Used in |
|---|---|---|
| `Logo.png` | `logo.png` | Nav, hero, footer, favicon |
| `Pork Bone Ramen.png` | `pork-bone-ramen.png` | Hero background, Tonkotsu menu preview card |
| `Achtergrond van Pork Bone Ramen verwijderd.png` | `pork-bone-ramen-nobg.png` | Menu page Tonkotsu card |
| `Chicken Ramen.png` | `chicken-ramen.png` | Menu preview card |
| `Achtergrond van Chicken Ramen verwijderd.png` | `chicken-ramen-nobg.png` | Menu page Chicken Ramen card |
| `Shrimp Miso Ramen.png` | `shrimp-miso-ramen.png` | Menu preview card |
| `Achtergrond van Shrimp Miso Ramen verwijderd.png` | `shrimp-miso-ramen-nobg.png` | Menu page Shrimp Miso card |
| `Vegetarian Soy Sauce Ramen.png` | `vegetarian-ramen.png` | Menu page Vegetarian card |
| `Seasoned Seaweed Salad.png` | `seaweed-salad.png` | Menu page side dishes |
| `Endamame.png` | `edamame.png` | Menu page side dishes |
| `Kimchi.png` | `kimchi.png` | Menu page side dishes |
| `Dumplings.png` | `dumplings.png` | Menu page side dishes + fried dishes |
| `Gyoza.png` | `gyoza.png` | Menu page side dishes |
| `Pancake Sticks.png` | `pancake-sticks.png` | Menu page side dishes |
| `Octopus Balls.png` | `octopus-balls.png` | Menu page fried dishes |
| `Fried Chicken.png` | `fried-chicken.png` | Menu page fried dishes |
| `Spring Rolls.png` | `spring-rolls.png` | Menu page fried dishes |
| `Fried Shrimp.png` | `fried-shrimp.png` | Menu page fried dishes |
| `Chicken Onion Skewers.png` | `chicken-onion-skewers.png` | Menu page fried dishes |
| `Ice cream.jpeg` | `ice-cream.jpg` | Menu page desserts |
| `Tofu Pudding.png` | `tofu-pudding.png` | Menu page desserts |

---

## Functional Requirements

- Mobile-optimized (responsive CSS, min 44px tap targets on all interactive elements)
- CSS-only hamburger nav on mobile (checkbox toggle pattern, no JavaScript)
- Google Maps iframe on home page (generate embed from Google Maps for "Damrak 45, 1012 LG Amsterdam")
- Instagram link in footer: `https://www.instagram.com/tsukimi_ramen`
- All Reserve/CTA buttons link to `tel:+31614351973` until Guestplan is ready
- English language only
- No delivery / takeaway section

---

## Out of Scope

- Delivery / takeaway
- Dutch language version
- CMS / content editing interface
- Full Guestplan integration (owner will configure later and swap in the URL)
- Google Business profile (handled separately by Lam Ho)
- JavaScript (site is pure HTML/CSS)
