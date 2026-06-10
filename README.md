# Eigen — Daily Physics Decode

A static daily physics equation puzzle.

## Run locally
Open `index.html` in a browser, or run a local static server:

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Publish
This version is static. You can publish by dragging the folder to Netlify, uploading to Vercel, or enabling GitHub Pages.

## Add puzzles
Edit `puzzles.js`. Each puzzle must satisfy:

- `finalAnswer` is uppercase letters only.
- Number of clues equals the number of letters in `finalAnswer`.
- Each clue's canonical `answer` starts with the corresponding final-answer letter.
- Canonical answers should be short. Put long formal phrases in `aliases`.

Open the browser console; the app warns you when a puzzle violates these rules.
