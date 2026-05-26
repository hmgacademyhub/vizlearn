# VizLearn Enterprise — Deployment-Ready Package

This repository package is the enterprise-ready version of VizLearn. It includes all original learning features plus curriculum, training, and enterprise administration layers.

## Start here

1. Read `UPLOAD_INSTRUCTIONS.md`.
2. Read `DEPLOYMENT_GUIDE.md`.
3. Read `ENTERPRISE_FEATURE_GUIDE.md`.
4. Upload the contents of this folder to GitHub or Cloudflare Pages.

## Important enterprise pages

- `pages/curriculum.html` — beginner-to-expert data science visualization curriculum.
- `pages/training.html` — enterprise training pack generator.
- `pages/enterprise.html` — organisation, cohort, analytics, assignments, issues, audit, governance.
- `pages/progress.html` — learner progress backup/restore.

## Cost note

No AI API is used. No backend or paid database is required. The system uses static hosting, Pyodide, localStorage, CSV, JSON, Markdown, and browser APIs.

---

# ⬡ VizLearn Enhanced v4 — Free Python Data Visualization Learning Platform

**Enhanced for Adewale Samson Adeagbo / HMG Concepts persona:** educator-first, data-science-driven, project-based, zero-cost, and no paid AI API.

## What changed in this enhanced version

All existing VizLearn v3 features are preserved. The following free features were added:

1. **Learning Roadmap** (`pages/roadmap.html`) — an 8-phase simple-to-complex path with local milestone tracking.
2. **Dataset Lab** (`pages/datasets.html`) — embedded synthetic datasets, analysis questions, CSV download, and one-click Playground starter code.
3. **Project Studio** (`pages/projects.html`) — six guided capstone projects with problem briefs, rubrics, and starter code.
4. **Chart Advisor & Story Builder** (`pages/storytelling.html`) — rule-based chart recommendations and Markdown story brief export; no AI API.
5. **PWA/offline-ready static shell** (`manifest.webmanifest`, `sw.js`, `assets/icons/icon.svg`) — installable/cacheable static pages on supported browsers.
6. **Progress Backup/Restore** (`pages/progress.html`) — export/import localStorage learning data as JSON.
7. **CSV Upload Lab** (`pages/upload.html`) — private browser-only CSV inspection, chart recommendation, and Playground code generation.
8. **Instructor Mode** (`pages/instructor.html`) — template-based lesson planning and assessment rubrics for teachers/facilitators.
9. **Learning Tools Hub** (`pages/tools.html`) — global search, notes, flashcards, quality checklist, and printable certificate.
10. **Accessibility Panel** — global font-size, high-contrast, and reduced-motion preferences.
11. **Enterprise Console** (`pages/enterprise.html`) — organisation profile, cohorts, learner CSV import/export, aggregate backup analytics, assignments, issue register, audit log and governance.
12. **Security/Governance files** (`_headers`, `SECURITY.md`, `docs/ENTERPRISE_FEATURES.md`) — enterprise-readiness documentation and Cloudflare security headers.
13. **Master Curriculum** (`pages/curriculum.html`) — beginner-to-expert data visualization curriculum with modules, outcomes, activities, assessments, projects, study plan and exports.
14. **Training Pack Generator** (`pages/training.html`) — enterprise training proposal, scheme of work, facilitator checklist, attendance CSV, completion register and assessment templates.
15. **Documentation** (`docs/`) — persona analysis plus detailed feature and deployment manual.

## Free-tool architecture

- Hosting: GitHub Pages or Cloudflare Pages
- Frontend: HTML, CSS, Vanilla JavaScript
- Python execution: Pyodide in the browser
- Storage: localStorage
- Guidance: rule-based JavaScript, not AI APIs
- Deployment: GitHub Actions or Cloudflare Pages static deploy

## Key docs

- `docs/PERSONA_ANALYSIS.md`
- `docs/FEATURE_GUIDE_AND_DEPLOYMENT.md`
- `docs/ENTERPRISE_FEATURES.md`
- `docs/CURRICULUM_GUIDE.md`
- `docs/TRAINING_PACK_GUIDE.md`

---

# ⬡ VizLearn — Python Data Visualization Learning Platform

<div align="center">

