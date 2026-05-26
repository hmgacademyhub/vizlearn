# VizLearn Enterprise Package

This `enterprise/` folder is ready for upload to GitHub Pages, Cloudflare Pages, or any static hosting platform.

## What this package provides

VizLearn Enterprise is a free, static, browser-based data visualization learning and enterprise training platform.

It includes:

- Beginner-to-expert curriculum
- Python visualization lessons
- Pyodide Playground
- Dataset Lab
- CSV Upload Lab
- Project Studio
- Story Builder
- Instructor Mode
- Training Pack Generator
- Learning Tools Hub
- Enterprise Console
- Cohort Manager
- Learner CSV import/export
- Aggregate learner progress analytics from backups
- Assignment Builder
- Issue Register
- Audit Log
- Governance documentation
- Deployment workflow for GitHub Pages
- Cloudflare `_headers` and `_redirects`
- CSV/JSON templates

## No AI API

This platform does not use any AI API. All recommendations and generated documents are rule-based and run locally in the browser.

## Main pages

| Page | Purpose |
|---|---|
| `index.html` | Landing page |
| `pages/curriculum.html` | Beginner-to-expert data science visualization curriculum |
| `pages/lessons.html` | Structured visualization lessons |
| `pages/playground.html` | Browser Python execution |
| `pages/datasets.html` | Embedded practice datasets |
| `pages/upload.html` | Private CSV upload and code generation |
| `pages/projects.html` | Portfolio-style projects |
| `pages/storytelling.html` | Chart advisor and data story builder |
| `pages/instructor.html` | Lesson plan generator |
| `pages/training.html` | Enterprise training pack generator |
| `pages/tools.html` | Search, notes, flashcards, checklist, certificate |
| `pages/enterprise.html` | Enterprise admin console |
| `pages/progress.html` | Progress dashboard and backup/restore |

## Important documents

- `DEPLOYMENT_GUIDE.md`
- `ENTERPRISE_FEATURE_GUIDE.md`
- `SECURITY.md`
- `docs/CURRICULUM_GUIDE.md`
- `docs/ENTERPRISE_FEATURES.md`
- `docs/TRAINING_PACK_GUIDE.md`
- `UPLOAD_INSTRUCTIONS.md`

## Upload rule

Upload the **contents** of this folder to the repository root.

Do not upload it as:

```text
repo/enterprise/index.html
```

Upload it as:

```text
repo/index.html
repo/pages/
repo/assets/
```

## Recommended hosting

- GitHub Pages: good for simple free hosting.
- Cloudflare Pages: recommended if you want `_headers` and `_redirects` support.
