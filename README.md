# Yogesh Modi — Portfolio

A single-page React portfolio (black & white, plain/professional visual style)
built with Vite. Content lives in `src/data/content.js` — edit that one file to
update copy, projects, or affiliated products without touching any component.

The project builds to `dist/index.html` with the **CSS inlined** via
`vite-plugin-singlefile`, plus one hashed JS bundle in `dist/assets/` (only Google
Fonts load externally). The JS is deliberately *not* inlined: an inline script
would force the Content Security Policy to allow `'unsafe-inline'` scripts. Everything
served alongside it lives in `public/` and is copied to `dist/` verbatim on build:
`robots.txt`, `sitemap.xml`, `llms.txt`, `.well-known/ard.json`, `og-image.jpg`,
and **`images/`** — the headshot plus the project and case-study visuals, all WebP.

**Images are deliberately *not* imported.** `assetsInlineLimit` is effectively
unlimited, so any imported asset is base64-inlined into the HTML and ships
before first paint regardless of `loading="lazy"`. Serving them from `public/`
instead cut the page from 483 kB to **262 kB** (gzip 198 kB → **78 kB**). The
trade: `dist/index.html` is no longer portable on its own — it needs the
`images/` and `assets/` folders beside it.

## Positioning

The site is written for **two audiences at once — recruiters and independent
clients** — and leads with end-to-end ownership rather than a single specialty:

- Primary positioning: **"AI/ML Architect & Consultant"** (hero eyebrow, About
  intro, FAQ). `profile.role` is still "AI/ML Systems Architect & Engineer" and
  appears under the hero name as the sub-role.
- Hero tagline "Turning ambiguous problems into systems that ship."
- The FAQ "Is Yogesh open to new opportunities?" answer is explicitly split into
  "For teams hiring:" and "For clients:" so neither audience has to hunt for
  their part. **Keep this dual framing if you edit copy.**
- No current employer is named anywhere in the UI. The About narrative frames
  the career start at **Sunbots Innovations LLP**; there are no "Mindfire"
  references left in the rendered site (see Handoff notes on dead data).

## Sections & structure

Rendered top-to-bottom (`src/App.jsx`): Nav → Hero → About → Practices
("How I work") → Experience ("Problems I've solved") → Projects
("Selected builds") → Affiliates ("Products") → Testimonials
("What people say") → FAQ ("Quick answers") → Contact.

```
src/
  data/content.js        ← all copy/content + image paths — edit this first
  components/            ← Nav, Hero, About, Practices, Experience, Projects,
                            Affiliates, Testimonials, FAQ, Contact
  hooks/useReveal.js     ← scroll-reveal hook (adds `is-visible` to `[data-reveal]`)
  index.css              ← design tokens + global styles (incl. `.card` glow, nav,
                            `.figure` primitive, reduced-motion rules)
public/
  robots.txt             ← allows all crawlers + points to the sitemap
  sitemap.xml            ← single homepage URL
  llms.txt               ← plain-text site summary for LLMs (llmstxt.org format)
  .well-known/ard.json   ← Agentic Resource Discovery manifest (Person + WebSite)
  og-image.jpg           ← 1200×630 social share image (kept JPG, see below)
  images/                ← headshot + 6 diagrams + 1 product shot, all .webp,
                            referenced by relative URL (`./images/…`) from content.js
design/diagrams/         ← editable SVG sources for the 6 diagrams (not served)
vercel.json              ← build config, security headers (CSP, COOP, XFO, …), caching
index.html               ← app shell + all SEO meta, canonical, Open Graph/Twitter,
                            JSON-LD schema (Person / WebSite / ProfilePage / FAQPage)
```

### Content notes

- **About** — a journey-driven, trust-first narrative (`about.bio` in
  `content.js`): who / how I started / proof (real outcome numbers) / what I do /
  how I work. Heading is just **"About"**; there is no facts box beside the
  photo.
- **Practices — "How I work"** — a single merged section (`practices.title` +
  `practices.items`). Written ~80% non-technical / 20% technical for a client
  audience, with a couple of proof points woven in.
- **Experience — "Problems I've solved"** — three Problem/Approach/Impact case
  studies (`caseStudies`) plus a **Certifications** block (`certifications`).
  There is no Education block and no dates/role titles here.
