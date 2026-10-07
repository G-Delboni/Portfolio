let observer

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1 },
    )
  }
  return observer
}

export default {
  beforeMount(el) {
    el.setAttribute('data-reveal', '')
  },
  mounted(el) {
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
