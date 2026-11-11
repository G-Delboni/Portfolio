# Portfolio

🌐 **English** · [Português](README.pt-BR.md)

Personal site of Gabriel Delboni Dias, software developer focused on AI Engineering. It is a single column, in Portuguese and English, with a light and a dark theme.

**Site:** [gabrieldelboni.com.br](https://www.gabrieldelboni.com.br)

## What is on the page

- A short opening, experience, education, projects, a "Now" log, a demo, the stack and how I work.
- **The demo** replays four real cases from the eval suite of [agente-whatsapp-ia](https://github.com/G-Delboni/agente-whatsapp-ia), taken from its report of 10 Nov 2026. The run was offline, with a simulated client: it validates the agent flow, not the quality of the model. The page says so next to the conversation.
- **The page calls no model.** Nothing is generated at visit time.

## Technologies

- **Vue 3** (Composition API, `<script setup>`) and **Vite**
- **Plain CSS** with custom properties, no UI framework
- **Zilla Slab**, served by the site itself (`@fontsource`)
- **Vercel** for deployment

## Decisions worth mentioning

- **No i18n library.** `t('key')` for interface text and `tr({ pt, en })` for text that sits next to its data. The first visit follows the browser language, and the choice is saved.
- **Content apart from the interface.** Projects, experience, the demo cases and the "Now" log live in `src/data/`.
- **Light and dark theme** set before the first paint by a small script in `index.html`, so the page does not flash. The first visit follows the system; the choice is saved.
- **Motion with fallbacks.** Entrances use a small `v-reveal` directive on `IntersectionObserver`; the theme and language switch use View Transitions; the contact e-mail grows with a CSS scroll timeline. Where a browser lacks support, or with reduced motion requested, the page shows its final state.
- **The accent green is only a filled block with dark text** (contrast 8.0). It is never used as text on a light background.

## Running the project

Requirements: [Node.js](https://nodejs.org/) 22 or newer, and npm.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
npm run preview  # preview the build
```

### Editing the content

| What to change                     | Where                                                  |
| ---------------------------------- | ------------------------------------------------------ |
| Name, role, opening, e-mail, links | `src/data/profile.js`                                  |
| Experience and numbers             | `src/data/experience.js`, `src/data/numbers.js`        |
| Education                          | `src/data/education.js`                                |
| Projects (add `type: 'ml'` for ML) | `src/data/projects.js`                                 |
| Demo cases and the eval report     | `src/data/evalCases.js`                                |
| "Now" log                          | `src/data/now.js`                                      |
| Stack and principles               | `src/data/skills.js`, `src/data/principles.js`         |
| Interface text                     | `src/i18n/pt.js` and `src/i18n/en.js`                  |
| Colors, type sizes, motion tokens  | `src/styles/global.css` (custom properties in `:root`) |

Built by **Gabriel Delboni Dias** ·
[LinkedIn](https://www.linkedin.com/in/gabriel-delboni-dias) ·
[GitHub](https://github.com/G-Delboni)
