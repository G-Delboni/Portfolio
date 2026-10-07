import { ref, watch } from 'vue'
import en from './en'
import pt from './pt'

const messages = { en, pt }

const saved = localStorage.getItem('locale')
const locale = ref(saved in messages ? saved : 'en')

watch(
  locale,
  (value) => {
    localStorage.setItem('locale', value)
    document.documentElement.lang = value === 'pt' ? 'pt-BR' : 'en'
  },
  { immediate: true },
)

let switching = false

function toggleLocale() {
  if (switching) return
  const next = locale.value === 'en' ? 'pt' : 'en'

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    locale.value = next
    return
  }

  const root = document.documentElement
  const duration = parseFloat(getComputedStyle(root).getPropertyValue('--switch-duration')) || 150

  switching = true
  root.classList.add('is-switching')

  setTimeout(() => {
    locale.value = next
    root.classList.remove('is-switching')
    switching = false
  }, duration)
}

export function useI18n() {
  const t = (key) => messages[locale.value][key] ?? key
  const tr = (obj) => obj[locale.value] ?? obj.en
  return { locale, t, tr, toggleLocale }
}
