# Yogesh Modi — Portfolio

A single-page React portfolio (black & white, plain/professional visual style)
built with Vite. Content lives in `src/data/content.js` — edit that one file to
update copy, projects, or affiliated products without touching any component.

The project builds to a **single self-contained `dist/index.html`** (all JS/CSS
inlined via `vite-plugin-singlefile`; only Google Fonts load externally). Static
files that must be served alongside it — `robots.txt`, `sitemap.xml`,
`og-image.jpg` — live in `public/` and are copied to `dist/` verbatim on build.

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
  data/content.js        ← all copy/content — edit this first
  assets/headshot.jpg    ← photo, shown in the About section (imported, not in public/,
                            so it inlines into the single-file build)
  components/            ← Nav, Hero, About, Practices, Experience, Projects,
                            Affiliates, Testimonials, FAQ, Contact
  hooks/useReveal.js     ← scroll-reveal hook (adds `is-visible` to `[data-reveal]`)
  index.css              ← design tokens + global styles (incl. `.card` glow, nav,
                            reduced-motion rules)
public/
  robots.txt             ← allows all crawlers + points to the sitemap
  sitemap.xml            ← single homepage URL
  og-image.jpg           ← 1200×630 social share image
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
- **Projects — "Selected builds"** — six builds (`projects`). Cards slide in
  from the left on scroll, matching the testimonial animation.
- **Affiliates — "Products"** — `affiliates` (currently XWCare), kept visually
  distinct from the case studies.
- **Testimonials** — `testimonials`, 3-up card grid; cards slide in staggered.
- **Photo** — `src/assets/headshot.jpg`, imported in `content.js`
  (`profile.photoUrl`). Shown uncropped at natural aspect (~1006×930), max-width
  340px, with explicit `width`/`height` + `loading="lazy"` to avoid layout
  shift. To swap it: replace the file (a JPG keeps the page small — see CWV
  below) and, if the extension changes, update the import in `content.js`.

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
- **Open Graph + Twitter** cards, using `public/og-image.jpg` (1200×630).
- **JSON-LD** (`application/ld+json`): one `@graph` with **Person**, **WebSite**,
  **ProfilePage**, and **FAQPage** (all FAQ Q&As → eligible for FAQ rich
  results). If you edit the FAQ copy in `content.js`, update the FAQPage block in
  `index.html` too — they are maintained separately.
- **`public/sitemap.xml`** (homepage) and **`public/robots.txt`** (allows all +
  sitemap reference), served at `/sitemap.xml` and `/robots.txt`.
- **Header hierarchy** — a single `<h1>` (hero name), section titles are `<h2>`,
  card/item titles are `<h3>`; no skipped levels.

## Performance (Core Web Vitals)

- The headshot is an **optimized JPG** (~76 KB) rather than PNG — this keeps the
  single-file `dist/index.html` around **355 KB** (gzip ~152 KB). Saving the
  photo as PNG previously pushed the page to ~1.7 MB; **keep the photo a JPG.**
- The photo has explicit `width`/`height` + `height:auto` (no CLS) and
  `loading="lazy"` / `decoding="async"`.
- Fonts use `preconnect` + `display=swap`.
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

Outputs a single self-contained `dist/index.html` plus the `public/` files
(`robots.txt`, `sitemap.xml`, `og-image.jpg`). Vercel runs this automatically on
every deploy — you don't need to build by hand.

## Contact / scheduling

No contact form or backend. The Contact section offers a **Schedule a meeting**
button (Calendly, `profile.calendly`), a `mailto:` link, and LinkedIn/GitHub
icons. All plain external links — no API keys or env vars. Change the booking
link via `profile.calendly` in `content.js`.

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

Because the build is one self-contained file, `dist/index.html` can be opened
directly, emailed, or published as a Claude Artifact. If published as an
Artifact, strip the outer `<!doctype>/<html>/<head>/<body>` wrappers first (the
Artifact host adds its own). Contact/scheduling links work in any preview.
