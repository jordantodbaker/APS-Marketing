# Ace Project Services — marketing site

Marketing website for Ace Project Services (project controls consulting for
EPC and heavy civil contractors). Built with TanStack Start, React 19,
Tailwind v4 and Prisma on Postgres, deployed to Vercel.

## Stack

- **TanStack Start + Router** — file routes in `src/routes`, SSR on Vercel via `api/handler.js`.
- **Tailwind CSS v4** — theme tokens (brand blue / ink charcoal) in `src/styles/app.css`.
- **Prisma 7 + Postgres** — one table, `ContactSubmission`, for leads from the contact form.
- **Vercel** — `vercel.json` rewrites everything to the SSR handler; `/api/healthcheck` pings the DB.

## Content lives in `src/data`

| File | What it holds |
| --- | --- |
| `site.ts` | Company name, tagline, email, phone, nav |
| `services.ts` | The six service pages (copy, deliverables, FAQs) |
| `platforms.ts` | The platform cards (P6, HeavyBid, HeavyJob, Spectrum, Power BI, custom apps) |

Adding a service = adding an entry to `services.ts`. The `/services/$slug` route,
footer, home page grid and contact form select all read from it.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Home: hero, platform strip, services grid, process, why us, CTA |
| `/services` | Services index |
| `/services/$slug` | Service detail |
| `/platforms` | Platforms we work in |
| `/about` | About |
| `/contact` | Contact form (writes to Postgres), `?interest=<slug>` preselects the service |

## Local development

```bash
cp .env.example .env     # set DATABASE_URL
npm install              # runs prisma generate
npm run db:push          # creates the ContactSubmission table
npm run dev              # http://localhost:3000
```

The site renders fully without a database. Only submitting the contact form
needs `DATABASE_URL`; without it the form shows an error pointing to the
company email.

## Deploy (Vercel)

1. Import the repo in Vercel. Framework preset: **Other**. The build command and
   output directory come from `vercel.json`.
2. Set `DATABASE_URL` (Neon / Vercel Postgres) and optionally `VITE_SITE_URL`.
3. Run `npx prisma db push` (or `prisma migrate deploy`) against the production DB once.

## Before launch

- Replace the placeholder phone / email / address in `src/data/site.ts`.
- Add a PNG touch icon if wanted (`public/apple-touch-icon.png`, 180×180) and reference it in `src/routes/__root.tsx`.
- Decide where contact submissions should be read: Prisma Studio (`npm run db:studio`),
  or add an email notification to `src/server/contact.ts`.
