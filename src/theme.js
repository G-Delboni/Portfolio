import { nextTick, ref, watch } from 'vue'

// O tema inicial é definido por um script em index.html, antes da primeira pintura:
// a escolha salva, ou então a preferência do sistema.
const theme = ref(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light')

watch(theme, (value) => {
  document.documentElement.dataset.theme = value
  try {
    localStorage.setItem('theme', value)
  } catch {
    // sem armazenamento, a escolha vale só para esta visita
  }
})

// O tema novo se espalha em círculo a partir do botão clicado. O navegador fotografa a
// página antes e depois e recorta a foto nova, então nenhum texto é duplicado nem se move.
function toggleTheme(event) {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // aba em segundo plano não pinta a transição: troca direto
  const hidden = document.visibilityState !== 'visible'

  if (reduceMotion || hidden || !document.startViewTransition) {
    theme.value = next
    return
  }

  const root = document.documentElement
  const box = event?.currentTarget?.getBoundingClientRect()
  const x = box ? box.left + box.width / 2 : window.innerWidth / 2
  const y = box ? box.top + box.height / 2 : 0
  root.style.setProperty('--spread-x', `${x}px`)
  root.style.setProperty('--spread-y', `${y}px`)
  root.classList.add('theme-spread')

  const transition = document.startViewTransition(() => {
    theme.value = next
    return nextTick()
  })
  transition.finished.finally(() => root.classList.remove('theme-spread'))
}

export function useTheme() {
  return { theme, toggleTheme }
}
