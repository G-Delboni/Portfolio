# Portfolio

🌐 [English](README.md) · **Português**

Site pessoal de Gabriel Delboni Dias, desenvolvedor de software com foco em Engenharia de IA. É uma coluna só, em português e inglês, com tema claro e escuro.

**Site:** [gabrieldelboni.com.br](https://www.gabrieldelboni.com.br)

## O que há na página

- Uma abertura curta, experiência, formação, projetos, um registro "Agora", uma demonstração, a stack e como eu trabalho.
- **A demonstração** reproduz quatro casos reais da suíte de evals do [agente-whatsapp-ia](https://github.com/G-Delboni/agente-whatsapp-ia), tirados do relatório de 10/11/2026. A rodada foi offline, com um cliente simulado: valida o fluxo do agente, não a qualidade do modelo. A página diz isso ao lado da conversa.
- **A página não chama nenhum modelo.** Nada é gerado durante a visita.

## Tecnologias

- **Vue 3** (Composition API, `<script setup>`) e **Vite**
- **CSS puro** com propriedades customizadas, sem framework de interface
- **Zilla Slab**, servida pelo próprio site (`@fontsource`)
- **Vercel** para a publicação

## Decisões que valem citar

- **Sem biblioteca de i18n.** `t('chave')` para os textos da interface e `tr({ pt, en })` para os textos que ficam junto dos dados. A primeira visita segue o idioma do navegador, e a escolha fica salva.
- **Conteúdo separado da interface.** Projetos, experiência, os casos da demonstração e o registro "Agora" ficam em `src/data/`.
- **Tema claro e escuro** definido antes da primeira pintura por um pequeno script em `index.html`, para a página não piscar. A primeira visita segue o sistema, e a escolha fica salva.
- **Movimento com alternativas.** As entradas usam uma diretiva `v-reveal` sobre `IntersectionObserver`; a troca de tema e de idioma usa View Transitions; o e-mail do contato cresce com uma linha do tempo de scroll em CSS. Onde o navegador não suporta, ou com movimento reduzido, a página mostra o estado final.
- **O verde de destaque é sempre um bloco preenchido com texto escuro** (contraste 8,0). Nunca é usado como texto sobre fundo claro.

## Como rodar o projeto

Requisitos: [Node.js](https://nodejs.org/) 22 ou mais novo, e npm.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção
npm run preview  # prévia do build
```

### Editando o conteúdo

| O que mudar                          | Onde                                                           |
| ------------------------------------ | -------------------------------------------------------------- |
| Nome, papel, abertura, e-mail, links | `src/data/profile.js`                                          |
| Experiência e números                | `src/data/experience.js`, `src/data/numbers.js`                |
| Formação                             | `src/data/education.js`                                        |
| Projetos (use `type: 'ml'` para ML)  | `src/data/projects.js`                                         |
| Casos da demonstração e relatório    | `src/data/evalCases.js`                                        |
| Registro "Agora"                     | `src/data/now.js`                                              |
| Stack e princípios                   | `src/data/skills.js`, `src/data/principles.js`                 |
| Textos da interface                  | `src/i18n/pt.js` e `src/i18n/en.js`                            |
| Cores, tamanhos de texto, movimento  | `src/styles/global.css` (propriedades customizadas em `:root`) |

Feito por **Gabriel Delboni Dias** ·
[LinkedIn](https://www.linkedin.com/in/gabriel-delboni-dias) ·
[GitHub](https://github.com/G-Delboni)
