# Asi Jain — Portfolio

**Live:** [asi-jain-portfolio.vercel.app](https://asi-jain-portfolio.vercel.app/)

Personal portfolio of **Asi Jain**, Computer Science undergraduate at JK Lakshmipat University, Visiting Scholar at IIT Kanpur, and full-stack / AI developer. The site uses a colourful collage and sticker style with layered display type, polaroid photo frames and hand-drawn doodles. Interactions are animated with Framer Motion.

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 18, Vite 5 |
| Styling | Tailwind CSS 3, custom design tokens |
| Animation | Framer Motion |
| Icons | React Icons |
| Hosting | Vercel |

## Sections

- **Hero:** oversized layered name, illustrated portrait and badges that follow the cursor
- **About:** short bio, quick stats and a polaroid photo collage
- **Experience:** Software Development Engineer Intern at Spring Street, with key results
- **Projects:** 6 featured projects plus 3 smaller ones, each linking to its GitHub repo and live demo where one exists
- **Skills:** languages, AI/ML, full-stack and tooling, plus coursework
- **Journey:** education timeline and achievements
- **Certifications:** each certificate links to its verification page
- **Contact:** email, phone, social links and resume download (PDF / DOCX)

## Features

- Responsive from 320px phones to wide desktops
- Custom cursor, 3D tilt cards and cursor-parallax effects (turned off on touch devices)
- Scroll-triggered animations, typewriter role text and marquee strips
- Resume files download on click and are never embedded in the page
- All content lives in a single data file
- Respects `prefers-reduced-motion`

## Run Locally

**Requirements:** Node.js 18 or newer.

```bash
git clone https://github.com/Asijain019/asi-jain-portfolio.git
cd asi-jain-portfolio
npm install
npm run dev        # http://localhost:5173
```

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Updating Content

- **Text and links** (experience, projects, skills, education, certifications, contact): edit `src/data/content.js`
- **Images:** `public/avatars/` holds the illustrations and `public/photos/` holds the photos and collage art. In components, reference them with `asset('/photos/name.jpg')` from `src/utils/asset.js` so the paths resolve correctly in production.
- **Resume:** replace the files in `public/resume/` and keep the same filenames
- **Colours and fonts:** `tailwind.config.js` and `src/index.css`

## Project Structure

```
public/
  avatars/        illustrated portraits
  photos/         photos and collage artwork
  resume/         Asi_Jain_Resume.pdf / .docx
src/
  components/     Navbar, Footer, CustomCursor, TiltCard, Polaroid,
                  Marquee, SectionHeading, Doodles
  sections/       Hero, About, Experience, Projects, Skills,
                  Journey, Certifications, Contact
  data/content.js all site content
  hooks/          pointer-parallax hook
  utils/asset.js  base-URL-aware asset paths
  App.jsx         page layout and scroll progress bar
```

## Contact

- **Email:** [asi82005.j@gmail.com](mailto:asi82005.j@gmail.com)
- **LinkedIn:** [linkedin.com/in/asi-jain019](https://www.linkedin.com/in/asi-jain019)
- **GitHub:** [github.com/Asijain019](https://github.com/Asijain019)
