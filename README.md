# Rasel Meya — Academic Portfolio

Personal academic/professional portfolio for **Rasel Meya** (AI Engineer | ML Engineer | Kaggle 2x Expert), built with React + TypeScript + Vite, styled with Tailwind CSS.

**Live site:** https://raselmeya94.github.io/portfolio

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** — build tool & dev server
- **Tailwind CSS** (via CDN, configured inline in `index.html`)
- **lucide-react** + **Font Awesome** — icons
- Deployed to **GitHub Pages** via `gh-pages`

## Project Structure

```
portfolio/
├── components/          # One component per section
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Publications.tsx
│   ├── OngoingResearch.tsx
│   ├── Projects.tsx     # Project cards (cover image, category filter, tags, links)
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── Section.tsx      # Shared section wrapper (title + divider)
├── constants.tsx        # All content lives here: experience, publications,
│                         # research, PROJECTS, skills, contact links
├── types.ts              # Shared TypeScript interfaces
├── App.tsx                # Page layout / section order
├── index.tsx               # React root mount
├── index.html              # HTML shell, Tailwind theme config, fonts
├── public/
│   ├── images/             # Profile photo, publication images, skill icons
│   │   └── projects/        # Project cover images (see README.md inside)
│   └── resume/                # Downloadable CV PDF
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# install dependencies
npm install

# start local dev server (hot reload)
npm run dev
```

Then open the URL Vite prints in the terminal (usually `http://localhost:5173/portfolio/` — note the `/portfolio/` base path).

## Build & Deploy

```bash
# production build → outputs to dist/
npm run build

# preview the production build locally
npm run preview

# build + publish dist/ to the gh-pages branch (GitHub Pages)
npm run deploy
```

## Editing Content

Almost everything on the site is data-driven from **`constants.tsx`** — you usually don't need to touch component files to update content:

| Section          | Edit in `constants.tsx`             |
| ---------------- | ----------------------------------- |
| Nav links        | `NAV_LINKS`                         |
| Education        | `EDUCATION_INFO`                    |
| Experience       | `EXPERIENCES`                       |
| Publications     | `PUBLICATIONS`                      |
| Ongoing research | `ONGOING_RESEARCH`                  |
| **Projects**     | `PROJECTS` (+ `PROJECT_CATEGORIES`) |
| Skills           | `SKILL_CATEGORIES`                  |
| Certificates     | `CERTIFICATES`                      |
| Contact links    | `CONTACT_LINKS`                     |

### Adding/editing a project

Each entry in `PROJECTS` (in `constants.tsx`) follows the `Project` type (`types.ts`):

```ts
{
  date: '2025',
  title: 'Project Name',
  description: 'One or two sentences about what it does and the impact.',
  githubUrl: 'https://github.com/raselmeya94/...',
  tags: ['LLM', 'RAG', 'Python'],
  imageUrl: '/images/projects/your-image.png',
  category: 'Personal' | 'Company' | 'Open Source' | 'Research',
  secondaryUrl: { label: 'Hugging Face', url: 'https://huggingface.co/...' }, // optional
  featured: true, // optional — shows a "Featured" badge
}
```

### Replacing project cover images

Placeholder cover images live in `public/images/projects/`. To swap in a real
screenshot or logo, just replace the file using the **same filename** — no
code change needed. See `public/images/projects/README.md` for the full
filename ↔ project mapping. If an image is ever missing or fails to load,
the card automatically falls back to a clean gradient, so the layout never
breaks.

## Notes

- The site uses a fixed base path of `/portfolio/` (set in `vite.config.ts`) to match the GitHub Pages project URL. If you ever move it to a custom domain or the repo root, update `base` in `vite.config.ts` accordingly.
- Tailwind is loaded via CDN script in `index.html` (not a build-time plugin), with the theme (colors, fonts) configured inline there.
