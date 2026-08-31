# Yogesh Modi — Portfolio

A single-page React portfolio (black & white, plain/professional visual style)
built with Vite. Content lives in `src/data/content.js` — edit that one file to
update copy, projects, skills, or affiliated products without touching any
component.

## Positioning

The site is written for **two audiences at once — recruiters and independent
clients**. The framing throughout leads with end-to-end ownership rather than
a single specialty:

- Role: **"AI/ML Systems Architect & Engineer"** (`profile.role`) — agentic AI
  is presented as a strength within the broader AI/ML scope, not the whole
  identity.
- Hero eyebrow "Architecture · AI/ML Engineering · Delivery", Focus meta
  "Architect · Build · Scale · Deliver" — vision/method, not a tech-stack list.
- The FAQ "Is Yogesh open to new opportunities?" answer is explicitly split
  into "For teams hiring:" and "For clients:" so neither audience has to hunt
  for their part. Keep this dual framing if you edit copy.

## Before you publish, please review

- **Headshot photo** — in place, in the **Background (About) section** (not
  the hero). Lives at `src/assets/headshot.jpg` and is imported in
  `src/data/content.js` (`profile.photoUrl`) rather than dropped in `public/`
  — this project builds to a single self-contained HTML file
  (`vite-plugin-singlefile`), so images need to go through Vite's asset
  pipeline as a JS import to get base64-inlined into that one file. To swap
  the photo later, replace `src/assets/headshot.jpg` with a new image (a
  portrait crop works best; it's shown at a 4:5 ratio) or update the import
  path in `content.js`.
- **Track record → "Problems I've solved"** — the Experience section is now a
  **problem-solving showcase**, not a career timeline. `caseStudies` in
  `content.js` holds three case studies (the Mindfire multi-agent platform +
  SMARTON + Theft Detection), each with **Problem / Approach / Impact** and a
  tag row; rendered by `Experience.jsx`. There are intentionally **no dates,
  role titles, or company names** here — the full chronological career detail
  is meant to live in the downloadable résumé (not yet added; see below). The
  enterprise client stays anonymized as "the client" (the resume names them,
  WWWSCO) — confirm there's no NDA issue before naming them.
- **Education & Certifications** — a compact block under the case studies
  (`education` / `certifications` in `content.js`). Certifications are the
  four real Coursera credentials (the ML Specialization + its three component
  courses) each with a "Verify" link to its accomplishment URL.
- **Testimonials** — `testimonials` in `content.js`, rendered by
  `Testimonials.jsx` as a 3-up card grid (quote + avatar initials + linked
  name + linked company), placed right before Contact. ⚠️ **The three quotes
  (Deep Parmar / Xwits, Ravi Jadav / Sunbots, Jay Bhavsar / Infinite Castle)
  are Claude-drafted from notes you gave — each named person should approve or
  edit their own wording before this goes fully public.**
- **Résumé download — NOT built yet.** You said the résumé download will carry
  the full technical/career detail. The PDF is `../Yogesh_Modi_resume.pdf`
  (one level up). To add it: copy it into `src/assets/`, `import` it in a
  component, and link a download button (importing inlines it into the
  single-file build so it works offline / in previews).
- **Skills / "Tools of the trade"** — `skills` in `content.js` mirrors the
  resume's nine categories; rendered by `Skills.jsx` as **editorial rows**
  (category label in a left column, tool chips flowing right, dividers
  between) to match the case-study block's visual system.
- **Contact** — LinkedIn and GitHub are both in `profile` and shown as icon
  buttons; the section pairs an icon-based method list (Email, Location) with
  a scheduling card whose **Schedule a meeting** button opens the Calendly
  link in `profile.calendly` (`calendly.com/skmodiyogesh/30min`), plus an
  "or email me directly" fallback and a "Typically respond within 24 hours"
  note. There is no contact form or backend — scheduling and email only.
- **Working style ("Approach")** — both columns are now written in plain,
  client-readable language AND grounded in real resume facts. "How I
  Engineer" keeps the technical substance (multi-agent platform, accuracy
  gains, 80% deploy-time cut, behaviour tracing) in plain words; "How I Work
  With Clients" speaks to a non-technical buyer. The earlier fabricated
  claims (civil-engineering spec docs, CPU-only OCR benchmark, RAGAS/DeepEval)
  have been removed from here and from `about.bio` (now a chunked, ~50/50
  technical/plain array).
