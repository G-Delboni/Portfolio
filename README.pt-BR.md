# 🗂 Portfolio

**Um portfólio pessoal minimalista, em preto e branco, feito com Vue 3.**

Uma página única em que todas as seções ficam na página inicial e os links de navegação são atalhos de rolagem.

🌐 [English](README.md) · **Português**

![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white) ![Vite 8](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![CSS](https://img.shields.io/badge/CSS-Custom%20Properties-663399?style=for-the-badge&logo=css&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📌 Sobre

Este é o código-fonte do meu site pessoal, disponível em **[www.gabrieldelboni.com.br](https://www.gabrieldelboni.com.br)**.

Todo o conteúdo fica em arquivos de dados simples, então adicionar um projeto ou mudar um texto nunca exige mexer em um componente. A interface está disponível em inglês e português.

## 📑 Sumário

- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [O processo](#-o-processo)
- [O que aprendi](#-o-que-aprendi)
- [Como pode melhorar](#-como-pode-melhorar)
- [Como rodar o projeto](#-como-rodar-o-projeto)

---

## 🛠 Tecnologias

| Área | Tecnologia |
| --- | --- |
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Servidor de desenvolvimento e build | Vite 8 |
| Ícones | Iconify (`@iconify/vue`), monocromáticos |
| Estilos | CSS puro com custom properties, sem framework de UI |
| Lint e formatação | ESLint, Oxlint, Prettier |
| Deploy | Vercel |

---

## 🚀 Funcionalidades

- Layout de página única com cabeçalho fixo e rolagem suave até cada seção (About, Projects, Experience, Contact me)
- Inglês e português, com um botão de troca no cabeçalho e a escolha salva no `localStorage`
- Conteúdo separado da interface: projetos, tecnologias, experiência e links ficam em `src/data/`
- Lista de tecnologias e ícones dos links definidos por dados, renderizados em preto e branco
- Seção de experiência com um estado vazio que desaparece assim que o primeiro item é adicionado
- Animações discretas: hover nos cards, fade-in das seções na rolagem, transições suaves de cor, fade rápido na troca de idioma
- Menu compacto para telas pequenas, que fecha ao clicar em um link, com `Esc` e quando a janela volta ao tamanho de desktop
- Respeita a configuração "reduzir movimento" do sistema

---

## 🔄 O processo

Comecei confirmando a direção visual com um mockup e depois construí o projeto em passos pequenos, cada um rodando no navegador antes de seguir para o próximo:

1. Base limpa de Vite + Vue, com a estrutura de pastas e o tema preto e branco definido como variáveis CSS em um único arquivo
2. Cabeçalho e uma pequena camada de tradução
3. Seção inicial e lista de tecnologias
4. About e Projects, lendo de um arquivo de dados
5. Experience e Contact
6. Ícones das tecnologias e dos links
7. Animações
8. Menu compacto para celular e deploy

Algumas decisões que vale mencionar:

- **Sem biblioteca de i18n.** Para dois idiomas, uma função `t('key')` para os textos da interface e um helper `tr({ en, pt })` para os textos que ficam junto dos dados (como as descrições dos projetos) foram suficientes. Migrar para `vue-i18n` depois seria simples.
- **Uma única fonte para a navegação.** O cabeçalho lê a mesma lista de seções usada pela página, então adicionar uma seção é uma mudança de uma linha.
- **Animações como diretiva.** A revelação na rolagem é uma pequena diretiva `v-reveal` construída sobre `IntersectionObserver`. Duração e distância são variáveis CSS, então a intensidade pode ser ajustada em dois números.
- **Movimento aplicado no nível certo.** A revelação roda nas seções inteiras e o hover nos cards, então os dois efeitos de `transform` nunca entram em conflito.

---

## 📚 O que aprendi

- Estruturar um projeto Vue de modo que conteúdo, interface e traduções fiquem separados
- Construir um sistema de tradução leve com um estado reativo compartilhado fora dos componentes
- Escrever uma diretiva personalizada do Vue e usar `IntersectionObserver` para animações na rolagem
- Tornar as animações acessíveis com `prefers-reduced-motion`
- Construir um cabeçalho responsivo com um menu acessível (`aria-expanded`, `aria-controls`, suporte a teclado)
- Depurar erros de build causados por imports que sobraram do template do Vite e fazer o deploy de uma aplicação Vite na Vercel

---

## 🔮 Como pode melhorar

| Melhoria | Descrição |
| --- | --- |
| **Seção de experiência** | Preencher assim que houver algo para mostrar. |
| **Ícones no projeto** | Empacotar os ícones com o projeto em vez de buscá-los na API do Iconify, para que o site não dependa de uma requisição a terceiros. |
| **SEO e prévia em redes sociais** | Adicionar metadados como as tags Open Graph. |
| **Currículo** | Adicionar um currículo para download. |
| **Testes** | Adicionar testes básicos para a camada de tradução e para os arquivos de dados. |
| **Estilos compartilhados** | Extrair os estilos repetidos das seções para componentes ou classes compartilhadas. |
| **Dependência sem uso** | `vue-i18n` está no `package.json`, mas o código não a importa. Pode ser removida. |

---

## ▶ Como rodar o projeto

### Requisitos

- [Node.js](https://nodejs.org/) `^22.18.0` ou `>=24.12.0`, e npm
- Git

### 1. Clonar o repositório

```bash
git clone https://github.com/G-Delboni/Portfolio.git
cd Portfolio
```

### 2. Instalar e rodar

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

### Editando o conteúdo

| O que mudar | Onde |
| --- | --- |
| Nome, e-mail, GitHub e LinkedIn | `src/data/profile.js` |
| Lista de tecnologias e ícones | `src/data/technologies.js` |
| Projetos (texto nos dois idiomas, stack, links) | `src/data/projects.js` |
| Itens de experiência | `src/data/experience.js` |
| Seções do menu | `src/data/sections.js` |
| Textos da interface | `src/i18n/en.js` e `src/i18n/pt.js` |
| Cores, espaçamento, velocidade das animações | `src/styles/global.css` (variáveis CSS em `:root`) |

### Estrutura do projeto

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

Feito por **Gabriel Delboni Dias** ·
[LinkedIn](https://www.linkedin.com/in/gabriel-delboni-dias/) ·
[GitHub](https://github.com/G-Delboni)
