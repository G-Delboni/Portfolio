<script setup>
import { experience } from '../data/experience'
import { useI18n } from '../i18n'

const { t, tr } = useI18n()
</script>

<template>
  <section id="experience" class="experience">
    <h2>{{ t('experience.title') }}</h2>

    <p v-if="!experience.length" class="empty">
      {{ t('experience.empty') }}
    </p>

    <div v-else class="list">
      <article v-for="item in experience" :key="item.company + item.period" class="item">
        <h3>{{ tr(item.role) }} · {{ item.company }}</h3>
        <p class="period">{{ item.period }}</p>
        <p class="description">{{ tr(item.description) }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience {
  padding: 2rem 0;
}

h2 {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.85rem;
}

.empty {
  border: 1px dashed var(--border);
  border-radius: var(--radius);
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.list {
  display: grid;
  gap: 0.85rem;
}

.item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem 1.25rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
}

.period {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.description {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-muted);
}
</style>
