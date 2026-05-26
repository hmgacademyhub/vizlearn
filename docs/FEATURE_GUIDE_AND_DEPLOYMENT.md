# VizLearn Enhanced — Feature Guide and Deployment Manual

## 1. Enhancement philosophy

The enhanced version keeps every existing feature and adds new features that match the creator’s persona: educator, data scientist, EdTech builder, and free-tool problem solver.

No AI API is used. The platform remains a static website powered by HTML, CSS, Vanilla JavaScript, Pyodide, localStorage, and free hosting such as GitHub Pages or Cloudflare Pages.

## 2. Existing features preserved

The following pre-existing features were retained:

1. **Home page** — platform overview, library paths, workflow, and creator links.
2. **Lessons** — 42 structured lessons across Matplotlib, Seaborn, Plotly, and Pandas Plotting.
3. **Playground** — browser-based Python execution using Pyodide.
4. **Code Annotator** — rule-based line-by-line code explanation, no AI API.
5. **Snippet Library** — runnable examples across visualization libraries.
6. **Library Comparator** — same chart represented in multiple libraries.
7. **Parameter Explorer** — controls for understanding how visualization parameters change output.
8. **Cheat Sheet** — searchable syntax cards.
9. **Quiz** — chart recognition, debugging, prediction, and parameter questions.
10. **Glossary** — visualization terms with examples.
11. **Error Guide** — common errors, root causes, wrong code, and fixed code.
12. **Gallery** — chart examples that open in the Playground.
13. **Progress Dashboard** — lessons, badges, streaks, quiz history, and activity log.
14. **Quick Reference** — printable syntax reference.
15. **About** — creator biography and links.

## 3. New enhanced features added

### 3.1 Learning Roadmap (`pages/roadmap.html`)

**Purpose:** Guide learners from simple to complex instead of leaving them to browse randomly.

**How it works:**
- The roadmap has 8 phases.
- Each phase has practical milestones.
- Learners tick completed milestones.
- Progress is saved in `localStorage` under `vizlearn_roadmap`.

**Learning sequence:**
1. Orientation
2. Chart recognition
3. Core grammar
4. Parameter intuition
5. Dataset practice
6. Comparison and debugging
7. Data storytelling
8. Capstone portfolio proof

**Why it matters:** It reflects a teacher’s method: sequence, practice, feedback, mastery.

### 3.2 Dataset Lab (`pages/datasets.html`)

**Purpose:** Give learners realistic datasets without needing a backend or file uploads.

**How it works:**
- Each dataset is embedded as CSV text inside JavaScript.
- Starter Python code uses `StringIO` and `pd.read_csv()`.
- Learners can run the dataset code in the Playground.
- Learners can download the CSV for offline use.

**Included dataset themes:**
- Nigerian student scores
- Virtual academy enquiries
- Small business sales mix
- Attendance and learning outcomes
- Delivery delay operations
- Data visualization learner survey

**Why it matters:** Data visualization should be learned with data questions, not only chart syntax.

### 3.3 Project Studio (`pages/projects.html`)

**Purpose:** Convert lessons into portfolio-style practice.

**How it works:**
- Six guided projects move from beginner to advanced.
- Each project includes:
  - Problem brief
  - Dataset recommendation
  - Required chart outputs
  - Success rubric
  - Starter code
  - Local completion tracking

**Projects included:**
1. Score Distribution Report
2. Enquiry Conversion Dashboard
3. Attendance Early-Warning Visual
4. Sales Mix Diagnostic
5. Delivery Delay Investigation
6. Full Data Story Brief

**Why it matters:** It helps the learner prove ability, not just consume lessons.

### 3.4 Chart Advisor and Story Builder (`pages/storytelling.html`)

**Purpose:** Help learners choose charts and explain insights without an AI API.

**How it works:**
- Learner selects analysis intent, variable types, grouping, and audience.
- A transparent rule-based engine recommends chart type and syntax.
- The page explains why the recommendation fits.
- Learner writes a data story brief:
  - Title
  - Audience
  - Insight
  - Evidence
  - Recommended action
  - Limitation
- Brief can be saved locally and exported as Markdown.

**Why it matters:** A good chart is not enough; the learner must explain what the chart means.

### 3.5 PWA/offline-ready static shell

**Files added:**
- `manifest.webmanifest`
- `sw.js`
- `assets/icons/icon.svg`

**Purpose:** Make the static platform installable/cacheable on supported browsers.

