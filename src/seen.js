import { onMounted, onUnmounted, ref } from 'vue'

// Fica verdadeiro na primeira vez que o elemento aparece na tela.
export function useSeen(target) {
  const seen = ref(false)
  let observer

  onMounted(() => {
    if (!('IntersectionObserver' in window) || !target.value) {
      seen.value = true
      return
    }
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          seen.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(target.value)
  })

  onUnmounted(() => observer?.disconnect())

  return seen
}
