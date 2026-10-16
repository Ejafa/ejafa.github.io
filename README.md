# Ejafa Bassam · Academic portfolio

Personal research portfolio at [ejafa.github.io](https://ejafa.github.io/).

## Structure

- `index.html`: profile, publications, projects, education, experience, awards, and contact details.
- `styles.css`: responsive layout, print styles, and reduced-motion support.
- `assets/Ejafa_Bassam_CV.pdf`: downloadable CV.
- `assets/favicon.svg`: site icon.
- `assets/ejafa-profile.webp`: optimized profile portrait.
- `assets/ejafa-research.webp`, `assets/ejafa-graduation.webp`: additional treemap photos.
- `treemap.js`: cyclic photo positions, manual selection, and playback controls.
- `.nojekyll`: serves the site as plain static files on GitHub Pages.

There are no build dependencies, external fonts, or analytics. The page remains readable without JavaScript; a small script enhances the three-photo treemap with rotation. It starts with the coastal portrait, pauses on hover or keyboard focus, and starts paused when reduced motion is requested. Selecting a photo pauses rotation until Play is selected. GitHub Pages serves the root of the `master` branch.

## Update content

Edit `index.html` and replace the PDF when the CV changes. Keep publication titles, authors, venues, and links consistent with the CV. Research summaries distinguish first-author work from collaborative experimental contributions.

## Preview locally

Serve this directory with any static web server, for example `python -m http.server 8000`, then open `http://localhost:8000`.
