<script setup>
import { Icon } from '@iconify/vue'
import { profile } from '../data/profile'
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="card hoverable">
      <h1>{{ profile.name }}</h1>
      <p class="location">{{ t('hero.location') }}</p>
      <p class="description">{{ t('hero.description') }}</p>

      <div class="links">
        <a
          v-for="link in profile.links"
          :key="link.label"
          :href="link.url"
          :aria-label="link.label"
          :title="link.label"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon :icon="link.icon" width="22" height="22" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 3rem 0 1rem;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem 1.5rem;
}

h1 {
  font-size: 1.6rem;
  font-weight: 500;
}

.location {
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.description {
  margin-top: 0.85rem;
}

.links {
  display: flex;
  gap: 0.85rem;
  margin-top: 1rem;
  color: var(--text-muted);
}

.links a {
  display: flex;
}

.links a:hover {
  color: var(--text);
}
</style>
