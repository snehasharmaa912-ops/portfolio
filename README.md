# Sneha Sharma — Portfolio

A black-and-gold, single-page luxury portfolio. Pure HTML/CSS/JS — no build step, no dependencies.

## Structure
```
├── index.html      # all markup + sections
├── script.js       # cursor, splash, scroll reveal, tilt, live stats
└── assets/
    ├── hero.jpg     # hero portrait
    └── about.jpg    # about section image
```

## Run locally
Just open `index.html` in a browser. No server needed (fonts/API calls need internet access).

## Deploy
Easiest options, in order of speed:
- **GitHub Pages**: push this repo, then Settings → Pages → deploy from `main` branch, root folder.
- **Vercel / Netlify**: drag-and-drop the folder, or connect the GitHub repo — zero config needed.

## Live data
- GitHub repo count pulls from `api.github.com/users/snehasharmaa912-ops` on page load.
- LeetCode solved count pulls from a public community stats API on page load — so it updates automatically as you solve more problems, no redeploy needed.

## Pushing this to GitHub — commit convention

Use [Conventional Commits](https://www.conventionalcommits.org/) so your commit history itself looks professional to anyone reviewing your repo:

| Prefix | Use for |
|---|---|
| `feat:` | a new section/feature (e.g. `feat: add live leetcode stats counter`) |
| `fix:` | bug fix (e.g. `fix: correct mobile nav toggle z-index`) |
| `style:` | formatting/CSS-only changes, no logic change (e.g. `style: adjust gold accent contrast`) |
| `refactor:` | restructuring code without changing behavior |
| `docs:` | README or comment changes (e.g. `docs: add deployment instructions`) |
| `chore:` | maintenance, config, non-source changes (e.g. `chore: add .gitignore`) |
| `perf:` | performance improvements |
| `test:` | adding/adjusting tests |

### Suggested first push
```bash
git init
git add .
git commit -m "chore: initial project scaffold"
git commit -m "feat: add hero section with animated portrait and splash intro"
git commit -m "feat: add about, experience, and education sections"
git commit -m "feat: add projects section with tilt hover effect"
git commit -m "feat: add live GitHub and LeetCode stat counters"
git commit -m "feat: add certifications and skills sections"
git commit -m "style: apply black and gold luxury theme across sections"
git commit -m "docs: add README with setup and deployment notes"
git branch -M main
git remote add origin https://github.com/snehasharmaa912-ops/portfolio.git
git push -u origin main
```

(You can also just make one `feat: initial portfolio launch` commit — the breakdown above is only useful if you want a commit history that shows incremental, thoughtful work.)
