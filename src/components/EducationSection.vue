<script setup>
import { education } from '../data/education'
import { useI18n } from '../i18n'

const { t, tr } = useI18n()
</script>

<template>
  <section id="education" data-nav="experience">
    <h2 v-reveal>{{ t('education.title') }}</h2>

    <ul class="rows">
      <li v-for="(item, index) in education" :key="index" v-reveal="1 + index">
        <span>
          <strong>{{ tr(item.title) }}</strong>
          <span v-if="item.place" class="note place">{{ tr(item.place) }}</span>
        </span>
        <span class="note end">{{ tr(item.when) }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
li {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  align-items: baseline;
  padding: 10px 0;
}

strong {
  font-weight: 600;
}

.place {
  display: block;
}

.end {
  text-align: right;
  white-space: nowrap;
}
</style>
