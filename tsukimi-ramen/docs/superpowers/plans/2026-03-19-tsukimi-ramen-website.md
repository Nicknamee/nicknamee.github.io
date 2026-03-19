# Tsukimi Ramen Website Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 3-page static HTML/CSS website for Tsukimi Ramen Amsterdam — dark luxury aesthetic, mobile-first, ready to deploy on Netlify.

**Architecture:** Pure HTML/CSS, no JavaScript. Shared stylesheet (`css/style.css`) imported by all three pages. Nav and footer HTML is duplicated across pages (no templating). Images copied from local zip into `images/` folder.

**Tech Stack:** HTML5, CSS3 (custom properties, CSS Grid, Flexbox), Google Fonts (Cormorant Garamond + Inter), Netlify (free hosting)

**Spec:** `docs/superpowers/specs/2026-03-19-tsukimi-ramen-website-design.md`

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Home page — hero, concept, menu preview, reserve CTA, location, footer |
| `menu.html` | Full menu — ramen, sides, fried dishes, desserts, toppings |
| `about.html` | About page — 3-paragraph story |
| `css/style.css` | All styles — design tokens, reset, typography, nav, footer, each page section, responsive |
| `images/` | All food photos and logo (copied from WeTransfer zip) |

---

## Chunk 1: Project Setup & CSS Design System

### Task 1: Copy images into project

**Files:**
- Create: `images/` directory with all photos

- [ ] **Step 1: Copy the logo**

  Source: `C:\Users\nickt\Downloads\tsukimi-photos\tsukimi ramen fotos en _menu_2026-03-12_1221\Menu\Logo.png`
  Destination: `images/logo.png`

- [ ] **Step 2: Copy hero and menu preview images**

  Copy these files (rename as shown):

  | Source | Destination |
  |---|---|
  | `...Foto's Tsukimi\Pork Bone Ramen.png` | `images/pork-bone-ramen.png` |
  | `...Foto's Tsukimi\Chicken Ramen.png` | `images/chicken-ramen.png` |
  | `...Foto's Tsukimi\Shrimp Miso Ramen.png` | `images/shrimp-miso-ramen.png` |

- [ ] **Step 3: Copy menu page food images**

  | Source | Destination |
  |---|---|
  | `...Foto's Tsukimi\Achtergrond van Pork Bone Ramen verwijderd.png` | `images/pork-bone-ramen-nobg.png` |
  | `...Foto's Tsukimi\Achtergrond van Chicken Ramen verwijderd.png` | `images/chicken-ramen-nobg.png` |
  | `...Foto's Tsukimi\Achtergrond van Shrimp Miso Ramen verwijderd.png` | `images/shrimp-miso-ramen-nobg.png` |
  | `...Foto's Tsukimi\Vegetarian Soy Sauce Ramen.png` | `images/vegetarian-ramen.png` |
  | `...Foto's Tsukimi\Seasoned Seaweed Salad.png` | `images/seaweed-salad.png` |
  | `...Foto's Tsukimi\Endamame.png` | `images/edamame.png` |
  | `...Foto's Tsukimi\Kimchi.png` | `images/kimchi.png` |
  | `...Foto's Tsukimi\Dumplings.png` | `images/dumplings.png` |
  | `...Foto's Tsukimi\Gyoza.png` | `images/gyoza.png` |
  | `...Foto's Tsukimi\Pancake Sticks.png` | `images/pancake-sticks.png` |
  | `...Foto's Tsukimi\Octopus Balls.png` | `images/octopus-balls.png` |
  | `...Foto's Tsukimi\Fried Chicken.png` | `images/fried-chicken.png` |
  | `...Foto's Tsukimi\Spring Rolls.png` | `images/spring-rolls.png` |
  | `...Foto's Tsukimi\Fried Shrimp.png` | `images/fried-shrimp.png` |
  | `...Foto's Tsukimi\Chicken Onion Skewers.png` | `images/chicken-onion-skewers.png` |
  | `...Foto's Tsukimi\Ice cream.jpeg` | `images/ice-cream.jpg` |
  | `...Foto's Tsukimi\Tofu Pudding.png` | `images/tofu-pudding.png` |

- [ ] **Step 4: Verify images folder**

  Open `images/` in Explorer. Confirm all 20 files are present (logo + 19 food photos). If any are missing, check the source path — the folder name contains an apostrophe (`Foto's Tsukimi`).

---

