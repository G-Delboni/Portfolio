<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { profile } from '../data/profile'
import { useI18n } from '../i18n'

const { t } = useI18n()

const items = computed(() => [
  {
    label: profile.email,
    url: `mailto:${profile.email}`,
    icon: 'mdi:email-outline',
    external: false,
  },
  ...profile.links.map((link) => ({ ...link, external: true })),
])
</script>

<template>
  <section id="contact" class="contact">
    <h2>{{ t('contact.title') }}</h2>
    <p class="text">{{ t('contact.text') }}</p>

    <div class="links">
      <a
        v-for="item in items"
        :key="item.label"
        :href="item.url"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
      >
        <Icon :icon="item.icon" width="18" height="18" aria-hidden="true" />
        {{ item.label }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 2rem 0 5rem;
}

h2 {
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 0.85rem;
}

.text {
  color: var(--text-muted);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 1rem;
  font-size: 0.9rem;
}

.links a {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  border-bottom: 1px solid var(--border);
}

.links a:hover {
  border-color: var(--text);
}
</style>
