<template>
  <div class="page-container relative">
    <img :src="require('@/assets/bg_hero.svg')" class="hero-bg" />
    <HeroComponent class="hero" />
    <AboutComponent />
  </div>
</template>

<script>
import HeroComponent from '@/components/Landing/HeroComponent.vue'
import AboutComponent from '@/components/Landing/AboutComponent.vue'

export default {
  name: 'HomeView',
  components: {
    HeroComponent,
    AboutComponent,
  },
}
</script>

<style>
.hero {
  position: relative;
  z-index: 1 !important;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>