# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at localhost:3000
npm run build    # Production build (also exports static output to /out)
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

This is a **single-page portfolio site** built with Next.js 15 (App Router), React 19, Tailwind CSS v4, and shadcn/ui. The entire site renders as one page from `app/page.tsx`.

**Content is hardcoded directly in components** — there is no CMS, database, or data layer. To update content (experience, projects, skills, values), edit the relevant component file directly:

- `components/experience-timeline.tsx` — Work history as a hardcoded `experiences` array
- `components/skills-section.tsx` — Skills and expertise areas as hardcoded arrays
- `components/project-card.tsx` — Reusable card; project data is passed as props from `app/page.tsx`
- `components/education-section.tsx`, `components/value-card.tsx` — Education and personal values

**Several sections are commented out** and not currently rendered: Certifications, Testimonials, Contact, and the footer. The corresponding components (`certifications-section.tsx`, `testimonial-section.tsx`, `contact-section.tsx`) exist but are disabled in `app/page.tsx`.

**UI components** in `components/ui/` are shadcn/ui primitives (Badge, Button, Card, etc.) — don't modify these manually; use the shadcn CLI to add/update them.

**Styling** uses Tailwind v4 with CSS variables for theming defined in `app/globals.css`. Colors reference CSS custom properties (`hsl(var(--primary))`) so the theme can be changed by updating variable values in the CSS file.

**Static export**: The `/out` directory contains a pre-built static export. Run `npm run build` to regenerate it. The profile image is served from `public/Archit.jpeg` and referenced with `unoptimized` prop since this is a static export.
