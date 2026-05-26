# VizLearn Enterprise — Feature Guide

## 1. Purpose of this package

This folder contains the deployment-ready **VizLearn Enterprise** static learning platform. It is designed for individual learners, data science cohorts, schools, HMG Academy, NGOs, bootcamps, and lightweight organisational training.

The platform remains free-tool based. It does not use an AI API, backend server, database, paid LMS, cloud functions, or paid analytics.

## 2. Architecture

| Need | Free implementation |
|---|---|
| Hosting | GitHub Pages or Cloudflare Pages |
| Python execution | Pyodide in the browser |
| Frontend | HTML, CSS, Vanilla JavaScript |
| Learner progress | Browser localStorage |
| Enterprise records | localStorage + JSON/CSV export/import |
| Curriculum | Static JavaScript content |
| Training pack | Markdown and CSV generation in browser |
| CSV upload | Browser FileReader API |
| Search | Static index |
| Security headers | `_headers` for Cloudflare Pages |
| Deployment automation | GitHub Actions |

## 3. Core learning features preserved

The original learning platform features remain intact:

1. **Home** — platform introduction, learning paths, enhanced feature cards.
2. **Lessons** — structured visualization lessons for Matplotlib, Seaborn, Plotly, and Pandas.
3. **Playground** — browser-based Python execution using Pyodide.
4. **Code Annotator** — rule-based explanation of visualization code.
5. **Snippet Library** — runnable chart examples.
6. **Comparator** — same chart shown across libraries.
7. **Parameter Explorer** — interactive parameter intuition.
8. **Cheat Sheet** — searchable syntax cards.
9. **Quiz** — code-reading, debugging, prediction, and parameter questions.
10. **Glossary** — visualization terms and examples.
11. **Error Guide** — common errors and fixes.
12. **Gallery** — chart examples that open in Playground.
13. **Progress Dashboard** — lesson progress, badges, quiz history, activity log, backup/restore.
14. **Quick Reference** — printable syntax reference.
15. **About** — creator and HMG Concepts context.

## 4. Curriculum and data science tutor features

### 4.1 Master Curriculum

File:

```text
pages/curriculum.html
```

A beginner-to-expert data visualization curriculum designed like a proper data science training programme.

It includes four levels:

1. **Beginner** — chart purpose, Python basics, Matplotlib, Seaborn, first EDA, insight writing.
2. **Intermediate** — distribution analysis, relationship analysis, categorical comparison, time series, Plotly, reproducible reports.
3. **Advanced** — uncertainty, model evaluation visuals, explainability, executive storytelling, dashboard design, capstone.
4. **Expert** — enterprise governance, cohort analytics, visualization design systems, teaching visualization.

Each module contains:

- Learning outcomes
- Core concepts
- Practical activities
- Assessment evidence
- Project output
- Estimated hours
- Related platform tools

The page also includes:

- Level filter
- Track filter
- Search
- Local completion tracking
- Markdown syllabus export
- CSV curriculum export
- Study plan generator

### 4.2 Training Pack Generator

File:

```text
pages/training.html
```

Generates programme documents for schools, academies, NGOs, bootcamps, and training teams.

It creates:

- Programme rationale
- Learning outcomes
- Weekly scheme of work
- Assessment model
- Required free tools
- Facilitator checklist
- Governance note

It also downloads CSV templates for:

- Attendance register
- Completion register
- Assessment scores

## 5. Enterprise features

### 5.1 Enterprise Console

File:

```text
pages/enterprise.html
```

A local-first admin console for institutional use.

Modules:

1. **Organisation Profile and Local Branding**
   - Organisation name
   - Programme name
   - Facilitator/lead
   - Contact email
   - Brand colour
   - Internal policy
   - JSON import/export

2. **Cohort and Learner Manager**
   - Create cohorts
   - Add learners
   - Import learners from CSV
   - Export learners as CSV
   - Export/import cohort config as JSON

3. **Cohort Analytics from Learner Backups**
   - Import multiple learner backup JSON files from Progress page.
   - Aggregate lessons completed, quiz results, roadmap milestones, and projects completed.
   - Export analytics as CSV.

4. **Assignment and Deadline Builder**
   - Create assignments for cohorts.
   - Select tasks from built-in platform activities.
   - Export as Markdown or JSON.

5. **Issue, Feedback and Improvement Register**
   - Track bugs, content gaps, learner confusion, device issues, feature requests, and deployment issues.
   - Export issues as CSV.
   - Copy GitHub Issue formatted text.

6. **Audit Log**
   - Records administrative actions locally.
   - Export audit trail as CSV.

7. **Governance Guidance**
   - Data minimisation
   - No AI API exposure
   - Local-first storage
   - Portable records
   - Recommended controls

### 5.2 Enterprise templates

Folder:

```text
templates/
```

Included templates:

- `learners_import_template.csv`
- `attendance_register_template.csv`
- `assessment_scores_template.csv`
- `completion_register_template.csv`
- `sample_cohort_config.json`
- `sample_org_config.json`

These files help facilitators start quickly with cohort administration.

## 6. Learner support tools

### 6.1 Learning Tools Hub

File:

```text
pages/tools.html
```

Includes:

- Global platform search
- Personal notes
- Flashcard review
- Visualization quality checklist
- Printable certificate

### 6.2 Accessibility panel

A floating `Aa` button gives:

- Larger font sizes
- High contrast mode
- Reduce motion mode

Preferences are stored locally.

## 7. Data practice features

### 7.1 Dataset Lab

File:

```text
pages/datasets.html
```

Embedded practice datasets with:

- Analysis questions
- Suggested visuals
- CSV download
- One-click Playground starter code

### 7.2 CSV Upload Lab

File:

```text
pages/upload.html
```

Allows learners to upload their own small CSV files privately in the browser.

It can:

- Preview rows
- Infer column types
- Recommend chart type
- Generate Python code
- Open generated code in Playground

No uploaded CSV leaves the browser.

## 8. No AI API policy

The platform does not use OpenAI, Gemini, Claude, or any AI API.

AI APIs were avoided because they are not cost-effective for a free learning platform and they introduce privacy/cost risks.

Instead, the platform uses:

- Rule-based chart recommendation
- Static curriculum content
- Local code generation
- Browser storage
- Export/import workflows

## 9. Recommended enterprise workflow

### Before training

1. Deploy the platform.
2. Open Enterprise Console.
3. Set organisation profile.
4. Create cohort.
5. Import learners from CSV.
6. Generate Training Pack.
7. Export cohort configuration for backup.

### During training

1. Learners follow Curriculum and Roadmap.
2. Learners practise with Playground, Dataset Lab, and CSV Lab.
3. Facilitator gives assignments through Enterprise Console.
4. Learners export Progress backups weekly.
5. Facilitator imports backups into Enterprise Analytics.
6. Facilitator tracks issues and feedback.

### After training

1. Export analytics CSV.
2. Export completion register.
3. Export assessment scores.
4. Export issue register.
5. Export audit log.
6. Generate certificates where appropriate.
7. Store exported records securely.
