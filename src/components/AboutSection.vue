<script setup>
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="about">
    <h2>{{ t('about.title') }}</h2>
    <p>{{ t('about.text') }}</p>
  </section>
</template>

<style scoped>
.about {
  padding: 2rem 0;
}

h2 {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.85rem;
}

p {
  color: var(--text-muted);
}
</style>
