# Ejafa Bassam · Academic portfolio

Personal research portfolio at [ejafa.github.io](https://ejafa.github.io/).

## Structure

- `index.html`: profile, publications, projects, education, experience, awards, and contact details.
- `styles.css`: responsive layout, print styles, and reduced-motion support.
- `assets/Ejafa_Bassam_CV.pdf`: downloadable CV.
- `assets/favicon.svg`: site icon.
- `assets/ejafa-profile-original.webp`: original, unretouched profile photo, compressed for the web. Its crop is controlled in CSS.
- `assets/ejafa-research.webp`, `assets/ejafa-graduation.webp`: additional treemap photos.
- `assets/ejafa-campus.webp`, `assets/ejafa-ceremony.webp`: additional graduation photos.
- `treemap.js`: automatic cyclic photo positions and playback control.
- `.nojekyll`: serves the site as plain static files on GitHub Pages.

There are no build dependencies, external fonts, or analytics. The page remains readable without JavaScript; a small script enhances the five-photo treemap with automatic rotation. Every photo takes a turn in the largest box. There are no photo-selection controls, and hovering does not stop rotation. A small Play/Pause control is provided; reduced-motion preferences start rotation paused. All displayed photos come directly from the original photographs, with no generated face or expression. GitHub Pages serves the root of the `master` branch.

## Update content

Edit `index.html` and replace the PDF when the CV changes. Keep publication titles, authors, venues, and links consistent with the CV. Research summaries distinguish first-author work from collaborative experimental contributions.

## Preview locally

Serve this directory with any static web server, for example `python -m http.server 8000`, then open `http://localhost:8000`.
