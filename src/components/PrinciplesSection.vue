<script setup>
import { ref } from 'vue'
import { principles } from '../data/principles'
import PathScene from './PathScene.vue'
import { useI18n } from '../i18n'
import { useSeen } from '../seen'

const { t, tr } = useI18n()

const block = ref(null)
const seen = useSeen(block)
</script>

<template>
  <section id="principles">
    <h2 v-reveal>{{ t('principles.title') }}</h2>
    <p v-reveal="1" class="lead-line">{{ t('principles.lead') }}</p>

    <div v-reveal class="curtain">
      <ul class="rules">
        <li v-for="(item, index) in principles" :key="index">
          {{ tr(item.title) }}
          <span class="note">{{ tr(item.note) }}</span>
        </li>
      </ul>
    </div>

    <div ref="block" class="inline-scene on-stage">
      <PathScene :active="seen" />
    </div>
  </section>
</template>

<style scoped>
.lead-line {
  font-size: var(--step-lead);
  font-weight: 500;
  line-height: 1.25;
  margin: -8px 0 24px;
}

.rules {
  background: var(--surface);
  padding: clamp(24px, 3vw, 40px);
}

li {
  font-size: var(--step-lead);
  font-weight: 500;
  line-height: 1.25;
}

li + li {
  margin-top: 18px;
}

.note {
  display: block;
  font-weight: 400;
  line-height: 1.45;
  margin-top: 4px;
}

/* o painel abre de cima para baixo, em vez de subir como o resto.
   O recorte fica no filho: um elemento recortado por inteiro nunca dispara o observador. */
@media (prefers-reduced-motion: no-preference) {
  .curtain[data-reveal] {
    opacity: 1;
    transform: none;
  }

  .curtain .rules {
    clip-path: inset(0 0 100% 0);
    transition: clip-path 500ms var(--ease-in-out);
  }

  .curtain.is-in .rules {
    clip-path: inset(0);
  }
}
</style>
