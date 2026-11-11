<script setup>
import { ref, watch } from 'vue'
import { numbers } from '../data/numbers'
import { useI18n } from '../i18n'

const props = defineProps({ active: Boolean })
const { t, tr } = useI18n()

// Os algarismos sobem até o valor uma única vez, na primeira vez que a cena aparece.
const shown = ref(numbers.map((item) => item.value))
let played = false

function play() {
  if (played) return
  played = true
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const duration = 1100
  const start = performance.now()
  const frame = (time) => {
    const progress = Math.min((time - start) / duration, 1)
    const eased = 1 - Math.pow(2, -10 * progress)
    shown.value = numbers.map((item) =>
      item.value === null ? null : progress === 1 ? item.value : Math.round(item.value * eased),
    )
    if (progress < 1) requestAnimationFrame(frame)
  }
  shown.value = numbers.map((item) => (item.value === null ? null : 0))
  requestAnimationFrame(frame)
}

watch(
  () => props.active,
  (active) => active && play(),
  { immediate: true },
)
</script>

<template>
  <div class="numbers">
    <ul>
      <li v-for="(item, index) in numbers" :key="index" :class="{ phrase: item.value === null }">
        <span v-if="item.value !== null" class="figure" aria-hidden="true">{{ shown[index] }}</span>
        <span>
          <span v-if="item.value !== null" class="sr-only">{{ item.value }}</span>
          {{ tr(item.label) }}
        </span>
      </li>
    </ul>
    <p class="scene-note">{{ t('numbers.note') }}</p>
  </div>
</template>

<style scoped>
li {
  --figure: clamp(3.4rem, 2rem + 4.4vw, 5.4rem);
  display: grid;
  /* coluna larga o bastante para o maior número, para os três alinharem à direita */
  grid-template-columns: calc(var(--figure) * 1.75) 1fr;
  gap: clamp(16px, 2vw, 28px);
  align-items: center;
  font-size: var(--step-lead);
  line-height: 1.2;
}

/* o item sem número ocupa a linha toda, alinhado ao início dos números */
li.phrase {
  grid-template-columns: 1fr;
  padding-left: calc(var(--figure) * 1.75 + clamp(16px, 2vw, 28px));
}

li + li {
  margin-top: clamp(20px, 3vh, 36px);
}

.figure {
  font-size: var(--figure);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.9;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.scene-note {
  margin-top: clamp(28px, 5vh, 48px);
  font-size: var(--step-note);
  color: var(--stage-muted);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
</style>
