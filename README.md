# Sushil Kumar — Portfolio

A premium, animated personal portfolio built with **React + Vite** and plain **CSS** (no Tailwind, no UI kit). Dark glassmorphism theme, scroll-reveal animations, a custom cursor, magnetic buttons, animated stats, a tilt-effect project grid, and a fully working section for internship outreach.

## Quick start

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

Requires Node 18+.

## Project structure

```
src/
  components/     One component + matching .css file per UI piece
  hooks/          useReveal, useTypingEffect, useCountUp, useTilt
  data/content.js Single source of truth for all text content
  styles/         variables.css (design tokens) + base.css (reset/utilities)
  App.jsx         Wires every section together
  main.jsx        React entry point
public/
  favicon.svg, robots.txt
index.html         SEO, Open Graph, Twitter cards, structured data
```

## Customize

- **All content** (name, bio, education, skills, projects, contact info) lives in `src/data/content.js` — edit it once and every section updates.
- **Colors, type scale, spacing, radii, shadows** are CSS custom properties in `src/styles/variables.css`.
- **Resume**: drop your PDF into `public/resume.pdf` — the Download Resume buttons already point at `/resume.pdf`.
- **Profile photo**: the hero and any future avatar spots currently show a monogram placeholder (`SK`). Swap `<span className="hero-photo-placeholder">` in `Hero.jsx` for an `<img>` once you have a photo, and add it under `src/assets/`.
- **Project screenshots**: set an `image` URL on any entry in `src/data/content.js` → `projects` and the card will use it automatically; until then it shows a placeholder.

## Wiring up the contact form

The contact form in `Contact.jsx` is fully interactive but currently simulates a send. To make it real, sign up for a free [EmailJS](https://www.emailjs.com/) account and replace the commented block in `handleSubmit` with:

```js
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
  .then(() => setStatus('sent'))
  .catch(() => setStatus('error'));
```

(Install with `npm install @emailjs/browser` and import it at the top of the file.)

## Notes on "bonus" integrations

A few items from the original wish-list — live GitHub contribution graphs, LeetCode stats, and a persistent visitor counter — need a personal API key or backend service to show real data, so they were intentionally left out rather than shipped as fake numbers. The `data/content.js` file and component structure are set up so any of these can be dropped in later as their own small component (e.g. `GithubStats.jsx`) without touching the rest of the site.

## Performance & accessibility

- Reduced motion is respected site-wide (`prefers-reduced-motion`).
- All interactive elements have visible keyboard focus states.
- Images use `loading="lazy"`; the particle canvas pauses when the tab is hidden.
- Semantic landmarks (`header`, `main`, `section`, `footer`) throughout.
