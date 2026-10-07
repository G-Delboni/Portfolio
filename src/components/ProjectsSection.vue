<script setup>
import { Icon } from '@iconify/vue'
import { projects } from '../data/projects'
import { useI18n } from '../i18n'

const { t, tr } = useI18n()
</script>

<template>
  <section id="projects" class="projects">
    <h2>{{ t('projects.title') }}</h2>

    <div class="list">
      <article v-for="project in projects" :key="project.name" class="card hoverable">
        <h3>{{ project.name }}</h3>
        <p class="description">{{ tr(project.description) }}</p>

        <ul class="stack">
          <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
        </ul>

        <div v-if="project.links.length" class="links">
          <a
            v-for="link in project.links"
            :key="link.label"
            :href="link.url"
            :aria-label="link.label"
            :title="link.label"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon :icon="link.icon" width="20" height="20" />
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 2rem 0;
}

h2 {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.85rem;
}

.list {
  display: grid;
  gap: 0.85rem;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
}

.description {
  margin-top: 0.25rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
  padding: 0;
  list-style: none;
  font-size: 0.75rem;
}

.stack li {
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 0.1rem 0.5rem;
}

.links {
  display: flex;
  gap: 0.85rem;
  margin-top: 0.75rem;
  color: var(--text-muted);
}

.links a {
  display: flex;
}

.links a:hover {
  color: var(--text);
}
</style>
