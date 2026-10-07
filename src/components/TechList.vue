<script setup>
import { Icon } from '@iconify/vue'
import { technologies } from '../data/technologies'
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section class="tech">
    <h2>{{ t('tech.title') }}</h2>
    <ul>
      <li v-for="tech in technologies" :key="tech.name">
        <Icon :icon="tech.icon" width="16" height="16" aria-hidden="true" />
        {{ tech.name }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.tech {
  padding: 2rem 0;
}

h2 {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.85rem;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  list-style: none;
}

li {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.3rem 0.7rem;
  font-size: 0.85rem;
}
</style>
