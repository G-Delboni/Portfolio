<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { sections } from '../data/sections'
import { useI18n } from '../i18n'

const { t, toggleLocale } = useI18n()

const open = ref(false)
const close = () => (open.value = false)

function onKeydown(event) {
  if (event.key === 'Escape') close()
}

let desktopQuery

onMounted(() => {
  desktopQuery = window.matchMedia('(min-width: 641px)')
  desktopQuery.addEventListener('change', close)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  desktopQuery?.removeEventListener('change', close)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header class="header">
    <a href="#top" class="brand" @click="close">Gabriel Delboni Dias</a>

    <nav id="main-nav" class="nav" :class="{ open }">
      <a v-for="id in sections" :key="id" :href="`#${id}`" @click="close">
        {{ t(`nav.${id}`) }}
      </a>
    </nav>

    <div class="actions">
      <button class="lang" type="button" @click="toggleLocale">
        {{ t('header.switchLanguage') }}
      </button>

      <button
        class="menu-btn"
        type="button"
        aria-controls="main-nav"
        :aria-expanded="open"
        :aria-label="open ? t('header.closeMenu') : t('header.openMenu')"
        @click="open = !open"
      >
        <Icon :icon="open ? 'mdi:close' : 'mdi:menu'" width="22" height="22" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  height: var(--header-height);
  padding: 0 1.75rem;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

.brand {
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.nav a:hover {
  color: var(--text);
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang {
  background: none;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.2rem 0.65rem;
  font: inherit;
  font-size: 0.85rem;
  cursor: pointer;
}

.lang:hover {
  color: var(--text);
  border-color: var(--text-muted);
}

.menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  color: var(--text-muted);
  border: 0;
  padding: 0.25rem;
  cursor: pointer;
}

.menu-btn:hover {
  color: var(--text);
}

@media (max-width: 640px) {
  .header {
    padding: 0 1.25rem;
  }

  .menu-btn {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    padding: 0.5rem 1.25rem 0.75rem;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    font-size: 0.95rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition:
      opacity var(--motion-base) ease,
      transform var(--motion-base) ease,
      visibility var(--motion-base);
  }

  .nav.open {
    opacity: 1;
    visibility: visible;
    transform: none;
  }

  :global(.is-switching) .nav {
    opacity: 0;
  }

  .nav a {
    padding: 0.7rem 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav {
    transition: none;
  }
}
</style>
