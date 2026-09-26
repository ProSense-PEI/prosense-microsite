# ProSense

Astro site for the ProSense project (PEI 2026/2027, Universidade de Aveiro).

## Run locally

```bash
npm install
npm run dev
```

## Adding a meeting

Copy `src/content/meetings/EXAMPLE.md.example` to a new file named after the
meeting date, e.g. `2026-10-02-meeting.md` (it must end in `.md`). Fill in the
fields at the top and write the minutes below in Markdown. It appears on
`/meetings` (newest first) with its own page at `/meetings/<filename>`.

## Adding a milestone

Same idea in `src/content/milestones/` — see `EXAMPLE.md.example` there for
the fields (title, phase, date, summary, link, optional `image`).

## Team photos

Put a **cut-out PNG with a transparent background** (head to waist) in
`public/team/`, named after the person:

- David Cálix → `david-calix.png`
- António Videira → `antonio-videira.png`
- Tiago Oliveira → `tiago-oliveira.png`
- Diogo Ruivo → `diogo-ruivo.png`
- Gabriel Riquito → `gabriel-riquito.png`

Until a photo is added, the card shows the person's initials.

## Links

The Drive / GitHub / Jira links and the team members' footer links live in
`src/layouts/Layout.astro`.

## Deploying

The site is published at https://prosense-pei.github.io/prosense-microsite/.
Every push to `main` builds and deploys it through
`.github/workflows/deploy.yml` (repo **Settings → Pages → Source: GitHub Actions**).

Always write internal paths through `url()` from `src/utils/url.ts` in `.astro`
files (e.g. `src={url('/logo.png')}`), so they get the `/prosense-microsite` prefix.
Site-absolute paths inside Markdown (`/logo.png`) are prefixed automatically.
If the repo is renamed, update `base` in `astro.config.mjs`.
