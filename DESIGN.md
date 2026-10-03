---
name: Santo Vidro
description: Clear glass over finished work. A clean, minimal vidraçaria site in the client's teal and navy, built to turn a visit into one WhatsApp tap.
colors:
  glass-white: "#f5f9fa"
  surface-white: "#ffffff"
  teal-tint: "#e5f1f2"
  navy-ink: "#022946"
  navy-soft: "#3c5568"
  logo-teal: "#1cb2a9"
  logo-teal-hover: "#21c4ba"
  teal-text: "#0b7a74"
  night-glass: "#061a2c"
  night-surface: "#0b2640"
  night-tint: "#0e304e"
  night-ink: "#e8f1f4"
  night-ink-soft: "#a9becb"
  night-teal-text: "#4fd3ca"
  google-star: "#fbbc04"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 6.4vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  pill: "999px"
  box: "20px"
  sm: "12px"
  pixel: "3px"
spacing:
  gutter: "20px"
  gutter-sm: "32px"
  section: "96px"
  section-md: "128px"
  gallery-gap: "20px"
  container: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.logo-teal}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.logo-teal-hover}"
  button-ink:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.glass-white}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 1.6rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    height: "52px"
    padding: "0 1.6rem"
  button-ghost-hover:
    textColor: "{colors.teal-text}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.navy-soft}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 1.1rem"
  chip-selected:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.glass-white}"
  tile-media:
    backgroundColor: "{colors.teal-tint}"
    rounded: "{rounded.box}"
  tile-arrow:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    size: "42px"
  tile-arrow-hover:
    backgroundColor: "{colors.logo-teal}"
    textColor: "{colors.navy-ink}"
  offer-plain:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.box}"
    padding: "36px"
  offer-main:
    backgroundColor: "{colors.navy-ink}"
    textColor: "{colors.glass-white}"
    rounded: "{rounded.box}"
    padding: "36px"
  review-card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.box}"
    padding: "24px"
  fab:
    backgroundColor: "{colors.logo-teal}"
    textColor: "{colors.navy-ink}"
    rounded: "{rounded.pill}"
    size: "60px"
  band:
    backgroundColor: "{colors.logo-teal}"
    textColor: "{colors.navy-ink}"
  nav-link:
    textColor: "{colors.navy-soft}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.navy-ink}"
  logo-plate:
    rounded: "{rounded.sm}"
---

# Design System: Santo Vidro

## Overview

**Creative North Star: "The Clear Pane"**

The page behaves like a pane of glass laid over finished work. Photographs of real installations carry every section; the interface around them stays transparent, precise and quiet. It refuses the stock vidraçaria page (blue illustration, purple pills, centered banner) and replaces it with a cool, glass-white ground tinted toward the logo teal, navy type, and a single accent that is spent where a decision happens.

The system is clean and minimal by brief, and it earns that with restraint rather than emptiness: one display face, one body face, three radii, no decorative gradient except the glass pane itself, and a single ornament borrowed from the logo, a cluster of small teal squares. Surfaces are flat and separated by hairline inset rings and tonal bands; shadows are soft, long and rare. The only full-bleed colour moment is the teal contact band at the end, where the one job of the page (tap WhatsApp) is finished.

Motion is short and physical: things press, lift slightly, and reveal once. A single light-glare sweep crosses the hero photo on load, the way light moves across a real pane. Everything respects reduced motion.