- **Projects — "Selected builds"** — four builds (`projects`). Cards slide in
  from the left on scroll, matching the testimonial animation.
- **Affiliates — "Products"** — `affiliates` (currently XWCare), kept visually
  distinct from the case studies.
- **Testimonials** — `testimonials`, 3-up card grid; cards slide in staggered.
- **Photo** — `public/images/headshot.webp`, referenced by `profile.photoUrl` in
  `content.js`. Shown uncropped at natural aspect (720×666), max-width 420px,
  with explicit `width`/`height` + `loading="lazy"` to avoid layout shift. On
  desktop it floats right inside the bio and the copy wraps around it; at
  ≤860px the float drops so it stacks **above** the text, centred. It is first
  in the DOM, so reading order matches visual order at every width. In dark mode
  it gets `brightness(0.78)` — its studio backdrop sits near luminance 198 and
  glares against the `#111` page. To swap it: replace the file (keep it a JPG)
  and update `profile.photoUrl` if the extension changes.

### Images (diagrams + product shots)

Projects and case studies can each carry a visual. Add these fields to any entry
in `projects` or `caseStudies`:

| field | purpose |
| --- | --- |
| `image` | relative path, e.g. `"./images/foo.webp"` |
| `imageAlt` | **required** — describe the architecture, not "a diagram" |
| `imageWidth` / `imageHeight` | source dimensions; prevents layout shift |
| `imageKind` | `"photo"` for product shots; omit for diagrams |

Both sections share the `.figure` primitive in `index.css` — don't duplicate it
per component. Each visual links to its own full-size original with a caption,
which matters because labels shrink on narrow screens.

Two things to watch when adding a diagram:

- **Diagrams are rasters.** The served files are lossless WebP rendered at 2× from
  the SVGs in `design/diagrams/`. To change a diagram, edit the SVG there, render
  it (e.g. headless Chrome with `--force-device-scale-factor=2`), and re-encode:
  `Image.open(png).convert("RGBA").save("x.webp", lossless=True, method=6)`.
  Text is baked in, so a copy change (e.g. a headline metric) must be made in the
  SVG too. Because they are static images, the SVG animations no longer play.
- **Palette.** The site is black & white. `theft-detection-activity` is the
  one asset using colour (red for the failed baseline, a green status dot).

## SEO

All SEO metadata is **static in `index.html`'s `<head>`** so crawlers get it
without executing JS (the app itself is client-rendered React).

- **Title / description / keywords / author** meta.
- **`<link rel="canonical">`** → `https://www.yogeshmodi.in/`. **This must match
  the host Vercel actually serves.** The live deployment serves on **`www`** and
  301-redirects the apex → `www`, so all SEO URLs (canonical, og:url, sitemap
  `<loc>`, robots `Sitemap:`, JSON-LD) use `www`. If you ever flip Vercel to make
  the apex primary, update all of those to the apex too, or Google will see the
  canonical as a redirect and refuse to index it.
- **`<meta name="robots">`** → `index, follow, max-image-preview:large, …`
  (nothing on this single public page is intentionally noindexed).
- **Open Graph + Twitter** cards, using `public/og-image.jpg` (1200×630). It stays
  a JPG on purpose: some social crawlers (notably LinkedIn and Facebook) don't
  reliably render WebP share images.
- **`public/llms.txt`** and **`public/.well-known/ard.json`** — agent-facing
  summaries (Lighthouse "Agentic Browsing"). `llms.txt` needs an H1 and links;
  `ard.json` needs `entries[]` with a `urn:air:…` identifier, `displayName`,
  `type`, and exactly one of `url`/`data`. Keep both in sync with `content.js`.
- **JSON-LD** (`application/ld+json`): one `@graph` with **Person**, **WebSite**,
  **ProfilePage**, and **FAQPage** (all FAQ Q&As → eligible for FAQ rich
  results). If you edit the FAQ copy in `content.js`, update the FAQPage block in
  `index.html` too — they are maintained separately.
- **`public/sitemap.xml`** (homepage) and **`public/robots.txt`** (allows all +
  sitemap reference), served at `/sitemap.xml` and `/robots.txt`.
- **Header hierarchy** — a single `<h1>` (hero name), section titles are `<h2>`,
  card/item titles are `<h3>`; no skipped levels.

## Performance (Core Web Vitals)

