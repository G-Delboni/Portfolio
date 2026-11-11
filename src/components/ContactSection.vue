<script setup>
import { ref } from 'vue'
import { profile } from '../data/profile'
import { useI18n } from '../i18n'

const { t, tr } = useI18n()

// permite quebrar o endereço só antes do @, nunca no meio de uma palavra
const [user, domain] = profile.email.split('@')

const copied = ref(false)
let timer

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
  } catch {
    return // sem permissão de área de transferência, o link de e-mail continua valendo
  }
  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => (copied.value = false), 2000)
}
</script>

<template>
  <!-- o palco se fecha: a única seção que ocupa a largura inteira -->
  <section id="contact" class="contact band on-stage">
    <h2 v-reveal>{{ t('contact.title') }}</h2>
    <p v-reveal="1" class="say">{{ t('contact.text') }}</p>

    <div class="reach">
      <a class="mail" :href="`mailto:${profile.email}`">{{ user }}<wbr />@{{ domain }}</a>
      <button type="button" class="copy" :class="{ done: copied }" @click="copyEmail">
        <span>{{ t('contact.copy') }}</span>
        <span aria-hidden="true">{{ t('contact.copied') }}</span>
      </button>
      <span class="sr-only" role="status">{{ copied ? t('contact.copied') : '' }}</span>
    </div>

    <div v-reveal="2" class="ends">
      <p>
        <a
          v-for="link in profile.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{ link.label }}</a
        >
        <span>{{ tr(profile.location) }}</span>
      </p>
      <p class="cost">{{ t('footer.cost') }}</p>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--stage);
  color: var(--stage-ink);
  padding: clamp(64px, 9vw, 128px) clamp(20px, 4.2vw, 64px) clamp(24px, 3vw, 40px);
  scroll-margin-top: 0;
}

.say {
  font-size: var(--step-lead);
  line-height: 1.25;
  max-width: 24ch;
}

.mail {
  display: block;
  width: fit-content;
  font-size: clamp(1.5rem, 0.6rem + 4.2vw, 4.4rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.05;
  text-decoration: none;
  transform-origin: left center;
  transition: color var(--t-hover) ease;
}

.reach {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px 32px;
  margin: clamp(56px, 9vw, 120px) 0 clamp(48px, 7vw, 96px);
}

/* o rótulo sobe e dá lugar à confirmação */
.copy {
  position: relative;
  overflow: hidden;
  background: var(--stage-2);
  padding: 0.6em 1.1em;
  font-size: var(--step-note);
  font-weight: 500;
  transition: background-color var(--t-hover) ease;
}

.copy span {
  display: block;
  transition: transform 380ms var(--ease-out);
}

.copy span + span {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: var(--stage-accent);
  color: var(--stage-accent-ink);
  font-weight: 600;
  transform: translateY(100%);
}

.copy.done span:first-child {
  transform: translateY(-100%);
}

.copy.done span + span {
  transform: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (prefers-reduced-motion: reduce) {
  .copy span {
    transition: none;
  }
}

.ends {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px 32px;
  font-size: var(--step-note);
}

.ends p:first-child {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
}

.cost {
  color: var(--stage-muted);
}

@media (hover: hover) and (pointer: fine) {
  .mail:hover {
    color: var(--stage-accent);
  }

  .copy:hover {
    background: var(--stage-hover);
  }
}

/* o e-mail cresce enquanto a seção entra; sem suporte, fica no tamanho final */
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .mail {
      animation: grow linear both;
      animation-timeline: view();
      animation-range: entry 0% cover 35%;
    }
  }
}

@keyframes grow {
  from {
    transform: scale(0.94);
  }

  to {
    transform: scale(1);
  }
}
</style>
