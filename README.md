# Cursor MCP: Figma → HTML/CSS/JS Landing Page

## Overview
This project converts a Figma design (Landing Page Sample - 03) into a responsive, accessible static site using semantic HTML, modern CSS, and minimal JS.

- Source design: [Figma – Landing Page Sample - 03](https://www.figma.com/design/JOlnxvCEWsZtu3lGTIZISf/Landing-Page-Sample---03?node-id=1-15&t=ZdZnUJu4ShQAap3J-4)
- Live repo: `https://github.com/Manmohan2526/cursor-mcp`

## What we implemented
- Project setup and public GitHub repository
- Semantic HTML structure aligned to Figma frames and tokens
- Global design tokens (colors, spacing, radii) and responsive grid
- Header with banner, navigation (mobile toggle), and CTA
- Hero section with image and stats cards (200+, 10k+, 16+)
- Features grid (4 cards) matching spacing/typography
- Featured Properties cards (images, pills, pricing row)
- Testimonials (3 cards, avatars, stars mask)
- FAQ section with accessible `<details>/<summary>`
- Contact form (full Figma layout) with selects, radios, message, consent
- Footer with subscription field, link columns, and social icons
- Assets pipeline: downloaded images and SVG icons from Figma
- Animations: lightweight scroll reveal and hover/CTA micro-interactions

## Key files
- `index.html` – page structure and sections
- `styles.css` – tokens, layout systems, responsive styles, animations
- `script.js` – nav toggle, form handlers, scroll reveal
- `assets/` – exported images and `assets/icons/` svg icon set

## Challenges and how we solved them
- Figma assets export naming rules: required `.png`/`.svg` and safe filenames. Fixed by exporting with validated names (e.g., `property_1.png`).
- Remote push rejected (README initialized on GitHub): resolved via `git pull --rebase origin main` then push.
- Mapping complex Figma layout to semantic HTML: created reusable utility layouts (e.g., `.layout_RBRLUI`, grids) and section-specific classes.
- Token parity and dark background contrast: defined CSS variables for palette and borders to match Grey/08, Grey/15, etc.
- Mobile navigation: added compact toggle with absolute positioned dropdown for small viewports.
- Performance/UX: avoided heavy JS; used IntersectionObserver for reveal and CSS masks for stars.
- Cross-platform line endings in SVGs: noted Git warnings (LF→CRLF) but safe for web use.

## How to run locally
1. Clone repo
2. Open `index.html` in a browser (or use a simple static server)

```bash
# optional
npx serve .
```

## Next steps
- Deployment: set up GitHub Pages or Vercel for live preview
- Asset optimization: image compression, responsive `srcset` for hero and cards
- Accessibility pass: tab order, ARIA labels for interactive elements, color contrast audit
- Test coverage: basic e2e checks with Playwright for nav, forms, and anchors
- Content integration: replace placeholder copy with production text and real links
- Theming: extract colors/spacing to a design-tokens JSON for future automation
- Automation: CI to validate links, run Lighthouse, and check formatting

## Credits
- Design source: Figma file linked above
- Implementation: Generated and refined with Cursor MCP assistants