### Task 2: Create CSS design system

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Create the file with CSS custom properties and reset**

  Create `css/style.css` with the following content:

  ```css
  /* =============================================
     TSUKIMI RAMEN — style.css
     ============================================= */

  /* --- Google Fonts import --- */
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&family=Inter:wght@400;500&display=swap');

  /* --- Design tokens --- */
  :root {
    --bg:        #0a0a0a;
    --surface:   #141414;
    --gold:      #c9a84c;
    --gold-dim:  rgba(201, 168, 76, 0.15);
    --gold-border: rgba(201, 168, 76, 0.2);
    --text:      #f0ede6;
    --muted:     #888880;
    --font-head: 'Cormorant Garamond', serif;
    --font-body: 'Inter', sans-serif;
  }

  /* --- Reset --- */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }

  /* --- Typography --- */
  h1, h2, h3, h4 {
    font-family: var(--font-head);
    font-weight: 300;
    line-height: 1.2;
    color: var(--text);
  }
  h1 { font-size: clamp(2rem, 5vw, 3.5rem); }
  h2 { font-size: clamp(1.8rem, 3vw, 2.8rem); }
  h3 { font-size: 1.4rem; }

  /* --- Buttons --- */
  .btn {
    display: inline-block;
    padding: 14px 32px;
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
    transition: opacity 0.2s;
  }
  .btn:hover { opacity: 0.85; }
  .btn-gold {
    background: var(--gold);
    color: #0a0a0a;
  }
  .btn-outline {
    background: transparent;
    color: var(--gold);
    border: 1px solid var(--gold);
  }

  /* --- Section base --- */
  .section {
    padding: 100px 24px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .section-full {
    padding: 100px 24px;
  }
  .section-center {
    text-align: center;
    max-width: 640px;
    margin: 0 auto;
    padding: 100px 24px;
  }
  .section-label {
    font-family: var(--font-body);
    font-size: 0.7rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 16px;
  }

  /* =============================================
     NAVIGATION
     ============================================= */
  .site-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: var(--bg);
    border-bottom: 1px solid var(--gold-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
    height: 64px;
  }

  .nav-logo {
    font-family: var(--font-head);
    font-size: 1.1rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--text);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nav-logo span { color: var(--gold); font-size: 1.3rem; }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--muted);
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--text); }
  .nav-links .nav-reserve { color: var(--gold); }
  .nav-links .nav-reserve:hover { color: var(--text); }

  /* CSS-only hamburger */
  #nav-toggle { display: none; }
  .hamburger {
    display: none;
    cursor: pointer;
    font-size: 1.4rem;
    color: var(--text);
    user-select: none;
  }

  /* --- Page offset for fixed nav --- */
  body { padding-top: 64px; }

  /* =============================================
     FOOTER
     ============================================= */
  .site-footer {
    background: var(--bg);
    border-top: 1px solid var(--gold-border);
    padding: 60px 24px;
    text-align: center;
  }
  .footer-logo {
    font-family: var(--font-head);
    font-size: 1.3rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--text);
    margin-bottom: 24px;
  }
  .footer-logo span { color: var(--gold); }
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }
  .footer-links a {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--muted);
    transition: color 0.2s;
  }
  .footer-links a:hover { color: var(--gold); }
  .footer-info {
    font-size: 0.8rem;
    color: var(--muted);
    line-height: 1.8;
  }
  .footer-copy {
    margin-top: 32px;
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 1px;
  }

  /* =============================================
     RESPONSIVE — 768px breakpoint
     ============================================= */
  @media (max-width: 768px) {
    /* Nav hamburger */
    .hamburger { display: block; }
    .nav-links {
      display: none;
      position: absolute;
      top: 64px; left: 0; right: 0;
      flex-direction: column;
      align-items: flex-start;
      background: var(--bg);
      padding: 24px 32px;
      gap: 20px;
      border-bottom: 1px solid var(--gold-border);
    }
    #nav-toggle:checked ~ .nav-links { display: flex; }
    #nav-toggle:checked ~ .hamburger::before { content: '✕'; }
    .hamburger::before { content: '☰'; }
    .hamburger { font-size: 0; } /* hide default content */
    .hamburger::before { font-size: 1.4rem; }

    .section { padding: 60px 20px; }
    .section-full { padding: 60px 20px; }
    .section-center { padding: 60px 20px; }
  }
  ```

- [ ] **Step 2: Open `css/style.css` in a browser by creating a test HTML file**

  Create a temporary `test.html` in the project root:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Style test</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <input type="checkbox" id="nav-toggle" hidden>
    <nav class="site-nav">
      <a href="index.html" class="nav-logo"><span>☽</span> Tsukimi</a>
      <label for="nav-toggle" class="hamburger"></label>
      <ul class="nav-links">
        <li><a href="menu.html">Menu</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="tel:+31614351973" class="nav-reserve">Reserve</a></li>
      </ul>
    </nav>
    <div style="padding: 40px;">
      <p class="section-label">Design system test</p>
      <h1>Heading 1 — Cormorant</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <p>Body text in Inter.</p>
      <br>
      <a href="#" class="btn btn-gold">Reserve a table</a>
      &nbsp;
      <a href="#" class="btn btn-outline">View Menu</a>
    </div>
    <footer class="site-footer">
      <div class="footer-logo"><span>☽</span> Tsukimi</div>
      <div class="footer-info">Footer test</div>
    </footer>
  </body>
  </html>
  ```

  Open `test.html` in Chrome/Edge. Verify:
  - Background is near-black `#0a0a0a` ✓
  - Headings render in Cormorant Garamond (elegant serif) ✓
  - Body text in Inter (clean sans-serif) ✓
  - Gold button is visible, outline button has gold border ✓
  - Nav shows "☽ Tsukimi" left, links right ✓
  - Resize to < 768px: hamburger appears, links hide ✓
  - Click hamburger: links reveal below nav ✓

- [ ] **Step 3: Delete test.html**

  Remove the temporary test file once CSS is verified.

- [ ] **Step 4: Commit**

  ```bash
  git init
  git add css/style.css images/
  git commit -m "feat: add CSS design system and images"
  ```

---

## Chunk 2: index.html (Home Page)

