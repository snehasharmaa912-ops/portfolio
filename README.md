# Sneha Sharma — Portfolio

A black-and-gold, single-page luxury portfolio. Pure HTML/CSS/JS — no build step, no dependencies.

## Structure
```
├── index.html      # all markup + sections
├── script.js       # animations, live stats, cursor effects
└── assets/
    ├── hero.jpg     # hero portrait
    └── about.jpg    # about section image
```

## Features
- **Wax-seal splash intro** — animated seal that draws, cracks open with a shockwave burst, then reveals the page
- **Typewriter tagline** — hero subtitle types itself out letter by letter
- **Custom gold cursor** — magnetic hover on buttons, with a glowing gold-dust trail following the pointer
- **Ambient particle field** — subtle drifting gold particles across the whole page, always running
- **Parallax depth** — floating gold rings/diamonds move at different scroll speeds in Hero and About
- **Scroll-drawn section frames** — corner brackets extend outward around each section title as you scroll to it
- **3D flip project cards** — tap a project's image to flip it and reveal a "why it matters" highlight
- **Live GitHub stat** — public repo count, fetched fresh from the GitHub API on every page load
- **Live LeetCode stat** — problems-solved count, fetched from a public community stats API on every load, so it updates automatically as you solve more — no redeploy needed

## Run locally
Just open `index.html` in a browser. No server needed (fonts/live stats need internet access).

## Deploy
- **GitHub Pages**: push this repo, then Settings → Pages → deploy from `main` branch, root folder.
- **Vercel / Netlify**: drag-and-drop the folder, or connect the GitHub repo — zero config needed.

## Commit convention

Use [Conventional Commits](https://www.conventionalcommits.org/) so the commit history itself looks professional to anyone reviewing the repo:

| Prefix | Use for |
|---|---|
| `feat:` | a new section/feature |
| `fix:` | bug fix |
| `style:` | formatting/CSS-only changes, no logic change |
| `refactor:` | restructuring code without changing behavior |
| `docs:` | README or comment changes |
| `chore:` | maintenance, config, non-source changes |
| `perf:` | performance improvements |
| `test:` | adding/adjusting tests |

## Commit history (as actually built, via mobile upload)

```
chore: initial project scaffold
feat: add hero, about, experience, and education sections
feat: add hero portrait image
feat: add about section image
feat: add live GitHub/LeetCode stats, cursor, and scroll animations
fix: correct about.jpg orientation
feat: add wax-seal crack intro, typewriter tagline, cursor dust trail, parallax, and 3D flip cards
feat: implement particle system and section scroll animations
docs: update README with full feature list
```

### If pushing from a computer instead, one clean sequence:
```bash
git init
git add .
git commit -m "chore: initial project scaffold"
git commit -m "feat: add hero, about, experience, and education sections"
git commit -m "feat: add live GitHub and LeetCode stat counters"
git commit -m "feat: add wax-seal intro, typewriter, cursor dust, parallax, and 3D flip cards"
git commit -m "docs: add README with setup and deployment notes"
git branch -M main
git remote add origin https://github.com/snehasharmaa912-ops/portfolio.git
git push -u origin main
```