**How it works:**
- The service worker caches the main HTML, CSS, and JS files.
- Previously visited assets can load faster or offline.
- Pyodide and external CDN files still require first-time network access before browser caching.

**Why it matters:** It improves access while remaining free.

### 3.6 Progress backup and restore

**Location:** `pages/progress.html`

**Purpose:** Let learners move progress between browsers/devices without accounts or a database.

**How it works:**
- Export creates a JSON backup containing progress, streaks, roadmap ticks, projects, quiz history, and story brief.
- Import restores those values into localStorage.

**Why it matters:** localStorage is private and free, but device-bound. Backup/restore removes that limitation.

## 4. Technology stack

| Need | Tool used | Cost |
|---|---|---|
| Hosting | GitHub Pages or Cloudflare Pages | Free |
| Python execution | Pyodide/WebAssembly | Free |
| Frontend | HTML, CSS, Vanilla JS | Free |
| Progress storage | Browser localStorage | Free |
| PWA shell | Service Worker + Web Manifest | Free |
| Content data | Embedded JS/HTML arrays | Free |
| Chart guidance | Rule-based JavaScript | Free |
| Deployment automation | GitHub Actions | Free for public repo |

## 5. Repository structure

```text
vizlearn-enhanced/
├── index.html
├── manifest.webmanifest
├── sw.js
├── README.md
├── LICENSE
├── .nojekyll
├── _config.yml
├── .gitignore
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   ├── js/playground.js
│   ├── js/snippets.js
│   └── icons/icon.svg
├── pages/
│   ├── about.html
│   ├── cheatsheet.html
│   ├── compare.html
│   ├── datasets.html
│   ├── errors.html
│   ├── gallery.html
│   ├── glossary.html
│   ├── lessons.html
│   ├── params.html
│   ├── playground.html
│   ├── progress.html
│   ├── projects.html
│   ├── quickref.html
│   ├── quiz.html
│   ├── roadmap.html
│   └── storytelling.html
├── docs/
│   ├── FEATURE_GUIDE_AND_DEPLOYMENT.md
│   └── PERSONA_ANALYSIS.md
└── .github/workflows/deploy.yml
```

## 6. Deployment to GitHub Pages — clear steps

### Step 1: Create a repository

1. Sign in to GitHub.
2. Click **+ → New repository**.
3. Repository name: `vizlearn` or `vizlearn-enhanced`.
4. Set visibility to **Public**.
5. Do not initialize with README, license, or `.gitignore` if uploading this package.
6. Click **Create repository**.

### Step 2: Upload files

Upload the contents of `vizlearn-enhanced/`, not the folder itself.

The repository root must contain:
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `assets/`
- `pages/`
- `.github/workflows/deploy.yml`
- `.nojekyll`

### Step 3: Enable Pages through GitHub Actions

1. Open the repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. Go back to the repository home.

### Step 4: Trigger deployment

1. Commit the uploaded files to the `main` branch.
2. Open the **Actions** tab.
3. Wait for **Deploy VizLearn to GitHub Pages** to finish.
4. A green checkmark means deployment succeeded.

### Step 5: Open the live site

Your site will usually be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

Example:

```text
https://cssadewale.github.io/vizlearn/
```

### Step 6: Test important pages

After deployment, test:

1. Home: `/`
2. Roadmap: `/pages/roadmap.html`
3. Playground: `/pages/playground.html`
4. Dataset Lab: `/pages/datasets.html`
5. Project Studio: `/pages/projects.html`
6. Story Builder: `/pages/storytelling.html`
7. Progress export/import: `/pages/progress.html`

### Step 7: First Pyodide load expectation

The Playground downloads Pyodide and Python packages on first load. This can take 20–90 seconds depending on network speed. Later visits are faster because the browser caches resources.

## 7. Deployment to Cloudflare Pages — alternative free method

### Step 1: Push project to GitHub

Cloudflare Pages connects to a GitHub repository, so upload the project to GitHub first.

### Step 2: Create Cloudflare Pages project

1. Sign in to Cloudflare.
2. Go to **Workers & Pages**.
3. Click **Create application → Pages → Connect to Git**.
4. Select the GitHub repository.
5. Choose the branch: `main`.

### Step 3: Build settings

Because this is a static site:

- Framework preset: **None**
- Build command: leave empty
- Build output directory: `/` or leave default if Cloudflare accepts root

### Step 4: Deploy

