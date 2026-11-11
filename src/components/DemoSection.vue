<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { evalCases } from '../data/evalCases'
import { useI18n } from '../i18n'

const { locale, t, tr, formatUsd } = useI18n()

const active = ref(0)
// Cada escolha remonta a conversa, para as falas entrarem de novo em sequência.
const run = ref(0)
const current = computed(() => evalCases[active.value])

function select(index) {
  active.value = index
  run.value += 1
}

// Um bloco claro desliza até a situação escolhida.
const group = ref(null)
const mark = ref({ opacity: 0 })

function placeMark() {
  const button = group.value?.querySelectorAll('button')[active.value]
  if (!button || !button.offsetWidth) return
  mark.value = {
    opacity: 1,
    width: `${button.offsetWidth}px`,
    height: `${button.offsetHeight}px`,
    transform: `translate(${button.offsetLeft}px, ${button.offsetTop}px)`,
  }
}

watch([active, locale], () => nextTick(placeMark))

onMounted(() => {
  placeMark()
  document.fonts?.ready.then(placeMark)
  window.addEventListener('resize', placeMark)
})

onUnmounted(() => window.removeEventListener('resize', placeMark))

function onArrow(event, step) {
  const next = (active.value + step + evalCases.length) % evalCases.length
  select(next)
  event.currentTarget.querySelectorAll('button')[next]?.focus()
}
</script>

<template>
  <section id="demo" class="band on-stage" data-ui>
    <div class="band-in">
      <div v-reveal class="lead">
        <h2>{{ t('demo.title') }}</h2>
        <p>{{ t('demo.intro') }}</p>

        <div
          ref="group"
          class="cases"
          role="group"
          :aria-label="t('eval.cases')"
          @keydown.right.prevent="onArrow($event, 1)"
          @keydown.left.prevent="onArrow($event, -1)"
        >
          <span class="mark" :style="mark" aria-hidden="true"></span>
          <button
            v-for="(item, index) in evalCases"
            :key="item.id"
            type="button"
            :aria-pressed="index === active"
            @click="select(index)"
          >
            {{ tr(item.label) }}
          </button>
        </div>
      </div>

      <div v-reveal="1" class="talk">
        <div aria-live="polite">
          <div :key="run" class="chat">
            <p class="client" style="--i: 0">
              <span class="sr-only">{{ t('demo.client') }}</span>
              {{ tr(current.input) }}
            </p>
            <p class="agent" style="--i: 1">
              <span class="sr-only">{{ t('demo.agent') }}</span>
              {{ tr(current.reply) }}
            </p>
            <p class="did" style="--i: 2">
              <span class="verdict">{{ t('eval.passed') }}</span>
              {{ tr(current.did) }}
            </p>
          </div>
        </div>

        <p class="caveat">{{ t('demo.caveat') }}</p>

        <details>
          <summary>{{ t('demo.details') }}</summary>
          <dl>
            <div>
              <dt>{{ t('eval.tool') }}</dt>
              <dd>
                <code v-if="current.tool">{{ current.tool }}</code>
                <template v-else>{{ t('eval.none') }}</template>
              </dd>
            </div>
            <div>
              <dt>{{ t('eval.transferred') }}</dt>
              <dd>{{ current.transferred ? t('eval.yes') : t('eval.no') }}</dd>
            </div>
            <div>
              <dt>{{ t('eval.result') }}</dt>
              <dd>{{ t('eval.passed') }} · {{ formatUsd(current.costUsd, 5) }}</dd>
            </div>
          </dl>
          <p class="fine">{{ t('eval.note') }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.band {
  background: var(--stage);
  color: var(--stage-ink);
  padding: clamp(56px, 7vw, 104px) clamp(20px, 3vw, 40px);
}

.band-in {
  max-width: 1080px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 5fr 6fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: start;
}

.lead p {
  color: var(--stage-muted);
  margin-bottom: 28px;
}

@media (max-width: 860px) {
  .band-in {
    grid-template-columns: minmax(0, 1fr);
  }
}

.cases {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.cases button {
  position: relative;
  font-size: var(--step-note);
  font-weight: 500;
  background: var(--stage-2);
  padding: 0.6em 1em;
  transition:
    background-color var(--t-hover) ease,
    color var(--t-ui) ease,
    transform var(--t-press) var(--ease-out);
}

.cases button:active {
  transform: scale(0.97);
}

.cases button[aria-pressed='true'] {
  background: none;
  color: var(--stage);
}

.mark {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--stage-ink);
  transition:
    transform 380ms var(--ease-out),
    width 380ms var(--ease-out),
    height 380ms var(--ease-out);
}

/* a conversa: a mensagem do cliente à direita, a resposta do agente à esquerda */
.caveat {
  margin-top: 20px;
  font-size: var(--step-note);
  color: var(--stage-ink);
  max-width: 56ch;
}

.chat {
  display: grid;
  gap: 10px;
}

.chat p {
  line-height: 1.35;
}

.client,
.agent {
  padding: 12px 16px;
  max-width: 85%;
}

.client {
  justify-self: end;
  background: var(--stage-2);
}

.agent {
  justify-self: start;
  background: var(--stage-hover);
}

.did {
  margin-top: 10px;
}

.verdict {
  display: inline-block;
  background: var(--stage-accent);
  color: var(--stage-accent-ink);
  padding: 0.1em 0.6em;
  font-weight: 600;
  margin-right: 0.5em;
}

details {
  margin-top: 24px;
  font-size: var(--step-note);
  color: var(--stage-muted);
}

summary {
  cursor: pointer;
  width: fit-content;
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

dl {
  display: grid;
  gap: 10px;
  margin: 16px 0;
}

dd {
  color: var(--stage-ink);
}

.fine {
  max-width: 56ch;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (hover: hover) and (pointer: fine) {
  .cases button:not([aria-pressed='true']):hover {
    background: var(--stage-hover);
  }
}

/* as falas entram uma depois da outra, e o veredito fecha */
@media (prefers-reduced-motion: no-preference) {
  .chat p {
    animation: say 320ms var(--ease-out) both;
    animation-delay: calc(var(--i) * 180ms);
  }

  .chat .verdict {
    animation: stamp var(--t-ui) var(--ease-in-out) 520ms both;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mark {
    transition: none;
  }
}

@keyframes say {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

@keyframes stamp {
  from {
    clip-path: inset(0 100% 0 0);
  }

  to {
    clip-path: inset(0);
  }
}
</style>
