# Tsukimi Ramen — Minimalist Design Spec
Date: 2026-03-18

## Overview

Een nieuwe, minimalistische versie van de Tsukimi Ramen restaurantpagina. Toegevoegd aan de bestaande collectie versies in `C:\xampp\nickspage`.

## Design Direction

- **Stijl:** Zen / Paper — licht, veel witruimte, rust
- **Kleurpalet:** Puur monochroom — crème achtergrond (`#f0f0ec`), bijna-zwart tekst (`#1a1a1a`), grijstinten voor hiërarchie. Geen kleuraccenten.
- **Typografie:** EB Garamond (Google Fonts, licht gewicht) + Noto Serif JP voor Japanse tekens
- **Sfeer:** Japanse minimalisme, editorial, rustgevend

## Secties

Sectienummers: alleen sectie 02 (Menu) toont een zichtbaar nummer. Hero en Contact krijgen geen nummer-label.

### 1. Navigatie
- Logo links: kanji `月見` (11px, `#999`, letterSpacing `.2em`) boven de naam `Tsukimi Ramen` (17px, gewicht 400)
- Nav border-bottom: `1px solid #ddd`
- Links rechts: `Menu` · `Reserveer` (anchor links naar de secties; geen "Over" sectie)
- Lettergrootte links: 12px, letterSpacing `.15em`, uppercase, kleur `#888`

### 2. Hero
- Volledige viewport hoogte (`min-height: 100vh`)
- Label boven: "Tsukimi Ramen · Amsterdam" (11px, `#aaa`, uppercase, letterSpacing `.3em`)
- Titel: "Ramen" op eerste regel, "onder de maan" cursief op tweede regel
  - Grote titel: `clamp(56px, 10vw, 120px)`, gewicht 300
- Subtitel italic: "Handgetrokken noedels, slow-cooked bouillon" (18px, `#888`)
- CTA tekst-link: "Bekijk het menu →" — anchor naar `#menu`, stijl: geen knop, border-bottom `1px solid #1a1a1a`
- Jaar rechtsonder (absoluut gepositioneerd in de hero container): "Est. 2025" (11px, `#bbb`)
- Border-bottom: `1px solid #ddd`

### 3. Menu (`id="menu"`)
- Sectielabel: `02` links, "Menu" als h2 (32px, gewicht 300) rechts naast het label
- **Categorie: Ramen**
  - Tsukimi Shio — Heldere kippenbouillon, zacht ei, wakame — €16
  - Tonkotsu — Rijke varkensbouillon, chashu, maïs — €17
  - Miso Vegetarisch — Witte miso, tofu, seizoensgroenten — €15
- **Categorie: Bijgerechten**
  - Gyoza — Gegrild, varken & kool — €8
  - Edamame — Zeezout, citroen — €5
- Categorienaam: 10px, uppercase, `#aaa`, border-bottom `1px solid #e8e8e4`
- Item layout: naam links (18px), beschrijving italic eronder (13px, `#999`), prijs rechts (15px, `#777`)
- Scheiding per item: `1px solid #f0ede8`

### 4. Contact & Reservering (`id="reserveer"`)
- Twee kolommen (desktop); collapse naar één kolom onder 640px
- **Links — Vind ons:**
  - Adres: Haarlemmerdijk 12, Amsterdam (placeholder)
  - Openingstijden: Di – Zo · 12:00 – 22:00
  - Contact: info@tsukimiramen.nl (placeholder mailto-link)
- **Rechts — Reserveren:**
  - Koptekst: "Reserveer een tafel"
  - Tekst: "Wij verwelkomen je graag. Reserveer online of bel ons direct."
  - Knop: zwart (`#1a1a1a`) met witte tekst (`#f5f2ec`), tekst "Reserveer nu →"
  - Knop-actie: `mailto:info@tsukimiramen.nl` (geen extern systeem, geen JS vereist)

### 5. Footer
- Flex row, justify-content: space-between
- Links: "© 2025 Tsukimi Ramen" (11px, `#bbb`)
- Rechts: "月見" (11px, `#bbb`)
- Border-top: `1px solid #ddd`

## Technische keuzes

- Enkel HTML + CSS in één bestand (geen JS)
- Google Fonts: `EB Garamond` (ital,wght@0,300;0,400;1,400) + `Noto Serif JP` (wght@300;400)
- CSS custom properties voor kleuren en spacing
- Responsive: `clamp()` voor grote typografie; contact-grid collapse bij `max-width: 640px`
- Smooth scroll: `html { scroll-behavior: smooth; }`

## Bestand & Index

- **Opslaan als:** `tsukimi-ramen-minimalist.html`
- **Index toevoegen in `tsukimiramen.html`:** nieuw `<a>` element in de bestaande `nav.links` lijst, zelfde patroon als de andere versies:
  ```html
  <a href="tsukimi-ramen-minimalist.html" target="_blank">
    <span class="n">04</span>
    Tsukimi Ramen Minimalist
    <span class="arrow">→</span>
  </a>
  ```
