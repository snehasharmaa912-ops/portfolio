# Sneha Sharma — Portfolio

A black-and-gold, single-page luxury portfolio with dedicated case-study pages. Pure HTML/CSS/JS — no build step, no dependencies.

## Structure
```
├── index.html          # main single-page portfolio
├── script.js            # animations, live stats, cursor effects
├── casestudy.css         # shared stylesheet for case study pages
├── shesays.html          # SheSays case study
├── atslay.html           # ATSlay case study
├── vibeops.html          # VibeOps case study
├── payflow.html          # PayFlow v2 case study (incl. CI load test & coverage results)
└── assets/
    ├── hero.jpg                     # hero portrait
    ├── about.jpg                    # about section image
    └── Sneha_Sharma_Resume.pdf      # downloadable resume
```

## Features

**Content**
- Hero, About (with a personal engineering philosophy), Experience, Projects, Toolkit, Certifications, Education, and Contact sections
- Experience timeline: iOS Trainee Developer (Apple & Infosys, ongoing), AI Intern (Mirai School of Technology), and Full Stack Intern (TBI-GEU)
- Six project cards — SheSays, ATSlay, VibeOps, and PayFlow v2 each with a "Case Study →" link to a full dedicated breakdown page (problem, approach, architecture diagram, honest limitations); RepJudge and Life-OS link directly to their live deployed apps and source
- PayFlow v2's case study includes real, CI-verified numbers: k6 load test results (req/s, p95 latency) and test coverage across Go, Ruby, and Scala, all tracked automatically via GitHub Actions on every push
- Downloadable resume — linked from both the nav bar and the Contact section, kept in sync with the latest version

**Live Data** (fetched fresh on every page load, no redeploy needed)
- GitHub public repo count
- GitHub commit activity heatmap — full year, color-coded, same idea as GitHub's own contribution graph
- LeetCode solved count, with a note explaining the offline-notebook-then-batch-push workflow so the "solved vs. active days" gap reads as intentional

**Animation**
- Wax-seal splash intro that draws, cracks open with a shockwave burst, then reveals the page
- Typewriter effect on the hero tagline
- Custom gold cursor with magnetic hover on buttons and a glowing gold-dust trail
- Ambient drifting gold particle field across the whole page
- Parallax depth — floating gold rings/diamonds move at different scroll speeds in Hero and About
- Scroll-drawn corner brackets around each section title as you scroll to it
- 3D flip project cards — tap the image to flip and reveal a "why it matters" highlight