Click **Save and Deploy**. Cloudflare will publish the static files.

## 8. Updating content later

To add new content without changing architecture:

| Add this | Edit this file |
|---|---|
| Lesson | `pages/lessons.html` |
| Quiz question | `pages/quiz.html` |
| Dataset | `pages/datasets.html` |
| Project | `pages/projects.html` |
| Story rule | `pages/storytelling.html` |
| Snippet | `assets/js/snippets.js` |
| Error fix | `pages/errors.html` |
| Glossary term | `pages/glossary.html` |
| Shared style | `assets/css/main.css` |

## 9. Cost-control rules

To keep the platform free:

1. Do not add paid AI APIs.
2. Do not add a backend unless absolutely necessary.
3. Prefer static JSON/JS arrays for content.
4. Use localStorage for learner state.
5. Use GitHub Pages or Cloudflare Pages for hosting.
6. Use rule-based JavaScript for recommendation features.
7. Use embedded CSV or downloadable CSV instead of databases for small learning datasets.

## 10. Final quality checklist

Before publishing:

- [ ] All links work from root and from `/pages/`.
- [ ] `assets/css/main.css` loads correctly.
- [ ] `assets/js/main.js` loads correctly.
- [ ] Playground loads Pyodide.
- [ ] Dataset Lab can open code in Playground.
- [ ] Project Studio can open starter code in Playground.
- [ ] Story Builder exports Markdown.
- [ ] Progress backup exports JSON and restores successfully.
- [ ] GitHub Actions deployment succeeds.
- [ ] Site works on mobile screen sizes.

## 11. Additional expert enhancements added

### 11.1 CSV Upload Lab (`pages/upload.html`)

**Purpose:** Let learners practice with their own small CSV files without a server, database, account, or AI API.

**How it works:**
- The browser reads the CSV using the FileReader API.
- JavaScript parses the CSV locally.
- Columns are inferred as numeric, categorical, date, text, or empty.
- A rule-based chart recommender suggests histogram, bar chart, scatter plot, or line chart.
- Generated Python embeds the CSV inside a `StringIO` block so it can run in the Pyodide Playground.

**Why it matters:** This moves VizLearn closer to real data science work. Learners can bring their own data and still remain fully private and free.

### 11.2 Instructor Mode (`pages/instructor.html`)

**Purpose:** Support teachers, facilitators, HMG Academy, bootcamps, and YouTube tutorials.

**How it works:**
- Instructor selects session length, learner level, topic focus, and class format.
- A transparent template engine generates a lesson plan.
- The plan includes objective, timing, demonstration, guided practice, independent task, reflection, and assessment prompt.
- A reusable assessment rubric is included.

**Why it matters:** It extends VizLearn from a learner-only tool into a teaching platform aligned with Adewale Samson Adeagbo’s educator-first persona.

## 12. Final expert enhancement layer

### 12.1 Learning Tools Hub (`pages/tools.html`)

**Purpose:** Provide the study-support tools that turn VizLearn from a collection of pages into a complete self-paced learning system.

**Included tools:**

1. **Global Platform Search**
   - Static search index across major pages and features.
   - Works instantly without server-side search.
   - Helps learners find heatmaps, errors, CSV tools, projects, storytelling support, and references quickly.

2. **Personal Notes and Bookmarks**
   - Learners can save notes with title, related page, tags, importance, and body.
   - Notes are stored in `localStorage`.
   - Notes can be exported as Markdown.
   - No account, database, or backend is required.

3. **Flashcard Review**
   - Core visualization concepts are presented as flashcards.
   - Learners mark answers as Hard, Good, or Easy.
   - A simple local spaced-practice schedule controls the next review date.

4. **Visualization Quality Checklist**
   - A practical checklist for reviewing charts before submission.
   - Covers chart question, chart type, titles, labels, units, colors, legends, scale, and interpretation.
   - Checklist state is stored locally and can be copied as a report.

5. **Printable Certificate**
   - Generates a local certificate for workshops, self-paced learning, or HMG Academy sessions.
   - Uses browser print/save-as-PDF.
   - It is clearly labelled as a learning record, not regulated accreditation.

### 12.2 Accessibility Preference Panel

**Purpose:** Make the platform easier to read and teach from across different devices and learners.

**Features:**
- Floating `Aa` accessibility button.
- Font size options: normal, large, extra large.
- High contrast mode.
- Reduce motion mode.
- Preferences are stored locally in `localStorage`.

