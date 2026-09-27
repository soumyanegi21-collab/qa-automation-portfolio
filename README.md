# Soumya Negi | QA Automation Portfolio

A responsive, single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

Create a production build and serve it locally:

```sh
npm run build
npm run preview
```

## Personalize the content

- Update profile links, contact email, skills, projects, and experience in `src/data/portfolio.ts`.
- Add verified credentials to the `certifications` list in `src/data/portfolio.ts`.
- Add each verified public repository URL to its matching project in `src/data/portfolio.ts`.
- Update the GitHub account URL in the `profile` object in `src/data/portfolio.ts` when the account changes.

## Add a resume PDF

The download button currently serves `public/soumya-negi-resume.txt`. To attach your PDF, place it at `public/soumya-negi-resume.pdf`, then update the resume link in `src/sections/Hero.tsx` from `soumya-negi-resume.txt` to `soumya-negi-resume.pdf`. The `public` directory is copied into the production site automatically, including GitHub Pages deployments.

The contact form opens the visitor's default email application with the completed message. No form service or server is required.

## GitHub Pages

The included workflow builds and deploys the site when changes are pushed to `main`. In the repository settings, set **Pages > Build and deployment > Source** to **GitHub Actions**.

The Vite base path is configured for a repository named `qa-automation-portfolio`. If the repository name changes, update `base` in `vite.config.ts` to match the new GitHub Pages path before deploying.
