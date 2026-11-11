import { createApp } from 'vue'
import '@fontsource/zilla-slab/400.css'
import '@fontsource/zilla-slab/500.css'
import '@fontsource/zilla-slab/600.css'
import App from './App.vue'
import reveal from './directives/reveal'
import './styles/global.css'

createApp(App).directive('reveal', reveal).mount('#app')