**Why it matters:** Accessibility supports the HMG Concepts mission of widening access to quality learning.

## 13. Enterprise feature layer

### 13.1 Enterprise Console (`pages/enterprise.html`)

**Purpose:** Give schools, HMG Academy cohorts, NGOs, bootcamps, and training organisations a lightweight administrative system without paid software.

**Modules included:**

1. **Organisation Profile and Local Branding**
   - Stores organisation name, programme name, facilitator, email, brand colour, default cohort, and internal policy.
   - Export/import as JSON.
   - Useful for client-specific or academy-specific deployments.

2. **Cohort and Learner Manager**
   - Create cohorts with start/end dates and delivery mode.
   - Add learners with learner ID, contact, and cohort assignment.
   - Export learners as CSV.
   - Import learners from CSV.
   - Export/import cohorts as JSON.

3. **Cohort Analytics from Learner Backups**
   - Facilitator imports multiple learner backup JSON files exported from the Progress page.
   - The console calculates lessons completed, quiz performance, roadmap milestones, and projects completed.
   - Analytics can be exported as CSV.
   - No central database is required.

4. **Assignment and Deadline Builder**
   - Create cohort assignments with title, due date, difficulty, tasks, and instructions.
   - Export assignments as Markdown for WhatsApp, email, Google Classroom, LMS, or print.
   - Export assignments as JSON for reuse.

5. **Issue, Feedback and Improvement Register**
   - Track bugs, content gaps, learner confusion, device/browser issues, feature requests, and deployment issues.
   - Export issues as CSV.
   - Copy GitHub Issue formatted text.

6. **Audit Log**
   - Records administrative actions locally.
   - Export audit as CSV.
   - Supports accountability without a backend.

7. **Governance and Enterprise Readiness**
   - Provides guidance on local-first storage, data minimisation, no AI API exposure, portable records, and recommended controls.

### 13.2 Security and governance files

**Files added:**

```text
_headers
SECURITY.md
docs/ENTERPRISE_FEATURES.md
```

**Purpose:** Improve enterprise readiness while remaining static and free.

`_headers` is used by Cloudflare Pages to apply security-related browser headers. GitHub Pages ignores it, but it does not break anything.

`SECURITY.md` documents the privacy and data handling model.

`docs/ENTERPRISE_FEATURES.md` explains the enterprise modules in detail.

### 13.3 Why this remains free

The enterprise layer does not use:

- Paid AI APIs
- Backend servers
- Databases
- Authentication providers
- Paid analytics tools
- Cloud functions

It uses:

- localStorage
- JSON import/export
- CSV import/export
- Markdown export
- Browser FileReader API
- Static hosting

This is the most cost-effective enterprise-light architecture for a free learning platform.

## 14. Data Science Curriculum Developer Enhancement

### 14.1 Master Curriculum (`pages/curriculum.html`)

**Purpose:** Move a beginner data scientist progressively from first principles to expert-level visualization, EDA, model evaluation visuals, storytelling, portfolio building, and enterprise reporting.

**Curriculum levels:**

1. Beginner
2. Intermediate
3. Advanced
4. Expert

**Tracks covered:**

- Foundations
- Libraries
- EDA
- Statistics
- ML Visuals
- Storytelling
- Enterprise
- Portfolio

**Each module includes:**

- Learning outcomes
- Core concepts
- Practical activities
- Assessment evidence
- Project output
- Related VizLearn tools
- Estimated hours

**Built-in tools:**

- Level/track filtering
- Search
- Local module completion tracking
- Markdown syllabus export
- CSV curriculum export
- Study plan generator

This makes the platform a true curriculum system, not just a collection of tools.

### 14.2 Enterprise Training Pack Generator (`pages/training.html`)

**Purpose:** Help schools, HMG Academy, NGOs, bootcamps, and organisations generate training documents without paying for an LMS.

**Documents generated:**

- Programme proposal
- Learning outcomes
- Weekly scheme of work
- Assessment model
- Required free tools
- Facilitator checklist
- Data governance note

**CSV templates generated:**

- Attendance register
- Completion register
- Assessment scores

This supports enterprise training operations using free browser downloads, Markdown, and CSV.

### 14.3 New documentation files

```text
docs/CURRICULUM_GUIDE.md
docs/TRAINING_PACK_GUIDE.md
```

These explain the curriculum design and enterprise training workflow in detail.
