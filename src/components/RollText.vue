<script setup>
import { computed } from 'vue'

// Texto cujas letras sobem uma a uma quando o ponteiro passa pelo link que o contém.
// Leitores de tela recebem o texto inteiro; as letras soltas ficam escondidas deles.
const props = defineProps({ text: { type: String, required: true } })
const letters = computed(() => [...props.text])
</script>

<template>
  <span class="roll">
    <span class="sr-only">{{ text }}</span>
    <span
      v-for="(letter, index) in letters"
      :key="index"
      class="letter"
      :style="{ '--i': index }"
      aria-hidden="true"
      >{{ letter }}</span
    >
  </span>
</template>

<style scoped>
.roll {
  display: inline-flex;
  overflow: hidden;
  vertical-align: bottom;
  line-height: 1.5;
}

.letter {
  display: inline-block;
  white-space: pre;
  /* a segunda cópia de cada letra é a sombra, uma linha abaixo */
  text-shadow: 0 1.5em 0 currentColor;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

@media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
  .letter {
    transition: transform 420ms var(--ease-out);
    transition-delay: calc(var(--i) * 22ms);
  }

  a:hover .letter,
  a:focus-visible .letter {
    transform: translateY(-1.5em);
  }
}
</style>
