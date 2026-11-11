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
      <!-- só os itens com número entram na grade; a frase vem logo abaixo -->
      <template v-for="(item, index) in numbers" :key="index">
        <li v-if="item.value !== null">
          <span class="figure" aria-hidden="true">{{ shown[index] }}</span>
          <span class="label">
            <span class="sr-only">{{ item.value }}</span>
            {{ tr(item.label) }}
          </span>
        </li>
      </template>
    </ul>

    <template v-for="(item, index) in numbers" :key="`p${index}`">
      <p v-if="item.value === null" class="phrase">{{ tr(item.label) }}</p>
    </template>

    <p class="scene-note">{{ t('numbers.note') }}</p>
  </div>
</template>

<style scoped>
.numbers {
  --figure: clamp(3.4rem, 2rem + 4.4vw, 5.4rem);
}

/* números à esquerda, todos no mesmo x; rótulos começam na mesma coluna */
li {
  display: grid;
  grid-template-columns: calc(var(--figure) * 1.7) 1fr;
  gap: clamp(16px, 2vw, 28px);
  align-items: baseline;
  line-height: 1.2;
}

li + li {
  margin-top: clamp(16px, 2.5vh, 28px);
}

.figure {
  font-size: var(--figure);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 0.9;
  font-variant-numeric: tabular-nums;
}

.label {
  font-size: var(--step-lead);
}

/* a frase sem número usa a largura toda, no mesmo x dos números */
.phrase {
  margin-top: clamp(24px, 4vh, 40px);
  font-size: var(--step-lead);
  line-height: 1.25;
  max-width: 34ch;
}

.scene-note {
  margin-top: clamp(24px, 4vh, 40px);
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
