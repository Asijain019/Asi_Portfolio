# Asi Jain — Portfolio

Playful, colourful collage/sticker-style portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

**Highlights**

- 🎨 Collage hero: giant layered name, polaroid photos and sticker badges that drift with the cursor
- 🖱️ Custom cursor with trailing ring, cursor-parallax floating avatar, 3D tilt cards
- ⌨️ Typewriter role animation, scroll progress bar, scroll-reveal animations everywhere
- 📄 Resume downloads (PDF + DOCX) — files only download on click, never displayed
- 🚀 6 featured projects + 3 more, all with GitHub/live links, plus skills, education timeline, certifications and contact

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Deploy

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Asijain019/portfolio.git
git push -u origin main
```

### 2. Deploy on Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`
3. Deploy — done. Every push to `main` auto-deploys.

(Netlify works the same way: build `npm run build`, publish directory `dist`.)

### GitHub Pages

The build uses a relative base (`base: './'` in `vite.config.js`), so it also works under a
sub-path like `username.github.io/repo-name/` with no extra config. Run `npm run build` and
publish the `dist/` folder (e.g. with the `gh-pages` package or a Pages GitHub Action).

### Images after deployment

- Put images in `public/` and reference them through `asset()` from `src/utils/asset.js`,
  e.g. `src={asset('/photos/me.jpg')}` — this keeps paths correct on every host.
- Filenames are **case-sensitive** once deployed (Linux servers): `Photo.JPG` ≠ `photo.jpg`.
- If the project sits in OneDrive, make sure files are downloaded locally ("Always keep on this
  device") before committing, so no placeholder files get pushed.

## Customize

- All text content (experience, projects, skills, certs, contact info) lives in **`src/data/content.js`** — edit one file to update the whole site.
- Avatar illustrations: `public/avatars/` · photos & collage art: `public/photos/`
- Resume files: `public/resume/` (replace `Asi_Jain_Resume.pdf` / `.docx` with newer versions anytime)
- Colors/fonts: `tailwind.config.js` and `src/index.css`

## Structure

```
public/
  avatars/          hero/about/contact illustrations
  photos/           real photos + collage artwork
  resume/           Asi_Jain_Resume.pdf + .docx (download-only)
src/
  data/content.js   ← ALL site content in one place
  components/       Navbar, Footer, CustomCursor, TiltCard, SectionHeading, Polaroid, Marquee, Doodles
  sections/         Hero, About, Experience, Projects, Skills, Journey, Certifications, Contact
  App.jsx           page assembly + scroll progress
```
