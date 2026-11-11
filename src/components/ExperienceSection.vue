<script setup>
import { ref } from 'vue'
import { experience } from '../data/experience'
import NumbersScene from './NumbersScene.vue'
import { useI18n } from '../i18n'
import { useSeen } from '../seen'

const { t, tr } = useI18n()

// os números contam quando o bloco aparece na tela
const inline = ref(null)
const inlineSeen = useSeen(inline)
</script>

<template>
  <section id="experience">
    <h2 v-reveal>{{ t('experience.title') }}</h2>

    <article v-for="item in experience" :key="item.company">
      <h3 v-reveal="1">{{ tr(item.role) }}</h3>
      <p v-reveal="1" class="note when">{{ item.company }} · {{ tr(item.period) }}</p>
      <p v-for="(paragraph, index) in item.paragraphs" :key="index" v-reveal="2 + index">
        {{ tr(paragraph) }}
      </p>
    </article>

    <div ref="inline" class="inline-scene on-stage">
      <NumbersScene :active="inlineSeen" />
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-size: var(--step-lead);
  font-weight: 500;
  line-height: 1.25;
}

.when {
  margin: 6px 0 20px;
}

p + p {
  margin-top: 16px;
}
</style>
