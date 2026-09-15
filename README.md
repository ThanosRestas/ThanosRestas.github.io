# BetterPortfolio

Thanos Restas' portfolio rebuilt with React, TypeScript, and Vite. The professional and personal project pages retain their original query-based URLs. The on-site resume uses lightly bordered cards, omits Certifications, and labels the publication section **Publications**. The downloadable CV is copied unchanged from `PreviousPortfolio`.

## Local review

Requires Node.js 20.18 or newer. Run `npm ci`, `npm run typecheck`, and `npm run build`. Use `npm run preview -- --port 4173` to review the production build at `http://127.0.0.1:4173/`. The build is in `dist/`; Vite uses relative asset paths so it works at a repository subpath as well as a host root.

## GitHub Pages later

Add a GitHub remote and push `main` when ready. In the repository settings, set Pages' build source to **GitHub Actions**. The workflow in `.github/workflows/pages.yml` installs dependencies, checks TypeScript, builds `dist/`, and deploys that directory on a push to `main` (or a manual run).

## Sites later

`.openai/hosting.json` records a static Vite build and points to `dist/index.html`. When ready to use Sites, create or connect a Sites project, build the committed source, and save and deploy a version from the `dist/` output. Add the Sites-provided `project_id` to the hosting metadata only after project creation; no ID is prefilled here.

This repository starts with no remote and no deployment.
