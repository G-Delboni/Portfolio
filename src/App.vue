<script setup>
import TopBar from './components/TopBar.vue'
import HeroSection from './components/HeroSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import DemoSection from './components/DemoSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import PrinciplesSection from './components/PrinciplesSection.vue'
import NowSection from './components/NowSection.vue'
import ContactSection from './components/ContactSection.vue'
import { useSectionTracking } from './nav'

useSectionTracking()
</script>

<template>
  <div id="top">
    <TopBar />
    <main class="read">
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <NowSection />
      <DemoSection />
      <SkillsSection />
      <PrinciplesSection />
      <ContactSection />
    </main>
  </div>
</template>

<style>
/* uma coluna só, de cima para baixo; a página tem uma única rolagem */
.read > * {
  width: min(var(--measure), 100% - 40px);
  margin-inline: auto;
}

.read > section {
  margin-top: var(--section-gap);
  scroll-margin-top: 72px;
}

/* as duas faixas que ocupam a largura inteira: demonstração e contato */
.read > .band {
  width: 100%;
}

@media (max-width: 720px) {
  .read > section {
    margin-top: 88px;
    scroll-margin-top: 16px;
  }
}
</style>
