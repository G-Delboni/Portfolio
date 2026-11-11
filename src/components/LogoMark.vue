<template>
  <!-- símbolo "D com conexões": o traço segue a cor do texto, o ponto central é o verde da marca, o mesmo do destaque do site -->
  <svg class="logo" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <path
      d="M14 6v52h14c14.4 0 26-11.6 26-26S42.4 6 28 6z"
      fill="none"
      stroke="currentColor"
      stroke-width="5.5"
      stroke-linejoin="round"
    />
    <path d="M14 6l17 26M14 58l17-26M54 32H31" stroke="currentColor" stroke-width="3" />
    <circle cx="31" cy="32" r="6" fill="#5cb89a" />
    <circle cx="14" cy="6" r="4.5" fill="currentColor" />
    <circle cx="14" cy="58" r="4.5" fill="currentColor" />
    <circle cx="54" cy="32" r="4.5" fill="currentColor" />
  </svg>
</template>

<style scoped>
.logo {
  display: block;
  width: 1.6em;
  height: 1.6em;
}
</style>
