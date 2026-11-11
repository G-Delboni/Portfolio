<script setup>
import { skills } from '../data/skills'
import { useI18n } from '../i18n'

const { t, tr } = useI18n()
</script>

<template>
  <section id="skills">
    <h2 v-reveal>{{ t('skills.title') }}</h2>

    <ul>
      <li v-for="(group, index) in skills" :key="index" v-reveal="1 + index">
        <strong>{{ tr(group.group) }}</strong>
        <span>{{ group.items.map(tr).join(', ') }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
li {
  --stagger-line: var(--stagger-item);
  display: grid;
  grid-template-columns: 11ch 1fr;
  gap: 4px 16px;
  align-items: baseline;
  padding: 9px 0;
}

strong {
  font-weight: 600;
}

@media (max-width: 480px) {
  li {
    grid-template-columns: 1fr;
  }
}
</style>
