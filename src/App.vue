<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import TechList from './components/TechList.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div id="top">
    <TheHeader />
    <main class="page">
      <HeroSection v-reveal />
      <TechList v-reveal />
      <AboutSection v-reveal />
      <ProjectsSection v-reveal />
      <ExperienceSection v-reveal />
      <ContactSection v-reveal />
    </main>
  </div>
</template>

<style scoped>
.page {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 1.25rem;
}
</style>
