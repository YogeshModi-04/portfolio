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

- **Headshot photo** — in place. Lives at `src/assets/headshot.jpg` and is
  imported in `src/data/content.js` (`profile.photoUrl`) rather than dropped
  in `public/` — this project builds to a single self-contained HTML file
  (`vite-plugin-singlefile`), so images need to go through Vite's asset
  pipeline as a JS import to get base64-inlined into that one file. To swap
  the photo later, replace `src/assets/headshot.jpg` with a new image (same
  filename, roughly square works best) or update the import path in
  `content.js`.
- **Track record** — `experience` in `content.js` lists all four real roles
  (Zummit Infolabs → Sunbots Innovations → Cimcon Infotech → Mindfire
  Solutions), each as a compressed set of themed bullets (lead-in + detail)
  with quantified metrics from the resume on file (`Yogesh_Modi_resume.pdf`,
  one level up from this folder). Rendered by `Experience.jsx` as an
  editorial timeline. The Mindfire entry intentionally keeps the client
  anonymized as "an enterprise client" (the resume names them, WWWSCO) —
  confirm there's no NDA issue before naming them publicly if you change that.
- **Education & Certifications** — a compact block under the Track record
  timeline (`education` / `certifications` in `content.js`). Certifications
  are the four real Coursera credentials (the ML Specialization + its three
  component courses) each with a "Verify" link to its accomplishment URL.
- **Skills / "Tools of the trade"** — `skills` in `content.js` mirrors the
  resume's nine categories; rendered by `Skills.jsx` as **editorial rows**
  (category label in a left column, tool chips flowing right, dividers
  between) to match the Experience timeline's visual system.
- **Contact** — LinkedIn and GitHub are now both in `profile` and shown as
  icon buttons; the section uses an icon-based method list (Email, Location)
  plus the working form, with a "Typically respond within 24 hours" note.
  Phone number still omitted (resume has +91 8141761889 if you want it).
- **Project list** — pulled from recent work notes plus the two products you
  named (SMARTON smart glasses, XWCare). Swap in whichever case studies you'd
  rather lead with, and add real repo links if public. The SMARTON entry in
  `projects` still describes your role generically ("contributed AI/ML
  engineering") — the quantified accuracy numbers for that work now live in
  the Track record timeline instead, but feel free to tighten the project
  card copy too.

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

## The contact form (Vercel Function)

The Contact section has a real form (name, email/phone, message). It posts to
`/api/contact`, a serverless function (`api/contact.js`) that Vercel deploys
automatically alongside the static site — no separate backend to host.

The function sends the message via **[Resend](https://resend.com)**, a
transactional email API with a free tier (3,000 emails/month, 100/day, no
credit card required). To make it work:

1. Create a free Resend account at [resend.com](https://resend.com) and grab
   an API key from the dashboard.
2. In your Vercel project → **Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = the key from step 1
3. Redeploy (or it'll pick it up on the next deploy).

Out of the box this sends from Resend's shared `onboarding@resend.dev`
address, which only delivers to the email your Resend account was signed up
with — fine for testing. To let anyone's message reach you reliably, verify
your own domain in Resend (Resend walks you through adding a couple of DNS
records at your registrar) and change `FROM_EMAIL` in `api/contact.js` to an
address on that domain.

Until `RESEND_API_KEY` is set, or in local dev (`npm run dev`, which doesn't
run the `/api` function), submitting the form fails gracefully and shows an
"email me directly" link instead — that's expected, not a bug. It also has a
hidden honeypot field to filter out simple bots.

## Deploying to Vercel with yogeshmodi.in

1. Push this project to a GitHub repo (or use the Vercel CLI: `npx vercel`
   from this folder — it'll prompt you to log in and deploy directly without
   Git).
2. At [vercel.com](https://vercel.com), sign up free and **Import Project**
   from that GitHub repo. Vercel auto-detects Vite — no config needed.
3. Add the `RESEND_API_KEY` environment variable (see above) before or after
   the first deploy.
4. Once deployed, go to the project's **Settings → Domains** and add
   `yogeshmodi.in` (and `www.yogeshmodi.in` if you want both).
5. Vercel will show you the exact DNS records to add. Since the domain is
   registered at Hostinger, go to **hPanel → Domains → yogeshmodi.in → DNS /
   Nameservers** and either:
   - point the **A record** for `@` and a **CNAME** for `www` at the values
     Vercel gives you (keeps Hostinger as your DNS), or
   - switch to Vercel's nameservers if you'd rather manage DNS there.
6. DNS changes can take a few minutes to a few hours to propagate. Vercel
   auto-issues a free SSL certificate once it verifies the domain.

Every future `git push` redeploys automatically — no manual upload step.

## Project structure

```
api/contact.js           ← Vercel serverless function for the contact form
src/
  data/content.js        ← all copy/content — edit this first
  assets/headshot.jpg    ← hero photo, imported (not in public/) so it inlines into the single-file build
  components/            ← Hero, About, Practices, Experience, Projects, Affiliates, Skills, FAQ, Contact
  hooks/useReveal.js      ← scroll-reveal animation hook
  index.css               ← design tokens (colors, type, spacing) + global styles
```
