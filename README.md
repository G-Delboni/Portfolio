# 🗂 Portfolio

**A minimalist, black-and-white personal portfolio built with Vue 3.**

A single page where every section lives on the home page and the navigation links are scroll shortcuts.

🌐 **English** · [Português](README.pt-BR.md)

![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white) ![Vite 8](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![CSS](https://img.shields.io/badge/CSS-Custom%20Properties-663399?style=for-the-badge&logo=css&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📌 About

This is the source of my personal site, available at **[www.gabrieldelboni.com.br](https://www.gabrieldelboni.com.br)**.

All the content is kept in plain data files, so adding a project or changing a text never requires touching a component. The interface is available in English and Portuguese.

## 📑 Table of Contents

- [Technologies](#-technologies)
- [Features](#-features)
- [The process](#-the-process)
- [What I learned](#-what-i-learned)
- [How can it be improved](#-how-can-it-be-improved)
- [Running the project](#-running-the-project)

---

## 🛠 Technologies

| Area | Technology |
| --- | --- |
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Dev server and build | Vite 8 |
| Icons | Iconify (`@iconify/vue`), monochrome |
| Styles | Plain CSS with custom properties, no UI framework |
| Lint and format | ESLint, Oxlint, Prettier |
| Deployment | Vercel |

---

## 🚀 Features

- Single-page layout with sticky header and smooth scroll to each section (About, Projects, Experience, Contact me)
- English and Portuguese, with a toggle in the header and the choice saved in `localStorage`
- Content separated from the interface: projects, technologies, experience and links live in `src/data/`
- Technology list and link icons driven by data, rendered in black and white
- Experience section with an empty state that disappears as soon as the first item is added
- Subtle animations: hover on cards, fade-in of sections on scroll, soft color transitions, quick fade when switching language
- Compact menu for small screens, closing on link click, `Esc` and when the window grows back to desktop size
- Respects the system setting "reduce motion"

---

## 🔄 The process

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

- **No i18n library.** For two languages, a `t('key')` function for interface texts and a `tr({ en, pt })` helper for texts that sit next to their data (like project descriptions) was enough. Migrating to `vue-i18n` later would be straightforward.
- **One source of truth for navigation.** The header reads the same list of sections used by the page, so adding a section is a one-line change.
- **Animations as a directive.** The scroll reveal is a small `v-reveal` directive built on `IntersectionObserver`. Duration and distance are CSS variables, so the intensity can be tuned in two numbers.
- **Motion applied at the right level.** The reveal runs on whole sections and the hover on cards, so the two `transform` effects never conflict.

---

## 📚 What I learned

- Structuring a Vue project so content, interface and translations stay separate
- Building a lightweight translation system with a shared reactive state outside the components
- Writing a custom Vue directive and using `IntersectionObserver` for scroll animations
- Making animations accessible with `prefers-reduced-motion`
- Building a responsive header with an accessible toggle menu (`aria-expanded`, `aria-controls`, keyboard support)
- Debugging build errors caused by leftover imports from the Vite template, and deploying a Vite app to Vercel

---

## 🔮 How can it be improved

| Improvement | Description |
| --- | --- |
| **Experience section** | Fill it in as soon as there is something to show. |
| **Bundled icons** | Bundle the icons with the project instead of fetching them from the Iconify API, so the site does not depend on a third-party request. |
| **SEO and social preview** | Add metadata such as Open Graph tags. |
| **Resume** | Add a downloadable resume. |
| **Tests** | Add basic tests for the translation layer and the data files. |
| **Shared styles** | Extract the repeated section styles into shared components or classes. |
| **Unused dependency** | `vue-i18n` is listed in `package.json` but the code does not import it. It can be removed. |

---

## ▶ Running the project

### Requirements

- [Node.js](https://nodejs.org/) `^22.18.0` or `>=24.12.0`, and npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/G-Delboni/Portfolio.git
cd Portfolio
```

### 2. Install and run

```bash
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

| What to change | Where |
| --- | --- |
| Name, e-mail, GitHub and LinkedIn | `src/data/profile.js` |
| Technology list and icons | `src/data/technologies.js` |
| Projects (text in both languages, stack, links) | `src/data/projects.js` |
| Experience items | `src/data/experience.js` |
| Menu sections | `src/data/sections.js` |
| Interface texts | `src/i18n/en.js` and `src/i18n/pt.js` |
| Colors, spacing, animation speed | `src/styles/global.css` (CSS variables in `:root`) |

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

---

Built by **Gabriel Delboni Dias** ·
[LinkedIn](https://www.linkedin.com/in/gabriel-delboni-dias/) ·
[GitHub](https://github.com/G-Delboni)
