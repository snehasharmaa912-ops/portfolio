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


