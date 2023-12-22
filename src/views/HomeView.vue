<template>
  <div class="page-container relative background pb-16 mb-16">
    <div class="relative">
      <img :src="require('@/assets/bg_hero.svg')" class="hero-bg" />
      <HeroComponent class="front" />
    </div>
    <div class="relative">
      <img :src="require('@/assets/bg_about.svg')" class="about-bg" />
      <AboutComponent class="front" />
    </div>
    <CultureComponent />
  </div>
</template>

<script>
import HeroComponent from "@/components/Landing/HeroComponent.vue";
import AboutComponent from "@/components/Landing/AboutComponent.vue";
import CultureComponent from "@/components/Landing/CultureComponent.vue";
export default {
  name: "HomeView",
  components: {
    HeroComponent,
    AboutComponent,
    CultureComponent,
  },
};
</script>

<style>
.front {
  position: relative;
  z-index: 1 !important;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 2500px;
  margin: 0 auto !important;
}

.about-bg {
  position: absolute;
  bottom: 12.5rem;
  left: 0;
  width: 42%;
  max-width: 640px;
}

@media (max-width: 960px) {
  .hero-bg {
    top: 6rem;
  }

  .about-bg {
    bottom: 41rem;
    width: 38%;
  }
}

@media (max-width: 600px) {
  .about-bg {
    display: none;
  }
}
</style>
