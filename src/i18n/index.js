import { nextTick, ref, watch } from 'vue'
import en from './en'
import pt from './pt'

const messages = { en, pt }
const tags = { en: 'en', pt: 'pt-BR' }
const months = {
  pt: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
}

function initialLocale() {
  try {
    const saved = localStorage.getItem('locale')
    if (saved in messages) return saved
  } catch {
    // armazenamento bloqueado: segue o idioma do navegador
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

const locale = ref(initialLocale())

watch(
  locale,
  (value) => {
    try {
      localStorage.setItem('locale', value)
    } catch {
      // sem armazenamento, a escolha vale só para esta visita
    }
    document.documentElement.lang = tags[value]
    document.title = messages[value]['meta.title']
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', messages[value]['meta.description'])
  },
  { immediate: true },
)

function toggleLocale() {
  const next = locale.value === 'en' ? 'pt' : 'en'
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reduceMotion || !document.startViewTransition) {
    locale.value = next
    return
  }

  document.startViewTransition(() => {
    locale.value = next
    return nextTick()
  })
}

export function useI18n() {
  const t = (key) => messages[locale.value][key] ?? key
  const tr = (value) => (typeof value === 'string' ? value : (value[locale.value] ?? value.en))
  // "10 nov 2026" nos dois idiomas, sem o "de" e o ponto do formato longo
  const formatDate = (iso) => {
    const [year, month, day] = iso.split('-').map(Number)
    return `${day} ${months[locale.value][month - 1]} ${year}`
  }
  const formatUsd = (value, digits) =>
    `US$ ${new Intl.NumberFormat(locale.value === 'pt' ? 'pt-BR' : 'en-US', {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(value)}`
  return { locale, t, tr, toggleLocale, formatDate, formatUsd }
}
