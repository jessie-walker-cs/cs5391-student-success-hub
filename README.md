# CS 5391 Student Success Hub | Fall 2, 2026

Student-facing project information website for **CS 5391: Survey of Software Engineering** at Texas State University.

> **Status:** Prepared for publication. This project website is an academic course resource, not an official Texas State University service. Canvas is authoritative for graded work and deadlines.

## Main links (work once Pages is deployed)

- Project site: https://jessie-walker-cs.github.io/cs5391-student-success-hub/
- Subproject signup Issue Form: https://github.com/jessie-walker-cs/cs5391-student-success-hub/issues/new?template=project-signup.yml
- Source repository: https://github.com/jessie-walker-cs/cs5391-student-success-hub

## Instructor setup

1. Create an **empty public repository** named `cs5391-student-success-hub` in the GitHub account `jessie-walker-cs`. Enable **Issues**. Do not initialize with a README if you plan to push the prepared contents in one commit.
2. Add all repository files, including hidden `.github/` and `.nojekyll`, to the default branch **main**.
3. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**. The included `.github/workflows/pages.yml` publishes the site on push to `main`.
4. Confirm the GitHub Pages URL resolves, and test every navigation link, the signup form, and a new test signup Issue (then close the test Issue).
5. Confirm GitHub **Issues** and repository Actions are enabled. The user must be signed in to GitHub to submit the public signup Issue Form.
6. Confirm the deadline wording, class enrollment, relevant accommodations, instructor-authorized extensions and any Canvas due-date changes.
7. Post the website link in **Canvas Announcements**. Retain the graded project assignments in Canvas. Do not import the old IMSCC again (it contained duplicates).

## Deadline

Monday, **October 19, 2026, at 11:59 p.m. Central Daylight Time** (America/Chicago, UTC-05:00 at this date). This is the end of Monday, not the start. The site hides the signup CTA after the deadline according to the visitor's system time, but **GitHub Issues can still be created directly**. Confirm signup timeliness by GitHub Issue timestamps (UTC) or Canvas Inbox receipt time. The project does not automatically close the GitHub Issue Form or enforce deadlines server-side.

## Scope

- Three static, accessible project briefs and a main program overview
- Shared technical standards and integration guidance
- Syllabus-preserving course milestone page
- A public GitHub Issue Form for subproject selection (one choice)
- Private Canvas Inbox alternative for students who cannot use the public issue form
- Portfolio guidance that preserves assignment integrity, team authorship, permissions, privacy and repository licenses

## Source material and policies

Course-specific learning sequence and assignment weights were checked against the supplied CS 5391 Fall 2 syllabus and existing faculty project package. Two distinct calendars appear in the source material: the Thursday–Wednesday eight-week **planning announcement**, and the syllabus's eight **project module windows**. These are intentionally distinguished on the site.

Do not publish completed project deliverables or teammates' material without authorization. The underlying syllabus restricts cross-team sharing of graded solutions and posting course materials publicly without permission. The site provides shared integration formats, not working student solutions.

## No student data collection

GitHub Issues are public. Students must not include student IDs, grades, private email addresses, passwords, registration details, or confidential records. The public signup records a GitHub username, team choice, short interest statement and acknowledgement. Students have a Canvas Inbox alternative.

## Repository structure

- `index.html` — Project overview
- `subprojects/` — Overview plus one page for each of three subprojects
- `signup.html` — Signup instructions
- `timeline.html` — Milestones and existing syllabus grading categories
- `collaboration.html` — Engineering and integration contract
- `portfolio.html` — Student work-to-portfolio guidance
- `assets/` — HTML presentation scripts and CSS
- `data/` — Fictional sample schemas/records, not functional student submissions
- `.github/ISSUE_TEMPLATE/` — Student signup form
- `.github/workflows/pages.yml` — GitHub Pages publishing workflow

## Editorial and technical notes

- No analytics, cookies, third-party JavaScript, private database, login form, or student data transmission from the website.
- Website itself is a **project specification**, not the application students are being graded to develop.
- No repository-wide code license is supplied. Public source visibility does not grant students rights to republish team-authored submissions; obtain instructor and teammate permission as applicable.
- The included Pages workflow requires repository Pages configuration and Actions permissions. GitHub Pages publication cannot be confirmed until the repository is created and deployed.