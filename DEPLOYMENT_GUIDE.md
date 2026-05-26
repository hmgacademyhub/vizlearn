# VizLearn Enterprise — Deployment Guide

This guide explains how to deploy the `enterprise/` folder to GitHub Pages or Cloudflare Pages using free tools.

## 1. What is inside this folder?

This folder is a complete static website. It contains:

```text
index.html
pages/
assets/
docs/
templates/
sw.js
manifest.webmanifest
_headers
_redirects
SECURITY.md
README.md
LICENSE
.nojekyll
.github/workflows/deploy.yml
```

## 2. Important upload rule

When creating a GitHub repository, upload the **contents of the `enterprise/` folder**, not the parent folder itself.

Correct repository root:

```text
index.html
pages/
assets/
docs/
templates/
.github/
```

Wrong repository root:

```text
enterprise/index.html
enterprise/pages/
enterprise/assets/
```

If you upload the folder itself instead of its contents, links may not work as expected.

---

# Part A — Deploy to GitHub Pages

## Step 1: Create GitHub repository

1. Open GitHub in your browser.
2. Sign in.
3. Click the **+** button.
4. Click **New repository**.
5. Enter repository name, for example:

```text
vizlearn-enterprise
```

6. Set visibility to **Public**.
7. Do not tick README, license, or `.gitignore` because the package already includes them.
8. Click **Create repository**.

## Step 2: Upload files

1. Open the new repository.
2. Click **Add file**.
3. Click **Upload files**.
4. Open the local `enterprise/` folder.
5. Select all contents inside the folder:

```text
index.html
pages
assets
docs
templates
sw.js
manifest.webmanifest
_headers
_redirects
SECURITY.md
README.md
LICENSE
.nojekyll
.github
```

6. Upload everything.
7. Commit message:

```text
Initial enterprise deployment
```

8. Click **Commit changes**.

## Step 3: Enable GitHub Pages

1. Go to repository **Settings**.
2. Click **Pages** in the sidebar.
3. Under **Source**, select:

```text
GitHub Actions
```

4. Save if prompted.

## Step 4: Run deployment

1. Go to the **Actions** tab.
2. You should see:

```text
Deploy VizLearn Enterprise to GitHub Pages
```

3. Wait for the workflow to complete.
4. A green checkmark means success.
5. If it fails, open the workflow run and read the error message.

## Step 5: Open live platform

Your URL will follow this pattern:

```text
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

Example:

```text
https://cssadewale.github.io/vizlearn-enterprise/
```

## Step 6: Test pages

Open and test:

```text
/
/pages/roadmap.html
/pages/curriculum.html
/pages/lessons.html
/pages/playground.html
/pages/datasets.html
/pages/upload.html
/pages/projects.html
/pages/storytelling.html
/pages/instructor.html
/pages/training.html
/pages/tools.html
/pages/enterprise.html
/pages/progress.html
```

## Step 7: Test Python Playground

1. Open:

```text
/pages/playground.html
```

2. Wait for Pyodide to load.
3. First load can take 20–90 seconds depending on internet speed.
4. Run the default code.
5. Confirm chart output appears.

---

# Part B — Deploy to Cloudflare Pages

Cloudflare Pages is also free and is recommended if you want `_headers` and `_redirects` to work.

## Step 1: Push project to GitHub

Cloudflare Pages connects to GitHub. First upload the `enterprise/` folder contents to a GitHub repository.

## Step 2: Create Cloudflare Pages project

1. Log in to Cloudflare.
2. Go to **Workers & Pages**.
3. Click **Create application**.
4. Select **Pages**.
5. Choose **Connect to Git**.
6. Select the GitHub repository.
7. Choose branch:

```text
main
```

## Step 3: Configure build settings

Use these settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: /
```

## Step 4: Deploy

1. Click **Save and Deploy**.
2. Wait for deployment to complete.
3. Open the generated Cloudflare URL.

Example:

```text
https://vizlearn-enterprise.pages.dev
```

## Step 5: Confirm security headers

Because this package includes `_headers`, Cloudflare Pages should apply security headers.

To check:

1. Open the live site.
2. Open browser Developer Tools.
3. Click **Network**.
4. Reload the page.
5. Click the main document request.
6. Check response headers for:

```text
X-Frame-Options
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Cross-Origin-Opener-Policy
```

---

# Part C — Updating after deployment

## To update content

1. Edit the relevant file locally or in GitHub.
2. Commit changes to the `main` branch.
3. GitHub Actions or Cloudflare Pages redeploys automatically.

## Common files to edit

| Task | File |
|---|---|
| Add lesson | `pages/lessons.html` |
| Add curriculum module | `pages/curriculum.html` |
| Add dataset | `pages/datasets.html` |
| Add project | `pages/projects.html` |
| Add enterprise guidance | `pages/enterprise.html` or docs |
| Update style | `assets/css/main.css` |
| Update global behaviour | `assets/js/main.js` |
| Update deployment docs | `DEPLOYMENT_GUIDE.md` |

---

# Part D — Recommended enterprise operating process

## Before a cohort starts

1. Open Enterprise Console.
2. Import or create organisation profile.
3. Create cohort.
4. Import learner CSV from `templates/learners_import_template.csv`.
5. Generate Training Pack.
6. Download attendance and assessment templates.

## During a cohort

1. Learners follow Roadmap and Curriculum.
2. Facilitator assigns tasks through Enterprise Console.
3. Learners practise in Playground, Dataset Lab, CSV Lab, and Project Studio.
4. Learners export Progress backups weekly.
5. Facilitator imports learner backups into Enterprise Analytics.
6. Facilitator tracks issues in Issue Register.

## After a cohort

1. Export analytics CSV.
2. Export completion register.
3. Export issue register.
4. Export audit log.
5. Generate certificates from Learning Tools.
6. Store records securely.

---

# Part E — Cost control

This deployment remains free because it avoids:

- AI API
- Backend server
- Paid database
- Paid LMS
- Paid analytics
- Cloud functions
- Authentication provider

The system uses static files, browser APIs, localStorage, CSV, JSON, Markdown, GitHub Pages, and Cloudflare Pages.
