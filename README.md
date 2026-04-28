# SWOT – Info Page

**Safe Water Optimization Tool**  
Leveraging routine water quality data to guarantee safe water supply.

## What is deployed here?

This repository contains the **informational / marketing website** for SWOT, deployed as a static site via **GitHub Pages** at [www.safeh2o.app](https://www.safeh2o.app).

### Purpose

The site introduces SWOT to practitioners, researchers, and humanitarian organisations working in emergency water-supply contexts. It explains what the tool does, how it works, and who builds it — and it directs visitors to the live application at [live.safeh2o.app](https://live.safeh2o.app).

### Pages

| File | URL | Description |
|---|---|---|
| `index.html` | `/` | Home page — hero banner, feature highlights, newsletter sign-up |
| `how-it-works.html` | `/how-it-works` | Detailed explanation of SWOT's modelling methodology |
| `our-story.html` | `/our-story` | Background and origin of the project |
| `research.html` | `/research` | Peer-reviewed research and evidence base |
| `team.html` | `/team` | Team members and contributors |

### Tech stack

| Layer | Technology |
|---|---|
| Hosting | GitHub Pages (static) |
| Markup | Plain HTML5 |
| Styles | SCSS (source in `src/`, compiled output in `public/assets/`) |
| Analytics | Google Analytics (tag `G-NRRPW9FG7Z`) |
| Newsletter | Mailchimp embedded script |
| Fonts | Inter (self-hosted), Barlow Condensed & Roboto Condensed (Google Fonts) |
| Masonry layout | [Macy.js](https://github.com/bigbite/macy.js) |
| CI | Travis CI – runs [html-proofer](https://github.com/gjtorikian/html-proofer) to validate links |

### Repository layout

```
/
├── index.html            # Home
├── how-it-works.html     # How it works
├── our-story.html        # Our story
├── research.html         # Research
├── team.html             # Team
├── src/                  # SCSS source files
├── public/               # Static assets (images, compiled CSS, fonts, JS, PDFs)
│   └── SWOT_Quickstart.pdf   # Downloadable quickstart guide
├── _config.yml           # Jekyll/GitHub Pages config
├── CNAME                 # Custom domain: www.safeh2o.app
└── atom.xml              # RSS feed
```

## License

Open sourced under the [GNU GPL v3 license](LICENSE.md).

<3
