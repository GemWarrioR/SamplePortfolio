## Project structure

```text
index.html                              HTML document, page title, and React root
src/
  main.jsx                              React entry point
  App.jsx                               Page content and resume data
  styles.css                            Visual design and responsive styles
public/
  profile-photo.jpg                     Portrait extracted from the resume
  GliceromeSamNatano_20260919-1.pdf     Downloadable resume
package.json                            Dependencies and npm scripts
```
## Run the project locally

Install dependencies once, then start the development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The development server refreshes the page as source files are edited.

## Create a production build

```sh
npm run build
npm run preview
```

`npm run build` creates an optimized, deployable site in `dist/`. `npm run preview` serves that build locally for a final check. Deploy the contents of `dist/` to a static web host; the host must serve `index.html` as the site entry point.
