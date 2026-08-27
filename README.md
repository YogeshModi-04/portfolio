# Yogesh Modi — Portfolio

A single-page React portfolio (black & white, plain/professional visual style)
built with Vite. Content lives in `src/data/content.js` — edit that one file to
update copy, projects, skills, or affiliated products without touching any
component.

## Before you publish, please review

I built this from career details on file rather than an uploaded resume, so a
few things are best-guesses — check these in `src/data/content.js` before it
goes live:

- **No LinkedIn/phone number** — only email and GitHub are on the contact section
  and in `profile` (I had no confirmed LinkedIn URL or phone to include). Add them
  in `src/data/content.js` (`profile` object) and `Contact.jsx` if you want them shown.
- **Headshot photo** — the hero currently shows an "YM" initials placeholder
  (you said you'd add a real photo later). To swap it in: drop an image file
  into `public/` (e.g. `public/headshot.jpg`), then set `profile.photoUrl` in
  `src/data/content.js` to its path (e.g. `"/headshot.jpg"`) and rebuild. A
  roughly square image, at least 400×400px, works best.
- **Project list** — pulled from recent work notes plus the two products you
  named (SMARTON smart glasses, XWCare). Swap in whichever case studies you'd
  rather lead with, and add real repo links if public.
- **SMARTON project description** — I described your involvement generically
  ("contributed AI/ML engineering") since I didn't have specifics on your exact
  role/scope on that product. Tighten this up in `projects` in `content.js`.
- **"Education"** — no section included; I had no confirmed degree/institution
  details. Add an `education` array to `content.js` and a matching component
  if you want one.
- **Certifications section removed** per your request — the data and component
  are gone, not just hidden. If you want a slimmed-down version back later, it's
  in the version history of this project.

## Affiliated products

`src/data/content.js` has an `affiliates` array (currently just XWCare) rendered
by `src/components/Affiliates.jsx` as its own section, kept visually distinct
from the case studies you personally engineered. Add more entries the same way.

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
  components/            ← Hero, About, Practices, Experience, Projects, Affiliates, Skills, FAQ, Contact
  hooks/useReveal.js      ← scroll-reveal animation hook
  index.css               ← design tokens (colors, type, spacing) + global styles
```
