<script setup>
import { sections } from '../data/sections'
import { useI18n } from '../i18n'

const { t, toggleLocale } = useI18n()
</script>

<template>
  <header class="header">
    <a href="#top" class="brand">Gabriel Delboni Dias</a>

    <nav class="nav">
      <a v-for="id in sections" :key="id" :href="`#${id}`">
        {{ t(`nav.${id}`) }}
      </a>
    </nav>

    <button class="lang" type="button" @click="toggleLocale">
      {{ t('header.switchLanguage') }}
    </button>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: var(--header-height);
  padding: 0 1.75rem;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.brand {
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.nav a:hover {
  color: var(--text);
}

.lang {
  background: none;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.2rem 0.65rem;
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
}

.lang:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

@media (max-width: 640px) {
  .nav {
    display: none;
  }
}
</style>