![VizLearn](https://img.shields.io/badge/VizLearn-v3.0-00e5a0?style=for-the-badge&logo=python&logoColor=white)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=flat-square&logo=github)](https://cssadewale.github.io/vizlearn)
[![Python](https://img.shields.io/badge/Python-Pyodide_In--Browser-3776AB?style=flat-square&logo=python)](https://pyodide.org)
[![Libraries](https://img.shields.io/badge/Libraries-Matplotlib_%7C_Seaborn_%7C_Plotly_%7C_Pandas-blue?style=flat-square)](#-libraries-covered)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)](https://cssadewale.github.io/vizlearn)
[![Built on](https://img.shields.io/badge/Built_on-Android_Tablet-orange?style=flat-square)](#-technology-stack)

**A free, open-source, browser-based interactive platform for Data Scientists to learn, write, run, and understand Python data visualization — without installing anything.**

[🚀 Live Platform](https://cssadewale.github.io/vizlearn) &nbsp;·&nbsp;
[📚 Lessons](https://cssadewale.github.io/vizlearn/pages/lessons.html) &nbsp;·&nbsp;
[⚡ Playground](https://cssadewale.github.io/vizlearn/pages/playground.html) &nbsp;·&nbsp;
[🔁 Comparator](https://cssadewale.github.io/vizlearn/pages/compare.html) &nbsp;·&nbsp;
[🎛 Params](https://cssadewale.github.io/vizlearn/pages/params.html) &nbsp;·&nbsp;
[📖 Glossary](https://cssadewale.github.io/vizlearn/pages/glossary.html) &nbsp;·&nbsp;
[🐛 Error Guide](https://cssadewale.github.io/vizlearn/pages/errors.html) &nbsp;·&nbsp;
[📊 Progress](https://cssadewale.github.io/vizlearn/pages/progress.html)

</div>

---

## 📋 Table of Contents

1. [The Problem This Solves](#-the-problem-this-solves)
2. [Complete Feature List](#-complete-feature-list-v30)
3. [Page-by-Page Feature Guide](#-page-by-page-feature-guide)
4. [Technology Stack](#-technology-stack)
5. [Repository Structure](#-repository-structure)
6. [Deployment — Step-by-Step](#-deployment--step-by-step)
7. [How to Use Locally](#-how-to-use-locally-no-server-needed)
8. [Libraries Covered](#-libraries-covered)
9. [How the Playground Works](#-how-the-playground-works-pyodide)
10. [Keyboard Shortcuts](#-keyboard-shortcuts)
11. [Contributing](#-contributing)
12. [Creator](#-creator)
13. [License](#-license)

---

## 🎯 The Problem This Solves

Many data scientists can load data, engineer features, and build ML models — but **data visualization remains a persistent gap**. The matplotlib/seaborn/plotly APIs are wide, parameter-heavy, and easy to forget.

| Existing approach | The friction |
|---|---|
| Jupyter / VS Code | Requires installation, kernel management, environment setup |
| Google Colab | Account required; runtime startup delay; no offline use |
| Books and tutorials | Shows code but you cannot run it inline |
| Stack Overflow | Snippets without explanation of *why* each parameter exists |
| Video courses | Passive watching, not active doing |

**VizLearn removes all friction.**  
Open any browser. Write Python. See the chart. Understand every line.  
No installation. No account. No cost. Works on Android, iOS, or desktop.

---

## ✨ Complete Feature List (v3.0)

### 13 Pages — All Free, All Browser-Based

| Page | What It Does |
|---|---|
| 🏠 Home | Platform overview, library paths, feature showcase |
| 📚 Lessons | 42 structured lessons across 4 libraries with progress tracking |
| ⚡ Playground | Live Python editor powered by Pyodide — runs in-browser |
| 🔁 Comparator | Same chart in all 4 libraries side-by-side |
| 🎛 Param Explorer | Sliders/dropdowns → see how parameters change the chart |
| 📋 Cheat Sheet | 30+ searchable syntax cards with Copy and Run buttons |
| 🧠 Quiz | 12 code-reading questions: Identify, Debug, Predict, Params |
| 📖 Glossary | 30+ terms defined with code examples and cross-links |
| 🐛 Error Guide | 15 real errors — root cause + wrong code + fixed code |
| 🖼 Gallery | 24 chart examples — click any to open code in Playground |
| 📊 Progress Dashboard | Lesson tracker, quiz history, streaks, badges, activity log |
| 📄 Quick Reference | Compact printable syntax cards — print as PDF |
| 👤 About | Creator bio, portfolio, skills, certifications, contacts |

### Core Learning Features

| Feature | Description |
|---|---|
| **42 Structured Lessons** | 4 libraries, 3 difficulty levels, annotated code, parameter tables, callouts |
| **Live Python Execution** | Pyodide WASM — run matplotlib, seaborn, plotly, pandas in-browser |
| **Library Comparator** | 8 chart types × 4 libraries = 32 side-by-side panels with difference explanations |
| **Parameter Explorer** | 8 functions with 6–8 interactive controls each — see changes live |
| **Code Annotator** | Paste any viz code → line-by-line parameter explanation (50+ rules, no AI) |
| **Snippet Library** | 24 complete runnable examples across all 4 libraries |
| **Chart Gallery** | 24 visual examples — one click to open code in Playground |
| **Cheat Sheet** | 30+ searchable cards, all with Copy and Run buttons |
| **Knowledge Quiz** | 12 questions, score ring, instant feedback, filter by type/library |
| **Visualization Glossary** | 30+ terms, search, alphabet nav, expandable with code examples |
| **Error Guide** | 15 errors with root cause + red/green code comparison |

### Progress & UX Features

| Feature | Description |
|---|---|
| **Progress Dashboard** | Lesson rings per library, streak calendar, quiz history, badges |
| **10 Achievement Badges** | Unlocked by completing milestones (First Step, MPL Master, Quiz Ace, etc.) |
| **Activity Log** | Last 100 events: lesson completions, quiz answers, playground runs |
| **Streak Calendar** | 28-day visual calendar showing active learning days |
| **Recommended Next** | Always shows 5 unfinished lessons to guide your path |
| **Quick Reference** | Print-friendly syntax cards — File → Print → Save as PDF |
| **Lesson Sidebar Search** | Filter 42 lessons by keyword in real time |
| **Reading Progress Bar** | Green bar tracks scroll position through each lesson |
| **Back-to-Top Button** | Appears when scrolling deep in any page |
| **Toast Notifications** | Confirms copy, lesson complete, and other actions |
| **Keyboard Shortcut G** | Press G from anywhere (outside inputs) to jump to Playground |
| **Cross-page Code Passing** | Gallery / Cheat Sheet / Errors → Playground with code pre-loaded |
| **Download Chart PNG** | Save the last rendered chart as a PNG file |

---

## 📄 Page-by-Page Feature Guide

### 🏠 Home (`index.html`)

The landing page. Contains:
- Hero section with live code mockup
- Platform statistics (4 libraries, 42 lessons, 100+ examples, live execution)
- Feature card grid with 6 feature descriptions
- 4 library learning path cards (Matplotlib, Seaborn, Plotly, Pandas) with topic lists
- "Learn → Practice → Understand" 4-step workflow explanation
- Footer with all navigation links and creator info

---

### 📚 Lessons (`pages/lessons.html`)

**The main curriculum.** 42 lessons load inline without page reload.

**Sidebar features:**
- Library filter tabs: All / MPL / SNS / PLY / PD
- Keyword search — type to filter lessons by name
- Progress bar showing X / 42 lessons complete
- Lesson items with completion checkmarks for done lessons

**Each lesson contains:**
- Library badge (colour-coded) and difficulty badge (Beginner / Intermediate / Advanced)
- Introduction paragraph explaining the concept and when to use it in data science
- Concept explanation sections with h2/h3 headings
- Annotated code blocks — every parameter named and explained inline using syntax-highlighted `<pre>` blocks
- Parameter reference tables — parameter name, type, default, description
- Callout boxes in three styles:
  - **Info (blue)** — background context, historical notes
  - **Tip (green)** — best practice, recommended approach
  - **Warning (amber)** — common mistakes, what not to do
- "Mark as Complete" button — saved to localStorage, updates progress bar
- "Open in Playground" button — pre-loads lesson code into the editor

---

### ⚡ Playground (`pages/playground.html`)

**The core execution environment.** Write Python. See charts. Instantly.

**Editor tab (left panel):**
- Full Python textarea with `DM Mono` font
- `Ctrl+Enter` keyboard shortcut to run code
- `Tab` key inserts 4-space indentation
- Line and column counter
- Snippet selector dropdown — 24 examples across all 4 libraries
- Reset to default code / Clear output buttons
- Download last chart as PNG

**Snippet Library tab:**
24 complete chart examples as clickable cards, categorised by library.
Click any card → code loads into the editor immediately.
Categories: Matplotlib (8), Seaborn (8), Plotly (4), Pandas (4).

**Code Annotator tab:**
Paste any matplotlib/seaborn/plotly code → get a two-column line-by-line explanation.
Covers 50+ patterns including: all import statements, all ax/plt/sns/px function calls, parameters (alpha, cmap, hue, palette, marker, linestyle, figsize, etc.), NumPy and pandas operations.
Rule-based engine — no AI API, works completely offline.

**Output panel (right):**
- Chart Output tab — PNG images rendered from Pyodide
- Console Log tab — stdout and stderr from code execution
- Execution time displayed after each run
- Download chart as PNG button

**Python status bar:**
Shows Pyodide loading progress with animated dot — grey (loading) → green (ready) → red (error).

---

### 🔁 Library Comparator (`pages/compare.html`)

**See the same chart built in 4 libraries simultaneously.**

Select a chart type from the pill bar → 4 code panels appear side by side, one per library. A "Key Differences" box above explains *why* the syntax differs — what each library's approach is, what it gives you for free, and what it requires you to do manually.

**8 chart types covered:**
Scatter Plot, Bar Chart, Line Chart, Histogram, Heatmap, Box Plot, Pie/Donut, Area Chart

**Per panel:**
- Library label with colour
- Line count
- Full, complete, runnable code
- Copy button
- ▶ Run button (sends that panel's code to Playground)

**Why this is essential:**
Knowing that `sns.barplot()` aggregates data and adds CI bars while `ax.bar()` plots exact values is one of the most important distinctions in Python visualization. The Comparator makes all such differences concrete.

---

### 🎛 Parameter Explorer (`pages/params.html`)

**Build parameter intuition by seeing changes live.**

Select a function from the top bar. Adjust controls on the left panel (sliders for numeric values, dropdowns for string options, color pickers for colors, checkboxes for booleans). The generated Python code updates instantly. Click ▶ Run to execute and see the resulting chart.

**8 functions with interactive controls:**

| Function | Parameters Exposed |
|---|---|
| `ax.plot()` | color, linewidth, linestyle, marker, markersize, alpha, grid, hide_spines |
| `ax.scatter()` | color, size, alpha, edgecolors, marker, colormap mode, grid, hide_spines |
| `ax.bar()` | color, width, alpha, edgecolor, show value labels, horizontal/vertical, grid |
| `ax.hist()` | color, bins, alpha, density (normalize), cumulative, edgecolor, grid |
| `sns.scatterplot()` | palette, size encoding, style encoding, alpha, min/max point size, theme |
| `sns.histplot()` | kde overlay, bins, stat (count/density/probability), element style, fill, alpha, palette |
| `sns.boxplot()` | width, palette, notched, show fliers, strip overlay, theme |
| `sns.heatmap()` | colormap, annot, square cells, linewidths, number format, colorbar shrink |

**Additional buttons:** Copy (copies generated code), Open in Playground (sends to full editor).

---

### 📋 Cheat Sheet (`pages/cheatsheet.html`)

**Quick-reference syntax for every common pattern.**

30+ cards organized by: Matplotlib (12 cards), Seaborn (12 cards), Plotly (6 cards), Pandas (5 cards), Styling (5 cards), Layout (4 cards).

**Features:**
- Real-time search — type any keyword (e.g., "scatter", "legend", "colormap", "hue") to filter cards instantly
- Filter tabs: All / Matplotlib / Seaborn / Plotly / Pandas / Styling / Layout
- Every card has a **Copy** button (copies raw Python to clipboard)
- Every card has a **▶ Run** button (sends code to Playground)
- Cards use syntax-highlighted `<pre>` blocks with comments explaining each parameter

---

### 🧠 Quiz (`pages/quiz.html`)

**Test real comprehension — not just recall.**

12 questions across 4 types:
- **Identify Chart** — what chart type does this code produce?
- **Debug Code** — what is the bug in this snippet?
- **Predict Output** — what will happen when this runs?
- **Parameters** — what does this specific parameter/value do?

**Features:**
- Score ring (circular progress graphic) showing accuracy percentage
- Correct count, total answered, raw accuracy displayed
- Filter by library (MPL / SNS / PLY / PD) or question type
- Instant feedback after each answer with full explanation including the correct reasoning
- ❌ Wrong options highlighted in red, ✅ correct option highlighted in green
- "Run in Playground" on every question — verify the answer yourself
- Reset button restarts all 12 questions and resets score

---

### 📖 Glossary (`pages/glossary.html`)

**A reference dictionary for every technical term in Python visualization.**

30+ terms defined, including: Axes, Alpha, Annotation, Bandwidth (KDE), Backend, Colormap, Color, Confidence Interval, DPI, Distribution Plot, EDA, Figure, fill_between, Grid, Heatmap, Histogram, Hue, imshow, KDE, Legend, lineplot, OOP Interface, Palette, Pair Plot, Spine, Subplot, tight_layout, Tick Labels, Violin Plot, and more.

**Features:**
- Search input — type any keyword to filter terms
- Category filter: All / Matplotlib / Seaborn / Plotly / Concepts / Parameters / Chart Types
- Alphabet navigation bar — jump to any letter section
- Each term expands with: definition, code example, Copy/Run buttons, "See also" cross-links
- "See also" links trigger a search for the linked term inline

---

### 🐛 Error Guide (`pages/errors.html`)

**Find any common visualization error and get the exact fix.**

15 errors documented:

| Error | Root Cause |
|---|---|
| `AttributeError: 'Axes' has no attribute 'title'` | Should be `ax.set_title()` not `ax.title()` |
| No legend appearing | `label=` argument missing on plot calls |
| Subplot labels overlapping | `fig.tight_layout()` not called |
| `ValueError: could not convert string to float` | Passing string data to `ax.plot()` |
| `sns.heatmap` shows raw data | Should be `df.corr()` not `df` |
| `TypeError: barplot() got unexpected keyword 'ci'` | Renamed to `errorbar=` in seaborn 0.12+ |
| Pairplot blank diagonal | Non-numeric columns in DataFrame |
| Heatmap NaN / blank cells | Missing values not handled before plotting |
| Dark PNG has white background | `fig.patch.set_facecolor()` and `savefig(facecolor=)` missing |
| X-axis labels overlap | `ax.tick_params(rotation=45)` not applied |
| `sns.barplot` one bar per row | Data in wide format — needs `df.melt()` |
| Saved figure cut off | `bbox_inches='tight'` missing from `savefig()` |
| Plotly shows blank white box | Wrong renderer or `fig.show()` environment |
| `ValueError: x and y must have same first dimension` | Array length mismatch |
| `sns.set_theme()` has no effect | Called after `plt.subplots()` — must be first |

Each error entry contains:
- Concise root cause explanation
- ❌ Wrong code block (red background)
- ✅ Fixed code block (green background)
- Copy Fix button
- Run Fix in Playground button

---

### 🖼 Gallery (`pages/gallery.html`)

24 chart examples with visual preview cards. Filter by library or chart purpose (Distribution / Comparison / Relationship / Composition). Click any card → full code loads into the Playground.

---

### 📊 Progress Dashboard (`pages/progress.html`)

**Track your entire learning journey.**

**Top stat strip (5 cards):**
- Lessons Done (X of 42)
- Completion percentage
- Quiz Correct answers
- Day Streak (consecutive active days)
- Badges Earned

**Library progress rings:**
4 animated SVG rings — one per library — showing percentage and count completed.

**Completed Lessons list:**
Every lesson marked complete appears here with library colour and completion date.

**Recommended Next:**
Always shows 5 uncompleted lessons to guide your learning path.

**Recent Activity log:**
Last 100 events (lesson completions, quiz answers, playground runs) with timestamps.

**Streak Calendar:**
28-day grid showing active days. Today is highlighted in accent green. Past active days shown in lighter green.

**Quiz Performance:**
Breakdown by question type showing correct/total and accuracy bar for each type.

**Achievement Badges (10 total):**
Earned badges are highlighted; locked badges are greyed out.

| Badge | Condition |
|---|---|
| 🌱 First Step | Complete first lesson |
| 📊 MPL Master | Complete all 12 Matplotlib lessons |
| 🎨 SNS Pro | Complete all 12 Seaborn lessons |
| ✨ Plotly Wizard | Complete all 10 Plotly lessons |
| 🐼 Pandas Ninja | Complete all 8 Pandas lessons |
| 🏃 Halfway There | Complete 21+ lessons |
| 🏆 Vizualizer | Complete all 42 lessons |
| 🧠 Quiz Ace | Get 8+ correct in the quiz |
| 🔥 On Fire | 3-day activity streak |
| 💎 Committed | 7-day activity streak |

**Reset button:** Permanently clears all progress from localStorage after confirmation.

---

### 📄 Quick Reference (`pages/quickref.html`)

**Compact, printable syntax card collection.**

All 44 syntax cards organized by library and topic. Expandable — click any card title to expand the code. Toggle All expands all at once for browsing.

Filter by library: All / Matplotlib / Seaborn / Plotly / Pandas / Styling / Layout / EDA Workflow

**Print / Save as PDF:**
Click the "🖨 Print / Save PDF" button. The page activates print styles that: hide the navbar and buttons, use a 3-column layout, use white backgrounds with grey code blocks, and render cleanly on A4 or Letter paper. In the print dialog, select "Save as PDF" to get an offline reference card.

**Every card has:** Copy button, ▶ Run button (sends to Playground).

---

## 🛠 Technology Stack

| Component | Technology | Notes |
|---|---|---|
| Python execution | [Pyodide](https://pyodide.org) v0.25.1 | CPython 3.11 compiled to WebAssembly — runs in any browser |
| Hosting | GitHub Pages | Free, automatic deployment via GitHub Actions |
| Frontend | Pure HTML5 + CSS3 + Vanilla JavaScript | No frameworks, no npm, no build step |
| Fonts | Google Fonts | Syne (headings), DM Mono (code), DM Sans (body) |
| Chart capture | Matplotlib Agg backend + base64 | Charts rendered to PNG in-memory, shown as `<img>` |
| Progress storage | Browser `localStorage` | Private to user's device, no server needed |
| Code annotation | Rule-based JavaScript engine | 50+ pattern rules — zero AI API calls |
| CI/CD | GitHub Actions (`deploy.yml`) | Auto-deploys on every push to `main` |
| Device | Android tablet (itel Vistatab 30S) | Entire platform built browser-only |

### Why GitHub Pages, Not Streamlit Community Cloud

| Factor | GitHub Pages + Pyodide | Streamlit Community Cloud |
|---|---|---|
| Python execution | Browser-side (WebAssembly) | Server-side (Python process) |
| Cold start delay | None — static files load instantly | 20–60s sleep delay after inactivity |
| Cost | Free forever, unlimited | Free with concurrent session limits |
| Offline support | Yes, after first load (~40MB cache) | No — requires active server |
| Setup | Push repo → Pages enabled → done | `requirements.txt` + Python env + config |
| Android tablet | ✅ Browser-only workflow | ✅ But slower due to sleep delays |
| No. of pages | 13 HTML pages, all static | Would need one `app.py` + `pages/` |

For a learning platform where Python execution is **the feature** (not the backend), Pyodide in GitHub Pages is the correct architecture.

---

## 📁 Repository Structure

```
vizlearn/
│
├── index.html                         ← Landing page (root)
│
├── pages/
│   ├── lessons.html                   ← 42-lesson curriculum with sidebar
│   ├── playground.html                ← Live Python editor (Pyodide)
│   ├── compare.html                   ← Library comparator (4 libs × 8 charts)
│   ├── params.html                    ← Interactive parameter explorer
│   ├── cheatsheet.html                ← Searchable syntax cards
│   ├── quiz.html                      ← Knowledge quiz with scoring
│   ├── glossary.html                  ← 30+ term visualization glossary
│   ├── errors.html                    ← 15 common errors with fixes
│   ├── gallery.html                   ← 24-chart visual gallery
│   ├── progress.html          [NEW]   ← Learning dashboard & badges
│   ├── quickref.html          [NEW]   ← Printable quick reference
│   └── about.html                     ← Creator bio, portfolio, contacts
│
├── assets/
│   ├── css/
│   │   └── main.css                   ← Full dark-theme stylesheet (1,662 lines)
│   └── js/
│       ├── main.js                    ← Shared: navbar, progress, toasts, shortcuts
│       ├── playground.js              ← Pyodide loader, runner, annotator, tabs
│       └── snippets.js                ← 24 complete, runnable code examples
│
├── .github/
│   └── workflows/
│       └── deploy.yml                 ← GitHub Actions auto-deployment
│
├── README.md                          ← This file
├── LICENSE                            ← MIT License
├── .nojekyll                          ← Bypass Jekyll processing
├── _config.yml                        ← GitHub Pages configuration
└── .gitignore                         ← Ignore OS and editor junk
```

**Total: 23 files | ~600KB uncompressed**

---

## 🚀 Deployment — Step-by-Step

These steps work **entirely from a browser**. No terminal required. Tested on Android tablet.

---

### STEP 1 — Create the GitHub Repository

1. Open [github.com](https://github.com) in your browser and sign in as **cssadewale**
2. Click the **`+`** icon (top-right corner) → **New repository**
3. Fill in the form:
   - **Repository name:** `vizlearn`
   - **Description:** `Free browser-based Python data visualization learning platform`
   - **Visibility:** ✅ **Public** (required for free GitHub Pages)
   - **Initialize this repository with:** leave ALL boxes **UNCHECKED** — no README, no .gitignore, no license (we supply our own)
4. Click **Create repository**

You will see an empty repository page with instructions. Leave it open.

---

### STEP 2 — Enable GitHub Pages (Actions Mode)

Do this **before** uploading files so the deployment workflow triggers automatically on first push.

1. In your new empty repository, click the **Settings** tab (top of the page, not account settings)
2. In the **left sidebar**, scroll down and click **Pages**
3. Under **Source**, click the dropdown showing "Deploy from a branch"
4. Select **GitHub Actions** from the dropdown
5. The page updates automatically — no Save button needed
6. Leave the Settings page

---

### STEP 3 — Upload All Files

**On Android (itel Vistatab 30S or any Android device):**

**Method A — Single Upload (Recommended)**

1. Extract `vizlearn_v3.zip` using your file manager app
2. Go to your empty GitHub repo in the browser
3. Click **Add file** → **Upload files**
4. Tap the upload area — your file picker opens
5. Navigate inside the extracted `vizlearn/` folder
6. Long-press the first file → **Select All** to select everything
7. Tap Open/Upload — GitHub queues all files
8. Scroll down to the **Commit changes** section:
   - Title: `Initial commit — VizLearn v3.0`
   - Leave "Commit directly to the main branch" selected
9. Click **Commit changes**

Wait for GitHub to process all files (may take 30–60 seconds for 23 files).

**Method B — Folder-by-Folder (if Method A fails)**

Upload in this exact order. Use **Add file → Upload files** for each batch:

**Batch 1 — Root files:**
Select: `index.html`, `README.md`, `LICENSE`, `.nojekyll`, `_config.yml`, `.gitignore`
Commit message: `Add root files`

**Batch 2 — GitHub Actions workflow:**
- Click **Add file → Create new file**
- In the filename box at the top, type exactly: `.github/workflows/deploy.yml`
  (GitHub creates the folders automatically when you type `/`)
- Copy the full content of your `deploy.yml` file and paste it into the editor
- Commit message: `Add GitHub Actions deployment workflow`
- Click **Commit new file**

**Batch 3 — CSS:**
- Click **Add file → Upload files**
- Upload `main.css`
- In GitHub's path field, type the destination path: `assets/css/main.css`
- Commit message: `Add stylesheet`

**Batch 4 — JavaScript:**
Upload all three JS files. Set their paths:
- `assets/js/main.js`
- `assets/js/playground.js`
- `assets/js/snippets.js`
Commit message: `Add JavaScript files`

**Batch 5 — All 13 pages:**
Upload all HTML files from the `pages/` folder together.
GitHub will detect they belong in `pages/` from the folder you upload from.
Commit message: `Add all pages`

---

### STEP 4 — Monitor the Deployment

1. Click the **Actions** tab in your repository (top navigation)
2. You will see a workflow run titled **"Deploy VizLearn to GitHub Pages"**
3. It shows a yellow spinner while running
4. Click the workflow run to watch live progress logs
5. The entire process takes **60–90 seconds**
6. When complete, a green ✅ checkmark appears

**If the deployment fails:**
- Click the failed workflow run → click the failed job → read the error log
- The most common causes:
  - `.nojekyll` file not uploaded → re-upload it, commit
  - `deploy.yml` file has incorrect indentation → re-check YAML formatting
  - Files uploaded to wrong paths → check that `pages/*.html` and `assets/css/`, `assets/js/` exist

---

### STEP 5 — Access Your Live Platform

Once the green checkmark appears, your platform is live at:

```
https://cssadewale.github.io/vizlearn
```

GitHub also displays this URL in **Settings → Pages** after successful deployment.

**First visit note:** The Playground page loads Pyodide (~40MB WebAssembly) on first visit. This takes 20–40 seconds on a fast connection, up to 90 seconds on slow mobile. After the first visit, Pyodide is cached in the browser and loads in 3–5 seconds.

---

### STEP 6 — Making Future Updates

After any file change:

1. In your GitHub repo, navigate to the file you want to edit
2. Click the **pencil icon** (Edit this file) in the top-right of the file view
3. Make your changes in the browser editor
4. Scroll down to **Commit changes**
5. Add a descriptive commit message (e.g., `Add 3 new quiz questions`)
6. Select "Commit directly to the `main` branch"
7. Click **Commit changes**
8. GitHub Actions auto-deploys in ~60 seconds
9. Hard-refresh your browser (`Ctrl+Shift+R` or pull-to-refresh on mobile) to see updates

---

### Optional: Custom Domain

If you own a domain (e.g., `vizlearn.ng` or `vizlearn.adewale.dev`):

1. **Settings → Pages → Custom domain** → type your domain → click Save
2. In your DNS provider (Namecheap, GoDaddy, etc.) add:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cssadewale.github.io`
   - For root domain, add 4 A records pointing to GitHub's IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. In GitHub Pages settings, tick **Enforce HTTPS** — free SSL certificate via Let's Encrypt
4. Wait 10–30 minutes for DNS propagation

---

## 💻 How to Use Locally (No Server Needed)

VizLearn is 100% static HTML — no server required to run locally.

**Method 1 — Direct file open (simplest):**
```
1. Extract vizlearn_v3.zip
2. Open index.html directly in Chrome or Firefox
3. Note: Pyodide requires an internet connection on first load
   (downloads ~40MB, then cached permanently in your browser)
```

**Method 2 — Python simple server (recommended for development):**
```bash
cd vizlearn/
python3 -m http.server 8080
# Open: http://localhost:8080
```

**Method 3 — VS Code Live Server:**
```
1. Open the vizlearn/ folder in VS Code
2. Install the "Live Server" extension by Ritwick Dey
3. Right-click index.html → "Open with Live Server"
4. Opens at http://127.0.0.1:5500
```

**Method 4 — Node.js serve (if Node is installed):**
```bash
npx serve vizlearn/
# Opens at http://localhost:3000
```

---

## 📚 Libraries Covered

### Matplotlib — 12 Lessons
The foundational Python visualization library. Every other library builds on it.

| # | Topic | Key Concepts |
|---|---|---|
| 01 | What is Matplotlib? | pyplot vs OOP interface, import conventions |
| 02 | Figure & Axes Anatomy | fig, ax, spines, ticks, the mental model |
| 03 | Line Charts | ax.plot(), linestyle, markers, fills, multi-series |
| 04 | Bar Charts | ax.bar(), ax.barh(), grouped, stacked, value labels |
| 05 | Scatter Plots | ax.scatter(), c, s, cmap, alpha, edgecolors |
| 06 | Histograms | ax.hist(), bins, density, cumulative |
| 07 | Pie Charts | ax.pie(), autopct, explode, donut via wedgeprops |
| 08 | Subplots & Layouts | plt.subplots(nrows, ncols), sharex, sharey |
| 09 | Colormaps | viridis, coolwarm, sequential vs diverging vs qualitative |
| 10 | Styling & Themes | spines, tick_params, facecolor, tight_layout |
| 11 | Annotations & Text | ax.text(), ax.annotate(), arrows, data labels |
| 12 | Saving & Exporting | savefig(), dpi, bbox_inches, format options |

### Seaborn — 12 Lessons
Statistical visualization with beautiful defaults and DataFrame integration.

| # | Topic | Key Concepts |
|---|---|---|
| 01 | Seaborn vs Matplotlib | When to use each, the relationship |
| 02 | Themes & Palettes | set_theme(), set_palette(), style options |
| 03 | Scatter & Relational | scatterplot(), hue, size, style encoding |
| 04 | Distribution Plots | histplot(), kdeplot(), kde=True overlay |
| 05 | Box & Violin Plots | boxplot(), violinplot(), split, inner |
| 06 | Bar & Count Plots | barplot(), countplot(), errorbar aggregation |
| 07 | Heatmaps | heatmap(), df.corr(), annot, fmt, center |
| 08 | Pair Plots | pairplot(), diag_kind, hue, EDA workflow |
| 09 | FacetGrid | FacetGrid(), map(), row/col parameters |
| 10 | Line Plots | lineplot(), CI band, errorbar, multi-group |
| 11 | Regression Plots | regplot(), lmplot(), confidence interval |
| 12 | Combining with Matplotlib | Passing ax=, fig.tight_layout() after seaborn |

### Plotly — 10 Lessons
Interactive HTML-based charts with hover, zoom, and animation.

| # | Topic | Key Concepts |
|---|---|---|
| 01 | Why Plotly? | Static vs interactive, output format |
| 02 | Plotly Express | px vs go, built-in datasets |
| 03 | Interactive Scatter | px.scatter(), hover_data, size, color |
| 04 | Interactive Bar | px.bar(), barmode group/stack, text labels |
| 05 | Line Charts | px.line(), rangeslider, markers |
| 06 | Pie & Donut | px.pie(), hole, pull, textinfo |
| 07 | Heatmaps & Maps | px.imshow(), px.choropleth() |
| 08 | 3D Charts | px.scatter_3d(), px.surface() |
| 09 | Animations | animation_frame, animation_group |
| 10 | Layout & Styling | update_layout(), update_traces(), templates |

### Pandas Plotting — 8 Lessons
Quick EDA visualization built directly into DataFrames.

| # | Topic | Key Concepts |
|---|---|---|
| 01 | df.plot() Overview | kind parameter, all chart types at a glance |
| 02 | Line & Area Charts | plot.line(), plot.area(), stacked |
| 03 | Bar & Horizontal Bar | plot.bar(), plot.barh(), stacked=True |
| 04 | Histograms | plot.hist(), bins, alpha, overlay behavior |
| 05 | Box Plots | plot.box(), patch_artist, custom colors |
| 06 | Scatter & Hex | plot.scatter(), plot.hexbin() |
| 07 | Combining with Seaborn | Passing ax= to seaborn from pandas |
| 08 | EDA Workflow | End-to-end exploration of a new dataset |

---

## ⚙ How the Playground Works (Pyodide)

Pyodide compiles CPython 3.11 to WebAssembly (WASM). This means a complete Python interpreter runs inside your browser's JavaScript engine.

### Loading Sequence
```
Browser visits playground.html
    │
    ├─► Loads Pyodide script from CDN (~40MB, cached after first visit)
    │       └─► CPython 3.11 interpreter initialised in browser
    │
    ├─► Loads Python packages via micropip:
    │       matplotlib, numpy (from Pyodide built-ins)
    │       seaborn, pandas, plotly (via micropip from PyPI)
    │
    ├─► Sets matplotlib backend to 'Agg' (non-interactive, renders to bytes)
    │
    └─► Status dot turns green: "Python ready ✓"
```

### Chart Capture Mechanism

When you click Run, the code is wrapped in a Python patch:
1. `plt.show()` is replaced with a capture function
2. The capture function renders each figure to a PNG using `io.BytesIO()`
3. The PNG bytes are base64-encoded
4. The base64 string is returned to JavaScript
5. JavaScript creates an `<img>` tag with `src="data:image/png;base64,..."`
6. The image appears in the output panel

This is transparent — any code that calls `plt.show()` works as expected.

### Load Times
| Visit | Time |
|---|---|
| First visit ever | 20–40 seconds (fast connection), up to 90s (slow mobile) |
| Subsequent visits | 3–5 seconds (Pyodide cached by browser) |
| Code execution | < 1 second for most charts |

### What Works
- All matplotlib chart types
- All seaborn functions and datasets (`sns.load_dataset()`)
- All pandas `.plot()` methods
- numpy operations
- plotly (renders as static PNG — full interactivity needs Jupyter/Colab)
- `print()` statements (shown in Console tab)
- Multiple figures in one code run

### What Does Not Work
- File I/O (`open()`, `pd.read_csv('local_file.csv')`) — browser sandbox has no disk
- Network requests from Python code
- Heavy libraries not pre-installed (opencv, tensorflow, torch)
- Full Plotly interactivity (JavaScript rendering limitation in Pyodide)

---

## ⌨ Keyboard Shortcuts

| Shortcut | Page | Action |
|---|---|---|
| `Ctrl+Enter` | Playground | Run code immediately |
| `Tab` | Playground editor | Insert 4-space indentation |
| `G` | Any page (outside input fields) | Jump to Playground |
| `Escape` | Any page | Close mobile navigation menu |

---

## 🤝 Contributing

All data is stored directly in the HTML/JS files — no build step, no database, no framework. To add content:

| What to add | File to edit | Data structure |
|---|---|---|
| New lesson | `pages/lessons.html` | Add to `LESSONS` object |
| New quiz question | `pages/quiz.html` | Add to `QUIZZES` array |
| New gallery example | `pages/gallery.html` | Add to `GALLERY` array |
| New error entry | `pages/errors.html` | Add to `ERRORS` array |
| New glossary term | `pages/glossary.html` | Add to `TERMS` array |
| New comparator chart type | `pages/compare.html` | Add to `COMPARE` object |
| New code snippet | `assets/js/snippets.js` | Add to `SNIPPETS` object |
| New cheat sheet card | `pages/cheatsheet.html` | Add to `CHEAT_DATA` array |
| New quick reference card | `pages/quickref.html` | Add to `QR_CARDS` array |

**Steps:**
1. Fork the repository
2. Create a branch: `git checkout -b feature/add-seaborn-violin-lesson`
3. Edit the relevant file
4. Test by opening `index.html` in a browser
5. Open a Pull Request with a clear description of what was added

---

## 👨🏿‍💻 Creator

<table>
<tr>
<td width="72" valign="top">
<div style="width:56px;height:56px;background:linear-gradient(135deg,#00e5a0,#00b4d8);border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;color:#0b0f1a;font-size:1.1rem;">AA</div>
</td>
<td>

**Adewale Samson Adeagbo**  
*Data Scientist · EdTech Builder · Virtual Tutor · AI-Augmented Solutions Developer*  
Lagos, Nigeria 🇳🇬 · Born 09/05/1992 · Nigerian, Male, Christian, Single

</td>
</tr>
</table>

### About

An emerging Data Scientist and ML Engineer transitioning from **15+ years as a STEM educator** (Mathematics, Further Mathematics, Physics, Chemistry, Computer Science). Director and Data Lead at **HMG Concepts** (est. 2015). Operator of **HMG Academy** — a full-service virtual learning institution with a team of teachers covering all Nigerian and international exams: WAEC, NECO, BECE, UTME, Post-UTME, IGCSE, IELTS, JUPEB, SAT.

B.Sc/Ed Computer Science Education — Lagos State University (LASU), 2023.

**This entire platform was built on an Android tablet (itel Vistatab 30S) using a browser-based workflow with zero terminal access.**

### Contact

| Channel | Details |
|---|---|
| 💼 LinkedIn | [linkedin.com/in/adewalesamsonadeagbo](https://linkedin.com/in/adewalesamsonadeagbo) |
| 🐙 GitHub | [github.com/cssadewale](https://github.com/cssadewale) |
| 🌐 Portfolio | [cssadewale.pages.dev](https://cssadewale.pages.dev) |
| 𝕏 Twitter/X | [x.com/cssadewale](https://x.com/cssadewale) |
| 📸 Instagram | [instagram.com/cssadewale](https://instagram.com/cssadewale) |
| 📘 Facebook | [facebook.com/cssadewale](https://facebook.com/cssadewale) |
| 📺 YouTube | [youtube.com/@hmgconcepts](https://youtube.com/@hmgconcepts) |
| ✉ Email (Primary) | buildingmyictcareer@gmail.com |
| ✉ Email (Alt) | adeagboadewalesamson@gmail.com |
| 📞 Phone 1 | +234 810 086 6322 |
| 📞 Phone 2 | +234 809 448 1488 |

### Active Programmes (2026)
- **DSN × 3MTT × Google.org** — DeepTech_Ready, DSML Track, Cohort 3
- **DSN × Microsoft Elevate AI** — AI Developers Programme, AI-900 Track, Cohort 1
- **SkillBuild Hub Ambassador** — Cohort 4, April–June 2026

### Certifications
- Data Science — 3MTT / Federal Government of Nigeria (Dec 2025)
- Data Analysis — Digital Skillup Africa (Nov 2025)
- Data Science — Youthrive / Access CareerEx (Jul 2025)
- Digital Marketing — Afritech (Feb 2025)
- Piano & Rudiments Diplomas — Rotop Music Academy (2013)
- System Data Mgmt / Desktop Publishing / Computer Engineering — Quality Computer Training Center (2014)

### Technical Skills
**Data Science & ML:** Python, NumPy, Pandas, Scikit-Learn, Matplotlib, Seaborn, Plotly, XGBoost, Feature Engineering, Model Evaluation  
**Analytics:** SQL, Excel (Advanced), Google Sheets, Power BI, Tableau  
**Deployment:** Streamlit, FastAPI, Hugging Face Spaces, GitHub Pages, Git/GitHub, Pyodide, HTML/CSS/JS, Supabase

### ML Portfolio

| Project | Description | GitHub | Live |
|---|---|---|---|
| Yakub Staff Promotion Prediction | Random Forest classifier for employee promotion eligibility | [repo](https://github.com/cssadewale/yakub-promotion-prediction) | [app](https://yakub-promotion-prediction.streamlit.app) |
| Insurance Claim Prediction | Binary classification for claim likelihood | [repo](https://github.com/cssadewale/insurance-claim-prediction) | [app](https://adewale-insurance-claim-prediction.streamlit.app) |
| Bank Customer Churn | Predicts customer attrition | [repo](https://github.com/cssadewale/bank-customer-churn-prediction) | [app](https://adewale-bank-customer-churn-prediction.streamlit.app) |
| Income Level Prediction | Above/below income threshold classification | [repo](https://github.com/cssadewale/income-level-prediction) | [app](https://adewale-income-level-prediction.streamlit.app) |
| Fake News Detector (TruthLens) | NLP classifier for real vs fake news | [repo](https://github.com/cssadewale/fake-news-detector) | [app](https://adewale-fake-news-detector.streamlit.app) |
| SwiftChain Delivery Delay | Logistics delay prediction | [repo](https://github.com/cssadewale/swiftchain-delivery-prediction) | [app](https://adewale-swiftchain-delivery-prediction.streamlit.app) |
| Employee Burnout Predictor (NeuroWell) | Burnout rate regression | [repo](https://github.com/cssadewale/burnout-prediction) | [app](https://adewale-burnout-prediction.streamlit.app) |
| Student Performance Tracker | Academic performance visualisation | [repo](https://github.com/cssadewale/student-performance-tracker) | [app](https://adewale-student-performance-tracker.streamlit.app) |
| Student At-Risk Predictor | Identifies at-risk students before exams | [repo](https://github.com/cssadewale/student-at-risk-predictor) | [app](https://student-at-risk-predictor.streamlit.app) |
| CBT System (CBT.ng) | Free CSV-driven computer-based testing platform | [repo](https://github.com/cssadewale/cbt-system) | [teacher](https://cssadewale.github.io/cbt-system/teacher.html) |
| VizLearn (this project) | Browser-based Python viz learning platform | [repo](https://github.com/cssadewale/vizlearn) | [platform](https://cssadewale.github.io/vizlearn) |

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for the full text.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this software, with attribution.

---

<div align="center">

**Built with 💚 in Lagos, Nigeria · 2025–2026**  
*Entirely on an Android tablet (itel Vistatab 30S) · Browser-only workflow · No terminal*

⬡ [vizlearn](https://cssadewale.github.io/vizlearn) · by [Adewale Samson Adeagbo](https://cssadewale.pages.dev) · [@cssadewale](https://github.com/cssadewale)

[⬆ Back to Top](#-vizlearn--python-data-visualization-learning-platform)

</div>
