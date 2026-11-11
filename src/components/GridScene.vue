<script setup>
import { evalReport } from '../data/evalCases'
import { useI18n } from '../i18n'

defineProps({ active: Boolean })
const { t, formatDate, formatUsd } = useI18n()
</script>

<template>
  <div class="grid-scene" :class="{ 'is-running': active }">
    <ul class="cells" aria-hidden="true">
      <li v-for="(id, index) in evalReport.cases" :key="id" :title="id" :style="{ '--i': index }" />
    </ul>

    <div>
      <p class="tally">{{ evalReport.passed }}/{{ evalReport.total }}</p>
      <p class="scene-note">{{ t('grid.note') }}</p>
      <p class="scene-note">{{ t('grid.cost') }} {{ formatUsd(evalReport.costUsd, 4) }}</p>
      <p class="scene-note">
        <a :href="evalReport.url" target="_blank" rel="noopener noreferrer"
          >{{ t('grid.source') }} {{ formatDate(evalReport.date) }}</a
        >
      </p>
    </div>
  </div>
</template>

<style scoped>
.grid-scene {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(24px, 3vw, 40px);
}

/* uma célula por caso de eval do relatório */
.cells {
  --cell: clamp(30px, 3vw, 46px);
  display: grid;
  grid-template-columns: repeat(5, var(--cell));
  gap: 6px;
  list-style: none;
  padding: 0;
}

.cells li {
  height: var(--cell);
  background: var(--stage-accent);
}

.tally {
  font-size: clamp(3.4rem, 2rem + 4.4vw, 5.4rem);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.9;
  margin-bottom: 14px;
}

.scene-note {
  font-size: var(--step-note);
  color: var(--stage-muted);
  max-width: 30ch;
}

/* as células acendem em sequência quando a cena aparece */
@media (prefers-reduced-motion: no-preference) {
  .cells li {
    background: var(--stage-2);
    transition: background-color 260ms ease;
  }

  .is-running .cells li {
    background: var(--stage-accent);
    transition-delay: calc(var(--i) * 45ms + 200ms);
  }
}
</style>