### Task 3: HTML skeleton

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html with head, nav, and footer**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tsukimi Ramen — Amsterdam</title>
    <meta name="description" content="Authentic ramen upstairs in the heart of Amsterdam. Walk in or reserve your table at Damrak 45, Floor 2.">
    <link rel="icon" href="images/logo.png" type="image/png">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

    <!-- NAV -->
    <input type="checkbox" id="nav-toggle" hidden>
    <nav class="site-nav">
      <a href="index.html" class="nav-logo"><span>☽</span> Tsukimi</a>
      <label for="nav-toggle" class="hamburger"></label>
      <ul class="nav-links">
        <li><a href="menu.html">Menu</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="tel:+31614351973" class="nav-reserve">Reserve</a></li>
      </ul>
    </nav>

    <!-- MAIN CONTENT (sections go here) -->
    <main>
    </main>

    <!-- FOOTER -->
    <footer class="site-footer">
      <div class="footer-logo"><span>☽</span> Tsukimi</div>
      <div class="footer-links">
        <a href="https://www.instagram.com/tsukimi_ramen" target="_blank" rel="noopener">@tsukimi_ramen</a>
        <a href="menu.html">Menu</a>
        <a href="about.html">About</a>
      </div>
      <div class="footer-info">
        Damrak 45, Floor 2 · Amsterdam<br>
        Open daily 09:00 – 23:00 · <a href="tel:+31614351973">06 14 35 19 73</a>
      </div>
      <div class="footer-copy">© 2026 Tsukimi Ramen</div>
    </footer>

  </body>
  </html>
  ```

- [ ] **Step 2: Open in browser and verify**

  Open `index.html` in Chrome/Edge. Confirm:
  - Page background is dark ✓
  - Nav appears fixed at top ✓
  - Footer appears at bottom with all links ✓
  - Main area is empty (expected at this stage) ✓

---

### Task 4: Hero section

**Files:**
- Modify: `index.html` (add hero inside `<main>`)
- Modify: `css/style.css` (add hero styles)

- [ ] **Step 1: Add hero HTML inside `<main>` in index.html**

  ```html
  <!-- HERO -->
  <section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="hero-moon">☽</span>
      <p class="hero-japanese">月見ラーメン</p>
      <h1 class="hero-headline">Discover a ramen break<br>upstairs in the heart<br>of Amsterdam</h1>
      <p class="hero-sub">Warm, casual ramen experience away from the busy streets</p>
      <div class="hero-ctas">
        <a href="tel:+31614351973" class="btn btn-gold">Reserve a table</a>
        <a href="menu.html" class="btn btn-outline">View Menu</a>
      </div>
    </div>
  </section>
  ```

- [ ] **Step 2: Add hero CSS to css/style.css**

  ```css
  /* =============================================
     HERO
     ============================================= */
  .hero {
    position: relative;
    min-height: 100vh;
    background-image: url('../images/pork-bone-ramen.png');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.58);
  }
  .hero-content {
    position: relative;
    z-index: 1;
    padding: 40px 24px;
    max-width: 800px;
  }
  .hero-moon {
    display: block;
    font-size: 2rem;
    color: var(--gold);
    margin-bottom: 12px;
  }
  .hero-japanese {
    font-family: var(--font-head);
    font-size: 0.85rem;
    letter-spacing: 6px;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  .hero-headline {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    margin-bottom: 20px;
    color: var(--text);
  }
  .hero-sub {
    font-size: 1rem;
    color: var(--muted);
    margin-bottom: 40px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  .hero-ctas {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .hero-ctas { flex-direction: column; align-items: center; }
    .hero-ctas .btn { width: 100%; max-width: 280px; text-align: center; }
  }
  ```

- [ ] **Step 3: Open index.html in browser and verify hero**

  - Full-screen ramen photo with dark overlay ✓
  - Gold ☽ moon, Japanese text, white headline visible ✓
  - Two buttons: gold filled "Reserve a table", gold outline "View Menu" ✓
  - Resize to mobile: buttons stack vertically ✓

---

### Task 5: Concept section

**Files:**
- Modify: `index.html` (add after hero)
- Modify: `css/style.css` (add concept styles)

- [ ] **Step 1: Add concept HTML after the hero section**

  ```html
  <!-- CONCEPT -->
  <section class="section-center concept">
    <p class="section-label">Our story</p>
    <p class="concept-text">
      Located just above the busy streets of Damrak, Tsukimi Ramen offers a quiet escape
      in the heart of Amsterdam. Step upstairs and enjoy a warm, casual ramen experience
      away from the crowds.
    </p>
  </section>
  ```

- [ ] **Step 2: Add concept CSS**

  ```css
  /* =============================================
     CONCEPT
     ============================================= */
  .concept {
    border-top: 1px solid var(--gold-border);
    border-bottom: 1px solid var(--gold-border);
  }
  .concept-text {
    font-size: 1.15rem;
    color: var(--muted);
    line-height: 1.9;
    margin-top: 16px;
  }
  ```

- [ ] **Step 3: Verify in browser**

  - Dark section, gold label "OUR STORY", paragraph in muted color ✓
  - Gold border lines above and below ✓

---

### Task 6: Menu preview section

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add menu preview HTML after concept**

  ```html
  <!-- MENU PREVIEW -->
  <section class="section menu-preview">
    <div class="menu-preview-header">
      <p class="section-label">A taste of what's upstairs</p>
      <h2>Fresh, simple ramen.</h2>
    </div>
    <div class="menu-preview-grid">

      <div class="preview-card">
        <img src="images/pork-bone-ramen.png" alt="Tonkotsu Ramen" loading="lazy">
        <div class="preview-card-body">
          <h3>Tonkotsu Ramen</h3>
          <p>Rich pork bone broth with noodles, chashu pork, bok choy and soft-boiled egg</p>
          <span class="preview-price">€19.95</span>
        </div>
      </div>

      <div class="preview-card">
        <img src="images/chicken-ramen.png" alt="Chicken Ramen" loading="lazy">
        <div class="preview-card-body">
          <h3>Chicken Ramen</h3>
          <p>Clear chicken broth with noodles, chicken fillet, bok choy and soft-boiled egg</p>
          <span class="preview-price">€18.95</span>
        </div>
      </div>

      <div class="preview-card">
        <img src="images/shrimp-miso-ramen.png" alt="Shrimp Miso Ramen" loading="lazy">
        <div class="preview-card-body">
          <h3>Shrimp Miso Ramen</h3>
          <p>Miso broth with noodles, fried shrimp, bok choy and soft-boiled egg</p>
          <span class="preview-price">€19.95</span>
        </div>
      </div>

    </div>
    <div class="menu-preview-cta">
      <a href="menu.html" class="btn btn-outline">Our Ramen &rarr;</a>
    </div>
  </section>
  ```

- [ ] **Step 2: Add menu preview CSS**

  ```css
  /* =============================================
     MENU PREVIEW
     ============================================= */
  .menu-preview-header {
    margin-bottom: 48px;
  }
  .menu-preview-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .preview-card {
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.06);
    overflow: hidden;
  }
  .preview-card img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
  }
  .preview-card-body {
    padding: 20px;
  }
  .preview-card-body h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
  .preview-card-body p {
    font-size: 0.85rem;
    color: var(--muted);
    line-height: 1.6;
    margin-bottom: 12px;
  }
  .preview-price {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--gold);
    letter-spacing: 1px;
  }
  .menu-preview-cta {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    .menu-preview-grid { grid-template-columns: 1fr; }
  }
  ```

- [ ] **Step 3: Verify in browser**

  - Three cards side by side with food photos ✓
  - Each card: image (4:3 ratio), name in serif, description in muted, gold price ✓
  - "Our Ramen →" outline button below ✓
  - Mobile: cards stack vertically ✓

---

### Task 7: Reserve CTA section

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Add reserve CTA HTML after menu preview**

  ```html
  <!-- RESERVE CTA -->
  <section class="reserve-cta section-full">
    <div class="reserve-cta-inner">
      <p class="section-label">Reservations</p>
      <h2>Reserve your table</h2>
      <p class="reserve-sub">Skip the wait and secure your spot upstairs.</p>
      <a href="tel:+31614351973" class="btn btn-gold">Reserve now</a>
      <p class="reserve-note">We'll integrate online reservations soon.</p>
    </div>
  </section>
  ```

- [ ] **Step 2: Add reserve CTA CSS**

  ```css
  /* =============================================
     RESERVE CTA
     ============================================= */
  .reserve-cta {
    background: rgba(201, 168, 76, 0.07);
    border-top: 1px solid var(--gold-border);
    border-bottom: 1px solid var(--gold-border);
    text-align: center;
  }
  .reserve-cta-inner {
    max-width: 600px;
    margin: 0 auto;
  }
  .reserve-cta h2 {
    color: var(--gold);
    margin-bottom: 16px;
  }
  .reserve-sub {
    color: var(--muted);
    margin-bottom: 32px;
    font-size: 1rem;
  }
  .reserve-note {
    margin-top: 16px;
    font-size: 0.75rem;
    color: var(--muted);
    font-style: italic;
  }
  ```

- [ ] **Step 3: Verify in browser**

  - Section has subtle gold-tinted background ✓
  - Heading "Reserve your table" in gold ✓
  - Gold filled "Reserve now" button ✓
  - Italic muted note below ✓

---

### Task 8: Location section and commit

**Files:**
- Modify: `index.html`
- Modify: `css/style.css`

- [ ] **Step 1: Generate the Google Maps embed code**

  1. Open Google Maps at maps.google.com
  2. Search: `Damrak 45, 1012 LG Amsterdam`
  3. Click "Share" → "Embed a map"
  4. Copy the `<iframe>` element

  The iframe will look similar to:
  ```html
  <iframe
    src="https://www.google.com/maps/embed?pb=..."
    width="600" height="350" style="border:0;"
    allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
  ```

- [ ] **Step 2: Add location HTML after reserve CTA (insert the real iframe src from Step 1)**

  ```html
  <!-- LOCATION -->
  <section class="section location">
    <div class="location-inner">
      <div class="location-text">
        <p class="section-label">Find us</p>
        <h2>We're upstairs</h2>
        <p class="location-desc">
          Located inside At James on Damrak 45, floor 2.<br>
          Step upstairs and discover Tsukimi Ramen.
        </p>
        <div class="location-details">
          <div class="location-item">
            <span class="location-key">Address</span>
            <span>Damrak 45, Floor 2, Amsterdam</span>
          </div>
          <div class="location-item">
            <span class="location-key">Hours</span>
            <span>09:00 – 23:00 daily</span>
          </div>
          <div class="location-item">
            <span class="location-key">Phone</span>
            <a href="tel:+31614351973">06 14 35 19 73</a>
          </div>
        </div>
      </div>
      <div class="location-map">
        <!-- PASTE GOOGLE MAPS IFRAME HERE -->
        <iframe
          src="PASTE_GOOGLE_MAPS_EMBED_SRC_HERE"
          width="100%" height="350" style="border:0;"
          allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </section>
  ```

- [ ] **Step 3: Add location CSS**

  ```css
  /* =============================================
     LOCATION
     ============================================= */
  .location-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
  }
  .location-desc {
    color: var(--muted);
    margin: 16px 0 32px;
    line-height: 1.8;
  }
  .location-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .location-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .location-key {
    font-size: 0.65rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold);
  }
  .location-item span:not(.location-key),
  .location-item a {
    font-size: 0.9rem;
    color: var(--muted);
  }
  .location-item a:hover { color: var(--gold); }
  .location-map iframe {
    display: block;
    width: 100%;
    filter: grayscale(1) invert(1) contrast(0.85);
  }

  @media (max-width: 768px) {
    .location-inner {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
  ```

  Note: `filter: grayscale(1) invert(1)` gives the map a dark appearance matching the site theme.

- [ ] **Step 4: Verify in browser**

  - Two-column layout: text left, map right ✓
  - Map appears dark-themed ✓
  - Address, hours, phone all visible ✓
  - Mobile: stacks to single column ✓

- [ ] **Step 5: Commit**

  ```bash
  git add index.html css/style.css
  git commit -m "feat: build index.html home page with all sections"
  ```

---

## Chunk 3: menu.html & about.html

### Task 9: menu.html

**Files:**
- Create: `menu.html`
- Modify: `css/style.css` (add menu page styles)

- [ ] **Step 1: Create menu.html with head, nav, footer (same as index.html)**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu — Tsukimi Ramen</title>
    <meta name="description" content="Fresh ramen, sides, and Japanese dishes. View the full menu at Tsukimi Ramen Amsterdam.">
    <link rel="icon" href="images/logo.png" type="image/png">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

    <input type="checkbox" id="nav-toggle" hidden>
    <nav class="site-nav">
      <a href="index.html" class="nav-logo"><span>☽</span> Tsukimi</a>
      <label for="nav-toggle" class="hamburger"></label>
      <ul class="nav-links">
        <li><a href="menu.html">Menu</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="tel:+31614351973" class="nav-reserve">Reserve</a></li>
      </ul>
    </nav>

    <main>
      <!-- MENU HEADER -->
      <div class="menu-page-header section-center">
        <p class="section-label">メニュー</p>
        <h1>Our Menu</h1>
      </div>

      <!-- RAMEN SECTION -->
      <!-- SIDES SECTION -->
      <!-- FRIED SECTION -->
      <!-- DESSERTS SECTION -->
      <!-- TOPPINGS SECTION -->
    </main>

    <footer class="site-footer">
      <div class="footer-logo"><span>☽</span> Tsukimi</div>
      <div class="footer-links">
        <a href="https://www.instagram.com/tsukimi_ramen" target="_blank" rel="noopener">@tsukimi_ramen</a>
        <a href="menu.html">Menu</a>
        <a href="about.html">About</a>
      </div>
      <div class="footer-info">
        Damrak 45, Floor 2 · Amsterdam<br>
        Open daily 09:00 – 23:00 · <a href="tel:+31614351973">06 14 35 19 73</a>
      </div>
      <div class="footer-copy">© 2026 Tsukimi Ramen</div>
    </footer>

  </body>
  </html>
  ```

- [ ] **Step 2: Add Ramen section inside `<main>`**

  Replace `<!-- RAMEN SECTION -->` with:

  ```html
  <section class="section menu-category">
    <h2 class="menu-cat-title">Ramen <span>ラーメン</span></h2>
    <div class="ramen-grid">

      <div class="ramen-card">
        <img src="images/pork-bone-ramen-nobg.png" alt="Tonkotsu Ramen">
        <div class="ramen-card-body">
          <div class="ramen-name-row">
            <h3>Tonkotsu Ramen</h3>
            <span class="ramen-jp">とんこつラーメン</span>
          </div>
          <p>Rich pork bone broth with noodles, chashu pork, bok choy, bamboo shoots, narutomaki, soft-boiled egg, seaweed, sesame and scallions</p>
          <span class="menu-price">€19.95</span>
        </div>
      </div>

      <div class="ramen-card">
        <img src="images/chicken-ramen-nobg.png" alt="Chicken Ramen">
        <div class="ramen-card-body">
          <div class="ramen-name-row">
            <h3>Chicken Ramen</h3>
            <span class="ramen-jp">チキンラーメン</span>
          </div>
          <p>Clear chicken broth with noodles, chicken fillet, bok choy, bamboo shoots, narutomaki, soft-boiled egg and scallions</p>
          <span class="menu-price">€18.95</span>
        </div>
      </div>

      <div class="ramen-card">
        <img src="images/shrimp-miso-ramen-nobg.png" alt="Shrimp Miso Ramen">
        <div class="ramen-card-body">
          <div class="ramen-name-row">
            <h3>Shrimp Miso Ramen</h3>
            <span class="ramen-jp">えびみそラーメン</span>
          </div>
          <p>Miso broth with noodles, fried shrimp, bok choy, bamboo shoots, narutomaki, soft-boiled egg, bonito flakes and scallions</p>
          <span class="menu-price">€19.95</span>
        </div>
      </div>

      <div class="ramen-card">
        <img src="images/vegetarian-ramen.png" alt="Vegetable Soy-Sauce Ramen">
        <div class="ramen-card-body">
          <div class="ramen-name-row">
            <h3>Vegetable Soy-Sauce Ramen</h3>
            <span class="ramen-jp">野菜醤油ラーメン</span>
          </div>
          <p>Soy sauce broth with noodles, bok choy, corn, broccoli, bamboo shoots, seaweed, dry onions and scallions</p>
          <span class="menu-price">€17.95</span>
        </div>
      </div>

    </div>
  </section>
  ```

- [ ] **Step 3: Add Side Dishes, Fried Dishes, Desserts sections**

  Replace the placeholder comments with:

  ```html
  <!-- SIDES -->
  <section class="section menu-category">
    <h2 class="menu-cat-title">Side Dishes <span>サイドメニュー</span></h2>
    <div class="menu-list">
      <div class="menu-item has-photo">
        <img src="images/seaweed-salad.png" alt="Seasoned seaweed salad">
        <div class="menu-item-info">
          <span class="menu-item-name">Seasoned seaweed salad</span>
          <span class="menu-price">€7.95</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/edamame.png" alt="Edamame">
        <div class="menu-item-info">
          <span class="menu-item-name">Edamame</span>
          <span class="menu-price">€7.50</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/kimchi.png" alt="Kimchi">
        <div class="menu-item-info">
          <span class="menu-item-name">Kimchi <em>(Korean fermented vegetables)</em></span>
          <span class="menu-price">€6.50</span>
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-item-info">
          <span class="menu-item-name">Soft boiled seasoned eggs</span>
          <span class="menu-price">€7.50</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/dumplings.png" alt="Chicken dumplings">
        <div class="menu-item-info">
          <span class="menu-item-name">Pan-fried chicken dumplings</span>
          <span class="menu-price">€7.50 (5x) / €14.50 (10x)</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/gyoza.png" alt="Vegetable gyoza">
        <div class="menu-item-info">
          <span class="menu-item-name">Pan-fried vegetable gyoza</span>
          <span class="menu-price">€7.50 (5x) / €14.50 (10x)</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/pancake-sticks.png" alt="Pancake sticks">
        <div class="menu-item-info">
          <span class="menu-item-name">Japanese savory pancake sticks (2 pieces)</span>
          <span class="menu-price">€9.95</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FRIED -->
  <section class="section menu-category">
    <h2 class="menu-cat-title">Fried Dishes <span>揚げ物</span></h2>
    <div class="menu-list">
      <div class="menu-item has-photo">
        <img src="images/octopus-balls.png" alt="Octopus balls">
        <div class="menu-item-info">
          <span class="menu-item-name">Octopus balls (4 pieces)</span>
          <span class="menu-price">€8.95</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/fried-chicken.png" alt="Japanese fried chicken">
        <div class="menu-item-info">
          <span class="menu-item-name">Japanese fried chicken (5 pieces)</span>
          <span class="menu-price">€9.95</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/spring-rolls.png" alt="Spring rolls">
        <div class="menu-item-info">
          <span class="menu-item-name">Spring rolls (5 rolls)</span>
          <span class="menu-price">€8.50</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/fried-shrimp.png" alt="Fried shrimp">
        <div class="menu-item-info">
          <span class="menu-item-name">Ebifry / fried shrimp (4 pieces)</span>
          <span class="menu-price">€9.95</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/chicken-onion-skewers.png" alt="Chicken onion skewers">
        <div class="menu-item-info">
          <span class="menu-item-name">Chicken onion skewers (2 pieces)</span>
          <span class="menu-price">€7.95</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/dumplings.png" alt="Fried chicken dumplings">
        <div class="menu-item-info">
          <span class="menu-item-name">Fried chicken dumplings</span>
          <span class="menu-price">€7.50 (5x) / €14.50 (10x)</span>
        </div>
      </div>
      <div class="menu-item">
        <div class="menu-item-info">
          <span class="menu-item-name">Fried vegetable dumplings</span>
          <span class="menu-price">€7.50 (5x) / €14.50 (10x)</span>
        </div>
      </div>
    </div>
  </section>

  <!-- DESSERTS -->
  <section class="section menu-category">
    <h2 class="menu-cat-title">Desserts <span>デザート</span></h2>
    <div class="menu-list">
      <div class="menu-item">
        <div class="menu-item-info">
          <span class="menu-item-name">Dango sticks</span>
          <span class="menu-price">€7.95</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/ice-cream.jpg" alt="Mochi ice cream">
        <div class="menu-item-info">
          <span class="menu-item-name">Mochi ice cream</span>
          <span class="menu-price">€6.95</span>
        </div>
      </div>
      <div class="menu-item has-photo">
        <img src="images/tofu-pudding.png" alt="Tofu pudding">
        <div class="menu-item-info">
          <span class="menu-item-name">Tofu pudding (almond flavor)</span>
          <span class="menu-price">€6.95</span>
        </div>
      </div>
    </div>
  </section>
  ```

- [ ] **Step 4: Add Toppings & Sauces section**

  ```html
  <!-- TOPPINGS -->
  <section class="section menu-category toppings-section">
    <h2 class="menu-cat-title">Extra Toppings <span>トッピング</span></h2>
    <div class="toppings-grid">
      <div class="topping-item"><span>Chashu pork (3x)</span><span class="menu-price">€3.50</span></div>
      <div class="topping-item"><span>Chicken fillet (3x)</span><span class="menu-price">€3.00</span></div>
      <div class="topping-item"><span>Shrimp (3x)</span><span class="menu-price">€3.50</span></div>
      <div class="topping-item"><span>Ajitama egg</span><span class="menu-price">€1.50</span></div>
      <div class="topping-item"><span>Scallions</span><span class="menu-price">€1.00</span></div>
      <div class="topping-item"><span>Corn</span><span class="menu-price">€1.00</span></div>
      <div class="topping-item"><span>Bamboo shoots</span><span class="menu-price">€1.50</span></div>
      <div class="topping-item"><span>Boiled bok choy</span><span class="menu-price">€1.50</span></div>
      <div class="topping-item"><span>Portion noodles</span><span class="menu-price">€3.50</span></div>
      <div class="topping-item"><span>Dry seaweed</span><span class="menu-price">€1.50</span></div>
    </div>

    <h2 class="menu-cat-title" style="margin-top:48px;">Sauces <span>ソース</span></h2>
    <div class="toppings-grid">
      <div class="topping-item"><span>Japanese mayonnaise</span><span class="menu-price">€1.50</span></div>
      <div class="topping-item"><span>Sweet chili sauce</span><span class="menu-price">€1.50</span></div>
      <div class="topping-item"><span>Hot sauce (Sriracha)</span><span class="menu-price">€2.00</span></div>
      <div class="topping-item"><span>Takoyaki sauce</span><span class="menu-price">€1.50</span></div>
      <div class="topping-item"><span>Okonomiyaki sauce</span><span class="menu-price">€1.50</span></div>
      <div class="topping-item"><span>Soy sauce</span><span class="menu-price">€1.00</span></div>
      <div class="topping-item"><span>Teriyaki sauce</span><span class="menu-price">€1.00</span></div>
    </div>
  </section>
  ```

- [ ] **Step 5: Add menu page CSS to css/style.css**

  ```css
  /* =============================================
     MENU PAGE
     ============================================= */
  .menu-page-header {
    padding-top: 80px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--gold-border);
  }
  .menu-category { border-bottom: 1px solid rgba(255,255,255,0.06); }
  .menu-cat-title {
    font-size: 2rem;
    margin-bottom: 40px;
    color: var(--text);
  }
  .menu-cat-title span {
    display: block;
    font-size: 0.85rem;
    letter-spacing: 4px;
    color: var(--gold);
    margin-top: 4px;
  }

  /* Ramen cards grid */
  .ramen-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  .ramen-card {
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
  }
  .ramen-card img {
    width: 100%;
    max-height: 220px;
    object-fit: contain;
    padding: 24px;
    background: #1a1a1a;
  }
  .ramen-card-body {
    padding: 24px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ramen-name-row h3 { font-size: 1.3rem; margin-bottom: 4px; }
  .ramen-jp {
    font-size: 0.75rem;
    letter-spacing: 2px;
    color: var(--gold);
    font-family: var(--font-body);
  }
  .ramen-card-body p {
    font-size: 0.85rem;
    color: var(--muted);
    line-height: 1.6;
    flex: 1;
  }

  /* Menu list (sides, fried, desserts) */
  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 16px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .menu-item:last-child { border-bottom: none; }
  .menu-item img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
  }
  .menu-item-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    gap: 16px;
  }
  .menu-item-name {
    font-size: 0.9rem;
    color: var(--text);
  }
  .menu-item-name em {
    font-size: 0.8rem;
    color: var(--muted);
    font-style: italic;
  }
  .menu-price {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--gold);
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* Toppings grid */
  .toppings-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
  .topping-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    font-size: 0.85rem;
    gap: 16px;
  }
  .topping-item span:first-child { color: var(--muted); }

  @media (max-width: 768px) {
    .ramen-grid { grid-template-columns: 1fr; }
    .toppings-grid { grid-template-columns: 1fr; }
    .menu-item-info { flex-direction: column; align-items: flex-start; gap: 4px; }
  }
  ```

- [ ] **Step 6: Open menu.html in browser and verify**

  - Header with "Our Menu" and Japanese subtitle ✓
  - Ramen section: 2-column grid, each card has photo (background-removed), name, Japanese name in gold, description, price ✓
  - Side dishes, fried dishes: row list with small photo thumbnails where available, text-only where no photo ✓
  - Desserts: same list format ✓
  - Toppings: 2-column compact grid ✓
  - Mobile (resize to < 768px): ramen grid → 1 column, toppings → 1 column ✓

---

### Task 10: about.html

**Files:**
- Create: `about.html`

- [ ] **Step 1: Create about.html**

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About — Tsukimi Ramen</title>
    <meta name="description" content="Tsukimi Ramen is a casual ramen spot above the busy streets of Damrak, Amsterdam.">
    <link rel="icon" href="images/logo.png" type="image/png">
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>

    <input type="checkbox" id="nav-toggle" hidden>
    <nav class="site-nav">
      <a href="index.html" class="nav-logo"><span>☽</span> Tsukimi</a>
      <label for="nav-toggle" class="hamburger"></label>
      <ul class="nav-links">
        <li><a href="menu.html">Menu</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="tel:+31614351973" class="nav-reserve">Reserve</a></li>
      </ul>
    </nav>

    <main>
      <section class="section about-section">
        <div class="about-inner">
          <p class="section-label">About us</p>
          <h1>Tsukimi Ramen</h1>
          <div class="about-body">
            <p>
              Tsukimi Ramen is a casual ramen spot located in the heart of Amsterdam,
              on the second floor of Damrak 45 — inside At James, which has been
              welcoming guests since 2011.
            </p>
            <p>
              Inspired by the energy of the city, we offer a simple and welcoming space
              just above the busy streets. Step upstairs and take a break from the crowds.
            </p>
            <p>
              Our focus is on fresh, quality ramen made for a quick, comfortable meal
              in the city.
            </p>
          </div>
          <div class="about-ctas">
            <a href="menu.html" class="btn btn-outline">View our menu</a>
            <a href="tel:+31614351973" class="btn btn-gold">Reserve a table</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="footer-logo"><span>☽</span> Tsukimi</div>
      <div class="footer-links">
        <a href="https://www.instagram.com/tsukimi_ramen" target="_blank" rel="noopener">@tsukimi_ramen</a>
        <a href="menu.html">Menu</a>
        <a href="about.html">About</a>
      </div>
      <div class="footer-info">
        Damrak 45, Floor 2 · Amsterdam<br>
        Open daily 09:00 – 23:00 · <a href="tel:+31614351973">06 14 35 19 73</a>
      </div>
      <div class="footer-copy">© 2026 Tsukimi Ramen</div>
    </footer>

  </body>
  </html>
  ```

- [ ] **Step 2: Add about page CSS to css/style.css**

  ```css
  /* =============================================
     ABOUT PAGE
     ============================================= */
  .about-section { padding-top: 80px; }
  .about-inner {
    max-width: 720px;
  }
  .about-inner h1 {
    margin-bottom: 40px;
  }
  .about-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 48px;
  }
  .about-body p {
    font-size: 1.05rem;
    color: var(--muted);
    line-height: 1.9;
  }
  .about-ctas {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .about-ctas { flex-direction: column; }
    .about-ctas .btn { text-align: center; }
  }
  ```

- [ ] **Step 3: Open about.html in browser and verify**

  - Page heading "Tsukimi Ramen" in Cormorant Garamond ✓
  - 3 paragraphs in muted off-white, comfortable line height ✓
  - Two buttons: "View our menu" (outline) + "Reserve a table" (gold filled) ✓
  - Mobile: buttons stack vertically ✓

- [ ] **Step 4: Commit**

  ```bash
  git add menu.html about.html css/style.css
  git commit -m "feat: build menu.html and about.html"
  ```

---

## Chunk 4: Final Polish & Deploy

### Task 11: Cross-page consistency check

**Files:** All HTML files (read-only verification)

- [ ] **Step 1: Check all internal links work**

  Open each page and click every link. Verify:
  - Nav logo → `index.html` ✓ (from all 3 pages)
  - "Menu" nav link → `menu.html` ✓ (from all 3 pages)
  - "About" nav link → `about.html` ✓ (from all 3 pages)
  - "Reserve" nav link → phone dialer opens ✓
  - "Our Ramen →" on home → `menu.html` ✓
  - Instagram link → Instagram profile opens in new tab ✓
  - Footer phone → phone dialer ✓

- [ ] **Step 2: Mobile check on all 3 pages**

  In Chrome DevTools (F12 → Toggle device toolbar), set to iPhone 14 (390px wide). Check each page:
  - Nav hamburger visible, links hidden ✓
  - Tap hamburger: links appear below nav ✓
  - Hero text readable, buttons stacked ✓
  - Menu preview cards single-column ✓
  - Location map full width ✓
  - All tap targets feel comfortable (min 44px) ✓

- [ ] **Step 3: Check all images load**

  Open each page. Open DevTools → Network tab → filter "Img". Reload page. Confirm no 404 errors on any image request. If an image 404s, the filename in HTML doesn't match `images/` — fix the filename.

---

### Task 12: HTML validation

- [ ] **Step 1: Validate index.html**

  Go to `validator.w3.org`. Upload or paste `index.html`. Fix any errors (warnings are ok). Common issues: missing `alt` attributes, unclosed tags.

- [ ] **Step 2: Validate menu.html and about.html**

  Repeat validation for both pages.

- [ ] **Step 3: Commit final polish**

  ```bash
  git add -A
  git commit -m "fix: validation fixes and final polish"
  ```

---

### Task 13: Netlify deploy

- [ ] **Step 1: Create the production folder**

  The deploy folder is the project root: `tsukimi-ramen/`. It contains `index.html`, `menu.html`, `about.html`, `css/`, and `images/`.

- [ ] **Step 2: Deploy to Netlify**

  1. Go to `netlify.com` and sign up / log in (free)
  2. Click "Add new site" → "Deploy manually"
  3. Drag the `tsukimi-ramen/` folder onto the Netlify drop zone
  4. Netlify gives you a random URL like `https://random-name.netlify.app` — verify the site works there

- [ ] **Step 3: Connect custom domain**

  1. In Netlify site settings → "Domain management" → "Add custom domain"
  2. Enter `tsukimiramen.nl`
  3. Follow Netlify's instructions to update DNS records at your domain registrar
  4. Wait for SSL certificate (usually 5–30 minutes)
  5. Visit `https://tsukimiramen.nl` and confirm the site loads with HTTPS ✓

- [ ] **Step 4: Final commit**

  ```bash
  git add -A
  git commit -m "chore: site live at tsukimiramen.nl"
  ```

---

## Future: Guestplan Integration

When Guestplan is set up, replace all instances of `href="tel:+31614351973"` on the Reserve buttons with the Guestplan booking URL. There are 4 occurrences total: nav link, hero CTA, reserve section button, footer area. Search the codebase for `tel:+31614351973` to find them all.
