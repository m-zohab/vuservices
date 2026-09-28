# VU Services — VU Academic & Project Partners

A multi-page site for a two-person academic services team (Virtual
University assignments, GDB, quiz support, LMS handling, final year
projects, programming and AI/ML help). Built with **React 18**, **Vite**,
**Tailwind CSS** and **React Router**.

## Quick start

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Pages / routes

| Route               | Page                    |
| -------------------- | ----------------------- |
| `/`                   | Home                     |
| `/services`           | Services                |
| `/projects`           | Projects (filterable)   |
| `/viva-preparation`   | Final Viva Preparation  |
| `/about`              | About Us                |
| `/contact`            | Contact Us              |

Each route is a real page (not a scroll anchor), so every page can be
shared, bookmarked and indexed by search engines individually.

## Project structure

```
src/
  data/
    siteData.js        ← EDIT THIS FILE for almost all real content
  components/           reusable pieces (Navbar, cards, Reveal animation, …)
  layouts/
    MainLayout.jsx       Navbar + page outlet + Footer + WhatsApp button
  pages/                 one file per route, listed above
  hooks/
    useInView.js          powers the scroll-triggered animations
  App.jsx                 route definitions
  main.jsx                 React Router + app entry point
  index.css                theme tokens & animation keyframes
public/
  robots.txt
  sitemap.xml
```

## Customizing your content

Almost everything is driven by **`src/data/siteData.js`** — you shouldn't
need to touch component files to update your info.

- **`siteConfig`** — brand name, tagline, domain, WhatsApp number, email.
- **`navLinks`** — the main navigation, used by both the Navbar and Footer.
- **`partners`** — name, semester, bio and social links for each of you.
  - Leave `github` or `linkedin` as an empty string (`""`) to automatically
    hide that icon on the card.
  - Set `image` to a photo path (e.g. `/me.jpg`, placed in the `public/`
    folder) to replace the initials placeholder with a real picture.
- **`services`** — all 7 service catalogue entries (title, description,
  features). The `icon` field maps to a lucide-react icon in
  `components/ServiceCard.jsx` — add new mappings there if you add a new
  icon name.
- **`projects`** / **`projectCategories`** — the portfolio grid and its
  filter tabs. `category` on each project must match one of the strings in
  `projectCategories`.
- **`vivaPrep`** — the "what's included" list and 4-step process shown on
  the Final Viva Preparation page.

### Adding real project screenshots

Drop images into the `public/` folder (e.g. `public/projects/bookstore.png`)
and replace the gradient placeholder `<div>` in
`src/components/ProjectCard.jsx` with an
`<img src={...} className="h-44 w-full object-cover" />`.

### Making the contact form send email directly

Right now, submitting the contact form opens the visitor's own email app
with a pre-filled message (via a `mailto:` link) — this works immediately,
with no setup. If you'd rather receive submissions directly on a server,
wire up a free form backend like [Formspree](https://formspree.io) or
[EmailJS](https://www.emailjs.com) inside `handleSubmit` in
`src/pages/Contact.jsx`.

### Changing the colours

The whole colour theme lives in one place: the `:root { ... }` block at the
top of `src/index.css`. Each line is a colour (as an `R G B` triplet) —
change the numbers and every page updates. No component files need to be
touched. Tailwind picks the same names up through `tailwind.config.js`.

### Animations

Reusable pieces live in `src/components/`: `Reveal` (scroll-in effects),
`CountUp` (counting numbers), `WordRotator` (rotating hero word),
`Marquee` (scrolling strip), `ScrollProgress` and `BackToTop`. Motion is
automatically reduced for visitors who have "reduce motion" turned on.

### SEO

- Each page sets its own `<title>` and meta description via the `<SEO />`
  component (`src/components/SEO.jsx`) — no extra dependency required.
- `index.html` carries Open Graph/Twitter tags and JSON-LD structured data
  — update the URLs there if the domain ever changes.
- `public/robots.txt` and `public/sitemap.xml` reference
  `https://vuservices.online` — update both if the domain changes.

## Deploying to Vercel

This is already connected to GitHub → Vercel — just push to your main
branch and Vercel redeploys automatically. No Vercel settings need to
change; it still auto-detects the **Vite** framework preset:

- Build command: `npm run build`
- Output directory: `dist`

## Tech stack

- [React 18](https://react.dev)
- [React Router](https://reactrouter.com) — client-side routing
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for icons
