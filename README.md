# My Portfolio Website

Personal portfolio site built with React, TypeScript, and Vite. The site introduces Shivesh, highlights selected projects, and provides links to resume and social profiles.

## Status

Work in progress. The core pages and routing are in place, and the "Fun" page is currently a placeholder.

## Pages

- Home: Intro copy with decorative visuals and a quick orientation.
- About: Bio, profile image, resume link, and social/contact links.
- Projects: Grid of project cards with live/demo and source links.
- Fun: Placeholder page for future content.

## Tech Stack

- React 19 + TypeScript
- Vite 7
- React Router
- CSS modules organized by page/component under `src/styles`

## Project Structure

- `src/pages`: Route-level pages (`Home`, `About`, `Projects`, `Fun`)
- `src/components`: Reusable UI (`Navbar`, `ProjectCard`)
- `src/assets`: SVGs and images used across pages
- `src/styles`: Page/component CSS

## Getting Started

```bash
npm install
npm run dev
```

Then open the local dev URL printed by Vite.

## Scripts

- `npm run dev`: Start the dev server
- `npm run build`: Type-check and build for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

## Notes

- Project links and images are configured in `src/pages/Projects.tsx`.
- Navigation links live in `src/components/Navbar.tsx`.
