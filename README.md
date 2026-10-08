# Jorge Valladares — Portfolio

Personal portfolio of Jorge Andrés Valladares Blanco, Computer Engineer (TEC, 2026) and software developer based in Costa Rica.

**Live site:** https://jorgevalladares.vercel.app/

## What's inside

- Projects with screenshots, feature lists and links to code (ERP e-invoicing for Costa Rica's Hacienda v4.4, multi-company GPS tracking and HR platforms, SkyRoute, ETAI lab reservations, distributed systems).
- Experience and education timeline, certifications (Cisco Networking Academy) and downloadable CV.
- Spanish / English toggle, light / dark theme.

## Stack

React 19 · TypeScript · Vite · Framer Motion · React Router · plain CSS

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts: `npm run build` (type-check + production build to `dist/`), `npm run preview`, `npm run lint`.

## Project structure

```
src/
  data.ts          # all site content, in Spanish and English
  components/      # Nav, Hero, About, Projects, Resume, Certifications, Contact
  pages/           # route-level pages
  styles/          # one CSS file per section
public/            # images, badges, CV.pdf
```

All text lives in `src/data.ts`; the components only render it.

## Deploy

Static build (`dist/`). Configured for Vercel (`vercel.json`) and Netlify (`public/_redirects`) with SPA rewrites.