**Key Characteristics:**
- Photos lead; UI chrome is transparent, hairline and precise.
- One accent: logo teal (#1CB2A9) for fills, a deeper teal for text, navy text on every teal fill.
- Three-radius system: pill for anything tappable, 20px for containers, 12px for small plates.
- Glass pane, glare sweep and teal pixel squares are the only signature devices.
- Light is the default; a full navy dark scheme follows `prefers-color-scheme`.

## Colors

A cool glass-white world with navy ink and one teal accent; the dark scheme keeps the same hues and inverts the lightness.

All colour tokens are stored as space-separated RGB channels in CSS custom properties so Tailwind can apply alpha (`bg-ink/10`, `border-ink/10`); the frontmatter lists the resolved hex values.

### Primary
- **Logo Teal** (`#1cb2a9`, `--accent`): the client's logo colour. Fills only: primary buttons, the contact band, the floating button, nav underline, pixel squares, hover state of arrow buttons. Never used as text on light surfaces (it fails contrast there).
- **Logo Teal Hover** (`#21c4ba`): the brighter fill on pointer hover of the primary button.
- **Deep Teal Text** (`#0b7a74`, `--accent-ink`): teal for links, labels and focus rings on light surfaces (about 5:1 on the ground). In the dark scheme it lifts to **Night Teal Text** (`#4fd3ca`).

### Secondary
- **Navy Ink** (`#022946`, `--ink`): the client's menu navy. All headings and primary text, the `ink` button, the selected chip, and the emphasised offer card. It is also the text colour on every teal fill (5.6:1).

### Neutral
- **Glass White** (`#f5f9fa`, `--bg`): page ground, tinted faintly toward teal so it reads as cool glass rather than paper.
- **Surface White** (`#ffffff`, `--surface`): cards, review cards, plain offer card, arrow buttons.
- **Teal Tint** (`#e5f1f2`, `--tint`): section wash (portfolio and reviews sit on it at 60%), image placeholders.
- **Navy Soft** (`#3c5568`, `--ink-soft`): body copy, nav links, inactive chips (7.3:1 on the ground).
- **Hairline** (`--line`, navy at 10 to 22% alpha): every border and inset ring. Borders are never solid grey.
- **Review Star** (`#fbbc04`): the Google star colour, used only on star ratings so they read as the real Google rating.

### Dark scheme
Night Glass `#061a2c` (ground), Night Surface `#0b2640`, Night Tint `#0e304e`, Night Ink `#e8f1f4`, Night Ink Soft `#a9becb`. The logo teal and the navy-on-teal pairing do not change. The emphasised offer card flips from navy to teal fill. The logo sits on a white plate (12px radius) so the original file is never recoloured.

### Named Rules
**The Fill-Not-Text Rule.** Logo teal `#1cb2a9` is a fill. Teal that carries words is the deeper `#0b7a74` (light) or `#4fd3ca` (dark). Navy text sits on every teal fill.

**The One Accent Rule.** Teal is the only chromatic colour. Any second hue (blue illustration, purple pill, gradient wash) is off-world. Stars are the single documented exception.

**The Hairline Rule.** Containers are defined by a 1px inset ring of navy at 10% alpha or by a tonal step (white on glass-white, tint on glass-white), not by solid borders or heavy shadows.

## Typography

**Display Font:** Bricolage Grotesque (variable, 200 to 800; self-hosted woff2; fallback Schibsted Grotesk, system sans)
**Body Font:** Schibsted Grotesk (variable, 100 to 900; self-hosted woff2; fallback system sans)

**Character:** Bricolage is a characterful grotesque with tight optical forms that gives headlines a crafted, slightly industrial confidence; Schibsted is calm, wide and highly legible for Portuguese copy. Both are loaded with `font-display: swap`.

### Hierarchy
- **Display** (600, `clamp(2.7rem, 6.4vw, 4.5rem)`, 1.02, -0.03em): the hero H1 only ("Excelência em vidros sob medida."), two lines.
- **Headline** (600, 2.25rem rising to 3rem at md, 1.05, -0.03em; the about and contact headings rise to 3.75rem at md, 1.02): section H2s.
- **Title** (600, 1.5rem; 1.875rem for the emphasised offer): tile names, offer names, footer column heads at 1.125rem. Set in Bricolage via `.font-display`.
- **Body** (400, 1.125rem to 1.25rem lede, relaxed leading ~1.625): hero lede capped at 34rem; copy stays short and factual. Paragraphs use `text-wrap: pretty`; headings use `text-wrap: balance`.
- **Label** (500 to 600, 0.9 to 1rem, normal tracking, sentence case): nav links (0.95rem, 500), chips (0.95rem, 500), buttons (1rem, 600), tile CTA (0.9rem, 600).

### Named Rules
**The Two-Face Rule.** Bricolage for h1, h2, h3 and `.font-display`; Schibsted for everything else. Headings carry -0.03em tracking; body and labels carry none.

**The Sentence-Case Rule.** All labels, buttons and nav are sentence case at normal tracking. No uppercase micro-labels, no letterspaced eyebrows.

## Layout

A single-page, section-stacked layout in a 1320px centered container with 20px gutters (32px from the `sm` breakpoint) and 96px section padding (128px from `md`). Sections alternate between the glass-white ground and a 60% teal-tint wash to mark rhythm without rules. The nav is sticky; anchors use `scroll-padding-top: 88px`.

The hero is an asymmetric 12-column split: 7 columns of type and CTA, 5 columns of a tall photo in the glass pane. Services are a photo bento, the portfolio is a CSS-column masonry (2 columns, 3 from 1024px, gaps 10 / 16 / 20px), the hiring options are three staggered cards with the middle one emphasised, reviews are a column masonry (1, 2 from 700px, 3 from 1100px). About is typographic. The final section is the full-bleed teal band with the map.

Mobile is the primary context: tap targets are 44px minimum (buttons 52px, social 48px, FAB 60px), the tile CTA label hides below 420px, and navigation collapses into a grid-row accordion. A floating WhatsApp button replaces the nav CTA once the hero leaves view.

## Elevation & Depth

Hybrid and restrained: flat tonal surfaces with hairline rings at rest, and long, soft, low-opacity shadows only on objects that should read as lifted glass (the hero pane, the emphasised offer, the lightbox image, the primary button, the FAB).

### Shadow Vocabulary
- **Pane** (`box-shadow: inset 0 0 0 1px rgb(ink / 0.12), 0 40px 70px -40px rgb(ink / 0.55)`): the hero glass frame.
- **Primary button** (`0 1px 0 rgb(255 255 255 / 0.35) inset, 0 10px 24px -10px rgb(accent / 0.75)`): a faint top highlight plus a teal under-glow; hover deepens it to `0 16px 30px -12px`. In dark scheme the glow turns neutral black (`0 12px 24px -12px rgb(0 0 0 / 0.6)`).
- **Emphasised offer** (`0 40px 70px -40px rgb(ink / 0.8)`): the one card that sits above the others.
- **Nav scrolled** (`0 8px 30px -18px rgb(ink / 0.35)`): appears only after the page leaves the top.
- **Review hover** (`inset 0 0 0 1px rgb(accent / 0.5), 0 24px 40px -28px rgb(ink / 0.4)`): the ring turns teal and the card lifts 3px.
- **Lightbox image** (`0 40px 80px -30px rgb(0 0 0 / 0.7)`).
- **FAB** (`0 1px 0 rgb(255 255 255 / 0.4) inset, 0 18px 34px -12px rgb(ink / 0.55)`).
- **Backdrop blur:** the sticky nav is `bg/85` with `backdrop-blur-xl`; the lightbox backdrop is `rgb(2 20 36 / 0.88)` with a 6px blur. Blur is used only on those two overlays.

### Named Rules
**The Long-Soft Shadow Rule.** Shadows use a large blur with a strongly negative spread (-10 to -40px) so they fall below an object like light through glass, never as a hard or all-around halo.

**The Rest-Is-Flat Rule.** Cards at rest have no drop shadow, only a hairline inset ring. Lift (translateY -3 to -4px) is a hover response on pointer devices.

## Shapes

Three radii, assigned by role, never mixed within a role.

- **Pill** (`999px`, `--r-pill`): everything tappable: buttons, chips, arrow buttons, social buttons, FAB, skip link, scrollbar thumb.
- **Box** (`20px`, `--r-box`, Tailwind `rounded-box`): every container: tile media, offer cards, review cards, glass pane, lightbox image, map frame.
- **Small** (`12px`, `--r-sm`): small plates only: the dark-scheme logo plate. The pane's inner photo uses `calc(20px - 8px)` = 12px so its curve is concentric with the 10px-padded frame.
- **Pixel square** (`3px`): the ornament. Small teal squares at varied sizes (6 to 16px) and fading opacity (1 to 0.2) cluster off the top-right corner of the hero pane, popping in once with a 70ms stagger.

Focus rings are 2px, offset 3px, 8px radius, in deep teal; they switch to navy on the teal band, teal on the navy offer card, and white in the lightbox.

### Named Rules
**The Pill-Means-Tap Rule.** If it is a pill, you can press it. Containers are never pills; controls are never 20px boxes.

**The Logo-Echo Rule.** The only ornament is the logo's pixel squares, always teal, always clustered at a corner or edge of a glass surface, never scattered across a section or used as a pattern.

## Components

### Buttons
- **Shape:** full pill (999px), 52px tall, 1.6rem side padding, weight 600, 1rem, icon (Phosphor, 1.5rem) leading with 0.6rem gap.
- **Primary:** logo-teal fill, navy text, top highlight and teal under-glow. Hover: brighter teal, 1px lift, icon tilts -8deg and scales 1.12. Used for every WhatsApp CTA.
- **Ink:** navy fill, glass-white text; hover at 88% alpha. On the teal band it becomes navy fill with white text and hovers to `#0a3a5f`.
- **Ghost:** transparent with a 1.5px inset ring at 22% navy; hover turns the ring and text deep teal.
- **Text link:** `.link-arrow`, deep-teal 600 label with an arrow that nudges 4px right on hover.
- **States:** `:active` scales to 0.97 (and wins over hover lift via a specificity bump); hover effects apply only under `(hover: hover) and (pointer: fine)`.

### Navigation
Sticky bar on `bg/85` with blur and a bottom hairline; a shadow appears once scrolled (IntersectionObserver sentinel). Links are 0.95rem, 500, navy-soft; a 2px teal underline scales in from the left on hover and persists on the active section (`aria-current`, driven by a scrollspy). A compact pill CTA sits at the end. Below `lg` it collapses into a menu toggle that opens a grid-row accordion (`0fr` to `1fr`, 0.3s) with large 1.125rem links; the panel is `inert` when closed.

### Service Tiles
Photo-first bento. The media is a 20px container on teal-tint; the name (Bricolage 1.5rem) and a pill arrow button sit beneath the image, not over it. Hover scales the image to 1.045 over 0.6s and fires one glare sweep; the arrow button fills teal and rotates -45deg. The CTA label ("Pedir orçamento") hides below 420px.

### Chips and Gallery
Filter chips: 44px pill, 1.5px hairline ring, navy-soft text; selected (`aria-pressed`) fills navy with glass-white text. The portfolio is a column masonry of tiles with per-item aspect ratios (`--ar`), cursor `zoom-in`, and a short staggered re-enter (`0.35s`, 40ms steps, capped at 8) after filtering.

### Lightbox
Native `<dialog>` at full viewport; navy 88% backdrop with 6px blur; image capped at `min(92vw, 900px)` by `82dvh` with a 20px radius; 52px translucent-white pill controls (prev, next, close); arrow keys navigate, Escape and backdrop click close. Opens with a 0.35s fade and a 0.45s scale-up from 0.96.

### Offer Cards
Three ways of hiring, staggered. Plain cards: white fill, hairline ring, 20px radius, 24 to 36px fluid padding, check-list rows. The middle card is emphasised: navy fill with glass-white text and the long shadow; in dark scheme it flips to a teal fill with navy text and an inverted navy button. Hover lifts 4px.

### Review Cards
White 20px cards with a hairline ring in a column masonry; 24px padding; Google-yellow stars (18px). Hover (pointer only) lifts 3px, turns the ring teal at 50% and adds a soft long shadow. Reviews link back to Google.

### Contact Band
The only full-bleed colour field: logo-teal fill, navy text, navy-ink buttons, focus rings in navy, with a desaturated map frame (`grayscale(0.25) contrast(0.95)`).

### Floating Action Button
60px teal pill with a WhatsApp glyph, fixed bottom-right (16px plus safe-area inset). Hidden until the hero leaves view, then enters in 0.35s ease-out (0.18s on exit); hover (pointer) lifts and scales 1.04.

### Hero Glass Pane (signature)
A 10px-padded frame with a 145deg gradient from 70% white to 12% teal, a hairline ring and the Pane shadow, holding the tall hero photo at a concentric 12px radius. Teal pixel squares break off its top-right corner. One 105deg white glare band sweeps across the photo once, 0.9s after load (1.5s), and again on tile or gallery hover (1.1s).

### Motion
Tokens: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` for entrances, lifts and presses; `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` for the glare sweep only. Durations: press 0.15 to 0.18s, state colour 0.2s, arrow and nav underline 0.25 to 0.35s, scroll reveal 0.6s (16px rise, 60ms delay steps), hero entrance 0.7s (14px rise with a 3px blur clearing, 70ms steps), pixel pop-in 0.7s. Under `prefers-reduced-motion: reduce`, transforms and blurs are removed, entrances become opacity-only fades, and the glare is hidden.

## Do's and Don'ts

### Do:
- **Do** let photos of finished work carry each section; keep copy short and factual.
- **Do** use logo teal `#1cb2a9` as a fill with navy `#022946` text, and deep teal `#0b7a74` (dark: `#4fd3ca`) whenever teal carries text.
- **Do** assign radii by role: pill for tappables, 20px for containers, 12px for small plates.
- **Do** define containers with a 1px inset navy ring at about 10% alpha or a tonal step.
- **Do** wrap hover-only effects in `(hover: hover) and (pointer: fine)` and give every control an `:active` press (scale 0.94 to 0.97).
- **Do** keep every WhatsApp CTA one tap, as a teal pill, with the section named in the message.
- **Do** use the original logo file untouched; on the dark scheme put it on a white plate.
- **Do** keep the pixel-square ornament to one corner cluster per glass surface.

### Don't:
- **Don't** use stock vidraçaria tropes: blue glass illustrations, purple pills, centered banner heroes.
- **Don't** introduce a second accent hue or a decorative gradient; the pane gradient is the only gradient.
- **Don't** use `#1cb2a9` for text on light surfaces.
- **Don't** put a pill radius on a container or a 20px radius on a control.
- **Don't** add uppercase, letterspaced micro-labels or eyebrows above headings.
- **Don't** use hard offset shadows or heavy all-around halos; shadows are long, soft and negative-spread.
- **Don't** redraw, recolour or restyle the logo.
- **Don't** publish prices or any claim the client cannot back up.
- **Don't** animate layout properties or let any entrance exceed about 0.7s.

## Not canonized (build defects and drift)

Recorded so future surfaces do not inherit them: a few literals sit outside the token layer (`#0a3a5f` band-button hover, `#fff` in the lightbox, glare, dark logo plate and band button text, and `rgb(33 196 186)` for teal hover); the `.pane` gradient white stop is a literal rather than a token; Tailwind runs from the CDN at runtime, so utility tokens duplicate the CSS custom properties in an inline config; icons come from the Phosphor icon font over a CDN rather than inline SVG. None of these are design rules.
