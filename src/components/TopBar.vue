<script setup>
import { useI18n } from '../i18n'
import { navItems, useCurrentSection } from '../nav'
import { useTheme } from '../theme'
import LogoMark from './LogoMark.vue'
import RollText from './RollText.vue'

const { locale, t, toggleLocale } = useI18n()
const { theme, toggleTheme } = useTheme()
const { current } = useCurrentSection()
</script>

<template>
  <header class="bar">
    <a class="brand" href="#top"><LogoMark />Gabriel Delboni</a>

    <nav :aria-label="t('nav.sections')">
      <a
        v-for="id in navItems"
        :key="id"
        :href="`#${id}`"
        :class="{ current: current === id }"
        :aria-current="current === id ? 'true' : undefined"
        ><RollText :text="t(`nav.${id}`)"
      /></a>
    </nav>

    <div class="prefs">
      <button type="button" :aria-label="t('lang.switch')" @click="toggleLocale">
        <span :class="{ on: locale === 'pt' }">PT</span>
        <span aria-hidden="true"> · </span>
        <span :class="{ on: locale === 'en' }">EN</span>
      </button>
      <button type="button" @click="toggleTheme">
        {{ theme === 'dark' ? t('theme.toLight') : t('theme.toDark') }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.bar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 28px;
  padding: 14px clamp(20px, 3vw, 40px);
  background: var(--bg);
  font-size: var(--step-note);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  text-decoration: none;
  margin-right: auto;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 24px;
}

nav a {
  text-decoration: none;
  color: var(--muted);
  transition: color var(--t-hover) ease;
}

nav a.current {
  color: var(--ink);
  font-weight: 600;
}

.prefs {
  display: flex;
  gap: 20px;
}

.prefs button {
  background: none;
  padding: 4px 0;
  font-weight: 500;
  color: var(--muted);
  transition: color var(--t-hover) ease;
}

.prefs .on {
  color: var(--ink);
  font-weight: 600;
}

@media (hover: hover) and (pointer: fine) {
  nav a:hover,
  .prefs button:hover {
    color: var(--ink);
  }
}

/* celular: a barra deixa de acompanhar a rolagem e o menu desce para a segunda linha */
@media (max-width: 720px) {
  .bar {
    position: static;
  }

  nav {
    order: 3;
    width: 100%;
    gap: 4px 20px;
  }
}
</style>