- **Project list** — six case studies in `projects` (SMARTON, Agentic
  Shopping Assistant, Engineering-Spec Extraction Pipeline, Two-Pass Spec
  Summarizer, GPT-2 LoRA Fine-Tune, Natural-Language SQL Agent). Swap in
  whichever you'd rather lead with, and add real repo links if public. The
  SMARTON entry still describes your role generically ("contributed AI/ML
  engineering") — the quantified accuracy numbers for that work now live in
  the Track record case studies instead, but feel free to tighten the card
  copy. Note SMARTON and the multi-agent work now appear in **both** the Track
  record case studies and this Projects section — worth deciding whether to
  differentiate or consolidate them.

## Affiliated products

`src/data/content.js` has an `affiliates` array (currently just XWCare)
rendered by `src/components/Affiliates.jsx` as its own "Products" section,
kept visually distinct from the case studies you personally engineered. The
XWCare card carries real detail sourced from the live product page
(`xwits.dev/products/xwcare`) — tagline, description, and highlight bullets —
credited to **Xwits Developers Pvt. Ltd.** (linked to `xwits.dev`), with two
buttons: **Know more** (`link`) → the product page, and **Book demo**
(`demoLink`) → the Calendly booking link. Add more entries the same way.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Building locally

```bash
npm run build
```

This outputs a single self-contained `dist/index.html` (all JS/CSS inlined,
only Google Fonts loaded externally). You don't need to run this yourself for
Vercel — Vercel runs it automatically on every deploy.

## Sharing a quick preview (no deploy)

Because the build is one self-contained file, it can be shared as a link
without hosting. The single-file `dist/index.html` can be opened directly in
a browser, emailed, or published as a Claude Artifact for a shareable URL.
One caveat: if published as an Artifact, strip the outer
`<!doctype>/<html>/<head>/<body>` wrappers from `dist/index.html` first (the
Artifact host adds its own skeleton). The contact/scheduling links (Calendly,
email, social) all work in any preview since they're plain external links.

## Scheduling & contact

There is no contact form or serverless backend. The Contact section offers:

- **Schedule a meeting** — a button linking to the Calendly URL in
  `profile.calendly` (`calendly.com/skmodiyogesh/30min`), opening a 30-minute
  booking page in a new tab.
- **Email** — a `mailto:` link to `profile.email`.
- **Social** — LinkedIn and GitHub icon buttons.

To change the booking link, edit `profile.calendly` in `src/data/content.js`.
All of these are plain external links, so nothing needs a backend, an API key,
or environment variables.

## Deploying to Vercel with yogeshmodi.in

1. Push this project to a GitHub repo (or use the Vercel CLI: `npx vercel`
   from this folder — it'll prompt you to log in and deploy directly without
   Git).
2. At [vercel.com](https://vercel.com), sign up free and **Import Project**
   from that GitHub repo. Vercel auto-detects Vite — no config needed, and no
   environment variables are required.
3. Once deployed, go to the project's **Settings → Domains** and add
   `yogeshmodi.in` (and `www.yogeshmodi.in` if you want both).
4. Vercel will show you the exact DNS records to add. Since the domain is
   registered at Hostinger, go to **hPanel → Domains → yogeshmodi.in → DNS /
   Nameservers** and either:
   - point the **A record** for `@` and a **CNAME** for `www` at the values
     Vercel gives you (keeps Hostinger as your DNS), or
   - switch to Vercel's nameservers if you'd rather manage DNS there.
5. DNS changes can take a few minutes to a few hours to propagate. Vercel
   auto-issues a free SSL certificate once it verifies the domain.

Every future `git push` redeploys automatically — no manual upload step.

## Project structure

```
src/
  data/content.js        ← all copy/content — edit this first
  assets/headshot.jpg    ← photo, shown in the Background section (imported, not in public/, so it inlines into the single-file build)
  components/            ← Hero, About, Practices, Experience, Projects, Affiliates, Skills, Testimonials, FAQ, Contact
  hooks/useReveal.js      ← scroll-reveal hook (adds `is-visible` to `[data-reveal]`; also drives the testimonial slide-in)
  index.css               ← design tokens + global styles (incl. the `.card` glow and reduced-motion rules)
```

(No `api/` directory — the site is fully static, with contact handled by the
Calendly / email / social links described above.)

## Visual effects

- **Card glow** — a soft, theme-aware border halo on the global `.card` class
  (`index.css`): a `::after` box-shadow that pulses via `opacity` (compositor-
  friendly) and brightens on hover. It applies to every card — the XWCare
  product card, the Projects/"Selected builds" cards, and the testimonials.
  Tune it in one place (`.card::after` / `@keyframes card-glow`).
- **Testimonial slide-in** — testimonial cards slide in **left-to-right**,
  staggered, as they scroll into view (`Testimonials.jsx`, on top of
  `useReveal`).
- **Hero text glow** — a subtle `text-shadow` on the hero name and eyebrow
  (`Hero.jsx`).
- All of the above respect `prefers-reduced-motion` (global rule in
  `index.css`).
