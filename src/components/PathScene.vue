<script setup>
import { pipeline } from '../data/pipeline'
import { useI18n } from '../i18n'

defineProps({ active: Boolean })
const { t, tr } = useI18n()
</script>

<template>
  <div class="path" :class="{ 'is-running': active }">
    <h3>{{ t('path.title') }}</h3>
    <ol>
      <li v-for="(step, index) in pipeline" :key="index" :style="{ '--i': index }">
        <strong>{{ tr(step.name) }}</strong>
        <span>{{ tr(step.note) }}</span>
      </li>
    </ol>
    <p class="scene-note">{{ t('path.note') }}</p>
  </div>
</template>

<style scoped>
h3 {
  font-size: var(--step-lead);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 20px;
}

ol {
  list-style: none;
  padding: 0;
}

li {
  background: var(--stage-2);
  padding: 14px 20px;
}

li + li {
  margin-top: 6px;
}

strong {
  display: block;
  font-weight: 600;
}

li span,
.scene-note {
  font-size: var(--step-note);
  color: var(--stage-muted);
}

.scene-note {
  margin-top: 24px;
}

/* as etapas acendem uma depois da outra, na ordem em que a mensagem passa */
@media (prefers-reduced-motion: no-preference) {
  .is-running li {
    animation: pass 420ms var(--ease-out) both;
    animation-delay: calc(var(--i) * 110ms + 160ms);
  }
}

@keyframes pass {
  from {
    opacity: 0.25;
    transform: translateX(-12px);
  }
}
</style>
