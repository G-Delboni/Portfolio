# Portfolio

A minimalist, black-and-white personal portfolio built with Vue 3. It is a single page where every section lives on the home page and the navigation links are just scroll shortcuts. All the content is kept in plain data files, so adding a project or changing a text never requires touching a component.

**Live demo:** [Portfolio](https://portfolio-tan-seven-p35jhq7hik.vercel.app)

## Technologies

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** for the development server and build
- **Iconify** (`@iconify/vue`) for monochrome icons
- **Plain CSS** with custom properties, no UI framework
- **Vercel** for deployment

## Features

- Single-page layout with sticky header and smooth scroll to each section (About, Projects, Experience, Contact me)
- English and Portuguese, with a toggle in the header and the choice saved in `localStorage`
- Content separated from the interface: projects, technologies, experience and links live in `src/data/`
- Technology list and link icons driven by data, rendered in black and white
- Experience section with an empty state that disappears as soon as the first item is added
- Subtle animations: hover on cards, fade-in of sections on scroll, soft color transitions, quick fade when switching language
- Compact menu for small screens, closing on link click, `Esc` and when the window grows back to desktop size
- Respects the system setting "reduce motion"

## The process

I started by confirming the visual direction with a mockup, then built the project in small steps, each one running in the browser before moving to the next:

1. Clean Vite + Vue base, with the folder structure and the black-and-white theme defined as CSS variables in a single file
2. Header and a small translation layer
3. Landing section and technology list
4. About and Projects, reading from a data file
5. Experience and Contact
6. Icons for technologies and links
7. Animations
8. Compact mobile menu and deploy

Some decisions worth mentioning:

- **No i18n library.** For two languages, a `t('key')` function for interface texts and a `tr({ en, pt })` helper for texts that sit next to their data (like project descriptions) was enough, and keeps the project free of extra dependencies. Migrating to `vue-i18n` later would be straightforward.
- **One source of truth for navigation.** The header reads the same list of sections used by the page, so adding a section is a one-line change.
- **Animations as a directive.** The scroll reveal is a small `v-reveal` directive built on `IntersectionObserver`. Duration and distance are CSS variables, so the intensity can be tuned in two numbers.
- **Motion applied at the right level.** The reveal runs on whole sections and the hover on cards, so the two `transform` effects never conflict.

## What I learned

- Structuring a Vue project so content, interface and translations stay separate
- Building a lightweight translation system with a shared reactive state outside the components
- Writing a custom Vue directive and using `IntersectionObserver` for scroll animations
- Making animations accessible with `prefers-reduced-motion`
- Building a responsive header with an accessible toggle menu (`aria-expanded`, `aria-controls`, keyboard support)
- Debugging build errors caused by leftover imports from the Vite template, and deploying a Vite app to Vercel

## How can it be improved

- Fill in the Experience section as soon as there is something to show
- Bundle the icons with the project instead of fetching them from the Iconify API, so the site does not depend on a third-party request
- Add SEO and social preview metadata (Open Graph tags, favicon)
- Add a downloadable resume
- Add basic tests for the translation layer and the data files
- Extract the repeated section styles into shared components or classes

## Running the project

Requirements: [Node.js](https://nodejs.org/) (LTS version) and npm.

```bash
# clone the repository
git clone https://github.com/YOUR-USERNAME/portfolio.git
cd portfolio

# install dependencies
npm install

# start the development server (http://localhost:5173)
npm run dev

# create a production build
npm run build

# preview the production build locally
npm run preview
```

### Editing the content

| What to change                                  | Where                                              |
| ----------------------------------------------- | -------------------------------------------------- |
| Name, e-mail, GitHub and LinkedIn               | `src/data/profile.js`                              |
| Technology list and icons                       | `src/data/technologies.js`                         |
| Projects (text in both languages, stack, links) | `src/data/projects.js`                             |
| Experience items                                | `src/data/experience.js`                           |
| Menu sections                                   | `src/data/sections.js`                             |
| Interface texts                                 | `src/i18n/en.js` and `src/i18n/pt.js`              |
| Colors, spacing, animation speed                | `src/styles/global.css` (CSS variables in `:root`) |

### Project structure

```
src/
├── components/   page sections and header
├── data/         editable content
├── directives/   v-reveal (scroll animation)
├── i18n/         translations and language state
├── styles/       global theme and animations
├── App.vue
└── main.js
```

Built by **Gabriel Delboni Dias** ·
[LinkedIn](https://www.linkedin.com/in/gabriel-delboni-dias/) ·
[GitHub](https://github.com/G-Delboni)