- `dist/index.html` is **~14 KB** and the JS bundle **~248 KB (gzip ~74 KB)**. Images are served from
  `public/images/` rather than inlined — see the note at the top. Inlining them
  cost 483 KB / 198 KB gzip, because base64 defeats compression.
- The headshot is a **WebP** (720×666, ~17 KB). Never import a photo as a PNG; as a
  PNG it previously pushed the page to ~1.7 MB.
- The SMARTON product shot is a **lossless WebP** (~15 KB) — it keeps its alpha
  channel, so don't flatten it to JPG.
- The diagrams are lossless WebP at 2× (45–105 KB each, ~450 KB in total), larger
  than the ~69 KB of SVG they replaced; they are lazy-loaded.
- JS is a hashed file in `assets/` served `immutable` for a year; `images/` is
  cached a day with stale-while-revalidate (filenames aren't hashed).
- Every image has explicit `width`/`height` + `height:auto` (no CLS) and
  `loading="lazy"` / `decoding="async"`. Now that they are separate files, the
  lazy attribute actually defers them.
- Fonts use `preconnect` + `display=swap`, and the Google Fonts stylesheet loads
  as `media="print"` (flipped to `all` in `main.jsx`) so it doesn't block render.

## Security headers

Set in `vercel.json`: a strict **CSP** (`script-src 'self'`, `object-src 'none'`,
`base-uri 'none'`, `frame-ancestors 'none'`, Trusted Types required), **COOP**
`same-origin`, `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`,
`Permissions-Policy` and HSTS. Consequences to remember:

- **No inline scripts or inline event handlers** — they're blocked. Put behaviour
  in the bundle. (`style-src` allows `'unsafe-inline'` because components render
  `<style>` tags.)
- Adding a third-party script, font, image or API host means adding it to the CSP.
- Headers only apply on Vercel; `npm run dev` / `preview` don't send them.
- Scroll-reveal and card animations use compositor-friendly `opacity`/`transform`
  and respect `prefers-reduced-motion` (global rule in `index.css`).

## Security / HTTPS

`vercel.json` sets an **HSTS** response header
(`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`) for
all routes, and `index.html` carries a `upgrade-insecure-requests` directive.
Vercel additionally provisions SSL and redirects HTTP→HTTPS automatically for the
custom domain. (These only take effect on the deployed site, not the local dev
server.) `preload` makes the domain eligible for the browser HSTS preload list,
which requires a one-time submission at <https://hstspreload.org>.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Building locally

```bash
npm run build
```

Outputs `dist/index.html`, `dist/assets/` (the JS bundle) plus the `public/` files
(`robots.txt`, `sitemap.xml`, `llms.txt`, `.well-known/`, `og-image.jpg`, `images/`). Vercel runs this automatically on every deploy —
you don't need to build by hand.

## Contact / scheduling

No contact form or backend. The Contact section offers a **Schedule a meeting**
button (a Google Calendar appointment schedule that auto-adds a Google Meet link, `profile.booking`), a `mailto:` link, and LinkedIn/GitHub
icons. All plain external links — no API keys or env vars. Change the booking
link via `profile.booking` in `content.js` (and the matching line in `public/llms.txt`).

## Deploying to Vercel with yogeshmodi.in

1. Push to a GitHub repo (or `npx vercel` from this folder).
2. On [vercel.com](https://vercel.com), **Import Project** — Vite is
   auto-detected; `vercel.json` sets the build command, output dir and HSTS.
3. **Settings → Domains** → the live setup serves on **`www.yogeshmodi.in`** with
   the apex `yogeshmodi.in` redirecting to it. Keep `www` as the primary so it
   matches the `<link rel=canonical>` (which points at `www`).
4. Add the DNS records Vercel shows at your registrar (Hostinger). SSL is issued
   automatically once the domain verifies.

Every future `git push` redeploys automatically.

## Sharing a quick preview (no deploy)

`dist/` can be zipped and shared — **but `index.html`, `assets/` and `images/` must
travel together.** (Browsers block module scripts on `file://`, so serve the folder,
e.g. `npx serve dist`, rather than double-clicking.) Image paths are relative (`./images/…`)
precisely so a copied `dist/` folder works offline; the HTML alone will render
with broken images. Emailing the single file, or publishing it as a Claude
Artifact, no longer carries the app or the visuals — host the folder instead, or point at
the deployed site. Contact/scheduling links work in any preview.
