<script setup>
import { ref } from 'vue'
import { now } from '../data/now'
import GridScene from './GridScene.vue'
import { useI18n } from '../i18n'
import { useSeen } from '../seen'

const { t, tr, formatDate } = useI18n()

const block = ref(null)
const seen = useSeen(block)
</script>

<template>
  <section id="now">
    <h2 v-reveal>{{ t('now.title') }}</h2>
    <p v-reveal="1" class="note updated">{{ t('now.updated') }} {{ formatDate(now.updated) }}</p>

    <ul>
      <li v-for="(entry, index) in now.entries" :key="index" v-reveal="2 + index">
        <span>{{ tr(entry.text) }}</span>
        <span class="note end">{{ entry.date ? formatDate(entry.date) : t('now.ongoing') }}</span>
      </li>
    </ul>

    <div ref="block" class="inline-scene on-stage">
      <GridScene :active="seen" />
    </div>
  </section>
</template>

<style scoped>
h2 {
  margin-bottom: 8px;
}

.updated {
  margin-bottom: 20px;
}

li {
  --stagger-line: var(--stagger-item);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: baseline;
  padding: 9px 0;
}

.end {
  text-align: right;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
</style>
