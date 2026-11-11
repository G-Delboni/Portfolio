<script setup>
import { projects as all } from '../data/projects'
import { useI18n } from '../i18n'

const { t, tr } = useI18n()

const projects = all.filter((project) => project.featured !== false)
</script>

<template>
  <section id="projects">
    <h2 v-reveal>{{ t('projects.title') }}</h2>

    <ul class="ledger">
      <li v-for="(project, index) in projects" :key="project.name" v-reveal="1 + index">
        <a :href="project.url" target="_blank" rel="noopener noreferrer">
          <span class="name">{{ project.name }}</span>
          <span class="kind">{{ tr(project.kind) }}</span>
          <span class="note state">{{ tr(project.state) }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
/* as linhas chegam uma a uma, mais juntas que parágrafos */
li {
  --stagger-line: var(--stagger-item);
}

a {
  display: grid;
  grid-template-columns: 42% 1fr;
  gap: 0 16px;
  align-items: baseline;
  padding: 12px 0;
  text-decoration: none;
  transition: opacity var(--t-hover) ease;
}

.name {
  font-weight: 600;
}

.kind {
  font-size: var(--step-note);
}

.state {
  grid-column: 2;
}

@media (hover: hover) and (pointer: fine) {
  .ledger:hover a:not(:hover) {
    opacity: 0.45;
  }
}

@media (max-width: 480px) {
  a {
    grid-template-columns: 1fr;
  }

  .state {
    grid-column: 1;
  }
}
</style>
