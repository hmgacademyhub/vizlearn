# VizLearn Enterprise Features — Free Static Edition

## Purpose

This document explains the enterprise-style features added to VizLearn without introducing paid infrastructure, AI APIs, databases, or server-side code.

The goal is to support schools, academies, NGOs, bootcamps, and organisational training while preserving the zero-cost deployment model.

## Enterprise Console

File:

```text
pages/enterprise.html
```

The Enterprise Console contains seven administrative modules.

---

## 1. Organisation Profile and Local Branding

### What it does

Stores organisation-level settings such as:

- Organisation or school name
- Programme name
- Facilitator or training lead
- Contact email
- Brand colour
- Default cohort
- Internal training policy

### How it works

The settings are saved in browser `localStorage` under:

```text
viz_ent_org
```

The organisation profile can be exported/imported as JSON.

### Why it matters

A school or training organisation can personalise the local administrative experience without needing a database or admin login.

---

## 2. Cohort and Learner Manager

### What it does

Allows a facilitator to create cohorts and maintain learner lists.

Cohort data includes:

- Cohort name
- Start date
- End date
- Delivery mode

Learner data includes:

- Learner name
- Learner ID
- Contact
- Cohort assignment

### Import/export

- Cohorts export as JSON.
- Learners export as CSV.
- Learners can also be imported from CSV.

### Why it matters

This gives school/academy-level organisation without requiring Supabase, Firebase, Airtable, or paid LMS tools.

---

## 3. Cohort Analytics from Learner Backups

### What it does

Aggregates progress from learner backup JSON files exported from the Progress page.

Metrics include:

- Lessons completed
- Quiz correct answers
- Quiz total attempts
- Roadmap milestones completed
- Projects completed

### How it works

1. Learner opens `pages/progress.html`.
2. Learner exports backup JSON.
3. Facilitator opens Enterprise Console.
4. Facilitator imports multiple backup files.
5. Console aggregates the metrics locally.

### Why it matters

This gives cohort reporting while avoiding central user accounts and server storage.

---

## 4. Assignment and Deadline Builder

### What it does

Creates structured assignments for cohorts.

Assignment data includes:

- Title
- Cohort
- Due date
- Difficulty level
- Required tasks
- Instruction

### Export options

- Markdown
- JSON

### Why it matters

Facilitators can send assignments through WhatsApp, email, Google Classroom, printed sheets, or any free communication channel.

---

## 5. Issue, Feedback and Improvement Register

### What it does

Tracks operational and product issues such as:

- Bugs
- Content gaps
- Learner confusion
- Device/browser issues
- Feature requests
- Deployment issues

Each issue includes:

- Title
- Category
- Priority
- Status
- Details

### Export options

- CSV export
- GitHub Issue text copy

### Why it matters

This creates a lightweight quality-assurance workflow for continuous improvement.

---

## 6. Audit Log

### What it does

Records key administrative actions such as:

- Saving organisation profile
- Creating cohorts
- Adding learners
- Importing backups
- Exporting analytics
- Saving assignments
- Saving issues

### Export option

Audit log can be exported as CSV.

### Why it matters

Even without a backend, the facilitator has a local accountability trail.

---

## 7. Governance and Enterprise Readiness

### What it does

Provides guidance on:

- Data minimisation
- No AI API exposure
- Local-first storage
- Portable records
- Free deployment
- Recommended controls

### Why it matters

Enterprise readiness is not only about features. It is also about privacy, process, accountability, and sustainability.

---

## Additional enterprise files

### `_headers`

Cloudflare Pages reads this file and applies security-related headers such as:

- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`

GitHub Pages does not use `_headers`, but the file does no harm there.

### `SECURITY.md`

Documents the platform security and governance model.

---

## Why no backend?

A backend would introduce:

- Hosting costs
- Authentication complexity
- Database maintenance
- Security obligations
- Privacy compliance burden

For a free learning platform, the best enterprise-light architecture is:

```text
Static site + localStorage + JSON/CSV import/export + facilitator-controlled records
```

If a client later requires central login, cloud dashboards, role-based authentication, or regulated storage, that should become a separate paid backend project.
