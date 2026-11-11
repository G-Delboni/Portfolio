import { onMounted, onUnmounted, ref } from 'vue'

// Seções da barra do topo, na ordem da página.
export const navItems = ['experience', 'projects', 'now', 'demo', 'contact']

// Qual seção está sendo lida, para a barra marcar onde a pessoa está.
const current = ref('')

export function useCurrentSection() {
  return { current }
}

export function useSectionTracking() {
  let observer

  onMounted(() => {
    if (!('IntersectionObserver' in window)) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) current.value = entry.target.dataset.nav || entry.target.id
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    document.querySelectorAll('main section[id]').forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
