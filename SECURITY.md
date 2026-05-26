# Security and Data Governance — VizLearn Enhanced

VizLearn Enhanced is designed as a static, local-first learning platform. It does not require a backend, database, user login, or AI API.

## Data handling model

| Data type | Where it is stored | Who controls it |
|---|---|---|
| Lesson progress | Browser localStorage | Learner |
| Roadmap milestones | Browser localStorage | Learner |
| Notes and flashcards | Browser localStorage | Learner |
| CSV Upload Lab files | Browser memory during session | Learner |
| Enterprise cohorts | Facilitator browser localStorage/exported JSON | Facilitator |
| Aggregated learner backups | Facilitator browser localStorage/exported CSV | Facilitator |

## No AI API usage

The platform does not send prompts, code, CSV files, learner data, or notes to OpenAI, Gemini, Claude, or any other AI API. Recommendation tools are rule-based JavaScript.

## Recommended institutional practice

1. Collect only the learner information you truly need.
2. Prefer learner ID over phone/email where possible.
3. Store exported JSON/CSV files in a restricted folder.
4. Do not publish learner backup files publicly.
5. Remove personal contact details before sharing analytics externally.
6. Use Cloudflare Pages `_headers` for additional browser security headers.

## Reporting issues

If you discover a security or privacy issue, document:

- Page affected
- Browser/device
- Steps to reproduce
- Expected behaviour
- Actual behaviour
- Screenshot if safe to share

Then create a private/internal issue before public disclosure.
