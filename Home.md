# swot-infopage — Wiki

## What is deployed here?

This repository contains the **informational / marketing website** for the Safe Water Optimization Tool (SWOT), deployed as a **static site via GitHub Pages** at [www.safeh2o.app](https://www.safeh2o.app).

---

## Purpose

The site introduces SWOT to practitioners, researchers, and humanitarian organisations working in emergency water-supply contexts. It explains what the tool does, how it works, and who builds it — and it directs visitors to the live application at [live.safeh2o.app](https://live.safeh2o.app).

---

## Pages

| File | URL path | Description |
|---|---|---|
| `index.html` | `/` | Home page — hero banner, feature highlights, newsletter sign-up |
| `how-it-works.html` | `/how-it-works` | Detailed explanation of SWOT's modelling methodology |
| `our-story.html` | `/our-story` | Background and origin of the project |
| `research.html` | `/research` | Peer-reviewed research and evidence base |
| `team.html` | `/team` | Team members and contributors |

---

## Tech stack

| Layer | Technology |
|---|---|
| Hosting | GitHub Pages (static, no server-side rendering) |
| Markup | Plain HTML5 |
| Styles | SCSS (source in `src/`, compiled output in `public/assets/style.css`) |
| Analytics | Google Analytics (measurement ID `G-NRRPW9FG7Z`) |
| Newsletter | Mailchimp embedded script |
| Fonts | Inter (self-hosted in `public/fonts/`), Barlow Condensed & Roboto Condensed (Google Fonts) |
| Masonry layout | [Macy.js](https://github.com/bigbite/macy.js) v2 |
| CI | Travis CI — runs [html-proofer](https://github.com/gjtorikian/html-proofer) to validate internal and external links |
| Custom domain | `www.safeh2o.app` (set via `CNAME` file) |

---

## Repository layout

```
/
├── index.html              # Home page
├── how-it-works.html       # How it works
├── our-story.html          # Our story
├── research.html           # Research
├── team.html               # Team
├── src/                    # SCSS source files
│   ├── style.scss          # Main entry point
│   └── *.scss              # Partials (layout, type, sections, …)
├── public/
│   ├── assets/             # Compiled CSS, SVG icons, images
│   ├── fonts/              # Self-hosted Inter typeface
│   ├── js/                 # Client-side JavaScript
│   ├── video/              # Video assets
│   ├── downloads/          # Downloadable files
│   └── SWOT_Quickstart.pdf # Quickstart guide (PDF)
├── _config.yml             # Jekyll / GitHub Pages configuration
├── CNAME                   # Custom domain: www.safeh2o.app
├── atom.xml                # RSS/Atom feed
└── .travis.yml             # CI configuration (html-proofer)
```

---

## Local development

1. Install dependencies (Prettier for formatting):
   ```bash
   npm install
   ```
2. Serve the site locally with any static file server, e.g.:
   ```bash
   npx serve .
   ```
3. Edit SCSS files in `src/` and compile to `public/assets/style.css` with your preferred SCSS tool.

---

## License

Open sourced under the [GNU GPL v3 license](LICENSE.md).
