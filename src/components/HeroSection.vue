<script setup>
import { profile } from '../data/profile'
import { useI18n } from '../i18n'
import RollText from './RollText.vue'

const { t, tr } = useI18n()
</script>

<template>
  <header class="hero">
    <h1 style="--i: 0">{{ profile.name }}</h1>
    <p class="role" style="--i: 1">{{ tr(profile.role) }}</p>
    <p class="about" style="--i: 2">{{ tr(profile.intro) }}</p>

    <div class="links" style="--i: 3">
      <a class="btn" href="#contact"><RollText :text="t('nav.contact')" /></a>
      <a
        v-for="link in profile.links"
        :key="link.label"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        >{{ link.label }}</a
      >
    </div>
  </header>
</template>

<style scoped>
.hero {
  padding-top: clamp(40px, 7vw, 96px);
}

h1 {
  font-size: var(--step-name);
}

.role {
  font-size: var(--step-lead);
  font-weight: 500;
  line-height: 1.25;
  margin-top: 18px;
}

.about {
  margin-top: 18px;
}

.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 26px;
  margin-top: 30px;
}

/* carga: quatro passos, assentados em pouco mais de um segundo */
@media (prefers-reduced-motion: no-preference) {
  h1,
  .role,
  .about,
  .links {
    animation: up 600ms var(--ease-out) both;
    animation-delay: calc(var(--i) * 80ms);
  }
}

@keyframes up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
