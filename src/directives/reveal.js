// v-reveal: a parte entra uma vez, quando chega perto do pé da tela.
// v-reveal="2" atrasa a entrada em dois passos (--i), para coreografar uma seção.
let observer

function getObserver() {
  if (observer === undefined) {
    observer =
      'IntersectionObserver' in window
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                // também revela o que já ficou para cima, depois de um salto por âncora
                if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
                  entry.target.classList.add('is-in')
                  observer.unobserve(entry.target)
                }
              }
            },
            { rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
          )
        : null
  }
  return observer
}

export default {
  beforeMount(el, binding) {
    el.setAttribute('data-reveal', '')
    if (binding.value) el.style.setProperty('--i', binding.value)
  },
  mounted(el) {
    const io = getObserver()
    if (io) io.observe(el)
    else el.classList.add('is-in')
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
