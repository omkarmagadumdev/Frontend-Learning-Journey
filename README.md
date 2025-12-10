# Frontend Learning Journey

> A curated set of HTML, CSS and JavaScript experiments, exercises and small projects used to learn and practice front-end web development.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [How to Preview / Run Locally](#how-to-preview--run-locally)
- [Highlights & Examples](#highlights--examples)
- [Contributing](#contributing)
- [Recommended Tools](#recommended-tools)
- [License & Contact](#license--contact)

---

## Project Overview

This repository is a personal learning collection for front-end topics: HTML, CSS (including animations, grid and responsive layouts), and JavaScript (core, DOM, async, patterns, iterators & generators, small apps). Files are organized by topic and small projects so you can open and test each example independently.

## Repository Structure

Top-level folders and purpose (summarized):

- **`css/`**: Collection of HTML pages and styles demonstrating selectors, pseudo-elements, and general CSS examples.
- **`CSS Animations/`**: Animation experiments with examples and notes.
- **`css grid/`**: Grid-related notes and projects (examples and a small grid project).
- **`css projects/`**: Small standalone CSS projects (one folder per project).
- **`CSS Responsive project/`**: Responsive layout examples and notes.
- **`designPatterns/`**: JavaScript design pattern samples (Builder pattern examples).
- **`github/`**: Repo-specific notes and `README.md` for GitHub usage.
- **`HTML/`**: Basic HTML examples and practice pages.
- **`javascript/`**: Core JavaScript learning files, exercises, and practice problems. Key files include `iteraorsandgenerators.js`, `Promises.js`, `oop.js`, and small projects under `js_practice/`.
- **`javascript_DOM/`**: DOM-focused examples, events, and XMLHttpRequest/Promise examples.
- **`Responsive web development/`**: Responsive design examples and notes.

Note: Each subfolder usually contains an `index.html` and one or more `.css` or `.js` files. Open the folder and inspect the `index.html` files to try examples.

## How to Preview / Run Locally

You can open the `*.html` files directly in a browser. For a better development experience (CORS, module loading, Live Reload), run a simple local server.

Using Python (works if Python is installed):

```powershell
# From the repository root in PowerShell
python -m http.server 8000
# Then open http://localhost:8000/ in your browser
```

Using Node (if you have `npm`):

```powershell
npx http-server . -p 8000
# or install once: npm i -g http-server
# then run: http-server -p 8000
```

Using VS Code Live Server:

- Open the project folder in VS Code.
- Install the Live Server extension (if you don't have it).
- Right-click an `index.html` and choose "Open with Live Server".

Tips:

- To view a specific example, open its folder (for example `css projects/css_project1/`) and launch that `index.html` via Live Server or navigate to `http://localhost:8000/css%20projects/css_project1/index.html` when using a static server.
- If folders have spaces (e.g., `CSS Animations`), the path in the browser will be URL-encoded or you can rename the folder for convenience.

## Highlights & Examples

- `javascript/iteraorsandgenerators.js`: iterator and generator examples and notes.
- `javascript/Promises.js`: promise and async behavior practice.
- `javascript/js_practice/`: numbered exercises with standalone HTML + JS for quick testing.
- `css grid/cssgrid_project/`: a small grid demo project.

Open these files to see inline comments and small demos.

## Contributing

This repository is a personal learning collection. Contribution suggestions:

- Raise issues if an example is broken or unclear.
- Send pull requests to add improvements, fixes, or updated examples.
- If you add large examples, include a short README inside that subfolder describing what the example demonstrates and how to run it.

When submitting changes, follow these guidelines:

- Keep commits focused and small.
- Prefer vanilla HTML/CSS/JS; add a `README.md` in the folder if you introduce frameworks or build steps.

## Recommended Tools

- VS Code (with Live Server extension)
- Modern browser (Chrome/Edge/Firefox) with DevTools
- Node.js & npm (optional) for simple static servers and tooling
- Python (optional) for the built-in `http.server`

## License & Contact

This repository is a personal learning resource. No license file is included — if you want to reuse code here in other projects, please attribute or ask for permission.

If you'd like me to improve this README or scaffold per-folder READMEs, open an issue or request specific improvements.

---

Happy learning — explore the folders and run the demos in your browser!
